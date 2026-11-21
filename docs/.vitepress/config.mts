import { defineConfig } from 'vitepress'
import { katex } from '@mdit/plugin-katex'
import { KATEX_OPTIONS, renderMath } from '../../src/math/katex-macros'

export default defineConfig({
  lang: 'fr-FR',
  title: 'Éléments de théorie des groupes',
  description:
    'Édition web interactive et autonome des chapitres I à III de Josette Calais (1984)',
  appearance: true,
  srcExclude: ['../.scans/**'],
  themeConfig: {
    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },
    outline: {
      level: [2, 3],
      label: 'Sur cette page'
    },
    darkModeSwitchLabel: 'Apparence',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Passer au thème sombre',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Haut de page',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher',
            buttonAriaLabel: 'Rechercher dans le cours'
          },
          modal: {
            noResultsText: 'Aucun résultat pour',
            resetButtonTitle: 'Effacer la recherche',
            footer: {
              selectText: 'ouvrir',
              navigateText: 'naviguer',
              closeText: 'fermer'
            }
          }
        }
      }
    },
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Chapitre I', link: '/chap1/1-notion-de-groupe' },
      { text: 'Chapitre II', link: '/chap2/1-classes-lagrange' },
      { text: 'Chapitre III', link: '/chap3/1-groupes-monogenes' },
      { text: 'Exercices', link: '/chap1/exercices' },
      { text: 'Glossaire', link: '/glossaire' },
      { text: 'Dépendances', link: '/dependances' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [{ text: 'Préface & mode d’emploi', link: '/' }]
      },
      {
        text: 'Chapitre I — Structure de groupe',
        items: [
          { text: '1 — Notion de groupe (pp. 17–29)', link: '/chap1/1-notion-de-groupe' },
          { text: '2 — Sous-groupe (pp. 29–40)', link: '/chap1/2-sous-groupes' },
          { text: '3 — Morphismes de groupes (pp. 41–54)', link: '/chap1/3-morphismes' },
          { text: '4 — Produit direct de groupes (pp. 54–61)', link: '/chap1/4-produit-direct' },
          { text: 'Exercices — Chapitre I (pp. 61–70)', link: '/chap1/exercices' }
        ]
      },
      {
        text: 'Chapitre II — Classes modulo un sous-groupe',
        items: [
          { text: '1 — Classes & Lagrange (pp. 71–79)', link: '/chap2/1-classes-lagrange' },
          { text: '2 — Quotient & isomorphisme (pp. 79–84)', link: '/chap2/2-quotient-isomorphisme' },
          { text: 'Exercices — Chapitre II (pp. 84–88)', link: '/chap2/exercices' }
        ]
      },
      {
        text: 'Chapitre III — Groupes monogènes, Sₙ et Dₙ',
        items: [
          { text: '1 — Groupes monogènes (pp. 89–105)', link: '/chap3/1-groupes-monogenes' },
          { text: '2 — Groupes symétriques Sₙ (pp. 105–120)', link: '/chap3/2-groupes-symetriques' },
          { text: '3 — Groupes diédraux Dₙ (pp. 120–126)', link: '/chap3/3-groupes-diedraux' },
          { text: 'Exercices — Chapitre III (pp. 126–135)', link: '/chap3/exercices' }
        ]
      },
      {
        text: 'Outils transversaux',
        items: [
          { text: 'Glossaire (1984 ↔ Prépa)', link: '/glossaire' },
          { text: 'Architecture & dépendances', link: '/dependances' }
        ]
      }
    ]
  },
  markdown: {
    config(md) {
      md.use(katex as unknown as Parameters<typeof md.use>[0], KATEX_OPTIONS)
      // Surcharge stricte : toute erreur LaTeX dans un .md doit faire échouer le build immédiatement
      md.renderer.rules.math_inline = (tokens, idx) =>
        renderMath(tokens[idx].content, false)
      md.renderer.rules.math_block = (tokens, idx) =>
        `<div class="katex-block-wrap">${renderMath(tokens[idx].content, true)}</div>`
    }
  }
})
