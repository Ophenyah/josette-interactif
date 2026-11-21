import { expect, test, type Page } from '@playwright/test'

const ALL_ROUTES = [
  '/',
  '/chap1/1-notion-de-groupe.html',
  '/chap1/2-sous-groupes.html',
  '/chap1/3-morphismes.html',
  '/chap1/4-produit-direct.html',
  '/chap1/exercices.html',
  '/chap2/1-classes-lagrange.html',
  '/chap2/2-quotient-isomorphisme.html',
  '/chap2/exercices.html',
  '/chap3/1-groupes-monogenes.html',
  '/chap3/2-groupes-symetriques.html',
  '/chap3/3-groupes-diedraux.html',
  '/chap3/exercices.html',
  '/glossaire.html',
  '/dependances.html'
] as const

const SCREENSHOT_ROUTES: Record<string, string> = {
  '/': 'home',
  '/chap1/1-notion-de-groupe.html': 'chap1-s1',
  '/chap1/2-sous-groupes.html': 'chap1-s2',
  '/chap2/1-classes-lagrange.html': 'chap2-s1',
  '/chap2/2-quotient-isomorphisme.html': 'chap2-s2',
  '/chap3/1-groupes-monogenes.html': 'chap3-s1',
  '/chap3/2-groupes-symetriques.html': 'chap3-s2',
  '/chap3/3-groupes-diedraux.html': 'chap3-s3',
  '/chap3/exercices.html': 'chap3-exercices',
  '/dependances.html': 'dependances',
  '/glossaire.html': 'glossaire'
}

async function setTheme(page: Page, dark: boolean) {
  await page.evaluate((isDark) => {
    const html = document.documentElement
    if (isDark) html.classList.add('dark')
    else html.classList.remove('dark')
  }, dark)
}

async function auditPage(page: Page, route: string, viewportName: string, themeName: string) {
  const katexErrors = await page.locator('.katex-error, .katex-live-error').count()
  expect(katexErrors, `${route} (${viewportName}, ${themeName}) katex-error`).toBe(0)

  const rawDollars = await page.evaluate(() => {
    const main = document.querySelector('.vp-doc') ?? document.body
    const clone = main.cloneNode(true) as HTMLElement
    clone.querySelectorAll('textarea, input, pre, code, script, style, .katex').forEach((el) => el.remove())
    const text = clone.textContent ?? ''
    const matches = text.match(/\$[^$]*\$/g) ?? []
    const singleDollars = (text.match(/\$/g) ?? []).length
    return { matches, singleDollars }
  })
  expect(
    rawDollars.singleDollars,
    `${route} (${viewportName}, ${themeName}) raw '$' leak: ${JSON.stringify(rawDollars.matches)}`
  ).toBe(0)

  const overflowPx = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  )
  expect(
    overflowPx,
    `${route} (${viewportName}, ${themeName}) horizontal overflow ${overflowPx}px`
  ).toBeLessThanOrEqual(1)
}

test.describe('QA Globale Josette Calais v2 (Chapitres I à III)', () => {
  test('1. Audit complet des 15 routes (Desktop/Mobile, Clair/Sombre, 0 CDN, liens et captures)', async ({
    page
  }) => {
    test.setTimeout(180_000)
    const externalRequests: string[] = []
    const consoleErrors: string[] = []
    const pageErrors: string[] = []

    await page.route('**/*', (route) => {
      const url = route.request().url()
      if (
        url.startsWith('http://127.0.0.1:4173') ||
        url.startsWith('data:') ||
        url.startsWith('blob:')
      ) {
        route.continue()
      } else {
        externalRequests.push(url)
        route.abort()
      }
    })

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })
    page.on('pageerror', (err) => {
      pageErrors.push(err.message)
    })

    const anchorsByPath = new Map<string, Set<string>>()
    const internalLinksToCheck: Array<{ source: string; targetPath: string; hash: string }> = []

    // Desktop 1280x900 : Light + Dark + collecte liens/ancres
    await page.setViewportSize({ width: 1280, height: 900 })
    for (const route of ALL_ROUTES) {
      const resp = await page.goto(route, { waitUntil: 'networkidle' })
      expect(resp?.status(), `HTTP status ${route}`).toBe(200)

      await setTheme(page, false)
      await auditPage(page, route, 'desktop', 'light')

      if (SCREENSHOT_ROUTES[route]) {
        await page.screenshot({
          path: `e2e/screenshots/${SCREENSHOT_ROUTES[route]}-desktop-light.png`
        })
      }

      await setTheme(page, true)
      await auditPage(page, route, 'desktop', 'dark')

      if (route === '/chap2/1-classes-lagrange.html' || route === '/chap3/3-groupes-diedraux.html') {
        await page.screenshot({
          path: `e2e/screenshots/${SCREENSHOT_ROUTES[route]}-desktop-dark.png`
        })
      }

      const pageMeta = await page.evaluate(() => {
        const ids = Array.from(document.querySelectorAll('[id]')).map((el) => el.id)
        const links = Array.from(document.querySelectorAll('.vp-doc a[href]'))
          .map((a) => a.getAttribute('href') ?? '')
          .filter((h) => h.startsWith('/') || h.startsWith('#'))
        return { ids, links }
      })
      anchorsByPath.set(route, new Set(pageMeta.ids))
      for (const href of pageMeta.links) {
        if (href.startsWith('#')) {
          internalLinksToCheck.push({ source: route, targetPath: route, hash: href.slice(1) })
        } else {
          const [rawPath, rawHash = ''] = href.split('#')
          const normPath =
            rawPath === '/'
              ? '/'
              : rawPath.endsWith('.html')
                ? rawPath
                : `${rawPath.replace(/\/$/, '')}.html`
          internalLinksToCheck.push({ source: route, targetPath: normPath, hash: rawHash })
        }
      }
    }

    // Vérifier chaque lien interne et chaque ancre
    for (const link of internalLinksToCheck) {
      const targetAnchors = anchorsByPath.get(link.targetPath)
      expect(
        targetAnchors,
        `Lien interne cassé depuis ${link.source} vers ${link.targetPath}`
      ).toBeDefined()
      if (link.hash) {
        expect(
          targetAnchors!.has(link.hash),
          `Ancre #${link.hash} manquante sur ${link.targetPath} (depuis ${link.source})`
        ).toBe(true)
      }
    }

    // Mobile 390x844 : Light + Dark
    await page.setViewportSize({ width: 390, height: 844 })
    for (const route of ALL_ROUTES) {
      await page.goto(route, { waitUntil: 'networkidle' })
      await setTheme(page, false)
      await auditPage(page, route, 'mobile', 'light')

      if (route === '/chap1/1-notion-de-groupe.html' || route === '/chap3/2-groupes-symetriques.html') {
        await page.screenshot({
          path: `e2e/screenshots/${SCREENSHOT_ROUTES[route]}-mobile-light.png`
        })
      }

      await setTheme(page, true)
      await auditPage(page, route, 'mobile', 'dark')

      if (route === '/chap3/exercices.html') {
        await page.screenshot({
          path: `e2e/screenshots/${SCREENSHOT_ROUTES[route]}-mobile-dark.png`
        })
      }
    }

    expect(externalRequests, 'Requêtes CDN externes détectées').toEqual([])
    expect(consoleErrors, 'Erreurs console détectées').toEqual([])
    expect(pageErrors, 'Erreurs pageerror détectées').toEqual([])
  })

  test('2. Interactivité Niveaux 1–4, 13 laboratoires, graphe des dépendances & mode hors-ligne', async ({
    page,
    context
  }) => {
    test.setTimeout(120_000)
    await page.setViewportSize({ width: 1280, height: 900 })

    // I § 1 : MathRef, GlossaryTerm, ProofBlock pas à pas, MicroChallenge, PermutationLab & CayleyLab
    await page.goto('/chap1/1-notion-de-groupe.html', { waitUntil: 'networkidle' })
    const firstRefWrap = page.locator('.jc-ref-wrap').first()
    await firstRefWrap.hover()
    await expect(firstRefWrap.locator('.jc-popover')).toBeVisible()

    const firstGlossWrap = page.locator('.jc-glossary-wrap:has(.jc-glossary-btn)').first()
    await firstGlossWrap.locator('.jc-glossary-btn').click()
    await expect(firstGlossWrap.locator('.jc-popover')).toBeVisible()

    const challengeBtn = page.getByRole('button', { name: /Vérifier avec l’élément de réponse/ }).first()
    await challengeBtn.click()

    const permLab = page.locator('[data-lab="permutations"]')
    await expect(permLab).toBeVisible()
    await permLab.getByRole('button', { name: 'D₄ ⊂ S₄ (carré)' }).click()
    await permLab.getByRole('button', { name: 'Animer τ puis σ' }).click()

    const cayleyLab = page.locator('[data-lab="cayley"]')
    await cayleyLab.getByRole('button', { name: 'Loi non associative (ℤ/(3), −)' }).click()
    await expect(cayleyLab.locator('[data-lab-verdict]')).toBeVisible()

    // I § 2 : ProofBlock pas à pas avec "Pourquoi cette étape ?", RootsUnity, SubgroupLattice, DirectSum
    await page.goto('/chap1/2-sous-groupes.html', { waitUntil: 'networkidle' })
    const steppedProof = page.locator('.jc-proof-box:has(.jc-proof-header button)').first()
    await steppedProof.getByRole('button', { name: 'Lecture pas à pas', exact: true }).click()
    await expect(steppedProof.locator('.jc-step-card').first()).toBeVisible()
    await steppedProof.getByRole('button', { name: 'Pourquoi cette étape ?', exact: true }).first().click()
    await expect(steppedProof.locator('.jc-why-box').first()).toBeVisible()
    const rootsLab = page.locator('[data-lab="roots-unity"]')
    await rootsLab.getByRole('button', { name: 'Augmenter n' }).click()
    await rootsLab.getByRole('button', { name: 'Animer l’addition des arguments' }).click()

    const latticeLab = page.locator('[data-lab="subgroup-lattice"]')
    await latticeLab.getByRole('button', { name: 'Tester HK vs KH (Prop. 1.47)' }).click()

    const directSumLab = page.locator('[data-lab="direct-sum"]')
    await directSumLab.getByRole('button', { name: 'Trouver G = H ⊕ K' }).click()

    // I § 3 & § 4 : Morphism, CayleyTheorem, DirectProduct
    await page.goto('/chap1/3-morphismes.html', { waitUntil: 'networkidle' })
    await page.locator('[data-lab="morphism"]').getByRole('button', { name: 'Morphisme trivial' }).click()
    await page.locator('[data-lab="cayley-theorem"]').getByRole('button', { name: /Translation à droite/ }).click()

    await page.goto('/chap1/4-produit-direct.html', { waitUntil: 'networkidle' })
    const dpLab = page.locator('[data-lab="direct-product"]')
    await dpLab.getByRole('button', { name: 'ℤ/(2) × ℤ/(3)' }).click()
    await dpLab.getByRole('tab', { name: 'Propriété universelle (Thm 1.91)' }).click()

    // II § 1 & § 2 : CosetsLagrange & QuotientIso
    await page.goto('/chap2/1-classes-lagrange.html', { waitUntil: 'networkidle' })
    const cosetsLab = page.locator('[data-lab="cosets-lagrange"]')
    await cosetsLab.getByRole('tab', { name: 'Formule des indices (Thm 2.18)' }).click()

    await page.goto('/chap2/2-quotient-isomorphisme.html', { waitUntil: 'networkidle' })
    const qLab = page.locator('[data-lab="quotient-iso"]')
    await qLab.getByRole('tab', { name: /Premier théorème d’isomorphisme/ }).click()

    // III § 1, § 2, § 3 : CyclicEuler, SymmetricCycles, Dihedral (avec réseau coupé après chargement!)
    await page.goto('/chap3/1-groupes-monogenes.html', { waitUntil: 'networkidle' })
    await context.setOffline(true)
    const cyclicLab = page.locator('[data-lab="cyclic-euler"]')
    await cyclicLab.getByRole('button', { name: 'n = 15' }).click()
    await cyclicLab.getByRole('button', { name: 'Théorème chinois (Thm 3.29)' }).click()
    await cyclicLab.getByRole('button', { name: '2 × 6 (non cyclique)' }).click()
    await expect(cyclicLab.locator('[data-lab-verdict]')).toHaveClass(/ko/)
    await expect(page.locator('.katex-error')).toHaveCount(0)

    await context.setOffline(false)
    await page.goto('/chap3/2-groupes-symetriques.html', { waitUntil: 'networkidle' })
    const symLab = page.locator('[data-lab="symmetric-cycles"]')
    await symLab.getByRole('button', { name: 'Exemple (3.73) — S₈' }).click()
    await expect(symLab.locator('[data-lab-verdict]')).toHaveClass(/ok/)
    await page.screenshot({ path: 'e2e/screenshots/chap3-lab-symmetric-desktop-light.png' })

    await page.goto('/chap3/3-groupes-diedraux.html', { waitUntil: 'networkidle' })
    const dihLab = page.locator('[data-lab="dihedral"]')
    await dihLab.getByRole('button', { name: 'D₄ (carré)' }).click()
    await dihLab.getByRole('button', { name: 'ρ₁∘σ' }).click()
    await expect(dihLab.locator('[data-lab-verdict]')).toBeVisible()
    await page.screenshot({ path: 'e2e/screenshots/chap3-lab-dihedral-desktop-light.png' })

    // Graphe des dépendances (inclut Chapitre III)
    await page.goto('/dependances.html', { waitUntil: 'networkidle' })
    const depLab = page.locator('[data-lab="dependencies"]')
    await depLab.getByRole('button', { name: 'Chapitre III' }).click()
    await expect(depLab.locator('.jc-fold-badge').first()).toContainText(/nœuds/)
    await page.screenshot({ path: 'e2e/screenshots/dependances-c3-desktop-light.png' })
  })

  test('3. Atelier d’exercices de bout en bout (Chap. I–III, export sans théorèmes, chap. III sans corrigés)', async ({
    page
  }) => {
    test.setTimeout(90_000)
    await page.setViewportSize({ width: 1280, height: 900 })

    // Vérifier comptage exact sur Chap I (33) et Chap II (10)
    await page.goto('/chap1/exercices.html', { waitUntil: 'networkidle' })
    await expect(page.locator('.jc-exo-card')).toHaveCount(33)
    await page.goto('/chap2/exercices.html', { waitUntil: 'networkidle' })
    await expect(page.locator('.jc-exo-card')).toHaveCount(10)

    // Vérifier Chapitre III : 33 cartes, ZERO indice ni correction
    await page.goto('/chap3/exercices.html', { waitUntil: 'networkidle' })
    await expect(page.locator('.jc-exo-card')).toHaveCount(33)
    await expect(page.locator('.jc-exo-card .jc-fold.kind-indice')).toHaveCount(0)
    await expect(page.locator('.jc-exo-card .jc-fold.kind-correction')).toHaveCount(0)

    // Scénario complet sur c3-e04 (Fermat / Euler) : saisie avec <, >, fraction, Z, matrice
    const card = page.locator('.jc-exo-card[data-exo-id="c3-e04"]')
    const draftText =
      'Soient $a < b$ et $c > d$ avec $1 < n$ et $\\frac{1}{2} \\in \\Q$ ; dans $\\Zn{n}$, $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ vérifie $a^{\\varphi(n)} \\equiv 1 \\pmod{n}$.'
    await card.locator('.jc-textarea').fill(draftText)
    await card.locator('.jc-doubts-input').fill('Vérifier l’étape sur G_n.')
    await card.locator('select').first().selectOption('ready')

    // Aperçu KaTeX sécurisé : 0 erreur, < et > échappés correctement
    const preview = card.locator('.jc-preview-box').first()
    await expect(preview.locator('.katex-live-error')).toHaveCount(0)
    expect(await preview.locator('.katex').count()).toBeGreaterThanOrEqual(4)

    // Persistance après rechargement
    await page.reload({ waitUntil: 'networkidle' })
    const cardAfterReload = page.locator('.jc-exo-card[data-exo-id="c3-e04"]')
    await expect(cardAfterReload.locator('.jc-textarea')).toHaveValue(draftText)
    await expect(cardAfterReload.locator('.jc-doubts-input')).toHaveValue('Vérifier l’étape sur G_n.')

    // Export unitaire : doit contenir contexte + énoncé + résolution, SANS liste de théorèmes !
    await cardAfterReload.getByRole('button', { name: 'Copier pour un agent' }).click()
    const exportPre = cardAfterReload.locator('details pre')
    await expect(exportPre).toBeAttached()
    const exportedText = await exportPre.textContent()
    expect(exportedText).toContain("## 1. Contexte de l'exercice")
    expect(exportedText).toContain('## 2. Énoncé complet')
    expect(exportedText).toContain("## 3. Rédaction de l'étudiant")
    expect(exportedText).toContain('Théorème d’Euler')
    expect(exportedText).toContain(draftText)
    expect(exportedText).not.toContain('Résultats déjà établis')
    expect(exportedText).not.toContain('Définition (1.3)')
    expect(exportedText).not.toContain('Théorème (2.9)')

    // Export par lot (téléchargement)
    const batchDlPromise = page.waitForEvent('download')
    await page.getByRole('button', { name: 'Télécharger le lot' }).click()
    const batchDl = await batchDlPromise
    expect(batchDl.suggestedFilename()).toBe('josette-chap3-lot.md')

    // Sauvegarde JSON, nettoyage localStorage, puis restauration JSON
    const backupPromise = page.waitForEvent('download')
    await page.getByRole('button', { name: 'Sauvegarde JSON' }).click()
    const backupDl = await backupPromise
    const backupPath = await backupDl.path()
    expect(backupPath).toBeTruthy()

    await page.evaluate(() => localStorage.clear())
    await page.reload({ waitUntil: 'networkidle' })
    await expect(page.locator('.jc-exo-card[data-exo-id="c3-e04"] .jc-textarea')).toHaveValue('')

    const fileInput = page.locator('input[type="file"][accept*="json"]')
    await fileInput.setInputFiles(backupPath!)
    await expect(page.locator('.jc-exo-card[data-exo-id="c3-e04"] .jc-textarea')).toHaveValue(draftText)

    // Vérifier aussi sur Chapitre I le mode entraînement et l'export sans théorèmes
    await page.goto('/chap1/exercices.html', { waitUntil: 'networkidle' })
    const c1Card = page.locator('.jc-exo-card[data-exo-id="c1-e03"]')
    await expect(c1Card.locator('.jc-fold.kind-indice')).toHaveCount(1)
    await expect(c1Card.locator('.jc-fold.kind-correction')).toHaveCount(1)
    await page.getByLabel('Mode entraînement (masquer les corrections)').check()
    await expect(c1Card.locator('.jc-fold.kind-correction')).toHaveCount(0)
  })
})
