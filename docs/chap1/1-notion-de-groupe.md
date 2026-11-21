<script setup>
import { BOOK_TABLES_T1 } from '../../src/data/book-tables-t1'
</script>

# Chapitre premier — Structure de groupe

<PageRef :page="17" />

## 1 — Notion de groupe

### A / Loi de composition interne

<MathBlock id="1.1" kind="def" title="Définitions (1.1)">

Étant donné un ensemble $E$, on appelle *loi de composition interne* sur $E$ toute application de $E \times E$ dans $E$, où $E \times E = \{(x, y) ;\; x \in E \text{ et } y \in E\}$.

Supposons $E \neq \varnothing$ et désignons par $(E, \cdot)$ l’ensemble $E$ muni de la loi de composition définie par l’application :

$$(x, y) \mapsto x \cdot y.$$

*a)* Dans $E$, la loi $\cdot$ est dite :

*associative* si, $(x \cdot y) \cdot z = x \cdot (y \cdot z)$, quels que soient $x, y, z$ dans $E$ ;

*commutative* si, $x \cdot y = y \cdot x$, quels que soient $x, y$ dans $E$.

*b)* S’il existe $e \in E$ tel que, quel que soit $x \in E$,

$$x \cdot e = e \cdot x = x,$$

on dit que $e$ est *élément neutre* dans $(E, \cdot)$.

*c)* Si $(E, \cdot)$ possède un élément neutre $e$, alors un élément $x \in E$ est dit *<GlossaryTerm id="symetrisable">symétrisable</GlossaryTerm>*, s’il existe $x' \in E$ tel que :

$$x' \cdot x = x \cdot x' = e \,;$$

$x'$ est alors appelé *symétrique* de $x$ dans $(E, \cdot)$.

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Accord grammatical en $(1.1)$ *c)*">

Dans l’édition imprimée de 1984 (p. 17), le texte de la clause *c)* porte « s’il existe $x' \in E$ *tels que* : » au pluriel. La coquille a été corrigée en « tel que ».

</FoldNote>

<FoldNote kind="prepa" title="Précision prépa — Produit cartésien, stabilité et loi interne">

Dire que $\cdot$ est une **loi de composition interne** sur $E$ signifie qu’il s’agit d’une application $E \times E \to E$ :

1. **Définition partout** : pour *tout* couple $(x, y) \in E \times E$, $x \cdot y$ doit exister (par exemple, la division $(x, y) \mapsto x / y$ n’est pas une loi interne sur $\R$ à cause de $y = 0$, mais elle l’est sur $\R^*$).
2. **Stabilité dans $E$** : pour tout $(x, y) \in E \times E$, le résultat $x \cdot y$ doit **rester dans $E$**. Par exemple, la soustraction $(x, y) \mapsto x - y$ est interne sur $\Z$, mais pas sur $\N$ (car $2 - 5 = -3 \notin \N$) ; de plus, sur $\Z$, elle n’est ni commutative ni associative : $(5 - 3) - 2 = 0 \neq 4 = 5 - (3 - 2)$.

</FoldNote>

<PageRef :page="18" />

<MathBlock id="1.2" kind="rem" title="Remarque (1.2)">

*Si un élément neutre $e$ existe dans $(E, \cdot)$, il est unique et il est son propre symétrique.*

En effet, supposons $e$ et $e_1$ éléments neutres dans $(E, \cdot)$, $e$ élément neutre $\Rightarrow e_1 \cdot e = e_1$ ; $e_1$ élément neutre $\Rightarrow e_1 \cdot e = e$, d’où $e_1 = e$.

D’autre part, $e \cdot e = e$ implique $e$ symétrique de $e$.

</MathBlock>

<MathBlock id="ex-p18" kind="ex" title="Exemples">

Soit $\N = \{0, 1, 2, \dots\}$ l’ensemble des entiers naturels et $\Z$ l’ensemble des <GlossaryTerm id="entiers-rationnels">entiers rationnels</GlossaryTerm> (entiers positifs, négatifs ou nul).

Dans $\N$ et dans $\Z$ les opérations habituelles d’addition et de multiplication sont des lois de composition internes associatives et commutatives ; $0$ et $1$ sont, respectivement, élément neutre pour l’addition et pour la multiplication.

Dans $(\N, +)$, aucun élément non nul n’est symétrisable.

Dans $(\N, \times)$, aucun élément différent de $1$ n’est symétrisable.

Dans $(\Z, +)$, tout élément est symétrisable ($-x$ est symétrique de $x$).

Dans $(\Z, \times)$, seuls $1$ et $-1$ sont symétrisables.

</MathBlock>

### B / Groupe

<MathBlock id="1.3" kind="def" title="Définition (1.3)">

Soit $G$ un ensemble non vide, muni d’une *loi de composition interne* définie par : $(x, y) \mapsto x \cdot y$.

On dit que la loi $\cdot$ définit sur $G$ une *structure de groupe*, ou que $G$ est un *groupe* relativement à cette loi, si les trois axiomes suivants sont vérifiés :

- $(\mathrm{G}_1)$ : la loi $\cdot$ est associative ;
- $(\mathrm{G}_2)$ : il existe dans $(G, \cdot)$ un élément neutre $e$ ;
- $(\mathrm{G}_3)$ : tout élément de $(G, \cdot)$ est symétrisable.

</MathBlock>

<MathBlock id="1.4" kind="rem" title="Remarques (1.4)">

$1^\circ$ *D’après <MathRef id="1.2">la remarque $(1.2)$</MathRef>, un groupe $G$ a un unique élément neutre $e$.*

$2^\circ$ *Dans un groupe $G$, tout élément $x$ a un unique symétrique $x'$.*

Supposons $x'$ et $x'_1$ symétriques de $x$ dans le groupe $(G, \cdot)$.

$$x' \cdot x = e \Rightarrow (x' \cdot x) \cdot x'_1 = x'_1 \,; \qquad x \cdot x'_1 = e \Rightarrow x' \cdot (x \cdot x'_1) = x' \,;$$

la loi $\cdot$ étant associative (axiome $(\mathrm{G}_1)$), on a $x'_1 = x'$.

</MathBlock>

<FoldNote kind="piege" title="Piège classique — Double égalité du neutre et du symétrique, et rôle de $(\mathrm{G}_1)$">

Deux points cruciaux sont souvent négligés en première lecture de <MathRef id="1.1">la définition $(1.1)$</MathRef> :

1. **Double égalité** : tant que la loi $\cdot$ n’est pas supposée commutative, un élément neutre $e$ doit vérifier $x \cdot e = x$ **et** $e \cdot x = x$, et un symétrique $x'$ doit vérifier $x' \cdot x = e$ **et** $x \cdot x' = e$. Un neutre à gauche seul ou un inverse à droite seul ne suffit pas dans un ensemble muni d’une loi quelconque !
2. **Rôle indispensable de $(\mathrm{G}_1)$** : l’unicité du symétrique ci-dessus utilise l’associativité dans l’enchaînement
   $$x'_1 = e \cdot x'_1 = (x' \cdot x) \cdot x'_1 = x' \cdot (x \cdot x'_1) = x' \cdot e = x'.$$
   Sans associativité, un même élément peut posséder plusieurs inverses dans une table finie. *(À l’inverse, dans un demi-groupe associatif, l’existence d’un neutre à droite et d’inverses à droite suffit pour obtenir un groupe : c’est l’exercice 3 du chapitre !)*

</FoldNote>

<PageRef :page="19" />

<MathBlock id="1.5" kind="def" title="Définition (1.5)">

Un groupe $G$ est dit *abélien*<BookFootnote num="1" text="Du nom du mathématicien norvégien N. H. Abel (1802-1829)." /> (ou *commutatif*) si la loi de composition interne de $G$ est commutative.

</MathBlock>

<MathBlock id="ex-p19" kind="ex" title="Exemple">

$(\Z, +)$ est un groupe abélien dont l’élément neutre est $0$. Nous verrons plus loin d’autres exemples de groupes, dont certains ne sont pas abéliens.

</MathBlock>

<MathBlock id="1.6" kind="rem" title="Remarque (1.6)">

Pour deux éléments $x$ et $y$ d’un groupe non abélien $(G, \cdot)$, on a en général $x \cdot y \neq y \cdot x$. Cependant, si $y = e$, on a $x \cdot e = e \cdot x$, quel que soit $x \in G$ ; la commutativité peut donc être vérifiée pour certains couples d’éléments.

</MathBlock>

<MathBlock id="1.7" kind="def" title="Définition (1.7)">

Dans un ensemble $(E, \cdot)$, on dit que deux éléments $x$ et $y$ *commutent* (ou sont *<GlossaryTerm id="permutables">permutables</GlossaryTerm>*) si $x \cdot y = y \cdot x$.

</MathBlock>

Par exemple, dans un groupe quelconque $(G, \cdot)$, on a vu que l’élément neutre commute avec tout élément de $G$ ; d’autre part, pour tout $x \in G$, $x$ et son symétrique $x'$ commutent.

<MathBlock id="1.8" kind="def" title="Définition (1.8)">

Un groupe $G$ est dit *fini* s’il n’a qu’un nombre fini d’éléments. Dans ce cas, le cardinal de $G$ s’appelle *l’ordre du groupe* $G$ ; il est noté $o(G)$ *(ou $|G|$)*.

</MathBlock>

<MathBlock id="1.9-1" kind="rem" title="Remarque (1.9)">

Par analogie avec les notations utilisées dans les ensembles de nombres pour les opérations habituelles de multiplication et d’addition, la loi de composition interne d’un groupe $G$ sera couramment notée

- « multiplicativement » : $(x, y) \mapsto xy$
- ou « additivement » : $(x, y) \mapsto x + y$.

Dans le premier cas, $xy$ s’appelle le *produit* de $x$ et $y$ pris dans cet ordre ; l’élément neutre se note, en général, $e$ ou $1$ et s’appelle *l’<GlossaryTerm id="element-unite">élément unité</GlossaryTerm>* du groupe ; le symétrique d’un élément $x \in G$ s’écrit $x^{-1}$ et est appelé *inverse* de $x$ ; en abrégé, on dira que le groupe $G$ est « *multiplicatif* ».

Dans le second cas, $x + y$ s’appelle la *somme* de $x$ et $y$ pris dans cet ordre ; l’élément neutre est en général noté $0$ ; le symétrique <PageRef :page="20" /> de $x \in G$ s’écrit $-x$ et est appelé *opposé* de $x$ ; en abrégé, on dira que le groupe $G$ est « *additif* ».

*C’est la notation multiplicative que nous adopterons pour énoncer et démontrer les propriétés générales des groupes.*

*Cependant, selon l’usage, c’est la notation additive qui sera employée pour l’étude des groupes abéliens (chap. VIII).*

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Double numérotation $(1.9)$">

Dans l’édition imprimée de 1984, le numéro **$(1.9)$** est utilisé deux fois : ici page 19 pour la *Remarque (1.9)* sur les notations multiplicative et additive, puis à nouveau page 21 pour les *Remarques (1.9)* sur la puissance $n$-ième d’un élément. Les deux occurrences sont conservées fidèlement.

</FoldNote>

### C / Règles de calcul dans un groupe

Ces règles sont la conséquence des axiomes $(\mathrm{G}_1)$, $(\mathrm{G}_2)$, $(\mathrm{G}_3)$.

Dans tout ce paragraphe, $G$ désigne un groupe multiplicatif, dont l’élément unité est noté $e$.

*a) Produit, dans $G$, de $n$ éléments $x_1, x_2, \dots, x_n$ pris dans cet ordre ($n \geqslant 2$ dans $\N$).* Pour $n = 2$, $x_1 x_2$ est défini par la donnée de la multiplication du groupe $G$. Pour $n = 3$, l’axiome d’associativité $(\mathrm{G}_1)$ autorise à désigner $(x_1 x_2) x_3$ et $x_1 (x_2 x_3)$ par un unique symbole $x_1 x_2 x_3$ représentant par définition le produit, dans le groupe $G$, de $x_1, x_2, x_3$ pris dans cet ordre.

Pour $n > 3$, nous allons montrer par récurrence comment, grâce à l’axiome $(\mathrm{G}_1)$, on peut « supprimer ou mettre des parenthèses » et par suite définir, sans ambiguïté, le produit de $x_1, x_2, \dots, x_n$.

Supposons donc $n > 3$ ; l’hypothèse de récurrence est la suivante : pour tout entier $r$ ($2 \leqslant r < n$), on peut écrire

$$x_1 x_2 \dots x_r = (x_1 x_2 \dots x_s)(x_{s+1} x_{s+2} \dots x_r), \qquad \forall s \; (1 \leqslant s < r).$$

Démontrons alors que, quels que soient les entiers $r$ et $s$ tels que $1 \leqslant s < r < n$, on a :

<span id="ref-eq-1-1"></span>

$$(x_1 x_2 \dots x_r)(x_{r+1} x_{r+2} \dots x_n) = (x_1 x_2 \dots x_s)(x_{s+1} x_{s+2} \dots x_n) \tag{1}$$

Désignons par $z$ le premier membre de <MathRef id="eq-1-1">$(1)$</MathRef> ; l’hypothèse de récurrence implique

$$z = [(x_1 x_2 \dots x_s)(x_{s+1} x_{s+2} \dots x_r)](x_{r+1} x_{r+2} \dots x_n)$$

L’application de l’axiome $(\mathrm{G}_1)$ donne

$$z = (x_1 x_2 \dots x_s)[(x_{s+1} x_{s+2} \dots x_r)(x_{r+1} x_{r+2} \dots x_n)].$$

<PageRef :page="21" />

En réappliquant l’hypothèse de récurrence au produit entre crochets, on obtient

$$z = (x_1 x_2 \dots x_s)(x_{s+1} x_{s+2} \dots x_n),$$

d’où l’égalité <MathRef id="eq-1-1">$(1)$</MathRef>.

Ce résultat autorise la « suppression des parenthèses » dans l’expression de $z$ et $z = x_1 x_2 \dots x_n$ est par définition le produit, dans le groupe $G$, de $x_1, x_2, \dots, x_n$ pris dans cet ordre.

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Indice dans la démonstration de $(1)$ (p. 20)">

Dans l’édition imprimée de 1984 (p. 20), le dernier facteur de l’expression $z = [(x_1 x_2 \dots x_s)(x_{s+1} x_{s+2} \dots x_r)](x_{r+1} x_{r+2} \dots x_n)$ comporte la coquille typographique $(x_{r+1} x_{s+2} \dots x_n)$ (indice $s + 2$ au lieu de $r + 2$). Elle est rectifiée ci-dessus en $x_{r+2}$. De plus, aux pages 20 et 21, la fonte italique maigre `$N$` dans les intitulés en italique des sous-sections *a)* (`$n \geqslant 2$ dans $N$`) et *b)* (`$n \geqslant 1$ dans $N$`) a été normalisée en $\N$.

</FoldNote>

<FoldNote kind="prepa" title="Précision prépa — Lecture pas à pas et pourquoi une récurrence forte pour $(1)$">

Cette démonstration d’associativité généralisée est un modèle de **récurrence forte** :

1. **Initialisation ($n = 2, 3$)** : pour $n = 2$, $x_1 x_2$ est bien défini ; pour $n = 3$, $(\mathrm{G}_1)$ donne $(x_1 x_2) x_3 = x_1 (x_2 x_3)$.
2. **Pourquoi une récurrence forte ?** Au rang $n > 3$, lorsqu’on coupe le produit en un indice $r$ quelconque ($1 \leqslant s < r < n$), le bloc de gauche $x_1 \dots x_r$ a longueur $r \leqslant n - 1$, et le bloc de droite $x_{s+1} \dots x_n$ a longueur $n - s \leqslant n - 1$. Ces longueurs peuvent prendre *n’importe quelle valeur* strictement inférieure à $n$ : une récurrence simple portant uniquement sur $n - 1$ ne suffirait donc pas à les décomposer !
3. **Mécanisme de l’hérédité** :
   - On coupe $z = (x_1 \dots x_r)(x_{r+1} \dots x_n)$ à l’indice $s < r$ dans le premier bloc (par hypothèse de récurrence sur $r < n$).
   - On bascule le parenthésage grâce à $(\mathrm{G}_1)$ sur les trois blocs $A = x_1 \dots x_s$, $B = x_{s+1} \dots x_r$ et $C = x_{r+1} \dots x_n$ : $(AB)C = A(BC)$.
   - On recolle $BC = (x_{s+1} \dots x_r)(x_{r+1} \dots x_n)$ en $x_{s+1} \dots x_n$ (par hypothèse de récurrence appliquée au bloc de longueur $n - s < n$).
4. **Conclusion** : tous les découpages binaires de $x_1 \dots x_n$ coïncident de proche en proche avec $x_1(x_2 \dots x_n)$ (en prenant $s = 1$), ce qui autorise à écrire $x_1 x_2 \dots x_n$ sans parenthèses.

</FoldNote>

*b) Puissance $n$-ième d’un élément ($n \geqslant 1$ dans $\N$).* Soit $x \in G$ ; on pose

$$\begin{aligned} xx &= x^2 \\ (xx)x = x(xx) &= x^3 \end{aligned}$$

et, d’une façon générale, pour tout $n \geqslant 1$ dans $\N$, $x^n$ est obtenu en remplaçant, pour tout $i$ ($1 \leqslant i \leqslant n$), $x_i$ par $x$ dans $x_1 x_2 \dots x_n$.

On en déduit que, quels que soient les entiers positifs $m$ et $n$,

<span id="ref-eq-1-2"></span>

$$x^m x^n = x^{m+n} = x^n x^m \tag{2}$$

et

<span id="ref-eq-1-3"></span>

$$(x^m)^n = x^{mn} = (x^n)^m. \tag{3}$$

<MathBlock id="1.9-2" kind="rem" title="Remarques (1.9)">

$1^\circ$ Si le groupe $G$ n’est pas abélien, pour $x$ et $y$ dans $G$, on a, en général

$$(xy)^n \neq x^n y^n.$$

Cependant, *si $x$ et $y$ commutent*, alors

<span id="ref-eq-1-4"></span>

$$(xy)^n = xy \, xy \dots xy = x^n y^n \tag{4}$$

et

$$x^m y^n = y^n x^m$$

$2^\circ$ Le calcul du produit d’un nombre quelconque d’éléments de $G$, ainsi que de la puissance $n$-ième d’un élément, résulte uniquement de l’application de l’axiome $(\mathrm{G}_1)$ ; *ces règles de calcul sont donc valables dans tout ensemble non vide muni d’une loi de composition interne associative* ; un tel ensemble est appelé un *<GlossaryTerm id="demi-groupe">demi-groupe</GlossaryTerm>*.

Un demi-groupe avec élément neutre est un *monoïde* (ou demi-groupe unitaire). Par exemple, $(\N, +)$ et $(\N, \times)$ sont des monoïdes ; tout groupe est *a fortiori* un monoïde.

<PageRef :page="22" />

$3^\circ$ En notation additive, les formules <MathRef id="eq-1-2">$(2)$</MathRef> et <MathRef id="eq-1-3">$(3)$</MathRef> s’écrivent respectivement :

<span id="ref-eq-1-2p"></span>

$$mx + nx = (m + n)x \tag{2'}$$

<span id="ref-eq-1-3p"></span>

$$n(mx) = nmx \tag{3'}$$

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Seconde occurrence de $(1.9)$">

Seconde occurrence du numéro **$(1.9)$** dans l’ouvrage original (après la *Remarque (1.9)* de la p. 19).

</FoldNote>

*c) Règle de simplification.* Dans un groupe $G$ tout élément $a$ est *simplifiable à droite et à gauche*, c’est-à-dire que, pour $x$ et $y$ dans $G$,

$$xa = ya \Rightarrow x = y \quad \text{et} \quad ax = ay \Rightarrow x = y.$$

En effet, si $a^{-1}$ est l’inverse de $a$,

$$xa = ya \Rightarrow (xa)a^{-1} = (ya)a^{-1}, \quad \text{d’où } x = y \,;$$

on justifie de même la règle de simplification à gauche.

On en déduit que, si $a$ et $b$ sont donnés dans $G$, les équations

$$ax = b \quad \text{et} \quad ya = b$$

ont chacune une solution unique dans $G$, respectivement,

$$x = a^{-1} b \quad \text{et} \quad y = ba^{-1}.$$

*d) Inverse d’un produit.*

<MathBlock id="1.10" kind="rem" title="Remarque (1.10)">

Si, pour $x \in G$, il existe $x'$ (resp<sup>t</sup> $x''$) dans $G$ tel que $xx' = e$ (resp. $x''x = e$), alors $x' = x^{-1}$ (resp<sup>t</sup> $x'' = x^{-1}$).

En effet,

$$xx' = e \Rightarrow x^{-1}(xx') = x^{-1},$$

$$\text{mais} \quad x^{-1}(xx') = (x^{-1}x)x' = ex' = x'$$

(même raisonnement avec $x''$).

</MathBlock>

Compte tenu de la remarque ci-dessus, on a, quels que soient $x$ et $y$ dans $G$ :

<span id="ref-eq-1-5"></span>

$$(xy)^{-1} = y^{-1} x^{-1} \tag{5}$$

puisque $(xy)y^{-1} x^{-1} = x(yy^{-1} x^{-1}) = xx^{-1} = e$.

<MathBlock id="1.11" kind="rem" title="Remarque (1.11)">

Si $x$ et $y$ ne commutent pas, on a $x^{-1} y^{-1} \neq (xy)^{-1}$ ; par contre, si $x$ et $y$ commutent, alors $x^{-1}$ et $y^{-1}$ aussi, car, dans ce cas

$$x^{-1} y^{-1} = (yx)^{-1} = (xy)^{-1} = y^{-1} x^{-1}.$$

</MathBlock>

<PageRef :page="23" />

Par récurrence sur $n$, on vérifie facilement que pour tout $n \geqslant 2$ dans $\N$ et $x_i$ dans $G$ ($1 \leqslant i \leqslant n$),

<span id="ref-eq-1-6"></span>

$$(x_1 x_2 \dots x_n)^{-1} = x_n^{-1} x_{n-1}^{-1} \dots x_1^{-1} \tag{6}$$

En particulier, pour $x \in G$, $(x^n)^{-1} = (x^{-1})^n$ et on écrira :

<span id="ref-eq-1-7"></span>

$$(x^n)^{-1} = x^{-n} \tag{7}$$

D’autre part, pour tout $x \in G$, on pose

<span id="ref-eq-1-8"></span>

$$x^0 = e \tag{8}$$

*On vérifie alors aisément que les formules <MathRef id="eq-1-2">$(2)$</MathRef> et <MathRef id="eq-1-3">$(3)$</MathRef> sont valables quels que soient $m$ et $n$ dans $\Z$.*

### D / Premiers exemples de groupes

<MathBlock id="1.12" kind="ex" title="Exemple (1.12) — Groupes de nombres">

Nous avons déjà signalé que $(\Z, +)$ était un groupe abélien.

$\Q$, $\R$ et $\C$ désignant respectivement l’ensemble des nombres rationnels, réels et complexes, $(\Q, +)$, $(\R, +)$ et $(\C, +)$ sont des groupes abéliens d’élément neutre $0$.

Posons $\Q^* = \Q - \{0\}$ et définissons de même $\R^*$ et $\C^*$ ; alors $(\Q^*, \times)$, $(\R^*, \times)$ et $(\C^*, \times)$ sont des groupes abéliens d’élément neutre $1$. On remarque que $(\Q, \times)$, par exemple, n’est pas un groupe, car $0$ n’a pas d’inverse dans $\Q$.

</MathBlock>

<MathBlock id="1.13" kind="ex" title="Exemple (1.13) — Groupe des classes de congruence de $\Z$, modulo $n$">

Rappelons tout d’abord qu’étant donné un ensemble non vide $E$ et une relation binaire $\mathscr{R}$ définie dans $E$ on dit que $\mathscr{R}$ est une *relation d’équivalence* si $\mathscr{R}$ est :

réflexive : $x \mathscr{R} x$, quel que soit $x \in E$,

symétrique : $x \mathscr{R} y \Rightarrow y \mathscr{R} x$, quels que soient $x, y$ dans $E$,

transitive : $x \mathscr{R} y$ et $y \mathscr{R} z \Rightarrow x \mathscr{R} z$, quels que soient $x, y, z$ dans $E$.

À tout $x \in E$, on associe alors sa *classe d’équivalence* modulo $\mathscr{R}$ : $\cl_{\mathscr{R}}(x)$, souvent notée $\overline{x}$, lorsqu’il n’y a pas d’ambiguïté possible ; avec cette notation :

$$\overline{x} = \{y \in E ;\; y \mathscr{R} x\} \quad \text{et} \quad y \in \overline{x} \Leftrightarrow \overline{y} = \overline{x}.$$

<PageRef :page="24" />

Les classes distinctes de $E$ modulo $\mathscr{R}$ forment une partition de $E$ ; l’ensemble de ces classes s’appelle *l’ensemble quotient* de $E$ par la relation d’équivalence $\mathscr{R}$, on le note $\dfrac{E}{\mathscr{R}}$.

Étant donné $C \in \dfrac{E}{\mathscr{R}}$, pour tout $x \in C$, on peut écrire $C = \overline{x}$ ; autrement dit, tout élément $x \in C$ peut être choisi comme *représentant* de la classe d’équivalence $C$.

Si $\{x_i\}_{i \in I}$ est une famille de représentants des classes distinctes de $E$ modulo $\mathscr{R}$, on pourra écrire

$$\dfrac{E}{\mathscr{R}} = \{\overline{x}_i ;\; i \in I\}.$$

Soit $n > 0$ dans $\Z$. Deux éléments $x$ et $y$ de $\Z$ sont dits *congrus modulo $n$* si $x - y$ est un multiple de $n$ dans $\Z$. Symboliquement, on écrit

$$x \equiv y \pmod{n}$$

$$\text{et} \qquad x \equiv y \pmod{n} \Leftrightarrow \exists k \in \Z, \quad x - y = kn.$$

L’existence de la division euclidienne dans $\Z$ implique que pour tout $x \in \Z$ il existe $q$ et $r$ dans $\Z$, tels que

$$x = nq + r \quad \text{avec } 0 \leqslant r < n \,;$$

$$\text{donc} \qquad \overline{x} = \overline{r} \quad \text{où } 0 \leqslant r < n.$$

On en déduit que $\{0, 1, \dots, n - 1\}$ forme une famille de représentants des classes distinctes modulo $n$.

L’ensemble quotient de $\Z$ par la congruence modulo $n$ est noté <GlossaryTerm id="z-sur-n">$\Zn{n}$</GlossaryTerm>, d’où :

<span id="ref-eq-1-9"></span>

$$\Zn{n} = \{\overline{0}, \overline{1}, \dots, \overline{n - 1}\}. \tag{9}$$

Montrons que la correspondance $\lambda$ définie par

$$\lambda : \Zn{n} \times \Zn{n} \to \Zn{n}$$

$$(\overline{x}, \overline{y}) \mapsto \overline{x + y}$$

est une *application* ; il s’agit de prouver que

$$\overline{x'} = \overline{x} \text{ et } \overline{y'} = \overline{y} \Rightarrow \overline{x' + y'} = \overline{x + y}.$$

$$\overline{x'} = \overline{x} \Leftrightarrow \exists k \in \Z, \quad x' - x = kn,$$

$$\overline{y'} = \overline{y} \Leftrightarrow \exists l \in \Z, \quad y' - y = ln \,;$$

<PageRef :page="25" />

$$\text{alors} \quad (\overline{x'} = \overline{x} \text{ et } \overline{y'} = \overline{y}) \Rightarrow x' + y' - (x + y) = (k + l)n,$$

$$\text{donc} \qquad \overline{x' + y'} = \overline{x + y}.$$

L’application $(\overline{x}, \overline{y}) \mapsto \overline{x + y}$ définit une loi de composition interne dans $\Zn{n}$, induite par l’addition du groupe $\Z$.

Cette loi est encore notée $+$ et quels que soient $\overline{x}, \overline{y}$ dans $\Zn{n}$, on a :

$$\overline{x} + \overline{y} = \overline{x + y}$$

$(\Z, +)$ étant un groupe abélien, on vérifie facilement qu’il en est de même de $\left(\Zn{n}, +\right)$ ; $\overline{0}$ est l’élément neutre de ce groupe ; l’opposé d’un élément $\overline{x}$ est $-\overline{x} = \overline{-x}$.

*En conclusion (compte tenu de <MathRef id="eq-1-9">$(9)$</MathRef>) : le groupe $\Zn{n}$ des classes de congruence de $\Z$ modulo $n$ est un groupe abélien fini d’ordre $n$.*

*Nous verrons plus loin (<MathRef id="2.5">exemple $(2.5)$</MathRef>) une autre interprétation de ce groupe.*

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Opposé dans $\Zn{n}$ (p. 25)">

Dans l’édition imprimée de 1984 (p. 25), l’égalité donnant l’opposé d’une classe est imprimée « $-\overline{x} = -\overline{x}$ » (la barre de classe au second membre ne couvrant que $x$ au lieu de $\overline{-x}$). La notation a été rectifiée en $-\overline{x} = \overline{-x}$.

</FoldNote>

<FoldNote kind="piege" title="Piège classique — Bonne définition d’une loi sur un ensemble quotient $\Zn{n}$">

Pourquoi faut-il vérifier que $\lambda : (\overline{x}, \overline{y}) \mapsto \overline{x + y}$ est « une application » ?

Un élément $\overline{x} \in \Zn{n}$ est un **ensemble** (une classe d’entiers : par exemple dans $\Zn{3}$, $\overline{1} = \overline{4} = \overline{-2} = \{1 + 3k ;\; k \in \Z\}$). Définir $\lambda(\overline{x}, \overline{y})$ à l’aide des *représentants* $x$ et $y$ n’a de sens que si le résultat ne dépend pas du choix de $x \in \overline{x}$ ni de $y \in \overline{y}$.

**Contre-exemple instructif** : sur $\Zn{3}$, l’opération « $\overline{x}^{\overline{y}} = \overline{x^y}$ » (avec représentants entiers positifs) est **mal définie** ! En effet, $\overline{1} = \overline{4}$ dans $\Zn{3}$, et pourtant
$$\overline{2^1} = \overline{2} \neq \overline{1} = \overline{16} = \overline{2^4}.$$
Au contraire, pour l’addition (et de même pour la multiplication $\overline{x} \cdot \overline{y} = \overline{xy}$), changer $x$ en $x + kn$ et $y$ en $y + ln$ ne modifie $x + y$ que d’un multiple de $n$.

</FoldNote>

<MathBlock id="1.14" kind="ex" title="Exemple (1.14) — Groupes symétriques">

Soit $E$ un ensemble non vide ; notons $S_E$ l’ensemble des *permutations* de $E$ (c’est-à-dire des bijections de $E$ dans lui-même). On sait que si $f$ et $g$ sont deux éléments de $S_E$, alors $f \circ g \in S_E$.

La composition des applications est donc une loi de composition interne dans $S_E$ ; or cette loi est associative et si $\id_E$ désigne l’application « identité » de $E$, on a :

$$\id_E \circ f = f \circ \id_E = f, \qquad \text{pour tout } f \in S_E \,;$$

de plus, toute permutation $f$ de $E$ admet une application réciproque $f^{-1}$ qui est aussi une permutation de $E$ et qui vérifie $f^{-1} \circ f = f \circ f^{-1} = \id_E$.

On en déduit que $(S_E, \circ)$ est un groupe.

Le groupe $S_E$ est appelé *groupe symétrique de $E$*.

Si $E = \{1, 2, \dots, n\}$, le groupe symétrique $S_E$ est noté $S_n$ et s’appelle le *groupe symétrique de degré $n$*.

On sait, d’après un résultat d’analyse combinatoire (voir par <PageRef :page="26" /> exemple [16]), que le nombre des permutations d’un ensemble de $n$ éléments est $n!$ ; par suite :

*$S_n$ est un groupe fini d’ordre $n!$*.

</MathBlock>

<MathBlock id="1.15" kind="not" title="Notations (1.15)">

Un élément $\sigma \in S_n$ s’écrit :

$$\sigma = \begin{pmatrix} 1 & 2 & \dots & n \\ \sigma(1) & \sigma(2) & \dots & \sigma(n) \end{pmatrix}.$$

Ainsi, les $6$ éléments de $S_3$ peuvent s’écrire :

$$e = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 2 & 3 \end{pmatrix}, \quad \sigma_1 = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \end{pmatrix}, \quad \sigma_2 = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$$

$$\tau_1 = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 3 & 2 \end{pmatrix}, \quad \tau_2 = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 2 & 1 \end{pmatrix}, \quad \tau_3 = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 1 & 3 \end{pmatrix}.$$

Pour $\sigma$ et $\tau$ dans $S_n$, $\sigma \circ \tau$ est appelé produit de $\tau$ par $\sigma$ dans $S_n$ et

$$\sigma \circ \tau = \begin{pmatrix} 1 & 2 & \dots & n \\ \sigma \circ \tau(1) & \sigma \circ \tau(2) & \dots & \sigma \circ \tau(n) \end{pmatrix},$$

où $\sigma \circ \tau(i) = \sigma(\tau(i))$.

</MathBlock>

Par exemple, dans $S_3$ :

$$\sigma_1 \circ \tau_3 = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 2 & 1 \end{pmatrix} = \tau_2, \qquad \tau_3 \circ \sigma_1 = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 3 & 2 \end{pmatrix} = \tau_1.$$

On remarque que l’on a $\sigma_1 \circ \tau_3 \neq \tau_3 \circ \sigma_1$, donc *le groupe $S_3$ est non abélien* ; on en déduit que, *pour tout $n \geqslant 3$, le groupe symétrique $S_n$ est non abélien*. En effet, si $n > 3$, considérons $\sigma$ et $\tau$ dans $S_n$ tels que les restrictions de $\sigma$ et $\tau$ à $\{1, 2, 3\}$ soient respectivement $\sigma_1$ et $\tau_3$ et tels que $\sigma(i) = \tau(i) = i$, pour tout $i \in \{4, \dots, n\}$ ; on a alors $\sigma \circ \tau \neq \tau \circ \sigma$.

D’une façon générale, *pour tout ensemble non vide $E$ tel que $\card E > 2$, le groupe symétrique $S_E$ est non abélien.*

Si $n = 2$, $S_2 = \{e, \tau\}$ où $e = \begin{pmatrix} 1 & 2 \\ 1 & 2 \end{pmatrix}$ et $\tau = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$.

Le groupe $S_2$ est donc abélien et $\tau^2 = e \Rightarrow \tau^{-1} = \tau$.

*Une étude détaillée des groupes symétriques $S_n$ sera faite au chapitre III.*

<FoldNote kind="piege" title="Piège classique — Sens de lecture de la composition $\sigma \circ \tau$ dans $S_n$">

Pour calculer le produit $\sigma \circ \tau$ dans $S_n$, **on applique d’abord la permutation de droite ($\tau$), puis celle de gauche ($\sigma$)**, conformément à la définition $\sigma \circ \tau(i) = \sigma(\tau(i))$ :

- Pour $\sigma_1 \circ \tau_3$ : $1 \xrightarrow{\tau_3} 2 \xrightarrow{\sigma_1} 3$, $2 \xrightarrow{\tau_3} 1 \xrightarrow{\sigma_1} 2$, $3 \xrightarrow{\tau_3} 3 \xrightarrow{\sigma_1} 1$, ce qui donne $\tau_2$.
- Dans l’autre sens ($\tau_3 \circ \sigma_1$) : $1 \xrightarrow{\sigma_1} 2 \xrightarrow{\tau_3} 1$, $2 \xrightarrow{\sigma_1} 3 \xrightarrow{\tau_3} 3$, $3 \xrightarrow{\sigma_1} 1 \xrightarrow{\tau_3} 2$, ce qui donne $\tau_1 \neq \tau_2$.

Attention : certains ouvrages (notamment anglo-saxons) utilisent la convention opposée (action à droite, lecture de gauche à droite). Toujours vérifier la convention du cours avant de calculer dans $S_n$ !

</FoldNote>

<PermutationLab />

<PageRef :page="27" />

<MathBlock id="1.16" kind="ex" title="Exemple (1.16) — Le groupe des quaternions">

On vérifiera que l’ensemble des $8$ matrices ci-dessous, dans lesquelles $i$ est le nombre complexe tel que $i^2 = -1$, est un groupe par rapport à la multiplication des matrices carrées d’ordre $2$ sur $\C$ :

$$\left\{ \begin{array}{cccc} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, & \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}, & \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}, & \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \\[8pt] \begin{pmatrix} 0 & i \\ i & 0 \end{pmatrix}, & \begin{pmatrix} 0 & -i \\ -i & 0 \end{pmatrix}, & \begin{pmatrix} -i & 0 \\ 0 & i \end{pmatrix}, & \begin{pmatrix} i & 0 \\ 0 & -i \end{pmatrix} \end{array} \right\}.$$

Ce groupe est appelé *groupe des quaternions*, il se note en général $Q_8$ :

*$Q_8$ est un groupe d’ordre $8$, non abélien.*

</MathBlock>

<MathBlock id="1.17" kind="ex" title="Exemple (1.17) — Groupes linéaires. Groupes de matrices">

$E$ étant un espace vectoriel sur un corps commutatif $K$, on démontre en algèbre linéaire que l’ensemble des automorphismes $K$-linéaires de $E$ est un groupe par rapport à la loi $\circ$ de composition des applications.

Ce groupe est appelé *groupe linéaire général de $E$* et est noté $\GL(E)$ [23].

Pour tout entier $n > 0$ et tout corps commutatif $K$, l’ensemble des matrices carrées d’ordre $n$ inversibles est un groupe par rapport à la multiplication des matrices ; ce groupe se note $\GL(n, K)$ et est appelé *groupe linéaire général des matrices carrées inversibles d’ordre $n$ sur $K$* [50] ; il est non abélien pour $n \geqslant 2$.

</MathBlock>

<FoldNote kind="prepa" title="Précision prépa — $\GL(E)$ vs $\GL(n, K)$ : point de vue géométrique et matriciel">

Il importe de bien distinguer les deux groupes introduits en <MathRef id="1.17">$(1.17)$</MathRef> :

- **$\GL(E)$** est le groupe des **automorphismes** d’un $K$-espace vectoriel $E$ (bijections linéaires $E \to E$), muni de la composition $\circ$. Cette définition ne dépend d’aucune base et reste valable en dimension infinie.
- **$\GL(n, K)$** est le groupe des **matrices carrées inversibles** d’ordre $n$ à coefficients dans $K$ (c’est-à-dire de déterminant non nul), muni du produit matriciel.

Dès que $\dim_K E = n$ est finie, le choix d’une base de $E$ fournit un isomorphisme $\GL(E) \simeq \GL(n, K)$ (voir <MathRef id="1.72">l’exemple $(1.72)$</MathRef>). Pour $n \geqslant 2$, ces groupes ne sont jamais abéliens : par exemple dans $\GL(2, \R)$,
$$\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \neq \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}.$$

</FoldNote>

### E / Table de Cayley d’un groupe fini

Soit $E = \{x_1, x_2, \dots, x_n\}$ un ensemble fini de cardinal $n$. Si $E$ est muni d’une loi de composition interne notée $\cdot$, il peut être commode, lorsque $n$ n’est pas trop grand, d’écrire les éléments $x_i x_j$ dans un tableau carré à $n$ lignes et $n$ colonnes tel qu’à l’intersection de la $i$-ème ligne et de la $j$-ème colonne se trouve l’élément $x_i x_j$.

Ce tableau s’appelle la « table de Cayley »<BookFootnote num="2" text="A. Cayley, mathématicien britannique (1821-1895), ayant le premier suggéré l’écriture de ces tables." />, de l’ensemble $(E, \cdot)$.

<PageRef :page="28" />

La méthode s’applique en particulier dans le cas des groupes finis ; si le groupe est multiplicatif (resp<sup>t</sup> additif), la table s’appelle table de multiplication (resp<sup>t</sup> d’addition).

<MathBlock id="1.18" kind="ex" title="Exemple (1.18)">

Tables des groupes (additifs) $\Zn{2}$, $\Zn{3}$, $\Zn{4}$ :

<CayleyTable :group="BOOK_TABLES_T1.z2" caption="Table du groupe additif ℤ/(2)" />

<CayleyTable :group="BOOK_TABLES_T1.z3" caption="Table du groupe additif ℤ/(3)" />

<CayleyTable :group="BOOK_TABLES_T1.z4" caption="Table du groupe additif ℤ/(4)" />

Les trois groupes ci-dessus étant *abéliens*, chacune des tables est *symétrique par rapport à la diagonale principale* du carré (diagonale nord-ouest, sud-est). Cette symétrie n’existe plus dans le cas d’un groupe non abélien, tel qu’en particulier $S_3$, dont la table est écrite ci-dessous en tenant compte des <MathRef id="1.15">notations $(1.15)$</MathRef> :

<span id="ref-table-10"></span>

<CayleyTable :group="BOOK_TABLES_T1.table10" caption="Table (10) — Groupe symétrique S₃" />

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Coquilles d’impression dans les tables de $(1.18)$ (p. 28)">

Deux coquilles typographiques figurent dans les en-têtes des tables imprimées page 28 :

- Dans la table de $\Zn{2}$, l’en-tête de la première ligne est imprimé `0` (sans barre de classe) au lieu de $\overline{0}$.
- Dans la table $(10)$ de $S_3$, la case en haut à gauche (signe d’opération) est imprimée `0` au lieu du symbole $\circ$.

</FoldNote>

<MicroChallenge title="Micro-défi — Un carré latin définit-il toujours un groupe ?" hint="Observez quelles propriétés d’un groupe sont lues directement sur les lignes et colonnes d’une table, et quelle propriété exige de croiser trois éléments $a, b, c$.">

Soit $E = \{e, a, b, c, d\}$ muni d’une table de multiplication où $e$ est élément neutre et où chaque élément apparaît exactement une fois dans chaque ligne et dans chaque colonne (un *carré latin*). À votre avis, une telle table définit-elle automatiquement un groupe ? Si non, quel axiome de <MathRef id="1.3">la définition $(1.3)$</MathRef> peut encore échouer ?

<template #answer>

**Non !** La structure de carré latin (avec ligne et colonne de $e$ reproduisant l’en-tête) garantit l’existence de l’élément neutre et l’existence d’inverses (en fait la résolution unique de $ax = b$ et $ya = b$), **mais pas l’associativité** $(\mathrm{G}_1)$ !

À partir de l’ordre $5$, on peut construire des carrés latins avec neutre qui ne sont pas associatifs, comme <MathRef id="table-12">la table $(12)$</MathRef> de <MathRef id="1.19">la remarque $(1.19)\ 2^\circ$</MathRef> ci-dessous où $(ab)c = dc = a \neq c = ad = a(bc)$. *(Pour un ordre $n \leqslant 4$, on peut montrer en revanche que tout carré latin muni d’un neutre est automatiquement associatif.)*

</template>

</MicroChallenge>

<MathBlock id="1.19" kind="rem" title="Remarques (1.19)">

$1^\circ$ Un groupe fini peut éventuellement être défini par la donnée d’une table de multiplication. Considérons par exemple la table suivante :

<span id="ref-table-11"></span>

<CayleyTable :group="BOOK_TABLES_T1.table11" caption="Table (11)" />

<PageRef :page="29" />

L’examen de la $1^{\text{re}}$ ligne et de la $1^{\text{re}}$ colonne montre que $e$ est *élément unité* ; d’autre part, $a^2 = b^2 = c^2 = e$ implique que $a, b, c$ *sont inversibles* et chacun d’eux est égal à son inverse. La table étant symétrique par rapport à la diagonale principale, la loi de composition considérée est commutative. Il reste à vérifier que la loi est *associative*, ce qui, ici, ne présente pas de difficultés ; ainsi *<MathRef id="table-11">la table $(11)$</MathRef> définit un groupe abélien d’ordre $4$*.

$2^\circ$ Une table de Cayley dont chaque ligne et chaque colonne est formée par les mêmes éléments dans un certain ordre est appelée un *carré latin* [20].

Dans un groupe, quels que soient $a$ et $b$, on sait qu’il existe un unique $x$ et un unique $y$ tels que

$$ax = b \quad \text{et} \quad ya = b \,;$$

on en déduit que *la table de multiplication d’un groupe fini est toujours un carré latin* ; mais la *réciproque est fausse*, car un carré latin ne vérifie pas toujours la règle d’associativité.

Considérons par exemple le carré latin :

<span id="ref-table-12"></span>

<CayleyTable :group="BOOK_TABLES_T1.table12" caption="Table (12)" />

On a $(ab)c = dc = a$ et $a(bc) = ad = c$, <MathRef id="table-12">la table $(12)$</MathRef> ne définit donc pas un groupe.

</MathBlock>

<FoldNote kind="intuition" title="Intuition — Pourquoi tout groupe fini donne un carré latin, mais pas réciproquement">

Dans la table de Cayley d’un ensemble fini $(E, \cdot)$, la ligne de $a$ énumère l’application $x \mapsto ax$ (translation à gauche) et la colonne de $a$ énumère $y \mapsto ya$ (translation à droite). Dire que la table est un carré latin signifie que ces deux applications sont bijectives, autrement dit que les équations $ax = b$ et $ya = b$ ont chacune une solution unique.

- **Dans un groupe**, c’est vrai grâce aux inverses : $x = a^{-1}b$ et $y = ba^{-1}$.
- **Réciproquement**, une table en carré latin avec neutre $e$ (appelée *boucle*) ne garantit pas l’associativité : tester $(xy)z = x(yz)$ sur une table d’ordre $n$ requiert jusqu’à $n^3$ vérifications, d’où l’intérêt d’identifier un groupe via des réalisations concrètes (comme $V \simeq \Zn{2} \times \Zn{2}$ au <MathRef id="1.86">§ 4</MathRef>).

</FoldNote>

<CayleyLab />

---

*(Note originale de la page 19)* — `(1)` Du nom du mathématicien norvégien N. H. Abel (1802-1829).

*(Note originale de la page 27)* — `(2)` A. Cayley, mathématicien britannique (1821-1895), ayant le premier suggéré l’écriture de ces tables.
