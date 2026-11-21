<script setup lang="ts">
import type { ProofStep } from '../../src/components/ProofBlock.vue'

const steps_3_55: ProofStep[] = [
  {
    title: '1. Associer un cycle $\\gamma$ à chaque $\\sigma$-orbite non ponctuelle',
    body: 'Comme $\\sigma \\neq e$, $\\supp(\\sigma) \\neq \\varnothing$ et il existe au moins une $\\sigma$-orbite non ponctuelle $\\Omega_\\sigma(i) = \\{i, \\sigma(i), \\dots, \\sigma^{p-1}(i)\\}$ avec $2 \\leqslant p \\leqslant n$. En posant $j_1 = i$, $j_2 = \\sigma(i)$, $\\dots$, $j_p = \\sigma^{p-1}(i)$, la restriction de $\\sigma$ à $\\Omega_\\sigma(i)$ coïncide avec celle du $p$-cycle $\\gamma = (j_1, j_2, \\dots, j_p)$ à son support.',
    why: 'On extrait ainsi de chaque orbite de taille $\\geqslant 2$ un unique cycle dont le support est exactement cette orbite.'
  },
  {
    title: '2. Disjonction et commutativité des cycles $\\gamma_q$',
    body: 'Soit $\\{\\Omega_q\\}_{1 \\leqslant q \\leqslant s}$ la famille des $\\sigma$-orbites non ponctuelles distinctes dans $\\N_n$, et soit $\\gamma_q$ le cycle associé à $\\Omega_q$. Comme les classes d’équivalence $\\Omega_q$ sont deux à deux disjointes, les supports des cycles $\\gamma_q$ le sont aussi ; d’après la proposition $(3.39)$, ces cycles commutent deux à deux.',
    why: 'La partition de $\\N_n$ en orbites garantit automatiquement que les cycles obtenus sont disjoints, donc permutables.'
  },
  {
    title: '3. Vérifier l’égalité $\\sigma = \\gamma_1 \\circ \\gamma_2 \\circ \\dots \\circ \\gamma_s$',
    body: 'En posant $\\sigma\' = \\gamma_1 \\circ \\gamma_2 \\circ \\dots \\circ \\gamma_s$, on compare $\\sigma\'(k)$ et $\\sigma(k)$ sur chaque élément de $\\N_n$ : si $k \\in \\Omega_l$, tous les cycles $\\gamma_q$ pour $q \\neq l$ fixent $k$, donc $\\sigma\'(k) = \\gamma_l(k) = \\sigma(k)$ ; si $k$ n’appartient à aucune orbite non ponctuelle, $\\sigma(k) = k$ et chaque $\\gamma_q(k) = k$, d’où $\\sigma\'(k) = k = \\sigma(k)$.',
    why: 'La commutativité des cycles permet de placer n’importe quel facteur $\\gamma_l$ à droite du produit pour évaluer $\\sigma\'$ sur $\\Omega_l$.'
  },
  {
    title: '4. Unicité à l’ordre des facteurs près',
    body: 'Si $\\sigma = \\gamma\'_1 \\circ \\gamma\'_2 \\circ \\dots \\circ \\gamma\'_r$ est une autre décomposition en cycles disjoints différents de $e$, les supports $\\Omega\'_p = \\supp(\\gamma\'_p)$ ($1 \\leqslant p \\leqslant r$) sont exactement les $\\sigma$-orbites non ponctuelles de $\\N_n$. Par unicité de la partition de $\\N_n$ en $\\sigma$-orbites, $r = s$ et il existe $\\pi \\in S_s$ telle que $\\Omega\'_p = \\Omega_{\\pi(p)}$ et $\\gamma\'_p = \\gamma_{\\pi(p)}$.',
    why: 'La décomposition en cycles ne dépend pas d’un choix arbitraire : les supports sont intrinsèquement imposés par les orbites de $\\sigma$.'
  }
]

const steps_3_59: ProofStep[] = [
  {
    title: '1. Notation des longueurs et de leur PPCM $l$',
    body: 'Pour chaque $q \\in \\{1, \\dots, s\\}$, on pose $\\Omega_q = \\supp(\\gamma_q)$ et $r_q = \\operatorname{long}(\\gamma_q) = |\\Omega_q|$ ; soit $l = \\ppcm(r_1, \\dots, r_s) \\in \\N^*$.',
    why: 'D’après la proposition $(3.50)$, chaque facteur $\\gamma_q$ est d’ordre $r_q$ dans $S_n$.'
  },
  {
    title: '2. Montrer que $k = o(\\sigma)$ divise $l$',
    body: 'Pour tout $q$ ($1 \\leqslant q \\leqslant s$), $l$ est multiple de $r_q$, donc $\\gamma_q^l = e$. Comme les $\\gamma_q$ commutent deux à deux, $\\sigma^l = \\gamma_1^l \\circ \\gamma_2^l \\circ \\dots \\circ \\gamma_s^l = e$, ce qui entraîne que $k = o(\\sigma)$ divise $l$.',
    why: 'C’est l’étape qui utilise de façon cruciale la disjonction des cycles : sans commutativité, on n’aurait pas $(\\gamma_1 \\circ \\dots \\circ \\gamma_s)^l = \\gamma_1^l \\circ \\dots \\circ \\gamma_s^l$.'
  },
  {
    title: '3. Montrer que $l$ divise $k$ et conclure',
    body: 'Comme $\\gamma_{q / \\Omega_q} = \\sigma_{/ \\Omega_q}$ et $\\sigma^k = e$, on a $\\gamma_{q / \\Omega_q}^k = \\sigma_{/ \\Omega_q}^k = e_{\\Omega_q}$, et comme $\\gamma_q$ fixe les points hors de $\\Omega_q$, cela donne $\\gamma_q^k = e$. Ainsi $r_q = o(\\gamma_q)$ divise $k$ pour tout $q$ ($1 \\leqslant q \\leqslant s$), donc $l$ divise $k$, d’où $k = l$.',
    why: 'Les cycles ayant des supports disjoints, la condition globale $\\sigma^k = e$ se lit indépendamment sur chaque orbite $\\Omega_q$.'
  }
]

const steps_3_67: ProofStep[] = [
  {
    title: '1. Invariance des $\\sigma$-orbites ne contenant ni $i$ ni $j$',
    body: 'Posons $\\tau = (i, j)$. Si $\\Omega_\\sigma(k)$ ne contient ni $i$ ni $j$, $\\tau$ agit comme l’identité sur $\\Omega_\\sigma(k)$, donc $\\Omega_{\\sigma \\circ \\tau}(k) = \\Omega_\\sigma(k)$.',
    why: 'L’effet de la composition à droite par $\\tau = (i, j)$ est strictement localisé aux orbites qui contiennent $i$ ou $j$.'
  },
  {
    title: '2. Premier cas : $i$ et $j$ dans deux $\\sigma$-orbites distinctes',
    body: 'Soient $\\Omega_\\sigma(i) = \\{i, \\sigma(i), \\dots, \\sigma^{p-1}(i)\\}$ et $\\Omega_\\sigma(j) = \\{j, \\sigma(j), \\dots, \\sigma^{q-1}(j)\\}$ disjointes. Comme $(\\sigma \\circ \\tau)(i) = \\sigma(j)$, on suit les images successives : $(\\sigma \\circ \\tau)^r(i) = \\sigma^r(j)$ pour $1 \\leqslant r \\leqslant q - 1$, puis $(\\sigma \\circ \\tau)^q(i) = j$, puis $(\\sigma \\circ \\tau)^{q+1}(i) = \\sigma(i)$, et enfin $(\\sigma \\circ \\tau)^{q+p}(i) = i$. Les deux orbites fusionnent en une seule $\\sigma \\circ \\tau$-orbite, donc le nombre d’orbites passe de $t$ à $t - 1$.',
    why: 'La transposition $\\tau$ aiguille $i$ sur l’orbite de $j$ et $j$ sur l’orbite de $i$, raccordant les deux boucles en une seule boucle de longueur $p + q$.'
  },
  {
    title: '3. Second cas : $i$ et $j$ dans une même $\\sigma$-orbite',
    body: 'Soit $\\Omega_\\sigma(i) = \\{i, \\sigma(i), \\dots, \\sigma^{p-1}(i)\\}$, et soit l’unique entier $r$ ($1 \\leqslant r \\leqslant p - 1$) tel que $\\sigma^r(i) = j$. On a $(\\sigma \\circ \\tau)(i) = \\sigma(j) = \\sigma^{r+1}(i)$, d’où $\\Omega_{\\sigma \\circ \\tau}(i) = \\{i, \\sigma^{r+1}(i), \\dots, \\sigma^{p-1}(i)\\}$ (qui ne contient pas $j$), tandis que $(\\sigma \\circ \\tau)(j) = \\sigma(i)$ engendre $\\Omega_{\\sigma \\circ \\tau}(j) = \\{j, \\sigma(i), \\dots, \\sigma^{r-1}(i)\\}$. La $\\sigma$-orbite se scinde en deux $\\sigma \\circ \\tau$-orbites, donc le nombre d’orbites passe de $t$ à $t + 1$.',
    why: 'Couper une boucle en deux points $i$ et $j$ la sépare en deux boucles disjointes de longueurs $p - r$ et $r$.'
  },
  {
    title: '4. Conclusion sur la signature $\\varepsilon(\\sigma \\circ \\tau)$',
    body: 'Dans les deux cas, le nombre $t\'$ de $\\sigma \\circ \\tau$-orbites vaut $t \\pm 1$, d’où $\\varepsilon(\\sigma \\circ \\tau) = (-1)^{n - (t \\pm 1)} = -(-1)^{n - t} = -\\varepsilon(\\sigma)$.',
    why: 'Qu’il y ait fusion ($t - 1$) ou scission ($t + 1$), la parité de $n - t$ change toujours exactement d’une unité.'
  }
]
</script>

## 2 — Groupes symétriques $S_n$

<PageRef :page="105" />

Pour tout entier $n \geqslant 1$, le groupe symétrique $S_n$ (<MathRef id="1.14">exemple $(1.14)$</MathRef>) est le groupe des permutations de l’ensemble $\{1, 2, \dots, n\}$, *noté désormais* $\N_n$.

Plus généralement, nous avons vu (<MathRef id="1.74">lemme $(1.74)$</MathRef>) que $S_n$ pouvait être considéré comme le groupe des permutations de tout ensemble fini de cardinal $n$.

Rappelons que $S_n$ est un groupe fini d’ordre $n!$, non abélien pour $n > 2$.

<PageRef :page="106" />

### A / Notion de $\sigma$-orbite (ou orbite suivant $\sigma$)

*a) Support d’une permutation :*

<MathBlock id="3.37" kind="def" title="Définition (3.37)">

Soit $\sigma \in S_n$, le *<GlossaryTerm id="support-permutation">support</GlossaryTerm>* de $\sigma$ est l’ensemble :

$$\supp(\sigma) = \{i \in \N_n ;\; \sigma(i) \neq i\}.$$

</MathBlock>

<MathBlock id="3.38" kind="rem" title="Remarques (3.38)">

$1^\circ$ Dans $S_n$, $\sigma = e$ si et seulement si $\supp \sigma = \varnothing$.

$2^\circ$ Quel que soit $\sigma \neq e$ dans $S_n$, *la restriction de $\sigma$ à $\supp(\sigma)$ est une permutation de l’ensemble $\supp(\sigma)$.*

En effet, soit $i \in \supp(\sigma)$ ; posons $\sigma(i) = j$.

Si $j$ n’appartenait pas à $\supp(\sigma)$, on aurait $\sigma(j) = j$ ; $\sigma$ étant injectif, $\sigma(i) = \sigma(j)$ impliquerait $i = j$, ce qui est contraire à l’hypothèse $i \in \supp(\sigma)$.

La restriction $\sigma'$ de $\sigma$ à son support est donc une application injective de l’ensemble fini non vide $\supp(\sigma)$ dans lui-même ; par suite, $\sigma'$ est une permutation de l’ensemble $\supp(\sigma)$, en vertu du théorème suivant [57] :

« *Si $E$ et $F$ sont deux ensembles finis non vides de même cardinal*, alors, pour une application $f$ de $E$ dans $F$, on a :

$$f \text{ injective } \iff f \text{ surjective} ;$$

donc, en particulier : $f \text{ injective } \implies f \text{ bijective.}$ »

$3^\circ$ D’après la remarque précédente, $\supp(\sigma^{-1}) = \supp(\sigma)$ ; on en déduit :

$$\supp(\sigma^k) \subseteq \supp(\sigma), \quad \text{pour tout } k \in \Z.$$

</MathBlock>

<MathBlock id="3.39" kind="prop" title="Proposition (3.39)">

*Dans tout groupe $S_n$, deux permutations dont les supports sont disjoints <GlossaryTerm id="permutables">commutent</GlossaryTerm>.*

</MathBlock>

<ProofBlock>

La propriété étant immédiate pour $n = 1$, supposons $n > 1$ et considérons $\sigma_1 \neq \sigma_2$ dans $S_n$ tels que

$$\supp(\sigma_1) \cap \supp(\sigma_2) = \varnothing.$$

<PageRef :page="107" />

Si l’une des deux permutations est l’identité, la propriété est vérifiée ; supposons les deux supports non vides.

Soit $i \in \supp(\sigma_1)$, alors $i \notin \supp(\sigma_2)$ et $\sigma_1(i) \notin \supp(\sigma_2)$, par suite :

$$\sigma_1 \circ \sigma_2(i) = \sigma_1(i) \qquad \text{et} \qquad \sigma_2 \circ \sigma_1(i) = \sigma_1(i).$$

De même pour $i \in \supp(\sigma_2)$, on a :

$$\sigma_1 \circ \sigma_2(i) = \sigma_2(i) \qquad \text{et} \qquad \sigma_2 \circ \sigma_1(i) = \sigma_2(i).$$

D’autre part, s’il existe $i \in \N_n$ tel que $i \notin \supp(\sigma_1) \cup \supp(\sigma_2)$, alors $\sigma_1 \circ \sigma_2(i) = i$ et $\sigma_2 \circ \sigma_1(i) = i$.

On en conclut que $\sigma_1 \circ \sigma_2 = \sigma_2 \circ \sigma_1$.

</ProofBlock>

<FoldNote kind="intuition" title="Intuition — Pourquoi deux supports disjoints assurent la commutativité">

Une permutation $\sigma$ n’agit (ne déplace des éléments) que sur son support $\supp(\sigma)$ et laisse fixes tous les autres entiers de $\N_n$. Lorsque $\supp(\sigma_1) \cap \supp(\sigma_2) = \varnothing$, $\sigma_1$ et $\sigma_2$ opèrent sur deux zones disjointes de $\N_n$ : l’ordre dans lequel on effectue ces deux réarrangements indépendants est indifférent. Attention : la réciproque est fausse ! Par exemple, une permutation $\sigma$ commute toujours avec $\sigma^{-1}$ et avec $\sigma^2$, alors que leurs supports ne sont pas disjoints.

</FoldNote>

*b) Notion de $\sigma$-orbite (ou orbite suivant $\sigma$).* À toute permutation $\sigma \in S_n$, on associe la relation binaire $\mathscr{R}_\sigma$ définie dans $\N_n$ par :

$$i \mathrel{\mathscr{R}_\sigma} k \iff \exists r \in \Z, \quad \sigma^r(i) = k.$$

Il est facile de vérifier que $\mathscr{R}_\sigma$ est une relation d’équivalence dans $\N_n$ et que la classe d’équivalence modulo $\mathscr{R}_\sigma$ d’un élément $i \in \N_n$ est :

<span id="ref-eq-3-16"></span>

$$\Omega_\sigma(i) = \{\sigma^r(i) ;\; r \in \Z\} \tag{16}$$

<MathBlock id="3.40" kind="def" title="Définition (3.40)">

Pour tout $\sigma \in S_n$ et tout $i \in \N_n$, $\Omega_\sigma(i)$ s’appelle la *<GlossaryTerm id="orbite-permutation">$\sigma$-orbite</GlossaryTerm> de $i$* (ou *l’orbite de $i$ suivant $\sigma$*).

</MathBlock>

<MathBlock id="3.41" kind="rem" title="Remarques (3.41)">

$1^\circ$ Supposons $n > 1$ et $\sigma \neq e$ dans $S_n$ tel que $o(\sigma) = p$, on a alors : $\langle \sigma \rangle = \{\sigma^r ;\; r \in \Z\} = \{e, \sigma, \dots, \sigma^{p-1}\}$ ; par suite, en notant $|\Omega_\sigma(i)|$ le cardinal de la $\sigma$-orbite de $i$, on a, pour tout $i \in \N_n$ :

<span id="ref-eq-3-17"></span>

$$1 \leqslant |\Omega_\sigma(i)| \leqslant p \tag{17}$$

Si $i \notin \supp(\sigma)$, alors $\Omega_\sigma(i) = \{i\}$, donc $|\Omega_\sigma(i)| = 1$.

Une $\sigma$-orbite de cardinal $1$ sera dite *ponctuelle*.

Si $i \in \supp(\sigma)$, on a nécessairement $2 \leqslant |\Omega_\sigma(i)| \leqslant p$.

<PageRef :page="108" />

$2^\circ$ Si $\{i_1, i_2, \dots, i_t\}$ est une famille de représentants des $\sigma$-orbites distinctes de $\N_n$, les $\{\Omega_\sigma(i_q)\}_{1 \leqslant q \leqslant t}$ forment une partition de $\N_n$, d’où

<span id="ref-eq-3-18"></span>

$$n = \sum_{1 \leqslant q \leqslant t} |\Omega_\sigma(i_q)| \tag{18}$$

</MathBlock>

<MathBlock id="3.42" kind="ex" title="Exemple (3.42)">

Soit $\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\ 5 & 2 & 1 & 6 & 3 & 4 \end{pmatrix}$

$$\Omega_\sigma(1) = \{1, 5, 3\}, \qquad \Omega_\sigma(2) = \{2\}, \qquad \Omega_\sigma(4) = \{4, 6\}.$$

</MathBlock>

### B / Cycles dans $S_n$. Transpositions

À titre d’exemple, considérons la permutation :

$$\gamma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\ 1 & 4 & 3 & 6 & 2 & 5 \end{pmatrix}.$$

Le support de $\gamma$ est $\{2, 4, 5, 6\}$ et on remarque que :

$$\gamma(2) = 4, \qquad \gamma(4) = 6, \qquad \gamma(6) = 5 \qquad \text{et} \qquad \gamma(5) = 2.$$

On dit que, dans le groupe $S_6$, $\gamma$ est *un cycle de longueur $4$* et $\gamma$ est noté $(2, 4, 6, 5)$. La notion générale de cycle dans $S_n$ est la suivante :

<MathBlock id="3.43" kind="def" title="Définition (3.43)">

Une permutation $\gamma \in S_n$ est un *<GlossaryTerm id="cycle-transposition">cycle de longueur $r$</GlossaryTerm>* ($1 \leqslant r \leqslant n$ dans $\N$) s’il existe un ensemble ordonné de $r$ entiers distincts dans $\N_n$ : $j_1, j_2, \dots, j_r$, tels que :

$$\gamma(j_1) = j_2, \qquad \gamma(j_2) = j_3, \dots, \gamma(j_{r-1}) = j_r, \qquad \gamma(j_r) = j_1$$

et pour tout $k \in \N_n \setminus \{j_1, j_2, \dots, j_r\}$, $\gamma(k) = k$.

Un tel cycle sera noté $\gamma = (j_1, j_2, \dots, j_r)$.

L’ensemble $\{j_1, j_2, \dots, j_r\}$ est le *support* de $\gamma$.

</MathBlock>

<MathBlock id="3.44" kind="rem" title="Remarque (3.44)">

$1^\circ$ Un cycle $(j_1, j_2, \dots, j_r)$ peut aussi être noté $(j_k, j_{k+1}, \dots, j_r, j_1, j_2, \dots, j_{k-1})$, quel que soit $k$ ($1 < k \leqslant r$).

$2^\circ$ *Tout cycle de longueur $1$ est l’identité $e$* : en effet, si $\gamma = (j)$, on a $\gamma(j) = j$ et pour tout $k \neq j$ dans $\N_n$, $\gamma(k) = k$, donc $\gamma = e$.

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Borne sur $k$ en $(3.44)\;1^\circ$">

Dans l’édition imprimée de 1984 (p. 108, *Remarque $(3.44)\;1^\circ$*), il est imprimé « quel que soit $k$ ($1 < k \leqslant n$) ». Il s’agit d’une coquille typographique pour $1 < k \leqslant r$ (la longueur du cycle étant $r$, et non $n$).

</FoldNote>

<PageRef :page="109" />

<MathBlock id="3.45" kind="def" title="Définition (3.45)">

Un cycle de *longueur $2$* dans $S_n$ ($n \geqslant 2$) est appelé *transposition*. Si $\tau = (j_1, j_2)$, on a $\tau(j_1) = j_2$, $\tau(j_2) = j_1$ et $\tau(k) = k$, pour tout $k \in \N_n \setminus \{j_1, j_2\}$.

*Une transposition dans $S_n$ est donc une permutation qui, dans $\N_n$, échange deux éléments et laisse invariants tous les autres (lorsque $n \geqslant 3$).*

</MathBlock>

<MathBlock id="3.46" kind="ex" title="Exemples (3.46)">

— $S_2 = \{e, \tau\}$ où $\tau$ est la transposition qui échange $1$ et $2$.

— Dans $S_3$, les permutations $\tau_1, \tau_2, \tau_3$ (<MathRef id="1.15">notations $(1.15)$</MathRef>) sont des transpositions et $\sigma_1, \sigma_2$ sont des cycles de longueur $3$.

</MathBlock>

<MathBlock id="3.47" kind="rem" title="Remarque (3.47)">

Pour $n \geqslant 2$ dans $\N$, le nombre des transpositions dans $S_n$ est égal au nombre de couples $(i, j) \in \N_n \times \N_n$ tels que $i \neq j$ ; ce nombre est donc $\mathrm{C}_n^2 = \dfrac{n(n-1)}{2}$ ([16], [49]).

</MathBlock>

<FoldNote kind="prepa" title="Précision prépa — Couples $(i, j)$ vs paires $\{i, j\}$">

À l’écrit de la remarque $(3.47)$, il convient de lire « parties à deux éléments $\{i, j\} \subseteq \N_n$ » (soit $\binom{n}{2} = \mathrm{C}_n^2 = \dfrac{n(n-1)}{2}$ paires non ordonnées), car les transpositions $(i, j)$ et $(j, i)$ sont égales (le nombre de *couples* ordonnés $(i, j)$ avec $i \neq j$ étant $n(n-1)$).

</FoldNote>

<MathBlock id="3.48" kind="def" title="Définition (3.48)">

Dans $S_n$ ($n \geqslant 2$), le cycle de *longueur $n$* :

$$\gamma_1 = (1, 2, \dots, n) = \begin{pmatrix} 1 & 2 & 3 & \dots & n \\ 2 & 3 & 4 & \dots & 1 \end{pmatrix}$$

est appelé *permutation circulaire* des entiers $1, 2, \dots, n$.

</MathBlock>

<MathBlock id="3.49" kind="rem" title="Remarques (3.49)">

$1^\circ$ Dans $S_n$ ($n \geqslant 3$) un cycle de longueur $n$ n’est pas nécessairement la permutation circulaire.

Par exemple, dans $S_4$ : $\gamma = \begin{pmatrix} 1 & 2 & 3 & 4 \\ 3 & 1 & 4 & 2 \end{pmatrix}$ est le cycle $(1, 3, 4, 2)$ différent de $(1, 2, 3, 4)$.

$2^\circ$ Dans $S_n$, un cycle de longueur $r$ ($1 \leqslant r \leqslant n$) sera appelé un *$r$-cycle*.

</MathBlock>

<MathBlock id="3.50" kind="prop" title="Proposition (3.50)">

*Dans tout groupe $S_n$, un $r$-cycle est un élément d’ordre $r$.*

</MathBlock>

<ProofBlock>

Soit $\gamma = (j_1, j_2, \dots, j_r)$ un $r$-cycle dans $S_n$.

— Si $r = 1$, alors $\gamma = e$, donc $o(\gamma) = 1$.

— Supposons $1 < r \leqslant n$ ; pour tout $k$ ($1 \leqslant k \leqslant r$), on a :

$$\gamma(j_k) = j_{k+1}, \quad \gamma^2(j_k) = j_{k+2}, \;\dots, \; \gamma^{r-k}(j_k) = j_r, \;\dots, \; \gamma^r(j_k) = j_k.$$

<PageRef :page="110" />

D’autre part, si $r < n$ et $i \notin \supp(\gamma)$, alors $\gamma(i) = i$.

Les $r$ éléments $j_1, j_2, \dots, j_r$ étant distincts, $r$ est le plus petit entier positif tel que $\gamma^r = e$, d’où $o(\gamma) = r$.

</ProofBlock>

<MathBlock id="3.51" kind="cor" title="Corollaire (3.51)">

*Si $\tau$ est une transposition dans $S_n$, alors $\tau^2 = e$ donc $\tau^{-1} = \tau$.*

</MathBlock>

<MathBlock id="3.52" kind="rem" title="Remarques (3.52)">

$1^\circ$ Dans tout groupe symétrique $S_n$, *l’inverse d’un $r$-cycle est un $r$-cycle*. En effet, si $\gamma = (j_1, j_2, \dots, j_r)$, alors

$$\gamma^{-1} = \gamma^{r-1} = (j_r, j_{r-1}, \dots, j_1).$$

Cependant, pour $p$ entier tel que $2 \leqslant p \leqslant r - 2$, *$\gamma^p$ n’est pas nécessairement un cycle* (exercice 22, chap. III).

Par exemple, dans $S_4$, si $\gamma_1$ est la permutation circulaire :

$$\gamma_1^2 = \begin{pmatrix} 1 & 2 & 3 & 4 \\ 3 & 4 & 1 & 2 \end{pmatrix} \text{ n’est pas un cycle.}$$

$2^\circ$ On déduit de l’exemple précédent qu’un produit de cycles n’est pas nécessairement un cycle.

On remarquera cependant que pour $1 \leqslant n \leqslant 3$, tout élément de $S_n$ est un cycle.

</MathBlock>

<MathBlock id="3.53" kind="prop" title="Proposition (3.53)">

*Dans $S_n$ ($n \geqslant 2$), une permutation $\gamma \neq e$ est un cycle si et seulement si, dans la décomposition de $\N_n$ en $\gamma$-orbites, il n’existe qu’une seule $\gamma$-orbite non ponctuelle ; le cardinal de celle-ci est alors égal à la longueur du cycle.*

</MathBlock>

<ProofBlock>

Soit $\gamma$ un $r$-cycle dans $S_n$, $1 < r \leqslant n$. Posons

$$\gamma = (j_1, j_2, \dots, j_r) ;$$

d’après la <MathRef id="3.50">proposition $(3.50)$</MathRef>, $\gamma$ est d’ordre $r$ dans $S_n$, d’où

$$\Omega_\gamma(j_1) = \{j_1, \gamma(j_1), \dots, \gamma^{r-1}(j_1)\},$$

$$\text{donc} \qquad \Omega_\gamma(j_1) = \{j_1, j_2, \dots, j_r\}.$$

D’autre part, si $r \neq n$ et $i \notin \supp(\gamma)$, on a $\Omega_\gamma(i) = \{i\}$ ; il n’existe donc qu’une seule $\gamma$-orbite non ponctuelle et son cardinal est $r$.

<PageRef :page="111" />

— Réciproquement, soit $\gamma \in S_n$ tel qu’il n’existe qu’une seule $\gamma$-orbite non ponctuelle de cardinal $r$ :

$$\Omega_\gamma(j) = \{j, \gamma(j), \dots, \gamma^{r-1}(j)\}$$

$\Omega_\gamma(j)$ non ponctuelle implique $1 < r \leqslant n$ et $\gamma \neq e$.

Posons $j = j_1$, $\gamma(j) = j_2, \dots, \gamma^{r-1}(j) = j_r$ ; l’hypothèse implique alors que $\gamma$ coïncide avec le $r$-cycle $(j_1, j_2, \dots, j_r)$.

</ProofBlock>

### C / Décomposition d’une permutation en un produit de cycles ou en un produit de transpositions

<MathBlock id="3.54" kind="rem" title="Remarque (3.54)">

Dans un groupe $S_n$, on dira que *deux cycles sont disjoints*, si leurs supports sont disjoints.

</MathBlock>

D’après la <MathRef id="3.39">proposition $(3.39)$</MathRef>, *deux cycles disjoints commutent*.

<MicroChallenge title="Défi avant le théorème de décomposition — Orbites, cycles et ordre dans $S_6$" hint="Partez de $1$ et suivez ses images itérées par $\sigma$ jusqu’à revenir à $1$, puis recommencez avec le plus petit entier non encore visité.">

Considérons dans $S_6$ la permutation $\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\ 3 & 5 & 4 & 1 & 6 & 2 \end{pmatrix}$.

1. Quelles sont les $\sigma$-orbites dans $\N_6$ ?
2. Comment écrire $\sigma$ comme un produit de cycles à supports disjoints ?
3. Sans calculer toutes les puissances $\sigma^k$, quel est à votre avis l’ordre $o(\sigma)$ ?

<template #answer>

1. En suivant les images : $1 \mapsto 3 \mapsto 4 \mapsto 1$ et $2 \mapsto 5 \mapsto 6 \mapsto 2$. On a donc deux $\sigma$-orbites de cardinal $3$ : $\Omega_\sigma(1) = \{1, 3, 4\}$ et $\Omega_\sigma(2) = \{2, 5, 6\}$.
2. Sur la première orbite $\sigma$ coïncide avec $(1, 3, 4)$, et sur la seconde avec $(2, 5, 6)$ : comme ces deux cycles ont des supports disjoints, ils commutent et $\sigma = (1, 3, 4) \circ (2, 5, 6) = (2, 5, 6) \circ (1, 3, 4)$.
3. Comme $(1, 3, 4)^3 = e$ et $(2, 5, 6)^3 = e$ et qu’ils commutent, $\sigma^3 = (1, 3, 4)^3 \circ (2, 5, 6)^3 = e$ alors que $\sigma \neq e$, donc $o(\sigma) = 3 = \ppcm(3, 3)$. C’est ce que formalisent le <MathRef id="3.55">théorème $(3.55)$</MathRef> et la <MathRef id="3.59">proposition $(3.59)$</MathRef>.

</template>

</MicroChallenge>

<MathBlock id="3.55" kind="thm" title="Théorème (3.55)">

*Toute permutation $\sigma \neq e$ dans $S_n$ s’écrit sous la forme :*

<span id="ref-eq-3-19"></span>

$$\sigma = \gamma_1 \circ \gamma_2 \circ \dots \circ \gamma_s \tag{19}$$

*où $s \in \N^*$, $\gamma_1, \gamma_2, \dots, \gamma_s$ sont des cycles disjoints, tous différents de $e$ et la décomposition <MathRef id="eq-3-19">$(19)$</MathRef> est unique à l’ordre des facteurs près.*

</MathBlock>

<ProofBlock :steps="steps_3_55">

Soit $\sigma \neq e$ dans $S_n$ ; le support de $\sigma$ étant non vide, il existe au moins une $\sigma$-orbite non ponctuelle $\Omega_\sigma(i)$.

Si $\Omega_\sigma(i) = \{i, \sigma(i), \dots, \sigma^{p-1}(i)\}$ avec $2 \leqslant p \leqslant n$ ; posons

$$i = j_1, \qquad \sigma(i) = j_2, \quad \dots, \quad \sigma^{p-1}(i) = j_p$$

et notons $\gamma$ le cycle $(j_1, j_2, \dots, j_p)$.

La restriction de $\sigma$ à $\{j_1, j_2, \dots, j_p\}$ est égale à la restriction de $\gamma$ à son support. Ainsi, à toute $\sigma$-orbite non ponctuelle $\Omega$, on peut associer un cycle $\gamma$ dont le support est $\Omega$.

Soit $\{\Omega_q\}_{1 \leqslant q \leqslant s}$ la famille des $\sigma$-orbites *non ponctuelles distinctes* dans $\N_n$. À toute $\sigma$-orbite $\Omega_q$ associons, comme plus haut, le cycle $\gamma_q$, dont le support est $\Omega_q$. Les $\sigma$-orbites $\Omega_q$ ($1 \leqslant q \leqslant s$) étant deux à deux disjointes, *les cycles $\gamma_q$ ($1 \leqslant q \leqslant s$) sont deux à deux disjoints*, donc ils *commutent* entre eux.

<PageRef :page="112" />

Posons $\sigma' = \gamma_1 \circ \gamma_2 \circ \dots \circ \gamma_s$ et comparons $\sigma'$ et $\sigma$.

Soit $j \in \displaystyle\bigcup_{1 \leqslant q \leqslant s} \Omega_q$ ; il existe $l$ ($1 \leqslant l \leqslant s$) tel que $j \in \Omega_l$. Puisque $\sigma_{/ \Omega_l} = \gamma_{l / \Omega_l}$, on a $\sigma(j) = \gamma_l(j)$.

D’autre part, on peut écrire $\sigma' = \gamma_l \circ \displaystyle\prod_{\substack{1 \leqslant q \leqslant s \\ q \neq l}} \gamma_q$ ; pour $q \neq l$, $\gamma_q(j) = j$, d’où $\sigma'(j) = \gamma_l(j)$.

De plus, s’il existe $k \in \N_n \setminus \displaystyle\bigcup_{1 \leqslant q \leqslant s} \Omega_q$, on a $\sigma(k) = k$ et aussi $\sigma'(k) = k$. On en conclut que $\sigma = \sigma'$.

Supposons que $\sigma = \gamma'_1 \circ \gamma'_2 \circ \dots \circ \gamma'_r$ soit une autre décomposition de $\sigma$ en un produit de cycles disjoints, tous différents de $e$. Pour tout $p$ ($1 \leqslant p \leqslant r$), notons $\Omega'_p$ la $\gamma'_p$-orbite non ponctuelle ; les cycles $\gamma'_p$ étant disjoints, les $\sigma$-orbites non ponctuelles sont alors les $\Omega'_p$, pour $1 \leqslant p \leqslant r$. La décomposition de $\N_n$ en $\sigma$-orbites étant unique, on en déduit que $r = s$ et qu’il existe une permutation $\pi$ dans le groupe symétrique $S_s$ telle que $\Omega'_p = \Omega_{\pi(p)}$ et par suite $\gamma'_p = \gamma_{\pi(p)}$ ; d’où l’unicité de la décomposition <MathRef id="eq-3-19">$(19)$</MathRef> à l’ordre des facteurs près.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Accord en $(3.55)$">

Dans l’édition imprimée de 1984 (p. 111, preuve du théorème $(3.55)$), la phrase « La restriction de $\sigma$ à $\{j_1, j_2, \dots, j_p\}$ est *égal* à la restriction de $\gamma$ à son support » comporte un défaut d’accord (*égal* au lieu de *égale*), rectifié ici.

</FoldNote>

<MathBlock id="3.56" kind="rem" title="Remarque (3.56)">

$1^\circ$ Compte tenu de son unicité, la décomposition d’une permutation $\sigma$ sous la forme <MathRef id="eq-3-19">$(19)$</MathRef> sera appelée : *décomposition canonique de $\sigma$ en un produit de cycles*.

$2^\circ$ Le <MathRef id="3.55">théorème $(3.55)$</MathRef> exprime que *tout groupe $S_n$ est engendré par l’ensemble de ses cycles*.

</MathBlock>

<MathBlock id="3.57" kind="ex" title="Exemple (3.57)">

Soit $\sigma$ la permutation du groupe $S_6$ considérée dans l’<MathRef id="3.42">exemple $(3.42)$</MathRef>. La décomposition de $\N_6$ en $\sigma$-orbites implique $\sigma = \gamma_1 \circ \gamma_2$ où $\gamma_1 = (1, 5, 3)$ et $\gamma_2 = (4, 6)$.

On écrira

$$\sigma = (1, 5, 3)(4, 6).$$

</MathBlock>

<MathBlock id="3.58" kind="rem" title="Remarque (3.58)">

Étant donné $\sigma \in S_n$, si $\{\Omega_q\}_{1 \leqslant q \leqslant t}$ est la famille de *toutes* les $\sigma$-orbites distinctes, alors, en associant éventuellement à toute $\sigma$-orbite ponctuelle le cycle $e$ de longueur $1$, on obtient, par la méthode du <MathRef id="3.55">théorème $(3.55)$</MathRef>, une décomposition de $\sigma$ en produit de $t$ cycles disjoints :

$$\sigma = \gamma_1 \circ \gamma_2 \circ \dots \circ \gamma_t$$

<PageRef :page="113" />

telle que

$$\sum_{1 \leqslant q \leqslant t} \operatorname{long}(\gamma_q) = n,$$

car pour tout $q$ ($1 \leqslant q \leqslant t$), $\operatorname{long}(\gamma_q) = |\Omega_q|$.

</MathBlock>

<MathBlock id="3.59" kind="prop" title="Proposition (3.59)">

*Soit $\sigma \neq e$ dans $S_n$ ($n \geqslant 2$) ; si $\sigma = \gamma_1 \circ \gamma_2 \circ \dots \circ \gamma_s$ est la décomposition canonique de $\sigma$, alors l’ordre de $\sigma$ dans le groupe $S_n$ est égal au $\ppcm$ des longueurs des cycles $\gamma_q$ ($1 \leqslant q \leqslant s$).*

</MathBlock>

<ProofBlock :steps="steps_3_59">

Pour tout $q$ ($1 \leqslant q \leqslant s$) posons $\Omega_q = \supp(\gamma_q)$ et $r_q = \operatorname{long}(\gamma_q) = |\Omega_q|$. Soit $l$ le $\ppcm$ des $r_q$, dans $\N^*$. Quel que soit $q$ ($1 \leqslant q \leqslant s$), $l$ est multiple de $r_q$, donc $\gamma_q^l = e$ ; or, les $\gamma_q$ commutent donc

$$\sigma^l = \gamma_1^l \circ \gamma_2^l \circ \dots \circ \gamma_s^l = e ;$$

on en déduit que, si $k = o(\sigma)$, alors $k$ *divise* $l$.

D’autre part, $\gamma_{q / \Omega_q} = \sigma_{/ \Omega_q}$, d’où $\gamma_{q / \Omega_q}^k = (\gamma_{q / \Omega_q})^k = \sigma_{/ \Omega_q}^k = e$ ; $\Omega_q$ étant le support de $\gamma_q$, on a $\gamma_q^k = e$ ; par suite, $k$ est multiple de $r_q$, quel que soit $q$ ($1 \leqslant q \leqslant s$), donc $l$ *divise* $k$. On en conclut que $k = l$.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Indice $1 \leqslant q \leqslant r$ en $(3.59)$">

Dans l’édition imprimée de 1984 (p. 113, preuve de la proposition $(3.59)$), l’avant-dernière ligne porte « quel que soit $q$ ($1 \leqslant q \leqslant r$) ». C’est une coquille pour $1 \leqslant q \leqslant s$ ($s$ désignant le nombre de cycles de la décomposition canonique, tandis que $r_q$ note la longueur de $\gamma_q$).

</FoldNote>

<MathBlock id="3.60" kind="thm" title="Théorème (3.60)">

*Pour tout $n \geqslant 2$ dans $\N$, toute permutation $\sigma \in S_n$ se décompose, de manière non unique, en un produit de transpositions non permutables, en général.*

</MathBlock>

<ProofBlock>

$n \geqslant 2$ implique qu’il existe au moins une transposition $\tau$ dans $S_n$. $e = \tau^2$, donc $e$ est produit de transpositions.

Sachant que toute permutation $\sigma \neq e$ dans $S_n$ est un produit de cycles (<MathRef id="3.55">théorème $(3.55)$</MathRef>), il suffit de prouver que tout cycle est un produit de transpositions.

Soit $\gamma = (j_1, j_2, \dots, j_r)$ dans $S_n$, tel que $1 < r \leqslant n$.

Notons $(j_p, j_q)$ la transposition qui échange $j_p$ et $j_q$ tels que $1 \leqslant p < q \leqslant n$ ; en écrivant $(j_p, j_q)(j_l, j_m)$ à la place de $(j_p, j_q) \circ (j_l, j_m)$, posons :

$$\gamma' = (j_1, j_2)(j_2, j_3) \dots (j_{r-1}, j_r).$$

<PageRef :page="114" />

Pour tout $k$ ($1 \leqslant k \leqslant r - 1$), on a $\gamma'(j_k) = j_{k+1} = \gamma(j_k)$ ; de plus $\gamma'(j_r) = j_1 = \gamma(j_r)$. S’il existe $k \in \N_n \setminus \supp(\gamma)$, alors $\gamma'(k) = k = \gamma(k)$.

On en déduit que $\gamma' = \gamma$, d’où

<span id="ref-eq-3-20"></span>

$$(j_1, j_2, \dots, j_r) = (j_1, j_2)(j_2, j_3) \dots (j_{r-1}, j_r) \tag{20}$$

De la décomposition canonique d’une permutation $\sigma$ en un produit de cycles, on peut donc déduire une décomposition de $\sigma$ en produit de transpositions, mais cette dernière *n’est pas unique* si $n \geqslant 3$, car, étant donné une transposition quelconque $(j, k)$ dans $S_n$, on vérifie facilement que

<span id="ref-eq-3-21"></span>

$$(j, k) = (1, j)(1, k)(1, j) \tag{21}$$

D’autre part, si $j, k, l$ sont trois entiers distincts dans $\N_n$, on a

$$(j, k)(k, l) \neq (k, l)(j, k) ;$$

on en déduit que dans une décomposition d’une permutation $\sigma \in S_n$ ($n \geqslant 3$) en un produit de transpositions, *deux transpositions distinctes non disjointes ne sont pas permutables*.

</ProofBlock>

<FoldNote kind="piege" title="Piège classique — Sens de composition dans $(20)$ et domaine de $(21)$">

1. **Ordre des facteurs dans $(20)$** : comme la composition $\circ$ s’écrit de droite à gauche, vérifier que $(j_1, j_2)(j_2, j_3) \dots (j_{r-1}, j_r)$ égale $(j_1, j_2, \dots, j_r)$ impose de suivre les images **de la droite vers la gauche** :
   - $j_1$ n’apparaît que dans le dernier facteur à gauche $(j_1, j_2)$, donc $j_1 \mapsto j_2$ ;
   - pour $2 \leqslant k \leqslant r - 1$, $j_k$ est envoyé sur $j_{k+1}$ par $(j_k, j_{k+1})$, et $j_{k+1}$ est fixé par tous les facteurs situés plus à gauche, donc $j_k \mapsto j_{k+1}$ ;
   - $j_r$ traverse toute la chaîne de droite à gauche : $j_r \mapsto j_{r-1} \mapsto \dots \mapsto j_2 \mapsto j_1$.
   *(Inversement, $(j_r, j_{r-1}) \dots (j_2, j_1)$ enverrait $j_1$ sur $j_r$ et donnerait le cycle inverse.)*
2. **Validité de $(21)$** : la formule $(j, k) = (1, j)(1, k)(1, j)$ suppose implicitement $j \neq 1$ et $k \neq 1$ (avec $j \neq k$). Si $j = 1$ ou $k = 1$, la transposition est déjà de la forme $(1, i)$.

</FoldNote>

<MathBlock id="3.61" kind="ex" title="Exemples (3.61)">

$1^\circ$ Soit $\gamma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\ 1 & 4 & 3 & 6 & 2 & 5 \end{pmatrix}$ ; $\gamma$ est le cycle $(2, 4, 6, 5)$ dans $S_6$.

En appliquant la formule <MathRef id="eq-3-20">$(20)$</MathRef>, on obtient :

$$\gamma = (2, 4)(4, 6)(6, 5).$$

$2^\circ$ Soit $\sigma \in S_6$ la permutation de l’<MathRef id="3.42">exemple $(3.42)$</MathRef>, dont la décomposition canonique <MathRef id="eq-3-19">$(19)$</MathRef> a été déterminée dans l’<MathRef id="3.57">exemple $(3.57)$</MathRef> : $\sigma = (1, 5, 3)(4, 6)$.

Compte tenu de la formule <MathRef id="eq-3-20">$(20)$</MathRef>, on a $\sigma = (1, 5)(5, 3)(4, 6)$.

D’après la relation <MathRef id="eq-3-21">$(21)$</MathRef>, on peut écrire

$$(5, 3) = (1, 5)(1, 3)(1, 5),$$

on en déduit que $\sigma = (1, 3)(1, 5)(4, 6)$.

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Coquille `(5.3)` en $(3.61)\;2^\circ$">

Dans l’édition imprimée de 1984 (p. 114, *Exemples $(3.61)\;2^\circ$*), la transposition $(5, 3)$ est imprimée par erreur avec un point décimal : « `(5.3) = (1, 5)(1, 3)(1, 5)` ». Cette coquille typographique est corrigée ci-dessus en $(5, 3)$. *(Note : puisque $(1, 5)^2 = e$, $(1, 5)(5, 3)(4, 6) = (1, 5)(1, 5)(1, 3)(1, 5)(4, 6) = (1, 3)(1, 5)(4, 6)$, ce qui illustre aussi $(1, 5, 3) = (1, 3)(1, 5)$.)*

</FoldNote>

<MathBlock id="3.62" kind="rem" title="Remarques (3.62)">

Le <MathRef id="3.60">théorème $(3.60)$</MathRef> peut être démontré directement, c’est-à-dire sans passer par la décomposition en cycles (exercice 33, chap. III). Ce théorème exprime que, *pour $n \geqslant 2$, <PageRef :page="115" /> le groupe $S_n$ est engendré par l’ensemble de ses transpositions*. Mais il existe des familles plus restreintes de générateurs de $S_n$, comme le montrent les deux propositions suivantes (voir aussi l’exercice 24, chap. III).

</MathBlock>

<MathBlock id="3.63" kind="prop" title="Proposition (3.63)">

*Tout groupe symétrique $S_n$ ($n \geqslant 2$) est engendré par l’ensemble des $(n - 1)$ transpositions de la forme $(1, i)$, telles que $2 \leqslant i \leqslant n$.*

</MathBlock>

Ce résultat se déduit de la formule <MathRef id="eq-3-21">$(21)$</MathRef> et du <MathRef id="3.60">théorème $(3.60)$</MathRef>.

<MathBlock id="3.64" kind="prop" title="Proposition (3.64)">

*Tout groupe $S_n$ ($n \geqslant 2$) est engendré par les $(n - 1)$ transpositions de la forme $(i, i + 1)$ telles que $1 \leqslant i \leqslant n - 1$.*

</MathBlock>

<ProofBlock>

Il suffit de montrer que dans $S_n$ toute transposition $(p, q)$ telle que $1 \leqslant p < q \leqslant n$ est produit de transpositions de la forme $(i, i + 1)$.

On raisonne par récurrence sur $(q - p)$.

— Pour $q - p = 1$, on a $(p, q) = (p, p + 1)$.

— Pour $q - p > 1$, on vérifie que :

$$(p, q) = (q - 1, q)(p, q - 1)(q - 1, q) ;$$

l’hypothèse de récurrence implique alors le résultat énoncé.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Singulier/pluriel aux pages 114–115">

Dans l’édition imprimée de 1984 (p. 115), on lit « des familles plus restreintes de *générateur* de $S_n$ » en $(3.62)$ et « produit de *transposition* de la forme $(i, i+1)$ » dans la preuve de $(3.64)$. Les deux coquilles d’accord (*générateurs*, *transpositions*) sont rectifiées ci-dessus.

</FoldNote>

### D / Signature d’une permutation

<MathBlock id="3.65" kind="def" title="Définition (3.65)">

Soit $\sigma \in S_n$ ($n \geqslant 1$) ; si $t$ est le nombre des $\sigma$-orbites *distinctes* dans $\N_n$, on pose :

<span id="ref-eq-3-22"></span>

$$\varepsilon(\sigma) = (-1)^{n - t} \tag{22}$$

et $\varepsilon(\sigma)$ sera appelée *<GlossaryTerm id="signature-permutation">signature de la permutation</GlossaryTerm> $\sigma$*.

</MathBlock>

<MathBlock id="3.66" kind="rem" title="Remarque (3.66)">

— Si $\sigma = e$, alors $t = n$, donc $\varepsilon(e) = 1$.

— Si $\tau$ est une transposition dans $S_n$, alors $t = n - 1$, d’où

<span id="ref-eq-3-23"></span>

$$\varepsilon(\tau) = -1 \tag{23}$$

— Si $\gamma$ est un $r$-cycle dans $S_n$, on a $t = n - r + 1$, d’où

<span id="ref-eq-3-24"></span>

$$\varepsilon(\gamma) = (-1)^{r - 1} \tag{24}$$

</MathBlock>

<PageRef :page="116" />

<MathBlock id="3.67" kind="lem" title="Lemme (3.67)">

*Soit $\sigma \in S_n$ ($n \geqslant 2$) ; alors, quelle que soit la transposition $\tau \in S_n$, on a :*

<span id="ref-eq-3-25"></span>

$$\varepsilon(\sigma \circ \tau) = -\varepsilon(\sigma) \tag{25}$$

</MathBlock>

<ProofBlock :steps="steps_3_67">

Supposons $\tau = (i, j)$.

On remarque que si $\Omega_\sigma(k)$ est une $\sigma$-orbite ne contenant ni $i$, ni $j$, alors $\Omega_{\sigma \circ \tau}(k) = \Omega_\sigma(k)$. Considérons alors les $\sigma$-orbites contenant $i$ ou $j$.

*1er cas :* $i$ et $j$ sont dans deux $\sigma$-orbites distinctes ; soit :

$$\begin{aligned}
\Omega_\sigma(i) &= \{i, \sigma(i), \dots, \sigma^{p-1}(i)\} \\
\Omega_\sigma(j) &= \{j, \sigma(j), \dots, \sigma^{q-1}(j)\}.
\end{aligned}$$

Déterminons $\Omega_{\sigma \circ \tau}(i)$.

$$\sigma \circ \tau(i) = \sigma(j) ;$$

on en déduit que :

pour $1 \leqslant r \leqslant q - 1$, $(\sigma \circ \tau)^r(i) = \sigma^r(j)$ et $(\sigma \circ \tau)^q(i) = j$ ;

alors $\sigma \circ \tau(j) = \sigma(i) \implies (\sigma \circ \tau)^{q+1}(i) = \sigma(i)$,

donc pour

$$1 \leqslant s \leqslant p - 1, \quad (\sigma \circ \tau)^{q+s}(i) = \sigma^s(i) \quad \text{et} \quad (\sigma \circ \tau)^{q+p}(i) = i ;$$

par suite :

$$\Omega_{\sigma \circ \tau}(i) = \{i, \sigma(j), \dots, \sigma^{q-1}(j), j, \sigma(i), \dots, \sigma^{p-1}(i)\}.$$

Les éléments des $\sigma$-orbites distinctes de $i$ et de $j$ se trouvent donc regroupés dans une même $\sigma \circ \tau$-orbite.

*2e cas :* $i$ et $j$ sont dans une même $\sigma$-orbite ; soit :

$$\Omega_\sigma(i) = \{i, \sigma(i), \dots, \sigma^{p-1}(i)\}.$$

$j \neq i$ et $j \in \Omega_\sigma(i)$ implique qu’il existe un unique entier $r$ tel que $1 \leqslant r \leqslant p - 1$ et $\sigma^r(i) = j$.

<PageRef :page="117" />

Déterminons $\Omega_{\sigma \circ \tau}(i)$.

$$\sigma \circ \tau(i) = \sigma(j) = \sigma^{r+1}(i),$$

d’où, pour

$$1 \leqslant l < p - r, \quad (\sigma \circ \tau)^l(i) = \sigma^{r+l}(i) \quad \text{et} \quad (\sigma \circ \tau)^{p-r}(i) = i ;$$

par suite,

$$\Omega_{\sigma \circ \tau}(i) = \{i, \sigma^{r+1}(i), \dots, \sigma^{p-1}(i)\}.$$

On constate que $j \notin \Omega_{\sigma \circ \tau}(i)$ et de $\sigma \circ \tau(j) = \sigma(i)$ on déduit

$$\Omega_{\sigma \circ \tau}(j) = \{j, \sigma(i), \dots, \sigma^{r-1}(i)\}.$$

La $\sigma$-orbite contenant $i$ et $j$ se trouve scindée en deux $\sigma \circ \tau$-orbites distinctes, contenant respectivement $i$ et $j$.

On en conclut que si $t$ est le nombre des $\sigma$-orbites distinctes, dans le premier cas, le nombre des $\sigma \circ \tau$-orbites distinctes est $t - 1$ et, dans le second cas, il est $t + 1$, d’où

$$\varepsilon(\sigma \circ \tau) = -\varepsilon(\sigma).$$

</ProofBlock>

<MathBlock id="3.68" kind="thm" title="Théorème (3.68)">

*Soit $\sigma \in S_n$ ($n \geqslant 2$) ;*

*Si $\sigma$ est un produit de $k$ transpositions, alors :*

<span id="ref-eq-3-26"></span>

$$\varepsilon(\sigma) = (-1)^k \tag{26}$$

*et si $\sigma = \tau_1 \circ \tau_2 \circ \dots \circ \tau_k = \tau'_1 \circ \tau'_2 \circ \dots \circ \tau'_l$ sont deux décompositions de $\sigma$ en produit de transpositions, alors les entiers $k$ et $l$ sont de même parité.*

</MathBlock>

<ProofBlock>

Pour toute transposition $\tau \in S_n$, on a $\varepsilon(\tau) = -1$ (<MathRef id="3.66">remarque $(3.66)$</MathRef>) ; par suite, la formule <MathRef id="eq-3-26">$(26)$</MathRef> se déduit facilement de la relation <MathRef id="eq-3-25">$(25)$</MathRef> du <MathRef id="3.67">lemme $(3.67)$</MathRef>. D’autre part,

$$\tau_1 \circ \tau_2 \circ \dots \circ \tau_k = \tau'_1 \circ \tau'_2 \circ \dots \circ \tau'_l$$

implique $(-1)^k = (-1)^l$, donc les entiers $k$ et $l$ sont nécessairement de même parité.

</ProofBlock>

<MathBlock id="3.69" kind="rem" title="Remarque (3.69)">

D’après ce qui précède, associer à tout $\sigma \in S_n$ sa signature $\varepsilon(\sigma)$ revient à définir une application

$$\begin{aligned}
\varepsilon : S_n &\to \{-1, 1\} \\
\sigma &\mapsto \varepsilon(\sigma).
\end{aligned}$$

<PageRef :page="118" />

En considérant $\{-1, 1\}$ comme un *groupe multiplicatif* (sous-groupe de $(\Q^*, \times)$ : exercice 8, chap. I), on démontre le résultat fondamental suivant :

</MathBlock>

<MathBlock id="3.70" kind="thm" title="Théorème (3.70)">

*Pour $n \geqslant 2$ dans $\N$, l’application*

$$\begin{aligned}
\varepsilon : S_n &\to \{-1, 1\} \\
\sigma &\mapsto \varepsilon(\sigma)
\end{aligned}$$

*est un <GlossaryTerm id="epimorphisme">épimorphisme</GlossaryTerm> de groupes.*

</MathBlock>

<ProofBlock>

La condition $n \geqslant 2$ implique la surjectivité de $\varepsilon$ ; vérifions que $\varepsilon$ est un morphisme de groupes.

Soient $\sigma$ et $\sigma'$ dans $S_n$ telles que :

$$\sigma = \tau_1 \circ \tau_2 \circ \dots \circ \tau_k \qquad \text{et} \qquad \sigma' = \tau'_1 \circ \tau'_2 \circ \dots \circ \tau'_l$$

où les $\tau_i$ ($1 \leqslant i \leqslant k$) et les $\tau'_j$ ($1 \leqslant j \leqslant l$) sont des transpositions.

On a alors : $\sigma \circ \sigma' = \tau_1 \circ \dots \circ \tau_k \circ \tau'_1 \circ \dots \circ \tau'_l$, d’où, en appliquant la formule <MathRef id="eq-3-26">$(26)$</MathRef> :

$$\varepsilon(\sigma \circ \sigma') = (-1)^{k + l} = (-1)^k (-1)^l$$

et par suite

$$\varepsilon(\sigma \circ \sigma') = \varepsilon(\sigma)\,\varepsilon(\sigma').$$

</ProofBlock>

<MathBlock id="3.71" kind="def" title="Définition (3.71)">

Une permutation $\sigma \in S_n$ est dite *paire* si $\varepsilon(\sigma) = 1$ et *impaire* si $\varepsilon(\sigma) = -1$.

</MathBlock>

<MathBlock id="3.72" kind="rem" title="Remarques (3.72)">

$1^\circ$ Toute transposition est une permutation impaire.

$2^\circ$ Une permutation $\sigma \in S_n$ ($n \geqslant 2$) est paire ($\text{resp}^t$ impaire) si et seulement si elle est produit d’un nombre pair ($\text{resp}^t$ impair) de transpositions.

$3^\circ$ Quel que soit $\sigma \in S_n$, $\sigma$ et $\sigma^{-1}$ sont de même parité, c’est-à-dire que $\varepsilon(\sigma) = \varepsilon(\sigma^{-1})$ ; en effet, $\varepsilon(\sigma^{-1}) = (\varepsilon(\sigma))^{-1}$ dans le groupe $\{-1, 1\}$.

$4^\circ$ Étant donné $\sigma \in S_n$, le calcul de $\varepsilon(\sigma)$ se fait en appliquant les formules <MathRef id="eq-3-22">$(22)$</MathRef>, <MathRef id="eq-3-24">$(24)$</MathRef>, <MathRef id="eq-3-26">$(26)$</MathRef> et en utilisant les propriétés de mor-<PageRef :page="119" />phisme de l’application $\varepsilon$. En particulier, si on connaît la décomposition canonique de $\sigma$ :

$$\sigma = \gamma_1 \circ \gamma_2 \circ \dots \circ \gamma_s$$

telle que pour tout $q$ ($1 \leqslant q \leqslant s$), $\operatorname{long}(\gamma_q) = r_q$, alors

$$\varepsilon(\sigma) = (-1)^l \qquad \text{où } l = \sum_{1 \leqslant q \leqslant s} r_q - s,$$

puisque, pour tout $q$ ($1 \leqslant q \leqslant s$), $\varepsilon(\gamma_q) = (-1)^{r_q - 1}$ (<MathRef id="eq-3-24">formule $(24)$</MathRef>).

Lorsque $s$ est le nombre *total* des $\sigma$-orbites distinctes de $\N_n$, on retrouve la formule <MathRef id="eq-3-22">$(22)$</MathRef>.

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Indice final en $(3.72)\;4^\circ$">

Dans l’édition imprimée de 1984 (p. 119, *Remarques $(3.72)\;4^\circ$*), le produit est imprimé « $\sigma = \gamma_1 \circ \gamma_2 \circ \dots \circ \gamma_1$ » avec le dernier indice égal à $1$ au lieu de $s$. Il est rectifié ci-dessus en $\gamma_s$.

</FoldNote>

<MathBlock id="3.73-1" kind="ex" title="Exemple (3.73)">

$1^\circ$ Soit $\sigma$ dans $S_6$ la permutation considérée dans l’<MathRef id="3.42">exemple $(3.42)$</MathRef> ; le nombre $t$ des $\sigma$-orbites distinctes est $3$, d’où ici $n - t = 6 - 3 = 3$. En appliquant la formule <MathRef id="eq-3-22">$(22)$</MathRef> on obtient $\varepsilon(\sigma) = (-1)^3 = -1$ ; $\sigma$ est une permutation *impaire*, ce qui est confirmé par le calcul de $\varepsilon(\sigma)$ à partir de la décomposition canonique de $\sigma$ (<MathRef id="3.57">exemple $(3.57)$</MathRef>), ou à partir d’une décomposition de $\sigma$ en produit de transpositions (<MathRef id="3.61">exemple $(3.61)$</MathRef>).

$2^\circ$ Soit $\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\ 4 & 2 & 5 & 6 & 8 & 1 & 7 & 3 \end{pmatrix}$ dans $S_8$.

Déterminons les $\sigma$-orbites :

$$\begin{aligned}
\Omega_\sigma(1) &= \{1, 4, 6\} ; & \Omega_\sigma(2) &= \{2\} ; \\
\Omega_\sigma(3) &= \{3, 5, 8\} ; & \Omega_\sigma(7) &= \{7\}.
\end{aligned}$$

Il y a $4$ $\sigma$-orbites distinctes, d’où $\varepsilon(\sigma) = (-1)^4 = 1$ (<MathRef id="eq-3-22">formule $(22)$</MathRef>), $\sigma$ est une permutation *paire*.

</MathBlock>

<MathBlock id="3.73-2" kind="rem" title="Remarque (3.73)">

Il existe plusieurs définitions de la signature d’une permutation (voir par exemple [5], [54], [56], [57]) mais toutes sont équivalentes car on peut démontrer que, pour $n \geqslant 2$, il n’existe qu’un seul épimorphisme $\varepsilon$ de $S_n$ sur le groupe multiplicatif $\{-1, 1\}$ et que $\varepsilon(\tau) = -1$ pour toute transposition $\tau \in S_n$.

La définition classique de $\varepsilon(\sigma)$ par la formule

<span id="ref-eq-3-27"></span>

$$\varepsilon(\sigma) = \prod_{1 \leqslant i < k \leqslant n} \dfrac{\sigma(k) - \sigma(i)}{k - i} \tag{27}$$

<PageRef :page="120" />

amène au calcul de la signature à l’aide du « *nombre d’inversions de $\sigma$* », méthode que nous n’avons pas considérée dans cet ouvrage (se reporter aux références indiquées plus haut).

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Double numérotation $(3.73)$ et saut de $(3.74)$">

Dans l’édition imprimée de 1984, la numérotation de la page 119 utilise **$(3.73)$** deux fois de suite : d’abord pour l’*Exemple $(3.73)$*, puis pour la *Remarque $(3.73)$* (qui se poursuit page 120). Le numéro **$(3.74)$** est ensuite omis dans la section II : le texte passe directement à la *Proposition $(3.75)$* page 120. *(De plus, dans la section 3 page 121, la numérotation reprend accidentellement à $(3.70)$.)*

</FoldNote>

<FoldNote kind="prepa" title="Précision prépa — Trois visages équivalents de la signature $\varepsilon(\sigma)$">

En prépa, on rencontre souvent la signature par le **nombre d’inversions** (formule <MathRef id="eq-3-27">$(27)$</MathRef>) : un couple $(i, k)$ avec $1 \leqslant i < k \leqslant n$ est une *inversion* de $\sigma$ si $\sigma(i) > \sigma(k)$, auquel cas le facteur $\dfrac{\sigma(k)-\sigma(i)}{k-i}$ est négatif ; comme le numérateur parcourt à l’ordre près les mêmes différences que le dénominateur, la valeur absolue du produit vaut $1$ et $\varepsilon(\sigma) = (-1)^{\operatorname{inv}(\sigma)}$.
La construction de Josette Calais à partir du nombre $t$ d’orbites ($\varepsilon(\sigma) = (-1)^{n-t}$) évite ce calcul combinatoire initial tout en donnant instantanément la parité d’une permutation à partir de sa décomposition en cycles !

</FoldNote>

<SymmetricCyclesLab />

### E / Groupe alterné $A_n$

Étant donné un groupe symétrique $S_n$, désignons par $A_n$ l’ensemble des permutations paires de $S_n$.

Pour $n = 1$, on a $A_1 = S_1 = (e)$.

Pour $n \geqslant 2$, $A_n = \{\sigma \in S_n ;\; \varepsilon(\sigma) = 1\}$ est le noyau de l’épimorphisme $\varepsilon : S_n \to \{-1, 1\}$. $A_n$ est donc un sous-groupe de $S_n$.

$$\left(A_n = \Ker \varepsilon \text{ et } \varepsilon \text{ surjectif}\right) \implies \dfrac{S_n}{A_n} \simeq \{-1, 1\} ; \qquad (\text{théorème } 2.27),$$

par suite, $[S_n : A_n] = 2$, d’où $o(A_n) = \dfrac{n!}{2}$, puisque $o(S_n) = n!$ ; on en déduit l’énoncé suivant :

<MathBlock id="3.75" kind="prop" title="Proposition (3.75)">

*Pour tout $n \geqslant 2$, l’ensemble $A_n$ des permutations paires de $S_n$ forme un sous-groupe de $S_n$, d’ordre $\dfrac{n!}{2}$.*

</MathBlock>

<MathBlock id="3.76" kind="def" title="Définition (3.76)">

Pour tout $n \in \N^*$, le groupe $A_n$ des permutations paires de $S_n$ est appelé *<GlossaryTerm id="groupe-alterne">groupe alterné de degré $n$</GlossaryTerm>*.

</MathBlock>

<MathBlock id="3.77" kind="rem" title="Remarque (3.77)">

Pour $n \geqslant 2$, les deux classes de $S_n$ modulo $A_n$ sont $A_n$ et $\tau A_n = \{\tau \circ \sigma ;\; \sigma \in A_n\}$ où $\tau$ est une transposition quelconque de $S_n$.

$$A_n = \Ker \varepsilon \implies \tau A_n = A_n \tau = \{\sigma \circ \tau ;\; \sigma \in A_n\}.$$

$\tau A_n$ est l’ensemble des permutations impaires de $S_n$ et *cet ensemble n’est pas un sous-groupe de $S_n$*.

</MathBlock>
