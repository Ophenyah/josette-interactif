export interface GlossaryItem {
  id: string
  term: string
  modernEquivalent: string
  explanationTex: string
  firstSeenPage: number
}

export const GLOSSARY: Record<string, GlossaryItem> = {
  'entiers-rationnels': {
    id: 'entiers-rationnels',
    term: 'Entiers rationnels',
    modernEquivalent: 'Entiers relatifs ($\\Z$)',
    explanationTex:
      'Terminologie classique de 1984 pour désigner l’ensemble $\\Z = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$ des entiers relatifs (à ne pas confondre avec $\\Q$, ensemble des nombres rationnels).',
    firstSeenPage: 18
  },
  'z-sur-n': {
    id: 'z-sur-n',
    term: 'Notation $\\Zn{n}$',
    modernEquivalent: '$\\Z / n\\Z$',
    explanationTex:
      'Dans Josette Calais, $\\Zn{n}$ désigne le groupe quotient $\\Z / n\\Z$ des classes de congruence modulo $n$ (où $(n) = n\\Z$ est le sous-groupe des multiples de $n$).',
    firstSeenPage: 25
  },
  'groupe-trivial': {
    id: 'groupe-trivial',
    term: 'Notations $(e)$ et $(0)$',
    modernEquivalent: '$\\{e\\}$ et $\\{0\\}$',
    explanationTex:
      'Les parenthèses $(e)$ ou $(0)$ désignent le sous-groupe trivial réduit à l’élément neutre.',
    firstSeenPage: 19
  },
  'sous-groupe-propre': {
    id: 'sous-groupe-propre',
    term: 'Sous-groupe propre',
    modernEquivalent: 'Sous-groupe strict ($H \\subsetneq G$)',
    explanationTex:
      'Chez Josette Calais, un *sous-groupe propre* de $G$ est tout sous-groupe $H \\neq G$ (ce qui **inclut** le sous-groupe trivial $(e)$ dès que $|G| > 1$, contrairement à certains manuels récents qui exigent aussi $H \\neq (e)$).',
    firstSeenPage: 30
  },
  'element-unite': {
    id: 'element-unite',
    term: 'Élément unité',
    modernEquivalent: 'Élément neutre ($e$ ou $1$)',
    explanationTex:
      'En notation multiplicative, l’élément neutre du groupe se note $e$ ou $1$ et s’appelle *élément unité*.',
    firstSeenPage: 19
  },
  symetrisable: {
    id: 'symetrisable',
    term: 'Symétrisable / Symétrique',
    modernEquivalent: 'Inversible / Inverse (en notation multiplicative)',
    explanationTex:
      'Un élément $x$ est *symétrisable* s’il existe $x\'$ tel que $x\'\\cdot x = x\\cdot x\' = e$. En notation multiplicative, on parle d’*inverse* ($x^{-1}$) ; en notation additive, d’*opposé* ($-x$).',
    firstSeenPage: 17
  },
  permutables: {
    id: 'permutables',
    term: 'Éléments permutables',
    modernEquivalent: 'Éléments qui commutent ($xy = yx$)',
    explanationTex:
      'Deux éléments $x$ et $y$ sont *permutables* lorsqu’ils vérifient $x \\cdot y = y \\cdot x$.',
    firstSeenPage: 19
  },
  'demi-groupe': {
    id: 'demi-groupe',
    term: 'Demi-groupe',
    modernEquivalent: 'Magma associatif (souvent appelé semi-groupe)',
    explanationTex:
      'Ensemble non vide muni d’une loi interne associative ; s’il possède en outre un élément neutre, c’est un *monoïde* (ou demi-groupe unitaire).',
    firstSeenPage: 21
  },
  equipotent: {
    id: 'equipotent',
    term: 'Ensembles équipotents',
    modernEquivalent: 'Ensembles en bijection (même cardinal)',
    explanationTex:
      'Deux ensembles $A$ et $B$ (finis ou infinis) sont *équipotents* s’il existe une bijection de $A$ sur $B$.',
    firstSeenPage: 74
  },
  'classe-modulo': {
    id: 'classe-modulo',
    term: 'Classes à droite / à gauche modulo $H$',
    modernEquivalent: 'Classes (latérales) à droite $Hx$ / à gauche $xH$',
    explanationTex:
      'Étant donné $H \\leqslant G$ et $x \\in G$, la *classe à droite* $Hx = \\{hx ;\\; h \\in H\\}$ est la classe d’équivalence de $x$ pour $\\mathscr{R}_H$ ($xy^{-1} \\in H$), et la *classe à gauche* $xH = \\{xh ;\\; h \\in H\\}$ est la classe pour ${}_H\\mathscr{R}$ ($x^{-1}y \\in H$). Attention : certains auteurs (tels Mac Lane et Birkhoff, cités en Remarque $(2.3)\\;1^\\circ$) inversent les dénominations « à droite » et « à gauche ».',
    firstSeenPage: 72
  },
  indice: {
    id: 'indice',
    term: 'Indice d’un sous-groupe $[G : H]$',
    modernEquivalent: 'Cardinal de $(G/H)_d$ (parfois noté $(G : H)$)',
    explanationTex:
      'Cardinal (fini ou infini) de l’ensemble des classes à droite modulo $H$ dans $G$, égal au cardinal de l’ensemble des classes à gauche par le théorème $(2.12)$. Lorsque $G$ est fini, $[G : H] = \\dfrac{o(G)}{o(H)}$.',
    firstSeenPage: 76
  },
  'relation-compatible': {
    id: 'relation-compatible',
    term: 'Relation compatible avec une loi',
    modernEquivalent: 'Congruence sur $(E, \\cdot)$',
    explanationTex:
      'Relation d’équivalence $\\mathscr{R}$ sur $(E, \\cdot)$ vérifiant $(x \\mathrel{\\mathscr{R}} x\' \\text{ et } y \\mathrel{\\mathscr{R}} y\') \\implies x \\cdot y \\mathrel{\\mathscr{R}} x\' \\cdot y\'$. Elle équivaut à la compatibilité à droite ($x \\mathrel{\\mathscr{R}} y \\implies x \\cdot a \\mathrel{\\mathscr{R}} y \\cdot a$) et à gauche ($x \\mathrel{\\mathscr{R}} y \\implies a \\cdot x \\mathrel{\\mathscr{R}} a \\cdot y$).',
    firstSeenPage: 79
  },
  'loi-quotient': {
    id: 'loi-quotient',
    term: 'Loi quotient',
    modernEquivalent: 'Loi induite sur l’ensemble quotient $E/\\mathscr{R}$',
    explanationTex:
      'Loi de composition interne définie sur $E/\\mathscr{R}$ par $\\overline{x} \\cdot \\overline{y} = \\overline{x \\cdot y}$. Elle est bien définie (indépendante du choix des représentants) si et seulement si $\\mathscr{R}$ est compatible avec la loi $\\cdot$.',
    firstSeenPage: 80
  },
  'surjection-canonique': {
    id: 'surjection-canonique',
    term: 'Surjection canonique',
    modernEquivalent: 'Application quotient $\\pi : G \\to G/\\mathscr{R}$, $x \\mapsto \\overline{x}$',
    explanationTex:
      'Application surjective associant à tout $x \\in G$ sa classe d’équivalence $\\overline{x}$. Lorsque le quotient $G/H$ est un groupe (cas abélien ou $H = \\Ker f$), $\\pi : G \\to G/H$ est un morphisme surjectif (épimorphisme) de noyau $H$.',
    firstSeenPage: 44
  },
  'groupe-monogene': {
    id: 'groupe-monogene',
    term: 'Groupe monogène / Groupe cyclique',
    modernEquivalent: 'Monogène : engendré par un élément ($\\simeq \\Z$ ou $\\Z/n\\Z$) ; cyclique : monogène fini',
    explanationTex:
      'En algèbre française (et en prépa), un groupe *monogène* est engendré par un seul élément ($G = \\langle x \\rangle$) et un groupe *cyclique* est un groupe monogène **fini**. (Attention : en anglais, *cyclic group* désigne tout groupe monogène, fini ou infini.)',
    firstSeenPage: 35
  },
  epimorphisme: {
    id: 'epimorphisme',
    term: 'Monomorphisme / Épimorphisme',
    modernEquivalent: 'Morphisme injectif / Morphisme surjectif (pour les groupes)',
    explanationTex:
      'Josette Calais définit *monomorphisme* (simplifiable à gauche pour $\\circ$) et *épimorphisme* (simplifiable à droite pour $\\circ$) au sens catégoriel en $(1.79)$, puis démontre en $(1.80)$ que pour les groupes ces notions équivalent respectivement à morphisme *injectif* et morphisme *surjectif*.',
    firstSeenPage: 51
  },
  'fonction-euler': {
    id: 'fonction-euler',
    term: 'Indicateur / Fonction d’Euler $\\varphi(n)$',
    modernEquivalent: 'Indicatrice d’Euler $\\varphi(n) = |(\\Z/n\\Z)^\\times|$',
    explanationTex:
      'Pour $n \\in \\N^*$, $\\varphi(n)$ compte les entiers $1 \\leqslant k \\leqslant n$ premiers avec $n$ ($\\varphi(1)=1$), c’est-à-dire le nombre de générateurs d’un groupe cyclique d’ordre $n$ ou l’ordre du groupe des inversibles $G_n = (\\Z/n\\Z)^\\times$.',
    firstSeenPage: 99
  },
  'orbite-permutation': {
    id: 'orbite-permutation',
    term: '$\\sigma$-orbite $\\Omega_\\sigma(i)$',
    modernEquivalent: 'Orbite de $i$ sous l’action de $\\langle \\sigma \\rangle$',
    explanationTex:
      'Classe d’équivalence de $i \\in \\N_n$ pour la relation $i \\mathrel{\\mathscr{R}_\\sigma} k \\iff \\exists r \\in \\Z,\\; \\sigma^r(i) = k$. Les $\\sigma$-orbites partitionnent $\\{1, \\dots, n\\}$ ; une orbite de cardinal $1$ est dite *ponctuelle* (point fixe).',
    firstSeenPage: 107
  },
  'support-permutation': {
    id: 'support-permutation',
    term: 'Support $\\supp(\\sigma)$',
    modernEquivalent: 'Ensemble des points non fixes $\\{i \\in \\N_n \\;;\\; \\sigma(i) \\neq i\\}$',
    explanationTex:
      'Deux permutations dont les supports sont disjoints commutent dans $S_n$ (proposition $(3.39)$).',
    firstSeenPage: 106
  },
  'cycle-transposition': {
    id: 'cycle-transposition',
    term: '$r$-cycle et transposition',
    modernEquivalent: 'Cycle de longueur $r$ et $2$-cycle $(j_1, j_2)$',
    explanationTex:
      'Un $r$-cycle $(j_1, j_2, \\dots, j_r)$ envoie $j_1 \\mapsto j_2 \\mapsto \\dots \\mapsto j_r \\mapsto j_1$ et fixe tout autre élément de $\\N_n$. Une *transposition* est un $2$-cycle ; toute permutation de $S_n$ ($n \\geqslant 2$) se décompose de façon non unique en produit de transpositions.',
    firstSeenPage: 108
  },
  'signature-permutation': {
    id: 'signature-permutation',
    term: 'Signature $\\varepsilon(\\sigma)$',
    modernEquivalent: 'Signature $\\varepsilon(\\sigma) = (-1)^{n-t} \\in \\{-1, 1\\}$',
    explanationTex:
      'Josette Calais définit la signature directement à partir du nombre $t$ d’orbites de $\\sigma$ dans $\\N_n$ par $\\varepsilon(\\sigma) = (-1)^{n-t}$, puis démontre qu’elle coïncide avec $(-1)^k$ pour toute décomposition en $k$ transpositions et forme un épimorphisme $S_n \\to \\{-1, 1\\}$.',
    firstSeenPage: 115
  },
  'groupe-alterne': {
    id: 'groupe-alterne',
    term: 'Groupe alterné $A_n$',
    modernEquivalent: 'Noyau $\\Ker \\varepsilon$ de la signature (ordre $n!/2$ pour $n \\geqslant 2$)',
    explanationTex:
      'Sous-groupe des permutations paires de $S_n$. Pour $n \\geqslant 2$, $[S_n : A_n] = 2$ et $S_n / A_n \\simeq \\{-1, 1\\}$.',
    firstSeenPage: 120
  },
  'groupe-diedral': {
    id: 'groupe-diedral',
    term: 'Groupe diédral $D_n$',
    modernEquivalent: 'Groupe des isométries d’un polygone régulier à $n$ sommets (ordre $2n$)',
    explanationTex:
      'Engendré par la rotation élémentaire $\\rho_1$ d’angle $\\frac{2\\pi}{n}$ et une réflexion axiale $\\sigma$, avec $\\sigma \\circ \\rho_1 \\circ \\sigma^{-1} = \\rho_1^{-1}$. Abélien pour $n = 2$ ($D_2 \\simeq \\Zn{2} \\times \\Zn{2}$), non abélien pour $n \\geqslant 3$ ($D_3 \\simeq S_3$).',
    firstSeenPage: 121
  }
}
