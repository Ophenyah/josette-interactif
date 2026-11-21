import { describe, expect, it } from 'vitest'
import { escapeHtml, renderMath, renderSafeMarkdownMath } from '../src/math/katex-macros'

describe('Pipeline KaTeX strict et sécurisé', () => {
  it('rend les macros communes et les accents français dans \\text{}', () => {
    const html = renderMath('\\Ker f \\simeq \\Zn{n} \\text{ — élément unité}')
    expect(html).toContain('katex')
    expect(html).toContain('élément unité')
  })

  it('échoue immédiatement en mode strict sur une commande inconnue', () => {
    expect(() => renderMath('\\commandeInexistante{x}')).toThrow()
  })

  it('échappe <, >, & hors math mais rend correctement $x < y$ et les matrices', () => {
    const input =
      'Test a < b & c > d puis $x < y$ et $\\frac{1}{2} \\in \\Z$ avec $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ et <script>alert(1)</script>'
    const html = renderSafeMarkdownMath(input, { throwOnMathError: false })
    expect(html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;')
    expect(html).not.toContain('<script>')
    expect(html).toContain('a &lt; b &amp; c &gt; d')
    expect(html).toContain('class="katex"')
    expect(html).not.toContain('katex-live-error')
  })

  it('retourne une pastille non bloquante en mode aperçu live sur syntaxe incomplète', () => {
    const html = renderSafeMarkdownMath('Calcul : $\\frac{1$', {
      throwOnMathError: false
    })
    expect(html).toContain('katex-live-error')
  })

  it('escapeHtml échappe les 5 caractères spéciaux', () => {
    expect(escapeHtml(`<&>"'`)).toBe('&lt;&amp;&gt;&quot;&#39;')
  })

  it('prend en charge $$...$$, \\(...\\), \\[...\\], \\$ échappé et mode inline', () => {
    const html = renderSafeMarkdownMath(
      'Prix \\$5, inline \\(x^2\\) et bloc $$y = \\frac{1}{2}$$ puis \\[z = 1\\]\n\nParagraphe 2.',
      { throwOnMathError: true }
    )
    expect(html).toContain('$5')
    expect(html).toContain('<p>')
    expect(html).toContain('katex-display')

    const inlineHtml = renderSafeMarkdownMath('Titre\nsur deux lignes $x^2$', {
      inline: true
    })
    expect(inlineHtml).not.toContain('<p>')
    expect(inlineHtml).toContain('Titre sur deux lignes')

    expect(() =>
      renderSafeMarkdownMath('$\\badCmd$', { throwOnMathError: true })
    ).toThrow()
  })

  it('ne corrompt jamais les attributs SVG <path d="..."> de KaTeX par <br>', () => {
    const html = renderSafeMarkdownMath(
      'Formule avec grand délimiteur : $\\left(\\dfrac{\\Z}{n\\Z}\\right)$ et racine $\\sqrt{x + 1}$.',
      { throwOnMathError: true }
    )
    const svgMatches = html.match(/<svg[\s\S]*?<\/svg>/g) ?? []
    expect(svgMatches.length).toBeGreaterThan(0)
    for (const svg of svgMatches) {
      expect(svg).not.toContain('<br>')
      expect(svg).not.toContain('<p>')
    }
  })
})
