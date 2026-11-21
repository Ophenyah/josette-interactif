import type { ExerciseEntry } from './exercises'

export const EXERCISES_C1: Record<string, ExerciseEntry> = {
  'c1-e01': {
    id: 'c1-e01',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 1,
    title: 'Soustraction dans ℤ (neutre et symétrique à droite)',
    page: 61,
    upToOrderIndex: 399,
    statementTex: `Soit $\\Z$ l’ensemble des entiers rationnels, muni de la loi de composition interne notée $*$, définie par :

$$\\begin{aligned} \\Z \\times \\Z &\\to \\Z \\\\ (a, b) &\\mapsto a * b = a - b. \\end{aligned}$$

*a)* La loi $*$ est-elle associative ? commutative ?

*b)* Vérifier qu’il existe dans $(\\Z, *)$ un élément *neutre à droite*, c’est-à-dire un élément $e$ tel que

$$\\forall a \\in \\Z,\\quad a * e = a.$$

$e$ est-il élément neutre dans $(\\Z, *)$ ?

*c)* Existe-t-il, pour tout $a \\in \\Z$, un *symétrique à droite* relativement à $e$, c’est-à-dire un élément $a' \\in \\Z$ tel que $a * a' = e$ ?`,
    hintTex: `Tester l’associativité et la commutativité sur des entiers simples comme $0$ et $1$. Pour *b)* et *c)*, traduire directement les équations $a * e = a$ et $a * a' = e$ à l’aide de la définition $x * y = x - y$.`,
    correctionTex: `*a)* **Ni associative, ni commutative.**

— Pour $a = 1$, $b = 1$ et $c = 1$, on obtient :

$$(1 * 1) * 1 = (1 - 1) - 1 = 0 - 1 = -1 \\qquad \\text{et} \\qquad 1 * (1 * 1) = 1 - (1 - 1) = 1 - 0 = 1.$$

Comme $-1 \\neq 1$, la loi $*$ n’est pas associative.

— Pour $a = 1$ et $b = 0$, on obtient $1 * 0 = 1 - 0 = 1$ tandis que $0 * 1 = 0 - 1 = -1 \\neq 1$. La loi $*$ n’est donc pas commutative.

*b)* Soit $e \\in \\Z$. La condition $\\forall a \\in \\Z,\\; a * e = a$ équivaut à $\\forall a \\in \\Z,\\; a - e = a$, c’est-à-dire $e = 0$.

Ainsi, $0$ est élément neutre à droite dans $(\\Z, *)$ (et c’est même l’unique élément neutre à droite).

En revanche, pour $a = 1$, on a $0 * 1 = 0 - 1 = -1 \\neq 1$, donc $0$ n’est pas neutre à gauche. Conformément à la définition $(1.1)$ *b)*, $0$ n’est donc pas un élément neutre dans $(\\Z, *)$ (et $(\\Z, *)$ ne possède aucun élément neutre).

*c)* Soit $a \\in \\Z$ quelconque. Pour $a' \\in \\Z$, on a :

$$a * a' = e \\iff a - a' = 0 \\iff a' = a.$$

Donc oui : tout $a \\in \\Z$ admet un (unique) symétrique à droite relativement à $e = 0$, à savoir $a' = a$ lui-même.`
  },
  'c1-e02': {
    id: 'c1-e02',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 2,
    title: 'Loi a + b + ab sur ℚ',
    page: 61,
    upToOrderIndex: 399,
    statementTex: `Soit $\\Q$ l’ensemble des nombres rationnels muni de la loi de composition interne notée $*$, définie par :

$$\\begin{aligned} \\Q \\times \\Q &\\to \\Q \\\\ (a, b) &\\mapsto a * b = a + b + ab \\end{aligned}$$

$(\\Q, *)$ est-il un groupe ?`,
    hintTex: `Observer l’identité $a * b + 1 = (a + 1)(b + 1)$. Vérifier successivement les axiomes $(\\mathrm{G}_1)$, $(\\mathrm{G}_2)$ et $(\\mathrm{G}_3)$ de la définition $(1.3)$ en résolvant $a * a' = e$ pour tout $a \\in \\Q$.`,
    correctionTex: `On remarque que, quels que soient $a, b \\in \\Q$, on a $a * b + 1 = a + b + ab + 1 = (a + 1)(b + 1)$, soit :

$$a * b = (a + 1)(b + 1) - 1.$$

Vérifions les trois axiomes de la définition $(1.3)$ :

— **Axiome** $(\\mathrm{G}_1)$ *(associativité)* : quels que soient $a, b, c \\in \\Q$,

$$(a * b) * c = \\bigl((a + 1)(b + 1) - 1 + 1\\bigr)(c + 1) - 1 = (a + 1)(b + 1)(c + 1) - 1,$$

$$a * (b * c) = (a + 1)\\bigl((b + 1)(c + 1) - 1 + 1\\bigr) - 1 = (a + 1)(b + 1)(c + 1) - 1.$$

La loi $*$ est donc associative (et de plus commutative).

— **Axiome** $(\\mathrm{G}_2)$ *(élément neutre)* : un rationnel $e$ est élément neutre si et seulement si $\\forall a \\in \\Q,\\; a * e = e * a = a$, ce qui équivaut ici à $\\forall a \\in \\Q,\\; a + e + ae = a$, soit $e(a + 1) = 0$. En particulier pour $a = 0$, on obtient $e = 0$ ; réciproquement, pour tout $a \\in \\Q$, $a * 0 = 0 * a = a$. L’unique élément neutre de $(\\Q, *)$ est donc $e = 0$.

— **Axiome** $(\\mathrm{G}_3)$ *(symétrisabilité)* : un élément $a \\in \\Q$ est symétrisable si et seulement s’il existe $a' \\in \\Q$ tel que $a * a' = 0$, c’est-à-dire $(a + 1)(a' + 1) - 1 = 0$, soit :

$$(a + 1)(a' + 1) = 1.$$

Pour $a = -1 \\in \\Q$, cette équation devient $0 \\cdot (a' + 1) = 1$, soit $0 = 1$, qui n’admet aucune solution dans $\\Q$.

**Conclusion :** l’élément $-1$ n’est pas symétrisable, donc $(\\Q, *)$ **n’est pas un groupe**. (On constate en revanche que $(\\Q \\setminus \\{-1\\}, *)$ est un groupe abélien, isomorphe à $(\\Q^*, \\times)$ via $a \\mapsto a + 1$.)`
  },
  'c1-e03': {
    id: 'c1-e03',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 3,
    title: 'Axiomes affaiblis à droite',
    page: 62,
    upToOrderIndex: 399,
    statementTex: `Soit $G$ un ensemble non vide muni d’une loi de composition interne *associative* notée $\\cdot$ ; on suppose que dans $(G, \\cdot)$ les deux conditions suivantes sont vérifiées :

$1^\\circ$ il existe un élément *neutre à droite* $e$ (voir exercice 1) ;

$2^\\circ$ tout élément $x \\in G$ admet un *symétrique à droite*, $x'$ (voir exercice 1).

Démontrer que $(G, \\cdot)$ est un groupe ; vérifier, par un contre-exemple, que, sans l’associativité de la loi $\\cdot$, ce résultat n’est plus vrai.`,
    hintTex: `Soit $x \\in G$ muni d’un symétrique à droite $x'$ ($x \\cdot x' = e$). Introduire un symétrique à droite $x''$ de $x'$ ($x' \\cdot x'' = e$) et montrer d’abord $x' \\cdot x = e$ grâce à l’associativité, puis en déduire $e \\cdot x = x$.`,
    correctionTex: `**1. Structure de groupe sur** $(G, \\cdot)$.

Par hypothèse, $G$ est non vide et la loi $\\cdot$ est associative (axiome $(\\mathrm{G}_1)$). Soit $x \\in G$ quelconque.

D’après $2^\\circ$, il existe $x' \\in G$ tel que $x \\cdot x' = e$. En appliquant à nouveau $2^\\circ$ à l’élément $x'$, il existe $x'' \\in G$ tel que $x' \\cdot x'' = e$.

— *Montrons d’abord que* $x' \\cdot x = e$ : en utilisant $1^\\circ$ ($e$ neutre à droite) et l’associativité de $\\cdot$, on calcule :

$$\\begin{aligned} x' \\cdot x &= (x' \\cdot x) \\cdot e = (x' \\cdot x) \\cdot (x' \\cdot x'') \\\\ &= \\bigl((x' \\cdot x) \\cdot x'\\bigr) \\cdot x'' = \\bigl(x' \\cdot (x \\cdot x')\\bigr) \\cdot x'' \\\\ &= (x' \\cdot e) \\cdot x'' = x' \\cdot x'' = e. \\end{aligned}$$

— *Montrons que* $e$ *est aussi neutre à gauche* : pour tout $x \\in G$, en utilisant $x \\cdot x' = e$, l’associativité et $x' \\cdot x = e$, on a :

$$e \\cdot x = (x \\cdot x') \\cdot x = x \\cdot (x' \\cdot x) = x \\cdot e = x.$$

Comme $x \\cdot e = x$ (par $1^\\circ$) et $e \\cdot x = x$ pour tout $x \\in G$, $e$ est élément neutre de $(G, \\cdot)$ (axiome $(\\mathrm{G}_2)$).

— *Symétrisabilité :* pour tout $x \\in G$, l’élément $x'$ trouvé vérifie à la fois $x \\cdot x' = e$ et $x' \\cdot x = e$, donc $x'$ est un symétrique de $x$ dans $(G, \\cdot)$ (axiome $(\\mathrm{G}_3)$).

Ainsi $(G, \\cdot)$ est un groupe.

**2. Contre-exemple sans associativité.**

— D’après l’exercice 1, $(\\Z, *)$ avec $a * b = a - b$ vérifie $1^\\circ$ (neutre à droite $e = 0$) et $2^\\circ$ (symétrique à droite $a' = a$ pour tout $a \\in \\Z$), sans être un groupe (la loi n’est ni associative ni dotée d’un neutre à gauche).

— On peut aussi construire un contre-exemple fini sur $E = \\{e, a\\}$ ($e \\neq a$) muni de la table :

$$\\begin{array}{c|cc} \\cdot & e & a \\\\ \\hline e & e & e \\\\ a & a & e \\end{array}$$

Alors $e \\cdot e = e$ et $a \\cdot e = a$ ($1^\\circ$ est vérifié avec $e$), et $e \\cdot a = e$ et $a \\cdot a = e$ ($2^\\circ$ est vérifié avec $x' = a$ pour tout $x \\in E$). Pourtant $(E, \\cdot)$ n’est pas un groupe car $e \\cdot a = e \\neq a$ (et la loi n’est pas associative puisque $(a \\cdot e) \\cdot a = a \\cdot a = e$ alors que $a \\cdot (e \\cdot a) = a \\cdot e = a$).`
  },
  'c1-e04': {
    id: 'c1-e04',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 4,
    title: 'Demi-groupe fini simplifiable',
    page: 62,
    upToOrderIndex: 399,
    statementTex: `Soit $G$ un ensemble *fini*, non vide, muni d’une loi de composition interne notée $\\cdot$ ; on suppose que la loi $\\cdot$ est associative et que dans $(G, \\cdot)$ tout élément est simplifiable à droite et à gauche.

Démontrer que $(G, \\cdot)$ est un groupe.`,
    hintTex: `Fixer un élément $a \\in G$ et considérer les applications $x \\mapsto a \\cdot x$ et $x \\mapsto x \\cdot a$ de $G$ dans $G$. Par simplifiabilité elles sont injectives, donc bijectives puisque $G$ est fini.`,
    correctionTex: `L’axiome $(\\mathrm{G}_1)$ (associativité) est vrai par hypothèse et $G$ est non vide. Fixons un élément $a \\in G$.

Pour tout $c \\in G$, introduisons les applications de $G$ dans $G$ définies par :

$$L_c : x \\mapsto c \\cdot x \\qquad \\text{et} \\qquad R_c : x \\mapsto x \\cdot c.$$

Comme tout élément $c \\in G$ est simplifiable à gauche ($c \\cdot x = c \\cdot y \\implies x = y$) et à droite ($x \\cdot c = y \\cdot c \\implies x = y$), les applications $L_c$ et $R_c$ sont injectives. Puisque $G$ est **fini**, toute application injective de $G$ dans $G$ est bijective, donc en particulier **surjective**.

**1. Existence d’un élément neutre** ($(\\mathrm{G}_2)$).

— La surjectivité de $L_a$ fournit un élément $e \\in G$ tel que $a \\cdot e = a$. Montrons que $e$ est neutre à droite : pour tout $x \\in G$, la surjectivité de $R_a$ donne un élément $y \\in G$ tel que $x = y \\cdot a$, d’où par associativité :

$$x \\cdot e = (y \\cdot a) \\cdot e = y \\cdot (a \\cdot e) = y \\cdot a = x.$$

— Symétriquement, la surjectivité de $R_a$ fournit $e' \\in G$ tel que $e' \\cdot a = a$. Pour tout $x \\in G$, la surjectivité de $L_a$ donne $z \\in G$ tel que $x = a \\cdot z$, d’où :

$$e' \\cdot x = e' \\cdot (a \\cdot z) = (e' \\cdot a) \\cdot z = a \\cdot z = x,$$

ce qui prouve que $e'$ est neutre à gauche.

— En évaluant $e' \\cdot e$, on a $e' \\cdot e = e'$ (car $e$ est neutre à droite) et $e' \\cdot e = e$ (car $e'$ est neutre à gauche), d’où $e' = e$. Ainsi $e$ est l’élément neutre de $(G, \\cdot)$.

**2. Existence du symétrique** ($(\\mathrm{G}_3)$).

Soit $x \\in G$ quelconque. Comme $L_x$ et $R_x$ sont surjectives, il existe $x', x'' \\in G$ tels que $x \\cdot x' = e$ et $x'' \\cdot x = e$. Par associativité :

$$x'' = x'' \\cdot e = x'' \\cdot (x \\cdot x') = (x'' \\cdot x) \\cdot x' = e \\cdot x' = x'.$$

Ainsi $x' = x''$ vérifie $x \\cdot x' = x' \\cdot x = e$ : tout $x \\in G$ est symétrisable. (On pouvait aussi conclure dès la vérification que $e$ est neutre à droite et que tout $x$ admet un symétrique à droite via $L_x$, en invoquant l’exercice 3.)

**Conclusion :** $(G, \\cdot)$ est un groupe.`
  },
  'c1-e05': {
    id: 'c1-e05',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 5,
    title: 'Groupes d’exposant 2 (x² = e)',
    page: 62,
    upToOrderIndex: 399,
    statementTex: `Soit $G$ un groupe d’élément unité $e$, vérifiant la condition $(\\mathscr{C})$ :

$$\\forall x \\in G,\\quad x^2 = e.$$

*a)* Donner au moins un exemple de groupe, non réduit à un seul élément, vérifiant $(\\mathscr{C})$.

*b)* Démontrer que tout groupe $G$ vérifiant $(\\mathscr{C})$ est abélien.`,
    hintTex: `Traduire la condition $x^2 = e$ en termes d’inverse ($x = x^{-1}$), puis appliquer cette égalité au produit $xy$ à l’aide de la formule $(5)$ donnant $(xy)^{-1}$.`,
    correctionTex: `*a)* On peut citer plusieurs exemples vus au § 1 :

— le groupe additif $\\left(\\Zn{2}, +\\right)$, d’ordre $2$, dans lequel $\\overline{0} + \\overline{0} = \\overline{0}$ et $\\overline{1} + \\overline{1} = \\overline{2} = \\overline{0}$ ;

— le groupe multiplicatif $U = \\{-1, 1\\}$, où $1^2 = 1$ et $(-1)^2 = 1$ ;

— le groupe de Klein $V = \\{e, a, b, c\\}$ défini par la table $(11)$ (p. 28), d’ordre $4$, où $e^2 = a^2 = b^2 = c^2 = e$.

*b)* Soit $x \\in G$. L’égalité $x^2 = x \\cdot x = e$ entraîne, d’après la remarque $(1.10)$ (ou par unicité du symétrique, remarque $(1.4)$ $2^\\circ$), que $x = x^{-1}$.

Soient alors $x, y \\in G$ quelconques. L’élément $xy$ appartient à $G$, donc vérifie aussi $xy = (xy)^{-1}$. En appliquant la formule $(5)$ ($(xy)^{-1} = y^{-1} x^{-1}$) puis l’égalité $z^{-1} = z$ à $x$ et à $y$, on obtient :

$$xy = (xy)^{-1} = y^{-1} x^{-1} = yx.$$

La loi de $G$ est donc commutative : le groupe $G$ est abélien.`
  },
  'c1-e06': {
    id: 'c1-e06',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 6,
    title: 'Application passage à l’inverse x ↦ x⁻¹',
    page: 62,
    upToOrderIndex: 399,
    statementTex: `$G$ étant un groupe, prouver que l’application $\\begin{aligned}[t] f : G &\\to G \\\\ x &\\mapsto x^{-1} \\end{aligned}$ est une permutation de $G$ et que $f$ est un automorphisme si et seulement si le groupe $G$ est abélien.`,
    hintTex: `Calculer $f \\circ f$ pour établir que $f$ est bijective, puis utiliser la proposition $(1.66)$ $1^\\circ$ et la formule $(5)$ pour comparer $f(xy)$ et $f(x)f(y)$.`,
    correctionTex: `**1. Caractère bijectif de** $f$.

Pour tout $x \\in G$, l’inverse $x^{-1}$ vérifie $x^{-1} x = x x^{-1} = e$, donc par unicité du symétrique (remarque $(1.4)$ $2^\\circ$), l’inverse de $x^{-1}$ est $x$, c’est-à-dire $(x^{-1})^{-1} = x$. Ainsi :

$$\\forall x \\in G,\\quad (f \\circ f)(x) = f(f(x)) = (x^{-1})^{-1} = x,$$

soit $f \\circ f = \\id_G$. L’application $f$ est donc bijective (égale à sa propre bijection réciproque) : c’est une permutation de $G$ ($f \\in S_G$).

**2. Condition pour que** $f$ **soit un automorphisme.**

Puisque $f$ est bijective de $G$ sur $G$, la proposition $(1.66)$ $1^\\circ$ et la définition $(1.69)$ montrent que $f$ est un automorphisme de $G$ si et seulement si $f \\in \\operatorname{End}(G)$, c’est-à-dire si et seulement si :

$$\\forall (x, y) \\in G \\times G,\\quad f(xy) = f(x)f(y) \\iff \\forall (x, y) \\in G \\times G,\\quad (xy)^{-1} = x^{-1} y^{-1}.$$

Or, d’après la formule $(5)$, on a $(xy)^{-1} = y^{-1} x^{-1}$ pour tous $x, y \\in G$.

— *Réciproque* ($\\Longleftarrow$) : si $G$ est abélien, alors pour tous $x, y \\in G$, $y^{-1} x^{-1} = x^{-1} y^{-1}$, d’où $(xy)^{-1} = x^{-1} y^{-1}$, soit $f(xy) = f(x)f(y)$. Donc $f \\in \\operatorname{Aut}(G)$.

— *Sens direct* ($\\Longrightarrow$) : si $f \\in \\operatorname{Aut}(G)$, alors $\\forall (x, y) \\in G \\times G,\\; y^{-1} x^{-1} = x^{-1} y^{-1}$. En appliquant cette égalité aux éléments $x^{-1}$ et $y^{-1}$ (ou en prenant l’inverse des deux membres via $(5)$), on obtient pour tous $x, y \\in G$ :

$$(x^{-1})^{-1}(y^{-1})^{-1} = (y^{-1})^{-1}(x^{-1})^{-1}, \\qquad \\text{soit} \\quad xy = yx.$$

Le groupe $G$ est donc abélien.`
  },
  'c1-e07': {
    id: 'c1-e07',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 7,
    title: 'Élément d’ordre 2 dans un groupe d’ordre pair',
    page: 62,
    upToOrderIndex: 399,
    statementTex: `Montrer que si $G$ est un groupe *fini d’ordre pair*, il existe au moins un élément $x \\neq e$, dans $G$, tel que $x^2 = e$.`,
    hintTex: `Partitionner $G$ selon que $x = x^{-1}$ ou $x \\neq x^{-1}$ : dans la seconde partie, les éléments se regroupent par paires disjointes $\\{x, x^{-1}\\}$ de cardinal $2$.`,
    correctionTex: `Pour tout $x \\in G$, on a l’équivalence $x^2 = e \\iff x = x^{-1}$ (si $x^2 = e$, la remarque $(1.10)$ donne $x = x^{-1}$ ; réciproquement $x = x^{-1}$ donne $x^2 = x x^{-1} = e$).

Partitionnons l’ensemble fini $G$ en deux parties disjointes :

$$A = \\{x \\in G \\;;\\; x = x^{-1}\\} = \\{x \\in G \\;;\\; x^2 = e\\} \\qquad \\text{et} \\qquad B = \\{x \\in G \\;;\\; x \\neq x^{-1}\\}.$$

— Étudions le cardinal de $B$ : pour tout $x \\in B$, on a $(x^{-1})^{-1} = x \\neq x^{-1}$, donc $x^{-1} \\in B$ et $x^{-1} \\neq x$. Les paires $\\{x, x^{-1}\\}$ pour $x \\in B$ contiennent chacune exactement $2$ éléments, recouvrent $B$, et sont deux à deux égales ou disjointes (en effet, si $z \\in \\{x, x^{-1}\\} \\cap \\{y, y^{-1}\\}$, alors $y \\in \\{z, z^{-1}\\} = \\{x, x^{-1}\\}$, donc $\\{y, y^{-1}\\} = \\{x, x^{-1}\\}$). L’ensemble $B$ est donc réunion disjointe de paires à $2$ éléments, ce qui prouve que $\\card B$ est **pair**.

— Comme $G = A \\cup B$ avec $A \\cap B = \\varnothing$, on a $\\card G = \\card A + \\card B$. Par hypothèse $\\card G$ est pair, et $\\card B$ est pair, donc $\\card A = \\card G - \\card B$ est **pair**.

— Or $e^2 = e$, donc $e \\in A$ et $\\card A \\geqslant 1$. Puisque $\\card A$ est un entier naturel pair non nul, on a nécessairement $\\card A \\geqslant 2$. Il existe donc au moins un élément $x \\in A$ distinct de $e$, c’est-à-dire $x \\neq e$ tel que $x^2 = e$.`
  },
  'c1-e08': {
    id: 'c1-e08',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 8,
    title: 'Sous-groupe U = {-1, 1} et isomorphisme avec ℤ/(2)',
    page: 62,
    upToOrderIndex: 399,
    statementTex: `Dans l’ensemble des entiers $\\Z$, on pose $U = \\{-1, 1\\}$.

*a)* Vérifier que $U$ est un groupe relativement à la multiplication des entiers, donc un sous-groupe de $(\\Q^*, \\times)$.

*b)* Montrer que le groupe $U$ est isomorphe au groupe $\\left(\\Zn{2}, +\\right)$.`,
    hintTex: `Pour *a)*, appliquer le théorème $(1.24)$ dans $(\\Q^*, \\times)$ (ou dresser la table de multiplication de $U$). Pour *b)*, associer l’élément neutre $1$ à $\\overline{0}$ et $-1$ à $\\overline{1}$.`,
    correctionTex: `*a)* On a $U = \\{-1, 1\\} \\subseteq \\Z \\setminus \\{0\\} \\subseteq \\Q^*$, et $1 \\in U$ donc $U \\neq \\varnothing$.

De plus, dans $(\\Q^*, \\times)$, l’inverse de $1$ est $1^{-1} = 1 \\in U$ et l’inverse de $-1$ est $(-1)^{-1} = -1 \\in U$, et tous les produits possibles dans $U$ restent dans $U$ :

$$1 \\cdot 1 = 1,\\qquad 1 \\cdot (-1) = (-1) \\cdot 1 = -1,\\qquad (-1) \\cdot (-1) = 1.$$

Ainsi, quels que soient $x, y \\in U$, on a $x y^{-1} \\in U$. D’après le théorème $(1.24)$, $U$ est un sous-groupe de $(\\Q^*, \\times)$, et d’après la remarque $(1.21)$ $2^\\circ$, $U$ est donc un groupe pour la multiplication induite (qui est la multiplication des entiers).

*b)* Considérons l’application $f : U \\to \\Zn{2}$ définie par :

$$f(1) = \\overline{0} \\qquad \\text{et} \\qquad f(-1) = \\overline{1}.$$

Comme $U = \\{1, -1\\}$ (avec $1 \\neq -1$) et $\\Zn{2} = \\{\\overline{0}, \\overline{1}\\}$ (avec $\\overline{0} \\neq \\overline{1}$), $f$ est bijective. Vérifions que $f(xy) = f(x) + f(y)$ pour tout couple $(x, y) \\in U \\times U$ :

— $f(1 \\cdot 1) = f(1) = \\overline{0} = \\overline{0} + \\overline{0} = f(1) + f(1)$ ;

— $f(1 \\cdot (-1)) = f(-1) = \\overline{1} = \\overline{0} + \\overline{1} = f(1) + f(-1)$ ;

— $f((-1) \\cdot 1) = f(-1) = \\overline{1} = \\overline{1} + \\overline{0} = f(-1) + f(1)$ ;

— $f((-1) \\cdot (-1)) = f(1) = \\overline{0} = \\overline{2} = \\overline{1} + \\overline{1} = f(-1) + f(-1)$.

Ainsi $f$ est un morphisme bijectif, donc d’après la proposition $(1.66)$ $1^\\circ$, $f$ est un isomorphisme de groupes : $U \\simeq \\Zn{2}$.`
  },
  'c1-e09': {
    id: 'c1-e09',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 9,
    title: 'Sous-groupe des nombres décimaux',
    page: 62,
    upToOrderIndex: 399,
    statementTex: `Soit $D$ le sous-ensemble de $\\Q$ formé par les nombres décimaux :

$$D = \\left\\{ \\dfrac{a}{10^n} \\;;\\; a \\in \\Z,\\; n \\in \\N \\right\\}.$$

Prouver que $D$ est un sous-groupe de $(\\Q, +)$.`,
    hintTex: `Vérifier que $0 \\in D$, puis réduire $\\dfrac{a}{10^n} - \\dfrac{b}{10^m}$ au dénominateur commun $10^{\\max(n, m)}$ afin d’appliquer le théorème $(1.24)$ en notation additive (formule $(15')$).`,
    correctionTex: `Utilisons la caractérisation du théorème $(1.24)$ en notation additive (formule $(15')$) :

— *Inclusion et non-vacuité :* pour tout $a \\in \\Z$ et $n \\in \\N$, $10^n \\in \\N^*$, donc $\\dfrac{a}{10^n} \\in \\Q$ et $D \\subseteq \\Q$. De plus, $0 = \\dfrac{0}{10^0} \\in D$, d’où $D \\neq \\varnothing$.

— *Stabilité par différence :* soient $x, y \\in D$. Il existe $a, b \\in \\Z$ et $n, m \\in \\N$ tels que :

$$x = \\dfrac{a}{10^n} \\qquad \\text{et} \\qquad y = \\dfrac{b}{10^m}.$$

Posons $N = \\max(n, m) \\in \\N$. On a $N - n \\in \\N$ et $N - m \\in \\N$, donc $10^{N - n} \\in \\Z$ et $10^{N - m} \\in \\Z$. Par suite :

$$x - y = \\dfrac{a}{10^n} - \\dfrac{b}{10^m} = \\dfrac{a \\cdot 10^{N - n} - b \\cdot 10^{N - m}}{10^N}.$$

Comme $c = a \\cdot 10^{N - n} - b \\cdot 10^{N - m} \\in \\Z$ et $N \\in \\N$, on a $x - y = \\dfrac{c}{10^N} \\in D$.

D’après le théorème $(1.24)$, $D$ est un sous-groupe de $(\\Q, +)$.`
  },
  'c1-e10': {
    id: 'c1-e10',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 10,
    title: 'Rationnels p-adiques ℚ_p et automorphisme x ↦ px',
    page: 63,
    upToOrderIndex: 399,
    statementTex: `Soit, dans $\\N$, un nombre premier $p$. On pose :

$$\\Q_p = \\left\\{ \\dfrac{a}{p^n} \\;;\\; a \\in \\Z,\\; n \\in \\N \\right\\}.$$

*a)* Vérifier que $\\Q_p$ est un sous-groupe de $(\\Q, +)$ et que

$$\\Q_p = \\bigcup_{n \\in \\N} \\left\\langle \\dfrac{1}{p^n} \\right\\rangle.$$

*b)* Montrer que l’application $\\begin{aligned}[t] \\varphi : \\Q_p &\\to \\Q_p \\\\ x &\\mapsto px \\end{aligned}$ est une permutation de $\\Q_p$.

L’application $\\varphi$ est-elle un automorphisme du groupe $(\\Q_p, +)$ ?`,
    hintTex: `Pour *a)*, adapter l’exercice 9 et utiliser la formule $(19')$ donnant $\\langle x \\rangle = \\{kx \\;;\\; k \\in \\Z\\}$ en notation additive. Pour *b)*, vérifier que l’application $y \\mapsto \\dfrac{y}{p}$ laisse $\\Q_p$ stable.`,
    correctionTex: `*a)* **1. Preuve que** $\\Q_p \\leqslant (\\Q, +)$.

Puisque $p$ est premier, $p \\geqslant 2$, donc $p^n \\neq 0$ pour tout $n \\in \\N$ et $\\Q_p \\subseteq \\Q$. De plus $0 = \\dfrac{0}{p^0} \\in \\Q_p$, donc $\\Q_p \\neq \\varnothing$.

Soient $x = \\dfrac{a}{p^n} \\in \\Q_p$ et $y = \\dfrac{b}{p^m} \\in \\Q_p$ ($a, b \\in \\Z$, $n, m \\in \\N$). En posant $N = \\max(n, m) \\in \\N$, on a $N - n \\in \\N$ et $N - m \\in \\N$, donc $a p^{N - n} - b p^{N - m} \\in \\Z$ et :

$$x - y = \\dfrac{a p^{N - n} - b p^{N - m}}{p^N} \\in \\Q_p.$$

D’après le théorème $(1.24)$, $\\Q_p \\leqslant (\\Q, +)$.

**2. Décomposition en réunion croissante.**

D’après la remarque $(1.39)$ (formule $(19')$), pour chaque $n \\in \\N$, le sous-groupe de $(\\Q, +)$ engendré par $\\dfrac{1}{p^n}$ est :

$$\\left\\langle \\dfrac{1}{p^n} \\right\\rangle = \\left\\{ a \\cdot \\dfrac{1}{p^n} \\;;\\; a \\in \\Z \\right\\} = \\left\\{ \\dfrac{a}{p^n} \\;;\\; a \\in \\Z \\right\\}.$$

— Pour tout $n \\in \\N$ et tout $a \\in \\Z$, $\\dfrac{a}{p^n} \\in \\Q_p$, d’où $\\bigcup_{n \\in \\N} \\left\\langle \\dfrac{1}{p^n} \\right\\rangle \\subseteq \\Q_p$.

— Réciproquement, tout élément $x \\in \\Q_p$ s’écrit $x = \\dfrac{a}{p^n}$ pour un $a \\in \\Z$ et un $n \\in \\N$, donc $x \\in \\left\\langle \\dfrac{1}{p^n} \\right\\rangle \\subseteq \\bigcup_{m \\in \\N} \\left\\langle \\dfrac{1}{p^m} \\right\\rangle$.

Par double inclusion, $\\Q_p = \\bigcup_{n \\in \\N} \\left\\langle \\dfrac{1}{p^n} \\right\\rangle$. (On retrouve d’ailleurs que cette réunion est un sous-groupe par la proposition $(1.27)$, car la famille est croissante pour l’inclusion : $\\dfrac{1}{p^n} = p \\cdot \\dfrac{1}{p^{n+1}} \\in \\left\\langle \\dfrac{1}{p^{n+1}} \\right\\rangle$.)

*b)* **1. Bijectivité de** $\\varphi$.

— *Stabilité :* pour tout $x = \\dfrac{a}{p^n} \\in \\Q_p$, $\\varphi(x) = p \\cdot \\dfrac{a}{p^n} = \\dfrac{pa}{p^n} \\in \\Q_p$ car $pa \\in \\Z$ : $\\varphi$ est bien une application de $\\Q_p$ dans $\\Q_p$.

— *Injectivité :* si $\\varphi(x) = \\varphi(y)$, alors $px = py$ dans $\\Q$, et comme $p \\neq 0$, on obtient $x = y$.

— *Surjectivité :* soit $y = \\dfrac{b}{p^n} \\in \\Q_p$ ($b \\in \\Z$, $n \\in \\N$). Posons $x = \\dfrac{b}{p^{n+1}}$ ; comme $n + 1 \\in \\N$, on a $x \\in \\Q_p$, et $\\varphi(x) = p \\cdot \\dfrac{b}{p^{n+1}} = \\dfrac{b}{p^n} = y$.

L’application $\\varphi$ est donc bijective de $\\Q_p$ sur $\\Q_p$, c’est-à-dire une permutation de $\\Q_p$.

**2. Caractère d’automorphisme.**

Oui. Quels que soient $x, y \\in \\Q_p$, par distributivité dans $\\Q$ :

$$\\varphi(x + y) = p(x + y) = px + py = \\varphi(x) + \\varphi(y).$$

Ainsi $\\varphi$ est un endomorphisme bijectif de $(\\Q_p, +)$, donc un automorphisme de $(\\Q_p, +)$ d’après la proposition $(1.66)$ $1^\\circ$ et la définition $(1.69)$.`
  },
  'c1-e11': {
    id: 'c1-e11',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 11,
    title: 'Sous-groupes quadratiques additifs et multiplicatifs',
    page: 63,
    upToOrderIndex: 399,
    statementTex: `Soit $p$ un nombre premier dans $\\N$. Vérifier les propriétés suivantes :

$\\{a + b\\sqrt{p} \\;;\\; (a, b) \\in \\Z \\times \\Z\\} < (\\R, +)$.

$\\{a + b\\sqrt{p} \\;;\\; a$ et $b$ dans $\\Q$ et non simultanément nuls$\\} < (\\R^*, \\times)$.

$\\{a + ib\\sqrt{p} \\;;\\; (a, b) \\in \\Z \\times \\Z\\} < (\\C, +)$.

$\\{a + ib\\sqrt{p} \\;;\\; a$ et $b$ dans $\\Q$ et non simultanément nuls$\\} < (\\C^*, \\times)$.`,
    hintTex: `Commencer par établir l’irrationalité de $\\sqrt{p}$ ($p$ premier) pour justifier l’inclusion dans $\\R^*$ et le caractère propre ($<$) des quatre sous-groupes. Pour les inverses dans les cas multiplicatifs, multiplier numérateur et dénominateur par le conjugué ($a - b\\sqrt{p}$ ou $a - ib\\sqrt{p}$).`,
    correctionTex: `**Préliminaire — Irrationalité de** $\\sqrt{p}$.

Supposons par l’absurde $\\sqrt{p} \\in \\Q$ et écrivons $\\sqrt{p} = \\dfrac{u}{v}$ sous forme irréductible avec $u \\in \\Z$, $v \\in \\N^*$ et $\\pgcd(u, v) = 1$. On a alors $p v^2 = u^2$, donc $p$ divise $u^2$. Comme $p$ est premier, le lemme d’Euclide entraîne que $p$ divise $u$ : écrivons $u = pk$ ($k \\in \\Z$). Il vient $p v^2 = p^2 k^2$, soit $v^2 = p k^2$ ; ainsi $p$ divise $v^2$, puis $p$ divise $v$, ce qui contredit $\\pgcd(u, v) = 1$. Donc $\\sqrt{p} \\notin \\Q$.

Rappelons que la notation $H < G$ (notation $(1.23)$) signifie que $H$ est un sous-groupe **propre** de $G$, c’est-à-dire $H \\leqslant G$ et $H \\neq G$.

**1. Cas additif réel :** $H_1 = \\{a + b\\sqrt{p} \\;;\\; (a, b) \\in \\Z \\times \\Z\\} < (\\R, +)$.

— $H_1 \\subseteq \\R$ et $0 = 0 + 0\\sqrt{p} \\in H_1$ ($H_1 \\neq \\varnothing$).

— Si $x = a + b\\sqrt{p}$ et $y = a' + b'\\sqrt{p}$ appartiennent à $H_1$ ($a, b, a', b' \\in \\Z$), alors $x - y = (a - a') + (b - b')\\sqrt{p} \\in H_1$ car $a - a', b - b' \\in \\Z$. D’après $(1.24)$, $H_1 \\leqslant (\\R, +)$.

— Montrons $H_1 \\neq \\R$ : $\\dfrac{1}{2} \\notin H_1$. En effet, si $\\dfrac{1}{2} = a + b\\sqrt{p}$ avec $a, b \\in \\Z$, on aurait $b \\neq 0$ (sinon $2a = 1$, impossible dans $\\Z$), d’où $\\sqrt{p} = \\dfrac{1 - 2a}{2b} \\in \\Q$, absurde. Donc $H_1 < (\\R, +)$.

**2. Cas multiplicatif réel :** $H_2 = \\{a + b\\sqrt{p} \\;;\\; (a, b) \\in \\Q \\times \\Q \\setminus \\{(0, 0)\\}\\} < (\\R^*, \\times)$.

— *Inclusion dans* $\\R^*$ *et non-vacuité* : si $a + b\\sqrt{p} = 0$ avec $a, b \\in \\Q$, alors $b = 0$ (sinon $\\sqrt{p} = -\\dfrac{a}{b} \\in \\Q$, absurde), puis $a = 0$. Ainsi, pour $(a, b) \\neq (0, 0)$, $a + b\\sqrt{p} \\neq 0$, donc $H_2 \\subseteq \\R^*$. De plus $1 = 1 + 0\\sqrt{p} \\in H_2 \\neq \\varnothing$.

— *Stabilité par produit :* si $x = a + b\\sqrt{p} \\in H_2$ et $y = a' + b'\\sqrt{p} \\in H_2$, alors :

$$xy = (aa' + pbb') + (ab' + a'b)\\sqrt{p}.$$

Comme $aa' + pbb' \\in \\Q$, $ab' + a'b \\in \\Q$ et $xy \\neq 0$ (dans $\\R^*$), les deux coefficients rationnels ne sont pas simultanément nuls, d’où $xy \\in H_2$.

— *Stabilité par inverse :* pour $x = a + b\\sqrt{p} \\in H_2$, comme $(a, -b) \\neq (0, 0)$, on a aussi $a - b\\sqrt{p} \\neq 0$, donc $a^2 - pb^2 = (a + b\\sqrt{p})(a - b\\sqrt{p}) \\in \\Q^*$, et :

$$x^{-1} = \\dfrac{a - b\\sqrt{p}}{a^2 - pb^2} = \\dfrac{a}{a^2 - pb^2} + \\dfrac{-b}{a^2 - pb^2}\\sqrt{p} \\in H_2$$

(les deux coefficients rationnels ne sont pas tous deux nuls car $x^{-1} \\neq 0$). D’après $(1.20)$, $H_2 \\leqslant (\\R^*, \\times)$.

— *Sous-groupe propre :* choisissons un nombre premier $q \\neq p$ (par exemple $q = 2$ si $p \\neq 2$, ou $q = 3$ si $p = 2$). Montrons que $\\sqrt{q} \\in \\R^* \\setminus H_2$. Si $\\sqrt{q} = a + b\\sqrt{p}$ avec $a, b \\in \\Q$, en élevant au carré on obtient $q = a^2 + pb^2 + 2ab\\sqrt{p}$. Comme $\\sqrt{p} \\notin \\Q$, cela impose $2ab = 0$, soit $a = 0$ ou $b = 0$. Si $b = 0$, $\\sqrt{q} = a \\in \\Q$, impossible car $q$ est premier. Si $a = 0$, alors $q = p b^2$ ; en écrivant $b = \\dfrac{u}{v}$ irréductible ($v > 0$), on a $q v^2 = p u^2$, donc $p$ divise $q v^2$. Comme $p \\neq q$ sont premiers, $p$ divise $v^2$ puis $v$, d’où $p^2$ divise $p u^2$, soit $p$ divise $u$, ce qui contredit $\\pgcd(u, v) = 1$. Ainsi $\\sqrt{q} \\notin H_2$, donc $H_2 < (\\R^*, \\times)$.

**3. Cas additif complexe :** $H_3 = \\{a + ib\\sqrt{p} \\;;\\; (a, b) \\in \\Z \\times \\Z\\} < (\\C, +)$.

— $H_3 \\subseteq \\C$, $0 = 0 + i \\cdot 0\\sqrt{p} \\in H_3 \\neq \\varnothing$, et pour $x = a + ib\\sqrt{p}$, $y = a' + ib'\\sqrt{p}$ dans $H_3$, on a $x - y = (a - a') + i(b - b')\\sqrt{p} \\in H_3$, d’où $H_3 \\leqslant (\\C, +)$ par $(1.24)$.

— De plus, $i \\in \\C \\setminus H_3$ : si $i = a + ib\\sqrt{p}$ avec $a, b \\in \\Z$, l’identification des parties réelle et imaginaire donne $a = 0$ et $b\\sqrt{p} = 1$, d’où $\\sqrt{p} = \\dfrac{1}{b} \\in \\Q$, absurde. Ainsi $H_3 < (\\C, +)$.

**4. Cas multiplicatif complexe :** $H_4 = \\{a + ib\\sqrt{p} \\;;\\; (a, b) \\in \\Q \\times \\Q \\setminus \\{(0, 0)\\}\\} < (\\C^*, \\times)$.

— *Inclusion dans* $\\C^*$ *et non-vacuité* : pour $a, b \\in \\Q$, les nombres $a$ et $b\\sqrt{p}$ sont réels, donc $a + ib\\sqrt{p} = 0 \\iff (a = 0 \\text{ et } b\\sqrt{p} = 0) \\iff a = b = 0$. On a donc $H_4 \\subseteq \\C^*$, et $1 = 1 + i \\cdot 0\\sqrt{p} \\in H_4 \\neq \\varnothing$.

— *Stabilité par produit et inverse :* pour $z = a + ib\\sqrt{p} \\in H_4$ et $z' = a' + ib'\\sqrt{p} \\in H_4$,

$$zz' = (aa' - pbb') + i(ab' + a'b)\\sqrt{p} \\in H_4$$

(car les coefficients sont rationnels et $zz' \\neq 0$), et comme $a^2 + pb^2 \\in \\Q$ avec $a^2 + pb^2 > 0$,

$$z^{-1} = \\dfrac{a - ib\\sqrt{p}}{a^2 + pb^2} = \\dfrac{a}{a^2 + pb^2} + i\\dfrac{-b}{a^2 + pb^2}\\sqrt{p} \\in H_4.$$

Par $(1.20)$, $H_4 \\leqslant (\\C^*, \\times)$.

— *Sous-groupe propre :* $i \\in \\C^* \\setminus H_4$, car si $i = a + ib\\sqrt{p}$ avec $a, b \\in \\Q$, on aurait $a = 0$ et $b\\sqrt{p} = 1$, d’où $\\sqrt{p} = \\dfrac{1}{b} \\in \\Q$, impossible. Donc $H_4 < (\\C^*, \\times)$.`
  },
  'c1-e12': {
    id: 'c1-e12',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 12,
    title: 'Sous-groupe Γ_∞ des racines de l’unité',
    page: 63,
    upToOrderIndex: 399,
    statementTex: `Étant donné un nombre premier $p \\in \\N$, on pose :

$$\\Gamma_\\infty = \\{z \\in \\C \\;;\\; \\exists n \\in \\N,\\; z^n = 1\\}.$$

Vérifier que $\\Gamma_\\infty$ est un sous-groupe de $(\\C^*, \\times)$.`,
    hintTex: `Attention à l’erratum de 1984 : la donnée de $p$ premier et de $n \\in \\N$ (avec $0 \\in \\N$) correspond en réalité au $p$-groupe de Prüfer $\\{z \\in \\C \\;;\\; \\exists n \\in \\N,\\; z^{p^n} = 1\\}$ (ou, sans $p$, aux racines de l’unité avec $n \\in \\N^*$). Pour deux éléments d’exposants $p^n$ et $p^m$, poser $N = \\max(n, m)$ (ou utiliser $nm$ dans le second cas) afin d’appliquer $(1.24)$.`,
    correctionTex: `**Note préliminaire sur l’erratum de 1984.**

Dans cet ouvrage, $0 \\in \\N$ (p. 18). Prise littéralement, la condition $\\exists n \\in \\N,\\; z^n = 1$ serait triviale pour $n = 0$ (puisque $z^0 = 1$ pour tout $z \\in \\C^*$), et le nombre premier $p$ introduit en préambule n’interviendrait pas. L’énoncé comporte une coquille typographique pour le $p$-**groupe de Prüfer** :

$$\\Gamma_\\infty = \\{z \\in \\C \\;;\\; \\exists n \\in \\N,\\; z^{p^n} = 1\\}.$$

Nous traitons ce cas principal ainsi que le cas de l’ensemble de toutes les racines de l’unité (où la restriction $n \\in \\N^*$ est indispensable).

**1. Cas du** $p$-**groupe de Prüfer :** $\\Gamma_\\infty = \\{z \\in \\C \\;;\\; \\exists n \\in \\N,\\; z^{p^n} = 1\\}$.

— *Inclusion dans* $\\C^*$ *et non-vacuité* : pour tout $n \\in \\N$, on a $p^n \\geqslant 1$, donc $z^{p^n} = 1$ implique $z \\neq 0$, soit $\\Gamma_\\infty \\subseteq \\C^*$. De plus, pour $n = 0$, $1^{p^0} = 1^1 = 1$, donc $1 \\in \\Gamma_\\infty \\neq \\varnothing$.

— *Critère* $(1.24)$ : soient $z, w \\in \\Gamma_\\infty$. Il existe $n, m \\in \\N$ tels que $z^{p^n} = 1$ et $w^{p^m} = 1$. Posons $N = \\max(n, m) \\in \\N$ ; alors $N - n \\in \\N$ et $N - m \\in \\N$, d’où $p^N = p^n \\cdot p^{N - n} = p^m \\cdot p^{N - m}$. On en déduit :

$$z^{p^N} = \\bigl(z^{p^n}\\bigr)^{p^{N - n}} = 1^{p^{N - n}} = 1 \\qquad \\text{et} \\qquad w^{p^N} = \\bigl(w^{p^m}\\bigr)^{p^{N - m}} = 1^{p^{N - m}} = 1.$$

Par commutativité de $\\C^*$, on obtient alors :

$$(z w^{-1})^{p^N} = z^{p^N} (w^{p^N})^{-1} = 1 \\cdot 1^{-1} = 1,$$

donc $z w^{-1} \\in \\Gamma_\\infty$. D’après le théorème $(1.24)$, $\\Gamma_\\infty \\leqslant (\\C^*, \\times)$. (On peut également remarquer que $\\Gamma_\\infty = \\bigcup_{n \\in \\N} U_{p^n}$ est une réunion croissante des sous-groupes $U_{p^n}$ de l’exemple $(1.30)$, donc un sous-groupe d’après la proposition $(1.27)$.)

**2. Cas de toutes les racines de l’unité :** $\\mu_\\infty = \\{z \\in \\C \\;;\\; \\exists n \\in \\N^*,\\; z^n = 1\\}$.

Ici la restriction $n \\in \\N^*$ est indispensable précisément parce que $0 \\in \\N$ dans ce livre : autoriser $n = 0$ donnerait $z^0 = 1$ pour tout $z \\in \\C^*$, auquel cas l’ensemble coïnciderait avec $\\C^*$ tout entier.

Avec $n \\in \\N^*$ : tout $z \\in \\mu_\\infty$ vérifie $z^n = 1$ avec $n \\geqslant 1$, donc $z \\neq 0$, et $1^1 = 1$ donne $1 \\in \\mu_\\infty \\neq \\varnothing$. Si $z, w \\in \\mu_\\infty$ vérifient $z^n = 1$ et $w^m = 1$ avec $n, m \\in \\N^*$, alors $nm \\in \\N^*$ et :

$$(z w^{-1})^{nm} = (z^n)^m \\bigl((w^m)^n\\bigr)^{-1} = 1^m \\cdot (1^n)^{-1} = 1,$$

donc $z w^{-1} \\in \\mu_\\infty$. Par le théorème $(1.24)$, $\\mu_\\infty \\leqslant (\\C^*, \\times)$.`
  },
  'c1-e13': {
    id: 'c1-e13',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 13,
    title: 'Groupe des translations de ℝ',
    page: 63,
    upToOrderIndex: 399,
    statementTex: `À tout nombre réel $a$ on associe l’application :

$$\\begin{aligned} \\tau_a : \\R &\\to \\R \\\\ x &\\mapsto a + x. \\end{aligned}$$

Justifier la propriété :

$T = \\{\\tau_a \\;;\\; a \\in \\R\\}$ est un sous-groupe du groupe symétrique $S_\\R$ et le groupe $T$ est isomorphe au groupe $(\\R, +)$.`,
    hintTex: `Calculer $\\tau_a \\circ \\tau_b$ pour en déduire à la fois que chaque $\\tau_a$ est bijective (d’inverse $\\tau_{-a}$), que $T$ satisfait le critère $(1.24)$, et que $\\Phi : a \\mapsto \\tau_a$ est un isomorphisme de $(\\R, +)$ sur $(T, \\circ)$.`,
    correctionTex: `**1. Composition et inclusion** $T \\subseteq S_\\R$.

Quels que soient $a, b \\in \\R$ et $x \\in \\R$, on a :

$$(\\tau_a \\circ \\tau_b)(x) = \\tau_a(b + x) = a + (b + x) = (a + b) + x = \\tau_{a+b}(x),$$

donc $\\tau_a \\circ \\tau_b = \\tau_{a+b}$. De plus, $\\tau_0(x) = 0 + x = x$, donc $\\tau_0 = \\id_\\R$.

En particulier, pour tout $a \\in \\R$, $\\tau_a \\circ \\tau_{-a} = \\tau_0 = \\id_\\R$ et $\\tau_{-a} \\circ \\tau_a = \\tau_0 = \\id_\\R$ : chaque $\\tau_a$ est donc bijective de $\\R$ dans $\\R$, avec $(\\tau_a)^{-1} = \\tau_{-a}$. Ainsi $T \\subseteq S_\\R$ et $T \\neq \\varnothing$ (car $\\tau_0 \\in T$).

**2. Preuve que** $T \\leqslant S_\\R$.

Quels que soient $\\tau_a, \\tau_b \\in T$, on a :

$$\\tau_a \\circ (\\tau_b)^{-1} = \\tau_a \\circ \\tau_{-b} = \\tau_{a - b} \\in T.$$

D’après le théorème $(1.24)$, $T \\leqslant S_\\R$.

**3. Isomorphisme** $T \\simeq (\\R, +)$.

Considérons l’application $\\Phi : (\\R, +) \\to (T, \\circ)$ définie par $\\Phi(a) = \\tau_a$.

— *Morphisme :* pour tous $a, b \\in \\R$, $\\Phi(a + b) = \\tau_{a+b} = \\tau_a \\circ \\tau_b = \\Phi(a) \\circ \\Phi(b)$, donc $\\Phi \\in \\operatorname{Hom}((\\R, +), (T, \\circ))$.

— *Surjectivité :* immédiate par définition de $T = \\{\\tau_a \\;;\\; a \\in \\R\\}$.

— *Injectivité :* si $\\Phi(a) = \\Phi(b)$, alors $\\tau_a = \\tau_b$, donc en évaluant en $x = 0$ on obtient $a = \\tau_a(0) = \\tau_b(0) = b$.

D’après la proposition $(1.66)$ $1^\\circ$, $\\Phi$ est un isomorphisme de $(\\R, +)$ sur $T$, donc $T \\simeq (\\R, +)$ par la remarque $(1.71)$ *b)*. (Ce résultat illustre le lemme $(1.77)$ appliqué au groupe additif $G = (\\R, +)$.)`
  },
  'c1-e14': {
    id: 'c1-e14',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 14,
    title: 'Épimorphismes valeur absolue et module',
    page: 63,
    upToOrderIndex: 399,
    statementTex: `On considère les groupes multiplicatifs $\\R^*$, $\\R_+^*$ et $\\C^*$ (voir exemples (1.29)) et les applications :

$$\\begin{aligned} f : \\R^* &\\to \\R_+^* \\\\ x &\\mapsto |x|, \\quad \\text{où } |x| \\text{ est la valeur absolue de } x \\end{aligned}$$

et

$$\\begin{aligned} g : \\C^* &\\to \\R_+^* \\\\ z &\\mapsto |z|, \\quad \\text{où } |z| \\text{ est le module de } z. \\end{aligned}$$

Vérifier que $f$ et $g$ sont les épimorphismes de groupes.

Déterminer les noyaux de $f$ et $g$.`,
    hintTex: `D’après la proposition $(1.80)$ $2^\\circ$ et la remarque $(1.81)$, un épimorphisme de groupes est un morphisme surjectif. Vérifier $|xy| = |x||y|$ et observer que tout $r \\in \\R_+^*$ est son propre antécédent.`,
    correctionTex: `*(Note d’édition : l’énoncé imprimé de 1984 écrit « sont **les** épimorphismes de groupes », coquille typographique pour « sont **des** épimorphismes de groupes ».)*

D’après la proposition $(1.80)$ $2^\\circ$ et la remarque $(1.81)$, un épimorphisme de groupes est exactement un morphisme surjectif.

**1. Étude de** $f : (\\R^*, \\times) \\to (\\R_+^*, \\times)$.

— Pour tout $x \\in \\R^*$, on a $|x| > 0$, donc $f(x) \\in \\R_+^*$ ($f$ est bien définie).

— *Morphisme :* quels que soient $x, y \\in \\R^*$, $f(xy) = |xy| = |x|\\,|y| = f(x)f(y)$, donc $f \\in \\operatorname{Hom}(\\R^*, \\R_+^*)$.

— *Surjectivité :* soit $r \\in \\R_+^*$. Alors $r \\in \\R^*$ (car $r > 0 \\implies r \\neq 0$) et $f(r) = |r| = r$. Donc $\\Im f = \\R_+^*$, et $f$ est un épimorphisme.

— *Noyau :* l’élément neutre de $(\\R_+^*, \\times)$ étant $1$, on a par la définition $(1.57)$ :

$$\\Ker f = \\{x \\in \\R^* \\;;\\; |x| = 1\\} = \\{-1, 1\\}.$$

**2. Étude de** $g : (\\C^*, \\times) \\to (\\R_+^*, \\times)$.

— Pour tout $z \\in \\C^*$, $|z| > 0$, donc $g(z) \\in \\R_+^*$.

— *Morphisme :* quels que soient $z, z' \\in \\C^*$, $g(zz') = |zz'| = |z|\\,|z'| = g(z)g(z')$, donc $g \\in \\operatorname{Hom}(\\C^*, \\R_+^*)$.

— *Surjectivité :* tout $r \\in \\R_+^*$ appartient à $\\C^*$ et vérifie $g(r) = |r| = r$, donc $\\Im g = \\R_+^*$, et $g$ est un épimorphisme.

— *Noyau :*

$$\\Ker g = \\{z \\in \\C^* \\;;\\; |z| = 1\\} = U,$$

où $U$ est le groupe des nombres complexes de module $1$ (exemples $(1.30)$).`
  },
  'c1-e15': {
    id: 'c1-e15',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 15,
    title: 'Isomorphisme exponentiel x ↦ 10ˣ',
    page: 64,
    upToOrderIndex: 399,
    statementTex: `Démontrer que l’application $\\begin{aligned}[t] \\lambda : \\R &\\to \\R_+^* \\\\ x &\\mapsto 10^x \\end{aligned}$ est un isomorphisme du groupe $(\\R, +)$ sur le groupe $(\\R_+^*, \\times)$.`,
    hintTex: `Vérifier que $\\lambda$ est un morphisme grâce à $10^{x+y} = 10^x \\cdot 10^y$, puis établir la bijectivité de $\\lambda$ (à l’aide de $\\log_{10}$ ou de sa stricte croissance et du théorème des valeurs intermédiaires) et conclure par la proposition $(1.66)$ $1^\\circ$.`,
    correctionTex: `Pour tout $x \\in \\R$, on a $10^x = \\exp(x \\ln 10) > 0$, donc $\\lambda$ est bien une application de $\\R$ dans $\\R_+^*$.

— *Morphisme :* quels que soient $x, y \\in \\R$,

$$\\lambda(x + y) = 10^{x + y} = 10^x \\cdot 10^y = \\lambda(x)\\lambda(y),$$

donc $\\lambda \\in \\operatorname{Hom}((\\R, +), (\\R_+^*, \\times))$.

— *Bijectivité :* considérons le logarithme décimal $\\log_{10} : \\R_+^* \\to \\R$, défini par $\\log_{10}(y) = \\dfrac{\\ln y}{\\ln 10}$. Pour tout $x \\in \\R$, $\\log_{10}(\\lambda(x)) = \\dfrac{\\ln(\\exp(x \\ln 10))}{\\ln 10} = x$, et pour tout $y \\in \\R_+^*$, $\\lambda(\\log_{10}(y)) = \\exp\\!\\left(\\dfrac{\\ln y}{\\ln 10}\\ln 10\\right) = \\exp(\\ln y) = y$. Ainsi $\\lambda$ est bijective, de bijection réciproque $\\log_{10}$.

D’après la proposition $(1.66)$ $1^\\circ$, $\\lambda$ est un isomorphisme du groupe $(\\R, +)$ sur le groupe $(\\R_+^*, \\times)$.`
  },
  'c1-e16': {
    id: 'c1-e16',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 16,
    title: 'Centre d’un groupe, sous-groupes et épimorphismes',
    page: 64,
    upToOrderIndex: 399,
    statementTex: `*a)* Le centre d’un groupe $G$ étant désigné par $Z(G)$, démontrer la propriété :

$$H \\leqslant G \\implies Z(G) \\cap H \\leqslant Z(H).$$

*b)* $G$ et $G'$ étant deux groupes, si $f$ est un épimorphisme de $G$ sur $G'$, prouver que l’on a : $f(Z(G)) \\leqslant Z(G')$.`,
    hintTex: `Pour *a)*, vérifier que $Z(G) \\cap H$ est un sous-groupe de $G$ inclus dans $Z(H)$. Pour *b)*, utiliser la proposition $(1.55)$ $4^\\circ$ pour obtenir $f(Z(G)) \\leqslant G'$, puis utiliser la surjectivité de $f$ (proposition $(1.80)$ $2^\\circ$) pour montrer $f(Z(G)) \\subseteq Z(G')$.`,
    correctionTex: `*a)* Supposons $H \\leqslant G$. Par l’exemple $(1.35)$, $Z(G) \\leqslant G$ et $Z(H) \\leqslant H$.

D’après la proposition $(1.25)$, $Z(G) \\cap H$ est un sous-groupe de $G$. En particulier, $e \\in Z(G) \\cap H \\neq \\varnothing$ et, quels que soient $x, y \\in Z(G) \\cap H$, on a $x y^{-1} \\in Z(G) \\cap H$.

De plus, montrons que $Z(G) \\cap H \\subseteq Z(H)$ : soit $x \\in Z(G) \\cap H$. On a $x \\in H$ et $x \\in Z(G)$, donc $x$ commute avec tout élément de $G$, et en particulier avec tout élément de $H$ (car $H \\subseteq G$) :

$$\\forall h \\in H,\\quad xh = hx,$$

ce qui signifie exactement $x \\in Z(H)$.

Ainsi $Z(G) \\cap H$ est une partie non vide de $Z(H)$ stable par $(x, y) \\mapsto x y^{-1}$ ; d’après le théorème $(1.24)$, $Z(G) \\cap H \\leqslant Z(H)$.

*b)* Comme $Z(G) \\leqslant G$ et $f \\in \\operatorname{Hom}(G, G')$, la proposition $(1.55)$ $4^\\circ$ entraîne déjà que $f(Z(G)) \\leqslant G'$. Pour en déduire $f(Z(G)) \\leqslant Z(G')$, il suffit de montrer l’inclusion $f(Z(G)) \\subseteq Z(G')$ (car un sous-groupe de $G'$ inclus dans le sous-groupe $Z(G')$ vérifie le critère $(1.24)$ dans $Z(G')$).

Soit $y \\in f(Z(G))$ ; il existe $x \\in Z(G)$ tel que $y = f(x)$. Soit $g' \\in G'$ un élément quelconque. Comme $f$ est un épimorphisme de groupes, $f$ est surjectif d’après la proposition $(1.80)$ $2^\\circ$, donc il existe $g \\in G$ tel que $g' = f(g)$. Puisque $x \\in Z(G)$, on a $xg = gx$, et comme $f$ est un morphisme :

$$y g' = f(x) f(g) = f(xg) = f(gx) = f(g) f(x) = g' y.$$

Ceci valant pour tout $g' \\in G'$, on a bien $y \\in Z(G')$. Donc $f(Z(G)) \\subseteq Z(G')$, et par suite $f(Z(G)) \\leqslant Z(G')$.`
  },
  'c1-e17': {
    id: 'c1-e17',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 17,
    title: 'Centralisateur d’une partie et d’un élément',
    page: 64,
    upToOrderIndex: 399,
    statementTex: `Soit $S$ une partie non vide d’un groupe $G$ ; on pose :

$$C_G(S) = \\{g \\in G \\;;\\; gx = xg,\\; \\forall x \\in S\\}.$$

*a)* Vérifier que $C_G(S)$ est un sous-groupe de $G$.

$C_G(S)$ est appelé le *centralisateur de $S$ dans $G$*.

Si $S = \\{x\\}$, avec $x \\in G$, $C_G(S)$ se note $C_G(x)$ ;

$$C_G(x) = \\{g \\in G \\;;\\; gx = xg\\}$$

est appelé *centralisateur de $x$ dans $G$*.

*b)* $Z(G)$ étant le centre du groupe $G$, démontrer en relation :

$$\\bigcap_{x \\in G} C_G(x) = Z(G).$$

*c)* Pour $x \\in G$, posons $H = C_G(x)$ ; vérifier que $x \\in Z(H)$.`,
    hintTex: `Pour *a)*, déduire de $hx = xh$ que $x h^{-1} = h^{-1} x$ en multipliant à gauche et à droite par $h^{-1}$, puis appliquer $(1.24)$. Pour *b)* et *c)*, traduire directement les définitions.`,
    correctionTex: `*a)* $C_G(S)$ est une partie de $G$. Pour tout $x \\in S$, on a $ex = x = xe$, donc $e \\in C_G(S)$ et $C_G(S) \\neq \\varnothing$.

Soient $g, h \\in C_G(S)$. Soit $x \\in S$ quelconque ; par définition de $C_G(S)$, on a $gx = xg$ et $hx = xh$. En multipliant l’égalité $hx = xh$ à gauche et à droite par $h^{-1}$, on obtient :

$$h^{-1}(hx)h^{-1} = h^{-1}(xh)h^{-1} \\implies x h^{-1} = h^{-1} x.$$

Dès lors, par associativité dans $G$ :

$$(g h^{-1})x = g(h^{-1} x) = g(x h^{-1}) = (gx) h^{-1} = (xg) h^{-1} = x(g h^{-1}).$$

Ceci étant vrai pour tout $x \\in S$, on a $g h^{-1} \\in C_G(S)$. D’après le théorème $(1.24)$, $C_G(S) \\leqslant G$.

*b)* *(Note d’édition : l’énoncé imprimé de 1984 porte « démontrer **en** relation », coquille pour « démontrer **la** relation ».)*

Pour tout élément $g \\in G$, par définition de l’intersection et du centre $Z(G)$ (exemple $(1.35)$) :

$$\\begin{aligned} g \\in \\bigcap_{x \\in G} C_G(x) &\\iff \\forall x \\in G,\\; g \\in C_G(x) \\\\ &\\iff \\forall x \\in G,\\; gx = xg \\\\ &\\iff g \\in Z(G). \\end{aligned}$$

On a donc bien $\\bigcap_{x \\in G} C_G(x) = Z(G)$.

*c)* Soit $x \\in G$ et $H = C_G(x)$ (qui est un sous-groupe de $G$ d’après *a)* appliqué à $S = \\{x\\}$).

D’une part, $xx = xx$, donc $x \\in C_G(x) = H$. D’autre part, pour tout $h \\in H = C_G(x)$, on a $hx = xh$, c’est-à-dire $xh = hx$. L’élément $x$ appartient donc à $H$ et commute avec tout élément de $H$, ce qui signifie exactement que $x \\in Z(H)$.`
  },
  'c1-e18': {
    id: 'c1-e18',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 18,
    title: 'Sous-groupe engendré par une réunion',
    page: 64,
    upToOrderIndex: 399,
    statementTex: `Soient $A$, $B$, $C$ trois parties non vides d’un groupe $G$.

Soit $H = \\langle A, B \\rangle$ le sous-groupe de $G$ engendré par $A \\cup B$.

Si $K = \\langle A, B, C \\rangle$ est le sous-groupe de $G$ engendré par $A \\cup B \\cup C$, démontrer que $K = \\langle H, C \\rangle$.`,
    hintTex: `Utiliser la remarque $(1.37)$ : pour toute partie non vide $S$ et tout sous-groupe $M$ de $G$, $S \\subseteq M \\implies \\langle S \\rangle \\subseteq M$. Procéder par double inclusion.`,
    correctionTex: `D’après la remarque $(1.37)$, pour toute partie non vide $S$ de $G$, $\\langle S \\rangle$ est le plus petit sous-groupe de $G$ contenant $S$ ; autrement dit, pour tout sous-groupe $M$ de $G$, on a l’implication $S \\subseteq M \\implies \\langle S \\rangle \\subseteq M$.

— *Inclusion* $\\langle H, C \\rangle \\subseteq K$ : par définition, $K = \\langle A \\cup B \\cup C \\rangle$ est un sous-groupe de $G$ contenant $A \\cup B \\cup C$, donc en particulier $A \\cup B \\subseteq K$ et $C \\subseteq K$. Comme $K$ est un sous-groupe contenant $A \\cup B$, on a $H = \\langle A \\cup B \\rangle \\subseteq K$. Ainsi $H \\cup C \\subseteq K$ ; puisque $K$ est un sous-groupe contenant $H \\cup C$, la remarque $(1.37)$ donne :

$$\\langle H, C \\rangle = \\langle H \\cup C \\rangle \\subseteq K.$$

— *Inclusion* $K \\subseteq \\langle H, C \\rangle$ : par définition, $\\langle H, C \\rangle = \\langle H \\cup C \\rangle$ est un sous-groupe de $G$ contenant $H \\cup C$, donc $H \\subseteq \\langle H, C \\rangle$ et $C \\subseteq \\langle H, C \\rangle$. Or $A \\cup B \\subseteq H$, d’où $A \\cup B \\subseteq \\langle H, C \\rangle$, et par suite $A \\cup B \\cup C \\subseteq \\langle H, C \\rangle$. Comme $\\langle H, C \\rangle$ est un sous-groupe de $G$ contenant $A \\cup B \\cup C$, la remarque $(1.37)$ donne :

$$K = \\langle A \\cup B \\cup C \\rangle \\subseteq \\langle H, C \\rangle.$$

Par double inclusion, on obtient $K = \\langle H, C \\rangle$.`
  },
  'c1-e19': {
    id: 'c1-e19',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 19,
    title: 'Générateurs matriciels du groupe des quaternions',
    page: 64,
    upToOrderIndex: 399,
    statementTex: `Démontrer que le groupe des quaternions (exemple (1.16)) est engendré par les matrices :

$$A = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} \\quad\\text{et}\\quad B = \\begin{pmatrix} 0 & i \\\\ i & 0 \\end{pmatrix}.$$`,
    hintTex: `Comme $A, B \\in Q_8$, on a $\\langle A, B \\rangle \\subseteq Q_8$. Calculer les puissances $A^2, A^3, A^4$ ainsi que les produits $AB, BA, A^2 B$ pour retrouver les $8$ matrices de l’exemple $(1.16)$.`,
    correctionTex: `Notons $Q_8$ le groupe des quaternions défini dans l’exemple $(1.16)$ (p. 27) et $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ la matrice unité.

Les matrices $A = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$ et $B = \\begin{pmatrix} 0 & i \\\\ i & 0 \\end{pmatrix}$ appartiennent toutes deux à $Q_8$. Puisque $Q_8$ est un groupe pour la multiplication des matrices, la remarque $(1.37)$ donne l’inclusion $\\langle A, B \\rangle \\subseteq Q_8$.

Réciproquement, calculons les produits d’éléments de $\\{A, B\\}$ (qui appartiennent tous à $\\langle A, B \\rangle$ d’après la proposition $(1.38)$) :

$$A^2 = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} = -I,$$

$$A^3 = A^2 A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = -A, \\qquad A^4 = A^2 A^2 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I,$$

$$A^2 B = (-I)B = \\begin{pmatrix} 0 & -i \\\\ -i & 0 \\end{pmatrix} = -B,$$

$$AB = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & i \\\\ i & 0 \\end{pmatrix} = \\begin{pmatrix} i & 0 \\\\ 0 & -i \\end{pmatrix}, \\qquad BA = \\begin{pmatrix} 0 & i \\\\ i & 0 \\end{pmatrix}\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} = \\begin{pmatrix} -i & 0 \\\\ 0 & i \\end{pmatrix}.$$

Les $8$ matrices $I, -I, A, -A, B, -B, BA, AB$ appartiennent donc toutes à $\\langle A, B \\rangle$. Or ce sont exactement les $8$ matrices constituant $Q_8$ dans l’exemple $(1.16)$, d’où $Q_8 \\subseteq \\langle A, B \\rangle$.

Par double inclusion, $\\langle A, B \\rangle = Q_8$ : le groupe des quaternions est engendré par $A$ et $B$.`
  },
  'c1-e20': {
    id: 'c1-e20',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 20,
    title: 'Groupe multiplicatif de matrices non inversibles',
    page: 64,
    upToOrderIndex: 399,
    statementTex: `Dans l’ensemble $M_2(\\R)$ des matrices carrées d’ordre 2 sur $\\R$, on considère le sous-ensemble $\\Gamma$ tel que :

$$\\Gamma = \\left\\{ \\begin{pmatrix} x & x \\\\ 0 & 0 \\end{pmatrix} \\;;\\; x \\in \\R^* \\right\\}.$$

Démontrer que $\\Gamma$ est un groupe par rapport à la multiplication des matrices, mais que ce groupe n’est pas un sous-groupe de $\\GL(2, \\R)$.

Vérifier que le groupe $\\Gamma$ est isomorphe au groupe $(\\R^*, \\times)$.`,
    hintTex: `Poser $M(x) = \\begin{pmatrix} x & x \\\\ 0 & 0 \\end{pmatrix}$ pour $x \\in \\R^*$ et calculer $M(x)M(y)$. Vérifier les axiomes $(\\mathrm{G}_1)$–$(\\mathrm{G}_3)$ avec $M(1)$ pour élément neutre, calculer $\\det(M(x))$, puis montrer que $x \\mapsto M(x)$ est un isomorphisme.`,
    correctionTex: `Pour tout $x \\in \\R^*$, posons $M(x) = \\begin{pmatrix} x & x \\\\ 0 & 0 \\end{pmatrix}$.

**1. Structure de groupe sur** $\\Gamma$.

— *Loi interne et non-vacuité :* on a $M(1) \\in \\Gamma$, donc $\\Gamma \\neq \\varnothing$. De plus, quels que soient $x, y \\in \\R^*$ :

$$M(x)M(y) = \\begin{pmatrix} x & x \\\\ 0 & 0 \\end{pmatrix}\\begin{pmatrix} y & y \\\\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} xy & xy \\\\ 0 & 0 \\end{pmatrix} = M(xy).$$

Comme $x, y \\in \\R^*$ implique $xy \\in \\R^*$, on a $M(x)M(y) \\in \\Gamma$ : la multiplication des matrices induit bien une loi de composition interne sur $\\Gamma$.

— *Axiome* $(\\mathrm{G}_1)$ : la multiplication des matrices dans $M_2(\\R)$ étant associative, sa restriction à $\\Gamma$ est associative.

— *Axiome* $(\\mathrm{G}_2)$ : la matrice $M(1) = \\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix} \\in \\Gamma$ vérifie, pour tout $x \\in \\R^*$, $M(x)M(1) = M(x \\cdot 1) = M(x)$ et $M(1)M(x) = M(1 \\cdot x) = M(x)$. C’est l’élément neutre de $\\Gamma$.

— *Axiome* $(\\mathrm{G}_3)$ : pour tout $x \\in \\R^*$, on a $x^{-1} \\in \\R^*$, donc $M(x^{-1}) \\in \\Gamma$, et $M(x)M(x^{-1}) = M(x^{-1})M(x) = M(1)$. Tout élément de $\\Gamma$ est donc symétrisable dans $\\Gamma$.

Ainsi $\\Gamma$ est un groupe pour la multiplication des matrices.

**2. Non-appartenance à** $\\GL(2, \\R)$.

Pour tout $x \\in \\R^*$, $\\det(M(x)) = x \\cdot 0 - x \\cdot 0 = 0$, donc aucune matrice de $\\Gamma$ n’est inversible dans $M_2(\\R)$. Autrement dit, $\\Gamma$ n’est même pas inclus dans $\\GL(2, \\R)$ (de plus, son neutre $M(1)$ diffère de $I_2$). Donc $\\Gamma$ n’est pas un sous-groupe de $\\GL(2, \\R)$.

**3. Isomorphisme** $\\Gamma \\simeq (\\R^*, \\times)$.

Considérons l’application $\\varphi : (\\R^*, \\times) \\to (\\Gamma, \\times)$ définie par $\\varphi(x) = M(x)$.

— $\\varphi$ est surjective par définition de $\\Gamma$.

— $\\varphi$ est injective : si $M(x) = M(y)$, l’égalité des coefficients en position $(1, 1)$ donne $x = y$.

— $\\varphi$ est un morphisme de groupes : pour tous $x, y \\in \\R^*$, $\\varphi(xy) = M(xy) = M(x)M(y) = \\varphi(x)\\varphi(y)$.

D’après la proposition $(1.66)$ $1^\\circ$, $\\varphi$ est un isomorphisme de $(\\R^*, \\times)$ sur $\\Gamma$, d’où $\\Gamma \\simeq (\\R^*, \\times)$ par la remarque $(1.71)$ *b)*.`
  },
  'c1-e21': {
    id: 'c1-e21',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 21,
    title: 'Anneau ℤ/(n) et corps ℤ/(p)',
    page: 65,
    upToOrderIndex: 399,
    statementTex: `Soit $n > 1$ dans $\\N$ et $\\left(\\Zn{n}, +\\right)$ le groupe des classes de congruences modulo $n$. On considère la correspondance $\\mu$ définie par :

$$\\begin{aligned} \\mu : \\Zn{n} \\times \\Zn{n} &\\to \\Zn{n} \\\\ (\\overline{x}, \\overline{y}) &\\mapsto \\overline{xy}. \\end{aligned}$$

*a)* Prouver que la correspondance $\\mu$ est une application [c’est-à-dire que : $(\\overline{x'} = \\overline{x}$ et $\\overline{y'} = \\overline{y}) \\implies \\overline{x'y'} = \\overline{xy}$].

En déduire que l’on peut définir dans $\\Zn{n}$ une « multiplication » telle que $\\overline{x}\\,\\overline{y} = \\overline{xy}$.

Montrer alors que $\\Zn{n}$ est un anneau unitaire et commutatif (voir : définition (0.1) de l’Introduction).

*b)* Soit, dans $\\N$, un nombre premier $p$. On désigne par $G_p$ l’ensemble des éléments non nuls de $\\Zn{p}$.

Prouver, en utilisant le résultat de l’exercice 4, que $G_p$ est un groupe par rapport à la multiplication définie dans $\\Zn{p}$.

En conclure que $\\Zn{p}$ est un corps (voir définition (0.2) de l’Introduction).

*c)* Vérifier que si $n$ n’est pas premier $\\Zn{n}$ n’est pas un corps.`,
    hintTex: `Pour *a)*, décomposer $x'y' - xy = x'(y' - y) + (x' - x)y$. Pour *b)*, utiliser le lemme d’Euclide ($p \\mid ab \\implies p \\mid a$ ou $p \\mid b$) afin de montrer que la multiplication est interne dans $G_p$ et que tout élément y est simplifiable, puis appliquer l’exercice 4.`,
    correctionTex: `*a)* **1. Bonne définition de** $\\mu$.

Soient $x, x', y, y' \\in \\Z$ tels que $\\overline{x'} = \\overline{x}$ et $\\overline{y'} = \\overline{y}$ dans $\\Zn{n}$. D’après l’exemple $(1.13)$, il existe $k, l \\in \\Z$ tels que $x' - x = kn$ et $y' - y = ln$. On écrit alors :

$$x'y' - xy = x'(y' - y) + (x' - x)y = x'(ln) + (kn)y = (x'l + ky)n.$$

Comme $x'l + ky \\in \\Z$, $x'y' - xy$ est multiple de $n$, donc $\\overline{x'y'} = \\overline{xy}$. Le résultat ne dépend donc pas du choix des représentants : $\\mu$ est une application de $\\Zn{n} \\times \\Zn{n}$ dans $\\Zn{n}$, c’est-à-dire une loi de composition interne (la « multiplication » $\\overline{x}\\,\\overline{y} = \\overline{xy}$).

**2. Structure d’anneau unitaire et commutatif.**

On sait par l’exemple $(1.13)$ que $\\left(\\Zn{n}, +\\right)$ est un groupe abélien d’élément neutre $\\overline{0}$. De plus, quels que soient $\\overline{x}, \\overline{y}, \\overline{z} \\in \\Zn{n}$ :

— *Associativité :* $(\\overline{x}\\,\\overline{y})\\,\\overline{z} = \\overline{(xy)z} = \\overline{x(yz)} = \\overline{x}\\,(\\overline{y}\\,\\overline{z})$ ;

— *Commutativité :* $\\overline{x}\\,\\overline{y} = \\overline{xy} = \\overline{yx} = \\overline{y}\\,\\overline{x}$ ;

— *Distributivité par rapport à* $+$ : $\\overline{x}(\\overline{y} + \\overline{z}) = \\overline{x(y+z)} = \\overline{xy + xz} = \\overline{x}\\,\\overline{y} + \\overline{x}\\,\\overline{z}$ (et $(\\overline{y} + \\overline{z})\\overline{x} = \\overline{y}\\,\\overline{x} + \\overline{z}\\,\\overline{x}$ par commutativité) ;

— *Élément unité :* $\\overline{1} \\in \\Zn{n}$ vérifie $\\overline{x}\\,\\overline{1} = \\overline{1}\\,\\overline{x} = \\overline{x}$, et $\\overline{1} \\neq \\overline{0}$ car $n > 1$.

Ainsi $\\left(\\Zn{n}, +, \\times\\right)$ est un anneau commutatif et unitaire.

*b)* Posons $G_p = \\Zn{p} \\setminus \\{\\overline{0}\\} = \\{\\overline{1}, \\overline{2}, \\dots, \\overline{p - 1}\\}$. Comme $p$ est premier ($p \\geqslant 2$), $G_p$ est un ensemble **fini** et **non vide** ($\\overline{1} \\in G_p$).

— *Stabilité de* $G_p$ *par multiplication* : soient $\\overline{x}, \\overline{y} \\in G_p$. Alors $\\overline{x} \\neq \\overline{0}$ et $\\overline{y} \\neq \\overline{0}$, donc $p$ ne divise pas $x$ et $p$ ne divise pas $y$. Puisque $p$ est premier, le lemme d’Euclide assure que $p$ ne divise pas $xy$, d’où $\\overline{xy} \\neq \\overline{0}$, c’est-à-dire $\\overline{x}\\,\\overline{y} \\in G_p$.

— *Associativité :* elle est héritée de la multiplication dans $\\Zn{p}$.

— *Simplifiabilité :* soient $\\overline{a}, \\overline{x}, \\overline{y} \\in G_p$ tels que $\\overline{a}\\,\\overline{x} = \\overline{a}\\,\\overline{y}$. Alors $\\overline{a(x - y)} = \\overline{0}$, donc $p$ divise $a(x - y)$. Comme $p$ est premier et que $p$ ne divise pas $a$ (puisque $\\overline{a} \\in G_p$), le lemme d’Euclide implique que $p$ divise $x - y$, soit $\\overline{x} = \\overline{y}$. Par commutativité, tout élément de $G_p$ est donc simplifiable à gauche et à droite.

D’après l’exercice 4, $(G_p, \\times)$ est un groupe : tout élément non nul de l’anneau commutatif unitaire $\\Zn{p}$ est inversible pour la multiplication. On en conclut que $\\Zn{p}$ est un corps (commutatif).

*c)* Si $n > 1$ n’est pas premier, il admet une factorisation $n = ab$ avec $a, b \\in \\N$ tels que $1 < a < n$ et $1 < b < n$. Dans $\\Zn{n}$, on a alors $\\overline{a} \\neq \\overline{0}$ et $\\overline{b} \\neq \\overline{0}$, mais :

$$\\overline{a}\\,\\overline{b} = \\overline{ab} = \\overline{n} = \\overline{0}.$$

Si $\\Zn{n}$ était un corps, $\\overline{a}$ (non nul) posséderait un inverse $\\overline{u}$ dans $\\Zn{n}$, et l’on obtiendrait :

$$\\overline{b} = \\overline{1}\\,\\overline{b} = (\\overline{u}\\,\\overline{a})\\overline{b} = \\overline{u}(\\overline{a}\\,\\overline{b}) = \\overline{u}\\,\\overline{0} = \\overline{0},$$

ce qui contredit $\\overline{b} \\neq \\overline{0}$. Ainsi $\\Zn{n}$ n’est pas un corps.`
  },
  'c1-e22': {
    id: 'c1-e22',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 22,
    title: 'Sous-groupe de GL(2, ℝ) isomorphe à GL(2, ℤ/(2)) et S₃',
    page: 65,
    upToOrderIndex: 399,
    statementTex: `Vérifier que

$$\\begin{aligned} \\Gamma = \\Bigl\\{ &\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix},\\; \\begin{pmatrix} -1 & -1 \\\\ 1 & 0 \\end{pmatrix},\\; \\begin{pmatrix} 0 & 1 \\\\ -1 & -1 \\end{pmatrix}, \\\\ &\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix},\\; \\begin{pmatrix} 1 & 0 \\\\ -1 & -1 \\end{pmatrix},\\; \\begin{pmatrix} -1 & -1 \\\\ 0 & 1 \\end{pmatrix} \\Bigr\\} \\end{aligned}$$

est un sous-groupe de $\\GL(2, \\R)$ isomorphe au groupe $\\GL\\!\\left(2, \\Zn{2}\\right)$.

Écrire la table de multiplication du groupe $\\Gamma$ ; en déduire que $\\Gamma$ est isomorphe au groupe symétrique $S_3$.`,
    hintTex: `Numéroter $M_1, \\dots, M_6$ les six matrices dans l’ordre de l’énoncé. Calculer leurs déterminants puis dresser leur table $6 \\times 6$ pour montrer que $\\Gamma \\leqslant \\GL(2, \\R)$ et comparer à la table $(10)$ de $S_3$ ; réduire enfin les coefficients modulo $2$ vers $\\GL\\!\\left(2, \\Zn{2}\\right)$.`,
    correctionTex: `Notons les six matrices dans l’ordre de l’énoncé :

$$M_1 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix},\\quad M_2 = \\begin{pmatrix} -1 & -1 \\\\ 1 & 0 \\end{pmatrix},\\quad M_3 = \\begin{pmatrix} 0 & 1 \\\\ -1 & -1 \\end{pmatrix},$$

$$M_4 = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix},\\quad M_5 = \\begin{pmatrix} 1 & 0 \\\\ -1 & -1 \\end{pmatrix},\\quad M_6 = \\begin{pmatrix} -1 & -1 \\\\ 0 & 1 \\end{pmatrix}.$$

**1. Preuve que** $\\Gamma \\leqslant \\GL(2, \\R)$.

Calculons les déterminants : $\\det M_1 = \\det M_2 = \\det M_3 = 1 \\neq 0$ et $\\det M_4 = \\det M_5 = \\det M_6 = -1 \\neq 0$, donc $\\Gamma \\subseteq \\GL(2, \\R)$ et $I_2 = M_1 \\in \\Gamma \\neq \\varnothing$.

Calculons les produits matriciels principaux :

— $M_2^2 = \\begin{pmatrix} -1 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} -1 & -1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ -1 & -1 \\end{pmatrix} = M_3$ et $M_2 M_3 = M_3 M_2 = M_1$, $M_3^2 = M_2$ ;

— $M_4^2 = M_5^2 = M_6^2 = M_1$ ;

— $M_2 M_4 = \\begin{pmatrix} -1 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} -1 & -1 \\\\ 0 & 1 \\end{pmatrix} = M_6$ et $M_4 M_2 = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} -1 & -1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ -1 & -1 \\end{pmatrix} = M_5$.

En utilisant l’associativité et $M_3 = M_2^2$, $M_5 = M_4 M_2$, $M_6 = M_2 M_4$ (et $M_2 M_5 = M_4$, $M_2 M_6 = M_5$), on obtient la table complète de multiplication de $\\Gamma$ (produit ligne $\\times$ colonne) :

$$\\begin{array}{c|cccccc} \\times & M_1 & M_2 & M_3 & M_4 & M_5 & M_6 \\\\ \\hline M_1 & M_1 & M_2 & M_3 & M_4 & M_5 & M_6 \\\\ M_2 & M_2 & M_3 & M_1 & M_6 & M_4 & M_5 \\\\ M_3 & M_3 & M_1 & M_2 & M_5 & M_6 & M_4 \\\\ M_4 & M_4 & M_5 & M_6 & M_1 & M_2 & M_3 \\\\ M_5 & M_5 & M_6 & M_4 & M_3 & M_1 & M_2 \\\\ M_6 & M_6 & M_4 & M_5 & M_2 & M_3 & M_1 \\end{array}$$

La table montre que $\\Gamma$ est stable par produit ($M_i M_j \\in \\Gamma$) et par passage à l’inverse ($M_1^{-1} = M_1$, $M_2^{-1} = M_3$, $M_3^{-1} = M_2$, $M_4^{-1} = M_4$, $M_5^{-1} = M_5$, $M_6^{-1} = M_6$). D’après $(1.20)$, $\\Gamma \\leqslant \\GL(2, \\R)$.

**2. Isomorphisme** $\\Gamma \\simeq \\GL\\!\\left(2, \\Zn{2}\\right)$.

D’après l’exercice 21 *b)*, $\\Zn{2}$ est un corps. À toute matrice $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\in \\Gamma$ (à coefficients entiers), associons la matrice réduite modulo $2$ :

$$\\Phi(M) = \\overline{M} = \\begin{pmatrix} \\overline{a} & \\overline{b} \\\\ \\overline{c} & \\overline{d} \\end{pmatrix}.$$

Comme la projection canonique $k \\mapsto \\overline{k}$ de $\\Z$ sur $\\Zn{2}$ conserve l’addition et la multiplication, on a $\\det(\\overline{M}) = \\overline{\\det M} = \\overline{\\pm 1} = \\overline{1} \\neq \\overline{0}$, donc $\\overline{M}$ admet pour inverse $\\begin{pmatrix} \\overline{d} & -\\overline{b} \\\\ -\\overline{c} & \\overline{a} \\end{pmatrix}$ et appartient à $\\GL\\!\\left(2, \\Zn{2}\\right)$. De plus, pour tous $M, N \\in \\Gamma$, $\\Phi(MN) = \\overline{MN} = \\overline{M}\\,\\overline{N} = \\Phi(M)\\Phi(N)$, donc $\\Phi \\in \\operatorname{Hom}\\!\\left(\\Gamma, \\GL\\!\\left(2, \\Zn{2}\\right)\\right)$.

Calculons les six images :

$$\\overline{M_1} = \\begin{pmatrix} \\overline{1} & \\overline{0} \\\\ \\overline{0} & \\overline{1} \\end{pmatrix},\\quad \\overline{M_2} = \\begin{pmatrix} \\overline{1} & \\overline{1} \\\\ \\overline{1} & \\overline{0} \\end{pmatrix},\\quad \\overline{M_3} = \\begin{pmatrix} \\overline{0} & \\overline{1} \\\\ \\overline{1} & \\overline{1} \\end{pmatrix},$$

$$\\overline{M_4} = \\begin{pmatrix} \\overline{0} & \\overline{1} \\\\ \\overline{1} & \\overline{0} \\end{pmatrix},\\quad \\overline{M_5} = \\begin{pmatrix} \\overline{1} & \\overline{0} \\\\ \\overline{1} & \\overline{1} \\end{pmatrix},\\quad \\overline{M_6} = \\begin{pmatrix} \\overline{1} & \\overline{1} \\\\ \\overline{0} & \\overline{1} \\end{pmatrix}.$$

Ces $6$ matrices sont deux à deux distinctes, donc $\\Phi$ est injective. D’autre part, une matrice de $M_2\\!\\left(\\Zn{2}\\right)$ est inversible si et seulement si ses deux colonnes sont non nulles et distinctes (sinon leur déterminant est nul sur le corps $\\Zn{2}$) : il y a $3$ choix pour la première colonne non nulle dans $\\left(\\Zn{2}\\right)^2$, puis $2$ choix pour la seconde colonne non nulle distincte de la première, soit $3 \\times 2 = 6$ matrices dans $\\GL\\!\\left(2, \\Zn{2}\\right)$. Ainsi $\\Phi$ est aussi surjective, donc bijective. D’après la proposition $(1.66)$ $1^\\circ$, $\\Gamma \\simeq \\GL\\!\\left(2, \\Zn{2}\\right)$.

**3. Isomorphisme** $\\Gamma \\simeq S_3$.

Considérons la bijection $f : \\Gamma \\to S_3$ qui associe respectivement à $(M_1, M_2, M_3, M_4, M_5, M_6)$ les $6$ permutations $(e, \\sigma_1, \\sigma_2, \\tau_1, \\tau_2, \\tau_3)$ des notations $(1.15)$ (p. 26). La comparaison terme à terme de la table de multiplication de $\\Gamma$ ci-dessus avec la table $(10)$ du groupe $S_3$ (p. 28) montre que $f(M_i M_j) = f(M_i) \\circ f(M_j)$ pour tous $i, j \\in \\{1, \\dots, 6\\}$. Ainsi $f$ est un isomorphisme de groupes et $\\Gamma \\simeq S_3$.`
  },
  'c1-e23': {
    id: 'c1-e23',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 23,
    title: 'Trois réalisations du groupe cyclique d’ordre 4',
    page: 66,
    upToOrderIndex: 399,
    statementTex: `*a)* Démontrer les résultats suivants :

$$\\Gamma_1 = \\left\\{ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix},\\; \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix},\\; \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix},\\; \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\right\\}$$

est un sous-groupe de $\\GL(2, \\R)$.

$$\\Gamma_2 = \\{1, i, -1, -i\\}$$

où $i^2 = -1$ est un sous-groupe de $(\\C^*, \\times)$.

$$\\Gamma_3 = \\{\\overline{1}, \\overline{2}, \\overline{3}, \\overline{4}\\},$$

sous-ensemble de $\\Zn{5}$, est un groupe par rapport à la multiplication définie dans $\\Zn{5}$ (exercice 21).

*b)* Prouver que $\\Gamma_1$, $\\Gamma_2$, $\\Gamma_3$ sont trois groupes isomorphes.

Sont-ils cycliques ?`,
    hintTex: `Mettre en évidence un générateur dans chacun des trois ensembles : $R = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$ pour $\\Gamma_1$, $i$ pour $\\Gamma_2$ et $\\overline{2}$ pour $\\Gamma_3$, puis comparer leurs puissances $0, 1, 2, 3$.`,
    correctionTex: `*a)* **1. Étude de** $\\Gamma_1$.

Posons $R = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$. On a $\\det R = 1 \\neq 0$, donc $R \\in \\GL(2, \\R)$. Calculons ses puissances :

$$R^0 = I_2 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix},\\quad R^1 = R,\\quad R^2 = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} = -I_2,\\quad R^3 = R^2 R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix},\\quad R^4 = R^2 R^2 = I_2.$$

Ainsi $\\Gamma_1 = \\{I_2, R, R^2, R^3\\} \\subseteq \\GL(2, \\R)$ est non vide, stable par produit et par inverse (puisque $R^j R^k = R^r \\in \\Gamma_1$ où $r \\in \\{0, 1, 2, 3\\}$ est le reste de $j + k$ modulo $4$, et $(R^k)^{-1} = R^{4 - k}$ pour $1 \\leqslant k \\leqslant 3$). D’après $(1.20)$, $\\Gamma_1 \\leqslant \\GL(2, \\R)$, et plus précisément $\\Gamma_1 = \\langle R \\rangle$.

**2. Étude de** $\\Gamma_2$.

Dans $(\\C^*, \\times)$, on a $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$ et $i^4 = 1$, donc $\\Gamma_2 = \\{1, i, i^2, i^3\\} = U_4$. Comme précédemment (ou par les exemples $(1.30)$ pour $n = 4$), $\\Gamma_2 = \\langle i \\rangle \\leqslant (\\C^*, \\times)$.

**3. Étude de** $\\Gamma_3$.

Comme $5$ est premier, $\\Gamma_3 = \\Zn{5} \\setminus \\{\\overline{0}\\} = G_5$ est un groupe pour la multiplication de $\\Zn{5}$ d’après l’exercice 21 *b)*. De plus, dans $\\Zn{5}$ :

$$\\overline{2}^0 = \\overline{1},\\qquad \\overline{2}^1 = \\overline{2},\\qquad \\overline{2}^2 = \\overline{4},\\qquad \\overline{2}^3 = \\overline{8} = \\overline{3},\\qquad \\overline{2}^4 = \\overline{16} = \\overline{1},$$

donc $\\Gamma_3 = \\{\\overline{1}, \\overline{2}, \\overline{2}^2, \\overline{2}^3\\} = \\langle \\overline{2} \\rangle$.

*b)* **Isomorphismes et cyclicité.**

Chacun des trois groupes $\\Gamma_1 = \\langle R \\rangle$, $\\Gamma_2 = \\langle i \\rangle$ et $\\Gamma_3 = \\langle \\overline{2} \\rangle$ est engendré par un seul élément et est fini d’ordre $4$ : d’après les définitions $(1.40)$ $2^\\circ$ et $(1.43)$, ce sont trois **groupes cycliques** (monogènes finis) d’ordre $4$.

Définissons les applications $f : \\Gamma_1 \\to \\Gamma_2$ et $g : \\Gamma_2 \\to \\Gamma_3$ par :

$$f(R^k) = i^k \\qquad \\text{et} \\qquad g(i^k) = \\overline{2}^k \\qquad \\text{pour tout } k \\in \\{0, 1, 2, 3\\}.$$

Comme les $4$ puissances d’indice $0, 1, 2, 3$ sont deux à deux distinctes dans chaque groupe, $f$ et $g$ sont des bijections. De plus, quels que soient $j, k \\in \\{0, 1, 2, 3\\}$, en effectuant la division euclidienne $j + k = 4q + r$ avec $r \\in \\{0, 1, 2, 3\\}$, les égalités $R^4 = I_2$, $i^4 = 1$ et $\\overline{2}^4 = \\overline{1}$ donnent $R^j R^k = R^r$, $i^j i^k = i^r$ et $\\overline{2}^j \\overline{2}^k = \\overline{2}^r$, d’où :

$$f(R^j R^k) = f(R^r) = i^r = i^j i^k = f(R^j)f(R^k) \\qquad \\text{et} \\qquad g(i^j i^k) = g(i^r) = \\overline{2}^r = \\overline{2}^j \\overline{2}^k = g(i^j)g(i^k).$$

D’après $(1.66)$ $1^\\circ$, $f$ et $g$ sont des isomorphismes ; par la remarque $(1.71)$, les trois groupes $\\Gamma_1$, $\\Gamma_2$ et $\\Gamma_3$ sont deux à deux isomorphes.`
  },
  'c1-e24': {
    id: 'c1-e24',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 24,
    title: 'Sous-groupe diagonal de GL(2, ℝ) et inversibles de ℤ/(8)',
    page: 66,
    upToOrderIndex: 399,
    statementTex: `*a)* Montrer que :

$$K_1 = \\left\\{ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix},\\; \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix},\\; \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix},\\; \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\right\\}$$

est un sous-groupe de $\\GL(2, \\R)$ et que $K_2 = \\{\\overline{1}, \\overline{3}, \\overline{5}, \\overline{7}\\}$, sous-ensemble de $\\Zn{8}$ est un groupe par rapport à la multiplication définie dans $\\Zn{8}$ (exercice 21).

*b)* Vérifier que les groupes $K_1$ et $K_2$ sont isomorphes.

Ces groupes sont-ils isomorphes au groupe de Klein (exemple (1.83)) ?`,
    hintTex: `Pour $K_1$, écrire les matrices sous la forme $\\begin{pmatrix} \\varepsilon_1 & 0 \\\\ 0 & \\varepsilon_2 \\end{pmatrix}$ avec $\\varepsilon_1, \\varepsilon_2 \\in \\{-1, 1\\}$. Pour $K_2$, calculer les carrés et produits des classes impaires modulo $8$, puis comparer à la table $(11)$ ou appliquer la proposition $(1.85)$ (l’exemple du groupe de Klein porte en réalité le numéro $(1.86)$).`,
    correctionTex: `*a)* **1. Preuve que** $K_1 \\leqslant \\GL(2, \\R)$.

Les éléments de $K_1$ sont exactement les matrices $D(\\varepsilon_1, \\varepsilon_2) = \\begin{pmatrix} \\varepsilon_1 & 0 \\\\ 0 & \\varepsilon_2 \\end{pmatrix}$ où $(\\varepsilon_1, \\varepsilon_2) \\in \\{-1, 1\\}^2$. Pour toutes telles matrices, $\\det D(\\varepsilon_1, \\varepsilon_2) = \\varepsilon_1 \\varepsilon_2 = \\pm 1 \\neq 0$, donc $K_1 \\subseteq \\GL(2, \\R)$, et $I_2 = D(1, 1) \\in K_1 \\neq \\varnothing$.

De plus, quels que soient $(\\varepsilon_1, \\varepsilon_2), (\\eta_1, \\eta_2) \\in \\{-1, 1\\}^2$ :

$$D(\\varepsilon_1, \\varepsilon_2)\\, D(\\eta_1, \\eta_2) = D(\\varepsilon_1 \\eta_1, \\varepsilon_2 \\eta_2) \\in K_1,$$

et $D(\\varepsilon_1, \\varepsilon_2)^2 = D(\\varepsilon_1^2, \\varepsilon_2^2) = D(1, 1) = I_2$, donc $D(\\varepsilon_1, \\varepsilon_2)^{-1} = D(\\varepsilon_1, \\varepsilon_2) \\in K_1$. D’après $(1.20)$, $K_1 \\leqslant \\GL(2, \\R)$.

**2. Preuve que** $(K_2, \\times)$ **est un groupe.**

$K_2 = \\{\\overline{1}, \\overline{3}, \\overline{5}, \\overline{7}\\}$ est non vide ($\\overline{1} \\in K_2$) et formé des classes d’entiers impairs modulo $8$. Le produit de deux entiers impairs étant impair, $K_2$ est stable pour la multiplication dans $\\Zn{8}$. Vérifions explicitement tous les produits de $\\overline{3}, \\overline{5}, \\overline{7}$ :

$$\\overline{3}^2 = \\overline{9} = \\overline{1},\\qquad \\overline{5}^2 = \\overline{25} = \\overline{1},\\qquad \\overline{7}^2 = \\overline{49} = \\overline{1},$$

$$\\overline{3}\\cdot\\overline{5} = \\overline{15} = \\overline{7},\\qquad \\overline{3}\\cdot\\overline{7} = \\overline{21} = \\overline{5},\\qquad \\overline{5}\\cdot\\overline{7} = \\overline{35} = \\overline{3}.$$

La multiplication de $\\Zn{8}$ est associative (exercice 21 *a)*), donc sa restriction à $K_2$ l’est aussi ($(\\mathrm{G}_1)$) ; $\\overline{1} \\in K_2$ est élément neutre ($(\\mathrm{G}_2)$) ; enfin chaque élément de $K_2$ est égal à son propre inverse puisque $x^2 = \\overline{1}$ pour tout $x \\in K_2$ ($(\\mathrm{G}_3)$). Donc $(K_2, \\times)$ est un groupe.

*b)* *(Note d’édition :* le renvoi « exemple $(1.83)$ » dans le texte de 1984 est une coquille typographique pour l’**exemple** $(1.86)$, p. 57, qui définit le groupe de Klein.)

Posons $A = D(1, -1)$, $B = D(-1, 1)$ et $C = D(-1, -1)$ dans $K_1$. On a $A^2 = B^2 = C^2 = I_2$, $AB = BA = C$, $AC = CA = B$ et $BC = CB = A$.

De même, dans $K_2$, $\\overline{3}^2 = \\overline{5}^2 = \\overline{7}^2 = \\overline{1}$, $\\overline{3}\\cdot\\overline{5} = \\overline{5}\\cdot\\overline{3} = \\overline{7}$, $\\overline{3}\\cdot\\overline{7} = \\overline{7}\\cdot\\overline{3} = \\overline{5}$ et $\\overline{5}\\cdot\\overline{7} = \\overline{7}\\cdot\\overline{5} = \\overline{3}$.

L’application $f : K_1 \\to K_2$ envoyant respectivement $(I_2, A, B, C)$ sur $(\\overline{1}, \\overline{3}, \\overline{5}, \\overline{7})$ est donc une bijection qui respecte la loi : c’est un isomorphisme, d’où $K_1 \\simeq K_2$.

**Isomorphisme avec le groupe de Klein :** **oui**. En effet, en comparant ces relations à la table $(11)$ du groupe $V = \\{e, a, b, c\\}$ (p. 28) — ou en appliquant la proposition $(1.85)$ avec $H_1 = \\langle A \\rangle \\simeq \\Zn{2}$ et $H_2 = \\langle B \\rangle \\simeq \\Zn{2}$ — on obtient $K_1 \\simeq K_2 \\simeq V \\simeq \\Zn{2} \\times \\Zn{2}$ (exemple $(1.86)$).`
  },
  'c1-e25': {
    id: 'c1-e25',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 25,
    title: 'Représentations matricielles fidèles de degré 2 sur ℝ',
    page: 66,
    upToOrderIndex: 399,
    statementTex: `Définition : étant donné un groupe $G$, on appelle *représentation matricielle* de $G$, de degré $n$ ($n \\in \\N$) sur un corps $K$, tout morphisme $\\rho \\in \\operatorname{Hom}(G, \\GL(n, K))$.

Si $\\rho$ est *injectif*, on dit que la représentation matricielle est *fidèle*.

*a)* Montrer que le groupe symétrique $S_3$ (exercice 22), les groupes $\\Gamma_2$ et $\\Gamma_3$ de l’exercice 23 et le groupe $K_2$ de l’exercice 24 admettent chacun une représentation matricielle fidèle de degré 2 sur $\\R$.

*b)* En associant à tout nombre complexe non nul $a + ib$ la matrice $\\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}$, vérifier que le groupe multiplicatif $\\C^*$ admet aussi une représentation fidèle de degré 2 sur $\\R$.`,
    hintTex: `Pour *a)*, composer les isomorphismes obtenus aux exercices 22, 23 et 24 avec l’injection canonique $(1.61)$ $1^\\circ$ vers $\\GL(2, \\R)$. Pour *b)*, vérifier que le déterminant est non nul, que le produit matriciel correspond au produit dans $\\C^*$, et déterminer le noyau grâce à $(1.58)$ $2^\\circ$.`,
    correctionTex: `*a)* D’une manière générale, si un groupe $G$ est isomorphe à un sous-groupe $H$ de $\\GL(2, \\R)$ via un isomorphisme $\\varphi : G \\to H$, alors en notant $i_H : H \\to \\GL(2, \\R)$ l’injection canonique (exemple $(1.61)$ $1^\\circ$), la composée $\\rho = i_H \\circ \\varphi : G \\to \\GL(2, \\R)$ est un morphisme de groupes (proposition $(1.59)$) et est injective comme composée de deux applications injectives : $\\rho$ est donc une représentation matricielle fidèle de $G$ de degré $2$ sur $\\R$.

En appliquant ce principe aux résultats des exercices précédents :

— $S_3 \\simeq \\Gamma \\leqslant \\GL(2, \\R)$ (exercice 22), donc $S_3$ admet une représentation fidèle de degré $2$ sur $\\R$ ;

— $\\Gamma_2 \\simeq \\Gamma_1 \\leqslant \\GL(2, \\R)$ et $\\Gamma_3 \\simeq \\Gamma_1 \\leqslant \\GL(2, \\R)$ (exercice 23), donc $\\Gamma_2$ et $\\Gamma_3$ admettent chacune une représentation fidèle de degré $2$ sur $\\R$ ;

— $K_2 \\simeq K_1 \\leqslant \\GL(2, \\R)$ (exercice 24), donc $K_2$ admet une représentation fidèle de degré $2$ sur $\\R$.

*b)* Pour tout $z = a + ib \\in \\C^*$ ($a, b \\in \\R$ non simultanément nuls), posons :

$$\\rho(z) = \\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}.$$

— *Bonne définition dans* $\\GL(2, \\R)$ : $\\det(\\rho(z)) = a^2 + b^2 = |z|^2 > 0$, donc $\\det(\\rho(z)) \\neq 0$ et $\\rho(z) \\in \\GL(2, \\R)$.

— *Morphisme :* pour $z = a + ib$ et $z' = a' + ib'$ dans $\\C^*$, on a $zz' = (aa' - bb') + i(ab' + a'b)$, et :

$$\\rho(z)\\rho(z') = \\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}\\begin{pmatrix} a' & -b' \\\\ b' & a' \\end{pmatrix} = \\begin{pmatrix} aa' - bb' & -(ab' + a'b) \\\\ ab' + a'b & aa' - bb' \\end{pmatrix} = \\rho(zz').$$

Ainsi $\\rho \\in \\operatorname{Hom}(\\C^*, \\GL(2, \\R))$ est une représentation matricielle de $\\C^*$ de degré $2$ sur $\\R$.

— *Fidélité :* déterminons le noyau de $\\rho$. Pour $z = a + ib \\in \\C^*$ :

$$\\rho(z) = I_2 \\iff \\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\iff (a = 1 \\text{ et } b = 0) \\iff z = 1.$$

On a donc $\\Ker \\rho = (1)$, ce qui prouve par la proposition $(1.58)$ $2^\\circ$ que $\\rho$ est injectif : la représentation $\\rho$ est fidèle.`
  },
  'c1-e26': {
    id: 'c1-e26',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 26,
    title: 'Groupe des isométries du plan affine euclidien',
    page: 67,
    upToOrderIndex: 399,
    statementTex: `[1] Soit $P$ le plan affine euclidien. Si $f$ est une isométrie du plan $P$ (exemple (1.34)), on dit qu’un point $A$ est *fixe* pour $f$, si $f(A) = A$.

On désigne par $\\mathscr{I}(2)$ l’ensemble des isométries du plan $P$.

Si $\\Delta$ est une droite de $P$, on note $s_\\Delta$ la symétrie du plan par rapport à $\\Delta$ ; $\\begin{aligned}[t] s_\\Delta : P &\\to P \\\\ A &\\mapsto A' \\end{aligned}$, $A'$ est tel que $\\Delta$ est médiatrice de $AA'$.

*a)* Vérifier les propriétés suivantes :

— l’identité de $P$, notée $\\id_P$, appartient à $\\mathscr{I}(2)$ ;

— quelle que soit la droite $\\Delta$, $s_\\Delta \\in \\mathscr{I}(2)$ et $s_\\Delta^2 = s_\\Delta \\circ s_\\Delta = \\id_P$ ;

— si $f_1$ et $f_2$ sont dans $\\mathscr{I}(2)$, alors $f_2 \\circ f_1 \\in \\mathscr{I}(2)$ ; $f_2 \\circ f_1$ sera appelé « *produit* » de $f_1$ et $f_2$ dans $\\mathscr{I}(2)$.

*b)* Soit $f \\in \\mathscr{I}(2)$ ; montrer que :

— si $f$ a deux points fixes distincts $A$ et $B$, alors tout point de la droite $AB$ est fixe pour $f$ ;

— si $f$ a trois points fixes, $A$, $B$, $C$, non alignés, alors $f = \\id_P$.

*c)* Démontrer que toute isométrie $f \\in \\mathscr{I}(2)$ est le produit de $0$, $1$, $2$ ou $3$ symétries (par convention, quel que soit la droite $\\Delta$, $s_\\Delta^0 = \\id_P$).

*d)* Prouver que $\\mathscr{I}(2)$ est un sous-groupe du groupe symétrique $S_P$ et que $\\mathscr{I}(2)$ est non abélien.

*e)* À tout vecteur $v$ de l’espace vectoriel $\\R^2$, on associe la translation de vecteur $v$ du plan affine $P$, notée $t_v$.

Montrer à l’aide de *c)* que $t_v \\in \\mathscr{I}(2)$ et que $\\mathscr{T}(P) = \\{t_v \\;;\\; v \\in \\R^2\\}$ est un sous-groupe abélien de $\\mathscr{I}(2)$, isomorphe à $(\\R^2, +)$.

*f)* Soit $O$ un point du plan $P$, pour $\\alpha \\in \\R$, on note $r_{O, \\alpha}$ la rotation du plan $P$ de centre $O$ et d’angle $\\alpha$.

Montrer à l’aide de *c)* que $r_{O, \\alpha} \\in \\mathscr{I}(2)$. $\\mathscr{R}(P, O)$ désignant l’ensemble de toutes les rotations $r_{O, \\alpha}$ pour $\\alpha \\in \\R$, vérifier que $\\mathscr{R}(P, O) = \\{r_{O, \\alpha} \\;;\\; 0 \\leqslant \\alpha < 2\\pi\\}$ et que $\\mathscr{R}(P, O)$ est un sous-groupe abélien de $\\mathscr{I}(2)$.`,
    hintTex: `Pour *b)*, traduire $d(A, f(M)) = d(A, M)$ et $d(B, f(M)) = d(B, M)$ à l’aide du produit scalaire, puis observer que si $f(M) \\neq M$, tout point fixe appartient à la médiatrice de $[M f(M)]$. Pour *c)*, choisir trois points non alignés $A, B, C$ et composer $f$ à gauche par au plus trois symétries par rapport à des médiatrices pour les fixer successivement.`,
    correctionTex: `*a)* **Propriétés élémentaires de** $\\mathscr{I}(2)$.

— Pour tous $M, N \\in P$, $d(\\id_P(M), \\id_P(N)) = d(M, N)$, donc $\\id_P \\in \\mathscr{I}(2)$.

— Soit $\\Delta$ une droite de $P$. Choisissons un repère orthonormé $(O ; \\vec{i}, \\vec{j})$ de $P$ tel que $O \\in \\Delta$ et $\\vec{i}$ dirige $\\Delta$. Un point $M$ de coordonnées $(x, y)$ a pour symétrique $s_\\Delta(M)$ de coordonnées $(x, -y)$. On a donc $s_\\Delta(s_\\Delta(M)) = M$, soit $s_\\Delta^2 = \\id_P$, et pour tous $M_1(x_1, y_1)$, $M_2(x_2, y_2)$ :

$$d(s_\\Delta(M_1), s_\\Delta(M_2)) = \\sqrt{(x_2 - x_1)^2 + (-y_2 - (-y_1))^2} = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} = d(M_1, M_2),$$

donc $s_\\Delta \\in \\mathscr{I}(2)$.

— Si $f_1, f_2 \\in \\mathscr{I}(2)$, alors pour tous $M, N \\in P$,

$$d\\bigl((f_2 \\circ f_1)(M), (f_2 \\circ f_1)(N)\\bigr) = d\\bigl(f_2(f_1(M)), f_2(f_1(N))\\bigr) = d\\bigl(f_1(M), f_1(N)\\bigr) = d(M, N),$$

donc $f_2 \\circ f_1 \\in \\mathscr{I}(2)$.

*b)* **Points fixes d’une isométrie** $f \\in \\mathscr{I}(2)$.

— Supposons $A \\neq B$ fixes par $f$ et soit $M$ un point de la droite $(AB)$. Posons $M' = f(M)$. Puisque $f$ conserve les distances, $d(A, M') = d(A, M)$ et $d(B, M') = d(B, M)$, c’est-à-dire $\\|\\overrightarrow{AM'}\\|^2 = \\|\\overrightarrow{AM}\\|^2$ et $\\|\\overrightarrow{BM'}\\|^2 = \\|\\overrightarrow{BM}\\|^2$. En écrivant $\\overrightarrow{BM'} = \\overrightarrow{AM'} - \\overrightarrow{AB}$ et $\\overrightarrow{BM} = \\overrightarrow{AM} - \\overrightarrow{AB}$, on développe :

$$\\|\\overrightarrow{AM'}\\|^2 - 2\\,\\overrightarrow{AM'} \\cdot \\overrightarrow{AB} + \\|\\overrightarrow{AB}\\|^2 = \\|\\overrightarrow{AM}\\|^2 - 2\\,\\overrightarrow{AM} \\cdot \\overrightarrow{AB} + \\|\\overrightarrow{AB}\\|^2,$$

d’où $\\overrightarrow{MM'} \\cdot \\overrightarrow{AB} = 0$. Comme $M \\in (AB)$, il existe $\\lambda \\in \\R$ tel que $\\overrightarrow{AM} = \\lambda\\overrightarrow{AB}$, et comme $\\overrightarrow{MM'} \\perp \\overrightarrow{AB}$, le théorème de Pythagore donne :

$$\\|\\overrightarrow{AM'}\\|^2 = \\|\\overrightarrow{AM} + \\overrightarrow{MM'}\\|^2 = \\|\\overrightarrow{AM}\\|^2 + \\|\\overrightarrow{MM'}\\|^2.$$

Puisque $\\|\\overrightarrow{AM'}\\|^2 = \\|\\overrightarrow{AM}\\|^2$, il vient $\\|\\overrightarrow{MM'}\\|^2 = 0$, soit $M' = M$ : tout point de $(AB)$ est fixe pour $f$.

— Supposons maintenant que $f$ fixe trois points $A, B, C$ non alignés, et soit $M \\in P$. Si l’on avait $f(M) \\neq M$, alors les égalités $d(A, f(M)) = d(A, M)$, $d(B, f(M)) = d(B, M)$ et $d(C, f(M)) = d(C, M)$ montreraient que $A, B, C$ appartiennent tous trois à la médiatrice du segment $[M f(M)]$, donc sont alignés, ce qui est absurde. On a donc $f(M) = M$ pour tout $M \\in P$, soit $f = \\id_P$.

*c)* *(Note : le texte de 1984 imprime « quel que soit la droite ».)*

Fixons trois points non alignés $A, B, C \\in P$ et soit $f \\in \\mathscr{I}(2)$.

1. Si $f(A) = A$, posons $f_1 = f$ ; si $f(A) \\neq A$, notons $\\Delta_1$ la médiatrice de $[A f(A)]$ et posons $f_1 = s_{\\Delta_1} \\circ f$. Par *a)*, $f_1 \\in \\mathscr{I}(2)$ et $f_1(A) = A$.

2. Si $f_1(B) = B$, posons $f_2 = f_1$ ; si $f_1(B) \\neq B$, notons $\\Delta_2$ la médiatrice de $[B f_1(B)]$ et posons $f_2 = s_{\\Delta_2} \\circ f_1 \\in \\mathscr{I}(2)$. Comme $f_1(A) = A$ et $f_1 \\in \\mathscr{I}(2)$, on a $d(A, f_1(B)) = d(f_1(A), f_1(B)) = d(A, B)$, donc $A \\in \\Delta_2$, d’où $s_{\\Delta_2}(A) = A$. Ainsi $f_2(A) = A$ et $f_2(B) = B$.

3. Si $f_2(C) = C$, posons $f_3 = f_2$ ; si $f_2(C) \\neq C$, notons $\\Delta_3$ la médiatrice de $[C f_2(C)]$ et posons $f_3 = s_{\\Delta_3} \\circ f_2 \\in \\mathscr{I}(2)$. Comme $f_2$ fixe $A$ et $B$, on a $d(A, f_2(C)) = d(A, C)$ et $d(B, f_2(C)) = d(B, C)$, donc $A, B \\in \\Delta_3$, d’où $f_3(A) = A$, $f_3(B) = B$ et $f_3(C) = C$.

D’après *b)*, on a alors $f_3 = \\id_P$. En composant successivement à gauche par les symétries éventuellement introduites (et en utilisant $s_\\Delta^2 = \\id_P$), on obtient que $f$ est la composée de $k \\in \\{0, 1, 2, 3\\}$ symétries par rapport à des droites (avec la convention $s_\\Delta^0 = \\id_P$).

*d)* **Structure de groupe non abélien sur** $\\mathscr{I}(2)$.

— D’après *c)*, toute $f \\in \\mathscr{I}(2)$ s’écrit $f = s_{\\Delta_1} \\circ \\dots \\circ s_{\\Delta_k}$ ($0 \\leqslant k \\leqslant 3$). Or chaque $s_\\Delta$ vérifie $s_\\Delta^2 = \\id_P$, donc est bijective ($s_\\Delta \\in S_P$). Par suite $f \\in S_P$ et son inverse est $f^{-1} = s_{\\Delta_k} \\circ \\dots \\circ s_{\\Delta_1}$, qui appartient à $\\mathscr{I}(2)$ d’après *a)*.

— De plus, $\\id_P \\in \\mathscr{I}(2) \\neq \\varnothing$ et, par *a)*, pour tous $f_1, f_2 \\in \\mathscr{I}(2)$, $f_2 \\circ f_1^{-1} \\in \\mathscr{I}(2)$. Par le théorème $(1.24)$, $\\mathscr{I}(2) \\leqslant S_P$.

— Montrons que $\\mathscr{I}(2)$ n’est pas abélien : dans un repère orthonormé, soient $\\Delta_1$ la droite d’équation $y = 0$ ($s_{\\Delta_1}(x, y) = (x, -y)$) et $\\Delta_2$ la droite d’équation $y = x$ ($s_{\\Delta_2}(x, y) = (y, x)$). Pour le point $M(1, 0)$, on a :

$$(s_{\\Delta_2} \\circ s_{\\Delta_1})(1, 0) = s_{\\Delta_2}(1, 0) = (0, 1) \\qquad \\text{et} \\qquad (s_{\\Delta_1} \\circ s_{\\Delta_2})(1, 0) = s_{\\Delta_1}(0, 1) = (0, -1),$$

donc $s_{\\Delta_2} \\circ s_{\\Delta_1} \\neq s_{\\Delta_1} \\circ s_{\\Delta_2}$.

*e)* **Sous-groupe des translations** $\\mathscr{T}(P)$.

Soit $v \\in \\R^2$. Si $v = 0$, alors $t_0 = \\id_P \\in \\mathscr{I}(2)$. Si $v \\neq 0$, choisissons un repère orthonormé $(O ; \\vec{i}, \\vec{j})$ avec $\\vec{i} = \\dfrac{v}{\\|v\\|}$, de sorte que $t_v(x, y) = (x + \\|v\\|, y)$. En prenant $\\Delta_1$ d’équation $x = 0$ ($s_{\\Delta_1}(x, y) = (-x, y)$) et $\\Delta_2$ d’équation $x = \\dfrac{\\|v\\|}{2}$ ($s_{\\Delta_2}(x, y) = (\\|v\\| - x, y)$), on obtient :

$$(s_{\\Delta_2} \\circ s_{\\Delta_1})(x, y) = s_{\\Delta_2}(-x, y) = (x + \\|v\\|, y) = t_v(x, y).$$

Ainsi $t_v = s_{\\Delta_2} \\circ s_{\\Delta_1}$ est le produit de $2$ symétries, donc $t_v \\in \\mathscr{I}(2)$ par *a)* (ce qui illustre *c)*).

Considérons l’application $\\Phi : (\\R^2, +) \\to (\\mathscr{I}(2), \\circ)$, $v \\mapsto t_v$. Quels que soient $u, v \\in \\R^2$ et $M \\in P$, $(t_u \\circ t_v)(M) = (M + v) + u = M + (u + v) = t_{u+v}(M)$, donc $\\Phi$ est un morphisme de groupes. Par la proposition $(1.56)$ $1^\\circ$, son image $\\mathscr{T}(P) = \\Im \\Phi$ est un sous-groupe de $\\mathscr{I}(2)$.

De plus, $t_v = \\id_P \\implies O + v = O \\implies v = 0$, donc $\\Ker \\Phi = (0)$ et $\\Phi$ est injectif (proposition $(1.58)$ $2^\\circ$). D’après la remarque $(1.68)$ $3^\\circ$, $\\mathscr{T}(P) \\simeq (\\R^2, +)$ ; comme $(\\R^2, +)$ est abélien, $\\mathscr{T}(P)$ est un sous-groupe abélien de $\\mathscr{I}(2)$.

*f)* **Sous-groupe des rotations** $\\mathscr{R}(P, O)$. *(Note :* l’édition de 1984 imprime par coquille $r_{0, \\alpha}$ avec le chiffre $0$ au lieu de la lettre $O$.)

Rapportons $P$ à un repère orthonormé d’origine $O$ (identifié au plan complexe centré en $O$, où la rotation $r_{O, \\alpha}$ s’écrit $z \\mapsto e^{i\\alpha} z$). Soient $\\Delta_1$ la droite d’angle polaire $0$ ($s_{\\Delta_1}(z) = \\overline{z}$) et $\\Delta_2$ la droite passant par $O$ d’angle polaire $\\dfrac{\\alpha}{2}$ ($s_{\\Delta_2}(z) = e^{i\\alpha}\\overline{z}$). Pour tout $z \\in \\C$ :

$$(s_{\\Delta_2} \\circ s_{\\Delta_1})(z) = s_{\\Delta_2}(\\overline{z}) = e^{i\\alpha} \\overline{\\overline{z}} = e^{i\\alpha} z = r_{O, \\alpha}(z).$$

Ainsi $r_{O, \\alpha} = s_{\\Delta_2} \\circ s_{\\Delta_1} \\in \\mathscr{I}(2)$.

Pour tout $\\alpha \\in \\R$, il existe un unique $k \\in \\Z$ tel que $2k\\pi \\leqslant \\alpha < 2(k + 1)\\pi$ ; en posant $\\alpha_0 = \\alpha - 2k\\pi$, on a $0 \\leqslant \\alpha_0 < 2\\pi$ et $e^{i\\alpha} = e^{i\\alpha_0}$, d’où $r_{O, \\alpha} = r_{O, \\alpha_0}$. On en déduit immédiatement $\\mathscr{R}(P, O) = \\{r_{O, \\alpha} \\;;\\; 0 \\leqslant \\alpha < 2\\pi\\}$.

Enfin, l’application $\\Psi : (\\R, +) \\to (\\mathscr{I}(2), \\circ)$, $\\alpha \\mapsto r_{O, \\alpha}$ vérifie pour tous $\\alpha, \\beta \\in \\R$ :

$$(r_{O, \\alpha} \\circ r_{O, \\beta})(z) = e^{i\\alpha}(e^{i\\beta} z) = e^{i(\\alpha + \\beta)} z = r_{O, \\alpha + \\beta}(z),$$

donc $\\Psi \\in \\operatorname{Hom}((\\R, +), \\mathscr{I}(2))$. Par la proposition $(1.56)$ $1^\\circ$, son image $\\mathscr{R}(P, O) = \\Im \\Psi$ est un sous-groupe de $\\mathscr{I}(2)$, et il est abélien car $r_{O, \\alpha} \\circ r_{O, \\beta} = r_{O, \\alpha + \\beta} = r_{O, \\beta + \\alpha} = r_{O, \\beta} \\circ r_{O, \\alpha}$.`
  },
  'c1-e27': {
    id: 'c1-e27',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 27,
    title: 'Groupe des homographies de la sphère de Riemann',
    page: 67,
    upToOrderIndex: 399,
    statementTex: `Notons $\\C$ le plan complexe, c’est-à-dire le plan affine euclidien $\\R^2$ rapporté à un système d’axes orthonormé $Oxy$ et dont tout point $M(x, y)$ est considéré comme l’image du nombre complexe $z = x + iy$.

À toute famille de 4 nombres *complexes* $(a, b, c, d)$ telle que $ad - bc \\neq 0$, on associe l’application

$$f : z \\mapsto \\dfrac{az + b}{cz + d},\\quad \\text{où } z \\in \\C.$$

On remarque que si $c \\neq 0$, le point $-\\dfrac{d}{c}$ n’a aucune image par $f$ ; d’autre part, le point $\\dfrac{a}{c}$ n’est l’image d’aucun point de $\\C$.

Pour remédier à ces difficultés, on rajoute au plan complexe un point dit point à l’infini et noté $\\infty$.

On pose $\\widetilde{\\C} = \\C \\cup \\{\\infty\\}$, pour $c \\neq 0$, $f\\!\\left(-\\dfrac{d}{c}\\right) = \\infty$ et $f(\\infty) = \\dfrac{a}{c}$.

Une application telle que $f$ est appelée *homographie* du plan complexe.

(Compte tenu de l’interprétation géométrique des homographies à l’aide de la projection stéréographique de la sphère, $\\widetilde{\\C}$ est appelé sphère de Riemann [1].)

*a)* Montrer que toute homographie $f$ est une permutation de $\\widetilde{\\C}$.

*b)* Démontrer que l’ensemble $\\mathscr{H}$ des homographies du plan complexe est un sous-groupe du groupe symétrique $S_{\\widetilde{\\C}}$.

*c)* En considérant le cas où $c = 0$, prouver que $\\mathscr{H}$ contient comme sous-groupe le groupe des similitudes et translations du plan complexe.

*d)* Vérifier que l’homographie $z \\mapsto \\dfrac{1}{z}$ est le produit (commutatif) de l’inversion de centre $O$ et de puissance $1$, et de la symétrie par rapport à l’axe $Ox$.

*e)* Démontrer que toute homographie $f$ du plan complexe conserve les angles et leur orientation, ce que l’on exprime en disant que $f$ est une transformation *conforme* du plan ; la réciproque étant vraie [1], le groupe $\\mathscr{H}$ des homographies du plan complexe est aussi appelé *groupe des transformations conformes* du plan.

*f)* Prouver que les homographies :

$$f_1 : z \\mapsto z,\\quad f_2 : z \\mapsto -z,\\quad f_3 : z \\mapsto \\dfrac{1}{z},\\quad f_4 : z \\mapsto -\\dfrac{1}{z}$$

forment un sous-groupe de $\\mathscr{H}$ isomorphe au groupe de Klein.

*g)* Prouver que les homographies :

$$\\begin{aligned} g_1 : z &\\mapsto z, & g_2 : z &\\mapsto \\dfrac{1}{1 - z}, & g_3 : z &\\mapsto \\dfrac{z - 1}{z}, \\\\ g_4 : z &\\mapsto \\dfrac{1}{z}, & g_5 : z &\\mapsto 1 - z, & g_6 : z &\\mapsto \\dfrac{z}{z - 1}, \\end{aligned}$$

forment un sous-groupe de $\\mathscr{H}$ isomorphe au groupe symétrique $S_3$.`,
    hintTex: `Pour *a)* et *b)*, associer à $f(z) = \\dfrac{az+b}{cz+d}$ la matrice $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\in \\GL(2, \\C)$ et vérifier que la composition correspond au produit matriciel (sans oublier les points $-\\dfrac{d}{c}$ et $\\infty$). Pour *e)*, utiliser la décomposition $f(z) = \\dfrac{a}{c} + \\dfrac{bc - ad}{c^2} \\cdot \\dfrac{1}{z + d/c}$ lorsque $c \\neq 0$ pour se ramener à *c)* et *d)*.`,
    correctionTex: `*a)* **Caractère bijectif de** $f$ **sur** $\\widetilde{\\C}$.

Notons d’abord que lorsque $c = 0$, la condition $ad - bc \\neq 0$ donne $ad \\neq 0$ ($a \\neq 0$ et $d \\neq 0$), et l’homographie est étendue à $\\widetilde{\\C}$ par $f(\\infty) = \\infty$.

Soit $f \\in \\mathscr{H}$ associée à $(a, b, c, d)$ ($ad - bc \\neq 0$). Considérons l’homographie $g$ associée à $(d, -b, -c, a)$ (on a bien $da - (-b)(-c) = ad - bc \\neq 0$). Vérifions que $g \\circ f = f \\circ g = \\id_{\\widetilde{\\C}}$ :

— *Cas* $c = 0$ : $f(z) = \\dfrac{a}{d}z + \\dfrac{b}{d}$ et $g(w) = \\dfrac{d}{a}w - \\dfrac{b}{a}$ sur $\\C$, avec $f(\\infty) = g(\\infty) = \\infty$. On vérifie aussitôt $g(f(z)) = z$ et $f(g(w)) = w$ pour tout $z, w \\in \\widetilde{\\C}$.

— *Cas* $c \\neq 0$ : alors $-c \\neq 0$, avec $f(-d/c) = \\infty$, $f(\\infty) = a/c$, et $g(a/c) = \\infty$, $g(\\infty) = -d/c$. Ainsi $(g \\circ f)(-d/c) = g(\\infty) = -d/c$ et $(g \\circ f)(\\infty) = g(a/c) = \\infty$. Pour tout $z \\in \\C \\setminus \\{-d/c\\}$, on a $cz + d \\neq 0$ et $f(z) = \\dfrac{az + b}{cz + d} \\neq \\dfrac{a}{c}$ (sinon $c(az + b) = a(cz + d) \\implies bc = ad$, absurde), d’où :

$$g(f(z)) = \\dfrac{d\\dfrac{az + b}{cz + d} - b}{-c\\dfrac{az + b}{cz + d} + a} = \\dfrac{d(az + b) - b(cz + d)}{-c(az + b) + a(cz + d)} = \\dfrac{(ad - bc)z}{ad - bc} = z.$$

De même (en échangeant les rôles de $(a, b, c, d)$ et $(d, -b, -c, a)$), $(f \\circ g)(w) = w$ pour tout $w \\in \\widetilde{\\C}$.

Ainsi $f$ est bijective sur $\\widetilde{\\C}$, d’inverse $f^{-1} = g \\in \\mathscr{H}$ : donc $f \\in S_{\\widetilde{\\C}}$.

*b)* **Structure de sous-groupe de** $\\mathscr{H}$ **dans** $S_{\\widetilde{\\C}}$.

D’après *a)*, $\\mathscr{H} \\subseteq S_{\\widetilde{\\C}}$, $\\id_{\\widetilde{\\C}} \\in \\mathscr{H}$ (avec $(1, 0, 0, 1)$), et si $f \\in \\mathscr{H}$, alors $f^{-1} \\in \\mathscr{H}$.

Soient $f_1, f_2 \\in \\mathscr{H}$ associées respectivement aux matrices $M_1 = \\begin{pmatrix} a_1 & b_1 \\\\ c_1 & d_1 \\end{pmatrix}$ et $M_2 = \\begin{pmatrix} a_2 & b_2 \\\\ c_2 & d_2 \\end{pmatrix}$ de $\\GL(2, \\C)$. Posons $M = M_1 M_2 = \\begin{pmatrix} A & B \\\\ C & D \\end{pmatrix} \\in \\GL(2, \\C)$ (car $\\det M = (\\det M_1)(\\det M_2) \\neq 0$), où $A = a_1 a_2 + b_1 c_2$, $B = a_1 b_2 + b_1 d_2$, $C = c_1 a_2 + d_1 c_2$, $D = c_1 b_2 + d_1 d_2$, et notons $h \\in \\mathscr{H}$ l’homographie associée à $M$. Vérifions que $f_1 \\circ f_2 = h$ sur $\\widetilde{\\C}$ :

— pour tout $z \\in \\C$ tel que $c_2 z + d_2 \\neq 0$ et $c_1 f_2(z) + d_1 \\neq 0$, on a $Cz + D = c_1(a_2 z + b_2) + d_1(c_2 z + d_2) \\neq 0$ et :

$$f_1(f_2(z)) = \\dfrac{a_1\\dfrac{a_2 z + b_2}{c_2 z + d_2} + b_1}{c_1\\dfrac{a_2 z + b_2}{c_2 z + d_2} + d_1} = \\dfrac{a_1(a_2 z + b_2) + b_1(c_2 z + d_2)}{c_1(a_2 z + b_2) + d_1(c_2 z + d_2)} = \\dfrac{Az + B}{Cz + D} = h(z) ;$$

— si $c_2 \\neq 0$ et $z = -d_2/c_2$, alors $f_1(f_2(z)) = f_1(\\infty)$ ; or $C(-d_2/c_2) + D = -\\dfrac{c_1 \\det M_2}{c_2}$ et $A(-d_2/c_2) + B = -\\dfrac{a_1 \\det M_2}{c_2}$ : si $c_1 = 0$, $C = d_1 c_2 \\neq 0$ et $z = -D/C$, donc $h(z) = \\infty = f_1(\\infty)$ ; si $c_1 \\neq 0$, $h(z) = \\dfrac{a_1}{c_1} = f_1(\\infty)$ ;

— si $c_1 \\neq 0$, $c_2 z + d_2 \\neq 0$ et $f_2(z) = -d_1/c_1$, alors $Cz + D = 0$ avec $C \\neq 0$ (sinon $C = D = 0$, absurde), donc $z = -D/C$ et $h(z) = \\infty = f_1(f_2(z))$ ;

— enfin en $z = \\infty$ : si $c_2 = 0$, $a_2 \\neq 0$, $C = c_1 a_2$, $A = a_1 a_2$, et $h(\\infty)$ vaut $\\infty$ si $c_1 = 0$ et $a_1/c_1$ si $c_1 \\neq 0$, soit $f_1(\\infty) = f_1(f_2(\\infty))$ ; si $c_2 \\neq 0$, $f_2(\\infty) = a_2/c_2$, et lorsque $C = 0$ ($c_1 a_2 + d_1 c_2 = 0$), on a $c_1 \\neq 0$ (sinon $d_1 = 0$ et $M_1$ serait non inversible) et $a_2/c_2 = -d_1/c_1$, d’où $f_1(f_2(\\infty)) = \\infty = h(\\infty)$, tandis que lorsque $C \\neq 0$, $h(\\infty) = \\dfrac{A}{C} = \\dfrac{a_1(a_2/c_2) + b_1}{c_1(a_2/c_2) + d_1} = f_1(f_2(\\infty))$.

Ainsi $f_1 \\circ f_2 = h \\in \\mathscr{H}$. D’après $(1.20)$, $\\mathscr{H} \\leqslant S_{\\widetilde{\\C}}$.

*c)* **Sous-groupe des similitudes directes et translations** ($c = 0$).

Lorsque $c = 0$, on a $ad \\neq 0$, donc sur $\\C$ l’homographie s’écrit :

$$f(z) = \\alpha z + \\beta, \\qquad \\text{avec } \\alpha = \\dfrac{a}{d} \\in \\C^* \\text{ et } \\beta = \\dfrac{b}{d} \\in \\C$$

(et $f(\\infty) = \\infty$). En écrivant $\\alpha = r e^{i\\theta}$ ($r > 0$, $\\theta \\in \\R$), $z \\mapsto \\alpha z + \\beta$ est précisément l’écriture complexe générale d’une translation (si $\\alpha = 1$) ou d’une similitude directe (composée d’une rotation d’angle $\\theta$, d’une homothétie de rapport $r > 0$ et d’une translation).

Réciproquement, toute transformation $z \\mapsto \\alpha z + \\beta$ ($\\alpha \\in \\C^*$, $\\beta \\in \\C$) s’obtient pour $(a, b, c, d) = (\\alpha, \\beta, 0, 1)$ ($ad - bc = \\alpha \\neq 0$), donc appartient à $\\mathscr{H}$. Cet ensemble $\\mathscr{S}^+$ contient $\\id_{\\widetilde{\\C}}$ ($\\alpha = 1, \\beta = 0$) et pour $f_1(z) = \\alpha_1 z + \\beta_1$, $f_2(z) = \\alpha_2 z + \\beta_2$, on a $(f_1 \\circ f_2^{-1})(z) = \\dfrac{\\alpha_1}{\\alpha_2}z + \\left(\\beta_1 - \\dfrac{\\alpha_1 \\beta_2}{\\alpha_2}\\right) \\in \\mathscr{S}^+$. D’après $(1.24)$, $\\mathscr{S}^+$ est un sous-groupe de $\\mathscr{H}$.

*d)* **Décomposition de** $j : z \\mapsto \\dfrac{1}{z}$.

L’inversion $I$ de centre $O$ et de puissance $1$ envoie tout $z \\in \\C^*$ sur $\\dfrac{z}{|z|^2} = \\dfrac{z}{z\\overline{z}} = \\dfrac{1}{\\overline{z}}$ (avec $I(0) = \\infty$ et $I(\\infty) = 0$). La symétrie $S$ par rapport à l’axe $Ox$ est la conjugaison $S(z) = \\overline{z}$ sur $\\C$ (avec $S(\\infty) = \\infty$). On vérifie sur tout $\\widetilde{\\C}$ :

— pour $z \\in \\C^*$ : $(S \\circ I)(z) = \\overline{\\left(\\dfrac{1}{\\overline{z}}\\right)} = \\dfrac{1}{z}$ et $(I \\circ S)(z) = \\dfrac{1}{\\overline{\\overline{z}}} = \\dfrac{1}{z}$ ;

— pour $z = 0$ : $(S \\circ I)(0) = S(\\infty) = \\infty$ et $(I \\circ S)(0) = I(0) = \\infty$ ;

— pour $z = \\infty$ : $(S \\circ I)(\\infty) = S(0) = 0$ et $(I \\circ S)(\\infty) = I(\\infty) = 0$.

Donc $j = S \\circ I = I \\circ S$ est bien le produit commutatif de $I$ et de $S$.

*e)* **Conservation des angles et de leur orientation.**

— Toute similitude directe ou translation $z \\mapsto \\alpha z + \\beta$ ($\\alpha = r e^{i\\theta} \\in \\C^*$) conserve les angles et leur orientation (c’est une composée de rotation, homothétie de rapport $r > 0$ et translation).

— Quant à $j : z \\mapsto \\dfrac{1}{z}$, par *d)* c’est la composée $S \\circ I$ de deux transformations qui conservent toutes deux la mesure des angles mais en **renversent** l’orientation (propriété classique de la réflexion $S$ et de l’inversion plane $I$) : par suite $j = S \\circ I$ conserve les angles **et** leur orientation.

— Soit alors $f(z) = \\dfrac{az + b}{cz + d} \\in \\mathscr{H}$ quelconque. Si $c = 0$, $f \\in \\mathscr{S}^+$ est conforme. Si $c \\neq 0$, on décompose sur $\\C \\setminus \\{-d/c\\}$ :

$$f(z) = \\dfrac{a}{c} + \\dfrac{bc - ad}{c^2} \\cdot \\dfrac{1}{z + d/c},$$

ce qui écrit $f = s_2 \\circ j \\circ s_1$ (même aux points $-d/c$ et $\\infty$), où $s_1 : z \\mapsto z + \\dfrac{d}{c}$ et $s_2 : w \\mapsto \\dfrac{bc - ad}{c^2} w + \\dfrac{a}{c}$ appartiennent à $\\mathscr{S}^+$. Comme composée de transformations conformes, toute homographie $f \\in \\mathscr{H}$ est conforme. (Analytiquement sur $\\C \\setminus \\{-d/c\\}$, la dérivée complexe $f'(z_0) = \\dfrac{ad - bc}{(cz_0 + d)^2}$ est non nulle, de sorte que la différentielle en $z_0$ est la similitude directe $h \\mapsto f'(z_0) h$.)

*f)* **Sous-groupe isomorphe au groupe de Klein.**

Posons $K = \\{f_1, f_2, f_3, f_4\\} \\subseteq \\mathscr{H}$. Ces quatre homographies sont deux à deux distinctes (leurs images en $z = 2$ valent respectivement $2, -2, \\dfrac{1}{2}, -\\dfrac{1}{2}$). On calcule aussitôt sur $\\widetilde{\\C}$ :

— $f_1 = \\id_{\\widetilde{\\C}}$ ;

— $f_2^2 = f_3^2 = f_4^2 = f_1$ ;

— $f_2 \\circ f_3 = f_3 \\circ f_2 = f_4$, $f_2 \\circ f_4 = f_4 \\circ f_2 = f_3$ et $f_3 \\circ f_4 = f_4 \\circ f_3 = f_2$.

$K$ est donc stable par composition et par inverse ($f_k^{-1} = f_k$), d’où $K \\leqslant \\mathscr{H}$ par $(1.20)$. La bijection $(f_1, f_2, f_3, f_4) \\mapsto (e, a, b, c)$ identifie la table de $K$ à la table $(11)$ du groupe $V$ (p. 28), ou directement la proposition $(1.85)$ appliquée à $H_1 = \\{f_1, f_2\\} \\simeq \\Zn{2}$ et $H_2 = \\{f_1, f_3\\} \\simeq \\Zn{2}$ donne $K \\simeq \\Zn{2} \\times \\Zn{2}$, c’est-à-dire le groupe de Klein (exemple $(1.86)$).

*g)* **Sous-groupe isomorphe à** $S_3$.

Posons $G = \\{g_1, g_2, g_3, g_4, g_5, g_6\\}$. Les déterminants des matrices associées valent $\\pm 1 \\neq 0$, donc $G \\subseteq \\mathscr{H}$. Ces $6$ homographies sont deux à deux distinctes (leurs images en $z = 3$ valent respectivement $3, -\\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{1}{3}, -2, \\dfrac{3}{2}$).

Calculons les composées :

— $g_2(g_2(z)) = \\dfrac{1}{1 - \\dfrac{1}{1 - z}} = \\dfrac{1 - z}{-z} = \\dfrac{z - 1}{z} = g_3(z)$, et $g_2(g_3(z)) = \\dfrac{1}{1 - \\dfrac{z - 1}{z}} = z = g_1(z)$ (de même $g_3 \\circ g_2 = g_1$ et $g_3^2 = g_2$) ;

— $g_4^2(z) = \\dfrac{1}{1/z} = z = g_1(z)$, $g_5^2(z) = 1 - (1 - z) = z = g_1(z)$, $g_6^2(z) = \\dfrac{z/(z - 1)}{z/(z - 1) - 1} = z = g_1(z)$ ;

— $g_2(g_4(z)) = \\dfrac{1}{1 - 1/z} = \\dfrac{z}{z - 1} = g_6(z)$ et $g_4(g_2(z)) = \\dfrac{1}{1/(1 - z)} = 1 - z = g_5(z)$ ;

— $g_2(g_5(z)) = \\dfrac{1}{1 - (1 - z)} = \\dfrac{1}{z} = g_4(z)$ et $g_2(g_6(z)) = \\dfrac{1}{1 - z/(z - 1)} = 1 - z = g_5(z)$.

À l’aide de l’associativité et des expressions $g_3 = g_2^2$, $g_5 = g_4 \\circ g_2$, $g_6 = g_2 \\circ g_4$, on complète toute la table de composition (ligne $\\circ$ colonne) :

$$\\begin{array}{c|cccccc} \\circ & g_1 & g_2 & g_3 & g_4 & g_5 & g_6 \\\\ \\hline g_1 & g_1 & g_2 & g_3 & g_4 & g_5 & g_6 \\\\ g_2 & g_2 & g_3 & g_1 & g_6 & g_4 & g_5 \\\\ g_3 & g_3 & g_1 & g_2 & g_5 & g_6 & g_4 \\\\ g_4 & g_4 & g_5 & g_6 & g_1 & g_2 & g_3 \\\\ g_5 & g_5 & g_6 & g_4 & g_3 & g_1 & g_2 \\\\ g_6 & g_6 & g_4 & g_5 & g_2 & g_3 & g_1 \\end{array}$$

La stabilité par produit et par inverse ($g_2^{-1} = g_3$, $g_4^{-1} = g_4$, $g_5^{-1} = g_5$, $g_6^{-1} = g_6$) entraîne $G \\leqslant \\mathscr{H}$ par $(1.20)$. La comparaison terme à terme avec la table $(10)$ de $S_3$ (p. 28) montre que la bijection $(g_1, g_2, g_3, g_4, g_5, g_6) \\mapsto (e, \\sigma_1, \\sigma_2, \\tau_1, \\tau_2, \\tau_3)$ est un isomorphisme : ainsi $G \\simeq S_3$.`
  },
  'c1-e28': {
    id: 'c1-e28',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 28,
    title: 'Démonstrations du corollaire (1.49) et de la proposition (1.53)',
    page: 68,
    upToOrderIndex: 399,
    statementTex: `*a)* Démontrer le corollaire (1.49).

*b)* Démontrer la proposition (1.53).`,
    hintTex: `Pour *a)*, raisonner par récurrence sur $n \\geqslant 2$ (le cas $n = 1$ étant trivial) en posant $K = H_1 \\dots H_{n-1}$ et en montrant $K H_n = H_n K$ pour appliquer la proposition $(1.47)$. Pour *b)*, adopter la notation de la page 40 ($x = \\sum_{i \\in I} x_i$ à support fini) et isoler la composante d’indice $j$ comme dans la preuve de $(1.51)$.`,
    correctionTex: `*a)* **Démonstration du corollaire** $(1.49)$.

Rappelons l’énoncé : $\\{H_i\\}_{1 \\leqslant i \\leqslant n}$ étant une famille finie de sous-groupes de $G$ telle que $H_i H_j \\leqslant G$ dès que $1 \\leqslant i < j \\leqslant n$, montrons par récurrence sur $n \\geqslant 1$ que $H_1 H_2 \\dots H_n$ est un sous-groupe de $G$.

— *Initialisation :* pour $n = 1$, $H_1 \\leqslant G$ par hypothèse ; pour $n = 2$, $H_1 H_2 \\leqslant G$ par hypothèse.

— *Hérédité :* soit $n \\geqslant 3$ ; supposons le résultat établi au rang $n - 1$. La famille $\\{H_i\\}_{1 \\leqslant i \\leqslant n-1}$ vérifie l’hypothèse du corollaire, donc par hypothèse de récurrence $K = H_1 H_2 \\dots H_{n-1}$ est un sous-groupe de $G$. D’après la définition $(20)$, on a $H_1 H_2 \\dots H_n = K H_n$. D’après la proposition $(1.47)$, pour prouver que $K H_n \\leqslant G$, il suffit de montrer que $K H_n = H_n K$.

Pour tout $i \\in \\{1, \\dots, n - 1\\}$, on a $H_i H_n \\leqslant G$, donc par la proposition $(1.47)$, $H_i H_n = H_n H_i$.

Soit $z \\in K H_n$. Il existe $x_1 \\in H_1, \\dots, x_{n-1} \\in H_{n-1}$ et $x_n \\in H_n$ tels que $z = x_1 \\dots x_{n-1} x_n$. Comme $x_{n-1} x_n \\in H_{n-1} H_n = H_n H_{n-1}$, il existe $u_{n-1} \\in H_n$ et $y_{n-1} \\in H_{n-1}$ tels que $x_{n-1} x_n = u_{n-1} y_{n-1}$. En répétant de proche en proche l’échange entre $x_i \\in H_i$ et $u_i \\in H_n$ pour $i = n - 2, \\dots, 1$ via $H_i H_n = H_n H_i$, on obtient $u_0 \\in H_n$ et $y_1 \\in H_1, \\dots, y_{n-1} \\in H_{n-1}$ tels que :

$$z = u_0 y_1 \\dots y_{n-1} \\in H_n K.$$

D’où $K H_n \\subseteq H_n K$. De même, tout élément $w = x_n x_1 \\dots x_{n-1} \\in H_n K$ se réécrit en faisant passer l’élément de $H_n$ de la gauche vers la droite à travers $H_1, \\dots, H_{n-1}$ grâce à $H_n H_i = H_i H_n$, ce qui donne $H_n K \\subseteq K H_n$. Ainsi $K H_n = H_n K$, et donc $H_1 \\dots H_n = K H_n \\leqslant G$.

*b)* **Démonstration de la proposition** $(1.53)$.

Conformément à la notation de la page 40, tout élément de $G' = \\sum_{i \\in I} H_i$ s’écrit sous la forme $x = \\sum_{i \\in I} x_i$ avec $x_i \\in H_i$ pour tout $i \\in I$, les $x_i$ étant presque tous nuls (nuls sauf pour un nombre fini d’indices). L’unicité énoncée dans $(1.53)$ (à l’ordre des termes et aux termes nuls près) équivaut à l’unicité d’une telle famille presque nulle $(x_i)_{i \\in I} \\in \\prod_{i \\in I} H_i$ vérifiant $x = \\sum_{i \\in I} x_i$.

— *Sens direct* ($\\Longrightarrow$) : supposons $G' = \\bigoplus_{i \\in I} H_i$, c’est-à-dire la relation $(21)$ :

$$\\forall j \\in I,\\quad H_j \\cap \\sum_{\\substack{i \\in I \\\\ i \\neq j}} H_i = (0).$$

L’existence d’une écriture $x = \\sum_{i \\in I} x_i$ à support fini pour tout $x \\in G'$ provient de $(18)$ (p. 40). Pour l’unicité, supposons $x = \\sum_{i \\in I} x_i = \\sum_{i \\in I} x'_i$ avec $(x_i)_{i \\in I}$ et $(x'_i)_{i \\in I}$ presque nulles dans $\\prod_{i \\in I} H_i$. Soit $J = \\{i \\in I \\;;\\; x_i \\neq 0 \\text{ ou } x'_i \\neq 0\\}$ (partie finie de $I$). Pour tout $j \\in I \\setminus J$, on a $x_j = 0 = x'_j$. Pour tout $j \\in J$, comme $(G, +)$ est abélien :

$$x_j - x'_j = \\sum_{\\substack{i \\in J \\\\ i \\neq j}} (x'_i - x_i).$$

Le membre de gauche appartient au sous-groupe $H_j$, tandis que le membre de droite (égal à $0$ si $J = \\{j\\}$) est une somme finie d’éléments de $H_i$ ($i \\neq j$), donc appartient au sous-groupe $\\sum_{\\substack{i \\in I \\\\ i \\neq j}} H_i$. Par $(21)$, on obtient $x_j - x'_j \\in (0)$, d’où $x_j = x'_j$ pour tout $j \\in I$.

— *Réciproque* ($\\Longleftarrow$) : supposons que tout $x \\in G'$ possède une unique écriture à support fini. Soit $j \\in I$ et soit $z \\in H_j \\cap \\sum_{\\substack{i \\in I \\\\ i \\neq j}} H_i$. Comme $z \\in \\sum_{\\substack{i \\in I \\\\ i \\neq j}} H_i$, il existe une partie finie non vide $\\{i_1, \\dots, i_m\\} \\subseteq I \\setminus \\{j\\}$ et des éléments $y_{i_k} \\in H_{i_k}$ tels que $z = \\sum_{k=1}^m y_{i_k}$. Définissons deux familles presque nulles $(a_i)_{i \\in I}$ et $(b_i)_{i \\in I}$ dans $\\prod_{i \\in I} H_i$ par :

— $a_j = z$ (licite car $z \\in H_j$) et $a_i = 0$ pour $i \\neq j$ ;

— $b_{i_k} = y_{i_k}$ pour $1 \\leqslant k \\leqslant m$, et $b_i = 0$ pour tout $i \\notin \\{i_1, \\dots, i_m\\}$ (en particulier $b_j = 0$ puisque $j \\notin \\{i_1, \\dots, i_m\\}$).

On a alors $\\sum_{i \\in I} a_i = z = \\sum_{i \\in I} b_i$. Par unicité de l’écriture, $a_i = b_i$ pour tout $i \\in I$, et en particulier pour $i = j$ on trouve $z = a_j = b_j = 0$. Ainsi $H_j \\cap \\sum_{\\substack{i \\in I \\\\ i \\neq j}} H_i = (0)$ pour tout $j \\in I$, donc $G' = \\bigoplus_{i \\in I} H_i$.`
  },
  'c1-e29': {
    id: 'c1-e29',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 29,
    title: 'Groupe G^E des applications de E dans G',
    page: 69,
    upToOrderIndex: 399,
    statementTex: `Soient $E$ un ensemble non vide et $G$ un groupe d’élément unité $e$. On désigne par $G^E$ l’ensemble des applications $f$ de $E$ dans $G$. On considère la loi de composition définie dans $G^E$ par :

$$\\begin{aligned} G^E \\times G^E &\\to G^E \\\\ (f, g) &\\mapsto fg, \\end{aligned}$$

où $fg$ est telle que, pour tout $x \\in E$, $fg(x) = f(x)g(x)$.

Prouver que $G^E$ est ainsi muni d’une structure de groupe.

Vérifier que $G^E$ est un groupe abélien si et seulement si $G$ est abélien.`,
    hintTex: `Vérifier les axiomes $(\\mathrm{G}_1)$–$(\\mathrm{G}_3)$ point par point pour chaque $x \\in E$ (avec pour neutre l’application constante $x \\mapsto e$). Pour prouver que $G^E$ abélien implique $G$ abélien, évaluer sur des applications constantes $c_a : x \\mapsto a$ en un point $x_0 \\in E$.`,
    correctionTex: `**1. Structure de groupe sur** $G^E$.

L’ensemble $G^E$ est non vide (car $G$ contient au moins $e$, donc l’application constante $x \\mapsto e$ appartient à $G^E$), et pour tous $f, g \\in G^E$, l’application $x \\mapsto f(x)g(x)$ est bien à valeurs dans $G$, donc la loi est interne sur $G^E$. Vérifions les trois axiomes $(1.3)$ :

— *Axiome* $(\\mathrm{G}_1)$ *(associativité)* : soient $f, g, h \\in G^E$. Pour tout $x \\in E$, par associativité dans $G$ :

$$\\bigl((fg)h\\bigr)(x) = (fg)(x)\\,h(x) = \\bigl(f(x)g(x)\\bigr)h(x) = f(x)\\bigl(g(x)h(x)\\bigr) = f(x)\\,(gh)(x) = \\bigl(f(gh)\\bigr)(x),$$

donc $(fg)h = f(gh)$.

— *Axiome* $(\\mathrm{G}_2)$ *(élément neutre)* : soit $\\varepsilon \\in G^E$ l’application constante définie par $\\varepsilon(x) = e$ pour tout $x \\in E$. Pour tout $f \\in G^E$ et tout $x \\in E$,

$$(f\\varepsilon)(x) = f(x)\\varepsilon(x) = f(x)e = f(x) \\qquad \\text{et} \\qquad (\\varepsilon f)(x) = \\varepsilon(x)f(x) = ef(x) = f(x),$$

donc $f\\varepsilon = \\varepsilon f = f$. L’application $\\varepsilon$ est élément neutre de $G^E$.

— *Axiome* $(\\mathrm{G}_3)$ *(symétrisabilité)* : soit $f \\in G^E$. Définissons $f' \\in G^E$ par $f'(x) = (f(x))^{-1}$ pour tout $x \\in E$. Alors pour tout $x \\in E$ :

$$(ff')(x) = f(x)(f(x))^{-1} = e = \\varepsilon(x) \\qquad \\text{et} \\qquad (f'f)(x) = (f(x))^{-1}f(x) = e = \\varepsilon(x),$$

d’où $ff' = f'f = \\varepsilon$. Tout $f \\in G^E$ admet un inverse ($f^{-1} : x \\mapsto (f(x))^{-1}$).

Ainsi $G^E$ est un groupe.

**2. Caractérisation de la commutativité de** $G^E$.

— *Sens réciproque* ($\\Longleftarrow$) : si $G$ est abélien, alors pour tous $f, g \\in G^E$ et tout $x \\in E$, $(fg)(x) = f(x)g(x) = g(x)f(x) = (gf)(x)$, d’où $fg = gf$. Ainsi $G^E$ est abélien.

— *Sens direct* ($\\Longrightarrow$) : réciproquement, supposons $G^E$ abélien. Soient $a, b \\in G$ quelconques ; considérons les applications constantes $c_a, c_b \\in G^E$ définies pour tout $x \\in E$ par $c_a(x) = a$ et $c_b(x) = b$. On a alors $c_a c_b = c_b c_a$. Comme $E$ est supposé non vide, il existe au moins un élément $x_0 \\in E$ ; en évaluant l’égalité précédente en $x_0$, on obtient :

$$ab = c_a(x_0)c_b(x_0) = (c_a c_b)(x_0) = (c_b c_a)(x_0) = c_b(x_0)c_a(x_0) = ba.$$

Donc $G$ est abélien.`
  },
  'c1-e30': {
    id: 'c1-e30',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 30,
    title: 'Morphismes sur 𝒞(J) et décomposition Ker F ⊕ Γ',
    page: 69,
    upToOrderIndex: 399,
    statementTex: `$\\R$ désignant le groupe additif des nombres réels, on pose

$$J = \\{x \\in \\R \\;;\\; 0 \\leqslant x \\leqslant 1\\}.$$

L’addition de $\\R$ induit dans l’ensemble $\\R^J$ une structure de *groupe additif abélien* (voir exercice 29).

*a)* Vérifier les propriétés suivantes :

— l’ensemble des fonctions $f \\in \\R^J$, continues sur $J$, est un sous-groupe de $(\\R^J, +)$, que l’on notera $\\mathscr{C}(J)$ ;

— si, pour tout $a \\in \\R$, on note $c_a$ la fonction constante de $J$ dans $\\R$ telle que $c_a(x) = a$ pour tout $x \\in J$, alors $\\Gamma = \\{c_a \\;;\\; a \\in \\R\\}$ est un sous-groupe de $(\\mathscr{C}(J), +)$.

*b)* On considère les applications $F_i$ de $\\mathscr{C}(J)$ dans $\\R$ telles que :

$$F_1 : f \\mapsto f(1),\\quad F_2 : f \\mapsto |f(0)|,\\quad F_3 : f \\mapsto \\int_0^1 f(x)\\,dx$$

$$F_4 : f \\mapsto \\dfrac{\\pi}{3} \\int_0^1 f(x)\\cos\\dfrac{\\pi x}{6}\\,dx,\\quad F_5 : f \\mapsto \\int_0^1 \\cos\\dfrac{\\pi(f(x))}{6}\\,dx.$$

Déterminer les $F_i$ qui sont des morphismes de groupes de $(\\mathscr{C}(J), +)$ dans $(\\R, +)$. Pour chacun des morphismes de groupes $F_i$, prouver que, quel que soit $a \\in \\R$, $F_i(c_a) = a$ et montrer qu’il existe un unique $m_i \\in \\R$ tel que $F_i(\\id_J - c_{m_i}) = 0$. En déduire que les $\\Ker F_i$ sont deux à deux distincts.

*c)* Démontrer que pour tout $F \\in \\operatorname{Hom}(\\mathscr{C}(J), \\R)$, tel que $F(c_a) = a$, quel que soit $a \\in \\R$, on a

$$\\mathscr{C}(J) = \\Ker F \\oplus \\Gamma.$$

En conclure qu’il existe de nombreux sous-groupes $H$ de $\\mathscr{C}(J)$ tels que $\\mathscr{C}(J) = H \\oplus \\Gamma$.`,
    hintTex: `Pour *b)*, vérifier la linéarité pour $F_1, F_3, F_4$, exhiber un contre-exemple pour $F_2$ et $F_5$ (tester $c_0$ ou $c_1 + c_{-1}$), et calculer $F_4(\\id_J)$ par intégration par parties. Pour *c)*, décomposer toute $f \\in \\mathscr{C}(J)$ en $f = (f - c_{F(f)}) + c_{F(f)}$ pour appliquer la définition $(1.50)$.`,
    correctionTex: `*a)* **Sous-groupes** $\\mathscr{C}(J)$ **et** $\\Gamma$.

— La fonction nulle $c_0$ est continue sur $J = [0, 1]$, donc $\\mathscr{C}(J) \\neq \\varnothing$. Si $f, g \\in \\mathscr{C}(J)$, la fonction $f - g : x \\mapsto f(x) - g(x)$ est continue sur $J$ comme différence de deux fonctions continues, donc $f - g \\in \\mathscr{C}(J)$. Par le théorème $(1.24)$ (formule $(15')$), $\\mathscr{C}(J) \\leqslant (\\R^J, +)$.

— Toute fonction constante $c_a$ est continue sur $J$, donc $\\Gamma \\subseteq \\mathscr{C}(J)$, et $c_0 \\in \\Gamma \\neq \\varnothing$. Pour tous $a, b \\in \\R$, $(c_a - c_b)(x) = a - b = c_{a - b}(x)$ pour tout $x \\in J$, donc $c_a - c_b = c_{a - b} \\in \\Gamma$. Par $(1.24)$, $\\Gamma \\leqslant (\\mathscr{C}(J), +)$.

*b)* **1. Détermination des morphismes parmi les** $F_i$.

Quels que soient $f, g \\in \\mathscr{C}(J)$ :

— $F_1(f + g) = (f + g)(1) = f(1) + g(1) = F_1(f) + F_1(g)$ : $F_1$ est un morphisme ;

— $F_2$ **n’est pas** un morphisme, car $F_2(c_1 + c_{-1}) = F_2(c_0) = |0| = 0$ tandis que $F_2(c_1) + F_2(c_{-1}) = |1| + |-1| = 2 \\neq 0$ ;

— par linéarité de l’intégrale des fonctions continues sur $[0, 1]$ :

$$F_3(f + g) = \\int_0^1 (f(x) + g(x))\\,dx = \\int_0^1 f(x)\\,dx + \\int_0^1 g(x)\\,dx = F_3(f) + F_3(g),$$

$$F_4(f + g) = \\dfrac{\\pi}{3}\\int_0^1 (f(x) + g(x))\\cos\\dfrac{\\pi x}{6}\\,dx = F_4(f) + F_4(g),$$

donc $F_3$ et $F_4$ sont des morphismes ;

— $F_5$ **n’est pas** un morphisme : d’après $(1.55)$ $1^\\circ$, tout morphisme envoie $c_0$ sur $0$, or $F_5(c_0) = \\int_0^1 \\cos(0)\\,dx = 1 \\neq 0$.

Les morphismes de groupes sont donc exactement $F_1$, $F_3$ et $F_4$.

**2. Vérification de** $F_i(c_a) = a$ **pour** $i \\in \\{1, 3, 4\\}$ **et tout** $a \\in \\R$.

— $F_1(c_a) = c_a(1) = a$.

— $F_3(c_a) = \\int_0^1 a\\,dx = a$.

— $F_4(c_a) = \\dfrac{\\pi}{3}\\int_0^1 a\\cos\\dfrac{\\pi x}{6}\\,dx = \\dfrac{\\pi a}{3}\\left[\\dfrac{6}{\\pi}\\sin\\dfrac{\\pi x}{6}\\right]_0^1 = 2a\\left(\\sin\\dfrac{\\pi}{6} - \\sin 0\\right) = 2a \\cdot \\dfrac{1}{2} = a$.

**3. Existence, unicité et calcul de** $m_i$ ($i \\in \\{1, 3, 4\\}$).

La fonction $\\id_J : x \\mapsto x$ est continue sur $J$, donc $\\id_J \\in \\mathscr{C}(J)$. Pour $i \\in \\{1, 3, 4\\}$ et $m \\in \\R$, puisque $F_i$ est un morphisme ($(1.55)$ $2^\\circ$) et $F_i(c_m) = m$ :

$$F_i(\\id_J - c_m) = F_i(\\id_J) - F_i(c_m) = F_i(\\id_J) - m = 0 \\iff m = F_i(\\id_J).$$

Ainsi, pour chaque $i \\in \\{1, 3, 4\\}$, il existe un **unique** réel $m_i$ tel que $F_i(\\id_J - c_{m_i}) = 0$, donné par $m_i = F_i(\\id_J)$ :

— $m_1 = F_1(\\id_J) = 1$ ;

— $m_3 = F_3(\\id_J) = \\int_0^1 x\\,dx = \\dfrac{1}{2}$ ;

— par intégration par parties ($u(x) = x$, $v'(x) = \\cos\\dfrac{\\pi x}{6}$, $v(x) = \\dfrac{6}{\\pi}\\sin\\dfrac{\\pi x}{6}$) :

$$\\begin{aligned} m_4 = \\dfrac{\\pi}{3}\\int_0^1 x\\cos\\dfrac{\\pi x}{6}\\,dx &= \\dfrac{\\pi}{3}\\left(\\left[\\dfrac{6}{\\pi}x\\sin\\dfrac{\\pi x}{6}\\right]_0^1 - \\dfrac{6}{\\pi}\\int_0^1 \\sin\\dfrac{\\pi x}{6}\\,dx\\right) \\\\ &= 2\\sin\\dfrac{\\pi}{6} + 2\\left[\\dfrac{6}{\\pi}\\cos\\dfrac{\\pi x}{6}\\right]_0^1 = 1 + \\dfrac{12}{\\pi}\\left(\\dfrac{\\sqrt{3}}{2} - 1\\right) = 1 - \\dfrac{6(2 - \\sqrt{3})}{\\pi}. \\end{aligned}$$

**4. Distinction des noyaux** $\\Ker F_1$, $\\Ker F_3$ **et** $\\Ker F_4$.

Montrons que $m_1, m_3, m_4$ sont deux à deux distincts : on a $m_3 = \\dfrac{1}{2} < 1 = m_1$, et comme $2 - \\sqrt{3} > 0$, $m_4 < 1 = m_1$. De plus, $1{,}735^2 = 3{,}010225 > 3$ entraîne $\\sqrt{3} < 1{,}735$, d’où $12(2 - \\sqrt{3}) > 12 \\times 0{,}265 = 3{,}18 > \\pi$ (car $\\pi < 3{,}15$), et par suite $\\dfrac{6(2 - \\sqrt{3})}{\\pi} > \\dfrac{1}{2}$, soit $m_4 < \\dfrac{1}{2} = m_3$. Donc $m_4 < m_3 < m_1$.

Or, pour tout $i \\in \\{1, 3, 4\\}$, on a $\\id_J - c_{m_i} \\in \\Ker F_i$. Si l’on avait $\\Ker F_i = \\Ker F_j$ ($i, j \\in \\{1, 3, 4\\}$), alors $\\id_J - c_{m_i} \\in \\Ker F_j$, d’où $F_j(\\id_J - c_{m_i}) = 0$, ce qui imposerait $m_i = m_j$ par unicité de $m_j$, et donc $i = j$. Les noyaux $\\Ker F_1, \\Ker F_3, \\Ker F_4$ sont bien deux à deux distincts.

*c)* **Décomposition** $\\mathscr{C}(J) = \\Ker F \\oplus \\Gamma$.

Soit $F \\in \\operatorname{Hom}(\\mathscr{C}(J), \\R)$ tel que $\\forall a \\in \\R,\\; F(c_a) = a$. Par le corollaire $(1.56)$ $2^\\circ$, $\\Ker F \\leqslant \\mathscr{C}(J)$, et par *a)*, $\\Gamma \\leqslant \\mathscr{C}(J)$. Le groupe $(\\mathscr{C}(J), +)$ étant abélien, $\\Ker F + \\Gamma \\leqslant \\mathscr{C}(J)$ (remarque $(1.48)$ $2^\\circ$).

— *Égalité* $\\mathscr{C}(J) = \\Ker F + \\Gamma$ : soit $f \\in \\mathscr{C}(J)$ quelconque. Posons $a = F(f) \\in \\R$ et $g = f - c_a \\in \\mathscr{C}(J)$. On a :

$$F(g) = F(f - c_a) = F(f) - F(c_a) = a - a = 0,$$

donc $g \\in \\Ker F$, et $f = g + c_a \\in \\Ker F + \\Gamma$. Ainsi $\\mathscr{C}(J) = \\Ker F + \\Gamma$.

— *Intersection triviale :* soit $h \\in \\Ker F \\cap \\Gamma$. Puisque $h \\in \\Gamma$, il existe $a \\in \\R$ tel que $h = c_a$, et puisque $h \\in \\Ker F$, on a $0 = F(h) = F(c_a) = a$, d’où $h = c_0 = 0$. Ainsi $\\Ker F \\cap \\Gamma = (0)$.

D’après la définition $(1.50)$, on a donc $\\mathscr{C}(J) = \\Ker F \\oplus \\Gamma$.

**Conclusion :** en appliquant *c)* aux morphismes $F_1, F_3, F_4$ (dont les noyaux sont distincts), on obtient déjà trois sous-groupes distincts $H = \\Ker F_i$ tels que $\\mathscr{C}(J) = H \\oplus \\Gamma$. Plus généralement, pour chaque réel $t \\in J = [0, 1]$, l’évaluation $E_t : \\mathscr{C}(J) \\to \\R$, $f \\mapsto f(t)$ est un morphisme vérifiant $E_t(c_a) = a$, et les noyaux $\\Ker E_t = \\{f \\in \\mathscr{C}(J) \\;;\\; f(t) = 0\\}$ sont deux à deux distincts (car $\\id_J - c_t \\in \\Ker E_t$ ne s’annule qu’en $t$) ; il existe donc une infinité (même non dénombrable) de sous-groupes $H$ de $\\mathscr{C}(J)$ vérifiant $\\mathscr{C}(J) = H \\oplus \\Gamma$.`
  },
  'c1-e31': {
    id: 'c1-e31',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 31,
    title: 'Produit direct et sous-groupes de G₁ × G₂',
    page: 70,
    upToOrderIndex: 399,
    statementTex: `*a)* Soient deux groupes $G_1$ et $G_2$ ; prouver que les groupes $G_1 \\times G_2$ et $G_2 \\times G_1$ sont isomorphes.

*b)* $\\Gamma_1$ et $\\Gamma_2$ étant aussi deux groupes, démontrer la propriété :

$$(\\Gamma_1 \\simeq G_1 \\text{ et } \\Gamma_2 \\simeq G_2) \\implies \\Gamma_1 \\times \\Gamma_2 \\simeq G_1 \\times G_2.$$

*c)* Montrer que tout sous-groupe de $G_1 \\times G_2$ est de la forme $H_1 \\times H_2$ où $H_1$ et $H_2$ sont respectivement des sous-groupes de $G_1$ et $G_2$.`,
    hintTex: `Pour *a)* et *b)*, vérifier directement que les applications $(x_1, x_2) \\mapsto (x_2, x_1)$ et $(y_1, y_2) \\mapsto (f_1(y_1), f_2(y_2))$ sont des isomorphismes. Attention en *c)* : l’affirmation imprimée en 1984 est fausse en général ! Chercher un contre-exemple à $2$ éléments dans $\\Zn{2} \\times \\Zn{2}$ (le sous-groupe diagonal), puis démontrer la réciproque.`,
    correctionTex: `*a)* Considérons l’application $\\tau : G_1 \\times G_2 \\to G_2 \\times G_1$ définie par $\\tau(x_1, x_2) = (x_2, x_1)$.

— *Bijectivité :* l’application $\\tau' : G_2 \\times G_1 \\to G_1 \\times G_2$, $(x_2, x_1) \\mapsto (x_1, x_2)$ vérifie $\\tau' \\circ \\tau = \\id_{G_1 \\times G_2}$ et $\\tau \\circ \\tau' = \\id_{G_2 \\times G_1}$, donc $\\tau$ est bijective.

— *Morphisme :* quels que soient $(x_1, x_2), (y_1, y_2) \\in G_1 \\times G_2$,

$$\\tau\\bigl((x_1, x_2)(y_1, y_2)\\bigr) = \\tau(x_1 y_1, x_2 y_2) = (x_2 y_2, x_1 y_1) = (x_2, x_1)(y_2, y_1) = \\tau(x_1, x_2)\\tau(y_1, y_2).$$

D’après la proposition $(1.66)$ $1^\\circ$, $\\tau$ est un isomorphisme, d’où $G_1 \\times G_2 \\simeq G_2 \\times G_1$.

*b)* Supposons $\\Gamma_1 \\simeq G_1$ et $\\Gamma_2 \\simeq G_2$ : il existe donc des isomorphismes $f_1 : \\Gamma_1 \\to G_1$ et $f_2 : \\Gamma_2 \\to G_2$. Définissons l’application :

$$\\begin{aligned} F : \\Gamma_1 \\times \\Gamma_2 &\\to G_1 \\times G_2 \\\\ (y_1, y_2) &\\mapsto \\bigl(f_1(y_1), f_2(y_2)\\bigr). \\end{aligned}$$

— *Bijectivité :* l’application $(x_1, x_2) \\mapsto \\bigl(f_1^{-1}(x_1), f_2^{-1}(x_2)\\bigr)$ est la bijection réciproque de $F$ (car $f_1$ et $f_2$ sont bijectives).

— *Morphisme :* quels que soient $(y_1, y_2), (y'_1, y'_2) \\in \\Gamma_1 \\times \\Gamma_2$, comme $f_1$ et $f_2$ sont des morphismes :

$$\\begin{aligned} F\\bigl((y_1, y_2)(y'_1, y'_2)\\bigr) &= F(y_1 y'_1, y_2 y'_2) = \\bigl(f_1(y_1 y'_1), f_2(y_2 y'_2)\\bigr) \\\\ &= \\bigl(f_1(y_1)f_1(y'_1), f_2(y_2)f_2(y'_2)\\bigr) = F(y_1, y_2)F(y'_1, y'_2). \\end{aligned}$$

D’après la proposition $(1.66)$ $1^\\circ$, $F$ est un isomorphisme, donc $\\Gamma_1 \\times \\Gamma_2 \\simeq G_1 \\times G_2$.

*c)* **Erratum mathématique (texte de 1984) :** l’affirmation imprimée en *c)* est **fausse en général**.

Il n’est pas vrai en général que tout sous-groupe de $G_1 \\times G_2$ soit de la forme $H_1 \\times H_2$ avec $H_1 \\leqslant G_1$ et $H_2 \\leqslant G_2$.

**1. Contre-exemple explicite.**

Dans le groupe produit $G = \\Zn{2} \\times \\Zn{2}$, considérons le **sous-groupe diagonal** :

$$\\Delta = \\bigl\\{(\\overline{0}, \\overline{0}),\\; (\\overline{1}, \\overline{1})\\bigr\\}.$$

— *Vérification que* $\\Delta \\leqslant \\Zn{2} \\times \\Zn{2}$ : $(\\overline{0}, \\overline{0}) \\in \\Delta \\neq \\varnothing$, et comme $-(\\overline{0}, \\overline{0}) = (\\overline{0}, \\overline{0})$, $-(\\overline{1}, \\overline{1}) = (\\overline{1}, \\overline{1})$ et $(\\overline{1}, \\overline{1}) + (\\overline{1}, \\overline{1}) = (\\overline{0}, \\overline{0}) \\in \\Delta$, la partie $\\Delta$ est stable par différence, donc $\\Delta \\leqslant \\Zn{2} \\times \\Zn{2}$ d’après $(1.24)$.

— *Preuve que* $\\Delta$ *n’est pas de la forme* $H_1 \\times H_2$ : supposons par l’absurde qu’il existe $H_1 \\leqslant \\Zn{2}$ et $H_2 \\leqslant \\Zn{2}$ tels que $\\Delta = H_1 \\times H_2$. Puisque $(\\overline{1}, \\overline{1}) \\in H_1 \\times H_2$, on aurait $\\overline{1} \\in H_1$ ; puisque $(\\overline{0}, \\overline{0}) \\in H_1 \\times H_2$, on aurait $\\overline{0} \\in H_2$. On en déduirait $(\\overline{1}, \\overline{0}) \\in H_1 \\times H_2 = \\Delta$, ce qui est absurde car $(\\overline{1}, \\overline{0}) \\notin \\Delta$. (De la même façon, pour tout groupe $G$ non réduit à $(e)$, la diagonale $\\{(x, x) \\;;\\; x \\in G\\}$ est un sous-groupe de $G \\times G$ qui n’est jamais un produit $H_1 \\times H_2$.)

**2. Preuve de la réciproque (toujours vraie).**

Si $H_1 \\leqslant G_1$ et $H_2 \\leqslant G_2$, alors $H_1 \\times H_2$ est un sous-groupe de $G_1 \\times G_2$. En effet :

— $e_1 \\in H_1$ et $e_2 \\in H_2$, donc $(e_1, e_2) \\in H_1 \\times H_2 \\neq \\varnothing$ ;

— quels que soient $(x_1, x_2), (y_1, y_2) \\in H_1 \\times H_2$, on a $x_1 y_1^{-1} \\in H_1$ et $x_2 y_2^{-1} \\in H_2$, d’où :

$$(x_1, x_2)(y_1, y_2)^{-1} = (x_1, x_2)(y_1^{-1}, y_2^{-1}) = (x_1 y_1^{-1}, x_2 y_2^{-1}) \\in H_1 \\times H_2.$$

D’après le théorème $(1.24)$, $H_1 \\times H_2 \\leqslant G_1 \\times G_2$.

**3. Condition suffisante classique.**

Dans le cas où $G_1$ et $G_2$ sont des groupes finis, une condition suffisante classique pour que tout sous-groupe $H \\leqslant G_1 \\times G_2$ soit effectivement de la forme $H_1 \\times H_2$ (plus précisément égal à $p_1(H) \\times p_2(H)$) est que leurs ordres soient premiers entre eux :

$$\\pgcd(|G_1|, |G_2|) = 1.$$

On observe d’ailleurs déjà avec les seuls outils du chapitre I que si, pour tout $(x_1, x_2) \\in H$, les éléments $x_1$ et $x_2$ sont d’ordres finis $d_1 = o(x_1)$ et $d_2 = o(x_2)$ premiers entre eux (ce que garantit l’hypothèse $\\pgcd(|G_1|, |G_2|) = 1$), l’identité de Bézout $u d_1 + v d_2 = 1$ ($u, v \\in \\Z$) et les égalités $x_1^{d_1} = e_1$, $x_2^{d_2} = e_2$ entraînent :

$$(x_1, x_2)^{v d_2} = (x_1^{1 - u d_1}, x_2^{v d_2}) = (x_1, e_2) \\in H \\qquad \\text{et} \\qquad (x_1, x_2)^{u d_1} = (e_1, x_2) \\in H,$$

de sorte que pour tout $(x_1, x_2) \\in p_1(H) \\times p_2(H)$, on a $(x_1, e_2) \\in H$ et $(e_1, x_2) \\in H$, donc $(x_1, x_2) = (x_1, e_2)(e_1, x_2) \\in H$ et finalement $H = p_1(H) \\times p_2(H)$.`
  },
  'c1-e32': {
    id: 'c1-e32',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 32,
    title: 'Invariance par isomorphisme de Aut(G) et Int(G)',
    page: 70,
    upToOrderIndex: 399,
    statementTex: `Pour deux groupes $G_1$ et $G_2$, démontrer les propriétés :

*a)* $G_1 \\simeq G_2 \\implies \\operatorname{Aut}(G_1) \\simeq \\operatorname{Aut}(G_2)$

*b)* $G_1 \\simeq G_2 \\implies \\operatorname{Int}(G_1) \\simeq \\operatorname{Int}(G_2)$.`,
    hintTex: `S’inspirer du lemme $(1.74)$ : si $\\varphi : G_1 \\to G_2$ est un isomorphisme, considérer l’application $\\Phi : u \\mapsto \\varphi \\circ u \\circ \\varphi^{-1}$ de $\\operatorname{Aut}(G_1)$ dans $\\operatorname{Aut}(G_2)$, puis calculer $\\Phi(\\sigma_g)$ pour *b)*.`,
    correctionTex: `Supposons $G_1 \\simeq G_2$ et fixons un isomorphisme $\\varphi : G_1 \\to G_2$. Par la proposition $(1.66)$ $2^\\circ$, $\\varphi^{-1} : G_2 \\to G_1$ est également un isomorphisme.

*a)* **Preuve que** $\\operatorname{Aut}(G_1) \\simeq \\operatorname{Aut}(G_2)$.

Pour tout $u \\in \\operatorname{Aut}(G_1)$, la composée $\\varphi \\circ u \\circ \\varphi^{-1} : G_2 \\to G_2$ est un morphisme (proposition $(1.59)$) et est bijective comme composée de trois bijections : d’après la proposition $(1.66)$ $1^\\circ$ et la définition $(1.69)$, $\\varphi \\circ u \\circ \\varphi^{-1} \\in \\operatorname{Aut}(G_2)$. On définit donc une application :

$$\\begin{aligned} \\Phi : \\operatorname{Aut}(G_1) &\\to \\operatorname{Aut}(G_2) \\\\ u &\\mapsto \\varphi \\circ u \\circ \\varphi^{-1}. \\end{aligned}$$

— *Morphisme :* quels que soient $u, v \\in \\operatorname{Aut}(G_1)$,

$$\\Phi(u \\circ v) = \\varphi \\circ u \\circ v \\circ \\varphi^{-1} = \\varphi \\circ u \\circ (\\varphi^{-1} \\circ \\varphi) \\circ v \\circ \\varphi^{-1} = (\\varphi \\circ u \\circ \\varphi^{-1}) \\circ (\\varphi \\circ v \\circ \\varphi^{-1}) = \\Phi(u) \\circ \\Phi(v).$$

— *Bijectivité :* de la même façon, l’application $\\Psi : \\operatorname{Aut}(G_2) \\to \\operatorname{Aut}(G_1)$, $w \\mapsto \\varphi^{-1} \\circ w \\circ \\varphi$ est bien définie et vérifie :

$$(\\Psi \\circ \\Phi)(u) = \\varphi^{-1} \\circ \\varphi \\circ u \\circ \\varphi^{-1} \\circ \\varphi = u \\qquad \\text{et} \\qquad (\\Phi \\circ \\Psi)(w) = \\varphi \\circ \\varphi^{-1} \\circ w \\circ \\varphi \\circ \\varphi^{-1} = w.$$

Ainsi $\\Phi$ est un morphisme bijectif, donc un isomorphisme (proposition $(1.66)$ $1^\\circ$) : $\\operatorname{Aut}(G_1) \\simeq \\operatorname{Aut}(G_2)$.

*b)* **Preuve que** $\\operatorname{Int}(G_1) \\simeq \\operatorname{Int}(G_2)$.

Conservons l’isomorphisme $\\Phi$ ci-dessus et rappelons (exemples $(1.73)$) que $\\operatorname{Int}(G_i) = \\{\\sigma_h \\;;\\; h \\in G_i\\} \\leqslant \\operatorname{Aut}(G_i)$, où $\\sigma_h(z) = h z h^{-1}$.

Soit $g \\in G_1$. Pour tout $y \\in G_2$, posons $x = \\varphi^{-1}(y) \\in G_1$ (de sorte que $\\varphi(x) = y$). Comme $\\varphi$ est un morphisme ($(1.55)$ $2^\\circ$), on a :

$$\\Phi(\\sigma_g)(y) = \\varphi\\bigl(\\sigma_g(\\varphi^{-1}(y))\\bigr) = \\varphi(g x g^{-1}) = \\varphi(g)\\,\\varphi(x)\\,\\varphi(g^{-1}) = \\varphi(g)\\,y\\,(\\varphi(g))^{-1} = \\sigma_{\\varphi(g)}(y).$$

Ainsi, pour tout $g \\in G_1$, on a $\\Phi(\\sigma_g) = \\sigma_{\\varphi(g)} \\in \\operatorname{Int}(G_2)$.

Puisque $\\varphi : G_1 \\to G_2$ est surjective, lorsque $g$ parcourt $G_1$, $\\varphi(g)$ parcourt tout $G_2$, donc l’image directe de $\\operatorname{Int}(G_1)$ par $\\Phi$ est exactement :

$$\\Phi(\\operatorname{Int}(G_1)) = \\{\\sigma_{\\varphi(g)} \\;;\\; g \\in G_1\\} = \\{\\sigma_h \\;;\\; h \\in G_2\\} = \\operatorname{Int}(G_2).$$

La restriction de $\\Phi$ à $\\operatorname{Int}(G_1)$ (ou la composée de l’injection canonique $\\operatorname{Int}(G_1) \\to \\operatorname{Aut}(G_1)$ avec $\\Phi$) est un morphisme injectif d’image $\\operatorname{Int}(G_2)$ ; d’après la remarque $(1.68)$ $3^\\circ$, on obtient $\\operatorname{Int}(G_1) \\simeq \\operatorname{Int}(G_2)$.`
  },
  'c1-e33': {
    id: 'c1-e33',
    chapter: 1,
    chapterLabel: 'Chapitre premier — Structure de groupe',
    number: 33,
    title: 'Équipotence Hom(G, ∏ G_i) et ∏ Hom(G, G_i)',
    page: 70,
    upToOrderIndex: 399,
    statementTex: `Soit $\\{G_i\\}_{i \\in I}$ une famille de groupes ; montrer que, pour tout groupe $G$, l’ensemble $\\operatorname{Hom}\\!\\left(G, \\prod_{i \\in I} G_i\\right)$ est équipotent à l’ensemble $\\prod_{i \\in I} \\bigl(\\operatorname{Hom}(G, G_i)\\bigr)$. [Voir le théorème (1.91).]`,
    hintTex: `Définir $\\Psi(h) = (p_i \\circ h)_{i \\in I}$ à l’aide des projections canoniques $p_i$, vérifier qu’elle est bien définie par la proposition $(1.59)$, puis traduire directement l’existence et l’unicité du théorème $(1.91)$ en surjectivité et injectivité de $\\Psi$.`,
    correctionTex: `Pour que le produit direct $\\prod_{i \\in I} G_i$ soit défini au sens du paragraphe I § 4 C, supposons $I$ non vide (si $I = \\varnothing$, les deux ensembles ont un seul élément). Soit $\\{p_i\\}_{i \\in I}$ la famille des projections canoniques associées à $\\prod_{i \\in I} G_i$ : pour chaque $i \\in I$, $p_i \\in \\operatorname{Hom}\\!\\left(\\prod_{j \\in I} G_j, G_i\\right)$.

Considérons l’application :

$$\\begin{aligned} \\Psi : \\operatorname{Hom}\\!\\left(G, \\prod_{i \\in I} G_i\\right) &\\to \\prod_{i \\in I} \\bigl(\\operatorname{Hom}(G, G_i)\\bigr) \\\\ h &\\mapsto (p_i \\circ h)_{i \\in I}. \\end{aligned}$$

— *Bonne définition :* pour tout $h \\in \\operatorname{Hom}\\!\\left(G, \\prod_{i \\in I} G_i\\right)$ et tout $i \\in I$, comme $h$ et $p_i$ sont des morphismes de groupes, la proposition $(1.59)$ assure que $p_i \\circ h \\in \\operatorname{Hom}(G, G_i)$. La famille $(p_i \\circ h)_{i \\in I}$ appartient donc bien à $\\prod_{i \\in I} \\bigl(\\operatorname{Hom}(G, G_i)\\bigr)$.

— *Bijectivité :* soit $(f_i)_{i \\in I} \\in \\prod_{i \\in I} \\bigl(\\operatorname{Hom}(G, G_i)\\bigr)$ une famille quelconque de morphismes $f_i \\in \\operatorname{Hom}(G, G_i)$. D’après le théorème $(1.91)$ (propriété universelle du produit direct), il existe un **unique** morphisme $h \\in \\operatorname{Hom}\\!\\left(G, \\prod_{i \\in I} G_i\\right)$ tel que :

$$\\forall i \\in I,\\quad p_i \\circ h = f_i,$$

ce qui s’écrit précisément $\\Psi(h) = (f_i)_{i \\in I}$.

L’existence de $h$ pour toute famille $(f_i)_{i \\in I}$ montre que $\\Psi$ est surjective, et son unicité montre que $\\Psi$ est injective (si $\\Psi(h) = \\Psi(h') = (f_i)_{i \\in I}$, l’unicité impose $h = h'$).

Ainsi $\\Psi$ est une bijection, ce qui signifie que les ensembles $\\operatorname{Hom}\\!\\left(G, \\prod_{i \\in I} G_i\\right)$ et $\\prod_{i \\in I} \\bigl(\\operatorname{Hom}(G, G_i)\\bigr)$ sont équipotents.`
  }
}
