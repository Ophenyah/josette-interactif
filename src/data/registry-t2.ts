import type { RegistryEntry } from './registry'

const ROUTE_T2 = '/chap1/2-sous-groupes'

export const REGISTRY_T2: Record<string, RegistryEntry> = {
  '1.20': {
    id: '1.20',
    label: 'Définition (1.20)',
    shortLabel: '(1.20)',
    kind: 'def',
    chapter: 1,
    section: 'I § 2 A',
    page: 29,
    route: ROUTE_T2,
    anchor: 'ref-1.20',
    orderIndex: 200,
    summaryTex:
      '$G$ étant un groupe, une partie non vide $H$ de $G$ est un *sous-groupe* de $G$ si $(x, y) \\in H \\times H \\Rightarrow xy \\in H$ et $x \\in H \\Rightarrow x^{-1} \\in H$.',
    dependsOn: ['1.3']
  },
  'eq-1-13': {
    id: 'eq-1-13',
    label: 'Équation (13)',
    shortLabel: '(13)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 A',
    page: 29,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-13',
    orderIndex: 202,
    summaryTex:
      'Stabilité d’un sous-groupe par produit : $(x, y) \\in H \\times H \\Rightarrow xy \\in H$.',
    dependsOn: ['1.20']
  },
  'eq-1-14': {
    id: 'eq-1-14',
    label: 'Équation (14)',
    shortLabel: '(14)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 A',
    page: 29,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-14',
    orderIndex: 204,
    summaryTex:
      'Stabilité d’un sous-groupe par passage à l’inverse : $x \\in H \\Rightarrow x^{-1} \\in H$.',
    dependsOn: ['1.20']
  },
  '1.21': {
    id: '1.21',
    label: 'Remarques (1.21)',
    shortLabel: '(1.21)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 2 A',
    page: 30,
    route: ROUTE_T2,
    anchor: 'ref-1.21',
    orderIndex: 206,
    summaryTex:
      '$1^\\circ$ $(13)$ et $(14)$ impliquent $e \\in H$. $2^\\circ$ Tout sous-groupe $H$ de $G$ est un groupe pour la loi induite. $3^\\circ$ Si $|G| > 1$, $G$ admet au moins deux sous-groupes : $G$ et $(e)$.',
    dependsOn: ['1.3', '1.4', '1.20', 'eq-1-13', 'eq-1-14']
  },
  '1.22': {
    id: '1.22',
    label: 'Définition (1.22)',
    shortLabel: '(1.22)',
    kind: 'def',
    chapter: 1,
    section: 'I § 2 A',
    page: 30,
    route: ROUTE_T2,
    anchor: 'ref-1.22',
    orderIndex: 208,
    summaryTex:
      'On appelle *sous-groupe propre* d’un groupe $G$ tout sous-groupe de $G$ distinct de $G$ (ainsi $(e)$ est un sous-groupe propre dès que $G$ a plus d’un élément).',
    dependsOn: ['1.20', '1.21']
  },
  '1.23': {
    id: '1.23',
    label: 'Notations (1.23)',
    shortLabel: '(1.23)',
    kind: 'not',
    chapter: 1,
    section: 'I § 2 A',
    page: 30,
    route: ROUTE_T2,
    anchor: 'ref-1.23',
    orderIndex: 210,
    summaryTex:
      '$H \\leqslant G$ exprime que $H$ est un sous-groupe de $G$ ; $H < G$ exprime que $H$ est un sous-groupe *propre* de $G$.',
    dependsOn: ['1.20', '1.22']
  },
  '1.24': {
    id: '1.24',
    label: 'Théorème (1.24)',
    shortLabel: '(1.24)',
    kind: 'thm',
    chapter: 1,
    section: 'I § 2 A',
    page: 30,
    route: ROUTE_T2,
    anchor: 'ref-1.24',
    orderIndex: 212,
    summaryTex:
      'Une partie non vide $H$ d’un groupe $G$ est un sous-groupe de $G$ si et seulement si $\\forall (x, y)\\,[(x, y) \\in H \\times H \\Rightarrow xy^{-1} \\in H]$.',
    dependsOn: ['1.20', 'eq-1-13', 'eq-1-14']
  },
  'eq-1-15': {
    id: 'eq-1-15',
    label: 'Équation (15)',
    shortLabel: '(15)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 A',
    page: 30,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-15',
    orderIndex: 214,
    summaryTex:
      'Caractérisation d’un sous-groupe non vide $H$ : $\\forall (x, y)\\,[(x, y) \\in H \\times H \\Rightarrow xy^{-1} \\in H]$.',
    dependsOn: ['1.24']
  },
  'eq-1-15p': {
    id: 'eq-1-15p',
    label: "Équation (15')",
    shortLabel: "(15')",
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 A',
    page: 31,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-15p',
    orderIndex: 216,
    summaryTex:
      'Caractérisation $(15)$ en notation additive : $\\forall (x, y)\\,[(x, y) \\in H \\times H \\Rightarrow (x - y) \\in H]$.',
    dependsOn: ['1.9-1', 'eq-1-15']
  },
  '1.25': {
    id: '1.25',
    label: 'Proposition (1.25)',
    shortLabel: '(1.25)',
    kind: 'prop',
    chapter: 1,
    section: 'I § 2 A',
    page: 31,
    route: ROUTE_T2,
    anchor: 'ref-1.25',
    orderIndex: 218,
    summaryTex:
      'Pour toute famille non vide $\\{H_i\\}_{i \\in I}$ de sous-groupes de $G$, l’intersection $\\bigcap_{i \\in I} H_i$ est un sous-groupe de $G$.',
    dependsOn: ['1.20', '1.24']
  },
  '1.26': {
    id: '1.26',
    label: 'Remarque (1.26)',
    shortLabel: '(1.26)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 2 A',
    page: 31,
    route: ROUTE_T2,
    anchor: 'ref-1.26',
    orderIndex: 220,
    summaryTex:
      'En général, la réunion $\\bigcup_{i \\in I} H_i$ n’est pas un sous-groupe de $G$ (contre-exemple : $3\\Z \\cup 8\\Z$ dans $(\\Z, +)$, car $3 + 8 = 11 \\notin 3\\Z \\cup 8\\Z$).',
    dependsOn: ['1.20']
  },
  '1.27': {
    id: '1.27',
    label: 'Proposition (1.27)',
    shortLabel: '(1.27)',
    kind: 'prop',
    chapter: 1,
    section: 'I § 2 A',
    page: 31,
    route: ROUTE_T2,
    anchor: 'ref-1.27',
    orderIndex: 222,
    summaryTex:
      'Si $\\{H_i\\}_{i \\in I}$ est une famille de sous-groupes de $G$ totalement ordonnée par l’inclusion, alors $\\bigcup_{i \\in I} H_i$ est un sous-groupe de $G$.',
    dependsOn: ['1.24', '1.26']
  },
  '1.28': {
    id: '1.28',
    label: 'Exemple (1.28) — Sous-groupe de $(\\Z, +)$',
    shortLabel: '(1.28)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 2 B',
    page: 31,
    route: ROUTE_T2,
    anchor: 'ref-1.28',
    orderIndex: 224,
    summaryTex:
      'Pour tout $n \\in \\N$, $n\\Z = \\{nx ;\\; x \\in \\Z\\}$ est un sous-groupe de $\\Z$, et tout sous-groupe de $\\Z$ s’écrit de façon unique $n\\Z$ ($n \\in \\N$).',
    dependsOn: ['1.20', '1.24']
  },
  '1.29': {
    id: '1.29',
    label: 'Exemples (1.29)',
    shortLabel: '(1.29)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 2 B',
    page: 32,
    route: ROUTE_T2,
    anchor: 'ref-1.29',
    orderIndex: 226,
    summaryTex:
      'Chaînes de sous-groupes propres : $\\Z < \\Q < \\R < \\C$ (additifs), $\\Q^* < \\R^* < \\C^*$ (multiplicatifs), et $\\Q^*_+ < \\Q^*$, $\\R^*_+ < \\R^*$, $\\Q^*_+ < \\R^*_+$.',
    dependsOn: ['1.12', '1.22', '1.23']
  },
  '1.30': {
    id: '1.30',
    label: 'Exemples (1.30)',
    shortLabel: '(1.30)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 2 B',
    page: 32,
    route: ROUTE_T2,
    anchor: 'ref-1.30',
    orderIndex: 228,
    summaryTex:
      'L’ensemble $U$ des nombres complexes de module $1$ est un sous-groupe multiplicatif de $\\C^*$, et pour tout $n > 0$, l’ensemble $U_n$ des racines $n$-ième de l’unité est un sous-groupe fini d’ordre $n$ de $U$ et de $\\C^*$.',
    dependsOn: ['1.8', '1.12', '1.20', '1.24']
  },
  '1.31': {
    id: '1.31',
    label: 'Exemple (1.31)',
    shortLabel: '(1.31)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 2 B',
    page: 33,
    route: ROUTE_T2,
    anchor: 'ref-1.31',
    orderIndex: 230,
    summaryTex:
      'Le groupe linéaire général $\\GL(E)$ d’un espace vectoriel $E$ est un sous-groupe du groupe symétrique $S_E$.',
    dependsOn: ['1.14', '1.17', '1.20']
  },
  '1.32': {
    id: '1.32',
    label: 'Exemple (1.32)',
    shortLabel: '(1.32)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 2 B',
    page: 33,
    route: ROUTE_T2,
    anchor: 'ref-1.32',
    orderIndex: 232,
    summaryTex:
      'Les similitudes de $\\R^2$ (applications $u \\in \\GL(\\R^2)$ vérifiant $(u(x) \\mid u(y)) = \\lambda_u (x \\mid y)$ avec $\\lambda_u \\in \\R^*_+$) forment un sous-groupe de $\\GL(\\R^2)$ noté $\\operatorname{GO}(\\R^2)$.',
    dependsOn: ['1.17', '1.20']
  },
  'eq-1-16': {
    id: 'eq-1-16',
    label: 'Équation (16)',
    shortLabel: '(16)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 B',
    page: 33,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-16',
    orderIndex: 234,
    summaryTex:
      'Définition d’une similitude linéaire de $\\R^2$ : $(u(x) \\mid u(y)) = \\lambda_u (x \\mid y), \\; \\forall (x, y) \\in \\R^2 \\times \\R^2$.',
    dependsOn: ['1.32']
  },
  '1.33': {
    id: '1.33',
    label: 'Remarque (1.33)',
    shortLabel: '(1.33)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 2 B',
    page: 33,
    route: ROUTE_T2,
    anchor: 'ref-1.33',
    orderIndex: 236,
    summaryTex:
      'Généralisation du groupe des similitudes à un espace vectoriel euclidien $E$ de dimension finie ($\\operatorname{GO}(E)$) et à un espace affine euclidien $\\mathscr{E}$ (similitudes affines).',
    dependsOn: ['1.32']
  },
  '1.34': {
    id: '1.34',
    label: 'Exemple (1.34)',
    shortLabel: '(1.34)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 2 B',
    page: 33,
    route: ROUTE_T2,
    anchor: 'ref-1.34',
    orderIndex: 238,
    summaryTex:
      'L’ensemble $\\mathscr{I}(2)$ des isométries du plan affine euclidien $P$ (applications conservant les distances) est un sous-groupe de $S_P$ ; généralisation à $\\mathscr{I}(n)$ en dimension $n \\geqslant 1$.',
    dependsOn: ['1.14', '1.20']
  },
  '1.35': {
    id: '1.35',
    label: 'Exemple (1.35) — Centre d’un groupe',
    shortLabel: '(1.35)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 2 B',
    page: 34,
    route: ROUTE_T2,
    anchor: 'ref-1.35',
    orderIndex: 240,
    summaryTex:
      'Le centre $Z(G) = \\{x \\in G ;\\; xa = ax, \\; \\forall a \\in G\\}$ est un sous-groupe de $G$ ; $Z(G) < G$ si et seulement si $G$ est non abélien.',
    dependsOn: ['1.5', '1.7', '1.20', '1.22']
  },
  '1.36': {
    id: '1.36',
    label: 'Définition (1.36)',
    shortLabel: '(1.36)',
    kind: 'def',
    chapter: 1,
    section: 'I § 2 C',
    page: 34,
    route: ROUTE_T2,
    anchor: 'ref-1.36',
    orderIndex: 242,
    summaryTex:
      'Pour une partie non vide $S$ de $G$, le *sous-groupe de $G$ engendré par $S$* est l’intersection $\\langle S \\rangle = \\bigcap_{H \\in \\mathscr{H}_S} H$ des sous-groupes de $G$ contenant $S$.',
    dependsOn: ['1.20', '1.25']
  },
  '1.37': {
    id: '1.37',
    label: 'Remarque (1.37)',
    shortLabel: '(1.37)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 2 C',
    page: 34,
    route: ROUTE_T2,
    anchor: 'ref-1.37',
    orderIndex: 244,
    summaryTex:
      'Ordonné par l’inclusion, $\\langle S \\rangle$ est le plus petit sous-groupe de $G$ contenant $S$.',
    dependsOn: ['1.36']
  },
  '1.38': {
    id: '1.38',
    label: 'Proposition (1.38)',
    shortLabel: '(1.38)',
    kind: 'prop',
    chapter: 1,
    section: 'I § 2 C',
    page: 34,
    route: ROUTE_T2,
    anchor: 'ref-1.38',
    orderIndex: 246,
    summaryTex:
      '$S$ étant une partie non vide de $G$, $\\langle S \\rangle = \\{x_1 x_2 \\dots x_n ;\\; n \\in \\N^*, \\; x_i \\in S \\text{ ou } x_i^{-1} \\in S, \\; \\forall i\\,(1 \\leqslant i \\leqslant n)\\}$.',
    dependsOn: ['1.24', '1.36']
  },
  'eq-1-17': {
    id: 'eq-1-17',
    label: 'Équation (17)',
    shortLabel: '(17)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 C',
    page: 34,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-17',
    orderIndex: 248,
    summaryTex:
      'Expression explicite du sous-groupe engendré par $S$ : $\\langle S \\rangle = \\{x_1 x_2 \\dots x_n ;\\; n \\in \\N^*, \\; x_i \\in S \\text{ ou } x_i^{-1} \\in S\\}$.',
    dependsOn: ['1.38']
  },
  'eq-1-18': {
    id: 'eq-1-18',
    label: 'Équation (18)',
    shortLabel: '(18)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 C',
    page: 35,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-18',
    orderIndex: 250,
    summaryTex:
      'Sous-groupe engendré par une réunion de sous-groupes $S = \\bigcup_{i \\in I} H_i$ : $\\langle S \\rangle = \\{x_1 x_2 \\dots x_n ;\\; n \\in \\N^*, \\; x_\\alpha \\in \\bigcup_{i \\in I} H_i\\}$.',
    dependsOn: ['1.38', 'eq-1-17']
  },
  'eq-1-19': {
    id: 'eq-1-19',
    label: 'Équation (19)',
    shortLabel: '(19)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 C',
    page: 35,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-19',
    orderIndex: 252,
    summaryTex:
      'Sous-groupe engendré par un élément $x \\in G$ : $\\langle x \\rangle = \\{x^n ;\\; n \\in \\Z\\}$.',
    dependsOn: ['1.38', 'eq-1-17']
  },
  '1.39': {
    id: '1.39',
    label: 'Remarque (1.39)',
    shortLabel: '(1.39)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 2 C',
    page: 35,
    route: ROUTE_T2,
    anchor: 'ref-1.39',
    orderIndex: 254,
    summaryTex:
      'En notation additive, $(17)$ devient $\\langle S \\rangle = \\{\\sum_{i=1}^n x_i ;\\; x_i \\in S \\text{ ou } -x_i \\in S\\}$ et $(19)$ devient $\\langle x \\rangle = \\{nx ;\\; n \\in \\Z\\}$.',
    dependsOn: ['1.9-1', '1.38', 'eq-1-17', 'eq-1-19']
  },
  'eq-1-17p': {
    id: 'eq-1-17p',
    label: "Équation (17')",
    shortLabel: "(17')",
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 C',
    page: 35,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-17p',
    orderIndex: 256,
    summaryTex:
      'Formule $(17)$ en notation additive : $\\langle S \\rangle = \\{\\sum_{i=1}^n x_i ;\\; n \\in \\N^*, \\; x_i \\in S \\text{ ou } -x_i \\in S\\}$.',
    dependsOn: ['1.39', 'eq-1-17']
  },
  'eq-1-19p': {
    id: 'eq-1-19p',
    label: "Équation (19')",
    shortLabel: "(19')",
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 C',
    page: 35,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-19p',
    orderIndex: 258,
    summaryTex:
      'Formule $(19)$ en notation additive : $\\langle x \\rangle = \\{nx ;\\; n \\in \\Z\\}$.',
    dependsOn: ['1.39', 'eq-1-19']
  },
  '1.40': {
    id: '1.40',
    label: 'Définitions (1.40)',
    shortLabel: '(1.40)',
    kind: 'def',
    chapter: 1,
    section: 'I § 2 C',
    page: 35,
    route: ROUTE_T2,
    anchor: 'ref-1.40',
    orderIndex: 260,
    summaryTex:
      '$1^\\circ$ *Partie génératrice* $S$ ($\\langle S \\rangle = G$). $2^\\circ$ Groupe *monogène* ($\\langle x \\rangle = G$) et groupe de *type fini* (engendré par une partie finie non vide).',
    dependsOn: ['1.36']
  },
  '1.41': {
    id: '1.41',
    label: 'Exemple (1.41)',
    shortLabel: '(1.41)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 2 C',
    page: 35,
    route: ROUTE_T2,
    anchor: 'ref-1.41',
    orderIndex: 262,
    summaryTex:
      'Dans $S_3$, $\\langle \\sigma_1 \\rangle = \\{\\sigma_1, \\sigma_2, e\\}$ et $\\langle \\sigma_1, \\tau_3 \\rangle = S_3$ : $\\{\\sigma_1, \\tau_3\\}$ est une partie génératrice de $S_3$.',
    dependsOn: ['1.15', 'table-10', '1.40']
  },
  '1.42': {
    id: '1.42',
    label: 'Exemples (1.42)',
    shortLabel: '(1.42)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 2 C',
    page: 36,
    route: ROUTE_T2,
    anchor: 'ref-1.42',
    orderIndex: 264,
    summaryTex:
      '$1^\\circ$ $\\Z$ est un groupe monogène infini, engendré par $1$ (ou $-1$). $2^\\circ$ $\\Zn{4}$ est un groupe monogène fini, engendré par $\\overline{1}$ (ou $\\overline{3}$).',
    dependsOn: ['1.18', '1.40']
  },
  '1.43': {
    id: '1.43',
    label: 'Définition (1.43)',
    shortLabel: '(1.43)',
    kind: 'def',
    chapter: 1,
    section: 'I § 2 C',
    page: 36,
    route: ROUTE_T2,
    anchor: 'ref-1.43',
    orderIndex: 266,
    summaryTex:
      'On appelle *groupe cyclique* tout groupe monogène fini.',
    dependsOn: ['1.40']
  },
  '1.44': {
    id: '1.44',
    label: 'Définitions (1.44)',
    shortLabel: '(1.44)',
    kind: 'def',
    chapter: 1,
    section: 'I § 2 C',
    page: 36,
    route: ROUTE_T2,
    anchor: 'ref-1.44',
    orderIndex: 268,
    summaryTex:
      'Pour $x \\in G$, si $\\langle x \\rangle$ est infini, $x$ est *d’ordre infini* ; si $\\langle x \\rangle$ est fini, $x$ est *d’ordre fini* et $\\card \\langle x \\rangle$ est *l’ordre de $x$ dans $G$*, noté $o(x)$.',
    dependsOn: ['1.8', '1.36']
  },
  '1.45': {
    id: '1.45',
    label: 'Exemples (1.45)',
    shortLabel: '(1.45)',
    kind: 'ex',
    chapter: 1,
    section: 'I § 2 C',
    page: 37,
    route: ROUTE_T2,
    anchor: 'ref-1.45',
    orderIndex: 270,
    summaryTex:
      '$1^\\circ$ L’élément neutre est le seul élément d’ordre $1$. $2^\\circ$ Dans $\\Z$, tout $x \\neq 0$ est d’ordre infini. $3^\\circ$ Dans $S_3$, $\\tau_1, \\tau_2, \\tau_3$ sont d’ordre $2$ et $\\sigma_1, \\sigma_2$ d’ordre $3$.',
    dependsOn: ['1.44', 'table-10']
  },
  '1.46': {
    id: '1.46',
    label: 'Remarque (1.46)',
    shortLabel: '(1.46)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 2 C',
    page: 37,
    route: ROUTE_T2,
    anchor: 'ref-1.46',
    orderIndex: 272,
    summaryTex:
      'Produit de parties $XY = \\{xy ;\\; (x, y) \\in X \\times Y\\}$ (et $X + Y$ en notation additive). Si $H, K < G$, on peut avoir $HK \\neq KH$ sans que $HK$ ni $KH$ soient des sous-groupes (contre-exemple dans $S_3$).',
    dependsOn: ['1.20', '1.22', '1.44']
  },
  'eq-1-20': {
    id: 'eq-1-20',
    label: 'Équation (20)',
    shortLabel: '(20)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 C',
    page: 37,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-20',
    orderIndex: 274,
    summaryTex:
      'Produit de deux parties non vides d’un groupe : $XY = \\{xy ;\\; (x, y) \\in X \\times Y\\}$.',
    dependsOn: ['1.46']
  },
  'eq-1-20p': {
    id: 'eq-1-20p',
    label: "Équation (20')",
    shortLabel: "(20')",
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 C',
    page: 37,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-20p',
    orderIndex: 276,
    summaryTex:
      'Somme de deux parties non vides en notation additive : $X + Y = \\{x + y ;\\; (x, y) \\in X \\times Y\\}$.',
    dependsOn: ['1.9-1', '1.46', 'eq-1-20']
  },
  '1.47': {
    id: '1.47',
    label: 'Proposition (1.47)',
    shortLabel: '(1.47)',
    kind: 'prop',
    chapter: 1,
    section: 'I § 2 C',
    page: 37,
    route: ROUTE_T2,
    anchor: 'ref-1.47',
    orderIndex: 278,
    summaryTex:
      '$H$ et $K$ étant deux sous-groupes de $G$, $HK$ est un sous-groupe de $G$ si et seulement si $HK = KH$.',
    dependsOn: ['1.24', '1.46', 'eq-1-20']
  },
  '1.48': {
    id: '1.48',
    label: 'Remarques (1.48)',
    shortLabel: '(1.48)',
    kind: 'rem',
    chapter: 1,
    section: 'I § 2 C',
    page: 38,
    route: ROUTE_T2,
    anchor: 'ref-1.48',
    orderIndex: 280,
    summaryTex:
      '$1^\\circ$ Si $HK \\leqslant G$, alors $HK = \\langle H \\cup K \\rangle$. $2^\\circ$ Si $G$ est abélien, $HK$ est toujours un sous-groupe de $G$.',
    dependsOn: ['1.5', '1.36', '1.47']
  },
  '1.49': {
    id: '1.49',
    label: 'Corollaire (1.49)',
    shortLabel: '(1.49)',
    kind: 'cor',
    chapter: 1,
    section: 'I § 2 C',
    page: 38,
    route: ROUTE_T2,
    anchor: 'ref-1.49',
    orderIndex: 282,
    summaryTex:
      'Si $\\{H_i\\}_{1 \\leqslant i \\leqslant n}$ est une famille finie de sous-groupes de $G$ telle que $H_i H_j \\leqslant G$ pour tous $1 \\leqslant i < j \\leqslant n$, alors $H_1 H_2 \\dots H_n$ est un sous-groupe de $G$.',
    dependsOn: ['1.47', '1.48']
  },
  '1.50': {
    id: '1.50',
    label: 'Définition (1.50)',
    shortLabel: '(1.50)',
    kind: 'def',
    chapter: 1,
    section: 'I § 2 D',
    page: 39,
    route: ROUTE_T2,
    anchor: 'ref-1.50',
    orderIndex: 284,
    summaryTex:
      'Dans un groupe abélien $(G, +)$, le sous-groupe $G\' = H + K$ est dit *somme directe* de $H$ et $K$ si $H \\cap K = (0)$ ; on note alors $G\' = H \\oplus K$.',
    dependsOn: ['1.9-1', '1.48']
  },
  '1.51': {
    id: '1.51',
    label: 'Proposition (1.51)',
    shortLabel: '(1.51)',
    kind: 'prop',
    chapter: 1,
    section: 'I § 2 D',
    page: 39,
    route: ROUTE_T2,
    anchor: 'ref-1.51',
    orderIndex: 286,
    summaryTex:
      'Dans un groupe abélien $(G, +)$, la somme $H + K$ est directe si et seulement si tout élément de $H + K$ s’écrit de façon unique $x + y$ avec $x \\in H$ et $y \\in K$.',
    dependsOn: ['1.50']
  },
  '1.52': {
    id: '1.52',
    label: 'Définition (1.52)',
    shortLabel: '(1.52)',
    kind: 'def',
    chapter: 1,
    section: 'I § 2 D',
    page: 40,
    route: ROUTE_T2,
    anchor: 'ref-1.52',
    orderIndex: 288,
    summaryTex:
      'La somme $\\sum_{i \\in I} H_i$ d’une famille de sous-groupes d’un groupe abélien $(G, +)$ est dite *somme directe* (notée $\\bigoplus_{i \\in I} H_i$) si $\\forall j \\in I, \\; H_j \\cap \\sum_{i \\in I,\\, i \\neq j} H_i = (0)$.',
    dependsOn: ['1.50']
  },
  'eq-1-21': {
    id: 'eq-1-21',
    label: 'Équation (21)',
    shortLabel: '(21)',
    kind: 'eq',
    chapter: 1,
    section: 'I § 2 D',
    page: 40,
    route: ROUTE_T2,
    anchor: 'ref-eq-1-21',
    orderIndex: 290,
    summaryTex:
      'Condition de somme directe d’une famille $\\{H_i\\}_{i \\in I}$ : $\\forall j \\in I, \\; H_j \\cap \\sum_{i \\in I,\\, i \\neq j} H_i = (0)$.',
    dependsOn: ['1.52']
  },
  '1.53': {
    id: '1.53',
    label: 'Proposition (1.53)',
    shortLabel: '(1.53)',
    kind: 'prop',
    chapter: 1,
    section: 'I § 2 D',
    page: 40,
    route: ROUTE_T2,
    anchor: 'ref-1.53',
    orderIndex: 292,
    summaryTex:
      'Dans un groupe abélien $(G, +)$, $G\' = \\sum_{i \\in I} H_i$ est somme directe des $H_i$ si et seulement si tout $x \\in G\'$ s’écrit de façon unique $x = \\sum_{1 \\leqslant k \\leqslant n} x_{i_k}$ ($n \\in \\N^*$, $\\{i_1, \\dots, i_n\\} \\subseteq I$, $x_{i_k} \\in H_{i_k}$).',
    dependsOn: ['1.49', '1.52', 'eq-1-21']
  }
}
