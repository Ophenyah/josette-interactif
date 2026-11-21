import type { ExerciseEntry } from './exercises'

export const EXERCISES_C2: Record<string, ExerciseEntry> = {
  'c2-e01': {
    id: 'c2-e01',
    chapter: 2,
    chapterLabel: 'Chapitre II — Classes modulo un sous-groupe',
    number: 1,
    title: 'Intersection de sous-groupes d’ordres premiers entre eux',
    page: 84,
    upToOrderIndex: 599,
    statementTex: `Soient $H$ et $K$ deux sous-groupes *finis* d’un groupe $G$, tels que $o(H) = p$ et $o(K) = q$. Montrer que si $p$ et $q$ sont premiers entre eux, alors $H \\cap K$ est réduit à l’élément neutre de $G$.`,
    hintTex: `Par la proposition $(1.25)$, $H \\cap K$ est un sous-groupe à la fois de $H$ et de $K$. Appliquez le théorème de Lagrange $(2.9)$ dans chacun des deux groupes finis $H$ et $K$ pour étudier l’ordre $o(H \\cap K)$.`,
    correctionTex: `Notons $e$ l’élément neutre de $G$.

D’après la proposition $(1.25)$, $H \\cap K$ est un sous-groupe de $G$. Comme $H \\cap K \\subseteq H$ et $H \\cap K \\subseteq K$, $H \\cap K$ est en particulier un sous-groupe du groupe fini $H$ (d’ordre $p$) et un sous-groupe du groupe fini $K$ (d’ordre $q$) ; en particulier, $H \\cap K$ est fini.

En appliquant le théorème de Lagrange $(2.9)$ successivement dans $H$ puis dans $K$, on obtient que $o(H \\cap K)$ divise $o(H) = p$ et $o(H \\cap K)$ divise $o(K) = q$.

Ainsi, $o(H \\cap K)$ est un diviseur commun positif de $p$ et $q$. Or $p$ et $q$ sont premiers entre eux, c’est-à-dire $\\pgcd(p, q) = 1$ ; il s’ensuit que $o(H \\cap K) = 1$.

Puisque $e \\in H \\cap K$ (remarque $(1.21)$ $1^\\circ$) et $\\card(H \\cap K) = 1$, on conclut que $H \\cap K = \\{e\\} = (e)$ : l’intersection $H \\cap K$ est réduite à l’élément neutre de $G$.

*Remarque :* le groupe ambiant $G$ n’a nul besoin d’être fini ; seule la finitude de $H$ et de $K$ intervient.`
  },
  'c2-e02': {
    id: 'c2-e02',
    chapter: 2,
    chapterLabel: 'Chapitre II — Classes modulo un sous-groupe',
    number: 2,
    title: 'Indice d’une intersection de sous-groupes',
    page: 84,
    upToOrderIndex: 599,
    statementTex: `Soient $H$ et $K$ deux sous-groupes d’un groupe $G$. On suppose $[G : K]$ *fini*.

*a)* Soit $\\{x_i\\}_{i \\in I}$ une famille de représentants des classes à droite distinctes de $H$ modulo $H \\cap K$.

— Démontrer que, dans $G$, on a :

$$Kx_i = Kx_j \\iff i = j.$$

En déduire la relation : $[H : H \\cap K] \\leqslant [G : K]$ ; en conclure que $[H : H \\cap K]$ est fini.

— Prouver que $[H : H \\cap K] = [G : K]$, si $G = HK$.

*b)* On suppose de plus $[G : H]$ *fini* ; montrer que les résultats précédents impliquent :

$$[G : H \\cap K] \\leqslant [G : H][G : K] \\qquad (\\text{formule (5) chap. II})$$

et que l’égalité a lieu si $G = HK$.`,
    hintTex: `Pour *a)*, utilisez le fait que $x_i, x_j \\in H$ entraîne $x_i x_j^{-1} \\in H$ afin de relier $Kx_i = Kx_j$ à $(H \\cap K)x_i = (H \\cap K)x_j$. Lorsque $G = HK$, passez aux inverses pour montrer $G = KH$ et prouver la surjectivité de $i \\mapsto Kx_i$ ; pour *b)*, appliquez la formule des indices $(2.18)$ avec la remarque $(2.19)$.`,
    correctionTex: `D’après la proposition $(1.25)$, $H \\cap K$ est un sous-groupe de $G$ inclus dans $H$, donc $H \\cap K \\leqslant H$. La famille $\\{x_i\\}_{i \\in I}$ vérifie $x_i \\in H$ pour tout $i \\in I$, $H = \\bigcup_{i \\in I} (H \\cap K)x_i$, $(H \\cap K)x_i = (H \\cap K)x_j \\iff i = j$, et $\\card(I) = [H : H \\cap K]$ (définition $(2.14)$).

*a)*
— Soient $i, j \\in I$. Si $i = j$, alors $x_i = x_j$, donc trivialement $Kx_i = Kx_j$.
Réciproquement, supposons $Kx_i = Kx_j$. D’après la proposition $(2.1)$, cela équivaut à $x_i x_j^{-1} \\in K$. Or $x_i, x_j \\in H$ et $H \\leqslant G$, donc on a aussi $x_i x_j^{-1} \\in H$. Il en résulte que $x_i x_j^{-1} \\in H \\cap K$, ce qui signifie $(H \\cap K)x_i = (H \\cap K)x_j$ dans $H$. Comme les représentants $\\{x_i\\}_{i \\in I}$ correspondent à des classes distinctes modulo $H \\cap K$, on obtient $i = j$.
Ainsi, dans $G$, on a bien :

$$Kx_i = Kx_j \\iff i = j.$$

Considérons alors l’application

$$\\psi : I \\to \\left(\\frac{G}{K}\\right)_d, \\qquad i \\mapsto Kx_i.$$

L’équivalence précédente exprime précisément que $\\psi$ est injective. L’ensemble d’arrivée $\\left(\\dfrac{G}{K}\\right)_d$ étant fini de cardinal $[G : K]$ par hypothèse, l’ensemble $I$ est fini et vérifie :

$$[H : H \\cap K] = \\card(I) \\leqslant \\card\\!\\left(\\left(\\frac{G}{K}\\right)_d\\right) = [G : K].$$

En particulier, $[H : H \\cap K]$ est fini.

— Supposons maintenant $G = HK$. Pour tout $g \\in G$, son inverse $g^{-1} \\in G = HK$ s’écrit $g^{-1} = hk$ avec $h \\in H$ et $k \\in K$, d’où $g = (hk)^{-1} = k^{-1} h^{-1} \\in KH$ (formule $(5)$ du chap. $\\mathrm{I}^{\\text{er}}$) ; ainsi $G = KH$ (ce que donne aussi la proposition $(1.47)$ puisque $HK = G \\leqslant G$).
Montrons que $\\psi : i \\mapsto Kx_i$ est alors surjective. Soit $Kg \\in \\left(\\dfrac{G}{K}\\right)_d$ avec $g \\in G$. Comme $G = KH$, il existe $k \\in K$ et $h \\in H$ tels que $g = kh$. D’après la partition de $H$ en classes à droite modulo $H \\cap K$, il existe $i \\in I$ et $u \\in H \\cap K$ tels que $h = u x_i$. On obtient :

$$g = k(u x_i) = (ku)x_i.$$

Or $u \\in H \\cap K \\subseteq K$ et $k \\in K$, donc $ku \\in K$, d’où $g \\in Kx_i$ et par conséquent $Kg = Kx_i = \\psi(i)$.
L’application $\\psi$ est donc bijective, ce qui prouve l’égalité $[H : H \\cap K] = [G : K]$.

*b)* Supposons de plus $[G : H]$ fini. Appliquons la formule des indices $(2.18)$ (sous sa forme généralisée de la remarque $(2.19)$) à la chaîne de sous-groupes $H \\cap K \\leqslant H \\leqslant G$ : puisque $[G : H]$ est fini et que $[H : H \\cap K]$ est fini d’après *a)*, l’indice $[G : H \\cap K]$ est fini et l’on a :

$$[G : H \\cap K] = [G : H][H : H \\cap K].$$

(On peut aussi invoquer le théorème de Poincaré $(2.17)$ qui assure d’emblée la finitude de $[G : H \\cap K]$, puis appliquer $(2.18)$.)
En combinant cette égalité avec l’inégalité $[H : H \\cap K] \\leqslant [G : K]$ de *a)*, on obtient :

$$[G : H \\cap K] \\leqslant [G : H][G : K] \\qquad (\\text{formule } (5)\\text{ chap. II}).$$

Enfin, si $G = HK$, on a $[H : H \\cap K] = [G : K]$ d’après *a)*, d’où l’égalité :

$$[G : H \\cap K] = [G : H][G : K].$$`
  },
  'c2-e03': {
    id: 'c2-e03',
    chapter: 2,
    chapterLabel: 'Chapitre II — Classes modulo un sous-groupe',
    number: 3,
    title: 'Cardinal du produit HK de deux sous-groupes finis',
    page: 85,
    upToOrderIndex: 599,
    statementTex: `Soient $H$ et $K$ deux *sous-groupes finis* d’un groupe $G$.

On pose $[K : H \\cap K] = n$. Soit $\\{x_i\\}_{1 \\leqslant i \\leqslant n}$ une famille de représentants des classes à droite distinctes de $K$ modulo $H \\cap K$.

*a)* Démontrer que les $\\{Hx_i\\}_{1 \\leqslant i \\leqslant n}$ forment une partition de l’ensemble $HK$ (qui n’est pas nécessairement un sous-groupe).

*b)* $|HK|$ et $|KH|$ désignant les cardinaux de $HK$ et $KH$, prouver que

$$|HK| = |KH| = \\frac{o(H)\\,o(K)}{o(H \\cap K)}.$$

*c)* Lorsque $HK$ est un sous-groupe de $G$, vérifier que $o(HK)$, donné par la formule précédente, peut aussi être obtenu à partir du résultat *b)* de l’exercice 2 ci-dessus.`,
    hintTex: `Pour *a)*, utilisez la partition $K = \\bigcup_{i=1}^n (H \\cap K)x_i$ pour recouvrir $HK$, et montrez que $Hx_i \\cap Hx_j \\neq \\varnothing$ entraîne $x_i x_j^{-1} \\in H \\cap K$. Pour *b)*, utilisez $(2.8)$, $(2.15)$ et la bijection $z \\mapsto z^{-1}$ entre $HK$ et $KH$ ; pour *c)*, appliquez l’exercice 2 *b)* dans le groupe $HK$.`,
    correctionTex: `Notons que $K$ étant fini et $H \\cap K \\leqslant K$, l’indice $n = [K : H \\cap K]$ est bien un entier de $\\N^*$.

*a)* Vérifions les trois conditions définissant une partition de $HK$ :
— *Non-vacuité* : pour tout $i \\in \\{1, \\dots, n\\}$, $e \\in H$, donc $x_i = ex_i \\in Hx_i$ et $Hx_i \\neq \\varnothing$.
— *Recouvrement* : comme chaque $x_i \\in K$, on a $Hx_i \\subseteq HK$, d’où $\\bigcup_{1 \\leqslant i \\leqslant n} Hx_i \\subseteq HK$. Réciproquement, soit $z \\in HK$ ; il existe $h \\in H$ et $k \\in K$ tels que $z = hk$. Puisque la famille $\\{(H \\cap K)x_i\\}_{1 \\leqslant i \\leqslant n}$ forme une partition de $K$ (remarque $(2.3)$ $3^\\circ$), il existe $i \\in \\{1, \\dots, n\\}$ et $u \\in H \\cap K$ tels que $k = u x_i$. Comme $u \\in H$, on a $hu \\in H$ et $z = (hu)x_i \\in Hx_i$. Ainsi $HK = \\bigcup_{1 \\leqslant i \\leqslant n} Hx_i$.
— *Disjonction* : soient $i, j \\in \\{1, \\dots, n\\}$ tels que $Hx_i \\cap Hx_j \\neq \\varnothing$. Ce sont des classes à droite de $G$ modulo $H$, donc la remarque $(2.3)$ $3^\\circ$ donne $Hx_i = Hx_j$, soit $x_i x_j^{-1} \\in H$ (proposition $(2.1)$). Or $x_i, x_j \\in K$ et $K \\leqslant G$, donc $x_i x_j^{-1} \\in K$. On obtient $x_i x_j^{-1} \\in H \\cap K$, c’est-à-dire $(H \\cap K)x_i = (H \\cap K)x_j$, d’où $i = j$ car les classes $(H \\cap K)x_i$ sont distinctes.
Par conséquent, les ensembles $\\{Hx_i\\}_{1 \\leqslant i \\leqslant n}$ forment bien une partition de $HK$.

*b)* Le sous-groupe $H$ étant fini, le corollaire $(2.8)$ assure que chaque classe à droite $Hx_i$ est finie de cardinal $|Hx_i| = o(H)$. Grâce à la partition établie en *a)*, $HK$ est fini et :

$$|HK| = \\sum_{i=1}^n |Hx_i| = n\\,o(H).$$

En appliquant la proposition $(2.15)$ (formule $(2)$) au groupe fini $K$ et à son sous-groupe $H \\cap K$, on a $o(K) = o(H \\cap K)[K : H \\cap K] = n\\,o(H \\cap K)$, soit $n = \\dfrac{o(K)}{o(H \\cap K)}$. Il vient donc :

$$|HK| = \\frac{o(H)\\,o(K)}{o(H \\cap K)}.$$

De plus, l’application $\\varphi : HK \\to KH$ définie par $\\varphi(z) = z^{-1}$ est bien à valeurs dans $KH$ (si $z = hk$ avec $h \\in H, k \\in K$, alors $z^{-1} = k^{-1}h^{-1} \\in KH$ par la formule $(5)$ du chap. $\\mathrm{I}^{\\text{er}}$) et admet pour bijection réciproque $w \\mapsto w^{-1}$ de $KH$ dans $HK$ (puisque $(z^{-1})^{-1} = z$). Ainsi $HK$ et $KH$ sont équipotents, d’où :

$$|HK| = |KH| = \\frac{o(H)\\,o(K)}{o(H \\cap K)}.$$

*c)* Supposons que $HK$ soit un sous-groupe de $G$. D’après *b)*, $HK$ est un groupe fini. Comme $e \\in K$ et $e \\in H$, on a $H = He \\subseteq HK$ et $K = eK \\subseteq HK$, de sorte que $H$ et $K$ sont des sous-groupes du groupe fini $HK$ (d’indices finis dans $HK$). En appliquant le résultat de l’exercice 2 *b)* au groupe ambiant $G' = HK$ et à ses sous-groupes $H$ et $K$, l’hypothèse $G' = HK$ fournit l’égalité :

$$[HK : H \\cap K] = [HK : H][HK : K].$$

En exprimant chacun des trois indices à l’aide de la proposition $(2.15)$ dans le groupe fini $HK$, on obtient :

$$\\frac{o(HK)}{o(H \\cap K)} = \\frac{o(HK)}{o(H)} \\cdot \\frac{o(HK)}{o(K)}.$$

Comme $o(HK) \\in \\N^*$ est non nul, on peut simplifier par $o(HK)$ pour retrouver :

$$o(HK) = \\frac{o(H)\\,o(K)}{o(H \\cap K)}.$$`
  },
  'c2-e04': {
    id: 'c2-e04',
    chapter: 2,
    chapterLabel: 'Chapitre II — Classes modulo un sous-groupe',
    number: 4,
    title: 'Sous-groupe engendré et indices premiers entre eux',
    page: 85,
    upToOrderIndex: 599,
    statementTex: `$H$ et $K$ étant deux sous-groupes d’un groupe $G$, on note $F$ le sous-groupe de $G$ engendré par $H \\cup K$.

On suppose que $[F : H]$ et $[F : K]$ sont finis et *premiers entre eux*.

À l’aide de résultats de l’exercice 2 prouver les égalités :

$$[F : K] = [H : H \\cap K] \\qquad \\text{et} \\qquad [F : H] = [K : H \\cap K].$$`,
    hintTex: `Travaillez dans le groupe $F$ et combinez la formule des indices $(2.18)$ (appliquée à $H \\cap K \\leqslant H \\leqslant F$ et à $H \\cap K \\leqslant K \\leqslant F$) avec l’inégalité de l’exercice 2 *b)* dans $F$, puis exploitez le fait que $[F : H]$ et $[F : K]$ sont premiers entre eux (lemme de Gauss).`,
    correctionTex: `Par définition de $F = \\langle H \\cup K \\rangle$ (définition $(1.36)$), $F$ est un sous-groupe de $G$ contenant $H$ et $K$ ; ainsi $H \\leqslant F$, $K \\leqslant F$ et $H \\cap K$ est un sous-groupe de $F$ contenu dans $H$ et dans $K$.

Les indices $[F : H]$ et $[F : K]$ étant finis par hypothèse, l’exercice 2 *b)* appliqué dans le groupe ambiant $F$ aux sous-groupes $H$ et $K$ garantit que $[F : H \\cap K]$ est fini et satisfait l’inégalité :

$$[F : H \\cap K] \\leqslant [F : H][F : K].$$

Par ailleurs, la formule des indices $(2.18)$ appliquée dans $F$ aux deux chaînes $H \\cap K \\leqslant H \\leqslant F$ et $H \\cap K \\leqslant K \\leqslant F$ donne :

$$[F : H \\cap K] = [F : H][H : H \\cap K] = [F : K][K : H \\cap K].$$

En particulier, les entiers naturels non nuls $[F : H]$ et $[F : K]$ divisent tous deux l’entier $[F : H \\cap K]$. Comme $[F : H]$ et $[F : K]$ sont premiers entre eux, le lemme de Gauss implique que leur produit $[F : H][F : K]$ divise $[F : H \\cap K]$. Puisque $[F : H \\cap K] \\geqslant 1$, il en résulte :

$$[F : H][F : K] \\leqslant [F : H \\cap K].$$

En rapprochant les deux inégalités opposées, on obtient l’égalité :

$$[F : H \\cap K] = [F : H][F : K].$$

En reportant cette relation dans les deux identités issues de la formule des indices, on trouve :

$$[F : H][H : H \\cap K] = [F : H][F : K] \\qquad \\text{et} \\qquad [F : K][K : H \\cap K] = [F : H][F : K].$$

Enfin, comme $[F : H] \\neq 0$ et $[F : K] \\neq 0$, on simplifie de chaque côté pour conclure :

$$[F : K] = [H : H \\cap K] \\qquad \\text{et} \\qquad [F : H] = [K : H \\cap K].$$`
  },
  'c2-e05': {
    id: 'c2-e05',
    chapter: 2,
    chapterLabel: 'Chapitre II — Classes modulo un sous-groupe',
    number: 5,
    title: 'Classes doubles modulo H et K',
    page: 85,
    upToOrderIndex: 599,
    statementTex: `Soient $H$ et $K$ deux sous-groupes (non nécessairement distincts) d’un groupe $G$. On considère la relation binaire $\\mathscr{R}_{H, K}$ définie dans $G$ par :

$$x \\mathrel{\\mathscr{R}_{H, K}} y \\iff \\exists (h, k) \\in H \\times K, \\quad y = hxk.$$

*a)* Vérifier que $\\mathscr{R}_{H, K}$ est une relation d’équivalence dans $G$ et que la classe modulo $\\mathscr{R}_{H, K}$ d’un élément $x \\in G$ est $HxK = \\{hxk ; (h, k) \\in H \\times K\\}$.

$HxK$ sera appelée « *classe double de* $x$ *modulo* $H$ *et* $K$ » [35].

*b)* $x$ étant donné dans $G$, vérifier que l’application

$$\\begin{aligned}
\\lambda : HxK &\\to x^{-1}HxK \\\\
hxk &\\mapsto x^{-1}hxk
\\end{aligned}$$

est une bijection.

*c)* On suppose que le groupe $G$ est *fini* ; soit $r \\in \\N^*$ le nombre des classes doubles distinctes, de $G$ modulo $H$ et $K$ ; on les notera $Hx_i K$, $1 \\leqslant i \\leqslant r$.

Pour tout $i$ ($1 \\leqslant i \\leqslant r$), justifier les propriétés suivantes :

$\\alpha$) $|Hx_i K| = |x_i^{-1} Hx_i K|$ (égalité des cardinaux) ;

$\\beta$) $x_i^{-1} Hx_i$ est un sous-groupe de $G$ et $o(x_i^{-1} Hx_i) = o(H)$ ;

$\\gamma$) $|Hx_i K| = \\dfrac{o(H)\\,o(K)}{o(x_i^{-1} Hx_i \\cap K)}$ (voir l’exercice 3).

En déduire la relation :

$$o(G) = o(H)\\,o(K) \\sum_{i=1}^r d_i^{-1}$$

où, pour tout $i$ ($1 \\leqslant i \\leqslant r$), $d_i = o(x_i^{-1} Hx_i \\cap K)$.

*d)* D’après les résultats précédents, *a priori*, dans un groupe $G$, deux classes doubles distinctes modulo $H$ et $K$ ne sont pas, en général, équipotentes ; montrer que la décomposition du groupe symétrique $S_3$ en classes doubles modulo $H = \\langle \\tau_1 \\rangle$ et $K = \\langle \\tau_2 \\rangle$ confirme cette remarque et permet aussi de vérifier que $H \\neq K$ implique, en général, dans un groupe non abélien, $\\mathscr{R}_{H, K} \\neq \\mathscr{R}_{K, H}$ ($\\tau_1, \\tau_2$ : voir notations $(1.15)$).`,
    hintTex: `Pour *b)*, remarquez que $\\lambda$ est la restriction de la translation à gauche $\\tau_{x^{-1}}$ $(1.75)$ ; pour *c)* $\\beta$), utilisez l’automorphisme intérieur $\\sigma_{x_i^{-1}}$ $(1.73)$. Pour *d)*, utilisez la table $(10)$ de $S_3$ pour calculer $HeK = HK$, puis $H\\sigma_2 K$ et $KeH = KH$.`,
    correctionTex: `*a)* Vérifions les trois propriétés d’une relation d’équivalence dans $G$ :
— *Réflexivité* : pour tout $x \\in G$, comme $e \\in H$ et $e \\in K$, on a $(e, e) \\in H \\times K$ et $x = exe$, donc $x \\mathrel{\\mathscr{R}_{H, K}} x$.
— *Symétrie* : si $x \\mathrel{\\mathscr{R}_{H, K}} y$, il existe $(h, k) \\in H \\times K$ tel que $y = hxk$. En multipliant à gauche par $h^{-1} \\in H$ et à droite par $k^{-1} \\in K$, on obtient $x = h^{-1} y k^{-1}$ avec $(h^{-1}, k^{-1}) \\in H \\times K$, donc $y \\mathrel{\\mathscr{R}_{H, K}} x$.
— *Transitivité* : si $x \\mathrel{\\mathscr{R}_{H, K}} y$ et $y \\mathrel{\\mathscr{R}_{H, K}} z$, il existe $(h, k), (h', k') \\in H \\times K$ tels que $y = hxk$ et $z = h'yk'$, d’où $z = (h'h)x(kk')$. Comme $H$ et $K$ sont des sous-groupes, $(h'h, kk') \\in H \\times K$, donc $x \\mathrel{\\mathscr{R}_{H, K}} z$.

La classe d’équivalence d’un élément $x \\in G$ modulo $\\mathscr{R}_{H, K}$ est (par symétrie de $\\mathscr{R}_{H, K}$) :

$$\\cl_{\\mathscr{R}_{H, K}}(x) = \\{y \\in G ;\\; \\exists (h, k) \\in H \\times K,\\; y = hxk\\} = \\{hxk ;\\; (h, k) \\in H \\times K\\} = HxK.$$

*b)* Pour tout élément $z = hxk \\in HxK$, on a $x^{-1}hxk = x^{-1}z$, ce qui ne dépend que de $z$ et non de la décomposition $z = hxk$. Autrement dit, $\\lambda$ est la restriction à $HxK$ de la translation à gauche $\\tau_{x^{-1}} : G \\to G$, $z \\mapsto x^{-1}z$ (définition $(1.75)$).
Comme $\\tau_{x^{-1}}$ est une bijection de $G$ sur $G$ (de réciproque $\\tau_x : w \\mapsto xw$), sa restriction $\\lambda$ est injective. De plus, l’image directe de $HxK$ par $\\tau_{x^{-1}}$ est précisément :

$$\\tau_{x^{-1}}(HxK) = \\{x^{-1}hxk ;\\; (h, k) \\in H \\times K\\} = x^{-1}HxK,$$

donc $\\lambda$ est surjective sur $x^{-1}HxK$ (de réciproque $w \\mapsto xw$). C’est bien une bijection.

*c)* Soit $i \\in \\{1, \\dots, r\\}$.
— $\\alpha$) D’après *b)* appliqué à $x = x_i$, il existe une bijection de $Hx_i K$ sur $x_i^{-1} Hx_i K$, donc ces deux ensembles finis ont même cardinal :

$$|Hx_i K| = |x_i^{-1} Hx_i K|.$$

— $\\beta$) L’application $\\sigma_{x_i^{-1}} : G \\to G$, $g \\mapsto x_i^{-1} g x_i$, est un automorphisme intérieur de $G$ (exemples $(1.73)$). D’après la proposition $(1.55)$, l’image directe $\\sigma_{x_i^{-1}}(H) = x_i^{-1} Hx_i$ du sous-groupe $H$ est un sous-groupe de $G$. De plus, $\\sigma_{x_i^{-1}}$ étant bijective, sa restriction établit une bijection (un isomorphisme) de $H$ sur $x_i^{-1} Hx_i$, d’où $o(x_i^{-1} Hx_i) = o(H)$.
— $\\gamma$) Les ensembles $x_i^{-1} Hx_i$ et $K$ sont deux sous-groupes finis de $G$. En leur appliquant la formule de l’exercice 3 *b)*, puis les résultats $\\alpha$) et $\\beta$), on obtient :

$$|Hx_i K| = |x_i^{-1} Hx_i K| = \\frac{o(x_i^{-1} Hx_i)\\,o(K)}{o(x_i^{-1} Hx_i \\cap K)} = \\frac{o(H)\\,o(K)}{o(x_i^{-1} Hx_i \\cap K)}.$$

Les $r$ classes doubles distinctes $Hx_1 K, \\dots, Hx_r K$ forment une partition de $G$ ; en sommant leurs cardinaux et en posant $d_i = o(x_i^{-1} Hx_i \\cap K)$, on en déduit :

$$o(G) = \\sum_{i=1}^r |Hx_i K| = \\sum_{i=1}^r \\frac{o(H)\\,o(K)}{d_i} = o(H)\\,o(K) \\sum_{i=1}^r d_i^{-1}.$$

*d)* Dans $S_3$ (notations $(1.15)$ et table $(10)$), on a $H = \\langle \\tau_1 \\rangle = \\{e, \\tau_1\\}$ et $K = \\langle \\tau_2 \\rangle = \\{e, \\tau_2\\}$.
— Calculons la classe double de $e$ modulo $H$ et $K$ :

$$HeK = HK = \\{e, \\tau_1, \\tau_2, \\tau_1 \\circ \\tau_2\\} = \\{e, \\tau_1, \\tau_2, \\sigma_1\\},$$

car la table $(10)$ donne $\\tau_1 \\circ \\tau_2 = \\sigma_1$. On a donc $|HeK| = 4$.
— Calculons la classe double de $\\sigma_2 \\notin HeK$ :

$$H\\sigma_2 K = \\{\\sigma_2,\\; \\tau_1 \\circ \\sigma_2,\\; \\sigma_2 \\circ \\tau_2,\\; \\tau_1 \\circ \\sigma_2 \\circ \\tau_2\\}.$$

D’après la table $(10)$, $\\tau_1 \\circ \\sigma_2 = \\tau_3$, $\\sigma_2 \\circ \\tau_2 = \\tau_3$ et $\\tau_1 \\circ \\sigma_2 \\circ \\tau_2 = \\tau_1 \\circ \\tau_3 = \\sigma_2$. On trouve donc :

$$H\\sigma_2 K = \\{\\sigma_2, \\tau_3\\},$$

de cardinal $|H\\sigma_2 K| = 2$. Comme $4 + 2 = 6 = o(S_3)$, les deux classes doubles $HeK$ et $H\\sigma_2 K$ partitionnent $S_3$ ; elles ont des cardinaux distincts ($4 \\neq 2$), ce qui confirme que deux classes doubles distinctes ne sont pas en général équipotentes.
(On vérifie de plus la formule du *c)* : $d_1 = o(H \\cap K) = 1$, $d_2 = o(\\sigma_2^{-1} H \\sigma_2 \\cap K) = o(\\{e, \\tau_2\\}) = 2$, et $2 \\cdot 2 \\cdot (1 + 1/2) = 6$.)
— Enfin, pour la relation $\\mathscr{R}_{K, H}$, la classe de $e$ est $KeH = KH = \\{e, \\tau_1, \\tau_2, \\tau_2 \\circ \\tau_1\\} = \\{e, \\tau_1, \\tau_2, \\sigma_2\\}$ (car $\\tau_2 \\circ \\tau_1 = \\sigma_2$). Ainsi $e \\mathrel{\\mathscr{R}_{K, H}} \\sigma_2$, alors que $\\sigma_2 \\notin HeK$, donc $e$ et $\\sigma_2$ ne sont pas en relation modulo $\\mathscr{R}_{H, K}$. On a bien $\\mathscr{R}_{H, K} \\neq \\mathscr{R}_{K, H}$.`
  },
  'c2-e06': {
    id: 'c2-e06',
    chapter: 2,
    chapterLabel: 'Chapitre II — Classes modulo un sous-groupe',
    number: 6,
    title: 'Groupe des isométries de la droite réelle',
    page: 86,
    upToOrderIndex: 599,
    statementTex: `Soit $\\R$ considéré comme espace affine euclidien de dimension $1$, muni de la distance habituelle $d$ telle que $d(x, y) = |x - y|$.

À tout $a \\in \\R$ on associe la translation :

$$\\begin{aligned}
\\tau_a : \\R &\\to \\R \\quad \\text{telle que } \\tau_a(x) = x + a \\\\
\\text{et} \\qquad \\sigma_a : \\R &\\to \\R \\quad \\text{telle que } \\sigma_a(x) = a - x.
\\end{aligned}$$

*a)* Vérifier que, quels que soient $a, b$ dans $\\R$, $\\sigma_a^2 = \\id_{\\R}$ et $\\sigma_b \\circ \\tau_a = \\tau_{-a} \\circ \\sigma_b$.

*b)* Montrer que sur la droite réelle, $\\sigma_a$ est une symétrie par rapport à un point.

*c)* Démontrer que toute isométrie de $\\R$ est soit une translation, soit une symétrie par rapport à un point ; en déduire que l’ensemble $\\mathscr{I}(1)$ des isométries de $\\R$ est un sous-groupe non abélien du groupe symétrique $S_{\\R}$.

*d)* $T = \\{\\tau_a ; a \\in \\R\\}$ étant un sous-groupe abélien de $S_{\\R}$ (exercice 13, chap. $\\mathrm{I}^{\\text{er}}$) montrer que $[\\mathscr{I}(1) : T] = 2$.`,
    hintTex: `Pour *c)*, soit $f \\in \\mathscr{I}(1)$ ; posez $a = f(0)$ et $g(x) = f(x) - a$, puis exploitez $|g(x)| = |x|$ et $|g(x) - g(1)| = |x - 1|$ en élevant au carré. Pour *d)*, exprimez chaque $\\sigma_a$ à l’aide de $\\sigma_0$ et de $\\tau_a$ pour déterminer les classes modulo $T$.`,
    correctionTex: `*a)* Quels que soient $a, b \\in \\R$ et $x \\in \\R$, on a :

$$\\sigma_a^2(x) = \\sigma_a(a - x) = a - (a - x) = x,$$

d’où $\\sigma_a^2 = \\id_{\\R}$, et

$$(\\sigma_b \\circ \\tau_a)(x) = \\sigma_b(x + a) = b - (x + a) = (b - x) - a = \\tau_{-a}(\\sigma_b(x)) = (\\tau_{-a} \\circ \\sigma_b)(x),$$

d’où $\\sigma_b \\circ \\tau_a = \\tau_{-a} \\circ \\sigma_b$.

*b)* Pour tout $x \\in \\R$, le milieu de $x$ et de $x' = \\sigma_a(x) = a - x$ sur la droite réelle est :

$$\\frac{x + \\sigma_a(x)}{2} = \\frac{x + a - x}{2} = \\frac{a}{2},$$

qui est constant (et $\\sigma_a(a/2) = a/2$ est l’unique point fixe de $\\sigma_a$). Ainsi $\\sigma_a$ est la symétrie par rapport au point d’abscisse $\\dfrac{a}{2}$.

*c)* Soit $f : \\R \\to \\R$ une isométrie de $\\R$, c’est-à-dire vérifiant $|f(x) - f(y)| = |x - y|$ pour tous $x, y \\in \\R$.
Posons $a = f(0)$ et $g(x) = f(x) - a$ pour tout $x \\in \\R$. Alors $g$ est encore une isométrie de $\\R$ et $g(0) = 0$.
En appliquant la conservation des distances entre $x$ et $0$, on obtient $|g(x)| = |g(x) - g(0)| = |x|$, soit $g(x)^2 = x^2$ pour tout $x \\in \\R$.
En particulier, pour $x = 1$, $g(1)^2 = 1$, donc $g(1) = \\varepsilon$ avec $\\varepsilon \\in \\{1, -1\\}$.
En appliquant ensuite la conservation des distances entre $x$ et $1$, il vient $|g(x) - \\varepsilon| = |g(x) - g(1)| = |x - 1|$, soit en élevant au carré :

$$g(x)^2 - 2\\varepsilon g(x) + \\varepsilon^2 = x^2 - 2x + 1.$$

Comme $g(x)^2 = x^2$ et $\\varepsilon^2 = 1$, on obtient $-2\\varepsilon g(x) = -2x$, donc $g(x) = \\varepsilon x$ pour tout $x \\in \\R$.
— Si $\\varepsilon = 1$, alors $f(x) = x + a = \\tau_a(x)$, donc $f = \\tau_a$ est une translation.
— Si $\\varepsilon = -1$, alors $f(x) = a - x = \\sigma_a(x)$, donc $f = \\sigma_a$ est une symétrie par rapport au point $\\dfrac{a}{2}$.
(Réciproquement, $|(x + a) - (y + a)| = |x - y|$ et $|(a - x) - (a - y)| = |x - y|$, donc toute $\\tau_a$ et toute $\\sigma_a$ appartient bien à $\\mathscr{I}(1)$.)

Déduisons-en que $\\mathscr{I}(1)$ est un sous-groupe non abélien de $S_{\\R}$ :
— Chaque $\\tau_a$ est bijective de réciproque $\\tau_{-a} \\in \\mathscr{I}(1)$, et chaque $\\sigma_a$ est bijective de réciproque $\\sigma_a \\in \\mathscr{I}(1)$ d’après *a)* ; donc $\\mathscr{I}(1) \\subseteq S_{\\R}$.
— $\\id_{\\R} = \\tau_0 \\in \\mathscr{I}(1)$, donc $\\mathscr{I}(1) \\neq \\varnothing$.
— Si $f_1, f_2 \\in \\mathscr{I}(1)$, alors $f_2^{-1} \\in \\mathscr{I}(1)$ et la composée $f_1 \\circ f_2^{-1}$ conserve aussi les distances, donc $f_1 \\circ f_2^{-1} \\in \\mathscr{I}(1)$.
Par le théorème $(1.24)$, $\\mathscr{I}(1) \\leqslant S_{\\R}$. Enfin, $\\mathscr{I}(1)$ est non abélien puisque, d’après *a)*, $\\sigma_0 \\circ \\tau_1 = \\tau_{-1} \\circ \\sigma_0 \\neq \\tau_1 \\circ \\sigma_0$ (en effet $(\\sigma_0 \\circ \\tau_1)(0) = -1 \\neq 1 = (\\tau_1 \\circ \\sigma_0)(0)$).

*d)* Le sous-groupe $T = \\{\\tau_a ;\\; a \\in \\R\\}$ de $S_{\\R}$ (exercice 13, chap. $\\mathrm{I}^{\\text{er}}$) est inclus dans $\\mathscr{I}(1)$, donc $T \\leqslant \\mathscr{I}(1)$.
Pour tout $a \\in \\R$ et tout $x \\in \\R$, on vérifie que $(\\tau_a \\circ \\sigma_0)(x) = -x + a = \\sigma_a(x)$, d’où $\\sigma_a = \\tau_a \\circ \\sigma_0 \\in T \\circ \\sigma_0$.
D’après *c)*, $\\mathscr{I}(1) = T \\cup \\{\\sigma_a ;\\; a \\in \\R\\} = T \\cup (T \\circ \\sigma_0)$.
Or $\\sigma_0 \\notin T$ (car $\\sigma_0(0) = 0$ alors que pour tout $a \\in \\R$, $\\tau_a(0) = 0 \\implies a = 0 \\implies \\tau_a = \\id_{\\R} \\neq \\sigma_0$). Ainsi les classes à droite $T$ et $T \\circ \\sigma_0$ sont distinctes, donc disjointes, et forment une partition de $\\mathscr{I}(1)$. Par conséquent, l’ensemble quotient $\\left(\\dfrac{\\mathscr{I}(1)}{T}\\right)_d = \\{T,\\, T \\circ \\sigma_0\\}$ possède exactement $2$ éléments, soit $[\\mathscr{I}(1) : T] = 2$.`
  },
  'c2-e07': {
    id: 'c2-e07',
    chapter: 2,
    chapterLabel: 'Chapitre II — Classes modulo un sous-groupe',
    number: 7,
    title: 'Groupe des déplacements du plan euclidien',
    page: 87,
    upToOrderIndex: 599,
    statementTex: `Soit $\\mathscr{I}(2)$ le groupe des isométries du plan affine euclidien $P$ ; *les notations étant celles de l’exercice 26, chap.* $\\mathrm{I}^{\\text{er}}$, on pose

$$\\mathscr{D}(2) = \\mathscr{T}(P) \\cup \\left(\\bigcup_{O \\in P} \\mathscr{R}(P, O)\\right).$$

En utilisant les résultats de l’exercice 26, chap. $\\mathrm{I}^{\\text{er}}$, démontrer que $\\mathscr{D}(2)$ est l’ensemble des isométries pouvant s’écrire comme produit d’un nombre pair de symétries (du type $s_\\Delta$) ; en déduire que $\\mathscr{D}(2)$ est un sous-groupe de $\\mathscr{I}(2)$ tel que $[\\mathscr{I}(2) : \\mathscr{D}(2)] = 2$.

$\\mathscr{D}(2)$ est appelé : *groupe des déplacements* de $P$.`,
    hintTex: `D’après l’exercice 26 *e)* et *f)* du chap. $\\mathrm{I}^{\\text{er}}$, toute translation et toute rotation est produit de $0$ ou $2$ symétries $s_\\Delta$. Réciproquement, étudiez le produit $s_{\\Delta_1} \\circ s_{\\Delta_2}$ selon que $\\Delta_1$ et $\\Delta_2$ sont parallèles ou sécantes, puis utilisez l’exercice 26 *c)* et le déterminant de la partie linéaire dans $\\operatorname{O}(\\R^2)$ pour contrôler la parité du nombre de symétries.`,
    correctionTex: `Notons $\\mathscr{P}_{\\text{pair}}$ l’ensemble des isométries de $P$ pouvant s’écrire comme produit d’un nombre pair ($2k$, $k \\in \\N$) de symétries du type $s_\\Delta$ (avec la convention $0$ symétrie pour $\\id_P$).

1. **Inclusion** $\\mathscr{D}(2) \\subseteq \\mathscr{P}_{\\text{pair}}$ :
D’après l’exercice 26 *e)* et *f)* du chap. $\\mathrm{I}^{\\text{er}}$ :
— toute translation $t_v \\in \\mathscr{T}(P)$ vaut $\\id_P$ ($0$ symétrie) si $v = 0$, et $s_{\\Delta_2} \\circ s_{\\Delta_1}$ ($2$ symétries d’axes parallèles orthogonaux à $v$) si $v \\neq 0$ ;
— toute rotation $r_{O, \\alpha} \\in \\mathscr{R}(P, O)$ s’écrit $s_{\\Delta_2} \\circ s_{\\Delta_1}$ ($2$ symétries d’axes sécants en $O$ faisant l’angle orienté $\\alpha/2$).
Ainsi, tout élément de $\\mathscr{D}(2)$ s’écrit comme produit de $0$ ou $2$ symétries, donc $\\mathscr{D}(2) \\subseteq \\mathscr{P}_{\\text{pair}}$.

2. **Inclusion réciproque** $\\mathscr{P}_{\\text{pair}} \\subseteq \\mathscr{D}(2)$ :
Fixons une origine $O_0 \\in P$. Pour toute droite $\\Delta$ de $P$, en prenant un repère orthonormé adapté à $\\Delta$ (vecteur directeur unitaire $u$, vecteur normal unitaire $n$), la symétrie $s_\\Delta$ vérifie $\\overrightarrow{s_\\Delta(O_0)s_\\Delta(M)} = r_\\Delta(\\overrightarrow{O_0 M})$ pour tout $M \\in P$, où $r_\\Delta \\in \\operatorname{O}(\\R^2)$ (exemple $(1.64)$) est la réflexion linéaire orthogonale de matrice $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ dans la base $(u, n)$, de déterminant $\\det(r_\\Delta) = -1$.
Ainsi, si une isométrie $f \\in \\mathscr{I}(2)$ s’écrit $f = s_{\\Delta_1} \\circ \\dots \\circ s_{\\Delta_m}$, alors l’application $\\vec{f} : \\overrightarrow{O_0 M} \\mapsto \\overrightarrow{f(O_0)f(M)}$ (qui ne dépend que de $f$) coïncide avec $r_{\\Delta_1} \\circ \\dots \\circ r_{\\Delta_m} \\in \\operatorname{O}(\\R^2)$. Le déterminant étant un morphisme de groupes (exemple $(1.63)$), on obtient :

$$\\det(\\vec{f}) = \\prod_{j=1}^m \\det(r_{\\Delta_j}) = (-1)^m.$$

Par conséquent, la parité du nombre de symétries d’une décomposition de $f$ ne dépend que de $f$ (un produit pair ne peut jamais égaler un produit impair).
Soit maintenant $f \\in \\mathscr{P}_{\\text{pair}}$, produit de $2k$ symétries : on a $\\det(\\vec{f}) = (-1)^{2k} = 1$. D’après l’exercice 26 *c)* du chap. $\\mathrm{I}^{\\text{er}}$, $f$ s’écrit aussi comme produit de $m \\in \\{0, 1, 2, 3\\}$ symétries $f = s_{\\Delta_1} \\circ \\dots \\circ s_{\\Delta_m}$. Comme $(-1)^m = \\det(\\vec{f}) = 1$, on a nécessairement $m = 0$ ou $m = 2$ :
— Si $m = 0$, $f = \\id_P = t_0 \\in \\mathscr{T}(P) \\subseteq \\mathscr{D}(2)$.
— Si $m = 2$, $f = s_{\\Delta_1} \\circ s_{\\Delta_2}$ :
  — si $\\Delta_1 \\parallel \\Delta_2$, soit $A_2 \\in \\Delta_2$, $A_1$ sa projection orthogonale sur $\\Delta_1$ et $v = \\overrightarrow{A_2 A_1}$ ($v = 0$ si $\\Delta_1 = \\Delta_2$) ; pour tout $M \\in P$, en notant $H_2$ la projection orthogonale de $M$ sur $\\Delta_2$, $M_2 = s_{\\Delta_2}(M)$, puis $H_1 = H_2 + v$ celle de $M_2$ sur $\\Delta_1$ et $M_1 = s_{\\Delta_1}(M_2)$, on obtient $\\overrightarrow{M M_1} = 2\\overrightarrow{M H_2} + 2(-\\overrightarrow{M H_2} + v) = 2v$, donc $f = t_{2v} \\in \\mathscr{T}(P) \\subseteq \\mathscr{D}(2)$ ;
  — si $\\Delta_1$ et $\\Delta_2$ se coupent en un point $O$ avec un angle orienté $\\theta$ (tel que $r_{O, \\theta}(\\Delta_2) = \\Delta_1$), en coordonnées polaires de centre $O$ et d’axe polaire $\\Delta_2$, $s_{\\Delta_2}$ transforme l’angle $\\varphi$ en $-\\varphi$ et $s_{\\Delta_1}$ transforme l’angle $\\psi$ en $2\\theta - \\psi$, donc $s_{\\Delta_1} \\circ s_{\\Delta_2}$ conserve les distances à $O$ et ajoute $2\\theta$ à l’angle polaire : c’est la rotation $r_{O, 2\\theta} \\in \\mathscr{R}(P, O) \\subseteq \\mathscr{D}(2)$.
Dans tous les cas, $f \\in \\mathscr{D}(2)$, donc $\\mathscr{P}_{\\text{pair}} \\subseteq \\mathscr{D}(2)$. Finalement, $\\mathscr{D}(2) = \\mathscr{P}_{\\text{pair}}$.

3. **Structure de sous-groupe et indice 2** :
— On a $\\id_P \\in \\mathscr{D}(2)$ ($0$ symétrie), donc $\\mathscr{D}(2) \\neq \\varnothing$. Si $f, g \\in \\mathscr{D}(2)$ sont produits respectivement de $2k$ et $2\\ell$ symétries, l’inverse $g^{-1} = (s_{\\Delta_1} \\circ \\dots \\circ s_{\\Delta_{2\\ell}})^{-1} = s_{\\Delta_{2\\ell}} \\circ \\dots \\circ s_{\\Delta_1}$ (puisque $s_\\Delta^{-1} = s_\\Delta$ par l’exercice 26 *a)*) est produit de $2\\ell$ symétries, donc $f \\circ g^{-1}$ est produit de $2(k + \\ell)$ symétries et appartient à $\\mathscr{D}(2)$. D’après le théorème $(1.24)$, $\\mathscr{D}(2) \\leqslant \\mathscr{I}(2)$.
— Fixons une droite $\\Delta_0$ de $P$. Comme $\\det(\\overrightarrow{s_{\\Delta_0}}) = -1 \\neq 1$, on a $s_{\\Delta_0} \\notin \\mathscr{D}(2)$. Pour toute isométrie $f \\in \\mathscr{I}(2) \\setminus \\mathscr{D}(2)$, $f$ est produit d’un nombre impair ($1$ ou $3$) de symétries par l’exercice 26 *c)*, donc $s_{\\Delta_0} \\circ f$ est produit d’un nombre pair de symétries, c’est-à-dire $s_{\\Delta_0} \\circ f \\in \\mathscr{D}(2)$ ; comme $s_{\\Delta_0}^2 = \\id_P$, cela équivaut à $f \\in s_{\\Delta_0} \\mathscr{D}(2)$.
Ainsi $\\mathscr{I}(2) = \\mathscr{D}(2) \\cup s_{\\Delta_0} \\mathscr{D}(2)$ avec $\\mathscr{D}(2) \\cap s_{\\Delta_0} \\mathscr{D}(2) = \\varnothing$ (car $s_{\\Delta_0} \\notin \\mathscr{D}(2)$) : il y a exactement deux classes à gauche modulo $\\mathscr{D}(2)$, d’où $[\\mathscr{I}(2) : \\mathscr{D}(2)] = 2$ (définition $(2.14)$).
(*Autre rédaction immédiate :* l’application $\\delta : \\mathscr{I}(2) \\to \\{-1, 1\\}$, $f \\mapsto \\det(\\vec{f})$, est un épimorphisme de groupes de noyau $\\mathscr{D}(2)$, donc le $1^{\\text{er}}$ théorème d’isomorphisme $(2.27)$ donne $\\mathscr{I}(2)/\\mathscr{D}(2) \\simeq \\{-1, 1\\}$, d’où $[\\mathscr{I}(2) : \\mathscr{D}(2)] = 2$.)`
  },
  'c2-e08': {
    id: 'c2-e08',
    chapter: 2,
    chapterLabel: 'Chapitre II — Classes modulo un sous-groupe',
    number: 8,
    title: 'Loi quotient sur Z/(n) associée à ax + by',
    page: 87,
    upToOrderIndex: 599,
    statementTex: `Soient $a$ et $b$ deux entiers *non nuls*, distincts et *fixés* dans $\\Z$.

On considère le groupe (additif) $\\Z \\times \\Z$ et l’application

$$\\begin{aligned}
\\varphi : \\Z \\times \\Z &\\to \\Z \\\\
(x, y) &\\mapsto ax + by.
\\end{aligned}$$

*a)* Montrer que $\\varphi$ est un morphisme de groupes.

Déterminer $\\Ker \\varphi$ et $\\Im \\varphi$ ($d$ étant PGCD de $a$ et $b$, $\\Im \\varphi$ pourra être exprimé à l’aide de $d$).

*b)* Soit $n$ un entier *non nul*, *fixé* dans $\\N$.

On considère dans $\\Z$ la loi de composition interne notée $*$ et définie par :

$$x * y = ax + by, \\qquad \\text{quels que soient } x \\text{ et } y \\text{ dans } \\Z.$$

Démontrer que la loi $*$ induit dans $\\dfrac{\\Z}{n\\Z}$ une loi de composition quotient que l’on notera $\\overline{*}$.

*c)* Démontrer que, dans $\\dfrac{\\Z}{n\\Z}$, la loi $\\overline{*}$ est :

— associative si et seulement si $n$ divise $a(a - 1)$ et $b(b - 1)$ ;

— commutative si et seulement si $n$ divise $(a - b)$.

*d)* Prouver que $\\left(\\dfrac{\\Z}{n\\Z}, \\overline{*}\\right)$ est un groupe si et seulement si $n$ divise $(a - 1)$ et $(b - 1)$ ; dans ce cas, le groupe $\\left(\\dfrac{\\Z}{n\\Z}, \\overline{*}\\right)$ est-il abélien ?`,
    hintTex: `Pour *a)*, utilisez le théorème de Bézout pour $\\Im\\varphi$, puis écrivez $a = da'$ et $b = db'$ avec $\\pgcd(a', b') = 1$ et appliquez le lemme de Gauss pour $\\Ker\\varphi$. Pour *b)*, vérifiez la compatibilité de la congruence modulo $n$ avec $*$ (proposition $(2.21)$) ; pour *c)* et *d)*, traduisez les égalités dans $\\dfrac{\\Z}{n\\Z}$ en congruences modulo $n$ et testez les entiers $0$ et $1$.`,
    correctionTex: `*a)* Le groupe $\\Z \\times \\Z$ est muni de la loi $(x, y) + (x', y') = (x + x', y + y')$ (définition $(1.83)$). Quels que soient $(x, y), (x', y') \\in \\Z \\times \\Z$ :

$$\\varphi((x, y) + (x', y')) = a(x + x') + b(y + y') = (ax + by) + (ax' + by') = \\varphi(x, y) + \\varphi(x', y'),$$

donc $\\varphi$ est un morphisme de groupes de $(\\Z \\times \\Z, +)$ dans $(\\Z, +)$.

— *Image* $\\Im\\varphi$ : comme $a$ et $b$ sont non nuls, $d = \\pgcd(a, b) \\in \\N^*$. D’une part, $d$ divise $a$ et $b$, donc $d$ divise $ax + by$ pour tous $x, y \\in \\Z$, soit $\\Im\\varphi \\subseteq d\\Z$. D’autre part, d’après le théorème de Bézout, il existe $u, v \\in \\Z$ tels que $au + bv = d$ ; pour tout $k \\in \\Z$, on a alors $kd = a(ku) + b(kv) = \\varphi(ku, kv) \\in \\Im\\varphi$, d’où $d\\Z \\subseteq \\Im\\varphi$. Finalement :

$$\\Im\\varphi = d\\Z.$$

— *Noyau* $\\Ker\\varphi$ : posons $a = da'$ et $b = db'$, de sorte que $a', b' \\in \\Z \\setminus \\{0\\}$ et $\\pgcd(a', b') = 1$. Pour $(x, y) \\in \\Z \\times \\Z$ :

$$(x, y) \\in \\Ker\\varphi \\iff ax + by = 0 \\iff d(a'x + b'y) = 0 \\iff a'x = -b'y \\quad (\\text{car } d \\neq 0).$$

Si $a'x = -b'y$, alors $b'$ divise $a'x$ ; comme $\\pgcd(a', b') = 1$, le lemme de Gauss entraîne que $b'$ divise $x$, c’est-à-dire qu’il existe $k \\in \\Z$ tel que $x = -kb'$. En reportant dans $a'x = -b'y$, on obtient $-ka'b' = -b'y$, d’où $y = ka'$ (car $b' \\neq 0$). Réciproquement, pour tout $k \\in \\Z$, $a(-kb') + b(ka') = d(-ka'b' + kb'a') = 0$. On conclut :

$$\\Ker\\varphi = \\{(-kb', ka') ;\\; k \\in \\Z\\} = \\left\\{\\left(-\\frac{kb}{d},\\, \\frac{ka}{d}\\right) ;\\; k \\in \\Z\\right\\}.$$

*b)* D’après l’exemple $(2.5)$, $\\dfrac{\\Z}{n\\Z}$ est le quotient de $\\Z$ par la congruence modulo $n$ ($x \\equiv x' \\pmod{n} \\iff x - x' \\in n\\Z$). Soient $x, x', y, y' \\in \\Z$ tels que $x \\equiv x' \\pmod{n}$ et $y \\equiv y' \\pmod{n}$ ; il existe $k, l \\in \\Z$ tels que $x - x' = kn$ et $y - y' = ln$. On a alors :

$$(x * y) - (x' * y') = (ax + by) - (ax' + by') = a(x - x') + b(y - y') = (ak + bl)n \\in n\\Z,$$

ce qui prouve que la congruence modulo $n$ est compatible avec la loi $*$ (équation $(8)$). Par la proposition $(2.21)$, la loi $*$ induit dans $\\dfrac{\\Z}{n\\Z}$ une loi de composition quotient $\\overline{*}$ définie par :

$$\\overline{x}\\,\\overline{*}\\,\\overline{y} = \\overline{x * y} = \\overline{ax + by}, \\qquad \\forall \\overline{x}, \\overline{y} \\in \\frac{\\Z}{n\\Z}.$$

*c)*
— *Associativité* : pour tous $x, y, z \\in \\Z$, on calcule :

$$(\\overline{x}\\,\\overline{*}\\,\\overline{y})\\,\\overline{*}\\,\\overline{z} = \\overline{a(ax + by) + bz} = \\overline{a^2 x + aby + bz},$$

$$\\overline{x}\\,\\overline{*}\\,(\\overline{y}\\,\\overline{*}\\,\\overline{z}) = \\overline{ax + b(ay + bz)} = \\overline{ax + aby + b^2 z}.$$

Ces deux classes sont égales pour tous $x, y, z \\in \\Z$ si et seulement si $n$ divise $(a^2 - a)x + (b - b^2)z = a(a - 1)x - b(b - 1)z$ pour tous $x, z \\in \\Z$.
Si $\\overline{*}$ est associative, le choix $(x, z) = (1, 0)$ donne $n \\mid a(a - 1)$, et le choix $(x, z) = (0, 1)$ donne $n \\mid b(b - 1)$. Réciproquement, si $n \\mid a(a - 1)$ et $n \\mid b(b - 1)$, alors $n$ divise $a(a - 1)x - b(b - 1)z$ pour tous $x, z \\in \\Z$, donc $\\overline{*}$ est associative.

— *Commutativité* : pour tous $x, y \\in \\Z$,

$$\\overline{x}\\,\\overline{*}\\,\\overline{y} = \\overline{y}\\,\\overline{*}\\,\\overline{x} \\iff ax + by \\equiv ay + bx \\pmod{n} \\iff n \\mid (a - b)(x - y).$$

Si $\\overline{*}$ est commutative, le choix $x = 1, y = 0$ donne $n \\mid (a - b)$ ; réciproquement, si $n \\mid (a - b)$, alors $n \\mid (a - b)(x - y)$ pour tous $x, y \\in \\Z$, donc $\\overline{*}$ est commutative.

*d)*
— *Condition suffisante* : si $n$ divise $(a - 1)$ et $(b - 1)$, alors $a \\equiv 1 \\pmod{n}$ et $b \\equiv 1 \\pmod{n}$, donc pour tous $x, y \\in \\Z$, $\\overline{x}\\,\\overline{*}\\,\\overline{y} = \\overline{ax + by} = \\overline{x + y}$. La loi $\\overline{*}$ coïncide alors avec l’addition usuelle de $\\dfrac{\\Z}{n\\Z} = \\Zn{n}$, qui en fait un groupe abélien (exemple $(1.13)$ ou proposition $(2.24)$).
— *Condition nécessaire* : supposons que $\\left(\\dfrac{\\Z}{n\\Z}, \\overline{*}\\right)$ soit un groupe et notons $\\overline{e}$ son élément neutre ($e \\in \\Z$). Pour tout $x \\in \\Z$, les relations $\\overline{x}\\,\\overline{*}\\,\\overline{e} = \\overline{x}$ et $\\overline{e}\\,\\overline{*}\\,\\overline{x} = \\overline{x}$ s’écrivent :

$$ax + be \\equiv x \\pmod{n} \\qquad \\text{et} \\qquad ae + bx \\equiv x \\pmod{n}.$$

En évaluant en $x = 0$, il vient $be \\equiv 0 \\pmod{n}$ et $ae \\equiv 0 \\pmod{n}$. En évaluant ensuite en $x = 1$ et en utilisant ces deux congruences, on obtient :

$$a + be \\equiv 1 \\pmod{n} \\implies a \\equiv 1 \\pmod{n},$$

$$ae + b \\equiv 1 \\pmod{n} \\implies b \\equiv 1 \\pmod{n},$$

c’est-à-dire que $n$ divise $(a - 1)$ et $(b - 1)$.

Dans ce cas, comme vu à la condition suffisante (où $\\overline{*}$ coïncide avec l’addition modulo $n$, ou encore parce que $n \\mid (a - 1)$ et $n \\mid (b - 1)$ implique $n \\mid (a - b)$ et donc la commutativité par *c)*), le groupe $\\left(\\dfrac{\\Z}{n\\Z}, \\overline{*}\\right)$ est nécessairement **abélien**.`
  },
  'c2-e09': {
    id: 'c2-e09',
    chapter: 2,
    chapterLabel: 'Chapitre II — Classes modulo un sous-groupe',
    number: 9,
    title: 'Indice d’un sous-groupe conjugué',
    page: 87,
    upToOrderIndex: 599,
    statementTex: `$G$ étant un groupe, soient $K \\leqslant G$ et $g \\in G$. On pose $K' = gKg^{-1}$ ; démontrer l’égalité $[G : K] = [G : K']$.

$$\\left[\\text{On pourra considérer la correspondance } \\begin{aligned}[t] \\left(\\frac{G}{K}\\right)_d &\\to \\left(\\frac{G}{K'}\\right)_d \\\\ Kx &\\mapsto K'gx.\\end{aligned}\\right]$$`,
    hintTex: `Vérifiez d’abord que $K' = \\sigma_g(K)$ est bien un sous-groupe de $G$ (exemple $(1.73)$). Traduisez ensuite $Kx = Ky$ par $xy^{-1} \\in K$ et passez à $K'$ par conjugaison par $g$ pour prouver que la correspondance $Kx \\mapsto K'gx$ est une application bien définie, injective et surjective.`,
    correctionTex: `L’application $\\sigma_g : G \\to G$, $z \\mapsto gzg^{-1}$, est un automorphisme intérieur de $G$ (exemples $(1.73)$). D’après la proposition $(1.55)$, l’image directe $K' = \\sigma_g(K) = gKg^{-1}$ est donc un sous-groupe de $G$, ce qui donne un sens à $[G : K']$.

Considérons la correspondance proposée :

$$\\theta : \\left(\\frac{G}{K}\\right)_d \\to \\left(\\frac{G}{K'}\\right)_d, \\qquad Kx \\mapsto K'gx.$$

(On peut d’ailleurs observer que $K'gx = (gKg^{-1})gx = gKx$.)

— *Bonne définition et injectivité* : quels que soient $x, y \\in G$, la proposition $(2.1)$ donne $Kx = Ky \\iff xy^{-1} \\in K$. Comme $\\sigma_g$ est bijective et envoie $K$ sur $K'$, on a $z \\in K \\iff gzg^{-1} \\in K'$ pour tout $z \\in G$. En utilisant la formule $(5)$ du chap. $\\mathrm{I}^{\\text{er}}$ ($(gy)^{-1} = y^{-1}g^{-1}$), il vient :

$$Kx = Ky \\iff xy^{-1} \\in K \\iff g(xy^{-1})g^{-1} \\in K' \\iff (gx)(gy)^{-1} \\in K' \\iff K'gx = K'gy.$$

L’implication $(\\implies)$ garantit que $K'gx$ ne dépend pas du représentant $x$ choisi dans la classe $Kx$, donc $\\theta$ est une **application** bien définie.
L’implication $(\\Longleftarrow)$ prouve que $\\theta(Kx) = \\theta(Ky) \\implies Kx = Ky$, donc $\\theta$ est **injective**.

— *Surjectivité* : soit $K'y \\in \\left(\\dfrac{G}{K'}\\right)_d$ avec $y \\in G$. En posant $x = g^{-1}y \\in G$, on a $gx = y$, d’où :

$$\\theta(K(g^{-1}y)) = K'g(g^{-1}y) = K'y.$$

Ainsi $\\theta$ est **surjective**.

En conclusion, $\\theta$ est une bijection de $\\left(\\dfrac{G}{K}\\right)_d$ sur $\\left(\\dfrac{G}{K'}\\right)_d$. Ces deux ensembles ont donc même cardinal, soit par la définition $(2.14)$ :

$$[G : K] = [G : K'].$$`
  },
  'c2-e10': {
    id: 'c2-e10',
    chapter: 2,
    chapterLabel: 'Chapitre II — Classes modulo un sous-groupe',
    number: 10,
    title: 'Système commun de représentants à droite et à gauche',
    page: 88,
    upToOrderIndex: 599,
    statementTex: `Soient $G$ un groupe et $H$ un sous-groupe *d’indice fini* dans $G$.

Pour tout $g \\in G$, $HgH$ sera appelée : *classe double de* $G$ *modulo* $H$ (voir l’exercice 5, ci-dessus).

*a)* Montrer que le nombre des classes doubles de $G$ modulo $H$ est fini.

*b)* Étant donné $g \\in G$, vérifier que l’on peut écrire :

$$HgH = \\bigcup_{1 \\leqslant i \\leqslant p} Hgx_i, \\qquad \\text{où } p = [H : H \\cap g^{-1}Hg],$$

$x_i \\in H$ pour tout $i$ ($1 \\leqslant i \\leqslant p$) et $Hgx_i \\cap Hgx_j = \\varnothing$, si $i \\neq j$.

En utilisant l’exercice 9 ci-dessus, prouver que l’on a

$$HgH = \\bigcup_{1 \\leqslant j \\leqslant p} y_j gH,$$

où $y_j \\in H$ pour tout $j$ ($1 \\leqslant j \\leqslant p$) et $y_i gH \\cap y_j gH = \\varnothing$, si $i \\neq j$.

On pose $z_i = y_i gx_i$, vérifier que

$$HgH = \\bigcup_{1 \\leqslant i \\leqslant p} Hz_i = \\bigcup_{1 \\leqslant i \\leqslant p} z_i H.$$

*c)* En conclusion de ce qui précède, prouver que, si $[G : H] = r$, il existe dans $G$ des éléments $a_1, a_2, \\dots, a_r$ formant une famille de représentants, à la fois, de l’ensemble des classes à droite et de l’ensemble des classes à gauche modulo $H$.`,
    hintTex: `Pour *a)*, utilisez la partition de $G$ en classes doubles (exercice 5 *a)*), chacune contenant au moins une classe à droite modulo $H$. Pour *b)*, justifiez d’abord la finitude de $p$ par les exercices 9 et 2 *a)*, puis reliez $[H : H \\cap g^{-1}Hg]$ et $[H : H \\cap gHg^{-1}]$ à l’aide de l’exercice 9 et de la formule des indices $(2.18)$ avant d’observer que $Hz_i = Hgx_i$ et $z_i H = y_i gH$.`,
    correctionTex: `*a)* D’après l’exercice 5 *a)* (avec $K = H$), les classes doubles $HgH$ ($g \\in G$) sont les classes d’équivalence de la relation $\\mathscr{R}_{H, H}$, donc elles forment une partition de $G$.
Pour tout $g \\in G$, on a $HgH = \\bigcup_{h \\in H} Hgh$ : chaque classe double est donc une réunion non vide (puisque $Hg \\subseteq HgH$) de classes à droite modulo $H$. Comme deux classes doubles distinctes sont disjointes, l’application qui associe à chaque classe double une classe à droite modulo $H$ qu’elle contient est injective dans $\\left(\\dfrac{G}{H}\\right)_d$.
Puisque $[G : H] = \\card\\!\\left(\\left(\\dfrac{G}{H}\\right)_d\\right)$ est fini par hypothèse, le nombre de classes doubles distinctes de $G$ modulo $H$ est fini (et au plus égal à $[G : H]$).

*b)* Soit $g \\in G$.
— *Finitude de* $p$ *et décomposition en classes à droite* : par l’exercice 9, le sous-groupe conjugué $g^{-1}Hg$ est aussi d’indice fini dans $G$, avec $[G : g^{-1}Hg] = [G : H]$. En appliquant l’exercice 2 *a)* aux sous-groupes $H$ et $K = g^{-1}Hg$, on obtient $p = [H : H \\cap g^{-1}Hg] \\leqslant [G : g^{-1}Hg] = [G : H]$, donc $p \\in \\N^*$ est fini.
Soit $\\{x_i\\}_{1 \\leqslant i \\leqslant p}$ une famille de représentants des classes à droite distinctes de $H$ modulo $H \\cap g^{-1}Hg$ ($x_i \\in H$).
  — Comme $x_i \\in H$, on a $Hgx_i \\subseteq HgH$, d’où $\\bigcup_{1 \\leqslant i \\leqslant p} Hgx_i \\subseteq HgH$. Réciproquement, tout $z \\in HgH$ s’écrit $z = h_1 g h_2$ avec $h_1, h_2 \\in H$. Or $H = \\bigcup_{1 \\leqslant i \\leqslant p} (H \\cap g^{-1}Hg)x_i$, donc il existe $i \\in \\{1, \\dots, p\\}$ et $u \\in H \\cap g^{-1}Hg$ tels que $h_2 = u x_i$. Comme $u \\in g^{-1}Hg$, il existe $h' \\in H$ tel que $u = g^{-1} h' g$, soit $gu = h'g$. On a alors $z = h_1 (gu) x_i = (h_1 h')gx_i \\in Hgx_i$. Ainsi :

$$HgH = \\bigcup_{1 \\leqslant i \\leqslant p} Hgx_i.$$

  — Si $Hgx_i \\cap Hgx_j \\neq \\varnothing$, ces deux classes à droite de $G$ modulo $H$ sont égales (remarque $(2.3)$ $3^\\circ$), donc $(gx_i)(gx_j)^{-1} = g x_i x_j^{-1} g^{-1} \\in H$ (proposition $(2.1)$), soit $x_i x_j^{-1} \\in g^{-1}Hg$. Comme déjà $x_i x_j^{-1} \\in H$, il vient $x_i x_j^{-1} \\in H \\cap g^{-1}Hg$, c’est-à-dire $(H \\cap g^{-1}Hg)x_i = (H \\cap g^{-1}Hg)x_j$, d’où $i = j$. Ainsi $Hgx_i \\cap Hgx_j = \\varnothing$ si $i \\neq j$.

— *Décomposition en classes à gauche via l’exercice 9* : vérifions d’abord que $g^{-1}(H \\cap gHg^{-1})g = H \\cap g^{-1}Hg$. En effet, pour tout $z \\in G$ :

$$z \\in g^{-1}(H \\cap gHg^{-1})g \\iff gzg^{-1} \\in H \\cap gHg^{-1} \\iff (gzg^{-1} \\in H \\text{ et } z \\in H) \\iff z \\in H \\cap g^{-1}Hg.$$

En appliquant l’exercice 9 au sous-groupe $K = H \\cap gHg^{-1}$ et à $g^{-1} \\in G$, on obtient :

$$[G : H \\cap gHg^{-1}] = [G : H \\cap g^{-1}Hg].$$

D’autre part, la formule des indices $(2.18)$ (avec la remarque $(2.19)$, puisque $[G : H]$ et $p = [H : H \\cap g^{-1}Hg]$ sont finis) appliquée à $H \\cap g^{-1}Hg \\leqslant H \\leqslant G$ puis à $H \\cap gHg^{-1} \\leqslant H \\leqslant G$ montre que $[G : H \\cap g^{-1}Hg] = [G : H][H : H \\cap g^{-1}Hg]$ est fini, donc $[G : H \\cap gHg^{-1}]$ l’est aussi, et :

$$[G : H][H : H \\cap gHg^{-1}] = [G : H][H : H \\cap g^{-1}Hg].$$

Comme $[G : H] \\in \\N^*$ est non nul, on simplifie par $[G : H]$ et l’on obtient $[H : H \\cap gHg^{-1}] = [H : H \\cap g^{-1}Hg] = p$.
Soit alors $\\{y_j\\}_{1 \\leqslant j \\leqslant p}$ une famille de représentants des $p$ classes à gauche distinctes de $H$ modulo $H \\cap gHg^{-1}$ ($y_j \\in H$, définition $(2.14)$). En raisonnant symétriquement, et en appliquant la forme rectifiée de la réunion $\\bigcup_{1 \\leqslant j \\leqslant p} y_j gH$ (avec l’indice $j$ sous le symbole $\\bigcup$, corrigeant la coquille d’indice $i$ de l’édition de 1984) :
  — $y_j \\in H \\implies y_j gH \\subseteq HgH$ ; inversement, tout $z = h_1 g h_2 \\in HgH$ s’écrit avec $h_1 = y_j v$ où $j \\in \\{1, \\dots, p\\}$ et $v \\in H \\cap gHg^{-1}$, d’où $v = g h'' g^{-1}$ ($h'' \\in H$), $vg = g h''$ et $z = y_j g(h'' h_2) \\in y_j gH$. On obtient bien :

$$HgH = \\bigcup_{1 \\leqslant j \\leqslant p} y_j gH.$$

  — Si $y_i gH \\cap y_j gH \\neq \\varnothing$, alors $y_i gH = y_j gH$, soit $(y_i g)^{-1}(y_j g) = g^{-1} y_i^{-1} y_j g \\in H$, donc $y_i^{-1} y_j \\in gHg^{-1}$. Comme déjà $y_i^{-1} y_j \\in H$, on a $y_i^{-1} y_j \\in H \\cap gHg^{-1}$, donc $y_i(H \\cap gHg^{-1}) = y_j(H \\cap gHg^{-1})$, d’où $i = j$. Ainsi $y_i gH \\cap y_j gH = \\varnothing$ si $i \\neq j$.

— *Système commun* $z_i = y_i g x_i$ : pour tout $i \\in \\{1, \\dots, p\\}$, puisque $y_i \\in H$ et $x_i \\in H$, la remarque $(2.3)$ $5^\\circ$ donne $H y_i = H$ et $x_i H = H$. Par associativité :

$$Hz_i = H(y_i g x_i) = (H y_i) g x_i = Hgx_i \\qquad \\text{et} \\qquad z_i H = (y_i g x_i)H = y_i g (x_i H) = y_i gH.$$

En utilisant la réunion corrigée $\\bigcup_{1 \\leqslant j \\leqslant p} y_j gH$ (où l’on renomme l’indice muet $j$ en $i$), il vient immédiatement :

$$HgH = \\bigcup_{1 \\leqslant i \\leqslant p} Hgx_i = \\bigcup_{1 \\leqslant i \\leqslant p} Hz_i \\qquad \\text{et} \\qquad HgH = \\bigcup_{1 \\leqslant j \\leqslant p} y_j gH = \\bigcup_{1 \\leqslant i \\leqslant p} y_i gH = \\bigcup_{1 \\leqslant i \\leqslant p} z_i H,$$

les $p$ classes $Hz_i$ (respectivement $z_i H$) étant deux à deux disjointes.

*c)* D’après *a)*, $G$ se décompose en un nombre fini $m \\in \\N^*$ de classes doubles distinctes modulo $H$, disons $Hg_1 H, \\dots, Hg_m H$, qui forment une partition de $G$. En appliquant *b)* à chaque $g_k$ ($1 \\leqslant k \\leqslant m$), on obtient un entier $p_k \\in \\N^*$ et des éléments $z_{k, 1}, \\dots, z_{k, p_k} \\in Hg_k H$ tels que :

$$Hg_k H = \\bigcup_{1 \\leqslant i \\leqslant p_k} H z_{k, i} = \\bigcup_{1 \\leqslant i \\leqslant p_k} z_{k, i} H,$$

où les classes $H z_{k, i}$ ($1 \\leqslant i \\leqslant p_k$) sont deux à deux disjointes, ainsi que les classes $z_{k, i} H$ ($1 \\leqslant i \\leqslant p_k$).
Les classes doubles $Hg_1 H, \\dots, Hg_m H$ étant deux à deux disjointes et recouvrant $G$, la famille réunie des éléments $z_{k, i}$ ($1 \\leqslant k \\leqslant m$, $1 \\leqslant i \\leqslant p_k$) fournit une partition de $G$ à la fois par les classes à droite $H z_{k, i}$ et par les classes à gauche $z_{k, i} H$.
Comme il y a exactement $[G : H] = r$ classes à droite (et autant de classes à gauche) distinctes modulo $H$, on a nécessairement $p_1 + \\dots + p_m = r$. En renumérotant ces $r$ éléments $a_1, a_2, \\dots, a_r$, on conclut qu’ils forment simultanément une famille de représentants de $\\left(\\dfrac{G}{H}\\right)_d$ et de $\\left(\\dfrac{G}{H}\\right)_g$.`
  }
}
