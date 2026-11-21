<script setup lang="ts">
import type { ProofStep } from '../../src/components/ProofBlock.vue'

const steps_3_71_bis: ProofStep[] = [
  {
    title: '1. Paramétrage des sommets sur le cercle unité',
    body: 'On choisit un repère orthonormé $Oxy$ centré au centre $O$ de $\\mathscr{P}_n$ avec $A_1$ sur $Ox$ et pour unité le rayon du cercle circonscrit ; les sommets $A_1, \\dots, A_n$ s’identifient alors aux racines $n$-ièmes de l’unité dans $\\C$.',
    why: 'Cette identification géométrique relie directement les rotations de $\\mathscr{P}_n$ au groupe cyclique $U_n$ étudié à l’exemple $(3.8)$.'
  },
  {
    title: '2. Le sous-groupe cyclique $\\Gamma_n$ des $n$ rotations',
    body: 'Les rotations $\\rho_k$ de centre $O$ et d’angle $\\dfrac{2k\\pi}{n}$ ($0 \\leqslant k \\leqslant n - 1$) permutent les sommets ($\\rho_k(A_\\alpha) = A_\\beta$ avec $\\beta \\equiv \\alpha + k \\pmod n$) et forment un sous-groupe $\\Gamma_n \\leqslant D_n$ isomorphe à $U_n$, donc cyclique d’ordre $n$ engendré par $\\rho_1$ : $\\Gamma_n = \\{e, \\rho_1, \\dots, \\rho_1^{n-1}\\}$.',
    why: 'On obtient ainsi une première moitié de $D_n$, constituée des $n$ isométries directes qui conservent $\\mathscr{P}_n$.'
  },
  {
    title: '3. Adjonction d’une réflexion $\\sigma$ et minoration $|D_n| \\geqslant 2n$',
    body: 'La symétrie $\\sigma$ par rapport à $Ox$ vérifie $\\sigma(A_1) = A_1$ et $\\sigma(A_\\alpha) = A_{n-\\alpha+2}$ ($2 \\leqslant \\alpha \\leqslant n$), donc $\\sigma \\in D_n$ et $\\sigma^2 = e$. Comme $\\sigma \\neq e$ fixe $A_1$ alors que $\\rho_1^k(A_1) = A_{1+k} \\neq A_1$ pour $1 \\leqslant k \\leqslant n-1$, on a $\\sigma \\notin \\Gamma_n$, donc les $n$ éléments $\\rho_1^k \\circ \\sigma$ ($0 \\leqslant k \\leqslant n-1$) sont tous hors de $\\Gamma_n$ et deux à deux distincts. D’où au moins $2n$ éléments dans $D_n$.',
    why: 'Une rotation non triviale ne peut fixer aucun sommet ; la symétrie $\\sigma$ qui fixe $A_1$ sépare immédiatement la classe $\\Gamma_n \\sigma$ de $\\Gamma_n$.'
  },
  {
    title: '4. Majoration $|D_n| \\leqslant 2n$ ($n = 2$ puis $n \\geqslant 3$)',
    body: 'Pour $n = 2$, $\\mathscr{P}_2$ est réduit à $\\{A_1, A_2\\}$ sur $Ox$ et seules $e, \\rho_1, \\sigma, \\rho_1 \\circ \\sigma$ le conservent. Pour $n \\geqslant 3$, toute isométrie $f \\in D_n$ est entièrement déterminée par $f(A_1)$ ($n$ choix) et $f(A_2)$ (au plus $2$ choix à distance $d(A_1, A_2)$ de $f(A_1)$, puis $f(A_3), \\dots, f(A_n)$ sont forcés). Ainsi $|D_n| \\leqslant 2n$, d’où $o(D_n) = 2n$.',
    why: 'En géométrie plane, une isométrie est rigidement fixée par les images de trois points non alignés ($O$, $A_1$, $A_2$), et $f(O) = O$ est imposé par la conservation du centre de $\\mathscr{P}_n$.'
  }
]

const steps_3_74: ProofStep[] = [
  {
    title: '1. Engendrement de $G$ par $\\langle a \\rangle \\cup \\langle b \\rangle$',
    body: 'Par hypothèse $G = \\langle a, b \\rangle$, donc $G$ est engendré par $\\langle a \\rangle \\cup \\langle b \\rangle$, avec $\\langle a \\rangle = \\{e, a, \\dots, a^{n-1}\\}$ d’ordre $n$ et $\\langle b \\rangle = \\{e, b\\}$ d’ordre $2$.',
    why: 'Ramener l’engendrement à deux sous-groupes $\\langle a \\rangle$ et $\\langle b \\rangle$ permet d’utiliser le critère $(1.47)$ / $(1.48)$ sur le produit $\\langle a \\rangle \\langle b \\rangle$.'
  },
  {
    title: '2. Vérifier $o(a^k b) = 2$ et la relation de commutation $ba^k = a^{n-k}b$',
    body: 'En reproduisant le calcul de $(3.72)$ à partir de $o(ab) = 2$ (c’est-à-dire $bab^{-1} = a^{-1}$), on obtient $(a^k b)^2 = e$ et $a^k b \\neq e$ (car $b \\notin \\langle a \\rangle$, sans quoi $b = a^{n/2}$ donnerait $o(ab) = o(a^{1+n/2}) > 2$ si $n \\geqslant 4$ et $ab = e$ si $n = 2$). On en déduit $ba^k = a^{-k}b = a^{n-k}b$ pour tout $0 \\leqslant k \\leqslant n-1$.',
    why: 'La relation $ba^k = a^{n-k}b$ montre que $\\langle a \\rangle \\langle b \\rangle = \\langle b \\rangle \\langle a \\rangle$, exactement comme dans $(32)$.'
  },
  {
    title: '3. Cardinal $2n$ de $G = \\langle a \\rangle \\langle b \\rangle$',
    body: 'Comme $\\langle a \\rangle \\langle b \\rangle = \\langle b \\rangle \\langle a \\rangle$, c’est un sous-groupe de $G$ contenant $\\langle a \\rangle \\cup \\langle b \\rangle$, donc $G = \\langle a \\rangle \\langle b \\rangle = \\{e, a, \\dots, a^{n-1}, b, ab, \\dots, a^{n-1}b\\}$, et comme $b \\notin \\langle a \\rangle$, ces $2n$ éléments sont distincts : $o(G) = 2n$.',
    why: 'Sans l’hypothèse $b \\notin \\langle a \\rangle$, $G$ pourrait être plus petit (pour $n=2$, $o(a)=2, o(b)=2, o(ab)=2$ entraîne $b \\neq a$ et $b \\neq e$, donc $b \\notin \\langle a \\rangle$ automatiquement).'
  },
  {
    title: '4. Isomorphisme $\\varphi : D_n \\to G$',
    body: 'Les générateurs $\\rho_1$ et $\\sigma$ de $D_n$ vérifient les mêmes relations $(33)$ que $a$ et $b$. L’application $\\varphi : D_n \\to G$ définie par $\\varphi(\\rho_1^k \\sigma^j) = a^k b^j$ ($0 \\leqslant k \\leqslant n-1$, $j \\in \\{0, 1\\}$) est un morphisme bijectif, donc un isomorphisme $D_n \\simeq G$.',
    why: 'Les relations $(33)$ fixent entièrement la table de multiplication de $D_n$ comme de $G$, assurant que $\\rho_1 \\mapsto a$, $\\sigma \\mapsto b$ se prolonge en un isomorphisme.'
  }
]
</script>

## 3 — Groupes diédraux $D_n$

<PageRef :page="120" />

Soient $P$ le plan affine euclidien et $\mathscr{I}(2)$ le groupe des isométries du plan $P$ (<MathRef id="1.34">exemple $(1.34)$</MathRef>).

On rappelle que $\mathscr{I}(2)$ est un sous-groupe du groupe symé-<PageRef :page="121" />trique $S_P$ et que, dans le plan $P$, toute rotation, toute symétrie par rapport à une droite est un élément du groupe $\mathscr{I}(2)$ (exercice 26, chap. $\mathrm{I}$).

Pour $n \geqslant 2$, dans $\N$ notons $\mathscr{P}_n$ *un polygone régulier à $n$ sommets dans le plan $P$*. Soit $D_n$ l’ensemble des *isométries du plan $P$ qui conservent le polygone $\mathscr{P}_n$*, autrement dit, qui conservent globalement l’ensemble de ses $n$ sommets.

On vérifie facilement que *$D_n$ est un sous-groupe de $\mathscr{I}(2)$*.

<MathBlock id="3.70-bis" kind="def" title="Définition (3.70)">

Pour tout $n \geqslant 2$ dans $\N$, le groupe $D_n$ est appelé *<GlossaryTerm id="groupe-diedral">groupe diédral de degré $n$</GlossaryTerm>*.

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Reprise de la numérotation à $(3.70)$ et coquille `SP`">

1. **Reprise de numérotation** : après la *Remarque $(3.77)$* de la page 120, l’édition imprimée de 1984 recommence accidentellement la numérotation à **$(3.70)$** au début de la section 3 (p. 121), puis enchaîne avec *Proposition $(3.71)$* (p. 121), *Proposition $(3.72)$* (p. 124), *Remarques $(3.73)$* (p. 125), *Proposition $(3.74)$* (p. 125) et *Remarque $(3.75)$* (p. 126). Les intitulés imprimés exacts sont conservés ; dans les liens internes, ces énoncés portent des ancres distinctes.
2. **Typographie `SP`** : en haut de la page 121, il est imprimé « du groupe symétrique `SP` » sans mise en indice de $P$ (notation $S_P$ de l’<MathRef id="1.34">exemple $(1.34)$</MathRef>).

</FoldNote>

<MicroChallenge title="Défi avant la proposition $(3.71)$ — Symétries d’un carré et d’un triangle équilatéral" hint="Fixez un sommet $A_1$ : combien d’images possibles a-t-il ? Une fois l’image de $A_1$ choisie, combien reste-t-il de choix pour le sommet voisin $A_2$ ?">

Avant de démontrer la formule générale sur l’ordre de $D_n$, comptez géométriquement toutes les isométries du plan qui conservent :

1. Un triangle équilatéral $\mathscr{P}_3$ ($n = 3$) : combien y a-t-il de rotations et de symétries axiales ?
2. Un carré $\mathscr{P}_4$ ($n = 4$) : même question. En notant $\rho_1$ la rotation d’angle $\dfrac{\pi}{2}$ et $\sigma$ la symétrie par rapport à la droite $(OA_1)$, a-t-on $\rho_1 \circ \sigma = \sigma \circ \rho_1$ ?

<template #answer>

1. Pour $\mathscr{P}_3$, on trouve $3$ rotations (d’angles $0, \frac{2\pi}{3}, \frac{4\pi}{3}$) et $3$ symétries axiales (les trois médiatrices/hauteurs), soit $6 = 2 \times 3$ isométries.
2. Pour $\mathscr{P}_4$, on trouve $4$ rotations (d’angles $0, \frac{\pi}{2}, \pi, \frac{3\pi}{2}$) et $4$ symétries axiales (deux médianes et deux diagonales), soit $8 = 2 \times 4$ isométries. On vérifie que $(\rho_1 \circ \sigma)(A_1) = \rho_1(A_1) = A_2$ alors que $(\sigma \circ \rho_1)(A_1) = \sigma(A_2) = A_4$ : donc $\rho_1 \circ \sigma \neq \sigma \circ \rho_1$, le groupe $D_4$ n’est pas abélien.

</template>

</MicroChallenge>

<MathBlock id="3.71-bis" kind="prop" title="Proposition (3.71)">

*Pour tout $n \geqslant 2$ dans $\N$, le groupe diédral $D_n$ est fini, d’ordre $2n$.*

</MathBlock>

<ProofBlock :steps="steps_3_71_bis">

Soit $O$ le centre du polygone $\mathscr{P}_n$ dont les sommets seront notés $A_1, A_2, \dots, A_n$.

Considérons dans le plan $P$ le repère orthonormé $Oxy$ tel que $A_1$ soit sur $Ox$. En prenant pour unité de longueur le rayon du cercle circonscrit au polygone $\mathscr{P}_n$, les sommets $A_1, A_2, \dots, A_n$ peuvent être considérés comme les images des racines $n$-ième de l’unité dans le plan complexe.

<svg viewBox="0 0 320 300" role="img" aria-label="Polygone régulier Pn inscrit dans le cercle unité du repère Oxy" style="max-width: 320px; width: 100%; height: auto; display: block; margin: 1rem auto; color: var(--jc-text);">
  <defs>
    <marker id="diedre-arrow-1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="currentColor" />
    </marker>
  </defs>
  <circle cx="150" cy="150" r="100" fill="none" stroke="currentColor" stroke-width="1.5" />
  <line x1="28" y1="150" x2="286" y2="150" stroke="currentColor" stroke-width="1.4" marker-end="url(#diedre-arrow-1)" />
  <line x1="150" y1="282" x2="150" y2="20" stroke="currentColor" stroke-width="1.4" marker-end="url(#diedre-arrow-1)" />
  <line x1="150" y1="150" x2="234.8" y2="97" stroke="currentColor" stroke-width="1.2" />
  <line x1="234.8" y1="203" x2="250" y2="150" stroke="currentColor" stroke-width="1.3" />
  <line x1="250" y1="150" x2="234.8" y2="97" stroke="currentColor" stroke-width="1.3" />
  <line x1="234.8" y1="97" x2="193.8" y2="60.1" stroke="currentColor" stroke-width="1.3" />
  <text x="295" y="154" fill="currentColor" font-family="KaTeX_Math, Georgia, serif" font-style="italic" font-size="14">x</text>
  <text x="159" y="28" fill="currentColor" font-family="KaTeX_Math, Georgia, serif" font-style="italic" font-size="14">y</text>
  <text x="136" y="166" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="14">O</text>
  <text x="257" y="143" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="14">A<tspan font-size="10" dy="3">1</tspan></text>
  <text x="242" y="96" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="14">A<tspan font-size="10" dy="3">2</tspan></text>
  <text x="197" y="52" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="14">A<tspan font-size="10" dy="3">3</tspan></text>
  <text x="242" y="214" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="14">A<tspan font-size="10" dy="3" font-style="italic">n</tspan></text>
</svg>

<PageRef :page="122" />

*a)* Pour $k$ entier tel que $0 \leqslant k \leqslant n - 1$, notons $\rho_k$ la rotation de centre $O$ et d’angle $\dfrac{2k\pi}{n}$, dans le plan $P$.

Pour tout entier $\alpha$ tel que $1 \leqslant \alpha \leqslant n$, on a

$$\rho_k(A_\alpha) = A_\beta, \qquad 1 \leqslant \beta \leqslant n \qquad \text{et} \qquad \beta \equiv \alpha + k \pmod{n}$$

$D_n$ contient donc l’ensemble $\Gamma_n$ des rotations $\rho_k$, $0 \leqslant k \leqslant n - 1$.

D’autre part, pour $j$ et $k$ compris entre $0$ et $n - 1$, $\rho_k \circ \rho_j = \rho_l$, avec $0 \leqslant l \leqslant n - 1$ et $l \equiv j + k \pmod{n}$ ; de plus, dans le groupe $D_n$, $\rho_k^{-1} = \rho_{n-k}$ ; d’où $\Gamma_n \leqslant D_n$. $U_n$ étant le groupe cyclique des racines $n$-ième de l’unité dans $\C$ (<MathRef id="3.8">exemple $(3.8)$</MathRef>), d’après ce qui précède, l’application :

$$\begin{aligned}
\Gamma_n &\to U_n \\
\rho_k &\mapsto \exp \frac{2k\pi i}{n}
\end{aligned}$$

est un isomorphisme de groupes ; par suite,

*$\Gamma_n$ est un groupe cyclique d’ordre $n$.*

$\Gamma_n$ peut être considéré comme engendré par $\rho_1$ ; alors pour tout $k$ ($0 \leqslant k \leqslant n - 1$), $\rho_k = \rho_1^k$ ; en particulier $\rho_0 = \rho_1^0 = \id_P$, que l’on notera $e$ ; d’où

<span id="ref-eq-3-28"></span>

$$\Gamma_n = \{e, \rho_1, \rho_1^2, \dots, \rho_1^{n-1}\} \tag{28}$$

*b)* Soit $\sigma$ la symétrie par rapport à $Ox$, dans le plan $P$.

$\sigma(A_1) = A_1$ et pour tout $\alpha$ tel que $2 \leqslant \alpha \leqslant n$, $\sigma(A_\alpha) = A_{n - \alpha + 2}$ ; par suite, $\sigma \in D_n$ et on remarque que $\sigma^2 = e$.

D’autre part, $\sigma \notin \Gamma_n$ ; en effet, on a $\sigma \neq e$ et $\sigma(A_1) = A_1$, or pour tout $k$ ($1 \leqslant k \leqslant n - 1$), $\rho_1^k(A_1) = A_{1 + k}$.

On en déduit que, quel que soit $k$ ($0 \leqslant k \leqslant n - 1$), $\rho_1^k \circ \sigma \notin \Gamma_n$, car $\rho_1^k \circ \sigma \in \Gamma_n$ impliquerait $\sigma \in \Gamma_n$.

De plus, les $n$ éléments $\rho_1^k \circ \sigma$, $0 \leqslant k \leqslant n - 1$, sont distincts ; en effet,

$$\rho_1^k \circ \sigma = \rho_1^j \circ \sigma \implies \rho_1^k = \rho_1^j \implies k = j.$$

*c)* Les résultats obtenus dans *a)* et *b)* prouvent que $D_n$ contient au moins $2n$ éléments distincts :

$$e, \; \rho_1, \; \dots, \; \rho_1^{n-1}, \; \sigma, \; \rho_1 \circ \sigma, \; \dots, \; \rho_1^{n-1} \circ \sigma.$$

<PageRef :page="123" />

Vérifions que $D_n$ contient exactement $2n$ éléments.

— Si $n = 2$ :

<svg viewBox="0 0 320 200" role="img" aria-label="Cas n = 2 : sommets A1 et A2 sur l'axe Ox du repère Oxy" style="max-width: 320px; width: 100%; height: auto; display: block; margin: 1rem auto; color: var(--jc-text);">
  <defs>
    <marker id="diedre-arrow-2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="currentColor" />
    </marker>
  </defs>
  <line x1="32" y1="100" x2="288" y2="100" stroke="currentColor" stroke-width="1.4" marker-end="url(#diedre-arrow-2)" />
  <line x1="160" y1="184" x2="160" y2="18" stroke="currentColor" stroke-width="1.4" marker-end="url(#diedre-arrow-2)" />
  <line x1="90" y1="95" x2="90" y2="100" stroke="currentColor" stroke-width="1.4" />
  <line x1="230" y1="95" x2="230" y2="100" stroke="currentColor" stroke-width="1.4" />
  <text x="296" y="104" fill="currentColor" font-family="KaTeX_Math, Georgia, serif" font-style="italic" font-size="14">x</text>
  <text x="169" y="26" fill="currentColor" font-family="KaTeX_Math, Georgia, serif" font-style="italic" font-size="14">y</text>
  <text x="170" y="116" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="14">O</text>
  <text x="90" y="86" text-anchor="middle" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="14">A<tspan font-size="10" dy="3">2</tspan></text>
  <text x="230" y="86" text-anchor="middle" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="14">A<tspan font-size="10" dy="3">1</tspan></text>
</svg>

Les seules isométries du plan $P$ qui conservent $A_1$ et $A_2$ sont : la symétrie $\sigma$ par rapport à $Ox$, la symétrie par rapport à $O$, c’est-à-dire la rotation $\rho_1$ de centre $O$ et d’angle $\pi$, la symétrie par rapport à $Oy$ qui coïncide avec $\rho_1 \circ \sigma = \sigma \circ \rho_1$ et l’identité $e$ ; d’où

<span id="ref-eq-3-29"></span>

$$D_2 = \{e, \rho_1, \sigma, \rho_1 \circ \sigma\} \tag{29}$$

— Pour $n \geqslant 3$, soit $f \in \mathscr{I}(2)$ tel que $f(\mathscr{P}_n) = \mathscr{P}_n$.

$f$ transforme $A_1$ en l’un des $n$ sommets $A_1, A_2, \dots, A_n$.

Lorsque $f(A_1)$ est fixé, il ne reste que deux positions possibles pour $f(A_2)$, car $f$ conserve les distances :

$$d(f(A_1), f(A_2)) = d(A_1, A_2).$$

Par suite, dès que $f(A_2)$ est fixé, les $f(A_i)$ pour $3 \leqslant i \leqslant n$ sont déterminés de façon unique.

On en conclut qu’il n’existe que $2n$ isométries du plan $P$ qui conservent le polygone $\mathscr{P}_n$, d’où :

<span id="ref-eq-3-30"></span>

$$D_n = \{e, \rho_1, \dots, \rho_1^{n-1}, \sigma, \rho_1 \circ \sigma, \dots, \rho_1^{n-1} \circ \sigma\} \tag{30}$$

$D_n$ est donc engendré par $\rho_1$ et $\sigma$.

On remarque que de la même manière on aurait pu prouver que :

<span id="ref-eq-3-30-prime"></span>

$$D_n = \{e, \rho_1, \dots, \rho_1^{n-1}, \sigma, \sigma \circ \rho_1, \dots, \sigma \circ \rho_1^{n-1}\} \tag{30'}$$

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Coquille $\sigma_1 \in D_n$ (p. 122)">

Dans l’édition imprimée de 1984 (p. 122, preuve de $(3.71)$, *b)*), il est imprimé « par suite, $\sigma_1 \in D_n$ et on remarque que $\sigma^2 = e$ ». L’indice parasite dans $\sigma_1$ est une coquille pour $\sigma \in D_n$.

</FoldNote>

<FoldNote kind="prepa" title="Précision prépa — Le cas dégénéré $n = 2$ et le nombre d’éléments de $D_n$">

- **Attention à l’ordre de $D_n$** : le groupe diédral $D_n$ est d’ordre **$2n$** (et non $n$ !). Certains ouvrages anglo-saxons le notent $D_{2n}$ pour rappeler son cardinal ; en France (et dans tout ce livre), la notation $D_n$ désigne bien le groupe d’ordre $2n$ des isométries d’un polygone régulier à $n$ sommets.
- **Cas $n = 2$** : un « polygone régulier à $2$ sommets » $\mathscr{P}_2$ est un segment $[A_2, A_1]$ porté par $Ox$. Il conserve tout de même $4$ isométries dans le *plan* $P$ (dont la réflexion d’axe $Ox$, qui agit trivialement sur les sommets $A_1, A_2$ mais non sur le plan $P$ !). C’est pourquoi, contrairement à $n \geqslant 3$ où $D_n$ s’injecte dans $S_n$ (remarque $(3.73)\;4^\circ$), $D_2$ est d’ordre $4$ alors que $S_2$ est d’ordre $2$. Beaucoup de cours de prépa ne définissent $D_n$ qu’à partir de $n \geqslant 3$.

</FoldNote>

<PageRef :page="124" />

<MathBlock id="3.72-bis" kind="prop" title="Proposition (3.72)">

*Les notations sont celles de la <MathRef id="3.71-bis">proposition $(3.71)$</MathRef> :*

$1^\circ$ *dans tout groupe diédral $D_n$ ($n \geqslant 2$ dans $\N$), tout élément $\rho_1^k \circ \sigma$ ($0 \leqslant k \leqslant n - 1$) est d’ordre $2$ ;*

$2^\circ$ *$D_n$ est non abélien pour $n \geqslant 3$.*

</MathBlock>

<ProofBlock>

$1^\circ$ Pour $k = 0$, $\rho_1^0 \circ \sigma = \sigma$ ; or on a $\sigma \neq e$ et $\sigma^2 = e$, donc $o(\sigma) = 2$.

Pour $k = 1$, considérons $(\rho_1 \circ \sigma)^2$.

— Si $n = 2$, on a vu que $\rho_1 \circ \sigma$ est la symétrie par rapport à $Oy$, d’où $o(\rho_1 \circ \sigma) = 2$.

— Si $n \geqslant 3$, on a vu, dans la partie *c)* de la démonstration de la <MathRef id="3.71-bis">proposition $(3.71)$</MathRef>, que toute isométrie $f \in D_n$ est déterminée par les images de $A_1$ et $A_2$ ; or on vérifie facilement que :

$$(\rho_1 \circ \sigma)^2(A_1) = A_1 \qquad \text{et} \qquad (\rho_1 \circ \sigma)^2(A_2) = A_2,$$

d’où $(\rho_1 \circ \sigma)^2 = e$ ; par suite $o(\rho_1 \circ \sigma) = 2$, car $\rho_1 \circ \sigma \neq e$.

Pour $k > 1$

$$\begin{aligned}
\sigma \circ \rho_1^k \circ \sigma &= \sigma \circ \rho_1^k \circ \sigma^{-1}, \qquad \text{puisque } \sigma^{-1} = \sigma ; \\
\text{alors} \qquad \sigma \circ \rho_1^k \circ \sigma &= (\sigma \circ \rho_1 \circ \sigma^{-1})^k \\
\text{d’où} \qquad \sigma \circ \rho_1^k \circ \sigma &= \rho_1^{-k}, \qquad \text{car } \sigma \circ \rho_1 \circ \sigma^{-1} = \rho_1^{-1} ;
\end{aligned}$$

par suite

$$(\rho_1^k \circ \sigma)^2 = e$$

et $\rho_1^k \circ \sigma \neq e$ implique $o(\rho_1^k \circ \sigma) = 2$.

$2^\circ$ Pour $n = 2$, $D_2 = \{e, \rho_1, \sigma, \rho_1 \circ \sigma\}$ tel que $\rho_1 \circ \sigma = \sigma \circ \rho_1$, donc $D_2$ est abélien.

On remarque que $D_2 = \langle \rho_1 \rangle \langle \sigma \rangle$ et $\langle \rho_1 \rangle \cap \langle \sigma \rangle = (e)$, d’où

$$D_2 \simeq \frac{\Z}{2\Z} \times \frac{\Z}{2\Z} \qquad (\text{groupe de Klein})$$

Pour $n \geqslant 3$, $\sigma \circ \rho_1 \circ \sigma^{-1} = \rho_1^{-1}$ et $\rho_1^{-1} = \rho_1^{n-1}$ ($\neq \rho_1$), donc *$D_n$ est non abélien*.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Renvoi interne en $(3.72)$">

Dans la preuve de $(3.72)\;1^\circ$ (p. 124), le texte renvoie à « la partie *c)* de la démonstration de la proposition $(3.71)$ » pour la détermination d’une isométrie $f \in D_n$ ($n \geqslant 3$) par les images de $A_1$ et $A_2$ ; cet argument se trouve précisément à la suite de *c)*, en page 123.

</FoldNote>

<PageRef :page="125" />

<MathBlock id="3.73-3" kind="rem" title="Remarques (3.73)">

$1^\circ$ Pour tout $k$ ($0 \leqslant k \leqslant n - 1$), $(\rho_1^k \circ \sigma)^2 = e$ implique $\sigma \circ \rho_1^k = \rho_1^{-k} \circ \sigma$, d’où

<span id="ref-eq-3-31"></span>

$$\sigma \circ \rho_1^k = \rho_1^{n-k} \circ \sigma \tag{31}$$

Compte tenu de la <MathRef id="1.47">proposition $(1.47)$</MathRef> et de l’égalité <MathRef id="eq-3-30">$(30)$</MathRef> (ou <MathRef id="eq-3-30-prime">$(30')$</MathRef>), on a

<span id="ref-eq-3-32"></span>

$$D_n = \Gamma_n \langle \sigma \rangle = \langle \sigma \rangle \Gamma_n \tag{32}$$

$2^\circ$ On peut vérifier que les $n$ éléments $\rho_1^k \circ \sigma$, $0 \leqslant k \leqslant n - 1$, sont *les symétries du plan $P$ par rapport aux $n$ axes de symétries du polygone $\mathscr{P}_n$*, ce qui justifie géométriquement le fait que ces éléments sont d’ordre $2$ dans le groupe $D_n$.

$3^\circ$ Pour $n > 3$, $D_n$ a un unique sous-groupe cyclique d’ordre $n$, $\Gamma_n$, puisque tout élément de $D_n \setminus \Gamma_n$ est d’ordre $2$.

$4^\circ$ Pour $n \geqslant 3$, $D_n$ est isomorphe à un sous-groupe de $S_n$ et pour $n = 3$, $D_3 \simeq S_3$. En effet, quel que soit $f \in D_n$, la restriction de $f$ à l’ensemble des sommets $A_1, A_2, \dots, A_n$ du polygone $\mathscr{P}_n$ est une permutation de ces points ; on peut donc considérer l’application :

$$\begin{aligned}
\gamma : D_n &\to S_n \\
f &\mapsto \gamma_f
\end{aligned}$$

tel que $\gamma_f(i) = j \iff f(A_i) = A_j$.

On vérifie que $\gamma$ est un monomorphisme de groupes, d’où $D_n \simeq \Im \gamma$.

Pour $n = 3$, $o(D_3) = 6 = o(S_3)$ ; l’application injective $\gamma$ est alors surjective, d’où $D_3 \simeq S_3$.

Pour $n > 3$, on a $2n < n!$, donc *$D_n$ est isomorphe à un <GlossaryTerm id="sous-groupe-propre">sous-groupe propre</GlossaryTerm> du groupe symétrique $S_n$*.

</MathBlock>

<FoldNote kind="piege" title="Piège classique — Conjugaison dans $D_n$ : $\sigma \circ \rho_1 \circ \sigma^{-1} = \rho_1^{-1}$">

La relation fondamentale du groupe diédral est $\sigma \circ \rho_1 \circ \sigma = \rho_1^{-1}$ (c’est-à-dire $\sigma \circ \rho_1^k = \rho_1^{n-k} \circ \sigma$, formule <MathRef id="eq-3-31">$(31)$</MathRef>), qui traduit le fait qu’une symétrie axiale **renverse le sens d’orientation** du plan et donc l’angle d’une rotation. On ne peut jamais faire « passer » $\sigma$ devant $\rho_1$ sans transformer $\rho_1$ en $\rho_1^{-1}$ (sauf pour $n = 2$, ou pour la rotation d’angle $\pi$ quand $n$ est pair !).

</FoldNote>

<MathBlock id="3.74" kind="prop" title="Proposition (3.74)">

*Tout groupe $G$ engendré par deux éléments $a$ et $b$ tels que*

<span id="ref-eq-3-33"></span>

$$o(a) = n \quad (n \geqslant 2), \qquad o(b) = 2 \qquad \text{et} \qquad o(ab) = 2 \tag{33}$$

*est isomorphe au groupe diédral $D_n$.*

</MathBlock>

<ProofBlock :steps="steps_3_74">

Par hypothèse $G = \langle a, b \rangle$, par suite tout élément de $G$ est un produit de puissances entières (positives, négatives ou nulles) de $a$ et de $b$. Le groupe $G$ peut donc être considéré comme engendré par $\langle a \rangle \cup \langle b \rangle$.

<PageRef :page="126" />

Par hypothèse,

$$\langle a \rangle = \{a^0 = e, a, a^2, \dots, a^{n-1}\} \qquad \text{et} \qquad \langle b \rangle = \{b^0 = e, b\}.$$

En raisonnant comme dans les démonstrations des <MathRef id="3.71-bis">propositions $(3.71)$</MathRef> et <MathRef id="3.72-bis">$(3.72)$</MathRef>, on prouve ici que :

— pour $0 \leqslant k \leqslant n - 1$, les éléments $a^k b$ sont deux à deux distincts et $b \notin \langle a \rangle$ implique qu’aucun d’eux n’appartient à $\langle a \rangle$ ;

— de plus $o(ab) = 2$ implique, quel que soit $k$ ($0 \leqslant k \leqslant n - 1$),

<span id="ref-eq-3-34"></span>

$$o(a^k b) = 2 \tag{34}$$

<span id="ref-eq-3-35"></span>

$$\text{d’où} \qquad ba^k = a^{n-k} b \tag{35}$$

On en déduit que $\langle a \rangle \langle b \rangle = \langle b \rangle \langle a \rangle$ est un sous-groupe de $G$ et c’est alors le sous-groupe de $G$ engendré par $\langle a \rangle \cup \langle b \rangle$ (voir <MathRef id="1.48">remarque $(1.48)\;1^\circ$</MathRef>), par suite

$$\begin{aligned}
G &= \langle a \rangle \langle b \rangle, \\
\text{d’où} \qquad G &= \{e, a, \dots, a^{n-1}, b, ab, \dots, a^{n-1} b\}.
\end{aligned}$$

Le groupe $G$ est donc d’ordre $2n$ et est parfaitement déterminé par la donnée de ses deux générateurs $a$ et $b$ satisfaisant aux conditions <MathRef id="eq-3-33">$(33)$</MathRef>.

Or les générateurs $\rho_1$ et $\sigma$ du groupe diédral $D_n$ satisfont aux conditions <MathRef id="eq-3-33">$(33)$</MathRef> ; par suite un morphisme $\varphi \in \Hom(D_n, G)$ tel que $\varphi(\rho_1) = a$ et $\varphi(\sigma) = b$ est nécessairement un isomorphisme de $D_n$ sur $G$.

</ProofBlock>

<FoldNote kind="prepa" title="Précision prépa — Existence de $b \notin \langle a \rangle$ et construction explicite de $\varphi$">

1. **Pourquoi $b \notin \langle a \rangle$ sous $(33)$ ?** Si l’on avait $b \in \langle a \rangle$, comme $o(b) = 2$, $n$ serait nécessairement pair ($n = 2m$) et $b = a^m$ serait l’unique élément d’ordre $2$ de $\langle a \rangle$. Or $ab = a^{m+1} \in \langle a \rangle$ devrait vérifier $o(ab) = 2$, donc $a^{m+1} = a^m$, ce qui est impossible puisque $o(a) = n$. Ainsi, les trois conditions <MathRef id="eq-3-33">$(33)$</MathRef> imposent **automatiquement** $b \notin \langle a \rangle$ et $o(G) = 2n$.
2. **Existence du morphisme $\varphi : D_n \to G$** : le texte conclut rapidement que $\varphi$ « est nécessairement un isomorphisme ». Pour le justifier complètement, on pose $\varphi(\rho_1^k \sigma^j) = a^k b^j$ pour tout $k \in \{0, \dots, n - 1\}$ et $j \in \{0, 1\}$ (application bien définie et bijective puisque les $2n$ éléments de $D_n$ comme de $G$ s’écrivent de façon unique sous cette forme), puis on vérifie que $\varphi$ respecte le produit grâce aux relations identiques <MathRef id="eq-3-31">$(31)$</MathRef> dans $D_n$ et <MathRef id="eq-3-35">$(35)$</MathRef> dans $G$.

</FoldNote>

<MathBlock id="3.75-bis" kind="rem" title="Remarque (3.75)">

*Le groupe diédral $D_4$ n’est pas isomorphe au groupe des quaternions $Q_8$.*

Ces groupes sont tous deux d’ordre $8$ et non abéliens, mais $Q_8$ n’a qu’un seul élément d’ordre $2$, alors que $D_4$ en a cinq.

</MathBlock>

<FoldNote kind="intuition" title="Intuition — Classification des groupes non abéliens d’ordre $8$ : $D_4$ vs $Q_8$">

Pour distinguer deux groupes finis de même ordre, un invariant très efficace est le **comptage des éléments par ordre** (préservé par tout isomorphisme). Dans les groupes non abéliens d’ordre $8$ :
- **$D_4$** possède : $1$ élément d’ordre $1$ ($e$), **$5$ éléments d’ordre $2$** (la demi-rotation $\rho_1^2$ et les $4$ symétries axiales $\rho_1^k \circ \sigma$), et $2$ éléments d’ordre $4$ ($\rho_1, \rho_1^3$).
- **$Q_8$** (<MathRef id="1.16">exemple $(1.16)$</MathRef>) possède : $1$ élément d’ordre $1$ ($1$), **$1$ seul élément d’ordre $2$** ($-1$), et $6$ éléments d’ordre $4$ ($\pm i, \pm j, \pm k$).

Leur inventaire d’ordres diffère radicalement : $D_4 \not\simeq Q_8$. (On démontre par ailleurs que tout groupe non abélien d’ordre $8$ est isomorphe soit à $D_4$, soit à $Q_8$.)

</FoldNote>

<DihedralLab />
