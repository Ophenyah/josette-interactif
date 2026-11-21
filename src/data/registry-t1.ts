import type { RegistryEntry } from './registry'

const ROUTE_T1 = '/chap1/1-notion-de-groupe'

export const REGISTRY_T1: Record<string, RegistryEntry> = {
  '1.1': {
    id: '1.1',
    label: 'Définitions (1.1)',
    shortLabel: '(1.1)',
    kind: 'def',
    chapter: 1,
    section: 'I § 1 A',
    page: 17,
    route: ROUTE_T1,
    anchor: 'ref-1.1',
    orderIndex: 100,
    summaryTex:
      'Loi de composition interne sur $E$ : application $E \\times E \\to E$. Définitions de l’associativité, de la commutativité, d’un élément neutre $e$ ($x\\cdot e = e\\cdot x = x$) et d’un élément symétrisable ($x\'\\cdot x = x\\cdot x\' = e$).',
    dependsOn: []
  },
  '1.2': {
    id: '1.2',
    label: 'Remarque (1.2)',
    shortLabel: '(1.2)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 1 A',
    page: 18,
    route: ROUTE_T1,
    anchor: 'ref-1.2',
    orderIndex: 103,
    summaryTex:
      'Si un élément neutre $e$ existe dans $(E, \\cdot)$, il est unique et il est son propre symétrique ($e \\cdot e = e$).',
    dependsOn: ['1.1']
  },
  '1.3': {
    id: '1.3',
    label: 'Définition (1.3)',
    shortLabel: '(1.3)',
    kind: 'def',
    chapter: 1,
    section: 'I § 1 B',
    page: 18,
    route: ROUTE_T1,
    anchor: 'ref-1.3',
    orderIndex: 106,
    summaryTex:
      'Un ensemble non vide $G$ muni d’une loi interne $\\cdot$ est un **groupe** si : $(\\mathrm{G}_1)$ la loi est associative ; $(\\mathrm{G}_2)$ il existe un élément neutre $e$ ; $(\\mathrm{G}_3)$ tout élément de $G$ est symétrisable.',
    dependsOn: ['1.1']
  },
  '1.4': {
    id: '1.4',
    label: 'Remarques (1.4)',
    shortLabel: '(1.4)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 1 B',
    page: 18,
    route: ROUTE_T1,
    anchor: 'ref-1.4',
    orderIndex: 109,
    summaryTex:
      '$1^\\circ$ Un groupe $G$ a un unique élément neutre $e$. $2^\\circ$ Dans un groupe $G$, tout élément $x$ a un unique symétrique $x\'$.',
    dependsOn: ['1.2', '1.3']
  },
  '1.5': {
    id: '1.5',
    label: 'Définition (1.5)',
    shortLabel: '(1.5)',
    kind: 'def',
    chapter: 1,
    section: 'I § 1 B',
    page: 19,
    route: ROUTE_T1,
    anchor: 'ref-1.5',
    orderIndex: 112,
    summaryTex:
      'Un groupe $G$ est dit *abélien* (ou *commutatif*) si sa loi de composition interne est commutative.',
    dependsOn: ['1.1', '1.3']
  },
  '1.6': {
    id: '1.6',
    label: 'Remarque (1.6)',
    shortLabel: '(1.6)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 1 B',
    page: 19,
    route: ROUTE_T1,
    anchor: 'ref-1.6',
    orderIndex: 115,
    summaryTex:
      'Dans un groupe non abélien $(G, \\cdot)$, on a en général $x\\cdot y \\neq y\\cdot x$, mais la commutativité peut être vérifiée pour certains couples (par exemple avec $y = e$).',
    dependsOn: ['1.5']
  },
  '1.7': {
    id: '1.7',
    label: 'Définition (1.7)',
    shortLabel: '(1.7)',
    kind: 'def',
    chapter: 1,
    section: 'I § 1 B',
    page: 19,
    route: ROUTE_T1,
    anchor: 'ref-1.7',
    orderIndex: 118,
    summaryTex:
      'Dans $(E, \\cdot)$, deux éléments $x$ et $y$ *commutent* (ou sont *permutables*) si $x \\cdot y = y \\cdot x$.',
    dependsOn: ['1.1']
  },
  '1.8': {
    id: '1.8',
    label: 'Définition (1.8)',
    shortLabel: '(1.8)',
    kind: 'def',
    chapter: 1,
    section: 'I § 1 B',
    page: 19,
    route: ROUTE_T1,
    anchor: 'ref-1.8',
    orderIndex: 121,
    summaryTex:
      'Un groupe $G$ est dit *fini* s’il n’a qu’un nombre fini d’éléments ; son cardinal s’appelle *l’ordre du groupe* $G$ et est noté $o(G)$ (ou $|G|$).',
    dependsOn: ['1.3']
  },
  '1.9-1': {
    id: '1.9-1',
    label: 'Remarque (1.9)',
    shortLabel: '(1.9)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 1 B',
    page: 19,
    route: ROUTE_T1,
    anchor: 'ref-1.9-1',
    orderIndex: 124,
    summaryTex:
      'Conventions de notation multiplicative ($(x, y) \\mapsto xy$, neutre $e$ ou $1$ dit *élément unité*, inverse $x^{-1}$) et additive ($(x, y) \\mapsto x + y$, neutre $0$, opposé $-x$). La notation multiplicative est adoptée pour les propriétés générales.',
    dependsOn: ['1.3', '1.5']
  },
  'eq-1-1': {
    id: 'eq-1-1',
    label: 'Équation (1)',
    shortLabel: '(1)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 1 C',
    page: 20,
    route: ROUTE_T1,
    anchor: 'ref-eq-1-1',
    orderIndex: 127,
    summaryTex:
      'Associativité généralisée ($1 \\leqslant s < r < n$) : $(x_1 x_2 \\dots x_r)(x_{r+1} x_{r+2} \\dots x_n) = (x_1 x_2 \\dots x_s)(x_{s+1} x_{s+2} \\dots x_n)$.',
    dependsOn: ['1.3', '1.9-1']
  },
  'eq-1-2': {
    id: 'eq-1-2',
    label: 'Équation (2)',
    shortLabel: '(2)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 1 C',
    page: 21,
    route: ROUTE_T1,
    anchor: 'ref-eq-1-2',
    orderIndex: 130,
    summaryTex:
      'Produit des puissances d’un élément : $x^m x^n = x^{m+n} = x^n x^m$.',
    dependsOn: ['eq-1-1']
  },
  'eq-1-3': {
    id: 'eq-1-3',
    label: 'Équation (3)',
    shortLabel: '(3)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 1 C',
    page: 21,
    route: ROUTE_T1,
    anchor: 'ref-eq-1-3',
    orderIndex: 133,
    summaryTex:
      'Puissance d’une puissance : $(x^m)^n = x^{mn} = (x^n)^m$.',
    dependsOn: ['eq-1-1']
  },
  '1.9-2': {
    id: '1.9-2',
    label: 'Remarques (1.9)',
    shortLabel: '(1.9)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 1 C',
    page: 21,
    route: ROUTE_T1,
    anchor: 'ref-1.9-2',
    orderIndex: 136,
    summaryTex:
      '[2e occurrence] $1^\\circ$ $(xy)^n = x^n y^n$ lorsque $x$ et $y$ commutent. $2^\\circ$ Demi-groupe et monoïde. $3^\\circ$ Formules $(2\')$ et $(3\')$ en notation additive.',
    dependsOn: ['1.3', '1.7', 'eq-1-2', 'eq-1-3']
  },
  'eq-1-4': {
    id: 'eq-1-4',
    label: 'Équation (4)',
    shortLabel: '(4)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 1 C',
    page: 21,
    route: ROUTE_T1,
    anchor: 'ref-eq-1-4',
    orderIndex: 139,
    summaryTex:
      'Si $x$ et $y$ commutent : $(xy)^n = xy\\,xy\\dots xy = x^n y^n$.',
    dependsOn: ['1.7', '1.9-2']
  },
  'eq-1-2p': {
    id: 'eq-1-2p',
    label: "Équation (2')",
    shortLabel: "(2')",
    kind: 'eq',
    chapter: 1,
    section: 'I § 1 C',
    page: 22,
    route: ROUTE_T1,
    anchor: 'ref-eq-1-2p',
    orderIndex: 142,
    summaryTex:
      'Formule $(2)$ en notation additive : $mx + nx = (m + n)x$.',
    dependsOn: ['1.9-1', 'eq-1-2', '1.9-2']
  },
  'eq-1-3p': {
    id: 'eq-1-3p',
    label: "Équation (3')",
    shortLabel: "(3')",
    kind: 'eq',
    chapter: 1,
    section: 'I § 1 C',
    page: 22,
    route: ROUTE_T1,
    anchor: 'ref-eq-1-3p',
    orderIndex: 145,
    summaryTex:
      'Formule $(3)$ en notation additive : $n(mx) = nmx$.',
    dependsOn: ['1.9-1', 'eq-1-3', '1.9-2']
  },
  '1.10': {
    id: '1.10',
    label: 'Remarque (1.10)',
    shortLabel: '(1.10)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 1 C',
    page: 22,
    route: ROUTE_T1,
    anchor: 'ref-1.10',
    orderIndex: 148,
    summaryTex:
      'Dans un groupe $G$, si $xx\' = e$ (resp. $x\'\'x = e$), alors $x\' = x^{-1}$ (resp. $x\'\' = x^{-1}$).',
    dependsOn: ['1.3', '1.4', '1.9-1']
  },
  'eq-1-5': {
    id: 'eq-1-5',
    label: 'Équation (5)',
    shortLabel: '(5)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 1 C',
    page: 22,
    route: ROUTE_T1,
    anchor: 'ref-eq-1-5',
    orderIndex: 151,
    summaryTex:
      'Inverse d’un produit : $(xy)^{-1} = y^{-1} x^{-1}$.',
    dependsOn: ['1.10']
  },
  '1.11': {
    id: '1.11',
    label: 'Remarque (1.11)',
    shortLabel: '(1.11)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 1 C',
    page: 22,
    route: ROUTE_T1,
    anchor: 'ref-1.11',
    orderIndex: 154,
    summaryTex:
      'Si $x$ et $y$ ne commutent pas, $x^{-1} y^{-1} \\neq (xy)^{-1}$ ; s’ils commutent, $x^{-1}$ et $y^{-1}$ commutent aussi.',
    dependsOn: ['1.7', 'eq-1-5']
  },
  'eq-1-6': {
    id: 'eq-1-6',
    label: 'Équation (6)',
    shortLabel: '(6)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 1 C',
    page: 23,
    route: ROUTE_T1,
    anchor: 'ref-eq-1-6',
    orderIndex: 157,
    summaryTex:
      'Inverse d’un produit de $n$ facteurs ($n \\geqslant 2$) : $(x_1 x_2 \\dots x_n)^{-1} = x_n^{-1} x_{n-1}^{-1} \\dots x_1^{-1}$.',
    dependsOn: ['eq-1-1', 'eq-1-5']
  },
  'eq-1-7': {
    id: 'eq-1-7',
    label: 'Équation (7)',
    shortLabel: '(7)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 1 C',
    page: 23,
    route: ROUTE_T1,
    anchor: 'ref-eq-1-7',
    orderIndex: 160,
    summaryTex:
      'Notation des puissances négatives : $(x^n)^{-1} = x^{-n}$.',
    dependsOn: ['eq-1-3', 'eq-1-6']
  },
  'eq-1-8': {
    id: 'eq-1-8',
    label: 'Équation (8)',
    shortLabel: '(8)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 1 C',
    page: 23,
    route: ROUTE_T1,
    anchor: 'ref-eq-1-8',
    orderIndex: 163,
    summaryTex:
      'Convention d’exposant nul : $x^0 = e$ pour tout $x \\in G$.',
    dependsOn: ['1.3', 'eq-1-2', 'eq-1-3']
  },
  '1.12': {
    id: '1.12',
    label: 'Exemple (1.12) — Groupes de nombres',
    shortLabel: '(1.12)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 1 D',
    page: 23,
    route: ROUTE_T1,
    anchor: 'ref-1.12',
    orderIndex: 166,
    summaryTex:
      '$(\\Z, +)$, $(\\Q, +)$, $(\\R, +)$, $(\\C, +)$ et $(\\Q^*, \\times)$, $(\\R^*, \\times)$, $(\\C^*, \\times)$ sont des groupes abéliens.',
    dependsOn: ['1.3', '1.5', '1.9-1']
  },
  '1.13': {
    id: '1.13',
    label: 'Exemple (1.13) — Groupe des classes de congruence de $\\Z$, modulo $n$',
    shortLabel: '(1.13)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 1 D',
    page: 23,
    route: ROUTE_T1,
    anchor: 'ref-1.13',
    orderIndex: 169,
    summaryTex:
      'Construction de l’ensemble quotient $\\Zn{n} = \\{\\overline{0}, \\overline{1}, \\dots, \\overline{n-1}\\}$ ($n > 0$) et de l’addition $\\overline{x} + \\overline{y} = \\overline{x+y}$ : $(\\Zn{n}, +)$ est un groupe abélien fini d’ordre $n$.',
    dependsOn: ['1.3', '1.5', '1.8', '1.12']
  },
  'eq-1-9': {
    id: 'eq-1-9',
    label: 'Équation (9)',
    shortLabel: '(9)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 1 D',
    page: 24,
    route: ROUTE_T1,
    anchor: 'ref-eq-1-9',
    orderIndex: 172,
    summaryTex:
      'Ensemble quotient des classes de congruence modulo $n$ : $\\Zn{n} = \\{\\overline{0}, \\overline{1}, \\dots, \\overline{n - 1}\\}$.',
    dependsOn: ['1.13']
  },
  '1.14': {
    id: '1.14',
    label: 'Exemple (1.14) — Groupes symétriques',
    shortLabel: '(1.14)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 1 D',
    page: 25,
    route: ROUTE_T1,
    anchor: 'ref-1.14',
    orderIndex: 175,
    summaryTex:
      'L’ensemble $S_E$ des permutations de $E$ muni de la composition $\\circ$ est le groupe symétrique de $E$ ; pour $E = \\{1, \\dots, n\\}$, $S_n$ est fini d’ordre $n!$.',
    dependsOn: ['1.3', '1.8']
  },
  '1.15': {
    id: '1.15',
    label: 'Notations (1.15)',
    shortLabel: '(1.15)',
    kind: 'not',
    chapter: 1,
    section: 'I § 1 D',
    page: 26,
    route: ROUTE_T1,
    anchor: 'ref-1.15',
    orderIndex: 178,
    summaryTex:
      'Écriture matricielle à deux lignes des éléments de $S_n$, énumération des $6$ éléments $e, \\sigma_1, \\sigma_2, \\tau_1, \\tau_2, \\tau_3$ de $S_3$ et produit $\\sigma \\circ \\tau$.',
    dependsOn: ['1.5', '1.14']
  },
  '1.16': {
    id: '1.16',
    label: 'Exemple (1.16) — Le groupe des quaternions',
    shortLabel: '(1.16)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 1 D',
    page: 27,
    route: ROUTE_T1,
    anchor: 'ref-1.16',
    orderIndex: 181,
    summaryTex:
      'Le groupe $Q_8$ formé de $8$ matrices complexes d’ordre $2$ est un groupe d’ordre $8$, non abélien.',
    dependsOn: ['1.3', '1.5', '1.8']
  },
  '1.17': {
    id: '1.17',
    label: 'Exemple (1.17) — Groupes linéaires. Groupes de matrices',
    shortLabel: '(1.17)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 1 D',
    page: 27,
    route: ROUTE_T1,
    anchor: 'ref-1.17',
    orderIndex: 184,
    summaryTex:
      'Groupe linéaire général $\\GL(E)$ des automorphismes $K$-linéaires de $E$ et $\\GL(n, K)$ des matrices carrées inversibles d’ordre $n$ sur $K$ (non abélien pour $n \\geqslant 2$).',
    dependsOn: ['1.3', '1.5', '1.14']
  },
  '1.18': {
    id: '1.18',
    label: 'Exemple (1.18)',
    shortLabel: '(1.18)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 1 E',
    page: 28,
    route: ROUTE_T1,
    anchor: 'ref-1.18',
    orderIndex: 187,
    summaryTex:
      'Tables d’addition des groupes abéliens $\\Zn{2}$, $\\Zn{3}$, $\\Zn{4}$ (symétriques par rapport à la diagonale principale) et table $(10)$ du groupe non abélien $S_3$.',
    dependsOn: ['1.5', '1.8', '1.13', '1.14', '1.15']
  },
  'table-10': {
    id: 'table-10',
    label: 'Table (10)',
    shortLabel: '(10)',
    kind: 'table',
    chapter: 1,
    section: 'I § 1 E',
    page: 28,
    route: ROUTE_T1,
    anchor: 'ref-table-10',
    orderIndex: 190,
    summaryTex:
      'Table de Cayley du groupe non abélien $S_3$ dans les notations $(1.15)$ ($e, \\sigma_1, \\sigma_2, \\tau_1, \\tau_2, \\tau_3$).',
    dependsOn: ['1.15', '1.18']
  },
  '1.19': {
    id: '1.19',
    label: 'Remarques (1.19)',
    shortLabel: '(1.19)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 1 E',
    page: 28,
    route: ROUTE_T1,
    anchor: 'ref-1.19',
    orderIndex: 193,
    summaryTex:
      '$1^\\circ$ Définition d’un groupe abélien d’ordre $4$ par la table $(11)$. $2^\\circ$ Toute table de groupe fini est un *carré latin*, mais un carré latin n’est pas nécessairement associatif (contre-exemple $(12)$).',
    dependsOn: ['1.3', '1.5', '1.8', '1.18']
  },
  'table-11': {
    id: 'table-11',
    label: 'Table (11)',
    shortLabel: '(11)',
    kind: 'table',
    chapter: 1,
    section: 'I § 1 E',
    page: 28,
    route: ROUTE_T1,
    anchor: 'ref-table-11',
    orderIndex: 196,
    summaryTex:
      'Table de multiplication sur $\\{e, a, b, c\\}$ définissant un groupe abélien d’ordre $4$ ($a^2 = b^2 = c^2 = e$).',
    dependsOn: ['1.19']
  },
  'table-12': {
    id: 'table-12',
    label: 'Table (12)',
    shortLabel: '(12)',
    kind: 'table',
    chapter: 1,
    section: 'I § 1 E',
    page: 29,
    route: ROUTE_T1,
    anchor: 'ref-table-12',
    orderIndex: 199,
    summaryTex:
      'Carré latin d’ordre $5$ sur $\\{e, a, b, c, d\\}$ ne définissant pas un groupe car $(ab)c = dc = a \\neq c = ad = a(bc)$.',
    dependsOn: ['1.19']
  }
}
