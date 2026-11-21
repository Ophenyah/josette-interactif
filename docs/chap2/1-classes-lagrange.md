<script setup lang="ts">
import type { ProofStep } from '../../src/components/ProofBlock.vue'

const steps2_1: ProofStep[] = [
  {
    title: '1) Réflexivité de $\\mathscr{R}_H$',
    body: 'Pour tout $x \\in G$, on calcule $xx^{-1} = e$. Comme $H$ est un sous-groupe de $G$, il contient l’élément neutre $e$, donc $xx^{-1} \\in H$, soit $x \\mathrel{\\mathscr{R}_H} x$.',
    why: 'Tester $x \\mathrel{\\mathscr{R}_H} x$ revient à vérifier que $xx^{-1} \\in H$ : la présence de $e$ dans tout sous-groupe assure immédiatement la réflexivité.'
  },
  {
    title: '1) Symétrie de $\\mathscr{R}_H$',
    body: 'Si $x \\mathrel{\\mathscr{R}_H} y$, alors $xy^{-1} \\in H$. Par stabilité de $H$ par passage à l’inverse, $(xy^{-1})^{-1} = yx^{-1} \\in H$, donc $y \\mathrel{\\mathscr{R}_H} x$.',
    why: 'L’inversion d’un produit renverse l’ordre des facteurs ($(ab)^{-1} = b^{-1}a^{-1}$), ce qui échange exactement les rôles de $x$ et de $y$.'
  },
  {
    title: '1) Transitivité de $\\mathscr{R}_H$',
    body: 'Si $x \\mathrel{\\mathscr{R}_H} y$ et $y \\mathrel{\\mathscr{R}_H} z$, alors $xy^{-1} \\in H$ et $yz^{-1} \\in H$. Par stabilité de $H$ par produit, $(xy^{-1})(yz^{-1}) = xz^{-1} \\in H$, d’où $x \\mathrel{\\mathscr{R}_H} z$.',
    why: 'Les facteurs intermédiaires $y^{-1}$ et $y$ s’annulent par associativité : les trois axiomes de sous-groupe (neutre, inverse, produit) correspondent exactement aux trois axiomes d’équivalence.'
  },
  {
    title: '2) Description de la classe d’équivalence de $x$',
    body: 'Par définition, $y \\equiv x(\\mathscr{R}_H)$ équivaut à $yx^{-1} \\in H$, c’est-à-dire à l’existence de $h \\in H$ tel que $yx^{-1} = h$, ou encore $y = hx \\in Hx$.',
    why: 'On identifie ainsi géométriquement chaque classe d’équivalence à une « translatée » à droite $Hx$ du sous-groupe $H$.'
  }
]

const steps2_9: ProofStep[] = [
  {
    title: '1) Partition de $G$ en classes à droite modulo $H$',
    body: 'Les classes à droite distinctes modulo $H$ forment une partition de $G$ (en tant que classes d’équivalence de $\\mathscr{R}_H$). Comme $G$ est fini, il n’y a qu’un nombre fini $k \\in \\N^*$ de classes à droite distinctes.',
    why: 'Toute relation d’équivalence découpe $G$ en parties non vides deux à deux disjointes recouvrant $G$.'
  },
  {
    title: '2) Même cardinal $o(H)$ pour chaque classe',
    body: 'D’après le corollaire de la proposition $(2.6)$, chaque classe à droite $Hx$ est finie de même cardinal $m = o(H)$.',
    why: 'Sans l’équipotence de toutes les classes (due à la bijectivité des translations), une partition quelconque ne conduirait pas à une factorisation.'
  },
  {
    title: '3) Dénombrement et divisibilité',
    body: 'En additionnant les cardinaux des $k$ classes deux à deux disjointes qui partitionnent $G$, on obtient $o(G) = n = km = k\\,o(H)$, donc $o(H)$ divise $o(G)$.',
    why: 'La divisibilité $o(H) \\mid o(G)$ résulte directement du principe des bergers appliqué à une partition en $k$ blocs de taille égale $o(H)$.'
  }
]

const steps2_12: ProofStep[] = [
  {
    title: '1) Choix de la correspondance $\\theta : Hx \\mapsto x^{-1}H$',
    body: 'On associe à chaque classe à droite $Hx \\in \\left(\\dfrac{G}{H}\\right)_d$ la classe à gauche $x^{-1}H \\in \\left(\\dfrac{G}{H}\\right)_g$.',
    why: 'Comme $\\theta$ est définie à l’aide d’un représentant $x$ d’une classe, il faut d’abord vérifier qu’elle ne dépend pas du choix de ce représentant.'
  },
  {
    title: '2) Bonne définition (indépendance du représentant)',
    body: 'Si $Hx = Hy$, alors $xy^{-1} \\in H$. Cela implique $y^{-1} \\in x^{-1}H$, d’où l’égalité des classes à gauche $y^{-1}H = x^{-1}H$.',
    why: 'L’inversion $x \\mapsto x^{-1}$ renverse l’ordre des produits et transforme exactement la condition d’équivalence à droite $xy^{-1} \\in H$ en la condition d’équivalence à gauche $(x^{-1})^{-1}y^{-1} \\in H$.'
  },
  {
    title: '3) Injectivité de $\\theta$',
    body: 'Si $\\theta(Hx) = \\theta(Hy)$, alors $x^{-1}H = y^{-1}H$, donc $y^{-1} \\in x^{-1}H$, soit $xy^{-1} \\in H$, ce qui signifie $Hx = Hy$.',
    why: 'Les implications de l’étape précédente sont en fait des équivalences : la même appartenance $xy^{-1} \\in H$ gouverne les deux côtés.'
  },
  {
    title: '4) Surjectivité de $\\theta$ et conclusion',
    body: 'Pour toute classe à gauche $xH \\in \\left(\\dfrac{G}{H}\\right)_g$, on a $\\theta(Hx^{-1}) = (x^{-1})^{-1}H = xH$. Ainsi $\\theta$ est une bijection.',
    why: 'Comme $(x^{-1})^{-1} = x$, tout élément de l’ensemble d’arrivée possède un antécédent explicite, sans aucune hypothèse de finitude sur $G$.'
  }
]

const steps2_17: ProofStep[] = [
  {
    title: '1) Réduction à $n = 2$ sous-groupes',
    body: 'On prouve d’abord que si $[G : H_1]$ et $[G : H_2]$ sont finis, alors $[G : H_1 \\cap H_2]$ est fini ; une récurrence immédiate étendra le résultat à $n > 2$.',
    why: 'L’associativité de l’intersection $\\bigcap_{i=1}^n H_i = \\left(\\bigcap_{i=1}^{n-1} H_i\\right) \\cap H_n$ ramène le cas général au cas de deux sous-groupes.'
  },
  {
    title: '2) Caractérisation des classes modulo $H_1 \\cap H_2$ : formule $(4)$',
    body: 'Pour tout $x \\in G$, $(H_1 \\cap H_2)x \\subseteq H_1 x \\cap H_2 x$. Réciproquement, si $y \\in H_1 x \\cap H_2 x$, alors $yx^{-1} \\in H_1$ et $yx^{-1} \\in H_2$, donc $yx^{-1} \\in H_1 \\cap H_2$ et $y \\in (H_1 \\cap H_2)x$. D’où $(H_1 \\cap H_2)x = H_1 x \\cap H_2 x$.',
    why: 'La caractérisation $y \\in Hx \\iff yx^{-1} \\in H$ commute avec l’intersection de deux sous-groupes.'
  },
  {
    title: '3) Majoration de l’indice : inégalité $(5)$',
    body: 'D’après $(4)$, une classe à droite $(H_1 \\cap H_2)x$ est entièrement déterminée par le couple $(H_1 x, H_2 x)$ dans le produit des deux ensembles quotients. Comme il n’y a que $[G : H_1]$ choix pour $H_1 x$ et $[G : H_2]$ choix pour $H_2 x$, on a $[G : H_1 \\cap H_2] \\leqslant [G : H_1][G : H_2] < +\\infty$.',
    why: 'L’application $(H_1 \\cap H_2)x \\mapsto (H_1 x, H_2 x)$ est injective dans un produit fini (voir la précision prépa ci-après).'
  },
  {
    title: '4) Récurrence pour $n > 2$',
    body: 'Par récurrence sur $n \\geqslant 2$, en appliquant le cas $n = 2$ à $\\left(\\bigcap_{i=1}^{n-1} H_i\\right) \\cap H_n$, l’intersection d’un nombre fini de sous-groupes d’indices finis est d’indice fini.',
    why: 'La propriété d’être d’indice fini est stable par intersection binaire, donc par intersection finie.'
  }
]

const steps2_18: ProofStep[] = [
  {
    title: '1) Familles de représentants pour $G/K$ et $K/H$',
    body: 'On choisit une famille $\\{x_i\\}_{i \\in I}$ de représentants des classes à droite distinctes de $G$ modulo $K$ ($\\card(I) = [G : K]$) et une famille $\\{y_\\lambda\\}_{\\lambda \\in \\Lambda}$ de représentants des classes à droite distinctes de $K$ modulo $H$ ($\\card(\\Lambda) = [K : H]$).',
    why: 'Ne pas supposer la finitude de $G$ ni de $K$ dès le départ oblige à indexer par des ensembles quelconques $I$ et $\\Lambda$.'
  },
  {
    title: '2) Recouvrement de $G$ par les classes $Hy_\\lambda x_i$',
    body: 'Pour tout $g \\in G$, il existe un unique $i \\in I$ tel que $g \\in Kx_i$, donc $g = ax_i$ avec $a \\in K$. Il existe ensuite un unique $\\lambda \\in \\Lambda$ tel que $a \\in Hy_\\lambda$, d’où $g \\in Hy_\\lambda x_i$ et $G = \\bigcup_{(\\lambda, i) \\in \\Lambda \\times I} Hy_\\lambda x_i$.',
    why: 'On raffine la partition de $G$ modulo $K$ en partitionnant le sous-groupe $K$ modulo $H$, puis en translatant à droite par $x_i$.'
  },
  {
    title: '3) Séparation des classes $Hy_\\lambda x_i$',
    body: 'Supposons $Hy_\\lambda x_i = Hy_\\mu x_j$. Comme $H \\subseteq K$, on a $KH = K$ et $KHy_\\lambda = Ky_\\lambda = K$ (car $y_\\lambda \\in K$). En multipliant l’égalité à gauche par $K$, on obtient $Kx_i = Kx_j$, donc $i = j$. Par simplification par $x_i = x_j$, il reste $Hy_\\lambda = Hy_\\mu$, donc $\\lambda = \\mu$.',
    why: 'La multiplication à gauche par $K$ « absorbe » $H$ et les éléments de $K$, ce qui permet de remonter d’abord à $i = j$ avant d’identifier $\\lambda = \\mu$.'
  },
  {
    title: '4) Finitude de $[G : K]$ et formule des indices',
    body: 'La famille $\\{Hy_\\lambda x_i\\}_{(\\lambda, i) \\in \\Lambda \\times I}$ forme une partition de $G$ en classes à droite modulo $H$, d’où $[G : H] = \\card(\\Lambda \\times I)$. Comme $[G : H]$ est fini (et $\\Lambda, I$ non vides), $\\Lambda$ et $I$ sont finis : en particulier $[G : K] = \\card(I)$ est fini et $[G : H] = \\card(\\Lambda)\\card(I) = [G : K][K : H]$.',
    why: 'Si un produit cartésien $\\Lambda \\times I$ d’ensembles non vides est fini, chacun des deux facteurs est fini et son cardinal est le produit des cardinaux.'
  }
]
</script>

# Chapitre II — Classes modulo un sous-groupe

<PageRef :page="71" />

Sauf indication contraire, un groupe $G$ quelconque est noté multiplicativement et $e$ désigne son <GlossaryTerm id="element-unite">élément unité</GlossaryTerm>.

## 1 — Classes à droite, classes à gauche modulo un sous-groupe

### A / Relations d’équivalence modulo un sous-groupe

À tout sous-groupe $H$ d’un groupe $G$, on peut associer *deux relations binaires* $\mathscr{R}_H$ et ${}_H\mathscr{R}$ définies dans $G$ par :

$$x \mathrel{\mathscr{R}_H} y \iff xy^{-1} \in H \qquad \text{et} \qquad x \mathrel{ {}_H\mathscr{R} } y \iff x^{-1}y \in H.$$

<MathBlock id="2.1" kind="prop" title="Proposition (2.1)">

*$G$ étant un groupe :*

$1)$ *Pour tout sous-groupe $H$ de $G$, les relations $\mathscr{R}_H$ et ${}_H\mathscr{R}$ sont des relations d’équivalence.*

$2)$ $\begin{aligned}[t]
y \equiv x(\mathscr{R}_H) &\iff y \in Hx, \qquad \text{\textit{où }} Hx = \{hx ; h \in H\} ; \\
y \equiv x({}_H\mathscr{R}) &\iff y \in xH, \qquad \text{\textit{où }} xH = \{xh ; h \in H\}.
\end{aligned}$

</MathBlock>

<ProofBlock :steps="steps2_1">

Démontrons la propriété pour $\mathscr{R}_H$.

$1)$ Pour tout $x \in G$, on a $xx^{-1} = e \in H$, donc $x \mathrel{\mathscr{R}_H} x$.
Si $xy^{-1} \in H$, alors $(xy^{-1})^{-1} = yx^{-1} \in H$, donc $x \mathrel{\mathscr{R}_H} y \implies y \mathrel{\mathscr{R}_H} x$.
Enfin, si $xy^{-1} \in H$ et $yz^{-1} \in H$, alors $xy^{-1}yz^{-1} = xz^{-1} \in H$, d’où $x \mathrel{\mathscr{R}_H} y$ et $y \mathrel{\mathscr{R}_H} z \implies x \mathrel{\mathscr{R}_H} z$.

<PageRef :page="72" />

$2)$
$$\begin{aligned}
y \equiv x(\mathscr{R}_H) &\iff yx^{-1} \in H \\
yx^{-1} \in H &\iff \exists h \in H, \quad y = hx,
\end{aligned}$$
d’où $y \equiv x(\mathscr{R}_H) \iff y \in Hx$.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans la démonstration de la proposition (2.1) imprimée en 1984, la lettre $\mathscr{R}_H$ apparaît accidentellement en caractère romain droit (`R_H`) à deux reprises : « donc $x\;\mathrm{R}_H\;y \Rightarrow y\;\mathscr{R}_H\;x$ » (p. 71, $1)$) et « d’où $y \equiv x(\mathrm{R}_H) \iff y \in Hx$ » (p. 72, $2)$).

</FoldNote>

<MathBlock id="2.2" kind="def" title="Définitions (2.2)">

$H$ étant un sous-groupe d’un groupe $G$, les relations $\mathscr{R}_H$ et ${}_H\mathscr{R}$ sont respectivement appelées : *relation d’équivalence à droite et à gauche, modulo $H$ dans $G$*.

Pour $x \in G$, les ensembles $Hx$ et $xH$ sont appelés *<GlossaryTerm id="classe-modulo">classes à droite</GlossaryTerm>* et *classes à gauche de $x$ modulo $H$*.

</MathBlock>

<MathBlock id="2.3" kind="rem" title="Remarques (2.3)">

$1^\circ$ Les conventions « à droite » et « à gauche » adoptées ici sont les plus couramment utilisées par les algébristes, cependant, certains auteurs préfèrent les conventions opposées, c’est en particulier le cas de S. Mac Lane et G. Birkhoff dans [54].

$2^\circ$ Si le groupe $G$ est noté additivement, $\mathscr{R}_H$ et ${}_H\mathscr{R}$ sont définies par :

$$x \mathrel{\mathscr{R}_H} y \iff (x - y) \in H \qquad \text{et} \qquad x \mathrel{ {}_H\mathscr{R} } y \iff (-x + y) \in H.$$

Les classes à droite et à gauche modulo $H$ d’un élément $x \in G$ sont respectivement :

$$H + x = \{h + x ; h \in H\} \qquad \text{et} \qquad x + H = \{x + h ; h \in H\}.$$

$3^\circ$ Les classes à droite modulo $H$ étant des classes d’équivalence, on a :

$$Hx \neq Hy \implies Hx \cap Hy = \varnothing$$

et si $\{x_i\}_{i \in I}$ est une famille de représentants des classes à droite modulo $H$, *distinctes*, alors la famille $\{Hx_i\}_{i \in I}$ forme une *partition* de $G$ :

$$G = \bigcup_{i \in I} Hx_i \qquad \text{et} \qquad Hx_i \neq Hx_j \iff i \neq j.$$

La même remarque est valable pour les classes à gauche modulo $H$.

<PageRef :page="73" />

$4^\circ$ Si $H = G$, pour tout $x \in G$, on a $Gx = xG = G$, donc $\mathscr{R}_G = {}_G\mathscr{R}$ est *l’équivalence universelle* dans $G$.

Si $H = (e)$, pour tout $x \in G$, $\{x\}$ est à la fois classe à droite et classe à gauche de $x$ modulo $(e)$, donc $\mathscr{R}_{(e)} = {}_{(e)}\mathscr{R}$ est *l’égalité* dans $G$.

$5^\circ$ Quel que soit $H \leqslant G$ et quel que soit $h \in H$, on a $Hh = hH = H$, donc $H$ est à la fois classe à droite et classe à gauche de $h$ modulo $H$ ; en particulier, *$H$ est classe à droite et à gauche de $e$ modulo $H$*.

$6^\circ$ Si le groupe $G$ est abélien, quel que soit $H \leqslant G$, et quel que soit $x \in G$, on a $Hx = xH$, donc $\mathscr{R}_H = {}_H\mathscr{R}$.

Dans ce cas, deux éléments $x$ et $y$ de $G$, équivalents modulo $\mathscr{R}_H$ ($= {}_H\mathscr{R}$), seront dits *équivalents modulo $H$* ; on écrira :

$$x \equiv y \; (\mathrm{mod}\; H).$$

L’*ensemble quotient* de $G$ par $\mathscr{R}_H$ ($= {}_H\mathscr{R}$) sera noté $\dfrac{G}{H}$ et appelé *quotient de $G$ par $H$*.

$7^\circ$ Si le groupe $G$ est *non abélien*, alors, pour $H \neq (e)$, $H \neq G$ et $x \notin H$, on a, *en général*, $Hx \neq xH$, donc $\mathscr{R}_H \neq {}_H\mathscr{R}$.

Les ensembles quotients $\dfrac{G}{\mathscr{R}_H}$ et $\dfrac{G}{ {}_H\mathscr{R} }$ seront respectivement notés $\left(\dfrac{G}{H}\right)_d$ et $\left(\dfrac{G}{H}\right)_g$.

</MathBlock>

<FoldNote kind="intuition" title="Intuition — Trois niveaux d’objets : $x$, $Hx$ et $(G/H)_d$ (image géométrique dans $\R^2$)">

Une erreur fréquente au début consiste à confondre trois niveaux d’objets de natures ensemblistes distinctes :

1. **Un élément** $x \in G$ (un point de $G$).
2. **Une classe à droite** $Hx \in \mathscr{P}(G)$ : c’est une *partie* de $G$ (toute une « tranche » d’éléments équivalents à $x$), et $x$ n’en est qu’un *représentant* possible parmi d’autres.
3. **L’ensemble quotient** $\left(\dfrac{G}{H}\right)_d \subseteq \mathscr{P}(G)$ : c’est l’ensemble *dont les éléments sont les classes* $Hx$ ; chaque classe $Hx$ y devient un *point unique* !

**Image géométrique dans $G = (\R^2, +)$** : prenons pour sous-groupe la droite vectorielle horizontale $H = \R \times \{0\}$. Pour un point $M = (x_0, y_0) \in \R^2$, sa classe modulo $H$ est

$$H + (x_0, y_0) = \{(x, y_0) ;\; x \in \R\},$$

c’est-à-dire la **droite horizontale** d’ordonnée $y_0$. Le plan $\R^2$ est partitionné en droites horizontales parallèles, et l’ensemble quotient $\R^2 / H$ est l’ensemble de toutes ces droites (en bijection avec l’axe vertical $\R$ des ordonnées $y_0$).

</FoldNote>

<MathBlock id="2.4" kind="ex" title="Exemple (2.4)">

Considérons le groupe symétrique $S_3$ qui est engendré par :

$$\sigma_1 = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \end{pmatrix} \qquad \text{et} \qquad \tau_3 = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 1 & 3 \end{pmatrix}$$

(voir <MathRef id="1.41">exemple (1.41)</MathRef>).

Pour simplifier l’écriture, posons ici : $\sigma = \sigma_1$ et $\tau = \tau_3$ ; on a alors $S_3 = \{e, \tau, \sigma, \sigma^2, \tau \circ \sigma, \sigma \circ \tau\}$.

Soit $H = \langle \tau \rangle = \{e, \tau\}$. Les classes à droite et à gauche de $S_3$ modulo $H$ sont respectivement :

$$\left\{\begin{aligned}
H &= \{e, \tau\} \\
H\sigma &= \{\sigma, \tau \circ \sigma\} \\
H\sigma^2 &= \{\sigma^2, \tau \circ \sigma^2 = \sigma \circ \tau\}
\end{aligned}\right. \qquad
\left\{\begin{aligned}
H &= \{e, \tau\} \\
\sigma H &= \{\sigma, \sigma \circ \tau\} \\
\sigma^2 H &= \{\sigma^2, \sigma^2 \circ \tau = \tau \circ \sigma\}
\end{aligned}\right.$$

$$\tau \circ \sigma \neq \sigma \circ \tau \implies H\sigma \neq \sigma H, \qquad \text{d’où } \mathscr{R}_H \neq {}_H\mathscr{R}.$$

</MathBlock>

<FoldNote kind="piege" title="Piège classique — Les classes $Hx$ ($x \notin H$) ne sont jamais des sous-groupes">

Dès que $x \notin H$, la classe à droite $Hx$ (ou à gauche $xH$) **n’est pas un sous-groupe** de $G$ : en effet, les classes forment une partition de $G$ et $e \in H$, donc $Hx \cap H = \varnothing$, ce qui interdit $e \in Hx$. Seule la classe $H = He = eH$ est un sous-groupe.

De même, en <MathRef id="2.3">Remarques (2.3)</MathRef> $6^\circ$–$7^\circ$, l’égalité des *ensembles* $Hx = xH$ (qui signifie que pour tout $h \in H$, il existe $h' \in H$ tel que $hx = xh'$) est **beaucoup plus faible** que la commutation élément par élément ($hx = xh$ pour tout $h \in H$). On le verra au chapitre III avec les sous-groupes distingués.

</FoldNote>

<PageRef :page="74" />

<MathBlock id="2.5" kind="ex" title="Exemple (2.5)">

Soit $H = n\Z$ un sous-groupe de $(\Z, +)$. Le groupe $(\Z, +)$ étant abélien, on a $\mathscr{R}_H = {}_H\mathscr{R}$ et :

$$\begin{aligned}
x \equiv y \; (\mathrm{mod}\; n\Z) &\iff (x - y) \in n\Z, \\
\text{d’où} \qquad x \equiv y \; (\mathrm{mod}\; n\Z) &\iff x \equiv y \; (\mathrm{mod}\; n)
\end{aligned}$$

(voir <MathRef id="1.13">exemple (1.13)</MathRef>).

Autrement dit, l’équivalence modulo $n\Z$ coïncide avec la congruence modulo $n$, d’où

$$\frac{\Z}{n\Z} = \Zn{n}.$$

Le quotient de $\Z$ par un sous-groupe $n\Z$ est donc muni d’une structure de groupe, induite par celle de $\Z$ (<MathRef id="1.13">exemple (1.13)</MathRef>) ; nous verrons plus loin (<MathRef id="2.24">proposition (2.24)</MathRef>) qu’il en est de même pour tout quotient d’un groupe *abélien* par l’un quelconque de ses sous-groupes.

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 74, exemple (2.5)), la dernière ligne porte « par l’un quelconque de ses groupes » (coquille pour « sous-groupes »).

</FoldNote>

### B / Théorème de Lagrange. Indice d’un sous-groupe

<MathBlock id="2.6" kind="prop" title="Proposition (2.6)">

*Soient $G$ un groupe et $H$ un sous-groupe de $G$, alors toute classe à droite $Hx$ ($\textit{resp}^t$ à gauche $xH$) est <GlossaryTerm id="equipotent">équipotente</GlossaryTerm> à $H$.*

</MathBlock>

<ProofBlock>

On sait que deux ensembles sont dits équipotents s’il existe une bijection de l’un sur l’autre.

Dans le cas présent, on vérifie facilement que l’application

$$\begin{aligned}
\gamma : H &\to Hx \\
h &\mapsto hx
\end{aligned}$$

est une bijection, d’où le résultat énoncé.

</ProofBlock>

<MathBlock id="2.7" kind="cor" title="Corollaire (2.7)">

*Dans un groupe $G$, deux classes à droite ou à gauche modulo un sous-groupe $H$ sont équipotentes.*

En effet, deux ensembles équipotents à un même troisième sont équipotents.

</MathBlock>

<MathBlock id="2.8" kind="cor" title="Corollaire (2.8)">

*Si $H$ est un sous-groupe fini d’un groupe quelconque $G$, alors, toute classe à droite $Hx$, ou à gauche $xH$, est un ensemble fini de même cardinal que $H$.*

</MathBlock>

<MicroChallenge title="Défi avant le théorème de Lagrange — Sous-groupes et parties stables de $S_3$" hint="En combinant une permutation d’ordre $3$ ($\sigma_1$) avec une transposition ($\tau$), ou deux transpositions distinctes, combien d’éléments distincts obtient-on par produits successifs ?">

Le groupe symétrique $S_3$ possède $6$ éléments. Peut-on trouver un sous-groupe (ou même une partie non vide stable par composition) de $S_3$ de cardinal **$4$** ?

<template #answer>

**Non !** On peut le constater à la main en utilisant la <MathRef id="table-10">table (10) de $S_3$</MathRef> (et le fait que dans un groupe fini, toute partie non vide stable par produit est un sous-groupe) :

- Si une partie stable $H$ contient une permutation $\sigma$ d’ordre $3$ ($\sigma_1$ ou $\sigma_2$), elle contient déjà les $3$ éléments $\{e, \sigma, \sigma^2\}$. Si on lui ajoute un $4^{\text{e}}$ élément $\tau$ (nécessairement une transposition), la stabilité par produit oblige $H$ à contenir aussi $\tau \circ \sigma$ et $\tau \circ \sigma^2$ (distincts des précédents), donc $H = S_3$ est de cardinal $6$.
- Si $H$ ne contient ni $\sigma_1$ ni $\sigma_2$, il ne reste que $e, \tau_1, \tau_2, \tau_3$. Or le produit de deux transpositions distinctes vaut $\sigma_1$ ou $\sigma_2$ (par exemple $\tau_1 \circ \tau_2 = \sigma_1$) : $H$ ne peut donc contenir qu’au plus une transposition, soit au plus $2$ éléments.

Les seuls sous-groupes de $S_3$ sont donc de cardinal $1$, $2$, $3$ ou $6$ — **tous des diviseurs de $6$**. C’est précisément ce que va généraliser le théorème de Lagrange !

</template>

</MicroChallenge>

<PageRef :page="75" />

<MathBlock id="2.9" kind="thm" title="Théorème (2.9) — Théorème de Lagrange">

*Si $G$ est un groupe fini, alors l’ordre de tout sous-groupe $H$ de $G$ divise l’ordre de $G$.*<BookFootnote num="1" text="Joseph-Louis Lagrange (comte de), mathématicien français (1736–1813)." />

</MathBlock>

<ProofBlock :steps="steps2_9">

Soit $H \leqslant G$, considérons la famille des classes à droite, *distinctes*, modulo $H$ dans $G$ ; cette famille forme une partition de $G$.

$G$ étant fini, il n’y a qu’un nombre fini de classes à droite distinctes modulo $H$ ; soit $k$ ce nombre.

Si $n = o(G)$ et $m = o(H)$, alors chaque classe à droite modulo $H$ a $m$ éléments, d’où $n = km$ et par suite $m = o(H)$ divise $n = o(G)$.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 75, preuve du théorème (2.9)), on lit « la famille des classes à droite; *distinctes*, modulo $H$ » (point-virgule au lieu d’une virgule) et « un nombre fini de classe à droite distinctes » (*classe* au singulier).

</FoldNote>

<MathBlock id="2.10" kind="cor" title="Corollaire (2.10)">

*Si $G$ est un groupe fini, quel que soit $x \in G$, l’ordre de $x$ divise l’ordre de $G$.*

En effet, l’ordre de $x$ est l’ordre du sous-groupe de $G$ engendré par $x$.

</MathBlock>

<MathBlock id="2.11" kind="cor" title="Corollaire (2.11)">

*Si $G$ est un groupe fini, pour tout sous-groupe $H$ de $G$, le nombre des classes à droite modulo $H$ est égal au nombre des classes à gauche modulo $H$.*

En effet, d’après la démonstration du <MathRef id="2.9">théorème de Lagrange</MathRef>, qui peut aussi être faite en prenant les classes à gauche, le nombre des classes à droite ($\text{resp}^t$ à gauche) modulo $H$ est égal à $\dfrac{o(G)}{o(H)}$.

</MathBlock>

Nous allons démontrer, plus généralement, le résultat suivant :

<MathBlock id="2.12" kind="thm" title="Théorème (2.12)">

*Pour tout sous-groupe $H$ d’un groupe $G$, les ensembles $\left(\dfrac{G}{H}\right)_d$ et $\left(\dfrac{G}{H}\right)_g$ sont équipotents.*

</MathBlock>

<ProofBlock :steps="steps2_12">

Considérons la correspondance

$$\begin{aligned}
\theta : \left(\frac{G}{H}\right)_d &\to \left(\frac{G}{H}\right)_g \\
Hx &\mapsto x^{-1}H.
\end{aligned}$$

<PageRef :page="76" />

— Montrons que $\theta$ est une application ; il s’agit de prouver que

$$\begin{aligned}
&\qquad Hx = Hy \text{ implique } x^{-1}H = y^{-1}H ; \\
\text{or} \qquad &Hx = Hy \iff xy^{-1} \in H \\
&\qquad xy^{-1} \in H \implies y^{-1} \in x^{-1}H \\
\text{et} \qquad &y^{-1} \in x^{-1}H \implies y^{-1}H = x^{-1}H.
\end{aligned}$$

— $\theta$ est injective ; en effet, supposons $\theta(Hx) = \theta(Hy)$, c’est-à-dire $x^{-1}H = y^{-1}H$. On a alors $xy^{-1} \in H$, d’où $Hx = Hy$.

— $\theta$ est surjective, car pour tout élément $xH$ de $\left(\dfrac{G}{H}\right)_g$ on peut écrire $xH = \theta(Hx^{-1})$.

En conclusion : $\theta$ est une bijection, d’où le théorème.

</ProofBlock>

<FoldNote kind="piege" title="Piège classique — Pourquoi $Hx \mapsto xH$ échoue alors que $Hx \mapsto x^{-1}H$ fonctionne en $(2.12)$">

On pourrait être tenté d’associer simplement $Hx \mapsto xH$ pour mettre $\left(\dfrac{G}{H}\right)_d$ et $\left(\dfrac{G}{H}\right)_g$ en bijection. **Cette correspondance n’est pas une application en général !**

Une classe à droite admet en effet plusieurs représentants : $Hx = Hy$ signifie $xy^{-1} \in H$, tandis que $xH = yH$ signifie $x^{-1}y \in H$. Or, dans un groupe non abélien, ces deux conditions ne sont pas équivalentes !

**Contre-exemple explicite dans $S_3$ (<MathRef id="2.4">exemple (2.4)</MathRef>)** avec $H = \{e, \tau\}$ :

- Prenons $x = \sigma$ et $y = \tau \circ \sigma$. On a $Hx = Hy = \{\sigma, \tau \circ \sigma\}$.
- Pourtant, leurs classes à gauche sont **distinctes** : $xH = \sigma H = \{\sigma, \sigma \circ \tau\}$, alors que $yH = (\tau \circ \sigma)H = \{\tau \circ \sigma, \tau \circ \sigma \circ \tau\} = \{\tau \circ \sigma, \sigma^2\} = \sigma^2 H \neq \sigma H$ !

**Pourquoi l’inversion $x \mapsto x^{-1}$ répare-t-elle tout ?** Parce que $(ab)^{-1} = b^{-1}a^{-1}$ renverse l’ordre des facteurs : la condition d’égalité de deux classes à droite $Hx = Hy$ ($xy^{-1} \in H$) devient $(x^{-1})^{-1} y^{-1} \in H$, qui est *exactement* la condition d’égalité des classes à gauche $x^{-1}H = y^{-1}H$.

</FoldNote>

<MathBlock id="2.13" kind="rem" title="Remarque (2.13)">

En théorie des ensembles, l’équipotence de deux ensembles s’exprime par l’égalité de leurs cardinaux. Le résultat du <MathRef id="2.12">théorème (2.12)</MathRef> se traduit donc par la relation :

<span id="ref-eq-2-1"></span>

$$\card\left(\left(\frac{G}{H}\right)_d\right) = \card\left(\left(\frac{G}{H}\right)_g\right) \tag{1}$$

</MathBlock>

<MathBlock id="2.14" kind="def" title="Définition (2.14)">

Étant donné un sous-groupe $H$ d’un groupe $G$, le cardinal de $\left(\dfrac{G}{H}\right)_d$ $\left(= \card\left(\left(\dfrac{G}{H}\right)_g\right)\right)$ s’appelle *l’<GlossaryTerm id="indice">indice</GlossaryTerm> de $H$ dans $G$* et se note $[G : H]$.

Si $[G : H]$ est fini, on dit que $H$ est d’indice fini dans $G$.

</MathBlock>

<MathBlock id="2.15" kind="prop" title="Proposition (2.15)">

*Si $G$ est un groupe fini, alors pour tout sous-groupe $H$ de $G$, on a*

<span id="ref-eq-2-2"></span>

$$o(G) = o(H)[G : H] \tag{2}$$

</MathBlock>

<ProofBlock>

Dans le cas où $G$ est fini, $[G : H]$ est égal au nombre des classes à droite ($\text{resp}^t$ à gauche) modulo $H$, d’où, d’après la démonstration du <MathRef id="2.9">théorème de Lagrange</MathRef>, $[G : H] = \dfrac{o(G)}{o(H)}$.

</ProofBlock>

<PageRef :page="77" />

<MathBlock id="2.16" kind="rem" title="Remarque (2.16)">

$1^\circ$ $[G : H]$ peut être fini, sans que ni $G$, ni $H$ ne le soit. Par exemple, dans $(\Z, +)$ pour tout sous-groupe *non nul* $n\Z$, on sait que $\dfrac{\Z}{n\Z} = \Zn{n}$, donc

<span id="ref-eq-2-3"></span>

$$[\Z : n\Z] = n \tag{3}$$

$2^\circ$ Pour tout groupe $G$, on a

$$[G : G] = 1 \qquad \text{et} \qquad [G : (e)] = \card G ;$$

en particulier, si $G$ est fini, $[G : (e)] = o(G)$.

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 77, remarque (2.16) $1^\circ$), il est imprimé « sans que ni $G$, ni $H$ lè soit » (avec accent grave sur *le* et omission de *ne*).

</FoldNote>

<MathBlock id="2.17" kind="thm" title="Théorème (2.17) — Théorème de Poincaré">

*Dans un groupe, l’intersection d’un nombre fini de sous-groupes d’indices finis est un sous-groupe d’indice fini.*<BookFootnote num="2" text="Henri-Jules Poincaré, mathématicien français (1854–1912)." />

</MathBlock>

<ProofBlock :steps="steps2_17">

Soit $\{H_i\}_{1 \leqslant i \leqslant n}$ une famille finie ($n \geqslant 2$ dans $\N$) de sous-groupes d’un groupe $G$, tels que pour tout $i$ ($1 \leqslant i \leqslant n$), $[G : H_i]$ est fini. Montrons que $\left[G : \bigcap\limits_{1 \leqslant i \leqslant n} H_i\right]$ est fini.

— Considérons le cas $n = 2$. Pour tout $x \in G$, on a

$$(H_1 \cap H_2)x \subseteq H_1 x \cap H_2 x.$$

D’autre part, soit $y \in H_1 x \cap H_2 x$ ; alors

$$(yx^{-1} \in H_1 \text{ et } yx^{-1} \in H_2) \implies y \in (H_1 \cap H_2)x,$$

d’où

<span id="ref-eq-2-4"></span>

$$(H_1 \cap H_2)x = H_1 x \cap H_2 x \tag{4}$$

Par hypothèse, les classes à droite distinctes modulo $H_1$, et modulo $H_2$, sont en nombres finis, respectivement, $[G : H_1]$ et $[G : H_2]$ et d’après <MathRef id="eq-2-4">$(4)$</MathRef> on a

<span id="ref-eq-2-5"></span>

$$[G : H_1 \cap H_2] \leqslant [G : H_1][G : H_2] \tag{5}$$

par suite, $[G : H_1 \cap H_2]$ est fini.

— En raisonnant par récurrence, on montre alors que la propriété est vraie pour tout $n > 2$.

</ProofBlock>

<FoldNote kind="prepa" title="Précision prépa — Démonstration injective rigoureuse de l’inégalité $(5)$ de Poincaré">

En classe préparatoire, pour passer proprement de la formule <MathRef id="eq-2-4">$(4)$</MathRef> à l’inégalité de cardinaux <MathRef id="eq-2-5">$(5)$</MathRef>, il est recommandé d’expliciter l’application :

$$\Phi : \left(\frac{G}{H_1 \cap H_2}\right)_d \to \left(\frac{G}{H_1}\right)_d \times \left(\frac{G}{H_2}\right)_d, \qquad (H_1 \cap H_2)x \mapsto (H_1 x, H_2 x).$$

1. **$\Phi$ est bien définie** (indépendante du représentant) : si $(H_1 \cap H_2)x = (H_1 \cap H_2)y$, alors $xy^{-1} \in H_1 \cap H_2$, donc $xy^{-1} \in H_1$ et $xy^{-1} \in H_2$, ce qui donne $H_1 x = H_1 y$ et $H_2 x = H_2 y$.
2. **$\Phi$ est injective** : si $\Phi((H_1 \cap H_2)x) = \Phi((H_1 \cap H_2)y)$, alors $H_1 x = H_1 y$ et $H_2 x = H_2 y$, d’où $xy^{-1} \in H_1$ et $xy^{-1} \in H_2$, soit $xy^{-1} \in H_1 \cap H_2$, c’est-à-dire $(H_1 \cap H_2)x = (H_1 \cap H_2)y$. *(Variante immédiate via $(4)$ : la classe $(H_1 \cap H_2)x = H_1 x \cap H_2 x$ est reconstruite de façon unique à partir du couple $(H_1 x, H_2 x)$.)*

Comme l’ensemble d’arrivée est fini de cardinal $[G : H_1][G : H_2]$, l’injectivité de $\Phi$ donne immédiatement :

$$[G : H_1 \cap H_2] \leqslant [G : H_1][G : H_2].$$

*Remarque :* $\Phi$ n’est pas toujours surjective (prendre $H_1 = H_2 \neq G$, où $[G : H_1 \cap H_1] = [G : H_1] < [G : H_1]^2$). L’égalité a lieu précisément lorsque $G = H_1 H_2$ (exercice 2 *b)*, chap. II), en particulier dès que $[G : H_1]$ et $[G : H_2]$ sont premiers entre eux (exercice 4).

</FoldNote>

<PageRef :page="78" />

### C / Formule des indices

<MathBlock id="2.18" kind="thm" title="Théorème (2.18)">

*Si $H$ est un sous-groupe d’indice fini dans un groupe $G$ et si $K$ est un sous-groupe de $G$ contenant $H$, alors $K$ est d’indice fini dans $G$ et :*

<span id="ref-eq-2-6"></span>

$$[G : H] = [G : K][K : H] \tag{6}$$

La <MathRef id="eq-2-6">formule $(6)$</MathRef> sera appelée : *formule des indices*.

</MathBlock>

<ProofBlock :steps="steps2_18">

Soit $\{x_i\}_{i \in I}$ une famille de représentants des classes à droite distinctes modulo $K$ dans $G$.

La famille des $\{Kx_i\}_{i \in I}$ forme une partition de $G$ :

$$G = \bigcup_{i \in I} Kx_i, \qquad Kx_i \neq Kx_j \iff i \neq j$$

et $\card(I) = [G : K]$.

Soit $\{y_\lambda\}_{\lambda \in \Lambda}$ une famille de représentants des classes à droite distinctes modulo $H$ dans $K$. On a :

$$K = \bigcup_{\lambda \in \Lambda} Hy_\lambda, \qquad Hy_\lambda \neq Hy_\mu \iff \lambda \neq \mu$$

et $\card(\Lambda) = [K : H]$.

Soit $g \in G$, il existe un unique $i \in I$ tel que $g \in Kx_i$.

On en déduit qu’il existe un unique $a \in K$ tel que $g = ax_i$.

D’autre part, il existe un unique $\lambda \in \Lambda$ tel que $a \in Hy_\lambda$.

On en déduit que $g \in Hy_\lambda x_i$ ; par suite, on a :

$$G = \bigcup_{(\lambda, i) \in \Lambda \times I} Hy_\lambda x_i.$$

Démontrons que la famille des $Hy_\lambda x_i$, pour $(\lambda, i) \in \Lambda \times I$ forme une partition de $G$. Supposons $Hy_\lambda x_i = Hy_\mu x_j$.

$$\begin{aligned}
&\qquad H \subseteq K \implies KH = K ; \\
\text{or} \qquad &Hy_\lambda x_i = Hy_\mu x_j \implies KHy_\lambda x_i = KHy_\mu x_j. \\
&\qquad KHy_\lambda = Ky_\lambda = K, \quad \text{car } y_\lambda \in K ; \quad \text{de même } KHy_\mu = K ;
\end{aligned}$$

<PageRef :page="79" />

on en déduit :

$$Kx_i = Kx_j, \qquad \text{d’où } i = j ;$$

par suite, on a

$$Hy_\lambda = Hy_\mu, \qquad \text{d’où } \lambda = \mu.$$

La famille $\{y_\lambda x_i\}_{(\lambda, i) \in \Lambda \times I}$ est donc une famille de représentants des classes à droite distinctes de $G$ modulo $H$, d’où :

$$[G : H] = \card(\Lambda \times I).$$

Par hypothèse, $[G : H]$ est fini, par suite, $\Lambda$ et $I$ sont des *ensembles finis*, en particulier :

$$[G : K] = \card(I) \text{ est fini}$$

et $\card(\Lambda \times I) = \card(\Lambda)\card(I)$ implique :

$$[G : H] = [G : K][K : H].$$

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 78, preuve du théorème (2.18)), il est imprimé « des classes à droites distinctes » (avec un *s* à *droite*).

</FoldNote>

<FoldNote kind="intuition" title="Intuition — Lecture combinatoire de la formule des indices $(2.18)$">

Si $G$ est fini, la formule <MathRef id="eq-2-6">$(6)$</MathRef> n’est qu’une fraction qui se simplifie grâce à <MathRef id="2.15">la proposition (2.15)</MathRef> :

$$[G : H] = \frac{o(G)}{o(H)} = \frac{o(G)}{o(K)} \cdot \frac{o(K)}{o(H)} = [G : K][K : H].$$

Tout l’intérêt du théorème <MathRef id="2.18">$(2.18)$</MathRef> est de **rester valable dans un groupe infini** (par exemple $H = 6\Z \subset K = 2\Z \subset G = \Z$, où $[\Z : 6\Z] = 6 = 2 \times 3 = [\Z : 2\Z][2\Z : 6\Z]$). L’idée est un **découpage en deux temps** :

- $G$ est d’abord découpé en $[G : K]$ « gros blocs » $Kx_i$ ($i \in I$).
- $K$ lui-même est découpé en $[K : H]$ « sous-blocs » $Hy_\lambda$ ($\lambda \in \Lambda$).
- En translatant à droite par $x_i$ ($k \mapsto kx_i$ est bijective de $K$ sur $Kx_i$), la partition de $K$ se transporte dans **chaque** gros bloc $Kx_i$, le découpant en exactement $[K : H]$ classes à droite modulo $H$, à savoir les $Hy_\lambda x_i$ ($\lambda \in \Lambda$).

Chaque gros bloc contenant exactement $[K : H]$ sous-classes disjointes modulo $H$, on dénombre au total $[G : K] \times [K : H]$ classes modulo $H$ dans $G$.

</FoldNote>

<MathBlock id="2.19" kind="rem" title="Remarque (2.19)">

Le <MathRef id="2.18">théorème $(2.18)$</MathRef> peut être généralisé dans le sens suivant : si $H$ et $K$ sont deux sous-groupes de $G$ tels que $H \subseteq K$, alors la <MathRef id="eq-2-6">formule $(6)$</MathRef> est valable dès que deux quelconques des indices qui y figurent sont finis et le troisième est alors fini.

</MathBlock>

<CosetsLagrangeLab />

---

*(Note originale de la page 75)* — `(1)` Joseph-Louis Lagrange (comte de), mathématicien français (1736–1813).

*(Note originale de la page 77)* — `(2)` Henri-Jules Poincaré, mathématicien français (1854–1912).
