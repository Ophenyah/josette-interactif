import { describe, expect, it } from 'vitest'
import { REGISTRY } from '../src/data/registry'
import { GLOSSARY } from '../src/data/glossary'
import { EXERCISES } from '../src/data/exercises'
import { renderSafeMarkdownMath } from '../src/math/katex-macros'

const CHAP_MD_FILES = import.meta.glob('../docs/chap*/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>

const ALL_DOC_MD_FILES = import.meta.glob('../docs/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>

describe('Intégrité du registre complet, des 76 exercices et des 119 repères de page', () => {
  it('contient tous les énoncés (1.1)–(1.92), (2.1)–(2.27) et (3.1)–(3.77) (avec variantes de 1984)', () => {
    for (let n = 1; n <= 92; n++) {
      if (n === 87) {
        expect(REGISTRY['1.87']).toBeUndefined()
        continue
      }
      if (n === 9) {
        expect(REGISTRY['1.9-1']).toBeDefined()
        expect(REGISTRY['1.9-2']).toBeDefined()
        continue
      }
      expect(REGISTRY[`1.${n}`], `Énoncé 1.${n} manquant`).toBeDefined()
    }

    for (let n = 1; n <= 27; n++) {
      expect(REGISTRY[`2.${n}`], `Énoncé 2.${n} manquant`).toBeDefined()
    }

    for (let n = 1; n <= 77; n++) {
      if (n === 73) {
        expect(REGISTRY['3.73-1']).toBeDefined()
        expect(REGISTRY['3.73-2']).toBeDefined()
        expect(REGISTRY['3.73-3']).toBeDefined()
        continue
      }
      expect(REGISTRY[`3.${n}`], `Énoncé 3.${n} manquant`).toBeDefined()
    }

    for (const extraId of [
      'thm-bezout',
      'not-3-coprime',
      'thm-gauss',
      '3.70-bis',
      '3.71-bis',
      '3.72-bis',
      '3.75-bis',
      'eq-3-1-prime',
      'eq-3-30-prime'
    ]) {
      expect(REGISTRY[extraId], `Entrée ${extraId} manquante`).toBeDefined()
    }

    for (let e = 1; e <= 35; e++) {
      expect(REGISTRY[`eq-3-${e}`], `Équation eq-3-${e} manquante`).toBeDefined()
    }
  })

  it('vérifie l’unicité des orderIndex, la causalité de dependsOn et la compilation KaTeX de chaque résumé', () => {
    const seenOrder = new Set<number>()
    for (const [id, entry] of Object.entries(REGISTRY)) {
      expect(entry.id).toBe(id)
      expect(entry.anchor).toBe(`ref-${id}`)
      expect(seenOrder.has(entry.orderIndex), `orderIndex dupliqué: ${entry.orderIndex}`).toBe(false)
      seenOrder.add(entry.orderIndex)

      for (const dep of entry.dependsOn) {
        const target = REGISTRY[dep]
        expect(target, `dependsOn inconnu '${dep}' dans '${id}'`).toBeDefined()
        expect(
          target.orderIndex,
          `Dépendance non causale: '${id}' (${entry.orderIndex}) -> '${dep}' (${target.orderIndex})`
        ).toBeLessThan(entry.orderIndex)
      }

      expect(() => renderSafeMarkdownMath(entry.label, { inline: true, throwOnMathError: true })).not.toThrow()
      expect(() => renderSafeMarkdownMath(entry.summaryTex, { throwOnMathError: true })).not.toThrow()
    }
  })

  it('vérifie zéro <MathRef> et zéro <GlossaryTerm> orphelins, et compile tout le glossaire', () => {
    for (const [gid, g] of Object.entries(GLOSSARY)) {
      expect(g.id).toBe(gid)
      expect(() => renderSafeMarkdownMath(g.term, { inline: true, throwOnMathError: true })).not.toThrow()
      expect(() => renderSafeMarkdownMath(g.modernEquivalent, { inline: true, throwOnMathError: true })).not.toThrow()
      expect(() => renderSafeMarkdownMath(g.explanationTex, { throwOnMathError: true })).not.toThrow()
    }

    for (const [path, content] of Object.entries(ALL_DOC_MD_FILES)) {
      const mathRefMatches = content.matchAll(/<MathRef\s+[^>]*id="([^"]+)"/g)
      for (const m of mathRefMatches) {
        expect(REGISTRY[m[1]], `<MathRef id="${m[1]}"> orphelin dans ${path}`).toBeDefined()
      }

      const glossaryMatches = content.matchAll(/<GlossaryTerm\s+[^>]*id="([^"]+)"/g)
      for (const m of glossaryMatches) {
        expect(GLOSSARY[m[1]], `<GlossaryTerm id="${m[1]}"> orphelin dans ${path}`).toBeDefined()
      }
    }
  })

  it('contient 33 + 10 + 33 = 76 exercices, compile tous les énoncés et laisse le chap. III sans aides ni corrigés', () => {
    const c1 = Object.values(EXERCISES).filter((e) => e.chapter === 1)
    const c2 = Object.values(EXERCISES).filter((e) => e.chapter === 2)
    const c3 = Object.values(EXERCISES).filter((e) => e.chapter === 3)
    expect(c1.length).toBe(33)
    expect(c2.length).toBe(10)
    expect(c3.length).toBe(33)

    for (let i = 1; i <= 33; i++) {
      const id = `c1-e${String(i).padStart(2, '0')}`
      expect(EXERCISES[id]).toBeDefined()
      expect(() => renderSafeMarkdownMath(EXERCISES[id].statementTex, { throwOnMathError: true })).not.toThrow()
      expect(EXERCISES[id].hintTex.trim().length).toBeGreaterThan(20)
      expect(EXERCISES[id].correctionTex.trim().length).toBeGreaterThan(20)
      expect(() => renderSafeMarkdownMath(EXERCISES[id].hintTex, { throwOnMathError: true })).not.toThrow()
      expect(() => renderSafeMarkdownMath(EXERCISES[id].correctionTex, { throwOnMathError: true })).not.toThrow()
    }
    for (let i = 1; i <= 10; i++) {
      const id = `c2-e${String(i).padStart(2, '0')}`
      expect(EXERCISES[id]).toBeDefined()
      expect(() => renderSafeMarkdownMath(EXERCISES[id].statementTex, { throwOnMathError: true })).not.toThrow()
      expect(EXERCISES[id].hintTex.trim().length).toBeGreaterThan(20)
      expect(EXERCISES[id].correctionTex.trim().length).toBeGreaterThan(20)
      expect(() => renderSafeMarkdownMath(EXERCISES[id].hintTex, { throwOnMathError: true })).not.toThrow()
      expect(() => renderSafeMarkdownMath(EXERCISES[id].correctionTex, { throwOnMathError: true })).not.toThrow()
    }
    for (let i = 1; i <= 33; i++) {
      const id = `c3-e${String(i).padStart(2, '0')}`
      expect(EXERCISES[id]).toBeDefined()
      expect(() => renderSafeMarkdownMath(EXERCISES[id].statementTex, { throwOnMathError: true })).not.toThrow()
      expect(EXERCISES[id].hintTex).toBe('')
      expect(EXERCISES[id].correctionTex).toBe('')
    }
  })

  it('contient au moins un repère <PageRef :page="p" /> pour chacune des 119 pages (17 à 135)', () => {
    const keys = Object.keys(CHAP_MD_FILES).sort()
    expect(keys.length).toBe(12)
    const allContent = Object.values(CHAP_MD_FILES).join('\n')

    for (let p = 17; p <= 135; p++) {
      expect(
        allContent.includes(`<PageRef :page="${p}"`),
        `Repère <PageRef :page="${p}" /> manquant`
      ).toBe(true)
    }
  })
})
