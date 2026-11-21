<script setup>
const steps_1_24 = [
  {
    title: '1. Sens direct ($\\implies$) : d’un sous-groupe vers la condition $(15)$',
    body: 'On suppose $H \\leqslant G$ et on prend $(x, y) \\in H \\times H$. Par stabilité par passage à l’inverse $(14)$, on a $y^{-1} \\in H$ ; puis par stabilité par produit $(13)$ appliquée au couple $(x, y^{-1})$, on obtient $xy^{-1} \\in H$.',
    why: 'Ce sens est immédiat car les axiomes $(13)$ et $(14)$ de la définition $(1.20)$ permettent précisément de former le produit $x \\cdot y^{-1}$.'
  },
  {
    title: '2. Réciproque ($\\Longleftarrow$), partie 1 : existence du neutre $e \\in H$',
    body: 'On suppose $(15)$ vérifiée. Comme $H \\neq \\varnothing$, il existe au moins un élément $x \\in H$. En appliquant $(15)$ au couple $(x, x) \\in H \\times H$, on obtient $xx^{-1} = e \\in H$.',
    why: 'C’est ici que l’hypothèse « $H$ non vide » est indispensable : sans un premier élément $x \\in H$, on ne pourrait pas former le couple $(x, x)$ pour fabriquer $e$.'
  },
  {
    title: '3. Réciproque ($\\Longleftarrow$), partie 2 : stabilité par inverse $(14)$',
    body: 'Maintenant que $e \\in H$, pour tout $x \\in H$, le couple $(e, x)$ appartient à $H \\times H$. La condition $(15)$ donne $ex^{-1} = x^{-1} \\in H$.',
    why: 'Ayant déjà produit $e$ dans $H$, on isole $x^{-1}$ comme le quotient de $e$ par $x$.'
  },
  {
    title: '4. Réciproque ($\\Longleftarrow$), partie 3 : stabilité par produit $(13)$',
    body: 'Soit $(x, y) \\in H \\times H$. D’après l’étape précédente, $y^{-1} \\in H$, donc $(x, y^{-1}) \\in H \\times H$. En appliquant $(15)$ à ce nouveau couple, on obtient $x(y^{-1})^{-1} = xy \\in H$.',
    why: 'L’astuce finale consiste à réécrire $xy$ sous la forme $x(y^{-1})^{-1}$ : une fois $y^{-1} \\in H$ acquis, la condition $(15)$ redonne la stabilité par produit.'
  }
]

const steps_1_27 = [
  {
    title: '1. Ramener deux éléments dans un même sous-groupe $H_k$',
    body: 'Soient $x, y \\in \\bigcup_{i \\in I} H_i$. Il existe $j, k \\in I$ tels que $x \\in H_j$ et $y \\in H_k$. Comme la famille $\{H_i\}_{i \\in I}$ est totalement ordonnée par l’inclusion, on a $H_j \\subseteq H_k$ ou $H_k \\subseteq H_j$ (par exemple $H_j \\subseteq H_k$).',
    why: 'L’hypothèse d’ordre total garantit qu’un des deux sous-groupes englobe l’autre : $x$ et $y$ appartiennent alors simultanément au plus grand des deux.'
  },
  {
    title: '2. Conclure par le critère $(1.24)$',
    body: 'Puisque $x, y \\in H_k$ et $H_k \\leqslant G$, on a $xy^{-1} \\in H_k \\subseteq \\bigcup_{i \\in I} H_i$. De plus la réunion est non vide car $I \\neq \\varnothing$ (ou $e \\in H_i$), donc d’après le théorème $(1.24)$, $\\bigcup_{i \\in I} H_i \\leqslant G$.',
    why: 'C’est précisément cette comparabilité par inclusion qui manque pour deux sous-groupes transverses comme $3\\Z$ et $8\\Z$ dans la remarque $(1.26)$.'
  }
]

const steps_1_38 = [
  {
    title: '1. Poser $H$ et vérifier $S \\subseteq H$',
    body: 'On note $H = \\{x_1 x_2 \\dots x_n ;\\; n \\in \\N^*,\\; x_i \\in S \\text{ ou } x_i^{-1} \\in S\\}$. Pour tout $x \\in S$, en prenant un produit à $n = 1$ facteur ($x_1 = x$), on a $x \\in H$, d’où $S \\subseteq H$ (et $H \\neq \\varnothing$ puisque $S \\neq \\varnothing$).',
    why: 'On raisonne par double inclusion : d’abord montrer que $H$ est un sous-groupe contenant $S$ (donc $\\langle S \\rangle \\subseteq H$), puis que tout sous-groupe contenant $S$ contient $H$ (donc $H \\subseteq \\langle S \\rangle$).'
  },
  {
    title: '2. Prouver que $H$ est un sous-groupe ($\\langle S \\rangle \\subseteq H$)',
    body: 'Soient $x = x_1 \\dots x_n$ et $y = y_1 \\dots y_p$ dans $H$. Par la formule $(6)$ d’inversion d’un produit, $y^{-1} = y_p^{-1} \\dots y_1^{-1}$, donc\n\n$$xy^{-1} = x_1 x_2 \\dots x_n y_p^{-1} y_{p-1}^{-1} \\dots y_1^{-1}.$$\n\nChaque facteur $y_j^{-1}$ vérifie encore $y_j^{-1} \\in S$ ou $(y_j^{-1})^{-1} = y_j \\in S$, donc $xy^{-1} \\in H$. D’après $(1.24)$, $H \\in \\mathscr{H}_S$, d’où $\\langle S \\rangle \\subseteq H$.',
    why: 'L’inversion renverse l’ordre du mot et échange chaque lettre avec son inverse : comme l’alphabet $S \\cup S^{-1}$ est symétrique par passage à l’inverse, $xy^{-1}$ reste un mot du même type.'
  },
  {
    title: '3. Inclusion réciproque ($H \\subseteq \\langle S \\rangle$)',
    body: 'Tout sous-groupe $K$ contenant $S$ (et en particulier $K = \\langle S \\rangle$) contient aussi $x^{-1}$ pour tout $x \\in S$ par stabilité par inverse, puis par récurrence tout produit fini $x_1 x_2 \\dots x_n$ de tels éléments par stabilité par produit. Donc $H \\subseteq \\langle S \\rangle$, d’où $H = \\langle S \\rangle$.',
    why: 'Cette étape traduit le fait que $\\langle S \\rangle$ est le plus petit sous-groupe contenant $S$ (remarque $(1.37)$) : aucun élément de $H$ ne peut être évité.'
  }
]

const steps_1_47 = [
  {
    title: '1. Sens direct ($\\implies$), inclusion $KH \\subseteq HK$',
    body: 'Supposons $HK \\leqslant G$ et prenons $x \\in H$, $y \\in K$. Comme $H$ et $K$ sont des sous-groupes, $x^{-1} \\in H$ et $y^{-1} \\in K$, donc $x^{-1}y^{-1} \\in HK$. Comme $HK$ est stable par passage à l’inverse, $(x^{-1}y^{-1})^{-1} = yx \\in HK$, soit $KH \\subseteq HK$.',
    why: 'L’astuce repose sur la formule $(ab)^{-1} = b^{-1}a^{-1}$ qui échange l’ordre des facteurs lors du passage à l’inverse !'
  },
  {
    title: '2. Sens direct ($\\implies$), inclusion $HK \\subseteq KH$',
    body: 'Soit $z \\in HK$. Comme $HK \\leqslant G$, on a $z^{-1} \\in HK$, donc il existe $x\' \\in H$ et $y\' \\in K$ tels que $z^{-1} = x\'y\'$. En repassant à l’inverse, $z = (z^{-1})^{-1} = {y\'}^{-1}{x\'}^{-1} \\in KH$ (puisque ${y\'}^{-1} \\in K$ et ${x\'}^{-1} \\in H$). Ainsi $HK \\subseteq KH$, d’où $HK = KH$.',
    why: 'La même inversion appliquée à $z^{-1}$ permet de retourner l’ordre d’écriture de tout élément de $HK$.'
  },
  {
    title: '3. Réciproque ($\\Longleftarrow$) : vérifier $(1.24)$ sur $HK$',
    body: 'Supposons $HK = KH$. Comme $e = e \\cdot e \\in HK$, on a $HK \\neq \\varnothing$. Soient $xy, x_1 y_1 \\in HK$ ($x, x_1 \\in H$ ; $y, y_1 \\in K$). On regroupe :\n\n$$(xy)(x_1 y_1)^{-1} = x(y y_1^{-1} x_1^{-1}).$$\n\nPuisque $y y_1^{-1} \\in K$ et $x_1^{-1} \\in H$, on a $y y_1^{-1} x_1^{-1} \\in KH = HK$ : il existe donc $(x_2, y_2) \\in H \\times K$ tel que $y y_1^{-1} x_1^{-1} = x_2 y_2$. On conclut que $(xy)(x_1 y_1)^{-1} = (xx_2)y_2 \\in HK$, donc $HK \\leqslant G$ par $(1.24)$.',
    why: 'L’égalité d’ensembles $KH = HK$ sert exactement à « faire traverser » $x_1^{-1} \\in H$ à gauche de $y y_1^{-1} \\in K$, quitte à changer les représentants en $(x_2, y_2)$.'
  }
]

const steps_1_51 = [
  {
    title: '1. Sens direct ($\\implies$) : $H \\cap K = (0) \\implies$ unicité de la somme',
    body: 'Supposons $H \\cap K = (0)$ et soient $z = x + y = x\' + y\'$ avec $x, x\' \\in H$ et $y, y\' \\in K$. On regroupe par sous-groupe :\n\n$$x - x\' = y\' - y.$$\n\nLe membre de gauche appartient à $H$ et celui de droite à $K$, donc cette valeur commune est dans $H \\cap K = (0)$, d’où $x = x\'$ et $y = y\'$.',
    why: 'Égaler deux décompositions et séparer les termes de $H$ et de $K$ de part et d’autre du signe $=$ force la différence à tomber dans l’intersection $H \\cap K$.'
  },
  {
    title: '2. Réciproque ($\\Longleftarrow$) : unicité $\\implies H \\cap K = (0)$',
    body: 'Soit $z \\in H \\cap K$. Alors $z \\in H + K$ s’écrit à la fois $z = z + 0$ (avec $z \\in H$, $0 \\in K$) et $z = 0 + z$ (avec $0 \\in H$, $z \\in K$). Par unicité de la décomposition, on obtient nécessairement $z = 0$, soit $H \\cap K = (0)$.',
    why: 'Un élément commun à $H$ et $K$ peut être placé indifféremment dans la composante $H$ ou dans la composante $K$ ; l’unicité impose alors qu’il soit nul.'
  }
]
</script>

# Chapitre premier — Structure de groupe

<PageRef :page="29" />

## 2 — Sous-groupe

Sauf mention contraire, $G$ désigne toujours un groupe multiplicatif d’élément neutre $e$.

### A / Notion de sous-groupe. Propriétés élémentaires

<MathBlock id="1.20" kind="def" title="Définition (1.20)">

$G$ étant un groupe, une partie non vide $H$ de $G$ est un *sous-groupe* de $G$ si

<span id="ref-eq-1-13"></span>
<span id="ref-eq-1-14"></span>

$$\begin{align}
&(x, y) \in H \times H \Rightarrow xy \in H \tag{13} \\
&x \in H \Rightarrow x^{-1} \in H \tag{14}
\end{align}$$

</MathBlock>

<PageRef :page="30" />

<MathBlock id="1.21" kind="rem" title="Remarques (1.21)">

$1^\circ$ Les conditions <MathRef id="eq-1-13">$(13)$</MathRef> et <MathRef id="eq-1-14">$(14)$</MathRef> impliquent $e \in H$.

$2^\circ$ Tout sous-groupe $H$ d’un groupe $G$ est un groupe relativement à la loi de composition induite dans $H$ par celle de $G$.

$3^\circ$ Un groupe ayant plus d’un élément a au moins deux sous-groupes, $G$ et le sous-groupe réduit à l’élément neutre, *que l’on notera <GlossaryTerm id="groupe-trivial">$(e)$</GlossaryTerm>*.

</MathBlock>

<MathBlock id="1.22" kind="def" title="Définition (1.22)">

On appelle *<GlossaryTerm id="sous-groupe-propre">sous-groupe propre</GlossaryTerm>* d’un groupe $G$ tout sous-groupe de $G$ *distinct* de $G$.

</MathBlock>

Dans tout groupe $G$ ayant plus d’un élément, $(e)$ est un sous-groupe propre.

<MathBlock id="1.23" kind="not" title="Notations (1.23)">

On écrira :

$$\begin{aligned}
H \leqslant G &\quad \text{pour exprimer que } H \text{ } \textit{est un sous-groupe de} \text{ } G, \\
H < G &\quad \text{si } H \text{ est un sous-groupe } \textit{propre} \text{ de } G.
\end{aligned}$$

</MathBlock>

<FoldNote kind="piege" title="Piège classique — Ne pas oublier $H \neq \varnothing$ et la convention de « sous-groupe propre »">

Deux précautions essentielles en prépa dès qu’on manipule les définitions <MathRef id="1.20">$(1.20)$</MathRef>–<MathRef id="1.23">$(1.23)$</MathRef> :

1. **Vérifier $H \neq \varnothing$ (en pratique $e \in H$)** : l’ensemble vide $\varnothing$ satisfait par vacuité aux implications $(13)$, $(14)$ et $(15)$, mais ce n’est **jamais** un sous-groupe (un groupe doit contenir un élément neutre). Toujours commencer une preuve de sous-groupe en justifiant $e \in H$ !
2. **Convention de « sous-groupe propre »** : dans cet ouvrage, $H < G$ signifie simplement $H \neq G$ (ainsi $(e)$ est un sous-groupe propre dès que $|G| > 1$). Attention : certains manuels récents appellent *propre* un sous-groupe $H$ tel que $(e) \subsetneq H \subsetneq G$ (excluant $(e)$).

</FoldNote>

<MathBlock id="1.24" kind="thm" title="Théorème (1.24)">

*Soit $H$ une partie non vide d’un groupe $G$, alors $H$ est un sous-groupe de $G$ si et seulement si*

<span id="ref-eq-1-15"></span>

$$\forall (x, y) \, \bigl[(x, y) \in H \times H \Rightarrow xy^{-1} \in H\bigr] \tag{15}$$

</MathBlock>

<ProofBlock :steps="steps_1_24">

$1^\circ$ Supposons $H \leqslant G$ ; soit $(x, y) \in H \times H$, alors $y \in H \Rightarrow y^{-1} \in H$, d’après <MathRef id="eq-1-14">$(14)$</MathRef> ; par suite

$$(x, y^{-1}) \in H \times H \Rightarrow xy^{-1} \in H, \quad \text{d’après } (13) \,;$$

on en déduit <MathRef id="eq-1-15">$(15)$</MathRef>.

$2^\circ$ Supposons <MathRef id="eq-1-15">$(15)$</MathRef> vérifié ; soit $(x, y) \in H \times H$.

$$\begin{aligned}
x \in H \Rightarrow (x, x) \in H \times H, &\quad \text{d’où } xx^{-1} = e \in H \,; \\
e \in H \text{ et } x \in H \Rightarrow (e, x) \in H \times H, &\quad \text{d’où } ex^{-1} = x^{-1} \in H \,;
\end{aligned}$$

on en déduit que $(15) \Rightarrow (14)$. Par suite,

$$(x, y) \in H \times H \Rightarrow (x, y^{-1}) \in H \times H, \quad \text{d’où } xy \in H,$$

donc $(15) \Rightarrow (13)$.

</ProofBlock>

<PageRef :page="31" />

<MathBlock id="rem-p31" kind="rem" title="Remarque">

En notation additive, <MathRef id="eq-1-15">$(15)$</MathRef> s’écrit :

<span id="ref-eq-1-15p"></span>

$$\forall (x, y) \, \bigl[(x, y) \in H \times H \Rightarrow (x - y) \in H\bigr] \tag{15'}$$

</MathBlock>

<MathBlock id="1.25" kind="prop" title="Proposition (1.25)">

*Soit $G$ un groupe et $\{H_i\}_{i \in I}$ une famille de sous-groupes de $G$ ; alors, quel que soit l’ensemble non vide $I$, $\bigcap_{i \in I} H_i$ est un sous-groupe de $G$.*

</MathBlock>

Démonstration laissée au lecteur.

<MathBlock id="1.26" kind="rem" title="Remarque (1.26)">

En général, $\bigcup_{i \in I} H_i$ n’est pas un sous-groupe de $G$. En effet, on peut vérifier, par exemple, que dans le groupe $(\Z, +)$, $3\Z = \{3x ;\; x \in \Z\}$ et $8\Z$ sont des sous-groupes ; or $3 + 8 = 11$ et $11 \notin 3\Z \cup 8\Z$, donc $3\Z \cup 8\Z$ n’est pas un sous-groupe de $\Z$.

</MathBlock>

On a cependant le résultat suivant :

<MathBlock id="1.27" kind="prop" title="Proposition (1.27)">

*Si, dans un groupe $G$, $\{H_i\}_{i \in I}$ est une famille de sous-groupes totalement ordonnée par l’inclusion, alors $\bigcup_{i \in I} H_i$ est un sous-groupe de $G$.*

</MathBlock>

<ProofBlock :steps="steps_1_27">

Soient $x$ et $y$ dans $\bigcup_{i \in I} H_i$ ; il existe $j$ et $k$ dans $I$ tels que $x \in H_j$ et $y \in H_k$. La famille des $H_i$ étant totalement ordonnée par l’inclusion, on a $H_j \subseteq H_k$ ou $H_k \subseteq H_j$. Plaçons-nous, par exemple, dans le premier cas ; on a alors $x$ et $y$ dans $H_k$, d’où $xy^{-1}$ dans $H_k$ et par suite $xy^{-1} \in \bigcup_{i \in I} H_i$. On en conclut, d’après <MathRef id="1.24">le théorème $(1.24)$</MathRef>, que $\bigcup_{i \in I} H_i$ est un sous-groupe de $G$.

</ProofBlock>

<FoldNote kind="intuition" title="Intuition — Intersection (toujours stable) vs réunion (presque jamais stable)">

Pour deux sous-groupes $H$ et $K$ de $G$, on retient une opposition très nette (analogue à celle des sous-espaces vectoriels !) :

- **Intersection** : $H \cap K$ (et plus généralement toute intersection non vide $\bigcap_{i \in I} H_i$, <MathRef id="1.25">$(1.25)$</MathRef>) est **toujours** un sous-groupe de $G$.
- **Réunion** : $H \cup K$ est un sous-groupe de $G$ **si et seulement si $H \subseteq K$ ou $K \subseteq H$** ! En effet, si aucun n’est inclus dans l’autre, prenons $x \in H \setminus K$ et $y \in K \setminus H$ : alors $xy$ ne peut être ni dans $H$ (sinon $y = x^{-1}(xy) \in H$) ni dans $K$ (sinon $x = (xy)y^{-1} \in K$). La <MathRef id="1.27">proposition $(1.27)$</MathRef> généralise exactement ce fait aux familles emboîtées.

</FoldNote>

### B / Exemples de sous-groupes

<MathBlock id="1.28" kind="ex" title="Exemple (1.28) — Sous-groupe de $(\Z, +)$">

*Pour tout entier $n \in \N$, $n\Z = \{nx ;\; x \in \Z\}$ est un sous-groupe de $\Z$ et tout sous-groupe de $\Z$ est de cette forme.*

On vérifie facilement que pour tout $n \in \N$, $n\Z$ est un sous-groupe de $\Z$. Montrons que, quel que soit $H$ sous-groupe de $\Z$, il existe un *unique* $n \in \N$ tel que $H = n\Z$.

Si $H = (0)$, $H = 0\Z$ ; supposons $H \neq (0)$. Il existe $x \neq 0$ dans $H$ ; $x \in H$ implique $-x \in H$ ; on en déduit qu’il existe au moins un entier strictement positif dans $H$. Posons <PageRef :page="32" /> $E = \{x \in H ;\; x > 0\}$ ; $E$ est une partie non vide de $\N$, donc il existe dans $E$ un plus petit élément $n$ ; on en déduit que $n\Z \subseteq H$.

D’autre part, soit $x \in H$ ; supposons $x > 0$, alors $x \in E$, donc $x \geqslant n$. La division euclidienne dans $\Z$ permet d’écrire :

$$\begin{aligned}
&x = nq + r, \quad \text{avec } q \text{ et } r \text{ dans } \Z \quad \text{et} \quad 0 \leqslant r < n. \\
&n \in H \Rightarrow nq \in H, \quad \text{par suite } x - nq = r \in H.
\end{aligned}$$

Or on a $0 \leqslant r < n$ et $n$ est le plus petit entier positif contenu dans $H$, donc $r = 0$ et $x \in n\Z$ ; on en conclut que $H = n\Z$.

D’autre part, $m$ et $n$ entiers positifs et $m\Z = n\Z$ implique $m = n$, d’où l’unicité de l’entier $n$ tel que $H = n\Z$.

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Fonte de $\N$ en $(1.28)$">

Dans l’édition imprimée de 1984 (p. 31, premier et troisième alinéas de l’exemple $(1.28)$), il est imprimé « Pour tout entier $n \in N$ » puis « un *unique* $n \in N$ » avec `$N$` en italique maigre au lieu du gras $\N$ (normalisé ici en $\N$).

</FoldNote>

<FoldNote kind="prepa" title="Précision prépa — Pourquoi $n\Z$ ? Le rôle du bon ordre de $\N$ et de la division euclidienne">

La classification des sous-groupes de $(\Z, +)$ en <MathRef id="1.28">$(1.28)$</MathRef> est un classique absolu qui repose sur deux propriétés fondamentales des entiers :

1. **Propriété de bon ordre de $\N$** : toute partie non vide de $\N$ admet un plus petit élément. Si $H \neq (0)$, l’astuce de symétrie ($x \in H \implies -x \in H$) garantit que $E = H \cap \N^*$ est non vide, donc possède un minimum $n \geqslant 1$.
2. **Division euclidienne dans $\Z$** : pour tout $x \in H$ (positif ou négatif), on écrit $x = nq + r$ avec $0 \leqslant r < n$. Comme $x \in H$ et $nq \in n\Z \subseteq H$, on obtient $r = x - nq \in H$ ; la minimalité de $n$ dans $H \cap \N^*$ force alors $r = 0$, soit $x \in n\Z$.

*Application immédiate* : pour $a, b \in \Z$ non tous deux nuls, $a\Z + b\Z$ est un sous-groupe de $\Z$, donc s’écrit $d\Z$ avec $d = \pgcd(a, b)$ (identité de Bézout) ; de même $a\Z \cap b\Z = m\Z$ avec $m = \ppcm(a, b)$.

</FoldNote>

<MathBlock id="1.29" kind="ex" title="Exemples (1.29)">

$1^\circ$ Les groupes additifs $\Z$, $\Q$, $\R$, $\C$ sont tels que

$$\Z < \Q < \R < \C \quad (\text{notation } (1.23)).$$

$2^\circ$ Les groupes multiplicatifs $\Q^*$, $\R^*$, $\C^*$ vérifient :

$$\Q^* < \R^* < \C^*.$$

$3^\circ$ Si $\Q^*_+ = \{x \in \Q ;\; x > 0\}$ et $\R^*_+ = \{x \in \R ;\; x > 0\}$, on a :

$$\Q^*_+ < \Q^*, \quad \R^*_+ < \R^* \quad \text{et} \quad \Q^*_+ < \R^*_+.$$

</MathBlock>

Les exemples ci-dessus résultent des propriétés algébriques élémentaires de $\Z$, $\Q$, $\R$ et $\C$.

<MathBlock id="1.30" kind="ex" title="Exemples (1.30)">

Soit $U$ l’ensemble des *nombres complexes de module $1$* ; $|z|$ désignant le module de $z \in \C$, on sait que $|zz'| = |z|\,|z'|$ quels que soient $z$ et $z'$ dans $\C$ ; on vérifie alors facilement que *$U$ est un sous-groupe multiplicatif de $\C^*$*.

D’autre part, pour tout entier $n > 0$, désignons par $U_n$ l’ensemble des *racines $n$-ième de l’unité dans $\C$*.

On sait que $U_n = \{z_0, z_1, \dots, z_{n-1}\}$ où $z_k = \cos \dfrac{2k\pi}{n} + i \sin \dfrac{2k\pi}{n}$.

On a $z_0 = 1$, $U_n \subset U$ et $\card U_n = n$ ; d’autre part, quels que soient $z_k$ et $z_{k'}$ dans $U_n$ :

$$\begin{aligned}
(z_k^n = 1 \text{ et } z_{k'}^n = 1) &\Rightarrow (z_k z_{k'})^n = 1 \\
\text{et } z_k^n = 1 &\Rightarrow (z_k^{-1})^n = 1 \,;
\end{aligned}$$

par suite, *$U_n$ est un sous-groupe fini d’ordre $n$ de $U$, donc de $\C^*$*.

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Mot omis en $(1.30)$">

Dans l’édition imprimée de 1984 (p. 32), la préposition « de » est omise : il est imprimé « *$U$ est un sous-groupe multiplicatif $\C^*$* ». Elle a été rétablie ici.

</FoldNote>

<FoldNote kind="prepa" title="Précision prépa — Cercle unité, exponentielle complexe et formule de Moivre">

En notations de prépa, on écrit souvent $\mathbb{U}$ (ou $U$) pour le cercle unité $\{z \in \C ;\; |z| = 1\}$ et $\mathbb{U}_n$ pour les racines $n$-ièmes de l’unité :

- L’application $\theta \mapsto e^{i\theta} = \cos\theta + i\sin\theta$ vérifie $e^{i\theta} e^{i\theta'} = e^{i(\theta+\theta')}$ : c’est un morphisme surjectif de $(\R, +)$ sur $(U, \times)$.
- D’après la **formule de Moivre**, $z_k = e^{2ik\pi/n}$ vérifie $z_k^n = e^{2ik\pi} = 1$, et $U_n = \{z_0, \dots, z_{n-1}\}$ s’interprète géométriquement comme les sommets d’un polygone régulier à $n$ côtés inscrit dans le cercle unité. De plus, $z_k = z_1^k$ montre que $U_n = \langle e^{2i\pi/n} \rangle$ est un groupe cyclique d’ordre $n$.

</FoldNote>

<RootsUnityLab />

<PageRef :page="33" />

<MathBlock id="1.31" kind="ex" title="Exemple (1.31)">

Le groupe linéaire général $\GL(E)$ d’un espace vectoriel $E$ [<MathRef id="1.17">exemple $(1.17)$</MathRef>] est un *sous-groupe du groupe symétrique $S_E$*.

</MathBlock>

<MathBlock id="1.32" kind="ex" title="Exemple (1.32)">

Considérons l’espace vectoriel euclidien $\R^2$ ; le produit scalaire de deux vecteurs $x$ et $y$ de $\R^2$ étant noté $(x \mid y)$, on appelle *similitude* de $\R^2$ tout élément $u \in \GL(\R^2)$ tel qu’il existe $\lambda_u \in \R^*_+$ vérifiant :

<span id="ref-eq-1-16"></span>

$$(u(x) \mid u(y)) = \lambda_u (x \mid y), \quad \forall (x, y) \in \R^2 \times \R^2 \tag{16}$$

$\lambda_u$ s’appelle le *rapport à la similitude $u$*.

On démontre [23] que l’ensemble des similitudes de $\R^2$ forme un *sous-groupe de $\GL(\R^2)$*, noté $\operatorname{GO}(\R^2)$ et appelé *groupe des similitudes linéaires de $\R^2$*.

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Formulation en $(1.32)$">

Dans l’édition imprimée de 1984 (p. 33), il est imprimé mot pour mot « $\lambda_u$ s’appelle le *rapport à la similitude $u$* » (coquille probable pour « *rapport de la similitude $u$* »). Le texte original est conservé tel quel.

</FoldNote>

<MathBlock id="1.33" kind="rem" title="Remarque (1.33)">

$1^\circ$ La définition du groupe $\operatorname{GO}(\R^2)$ se généralise à celle du groupe $\operatorname{GO}(E)$ des similitudes d’un espace vectoriel euclidien $E$ de dimension finie quelconque [23].

$2^\circ$ La notion de similitude peut aussi être envisagée dans le plan affine euclidien ([14] et [23]) et plus généralement dans un espace affine euclidien $\mathscr{E}$ de dimension finie quelconque, d’où la notion de *groupe des similitudes affines de $\mathscr{E}$* [23].

</MathBlock>

<MathBlock id="1.34" kind="ex" title="Exemple (1.34)">

Soit $P$ le plan affine euclidien ; on désigne par $d(x, y)$ la distance de deux points $x$ et $y$ du plan $P$. On appelle *isométrie* du plan $P$ toute application $f : P \to P$ qui conserve les distances, c’est-à-dire telle que :

$$\forall (x, y) \in P \times P, \quad d(f(x), f(y)) = d(x, y).$$

On démontre ([1], exercice 26, chap. $\mathrm{I}^{\mathrm{er}}$) que toute isométrie est une bijection, donc appartient au groupe symétrique $S_P$ et que l’ensemble $\mathscr{I}(2)$ de ces isométries est un *sous-groupe de $S_P$*, appelé *groupe des isométries du plan $P$*.

On définit de façon analogue le groupe $\mathscr{I}(3)$ des isométries de l’espace affine euclidien de dimension $3$ ([1] et [23]), et plus généralement on peut considérer le groupe $\mathscr{I}(n)$ des isométries d’un espace affine euclidien de dimension $n \geqslant 1$ quelconque [23].

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Accord grammatical en $(1.34)$">

Dans l’édition imprimée de 1984 (p. 33), il est imprimé « appelé *groupes des isométries du plan $P$* » au pluriel. La coquille a été corrigée en « *groupe des isométries du plan $P$* ».

</FoldNote>

<FoldNote kind="prepa" title="Précision prépa — Isométries vectorielles $\operatorname{O}(E)$ vs isométries affines $\mathscr{I}(n)$">

Attention à ne pas confondre les deux cadres géométriques des exemples <MathRef id="1.32">$(1.32)$</MathRef>–<MathRef id="1.34">$(1.34)$</MathRef> :

- Dans un **espace vectoriel euclidien** $E$ (comme $\R^2$ en <MathRef id="1.32">$(1.32)$</MathRef>), l’origine $0$ est fixée : une isométrie vectorielle (ou automorphisme orthogonal, élément de $\operatorname{O}(E)$) est une application linéaire $u \in \GL(E)$ conservant le produit scalaire ($(u(x) \mid u(y)) = (x \mid y)$, donc rapport $\lambda_u = 1$).
- Dans un **espace affine euclidien** $P$ (de dimension $2$ ou $n$), aucune origine n’est privilégiée : $\mathscr{I}(n)$ contient notamment toutes les **translations**, qui ne sont pas des applications linéaires. En fixant une origine $O \in P$, le sous-groupe des isométries affines fixant $O$ s’identifie à $\operatorname{O}(n)$.

</FoldNote>

<PageRef :page="34" />

<MathBlock id="1.35" kind="ex" title="Exemple (1.35) — Centre d’un groupe">

Soit $G$ un groupe quelconque, posons :

$$Z(G) = \{x \in G ;\; xa = ax, \; \forall a \in G\} \,;$$

$Z(G)$ est l’ensemble des éléments $x \in G$ qui commutent avec tout élément de $G$. $Z(G)$ est appelé le *centre du groupe $G$* et on vérifie facilement que c’est un *sous-groupe de $G$*. On remarque que $Z(G)$ est un sous-groupe *propre* de $G$ si et seulement si $G$ est *non abélien*.

</MathBlock>

### C / Sous-groupe engendré par une partie non vide d’un groupe

<MathBlock id="1.36" kind="def" title="Définition (1.36)">

Soient $G$ un groupe et $S$ une partie non vide de $G$ ; désignons par $\mathscr{H}_S$ l’ensemble des sous-groupes de $G$ contenant $S$ et posons

$$\langle S \rangle = \bigcap_{H \in \mathscr{H}_S} H.$$

$\langle S \rangle$ est un sous-groupe de $G$ (<MathRef id="1.25">proposition $(1.25)$</MathRef>) appelé *sous-groupe de $G$ engendré par $S$*.

</MathBlock>

<MathBlock id="1.37" kind="rem" title="Remarque (1.37)">

Dans l’ensemble des sous-groupes de $G$ ordonné par l’inclusion, *$\langle S \rangle$ est le plus petit sous-groupe de $G$ contenant $S$*.

</MathBlock>

<MathBlock id="1.38" kind="prop" title="Proposition (1.38)">

*$S$ étant une partie non vide d’un groupe $G$, on a :*

<span id="ref-eq-1-17"></span>

$$\langle S \rangle = \{x_1 x_2 \dots x_n ;\; n \in \N^*, \; x_i \in S \text{ } \textit{ou} \text{ } x_i^{-1} \in S, \; \forall i \, (1 \leqslant i \leqslant n)\} \tag{17}$$

</MathBlock>

<ProofBlock :steps="steps_1_38">

Désignons par $H$ le second membre de <MathRef id="eq-1-17">$(17)$</MathRef> et démontrons que $H = \langle S \rangle$. On remarque que tout $x$ de $S$ appartient à $H$, d’où $S \subseteq H$.

Montrons que $H$ est un sous-groupe de $G$. Considérons $x = x_1 x_2 \dots x_n$ et $y = y_1 y_2 \dots y_p$ dans $H$ ; alors

$$xy^{-1} = x_1 x_2 \dots x_n y_p^{-1} y_{p-1}^{-1} \dots y_1^{-1}$$

appartient à $H$. On en déduit que $H$ est un élément de l’ensemble $\mathscr{H}_S$, d’où $\langle S \rangle \subseteq H$.

<PageRef :page="35" />

D’autre part, tout sous-groupe de $G$ contenant $S$ contient nécessairement tous les éléments de $H$, par suite $H = \langle S \rangle$.

</ProofBlock>

*Cas particuliers :*

$1^\circ$ $S = \bigcup_{i \in I} H_i$, où $\{H_i\}_{i \in I}$ est une famille de sous-groupes de $G$ ; dans ce cas, $x \in S \Leftrightarrow x^{-1} \in S$ ; par suite

<span id="ref-eq-1-18"></span>

$$\langle S \rangle = \{x_1 x_2 \dots x_n ;\; n \in \N^*, \; x_\alpha \in \bigcup_{i \in I} H_i, \; \forall \alpha \, (1 \leqslant \alpha \leqslant n)\} \tag{18}$$

$2^\circ$ $S = \{x\}$, $x \in G$ ; $\langle S \rangle$ s’écrit alors $\langle x \rangle$ et

<span id="ref-eq-1-19"></span>

$$\langle x \rangle = \{x^n ;\; n \in \Z\} \tag{19}$$

Pour $x = e$, nous conserverons la notation $(e)$, à la place de $\langle e \rangle$ (voir <MathRef id="1.21">remarque $(1.21)$</MathRef>).

<MathBlock id="1.39" kind="rem" title="Remarque (1.39)">

Si la loi de composition du groupe $G$ est notée *additivement*, les formules <MathRef id="eq-1-17">$(17)$</MathRef> et <MathRef id="eq-1-19">$(19)$</MathRef> deviennent respectivement :

<span id="ref-eq-1-17p"></span>
<span id="ref-eq-1-19p"></span>

$$\begin{align}
\langle S \rangle &= \left\{ \sum_{i=1}^n x_i ;\; n \in \N^*, \; x_i \in S \text{ ou } -x_i \in S, \; \forall i \, (1 \leqslant i \leqslant n) \right\} \tag{17'} \\
\langle x \rangle &= \{nx ;\; n \in \Z\} \tag{19'}
\end{align}$$

</MathBlock>

<FoldNote kind="intuition" title="Intuition — Deux points de vue sur $\langle S \rangle$ : par le haut et par le bas">

Les énoncés <MathRef id="1.36">$(1.36)$</MathRef>–<MathRef id="1.38">$(1.38)$</MathRef> illustrent une dualité omniprésente en algèbre :

- **« Par le haut » (<MathRef id="1.36">$(1.36)$</MathRef>)** : $\langle S \rangle = \bigcap_{H \in \mathscr{H}_S} H$ définit $\langle S \rangle$ comme le *plus petit* sous-groupe contenant $S$. C’est idéal pour démontrer une inclusion $\langle S \rangle \subseteq K$ : il suffit de vérifier $S \subseteq K$ et $K \leqslant G$ !
- **« Par le bas » (<MathRef id="1.38">$(1.38)$</MathRef>)** : $\langle S \rangle$ est l’ensemble de tous les *mots finis* construits sur $S$ et $S^{-1}$. Attention dans un groupe non abélien : on ne peut pas regrouper les occurrences d’un même générateur (par exemple $\sigma_1 \tau_3 \sigma_1 \neq \sigma_1^2 \tau_3$ dans $S_3$).

</FoldNote>

<MathBlock id="1.40" kind="def" title="Définitions (1.40)">

Soit $G$ un groupe.

$1^\circ$ Si $S$ est une partie non vide de $G$ telle que $\langle S \rangle = G$, on dit que $S$ est une *partie génératrice* du groupe $G$, ou que $S$ est un *ensemble de générateurs* de $G$, ou encore que $S$ *engendre* $G$.

$2^\circ$ S’il existe $x \in G$ tel que $\langle x \rangle = G$, le groupe $G$ est dit *monogène*.

Plus généralement, s’il existe une partie non vide et finie de $G$, $S = \{x_1, x_2, \dots, x_n\}$, telle que $\langle S \rangle = G$, on dit que le groupe $G$ est de *type fini*. Un groupe fini est nécessairement de type fini, mais la réciproque est fausse (voir <MathRef id="1.42">exemple $(1.42)$ $1^\circ$</MathRef>).

</MathBlock>

<MathBlock id="1.41" kind="ex" title="Exemple (1.41)">

Considérons le groupe symétrique $S_3$.

$$S_3 = \{e, \sigma_1, \sigma_2, \tau_1, \tau_2, \tau_3\} \quad (\text{notations } (1.15)).$$

<PageRef :page="36" />

La <MathRef id="table-10">table $(10)$</MathRef> montre que $\sigma_1^2 = \sigma_2$ et $\sigma_1^3 = e$, d’où

$$\langle \sigma_1 \rangle = \{\sigma_1, \sigma_2, e\}.$$

D’autre part, $\sigma_1 \circ \tau_3 = \tau_2$, $\tau_3 \circ \sigma_1 = \tau_1$, par suite

$$\langle \sigma_1, \tau_3 \rangle = \{\sigma_1, \sigma_2, \tau_1, \tau_2, \tau_3, e\} = S_3 \,;$$

donc *$\{\sigma_1, \tau_3\}$ est une partie génératrice de $S_3$*.

</MathBlock>

<MathBlock id="1.42" kind="ex" title="Exemples (1.42)">

$1^\circ$ Puisque tout $n \in \Z$ s’écrit $1 + 1 + \dots + 1$ si $n > 0$, $(-1) + (-1) + \dots + (-1)$ si $n < 0$ et $0 = 1 + (-1)$, *$\Z$ est un groupe monogène engendré par $1$*.

On remarque que $\Z$ peut aussi être considéré comme engendré par $-1$.

$2^\circ$ Considérons le groupe $\Zn{4}$ dont la table d’addition est explicitée dans <MathRef id="1.18">l’exemple $(1.18)$</MathRef> ; celle-ci permet de montrer que le groupe $\Zn{4}$ est monogène engendré par $\overline{1}$ et que $\Zn{4}$ peut aussi être considéré comme engendré par $\overline{3}$ ; donc *$\Zn{4}$ est un groupe monogène fini*.

</MathBlock>

<MathBlock id="1.43" kind="def" title="Définition (1.43)">

On appellera *groupe cyclique* tout groupe monogène fini.

*Les groupes monogènes et en particulier les groupes cycliques seront étudiés en détail au chapitre III.*

</MathBlock>

<MathBlock id="1.44" kind="def" title="Définitions (1.44)">

Soit $G$ un groupe quelconque et $x$ un élément de $G$.

*$a)$* Si le sous-groupe de $G$ engendré par $x$ est de cardinal infini, on dit que *$x$ est d’ordre infini* dans $G$.

*$b)$* Si le sous-groupe de $G$ engendré par $x$ est fini, on dit que *$x$ est d’ordre fini dans $G$* et le cardinal du sous-groupe $\langle x \rangle$ s’appelle *l’ordre de $x$ dans $G$* ; on le note *$o(x)$*.

</MathBlock>

<PageRef :page="37" />

<MathBlock id="1.45" kind="ex" title="Exemples (1.45)">

$1^\circ$ Dans tout groupe $G$, l’élément neutre est le seul élément d’ordre $1$.

$2^\circ$ Dans $\Z$, tout élément $x \neq 0$ est d’ordre infini.

$3^\circ$ Dans le groupe symétrique $S_3$, $\tau_1$, $\tau_2$, $\tau_3$ sont d’ordre $2$ et $\sigma_1$, $\sigma_2$ sont d’ordre $3$ (voir <MathRef id="table-10">la table $(10)$</MathRef>).

</MathBlock>

<MicroChallenge title="Micro-défi — Le produit de deux sous-groupes est-il toujours un sous-groupe ?" hint="Dans $S_3$ (table $(10)$), prenez $H = \{e, \tau_1\}$ et $K = \{e, \tau_2\}$ puis comparez $HK$ et $KH$.">

Soient $H$ et $K$ deux sous-groupes d’un groupe $G$, et posons $HK = \{hk ;\; h \in H,\; k \in K\}$. Si $G$ est abélien, $HK$ est-il un sous-groupe de $G$ ? Et dans le groupe non abélien $S_3$, que vaut l’ensemble $HK$ pour $H = \{e, \tau_1\}$ et $K = \{e, \tau_2\}$ (notations <MathRef id="1.15">$(1.15)$</MathRef> et <MathRef id="table-10">table $(10)$</MathRef>) ? Est-ce un sous-groupe de $S_3$ ?

<template #answer>

- **Si $G$ est abélien, oui** : pour $h_1 k_1, h_2 k_2 \in HK$, on a $(h_1 k_1)(h_2 k_2)^{-1} = (h_1 h_2^{-1})(k_1 k_2^{-1}) \in HK$.
- **Dans $S_3$, non !** On trouve $\tau_1 \circ \tau_2 = \sigma_1$ alors que $\tau_2 \circ \tau_1 = \sigma_2$. Ainsi $HK = \{e, \tau_1, \tau_2, \sigma_1\}$ mais $\sigma_1^{-1} = \sigma_2 \notin HK$ (et $HK \neq KH = \{e, \tau_1, \tau_2, \sigma_2\}$).

La <MathRef id="1.46">remarque $(1.46)$</MathRef> et la <MathRef id="1.47">proposition $(1.47)$</MathRef> ci-dessous montrent que le critère exact est $HK \leqslant G \iff HK = KH$.

</template>

</MicroChallenge>

<MathBlock id="1.46" kind="rem" title="Remarque (1.46)">

Étant donné deux parties non vides $X$ et $Y$ d’un groupe $G$, on pose :

<span id="ref-eq-1-20"></span>

$$XY = \{xy ;\; (x, y) \in X \times Y\} \tag{20}$$

si $Y = X$, on écrit $X^2 = \{xy ;\; (x, y) \in X \times X\}$.

Si le groupe $G$ est noté additivement, $XY$ est remplacé par

<span id="ref-eq-1-20p"></span>

$$X + Y = \{x + y ;\; (x, y) \in X \times Y\} \tag{20'}$$

*Cas particuliers :*

*$a)$* $X = \{x\}$, $x \in G$ et $Y = G$ ; on a alors *$XY = xG = G$*, car $x$ est inversible et on a aussi *$YX = Gx = G$*.

*$b)$* $X = G = Y$ ; alors *$G^2 = G$*.

*$c)$* *$X < G$ et $Y < G$* ; l’exemple ci-dessous montre qu’en général on a *$XY \neq YX$ et ni $XY$, ni $YX$ ne sont des sous-groupes de $G$*.

En effet, dans le groupe symétrique $S_3$, posons

$$H = \langle \tau_1 \rangle = \{e, \tau_1\} \quad \text{et} \quad K = \langle \tau_2 \rangle = \{e, \tau_2\} \,;$$

alors :

$$\begin{aligned}
HK &= \{e, \tau_1, \tau_2, \tau_1 \circ \tau_2 = \sigma_1\} \\
\text{et} \quad KH &= \{e, \tau_1, \tau_2, \tau_2 \circ \tau_1 = \sigma_2\}.
\end{aligned}$$

$$\sigma_1 \neq \sigma_2 \Rightarrow HK \neq KH.$$

$$\sigma_1^{-1} = \sigma_2 \quad \text{et} \quad \sigma_2 \notin HK \,; \qquad \sigma_2^{-1} = \sigma_1 \quad \text{et} \quad \sigma_1 \notin KH,$$

par suite ni $HK$, ni $KH$ ne sont des sous-groupes de $G$.

</MathBlock>

Cette remarque justifie l’intérêt du résultat suivant :

<MathBlock id="1.47" kind="prop" title="Proposition (1.47)">

*$H$ et $K$ étant deux sous-groupes d’un groupe $G$, alors $HK$ est un sous-groupe de $G$ si et seulement si $HK = KH$.*

</MathBlock>

<PageRef :page="38" />

<ProofBlock :steps="steps_1_47">

$1^\circ$ Supposons $HK \leqslant G$. Soit $x \in H$ et $y \in K$, on peut écrire

$$yx = (x^{-1} y^{-1})^{-1}$$

*$yx$ est l’inverse d’un élément du sous-groupe $HK$*, donc $yx \in HK$, d’où $KH \subseteq HK$.

Soit $z \in HK$, alors $z^{-1} \in HK$, donc il existe $x' \in H$ et $y' \in K$ tels que $z^{-1} = x'y'$ ; par suite $z = {y'}^{-1} {x'}^{-1} \in KH$, d’où $HK \subseteq KH$.

On en conclut que $HK$ sous-groupe de $G$ implique $HK = KH$.

$2^\circ$ Réciproquement, supposons $HK = KH$ ; on remarque que $e \in HK$ implique $HK \neq \varnothing$. Soient $x$ et $x_1$ dans $H$, $y$ et $y_1$ dans $K$ ;

$$\begin{aligned}
&(xy)(x_1 y_1)^{-1} = x(y y_1^{-1} x_1^{-1}), \\
&(y y_1^{-1} x_1^{-1} \in KH \text{ et } HK = KH) \Rightarrow \exists (x_2, y_2) \in H \times K, \\
&y y_1^{-1} x_1^{-1} = x_2 y_2 \,;
\end{aligned}$$

alors, $(xy)(x_1 y_1)^{-1} = x x_2 y_2 \in HK$ et d’après <MathRef id="1.24">le théorème $(1.24)$</MathRef>, $HK$ est un sous-groupe de $G$.

</ProofBlock>

<FoldNote kind="piege" title="Piège classique — $HK = KH$ est une égalité d’ensembles, pas une commutativité élément par élément">

Attention à ne pas confondre deux conditions très différentes :

1. **Égalité ensembliste $HK = KH$** : signifie que pour tous $h \in H, k \in K$, il existe $h' \in H, k' \in K$ tels que $hk = k'h'$ (et inversement), *sans nécessairement* avoir $hk = kh$ !
2. **Exemple dans $S_3$** : prenons $H = \{e, \sigma_1, \sigma_2\}$ (d’ordre $3$) et $K = \{e, \tau_1\}$ (d’ordre $2$). On vérifie facilement via <MathRef id="table-10">la table $(10)$</MathRef> que $HK = S_3 = KH$ (et en effet $S_3 \leqslant S_3$), **bien que** $\sigma_1 \circ \tau_1 = \tau_3 \neq \tau_2 = \tau_1 \circ \sigma_1$ !
3. Noter aussi que $HK$ et $KH$ ont toujours le même cardinal (par inversion $z \mapsto z^{-1}$), même lorsque $HK \neq KH$ (dans <MathRef id="1.46">$(1.46)$</MathRef>, $|HK| = |KH| = 4$ mais $\sigma_1 \in HK \setminus KH$).

</FoldNote>

<SubgroupLatticeLab />

<MathBlock id="1.48" kind="rem" title="Remarques (1.48)">

$1^\circ$ Si $HK$ est un sous-groupe de $G$, alors $HK$ est le sous-groupe de $G$ engendré par $H \cup K$.

$2^\circ$ *Si $G$ est abélien, quels que soient les sous-groupes $H$ et $K$ de $G$, $HK$ est un sous-groupe de $G$.*

</MathBlock>

<MathBlock id="1.49" kind="cor" title="Corollaire (1.49)">

*Soit $\{H_i\}_{1 \leqslant i \leqslant n}$ une famille finie de sous-groupes de $G$. Si, quel que soit $(i, j)$ tel que $1 \leqslant i < j \leqslant n$, $H_i H_j$ est un sous-groupe de $G$, alors*

$$H_1 H_2 \dots H_n = \{x_1 x_2 \dots x_n ;\; x_i \in H_i, \; \forall i \, (1 \leqslant i \leqslant n)\}$$

*est un sous-groupe de $G$.*

</MathBlock>

Démonstration laissée au lecteur (exercice 28, chap. $\mathrm{I}^{\mathrm{er}}$).

### D / Somme directe de sous-groupes d’un groupe abélien $(G, +)$

*a) Somme directe de deux sous-groupes.* Soient $H$ et $K$ deux sous-groupes d’un groupe *abélien* $(G, +)$ ; d’après <MathRef id="1.48">les remarques $(1.48)$</MathRef> <PageRef :page="39" /> le sous-groupe de $G$ engendré par $H \cup K$ est *$G' = H + K$*, qui est appelé *somme des sous-groupes* $H$ et $K$.

<MathBlock id="1.50" kind="def" title="Définition (1.50)">

Compte tenu des notations ci-dessus, le sous-groupe $G' = H + K$ est dit *somme directe* des sous-groupes $H$ et $K$, si *$H \cap K = (0)$*.

Dans ce cas, on écrit *$G' = H \oplus K$*.

</MathBlock>

<MathBlock id="1.51" kind="prop" title="Proposition (1.51)">

*$(G, +)$ étant un groupe abélien, la somme des deux sous-groupes $H$ et $K$ est directe, si et seulement si tout élément de $H + K$ s’écrit de façon unique : $x + y$, où $x \in H$ et $y \in K$.*

</MathBlock>

<ProofBlock :steps="steps_1_51">

$1^\circ$ Supposons la somme $H + K$ directe, c’est-à-dire que l’on a $H \cap K = (0)$. Soit $z \in H \oplus K$ tel que $z = x + y = x' + y'$, où $x$ et $x'$ sont dans $H$ et $y, y'$ dans $K$ ; alors

$$x - x' = y' - y \text{ est dans } H \cap K = (0),$$

par suite $x = x'$ et $y = y'$.

$2^\circ$ Réciproquement, on suppose que tout $z \in H + K$ s’écrive de façon unique $z = x + y$ où $x \in H$, $y \in K$.

Soit $z \in H \cap K$, alors $z \in H + K$ et on peut écrire :

$$\begin{aligned}
& z = z + 0, && \text{avec } z \in H \text{ et } 0 \in K \\
\text{ou} \quad & z = 0 + z, && \text{avec } 0 \in H \text{ et } z \in K.
\end{aligned}$$

L’hypothèse implique alors $z = 0$, d’où $H \cap K = (0)$.

</ProofBlock>

*b) Somme directe d’une famille quelconque de sous-groupes.* Soient $I$ un ensemble non vide et $\{H_i\}_{i \in I}$ une famille de sous-groupes d’un groupe *abélien* $(G, +)$.

Le sous-groupe de $(G, +)$ engendré par $\bigcup_{i \in I} H_i$ se note $\sum_{i \in I} H_i$ et s’appelle la *somme des sous-groupes de* $H_i$, $i \in I$.

Si $I$ est *fini* et $I = \{1, 2, \dots, n\}$, d’après <MathRef id="1.48">les remarques $(1.48)$</MathRef> et <MathRef id="1.49">le corollaire $(1.49)$</MathRef>, on a :

$$\begin{aligned}
\sum_{1 \leqslant i \leqslant n} H_i &= H_1 + H_2 + \dots + H_n \\
\sum_{1 \leqslant i \leqslant n} H_i &= \{x_1 + x_2 + \dots + x_n ;\; x_i \in H_i, \; \forall i \, (1 \leqslant i \leqslant n)\}.
\end{aligned}$$

<PageRef :page="40" />

Si $I$ est *infini*, d’après <MathRef id="eq-1-18">la relation $(18)$</MathRef>, $x \in \sum_{i \in I} H_i$ si et seulement si $x = x_{i_1} + x_{i_2} + \dots + x_{i_n}$, où $n \in \N^*$,

$$\{i_1, i_2, \dots, i_n\} \subseteq I \quad \text{et} \quad x_{i_k} \in H_{i_k}, \quad \forall k \, (1 \leqslant k \leqslant n).$$

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Coquille d’indice sur la somme infinie (p. 40)">

Dans l’édition imprimée de 1984 (p. 40, ligne 2), il est imprimé « $\forall k \, (1 \leqslant i \leqslant n)$ » (coquille d’indice $i$ pour $k$). L’indice a été corrigé en « $\forall k \, (1 \leqslant k \leqslant n)$ ».

</FoldNote>

Autrement dit, $x \in \sum_{i \in I} H_i$ si et seulement s’il existe une partie finie et non vide de $I$ : $\{i_1, i_2, \dots, i_n\}$ telle que $x \in \sum_{1 \leqslant k \leqslant n} H_{i_k}$.

<MathBlock id="not-p40" kind="not" title="Notation">

Pour un élément $x \in \sum_{i \in I} H_i$ ($I$ infini), on pourra écrire :

$$x = \sum_{i \in I} x_i, \quad \text{où } x_i = 0, \quad \text{sauf pour un nombre fini d’indices } i \,;$$

cette condition s’exprime aussi par la formule : « *les $x_i$ étant presque tous nuls* ».

</MathBlock>

<MathBlock id="1.52" kind="def" title="Définition (1.52)">

$(G, +)$ étant un groupe *abélien* et $\{H_i\}_{i \in I}$ une famille quelconque de sous-groupes de $G$, le sous-groupe $\sum_{i \in I} H_i$ est dit *somme directe* des sous-groupes $H_i$, si :

<span id="ref-eq-1-21"></span>

$$\forall j \in I, \quad H_j \cap \sum_{\substack{i \in I \\ i \neq j}} H_i = (0) \tag{21}$$

La somme directe des $H_i$, $i \in I$, est notée : $\bigoplus_{i \in I} H_i$.

</MathBlock>

<MathBlock id="1.53" kind="prop" title="Proposition (1.53)">

*$I$ étant un ensemble non vide et $\{H_i\}_{i \in I}$ une famille de sous-groupes d’un groupe abélien $(G, +)$, le sous-groupe $G' = \sum_{i \in I} H_i$ est somme directe des $H_i$, si et seulement si tout $x \in G'$ s’écrit de façon unique :*

$$x = \sum_{1 \leqslant k \leqslant n} x_{i_k},$$

*où $n \in \N^*$, $\{i_1, \dots, i_n\} \subseteq I$ et $x_{i_k} \in H_{i_k}$, $\forall k \, (1 \leqslant k \leqslant n)$.*

</MathBlock>

Démonstration laissée au lecteur (exercice 28, chap. $\mathrm{I}^{\mathrm{er}}$).

<FoldNote kind="piege" title="Piège classique — Somme directe de $n \geqslant 3$ sous-groupes : $H_i \cap H_j = (0)$ ne suffit pas">

Pour deux sous-groupes, la condition $H_1 \cap H_2 = (0)$ caractérise la somme directe (<MathRef id="1.50">$(1.50)$</MathRef>). En revanche, dès qu’il y a **au moins $3$ sous-groupes**, il est **faux** que $\forall i \neq j,\; H_i \cap H_j = (0)$ suffise !

**Contre-exemple géométrique dans $(\R^2, +)$** : prenons trois droites vectorielles distinctes $D_1 = \R(1, 0)$, $D_2 = \R(0, 1)$ et $D_3 = \R(1, 1)$. On a bien $D_i \cap D_j = \{(0, 0)\}$ dès que $i \neq j$, et pourtant
$$(1, 1) = (1, 0) + (0, 1) \in D_3 \cap (D_1 + D_2),$$
ce qui viole <MathRef id="eq-1-21">la relation $(21)$</MathRef> et détruit l’unicité de la décomposition dans $D_1 + D_2 + D_3$.

</FoldNote>

<DirectSumLab />
