import type { ExerciseEntry } from './exercises'

export const EXERCISES_C3: Record<string, ExerciseEntry> = {
  'c3-e01': {
    id: 'c3-e01',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 1,
    title: 'Ordre dans un produit de groupes cycliques',
    page: 126,
    upToOrderIndex: 899,
    statementTex: `Soient deux groupes cycliques $\\mathrm{C}_m$ et $\\mathrm{C}_n$ ($m \\neq n$).

On pose $\\mathrm{C}_m = \\langle x \\rangle$ et $\\mathrm{C}_n = \\langle y \\rangle$.

*a)* Soient $a \\in \\mathrm{C}_m$ et $b \\in \\mathrm{C}_n$ tels que $o(a) = r$ et $o(b) = s$.

Quel est l’ordre de l’élément $(a, b)$ dans le groupe $\\mathrm{C}_m \\times \\mathrm{C}_n$ ?

*b)* À l’aide du résultat obtenu dans *a)*, démontrer le corollaire $(3.30)$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e02': {
    id: 'c3-e02',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 2,
    title: 'Théorème des restes chinois et surjectivité',
    page: 127,
    upToOrderIndex: 899,
    statementTex: `Soient $m$ et $n$ des entiers non nuls dans $\\N$.

*a)* Démontrer que $m$ et $n$ sont premiers entre eux, si et seulement si, quels que soient $a$ et $b$ dans $\\Z$, il existe $x \\in \\Z$ tel que :

$$x \\equiv a \\pmod{m} \\qquad \\text{et} \\qquad x \\equiv b \\pmod{n}.$$

[Utiliser le théorème de Bézout.]

*b)* On note, respectivement, $\\sigma$ et $\\pi$ les surjections canoniques :

$$\\Z \\to \\frac{\\Z}{m\\Z} \\qquad \\text{et} \\qquad \\Z \\to \\frac{\\Z}{n\\Z}.$$

À l’aide du résultat *a)*, prouver que l’application

$$\\begin{aligned}
f : \\Z &\\to \\frac{\\Z}{m\\Z} \\times \\frac{\\Z}{n\\Z} \\\\
x &\\mapsto (\\sigma(x), \\pi(x))
\\end{aligned}$$

est surjective si et seulement si $m$ et $n$ sont premiers entre eux ; retrouver alors le résultat du théorème $(3.29)$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e03': {
    id: 'c3-e03',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 3,
    title: 'Groupe des inversibles de Z/15Z',
    page: 127,
    upToOrderIndex: 899,
    statementTex: `*a)* Déterminer le groupe multiplicatif $G_{15}$ formé par les éléments inversibles de l’anneau $\\dfrac{\\Z}{15\\Z}$.

*b)* Démontrer la propriété : $G_{15} \\simeq \\mathrm{C}_2 \\times \\mathrm{C}_4$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e04': {
    id: 'c3-e04',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 4,
    title: 'Théorèmes d’Euler et de Fermat',
    page: 127,
    upToOrderIndex: 899,
    statementTex: `*a)* (*Théorème d’Euler*) : Soit $n \\in \\N^*$ ; soit $a \\in \\Z^*$, premier avec $n$ ; $\\varphi$ désignant la fonction d’Euler, démontrer la relation :

$$a^{\\varphi(n)} \\equiv 1 \\pmod{n}.$$

*b)* (*Théorème de Fermat*) $^{(4)}$ : Soient $p$ un nombre premier et $a \\in \\Z$, prouver la relation : $a^p \\equiv a \\pmod{p}$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e05': {
    id: 'c3-e05',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 5,
    title: 'Groupes abéliens de type fini et éléments d’ordre fini',
    page: 127,
    upToOrderIndex: 899,
    statementTex: `*a)* Soit $G$ un groupe *abélien* et $S = \\{a_1, a_2, \\dots, a_r\\}$ une partie finie non vide de $G$ ($r \\geqslant 1$ dans $\\N$).

Vérifier que

$$\\langle S \\rangle = \\{a_1^{k_1} a_2^{k_2} \\dots a_r^{k_r} ;\\; k_i \\in \\Z \\text{ pour tout } i\\; (1 \\leqslant i \\leqslant r)\\}.$$

Comment s’écrivent les éléments de $\\langle S \\rangle$ si le groupe $G$ est additif ?

*b)* Soit $G$ un groupe abélien de type fini ; démontrer que si tout élément de $G$ est d’ordre fini, alors $G$ est fini.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e06': {
    id: 'c3-e06',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 6,
    title: 'Groupes finis d’exposant 2',
    page: 128,
    upToOrderIndex: 899,
    statementTex: `Soit $G$ un groupe *fini* dans lequel tout élément $x$ vérifie la condition : $x^2 = e$ [d’après l’exercice 5, chap. I, $G$ est *abélien*].

Soit $\\{a_1, a_2, \\dots, a_r\\}$, $r \\geqslant 1$ dans $\\N$, une famille génératrice de $G$ ; on suppose cette famille *minimale*, c’est-à-dire qu’aucune famille génératrice de $G$ ne contient moins de $r$ éléments.

*a)* Montrer que tout $x \\in G$ s’écrit de façon unique :

$$x = a_1^{k_1} a_2^{k_2} \\dots a_r^{k_r}, \\qquad \\text{avec } k_i \\in \\{0, 1\\}, \\quad \\text{pour tout } i\\; (1 \\leqslant i \\leqslant r).$$

*b)* Prouver que l’on a : $G \\simeq \\mathrm{C}_2 \\times \\mathrm{C}_2 \\times \\dots \\times \\mathrm{C}_2$ ($r$ fois) ; en déduire l’ordre de $G$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e07': {
    id: 'c3-e07',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 7,
    title: 'Type fini et non-monogénéité de Z × Z',
    page: 128,
    upToOrderIndex: 899,
    statementTex: `Montrer que le groupe additif $\\Z \\times \\Z$ est de type fini, mais n’est pas monogène.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e08': {
    id: 'c3-e08',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 8,
    title: 'Sous-groupes de (ℚ, +) et de (ℝ, +)',
    page: 128,
    upToOrderIndex: 899,
    statementTex: `*a)* Démontrer que le groupe $(\\Q, +)$ n’est pas monogène.

[On pourra supposer $\\left\\langle \\dfrac{m}{n} \\right\\rangle = \\Q$ et montrer que $\\dfrac{1}{2n} \\in \\Q$ conduit à une contradiction.] En déduire que le groupe $(\\R, +)$ n’est pas monogène.

*b)* Démontrer que le groupe $\\Q$ est engendré par l’ensemble :

$$\\left\\{\\frac{1}{n!} ;\\; n \\in \\N\\right\\}.$$

*c)* Montrer que tout sous-groupe monogène, non nul, de $\\Q$ est infini.

*d)* Prouver que tout sous-groupe de type fini, non nul, de $\\Q$ est isomorphe au groupe $\\Z$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e09': {
    id: 'c3-e09',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 9,
    title: 'Éléments d’ordre fini dans le groupe des homographies',
    page: 128,
    upToOrderIndex: 899,
    statementTex: `Soit $\\mathscr{H}$ le groupe des transformations conformes du plan (exercice 27, chap. I).

*a)* Soit $G$ le sous-groupe de $\\mathscr{H}$ engendré par l’homographie $g$ définie par $g(z) = z + 1$, pour tout $z \\in \\C$ et $g(\\infty) = \\infty$.

Montrer que $G$ est isomorphe au groupe $\\Z$.

*b)* Soient $\\alpha$ et $\\beta$ dans $\\C$ tels que $\\alpha \\neq 1$ ; on considère $h \\in \\mathscr{H}$ tel que $h(z) = \\alpha z + \\beta$, pour tout $z \\in \\C$ et $h(\\infty) = \\infty$.

Démontrer que $h$ est d’ordre fini dans $\\mathscr{H}$ si et seulement si $\\alpha$ est une racine de l’unité dans $\\C$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e10': {
    id: 'c3-e10',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 10,
    title: 'Endomorphismes puissance d’un groupe cyclique',
    page: 129,
    upToOrderIndex: 899,
    statementTex: `Soit $\\mathrm{C}_n$ un groupe cyclique d’ordre $n > 1$ ; on suppose $n = rs$ dans $\\N^*$.

*a)* Soit $f : \\mathrm{C}_n \\to \\mathrm{C}_n$ tel que, pour tout $a \\in \\mathrm{C}_n$, $f(a) = a^r$.

Vérifier que $f \\in \\End(\\mathrm{C}_n)$ et que $\\Ker f = \\{a \\in \\mathrm{C}_n ;\\; o(a) \\text{ divise } r\\}$.

En déduire que si $\\mathrm{C}_n = \\langle x \\rangle$, alors, pour tout $a \\in \\Ker f$, il existe $k \\in \\N^*$, tel que $a = x^{sk}$.

Déterminer les ordres des sous-groupes $\\Ker f$ et $\\Im f$ de $\\mathrm{C}_n$.

*b)* Soit $h$ l’endomorphisme de $\\mathrm{C}_n$ tel que, pour tout $a \\in \\mathrm{C}_n$, $h(a) = a^s$. Prouver que $\\Im f \\subseteq \\Ker h$ et $\\Im h = \\Ker f$ ; en déduire que $\\Im f = \\Ker h$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e11': {
    id: 'c3-e11',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 11,
    title: 'Ordres de matrices dans GL(2, C)',
    page: 129,
    upToOrderIndex: 899,
    statementTex: `Dans le groupe $\\GL(2, \\C)$, trouver les ordres des matrices suivantes :

$$\\begin{pmatrix} 1 & 0 \\\\ 0 & -i \\end{pmatrix}, \\quad \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}, \\quad \\begin{pmatrix} -i & 0 \\\\ 0 & i \\end{pmatrix}, \\quad \\begin{pmatrix} 2 & -3i \\\\ 1 & +i \\end{pmatrix}, \\quad \\begin{pmatrix} 2 & -2i \\\\ -3 & +2i \\end{pmatrix}, \\quad \\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix}.$$`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e12': {
    id: 'c3-e12',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 12,
    title: 'Groupe des matrices triangulaires supérieures de GL(2, R)',
    page: 129,
    upToOrderIndex: 899,
    statementTex: `Soit $G$ l’ensemble des matrices de la forme $\\begin{pmatrix} a & b \\\\ 0 & c \\end{pmatrix}$ où $a, b, c$ sont des nombres réels tels que $ac \\neq 0$.

*a)* Vérifier que $G$ est un sous-groupe de $\\GL(2, \\R)$ et que $G$ est infini, non abélien.

*b)* Soit $H$ l’ensemble des éléments de $G$ pour lesquels $a = c = 1$.

Prouver que $H$ est un sous-groupe de $G$ isomorphe au groupe $(\\R, +)$.

*c)* Déterminer dans le groupe $G$ tous les éléments d’ordre $2$.

Montrer que, dans $G$, le produit de deux éléments d’ordre $2$ peut être d’ordre infini.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e13': {
    id: 'c3-e13',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 13,
    title: 'Ordre d’une puissance dans un groupe cyclique',
    page: 129,
    upToOrderIndex: 899,
    statementTex: `Soit $\\mathrm{C}_n$ un groupe cyclique d’ordre $n > 1$ et soit $k$ un entier tel que $1 \\leqslant k \\leqslant n - 1$.

Démontrer que $o(x^k) = \\dfrac{n}{d}$ où $d$ est $\\text{P.G.C.D.}$ de $k$ et $n$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e14': {
    id: 'c3-e14',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 14,
    title: 'Ordre du produit de deux éléments qui commutent',
    page: 129,
    upToOrderIndex: 899,
    statementTex: `Soit $G$ un groupe quelconque ; soient $x$ et $y$ deux éléments d’ordre fini dans $G$, tels que $o(x) = m > 1$ et $o(y) = n > 1$.

On suppose que $x$ et $y$ *commutent* dans $G$.

*a)* Prouver que $xy$ est d’ordre fini dans $G$.

En serait-il nécessairement de même si $x$ et $y$ ne commutaient pas ? (voir l’exercice 12 ci-dessus).

*b)* Montrer que si $m$ et $n$ sont premiers entre eux, alors $o(xy) = mn$.

*c)* On suppose $m$ et $n$ non premiers entre eux et $\\langle x \\rangle \\cap \\langle y \\rangle = \\langle e \\rangle$, $e$ étant l’élément unité de $G$.

Prouver que $o(xy) = l$ où $l$ est $\\text{P.P.C.M.}$ de $m$ et $n$.

Si $\\langle x \\rangle \\cap \\langle y \\rangle \\neq \\langle e \\rangle$, vérifier que l’on peut seulement affirmer que $o(xy)$ divise $l$. Trouver au moins un exemple pour lequel $o(xy) < l$.

*d)* Étant donné une permutation $\\sigma \\neq e$ dans un groupe symétrique $S_p$ ($p \\geqslant 3$), retrouver, à l’aide des résultats précédents, que si $\\sigma = \\gamma_1 \\circ \\gamma_2 \\circ \\dots \\circ \\gamma_s$ est la décomposition *canonique* de $\\sigma$ en un produit de cycles, alors l’ordre de $\\sigma$, dans le groupe $S_p$, est le $\\text{P.P.C.M.}$ des longueurs des cycles $\\gamma_i$ ($1 \\leqslant i \\leqslant s$) (proposition $(3.59)$).`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e15': {
    id: 'c3-e15',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 15,
    title: 'Exposant d’un groupe abélien fini',
    page: 130,
    upToOrderIndex: 899,
    statementTex: `Soit $G$ un groupe *abélien* fini ($G \\neq (e)$).

Soit $s = \\sup\\{o(x) ;\\; x \\in G\\}$. Démontrer que $x^s = e$, quel que soit $x \\in G$ (voir l’exercice 14 ci-dessus).`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e16': {
    id: 'c3-e16',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 16,
    title: 'Dénombrement d’éléments et de sous-groupes dans Z/p²Z × Z/pZ',
    page: 130,
    upToOrderIndex: 899,
    statementTex: `Soit $p$ un nombre premier ; on considère le groupe $G = \\dfrac{\\Z}{p^2\\Z} \\times \\dfrac{\\Z}{p\\Z}$.

Combien le groupe $G$ contient-il :

*a)* d’éléments d’ordre $p$ ?

*b)* d’éléments d’ordre $p^2$ ?

*c)* de sous-groupes d’ordre $p$ ?

*d)* de sous-groupes d’ordre $p^2$ ?`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e17': {
    id: 'c3-e17',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 17,
    title: 'Groupe des automorphismes d’un groupe monogène',
    page: 130,
    upToOrderIndex: 899,
    statementTex: `*Étude du groupe des automorphismes d’un groupe monogène.*

Soit $G$ un groupe monogène ; on pose $G = \\langle x \\rangle$.

*a)* Montrer que, quel que soit $\\alpha \\in \\Aut(G)$, $\\alpha(x)$ est un générateur de $G$.

*b)* On suppose $G$ cyclique d’ordre $n > 1$. Étant donné un entier $k$ premier avec $n$ et tel que $1 \\leqslant k \\leqslant n - 1$, on considère l’application

$$\\begin{aligned}
\\lambda : G &\\to G \\\\
a &\\mapsto a^k
\\end{aligned}$$

Vérifier que $\\lambda \\in \\Aut(G)$.

Démontrer alors qu’il existe un isomorphisme de groupes de $\\Aut(G)$ sur le groupe multiplicatif $G_n$ des éléments inversibles de l’anneau $\\dfrac{\\Z}{n\\Z}$ ; en conclure que le groupe $\\Aut(G)$ est abélien et d’ordre $\\varphi(n)$.

*c)* On suppose $G$ monogène infini ; prouver que le groupe $\\Aut(G)$ est cyclique d’ordre $2$.

*d)* À l’aide des résultats précédents, trouver des exemples de groupes non isomorphes dont les groupes d’automorphismes sont isomorphes.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e18': {
    id: 'c3-e18',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 18,
    title: 'Condition (D) dans le cas abélien et groupe multiplicatif d’un corps fini',
    page: 131,
    upToOrderIndex: 899,
    statementTex: `Soit $G$ un groupe *abélien*, *fini*, d’ordre $n > 1$ ; on note $e$ son élément unité. On suppose que $G$ satisfait à la condition $(\\mathscr{D})$ suivante :

$$(\\mathscr{D}) : \\begin{cases} \\text{pour tout entier positif } d \\text{ divisant } n, \\text{ il existe au plus } d \\text{ élé-} \\\\ \\text{ments } x \\text{ de } G \\text{ tels que } x^d = e. \\end{cases}$$

On pose $n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dots p_k^{\\alpha_k}$, les $p_i$ ($1 \\leqslant i \\leqslant k$) étant des nombres premiers distincts et les $\\alpha_i$ des entiers strictement positifs.

*a)* Montrer que pour tout $i$ ($1 \\leqslant i \\leqslant k$) il existe au moins un élément $b_i \\in G$ tel que $b_i^{\\frac{n}{p_i}} \\neq e$. Vérifier que $b_i^{\\frac{n}{p_i}} \\neq e$ implique $b_i^{\\frac{n}{p_i^{\\alpha_i}}} \\neq e$.

En déduire que pour tout $i$ ($1 \\leqslant i \\leqslant k$) il existe $a_i \\in G$ tel que $o(a_i) = p_i^{\\alpha_i}$.

*b)* Démontrer, en utilisant le résultat *b)* de l’exercice 14 ci-dessus, que le groupe $G$ est cyclique.

*c)* Soit $K$ un corps fini (il est commutatif d’après le théorème de Wedderburn $^{(5)}$ [39]). On considère le groupe multiplicatif $K^* = K \\setminus \\{0\\}$. Sachant que tout polynôme à une indéterminée sur un corps commutatif $K$, de degré $d \\geqslant 1$, a au plus $d$ racines dans $K$, démontrer à l’aide du résultat *b)* ci-dessus que le groupe $K^*$ est cyclique.

En conclure que, si $p$ est un nombre premier, le groupe $G_p$ des éléments inversibles du corps $\\dfrac{\\Z}{p\\Z}$ est cyclique d’ordre $(p - 1)$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e19': {
    id: 'c3-e19',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 19,
    title: 'Condition (D) sans hypothèse de commutativité et identité de Gauss',
    page: 131,
    upToOrderIndex: 899,
    statementTex: `Soit $G$ un groupe *fini* d’ordre $n > 1$, d’élément unité $e$.

On *ne suppose pas* $G$ abélien, mais on suppose que $G$ vérifie la condition $(\\mathscr{D})$ de l’exercice 18 ci-dessus.

On note $D$ l’ensemble des entiers positifs diviseurs de $n$.

On remarque que $D$ contient au moins $1$ et $n$.

*a)* Pour tout $d \\in D$, on désigne par $\\alpha(d)$ le nombre des éléments de $G$, d’ordre $d$ ; on a $\\alpha(d) \\geqslant 0$. Justifier l’égalité :

$$n = \\sum_{d \\in D} \\alpha(d) \\tag{1}$$

*b)* $\\varphi$ désignant la fonction d’Euler, démontrer que :

$$(d \\in D \\text{ et } \\alpha(d) \\neq 0) \\Rightarrow \\alpha(d) = \\varphi(d).$$

*c)* En considérant un groupe cyclique $\\mathrm{C}_n$, justifier l’égalité :

$$n = \\sum_{d \\in D} \\varphi(d) \\tag{2}$$

*d)* Déduire des résultats ci-dessus que l’on a $\\alpha(n) > 0$ ; en conclure que $G$ est cyclique.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e20': {
    id: 'c3-e20',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 20,
    title: 'Groupe des inversibles de Z/pⁿZ',
    page: 132,
    upToOrderIndex: 899,
    statementTex: `*Groupe des éléments inversibles de l’anneau* $\\dfrac{\\Z}{p^n\\Z}$, *où $p$ est un nombre premier et $n \\geqslant 1$ dans $\\N$.*

On note $G_{p^n}$ le groupe multiplicatif des éléments inversibles de $\\dfrac{\\Z}{p^n\\Z}$. On rappelle que, pour $n = 1$, le groupe $G_p$ est cyclique (voir exercice 18 ci-dessus).

$1^\\circ$ Justifier la propriété : $G_{p^n}$ est un groupe abélien d’ordre $p^{n-1}(p - 1)$.

$2^\\circ$ On considère le cas $p = 3$, $n = 2$. Déterminer le groupe $G_9$, vérifier qu’il est cyclique et trouver tous ses générateurs.

Dans les trois questions suivantes, on suppose que le nombre premier $p$ *est impair* et le but de ces questions est de prouver que, dans ce cas, pour tout $n \\geqslant 1$ dans $\\N$, le groupe $G_{p^n}$ est cyclique.

$3^\\circ$ Pour $n > 1$ dans $\\N$ et $x \\in \\Z$, on note $\\overline{x}$ la classe de $x$ modulo $p^n\\Z$ et $\\dot{x}$ la classe de $x$ modulo $p$. On considère la correspondance :

$$\\begin{aligned}
\\varphi : G_{p^n} &\\to G_p \\\\
\\overline{x} &\\mapsto \\dot{x}
\\end{aligned}$$

*a)* Vérifier que $\\varphi$ est une application et montrer que c’est un épimorphisme de groupes.

*b)* Quel est l’ordre du sous-groupe $\\Ker \\varphi$ de $G_{p^n}$ ?

Caractériser les éléments $x \\in \\Z$ tels que $\\overline{x} \\in \\Ker \\varphi$.

*c)* Soit $\\dot{x}$ un générateur du groupe $G_p$ ; dans $G_{p^n}$, on considère l’élément $\\overline{y} = (\\overline{x})^{p^{n-1}}$. Trouver l’ordre de $\\overline{y}$ dans $G_{p^n}$.

$4^\\circ$ *a)* Soit $r \\in \\N$ tel que $1 \\leqslant r \\leqslant p - 1$ ; $\\mathrm{C}_p^r$ désignant le nombre des combinaisons de $p$ éléments $r$ à $r$, vérifier que $\\mathrm{C}_p^r = p\\lambda$, où $\\lambda \\in \\N^*$ et $p$ ne divise pas $\\lambda$.

*b)* Démontrer, que pour tout $r \\in \\N$, on a

$$(1 + p)^{p^r} - 1 = p^{r+1}\\mu, \\qquad \\text{où } \\mu \\in \\N^* \\text{ et } p \\text{ ne divise pas } \\mu.$$

[Faire un raisonnement par récurrence sur $r$.]

*c)* Trouver l’ordre de $\\overline{1 + p}$ dans $G_{p^n}$.

$5^\\circ$ Montrer que les résultats précédents impliquent que le groupe $G_{p^n}$ est cyclique [voir exercice 14 ci-dessus].

En conclure que $G_{p^n}$ est isomorphe à $\\dfrac{\\Z}{(p - 1)\\Z} \\times \\dfrac{\\Z}{p^{n-1}\\Z}$.

$6^\\circ$ On considère le cas où $p = 2$ et $n > 1$.

*a)* Déterminer les groupes $G_4$, $G_8$ ; sont-ils cycliques ?

*b)* Pour $n > 3$, prouver, grâce à un morphisme de groupes convenable de $G_{2n}$ dans $G_8$, que le groupe $G_{2n}$ n’est pas cyclique.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e21': {
    id: 'c3-e21',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 21,
    title: 'Décomposition en cycles, ordre, signature et puissances de permutations',
    page: 133,
    upToOrderIndex: 899,
    statementTex: `Pour chacune des permutations suivantes, déterminer : sa décomposition canonique en produit de cycles disjoints, son ordre, sa signature et une décomposition en produit de transpositions

$$\\sigma_1 = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\\\ 3 & 5 & 4 & 6 & 2 & 1 \\end{pmatrix}$$

$$\\sigma_2 = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\\\ 4 & 6 & 9 & 7 & 2 & 5 & 8 & 1 & 3 \\end{pmatrix}$$

$$\\sigma_3 = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\\\ 3 & 4 & 2 & 1 & 8 & 7 & 9 & 11 & 12 & 10 & 5 & 6 \\end{pmatrix}$$

Calculer $\\sigma_1^{50}$, $\\sigma_2^{100}$, $\\sigma_3^{10}$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e22': {
    id: 'c3-e22',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 22,
    title: 'Décomposition d’un r-cycle en transpositions',
    page: 133,
    upToOrderIndex: 899,
    statementTex: `Étant donné un $r$-cycle $\\gamma$, dans $S_n$ ($n \\geqslant 3$, $r \\geqslant 3$) tel que $\\gamma = (j_1, j_2, \\dots, j_r)$, vérifier l’égalité :

$$\\gamma = (j_1, j_r)(j_1, j_{r-1}) \\dots (j_1, j_2).$$`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e23': {
    id: 'c3-e23',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 23,
    title: 'Puissances d’un r-cycle qui sont encore des cycles',
    page: 133,
    upToOrderIndex: 899,
    statementTex: `Soit $\\gamma$ un $r$-cycle dans $S_n$ ($n \\geqslant 2$) ; pour quelles valeurs de $p$ entier tel que $1 \\leqslant p \\leqslant r - 1$, $\\gamma^p$ est-il un cycle ?`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e24': {
    id: 'c3-e24',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 24,
    title: 'Conjugaison des cycles et engendrement de Sn par (1, 2) et (1, ..., n)',
    page: 133,
    upToOrderIndex: 899,
    statementTex: `Soit $n \\geqslant 3$ dans $\\N$ et $\\gamma$ un $r$-cycle dans $S_n$ tel que

$$\\gamma = (j_1, j_2, \\dots, j_r).$$

*a)* Étant donné $\\sigma \\in S_n$, démontrer que $\\sigma \\circ \\gamma \\circ \\sigma^{-1}$ est le $r$-cycle $(\\sigma(j_1), \\sigma(j_2), \\dots, \\sigma(j_r))$.

*b)* Soit $\\gamma_1 = (1, 2, \\dots, n)$ la permutation circulaire dans $S_n$ ; $p$ étant un entier tel que $1 \\leqslant p \\leqslant n$, expliciter la permutation $\\gamma_1^p$.

On pose $\\tau_1 = (1, 2)$ ; calculer $\\gamma_1^p \\circ \\tau_1 \\circ \\gamma_1^{-p}$ ; en déduire que les permutations $\\tau_1$ et $\\gamma_1$ engendrent $S_n$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e25': {
    id: 'c3-e25',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 25,
    title: 'Automorphismes intérieurs de Sn (n ⩾ 3)',
    page: 133,
    upToOrderIndex: 899,
    statementTex: `En application du résultat *a)* de l’exercice 24 ci-dessus, démontrer que, pour $n \\geqslant 3$, le groupe $\\Int(S_n)$ des automorphismes intérieurs de $S_n$ est isomorphe à $S_n$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e26': {
    id: 'c3-e26',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 26,
    title: 'Générateurs du groupe alterné An (n ⩾ 4)',
    page: 134,
    upToOrderIndex: 899,
    statementTex: `Soit $n \\geqslant 4$ dans $\\N$. Pour $i, j, k, l$ distincts dans $\\N_n$, vérifier les relations :

$$(i, j)(j, k) = (i, j, k) \\qquad \\text{et} \\qquad (i, j)(k, l) = (i, j, k)(j, k, l).$$

En déduire que le groupe alterné $A_n$ est engendré :

*a)* par l’ensemble des $3$-cycles de $S_n$ ;

*b)* par l’ensemble des $3$-cycles de la forme $(1, i, j)$ pour $2 \\leqslant i \\leqslant n$, $2 \\leqslant j \\leqslant n$ ;

*c)* par l’ensemble des $3$-cycles de la forme $(1, 2, i)$, $3 \\leqslant i \\leqslant n$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e27': {
    id: 'c3-e27',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 27,
    title: 'Sous-groupe de Klein dans A4',
    page: 134,
    upToOrderIndex: 899,
    statementTex: `Dans $S_4$ on pose : $K = \\{e, (1, 2)(3, 4), (1, 3)(2, 4), (1, 4)(2, 3)\\}$.

Vérifier que $K$ est un sous-groupe commutatif de $A_4$ ; écrire sa table de multiplication ; en déduire que $K$ est isomorphe au groupe de Klein.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e28': {
    id: 'c3-e28',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 28,
    title: 'Stabilisateurs d’un élément et d’une partie dans Sn',
    page: 134,
    upToOrderIndex: 899,
    statementTex: `*a)* Soit $H = \\{\\sigma \\in S_5 ;\\; \\sigma(1) = 1\\}$. Vérifier que $H$ est un sous-groupe de $S_5$ et trouver son ordre.

*b)* Soit $K = \\{\\sigma \\in S_5 ;\\; \\sigma(1) = 1 \\text{ ou } \\sigma(1) = 2\\}$. Montrer que $K$ n’est pas un sous-groupe de $S_5$.

*c)* $r$ et $n$ étant des entiers tels que $3 \\leqslant r \\leqslant n$, on pose

$$F = \\{\\sigma \\in S_n ;\\; \\forall i\\; (1 \\leqslant i \\leqslant r),\\; \\sigma(i) \\in \\{1, 2, \\dots, r\\}\\}.$$

Prouver que $F$ est un sous-groupe de $S_n$ et déterminer son ordre.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e29': {
    id: 'c3-e29',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 29,
    title: 'Calculs de permutations dans S9',
    page: 134,
    upToOrderIndex: 899,
    statementTex: `Dans $S_9$ on considère les permutations suivantes :

$$\\pi = (1, 2, 3)(4, 5, 6)(7, 8, 9), \\qquad \\sigma = (4, 5, 6)(7, 8, 9),$$

$$\\tau = (1, 4, 7)(2, 5, 8)(3, 6, 9).$$

*a)* Vérifier que $\\pi$ commute avec $\\sigma$ et $\\tau$.

*b)* Quels sont les ordres des permutations $\\pi$, $\\sigma$, $\\tau$ et $\\sigma \\circ \\tau$ ?

*c)* Calculer $\\tau \\circ \\sigma \\circ \\tau^{-1}$ et $\\tau^{-1} \\circ \\sigma \\circ \\tau$ ; en déduire que $\\pi$ est une puissance de $\\sigma \\circ \\tau$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e30': {
    id: 'c3-e30',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 30,
    title: 'Sous-groupe engendré par deux éléments d’ordre 2',
    page: 134,
    upToOrderIndex: 899,
    statementTex: `Soit $G$ un groupe *fini*, d’élément unité $e$. $U$ désignant l’ensemble des éléments d’ordre $2$ dans $G$, on suppose $\\card(U) > 1$.

*a)* Montrer que $G$ est nécessairement d’ordre pair.

*b)* Soient $u$ et $v$ dans $U$, vérifier que l’on a $u^{-1} = u$ et $v^{-1} = v$ ; en déduire que le sous-groupe $\\langle u, v \\rangle$ de $G$ engendré par $u$ et $v$ est tel que :

$$\\langle u, v \\rangle = \\{e, u, v, (uv)^m, u(uv)^n, v(uv)^p ;\\; (m, n, p) \\in \\Z^3\\}.$$

*c)* On pose $t = uv$ et on note $k$ l’ordre de $t$ dans $G$ ; montrer que l’on peut écrire

$$\\langle u, v \\rangle = \\{t, \\dots, t^{k-1}, e, u, ut, \\dots, ut^{k-1}\\}.$$

Calculer $(ut)^2$ ; en conclure que $\\langle u, v \\rangle$ est isomorphe au groupe diédral $D_k$ [on pourra distinguer les cas $k = 2$ et $k > 2$].`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e31': {
    id: 'c3-e31',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 31,
    title: 'Le groupe diédral infini D∞',
    page: 135,
    upToOrderIndex: 899,
    statementTex: `Soit $\\R$ considéré comme espace affine euclidien de dimension $1$.

*Les notations sont celles de l’exercice 6, chap. II.*

À tout $n \\in \\Z$ on associe la translation $\\tau_n : \\R \\to \\R$ telle que $\\tau_n(x) = x + n$.

*a)* Vérifier que, pour tout $n \\in \\Z$, on a $\\tau_1^n = \\tau_n$.

*b)* On pose $\\mathrm{S}_{\\R}(\\Z) = \\{\\varphi \\in \\mathscr{I}(1) ;\\; \\varphi(\\Z) = \\Z\\}$ ; prouver que $\\mathrm{S}_{\\R}(\\Z)$ est formé par l’ensemble des $\\tau_1^n$ et des $\\tau_1^n \\circ \\sigma_0$, pour $n \\in \\Z$, $\\sigma_0$ étant l’isométrie de $\\R$ telle que $x \\mapsto -x$ (voir l’exercice 6, chap. II) ; en déduire que $\\mathrm{S}_{\\R}(\\Z)$ est un sous-groupe de $\\mathscr{I}(1)$.

Le groupe $\\mathrm{S}_{\\R}(\\Z)$ est appelé : *groupe diédral infini* et il est généralement noté $D_\\infty$.`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e32': {
    id: 'c3-e32',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 32,
    title: 'Représentation matricielle des groupes diédraux Dn et D4',
    page: 135,
    upToOrderIndex: 899,
    statementTex: `*a)* Soit $n \\geqslant 3$ dans $\\N$ ; on pose $\\alpha = \\exp\\left(\\dfrac{2\\pi i}{n}\\right)$ dans $\\C$.

Démontrer que le groupe multiplicatif engendré par les matrices complexes :

$$X = \\begin{pmatrix} \\alpha & 0 \\\\ 0 & \\alpha^{-1} \\end{pmatrix} \\qquad \\text{et} \\qquad Y = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$$

est isomorphe au groupe diédral $D_n$.

*b)* Vérifier que le groupe diédral $D_4$ est isomorphe au groupe multiplicatif engendré par les matrices réelles

$$U = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} \\qquad \\text{et} \\qquad V = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}.$$`,
    hintTex: '',
    correctionTex: ''
  },
  'c3-e33': {
    id: 'c3-e33',
    chapter: 3,
    chapterLabel: 'Chapitre III — Groupes monogènes, symétriques et diédraux',
    number: 33,
    title: 'Preuve par récurrence de l’engendrement de Sn par les transpositions',
    page: 135,
    upToOrderIndex: 899,
    statementTex: `Soit $n \\geqslant 2$ dans $\\N$. Démontrer par récurrence sur $n$ que toute permutation $\\sigma \\in S_n$ est un produit de transpositions appartenant à $S_n$.

[Pour $n > 2$ et $\\sigma \\neq e$, dans $S_n$, vérifier qu’on ne restreint pas la généralité en supposant $\\sigma(n) = k \\neq n$ ; poser alors $\\tau = (k, n)$ ; montrer que $\\tau \\circ \\sigma$ peut être considéré comme un élément de $S_{n-1}$ et utiliser l’hypothèse de récurrence.]`,
    hintTex: '',
    correctionTex: ''
  }
}
