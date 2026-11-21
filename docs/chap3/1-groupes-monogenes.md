<script setup lang="ts">
import type { ProofStep } from '../../src/components/ProofBlock.vue'

const steps3_3: ProofStep[] = [
  {
    title: '1) Construction de l’épimorphisme canonique $\\psi : \\Z \\to G$',
    body: 'Comme $G = \\langle x \\rangle = \\{x^k ;\\; k \\in \\Z\\}$, on définit $\\psi : \\Z \\to G$ par $\\psi(k) = x^k$. L’application $\\psi$ est surjective par définition de $\\langle x \\rangle$, et c’est un morphisme de groupes car $\\psi(k + l) = x^{k+l} = x^k x^l = \\psi(k)\\psi(l)$.',
    why: 'Tout groupe monogène est quotient de $(\\Z, +)$ : l’application $k \\mapsto x^k$ est le pont universel entre l’arithmétique de $\\Z$ et le groupe $G$.'
  },
  {
    title: '2) $1^{\\text{er}}$ cas : $\\psi$ est injectif ($\\Ker \\psi = (0)$)',
    body: 'Si $\\psi$ est injectif, c’est un morphisme bijectif de $\\Z$ sur $G$, donc un isomorphisme de groupes : $G \\simeq \\Z$, et $G$ est monogène infini.',
    why: 'Un épimorphisme injectif de groupes est un isomorphisme (proposition $(1.66)$ et corollaire $(1.82)$).'
  },
  {
    title: '3) $2^{\\text{e}}$ cas : $\\psi$ n’est pas injectif ($\\Ker \\psi \\neq (0)$)',
    body: 'Le noyau $\\Ker \\psi$ est un sous-groupe non nul de $(\\Z, +)$. D’après l’exemple $(1.28)$, il existe un unique $n > 0$ dans $\\N$ tel que $\\Ker \\psi = n\\Z$.',
    why: 'On connaît déjà la classification complète des sous-groupes de $(\\Z, +)$ : chacun est de la forme $n\\Z$ pour un unique $n \\in \\N$.'
  },
  {
    title: '4) Conclusion par le $1^{\\text{er}}$ théorème d’isomorphisme',
    body: 'En appliquant le $1^{\\text{er}}$ théorème d’isomorphisme $(2.27)$ à l’épimorphisme $\\psi$, on obtient $G = \\Im \\psi \\simeq \\dfrac{\\Z}{\\Ker \\psi} = \\dfrac{\\Z}{n\\Z}$, donc $G$ est cyclique d’ordre $n$.',
    why: 'Le $1^{\\text{er}}$ théorème d’isomorphisme identifie directement l’image $\\Im \\psi = G$ au quotient $\\Z / \\Ker \\psi = \\Z / n\\Z$.'
  }
]

const steps3_10: ProofStep[] = [
  {
    title: '1) Réduction aux modèles canoniques $\\Z$ et $\\dfrac{\\Z}{n\\Z}$',
    body: 'Par le théorème $(3.3)$, tout groupe monogène infini est isomorphe à $\\Z$ et tout groupe cyclique est isomorphe à $\\dfrac{\\Z}{n\\Z}$ ($n > 0$). Il suffit donc d’étudier les sous-groupes de $\\Z$ et de $\\dfrac{\\Z}{n\\Z}$.',
    why: 'Un isomorphisme préserve le treillis des sous-groupes ainsi que les propriétés « être monogène infini » et « être cyclique ».'
  },
  {
    title: '2) Cas monogène infini ($\\Z$)',
    body: 'Tout sous-groupe non nul de $\\Z$ s’écrit $n\\Z = \\{kn ;\\; k \\in \\Z\\}$ avec $n \\in \\N^*$ (exemple $(1.28)$). Comme $k \\neq l \\implies kn \\neq ln$, $n\\Z$ est monogène infini engendré par $n$.',
    why: 'Dans $\\Z$, l’intégrité ($kn = ln \\implies k = l$ pour $n \\neq 0$) garantit que $n\\Z$ est infini, et tout élément y est multiple de $n$.'
  },
  {
    title: '3) Cas cyclique ($\\dfrac{\\Z}{n\\Z}$, $n \\neq 0$)',
    body: 'Soit $\\pi : \\Z \\to \\dfrac{\\Z}{n\\Z}$ l’épimorphisme canonique et $K \\leqslant \\dfrac{\\Z}{n\\Z}$. Par surjectivité de $\\pi$, on a $K = \\pi(\\pi^{-1}(K))$. Or $\\pi^{-1}(K)$ est un sous-groupe de $\\Z$ (proposition $(1.55)$), donc $\\pi^{-1}(K) = k\\Z$ pour un unique $k \\in \\N$.',
    why: 'Remonter $K$ dans $\\Z$ par $\\pi^{-1}$ permet d’utiliser le théorème de structure des sous-groupes de $\\Z$ déjà connu.'
  },
  {
    title: '4) Descente par $\\pi$ et conclusion',
    body: 'Ainsi $K = \\pi(k\\Z)$ est l’image homomorphe par $\\pi$ du groupe monogène $k\\Z$. Par la proposition $(3.1)$, $K$ est monogène (engendré par $\\pi(k)$), et comme $K$ est fini, il est cyclique.',
    why: 'La stabilité de la monogénéité par image homomorphe (proposition $(3.1)$) évite tout calcul direct sur les classes modulo $n$.'
  }
]

const steps3_14: ProofStep[] = [
  {
    title: '1) Transport du problème de $G$ vers $\\dfrac{\\Z}{n\\Z}$',
    body: 'Par la remarque $(3.5)$ $1^\\circ$, l’application $\\overline{\\psi} : \\dfrac{\\Z}{n\\Z} \\to G$, $\\pi(k) \\mapsto x^k$, est un isomorphisme de groupes. Tout sous-groupe de $G$ est donc l’image par $\\overline{\\psi}$ d’un sous-groupe de $\\dfrac{\\Z}{n\\Z}$.',
    why: 'L’isomorphisme $\\overline{\\psi}$ met en bijection les sous-groupes de $\\dfrac{\\Z}{n\\Z}$ et ceux de $G$ en conservant leur ordre et leurs générateurs.'
  },
  {
    title: '2) Existence et unicité dans $\\dfrac{\\Z}{n\\Z}$',
    body: 'Soit $d$ un diviseur de $n$ dans $\\N^*$, et posons $k = \\dfrac{n}{d} \\in \\N^*$. D’après la proposition $(3.11)$ et le corollaire $(3.12)$, $\\langle \\pi(k) \\rangle$ est l’unique sous-groupe de $\\dfrac{\\Z}{n\\Z}$ d’ordre $\\dfrac{n}{k} = d$.',
    why: 'Dans $\\dfrac{\\Z}{n\\Z}$, les sous-groupes sont indexés bijectivement par les diviseurs $k \\mid n$, et leurs ordres $n/k$ sont deux à deux distincts.'
  },
  {
    title: '3) Retour dans $G$',
    body: 'En transportant par l’isomorphisme $\\overline{\\psi}$, $G$ admet un et un seul sous-groupe d’ordre $d$, et ce sous-groupe est engendré par $\\overline{\\psi}(\\pi(k)) = x^k$.',
    why: 'Un sous-groupe $H \\leqslant G$ est d’ordre $d$ si et seulement si $\\overline{\\psi}^{-1}(H)$ est d’ordre $d$ dans $\\dfrac{\\Z}{n\\Z}$.'
  }
]

const steps3_18: ProofStep[] = [
  {
    title: '1°) Cas où $G = \\langle x \\rangle$ est infini',
    body: 'D’après le théorème $(3.3)$, $\\psi : \\Z \\to G$, $k \\mapsto x^k$, est un isomorphisme de groupes. Les générateurs de $G$ sont exactement les images par $\\psi$ des générateurs de $(\\Z, +)$, qui sont $1$ et $-1$ (exemple $(1.42)$), soit $x$ et $x^{-1}$.',
    why: 'Un isomorphisme envoie les générateurs du groupe de départ sur les générateurs du groupe d’arrivée.'
  },
  {
    title: '2°) Traduction équivalente pour $G = \\langle x \\rangle$ cyclique d’ordre $n > 1$',
    body: 'Par la remarque $(3.17)$ (relation $(4)$), $x^k$ engendre $G$ ssi $\\exists m \\in \\Z,\\; x^{km} = x$, soit $x^{km - 1} = e$. D’après la proposition $(3.6)$, cela équivaut à $km - 1 \\in n\\Z$.',
    why: 'La proposition $(3.6)$ transforme l’égalité dans $G$ ($x^{km - 1} = e$) en une condition purement arithmétique de divisibilité dans $\\Z$.'
  },
  {
    title: '3°) Application du théorème de Bezout',
    body: 'Dire que $km - 1 \\in n\\Z$ équivaut à l’existence d’un couple $(m, q) \\in \\Z \\times \\Z$ tel que $km - nq = 1$, ce qui exprime, par le théorème de Bezout, que $k$ et $n$ sont premiers entre eux dans $\\Z$.',
    why: 'Le théorème de Bezout fournit exactement l’équivalence entre l’existence d’une combinaison linéaire égale à $1$ et le fait que $\\pgcd(k, n) = 1$.'
  }
]

const steps3_29: ProofStep[] = [
  {
    title: '1) Morphisme diagonal $f : \\Z \\to \\dfrac{\\Z}{m\\Z} \\times \\dfrac{\\Z}{n\\Z}$',
    body: 'Les surjections canoniques $\\sigma : \\Z \\to \\dfrac{\\Z}{m\\Z}$ et $\\pi : \\Z \\to \\dfrac{\\Z}{n\\Z}$ étant des morphismes d’anneaux unitaires, l’application $f(x) = (\\sigma(x), \\pi(x))$ est aussi un morphisme d’anneaux unitaires.',
    why: 'Pour comparer $\\dfrac{\\Z}{mn\\Z}$ et $\\dfrac{\\Z}{m\\Z} \\times \\dfrac{\\Z}{n\\Z}$, il suffit de faire agir $\\Z$ sur le produit puis de passer au quotient par $\\Ker f$.'
  },
  {
    title: '2) Calcul du noyau $\\Ker f$ et condition $(m, n) = 1$',
    body: 'On a $\\Ker f = \\{x \\in \\Z ;\\; \\sigma(x) = \\sigma(0) \\text{ et } \\pi(x) = \\pi(0)\\} = m\\Z \\cap n\\Z$. D’après le lemme $(3.27)$ (formule $(6)$), $(m, n) = 1 \\iff \\Ker f = mn\\Z$.',
    why: 'L’intersection des noyaux $m\\Z \\cap n\\Z$ ne coïncide avec $mn\\Z$ que lorsque $m$ et $n$ sont premiers entre eux.'
  },
  {
    title: '3) Passage au quotient via le $1^{\\text{er}}$ théorème d’isomorphisme',
    body: 'Par le $1^{\\text{er}}$ théorème d’isomorphisme (remarque $(3.26)$), $\\Im f \\simeq \\dfrac{\\Z}{\\Ker f}$. Or $\\Im f$ est un sous-anneau du produit fini $\\dfrac{\\Z}{m\\Z} \\times \\dfrac{\\Z}{n\\Z}$ de cardinal $mn$.',
    why: 'Si $(m, n) = 1$, $\\Im f \\simeq \\dfrac{\\Z}{mn\\Z}$ possède déjà $mn$ éléments, c’est-à-dire tout le cardinal de l’ensemble d’arrivée !'
  },
  {
    title: '4) Surjectivité par argument de cardinalité et réciproque',
    body: 'Si $(m, n) = 1$, $\\card(\\Im f) = mn = \\card\\left(\\dfrac{\\Z}{m\\Z} \\times \\dfrac{\\Z}{n\\Z}\\right)$, donc $f$ est surjectif et $\\dfrac{\\Z}{mn\\Z} \\simeq \\dfrac{\\Z}{m\\Z} \\times \\dfrac{\\Z}{n\\Z}$. Réciproquement, tout isomorphisme d’anneaux unitaires $\\dfrac{\\Z}{mn\\Z} \\simeq \\dfrac{\\Z}{m\\Z} \\times \\dfrac{\\Z}{n\\Z}$ envoie l’unité $\\overline{1}$ sur $(\\sigma(1), \\pi(1)) = f(1)$, ce qui impose que $f$ soit surjectif et donc $(m, n) = 1$ par $(9)$.',
    why: 'L’argument de cardinalité évite de résoudre explicitement une équation de Bezout pour montrer la surjectivité de $f$, et la conservation de l’élément unité $1$ force la surjectivité dans le sens réciproque.'
  }
]
</script>

# Chapitre III — Groupes monogènes. Groupes symétriques $S_n$. Groupes diédraux

<PageRef :page="89" />

Les familles de groupes que nous étudions dans ce chapitre représentent des types fondamentaux de structures de groupes, qui servent souvent de références dans la description d’autres groupes, éventuellement plus complexes. Par exemple, nous verrons, au chapitre VIII, que tout groupe abélien de type fini est isomorphe à un produit direct de groupes monogènes.

## 1 — Groupes monogènes

### A / Caractérisation des groupes monogènes

La notion de <GlossaryTerm id="groupe-monogene">groupe monogène</GlossaryTerm> a été définie au chapitre $\mathrm{I}^{\text{er}}$ (<MathRef id="1.40">définition $(1.40)$ $2^\circ$</MathRef>). Si $G$ est un groupe monogène engendré par l’élément $x$, on dit que $x$ est *un générateur de* $G$ et si le groupe est multiplicatif, on écrit :

$$G = \langle x \rangle = \{x^k ;\; k \in \Z\}$$

(<MathRef id="eq-1-19">formule $(19)$</MathRef>, chap. $\mathrm{I}^{\text{er}}$).

Nous savons (<MathRef id="1.42">exemples $(1.42)$</MathRef>) qu’il existe des groupes monogènes infinis, tels que $\Z$ et des groupes monogènes finis, c’est-à-dire cycliques (<MathRef id="1.43">définition $(1.43)$</MathRef>).

<MathBlock id="3.1" kind="prop" title="Proposition (3.1)">

*Toute image homomorphe d’un groupe monogène est monogène.*

</MathBlock>

<PageRef :page="90" />

<ProofBlock>

Soit un groupe monogène $G = \langle x \rangle$ et soit $G'$ un groupe image homomorphe de $G$ (<MathRef id="1.60">définition $(1.60)$</MathRef>) ; $f$ étant un <GlossaryTerm id="epimorphisme">épimorphisme</GlossaryTerm> de $G$ sur $G'$,

$$G = \{x^k ;\; k \in \Z\} \implies \Im f = G' = \{(f(x))^k ;\; k \in \Z\},$$

donc $G'$ est monogène engendré par $f(x)$.

</ProofBlock>

<MathBlock id="3.2" kind="cor" title="Corollaire (3.2)">

*Quel que soit $n > 0$ dans $\N$, le groupe $\dfrac{\Z}{n\Z}$ est cyclique.*

</MathBlock>

En effet $(\Z, +)$ est monogène engendré par $1$ (<MathRef id="1.42">exemple $(1.42)$ $1^\circ$</MathRef>) ; d’autre part (<MathRef id="2.25">remarque $(2.11)$ $2^\circ$</MathRef>) la <GlossaryTerm id="surjection-canonique">surjection canonique</GlossaryTerm> $\pi : (\Z, +) \to \left(\dfrac{\Z}{n\Z}, +\right)$ est un épimorphisme de groupes, donc $\dfrac{\Z}{n\Z}$ est monogène, engendré par $\pi(1) = \overline{1}$, et comme $\dfrac{\Z}{n\Z}$ est fini d’ordre $n$, $\dfrac{\Z}{n\Z}$ est cyclique.

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 90, sous le corollaire $(3.2)$), il est imprimé « remarque $(2.11)$ $2^\circ$ » ; il s’agit d’une erreur de renvoi pour les <MathRef id="2.25">*Remarques $(2.25)$* $2^\circ$</MathRef> (p. 82) et la <MathRef id="2.26">*Proposition $(2.26)$*</MathRef> (p. 83) — voir aussi l’<MathRef id="1.62">exemple $(1.62)$</MathRef> (p. 44). Le numéro $(2.11)$ désigne en réalité le <MathRef id="2.11">Corollaire $(2.11)$</MathRef> (p. 75).

</FoldNote>

Le théorème suivant fournit alors une caractérisation des groupes monogènes.

<MathBlock id="3.3" kind="thm" title="Théorème (3.3)">

*Si $G$ est un groupe monogène, alors $G$ vérifie l’une des conditions suivantes :*

$1)$ *$G \simeq \Z$ ; dans ce cas $G$ est monogène infini ; ou*

$2)$ *il existe $n > 0$ dans $\N$ tel que $G \simeq \dfrac{\Z}{n\Z}$, alors $G$ est cyclique d’ordre $n$.*

</MathBlock>

<ProofBlock :steps="steps3_3">

Soit un groupe monogène : $G = \langle x \rangle = \{x^k ;\; k \in \Z\}$

Considérons l’application $\begin{aligned}[t] \psi : \Z &\to G. \\ k &\mapsto x^k \end{aligned}$

La définition de $\psi$ implique sa surjectivité.

D’autre part, $\psi(k + l) = x^{k+l} = x^k x^l$, donc $\psi$ est un *épimorphisme* de groupes. Deux cas sont alors à envisager :

*1er cas* : $\psi$ est *injectif* ; par suite, $\psi$ est un isomorphisme de groupes, d’où $G \simeq \Z$ ; $G$ est donc monogène infini.

*2e cas* : $\psi$ est *non injectif* ; $\Ker \psi$ est alors un sous-groupe non nul de $\Z$, donc il existe un unique $n > 0$ dans $\N$ tel que $\Ker \psi = n\Z$.

<PageRef :page="91" />

D’après le $1^{\text{er}}$ théorème d’isomorphisme (<MathRef id="2.27">théorème $(2.12)$</MathRef>), on a

$$\Im \psi \simeq \frac{G}{\Ker \psi},$$

donc $G \simeq \dfrac{\Z}{n\Z}$ ; $G$ est cyclique d’ordre $n$.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 91, fin de preuve du théorème $(3.3)$), deux coquilles apparaissent :

1. Il est imprimé « théorème $(2.12)$ » pour le $1^{\text{er}}$ théorème d’isomorphisme, alors qu’il s’agit du <MathRef id="2.27">Théorème $(2.27)$</MathRef> (pp. 83–84) ; $(2.12)$ désigne le théorème d’équipotence des classes à droite et à gauche (p. 75). La même erreur de renvoi figure à la ligne suivante dans la remarque $(3.5)$ $1^\circ$.
2. Il est imprimé $\Im \psi \simeq \dfrac{G}{\Ker \psi}$ au lieu de $\Im \psi \simeq \dfrac{\Z}{\Ker \psi}$ (puisque le morphisme $\psi$ est défini sur $\Z$, de sorte que $\Ker \psi = n\Z \leqslant \Z$).

</FoldNote>

<MathBlock id="3.4" kind="cor" title="Corollaire (3.4)">

*Deux groupes monogènes infinis sont isomorphes.*

*Deux groupes cycliques de même ordre $n$ sont isomorphes.*

</MathBlock>

On peut dire aussi « qu’à un isomorphisme près » les seuls groupes monogènes sont les groupes quotients de $\Z$ ($\Z$ étant identifié à $\Zn{0}$).

<MathBlock id="3.5" kind="rem" title="Remarques (3.5)">

$1^\circ$ Dans le cas où $G$ est cyclique d’ordre $n$, l’isomorphisme de $\dfrac{\Z}{n\Z}$ induit par l’épimorphisme $\psi$ du <MathRef id="3.3">théorème $(3.3)$</MathRef> est

$$\begin{aligned}
\overline{\psi} : \frac{\Z}{n\Z} &\to G \\
\overline{k} &\mapsto x^k
\end{aligned} \qquad (\text{voir la démonstration du <MathRef id="2.27">théorème $(2.12)$</MathRef>}).$$

$$\frac{\Z}{n\Z} = \{\overline{0}, \overline{1}, \dots, \overline{n - 1}\}$$

implique :

<span id="ref-eq-3-1"></span>

$$G = \{e, x, \dots, x^{n - 1}\} \tag{1}$$

Pour $k$ quelconque dans $\Z$, il existe $q$ et $r$ entiers tels que $k = nq + r$, avec $0 \leqslant r \leqslant n - 1$, d’où

$$x^k = (x^n)^q x^r = x^r, \qquad \text{car } x^n = e.$$

D’autre part, pour tout $k \in \Z$, $x^{n - k}$ est l’inverse de $x^k$ dans $G$, puisque $x^{n - k} x^k = e$ ; de plus $1 \leqslant k \leqslant n - 1$ implique $1 \leqslant n - k \leqslant n - 1$.

<PageRef :page="92" />

En *notation additive*, un groupe $G = \langle x \rangle$ cyclique d’ordre $n$ s’écrit :

<span id="ref-eq-3-1-prime"></span>

$$G = \{0, x, 2x, \dots, (n - 1)x\} \tag{1'}$$

$2^\circ$ $G$ étant un groupe quelconque, d’après le <MathRef id="3.3">théorème $(3.3)$</MathRef>, pour un élément $x \in G$, on a :

$$x \text{ \textit{d’ordre infini} dans } G \iff \langle x \rangle \simeq \Z ;$$

$$x \text{ \textit{d’ordre fini} } m \text{ dans } G \iff \langle x \rangle \simeq \frac{\Z}{m\Z}.$$

$\psi$ étant l’épimorphisme $\Z \to \langle x \rangle$ tel que $\psi(k) = x^k$, on sait (<MathRef id="3.3">théorème $(3.3)$</MathRef>) que :

$$\begin{aligned}
\langle x \rangle \simeq \Z &\iff \psi \text{ injectif} \\
\left(\exists m \in \N^* \text{ et } \langle x \rangle \simeq \frac{\Z}{m\Z}\right) &\iff \psi \text{ non injectif.}
\end{aligned}$$

On en déduit que :

$$\begin{aligned}
x \text{ \textit{d’ordre infini} dans } G &\iff \forall (k, l)\; (k \neq l \text{ dans } \Z \implies x^k \neq x^l) \\
x \text{ \textit{d’ordre fini} \quad dans } G &\iff \exists (k, l)\; (k \neq l \text{ dans } \Z \text{ et } x^k = x^l) \\
x \text{ \textit{d’ordre fini} \quad dans } G &\iff \exists r \in \Z^*, \quad x^r = e.
\end{aligned}$$

</MathBlock>

<FoldNote kind="intuition" title="Intuition — Classification à isomorphisme près : droite $\Z$ ou horloge $\dfrac{\Z}{n\Z}$">

Le théorème <MathRef id="3.3">$(3.3)$</MathRef> et les remarques <MathRef id="3.5">$(3.5)$</MathRef> donnent une image géométrique complète des puissances successives $x^k$ d’un élément $x$ :

- **Aucune collision** ($x^k \neq x^l$ dès que $k \neq l$) : les puissances s’égrènent indéfiniment sans jamais repasser par le même point, exactement comme les entiers sur la droite $\Z$ ($\langle x \rangle \simeq \Z$).
- **Première collision** : s’il existe deux exposants distincts $k > l$ avec $x^k = x^l$, alors $x^{k-l} = e$ avec $r = k - l > 0$. La suite $(x^k)_{k \in \Z}$ devient périodique de période minimale $n$ (le plus petit entier $n \geqslant 1$ tel que $x^n = e$), et l’on parcourt exactement $n$ éléments distincts $\{e, x, \dots, x^{n-1}\}$ comme les heures sur un cadran d’horloge à $n$ graduations ($\langle x \rangle \simeq \dfrac{\Z}{n\Z}$).

En particulier, tout groupe monogène est **abélien**, et il n’existe à isomorphisme près qu’**un seul** groupe cyclique de chaque ordre $n \in \N^*$ (<MathRef id="3.4">corollaire $(3.4)$</MathRef>).

</FoldNote>

<MathBlock id="3.6" kind="prop" title="Proposition (3.6)">

*Si $G = \langle x \rangle$ est un groupe cyclique d’ordre $n$, dont l’élément neutre est $e$, alors :*

$$(k \in \Z \text{ et } x^k = e) \iff k \in n\Z$$

*et $n$ est le plus petit entier strictement positif tel que $x^n = e$.*

</MathBlock>

<ProofBlock>

Si $G = \langle x \rangle$ est cyclique d’ordre $n$, $n\Z$ est le noyau l’épimorphisme $\psi : \Z \to G$ tel que $\psi(k) = x^k$ ; par suite

$$(k \in \Z \text{ et } x^k = e) \iff k \in n\Z.$$

$n$ est donc, dans $\N^*$, le plus petit entier tel que $x^n = e$.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 92, preuve de la proposition $(3.6)$), la préposition « de » s’est déplacée typographiquement devant l’intitulé : il est imprimé « `de Preuve :` » en tête de démonstration, et « `$n\Z$ est le noyau l’épimorphisme $\psi$` » (omission de *de* entre *noyau* et *l’épimorphisme*) à la ligne suivante.

</FoldNote>

<PageRef :page="93" />

<MathBlock id="3.7" kind="cor" title="Corollaire (3.7)">

*Soit $G$ un groupe fini d’ordre $n$.*

*Soit $x \in G$ tel que $o(x) = m$, alors :*

$1)$ $(h \in \Z \text{ et } x^k = e) \iff k \in m\Z$ ;

$2)$ *$m$ est dans $\N^*$, le plus petit entier tel que $x^m = e$ ;*

$3)$ *$x^n = e$.*

</MathBlock>

$1)$ et $2)$ se déduisent de la <MathRef id="3.5">remarque $(3.5)$, $2^\circ$</MathRef> et de la <MathRef id="3.6">proposition $(3.6)$</MathRef>. D’autre part, d’après le <MathRef id="2.9">théorème de Lagrange</MathRef>, $m$ divise $n$, c’est-à-dire que $n \in m\Z$, donc $x^n = e$.

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 93, corollaire $(3.7)$ $1)$), il est imprimé « $(h \in \Z \text{ et } x^k = e)$ » : coquille typographique (`h` pour `k`, il faut lire $k \in \Z$).

</FoldNote>

<MathBlock id="3.8" kind="ex" title="Exemple (3.8)">

*Pour tout entier $n > 0$, le groupe multiplicatif $U_n$ des racines $n$-ième de l’unité dans $\C$, est cyclique d’ordre $n$.*

On sait déjà (<MathRef id="1.30">exemple $(1.30)$</MathRef>) que $U_n$ est un groupe fini d’ordre $n$ ; il suffit de montrer que $U_n$ contient un élément d’ordre $n$.

Or, $U_n = \{z_k\}_{0 \leqslant k \leqslant n - 1}$, où $z_k = \cos \dfrac{2k\pi}{n} + i \sin \dfrac{2k\pi}{n}$.

Pour tout $k$ ($0 \leqslant k \leqslant n - 1$), on a donc $z_k = z_1^k$ et $n$ est le plus petit entier strictement positif tel que $z_1^n = e$. On en déduit que $U_n = \langle z_1 \rangle$.

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 93, exemple $(3.8)$), il est imprimé « $z_1^n = e$ » avec la notation générique $e$ de l’élément neutre au lieu de $1$ dans le groupe multiplicatif $U_n \subset \C^*$.

</FoldNote>

<MathBlock id="3.9" kind="prop" title="Proposition (3.9)">

*Tout groupe fini d’ordre premier $p$ est cyclique.*

</MathBlock>

<ProofBlock>

Soit $G$ un groupe fini d’ordre premier $p$ ; $p$ étant plus grand que $1$, il existe $x \in G$ tel que $x \neq e$. Si $m = o(x)$, on a $m \neq 1$ et $m$ divise $p$ (<MathRef id="2.9">théorème de Lagrange</MathRef>) ; par suite $m = p$, donc $G = \langle x \rangle$.

</ProofBlock>

<FoldNote kind="piege" title="Piège classique — « $x^n = e$ » ne signifie pas « $o(x) = n$ » !">

Le corollaire <MathRef id="3.7">$(3.7)$ $1)$</MathRef> fournit une règle d’or souvent oubliée :

$$x^k = e \iff o(x) \mid k \qquad \text{(et non } o(x) = k\text{ !)}.$$

Ainsi, dans $S_3$ (d’ordre $6$), la transposition $\tau_1$ vérifie $\tau_1^6 = e$, mais son ordre est $2$ (car $\tau_1^2 = e$). Pour prouver que $o(x) = m$, il faut vérifier **deux** points : $x^m = e$ **et** $m$ est le *plus petit* entier $\geqslant 1$ ayant cette propriété (ou, de façon équivalente, $x^d \neq e$ pour tout diviseur strict $d \mid m$, ou $x^{m/p} \neq e$ pour tout diviseur premier $p \mid m$).

Par ailleurs, si la proposition <MathRef id="3.9">$(3.9)$</MathRef> assure qu’il n’existe à isomorphisme près qu’un seul groupe d’ordre premier $p$ (à savoir $\dfrac{\Z}{p\Z}$), ce n’est plus vrai pour les ordres composés : déjà pour $n = 4$, il existe deux groupes non isomorphes ($\dfrac{\Z}{4\Z}$ cyclique et le groupe de Klein $\Zn{2} \times \Zn{2}$, voir <MathRef id="1.86">exemple $(1.86)$</MathRef>).

</FoldNote>

### B / Sous-groupe d’un groupe monogène

*a) Propriété générale :*

<MathBlock id="3.10" kind="thm" title="Théorème (3.10)">

$1^\circ$ *Tout sous-groupe, non réduit à l’élément neutre, d’un groupe monogène infini est monogène infini.*

$2^\circ$ *Tout sous-groupe d’un groupe cyclique est cyclique.*

</MathBlock>

<PageRef :page="94" />

<ProofBlock :steps="steps3_10">

Compte tenu du <MathRef id="3.3">théorème $(3.3)$</MathRef>, il suffit de montrer que tout sous-groupe non nul de $\Z$ est monogène infini et que, pour $n \neq 0$ dans $\N$, tout sous-groupe de $\dfrac{\Z}{n\Z}$ est cyclique.

$1^\circ$ On sait (<MathRef id="1.28">exemple $(1.28)$</MathRef>) que tout sous-groupe non nul de $\Z$ est de la forme $n\Z$, $n \neq 0$ dans $\N$.

$$n\Z = \{nk = kn ;\; k \in \Z\}$$

et $k \neq l$ dans $\Z$ implique $kn \neq ln$, donc $n\Z$ est un groupe (additif) monogène infini engendré par $n$.

$2^\circ$ Soit $n \neq 0$ dans $\N$ et $\pi$ l’épimorphisme canonique $\Z \to \dfrac{\Z}{n\Z}$. Soit $K$ un sous-groupe de $\dfrac{\Z}{n\Z}$ ; $\pi$ étant surjectif, on a $K = \pi(\pi^{-1}(K))$ ; or $\pi^{-1}(K)$ est un sous-groupe de $\Z$ (<MathRef id="1.55">proposition $(1.55)$</MathRef>), donc *il existe un unique $k \in \N$ tel que $\pi^{-1}(K) = k\Z$*.

$K$ est alors l’image homomorphe par $\pi$ du groupe monogène $k\Z$, par suite $K$ est monogène, engendré par $\pi(k)$ (<MathRef id="3.1">proposition $(3.1)$</MathRef>) et $K$ est cyclique, puisque $K$ est fini.

</ProofBlock>

*b) Sous-groupes d’un groupe cyclique.* Étudions, tout d’abord, les sous-groupes de $\dfrac{\Z}{n\Z}$, pour $n \neq 0$ dans $\N$.

En reprenant les notations de la démonstration du <MathRef id="3.10">théorème $(3.10)$</MathRef>, on remarque que, $K$ étant un sous-groupe de $\dfrac{\Z}{n\Z}$, $\pi(0) = \overline{0}$ appartient à $K$ ; par suite, on a :

$$\pi^{-1}(\overline{0}) \subseteq \pi^{-1}(K),$$

c’est-à-dire $n\Z \subseteq k\Z$ ; autrement dit, $k$ divise $n$ dans $\N^*$.

Déterminons l’ordre du sous-groupe $K$.

Posons $\pi(k) = \overline{k}$ ; on a $K = \langle \overline{k} \rangle$ dans $\dfrac{\Z}{n\Z}$, d’où

$$o(K) = o(\overline{k}) \quad \text{dans } \frac{\Z}{n\Z}$$

$o(\overline{k})$ est le plus petit entier $d > 0$, tel que $d\overline{k} = \overline{0}$.

Or, $d\overline{k} = d\pi(k) = \pi(dk)$,

puisque $\pi$ est un morphisme de groupes additifs.

<PageRef :page="95" />

$k$ divisant $n$ dans $\N^*$, $o(\overline{k})$ est nécessairement l’entier $d = \dfrac{n}{k}$.

On a ainsi prouvé la propriété suivante :

<MathBlock id="3.11" kind="prop" title="Proposition (3.11)">

*Soient $n \in \N^*$ et $\pi$ l’épimorphisme canonique $\Z \to \dfrac{\Z}{n\Z}$. Pour tout sous-groupe $K$ de $\dfrac{\Z}{n\Z}$, il existe un unique diviseur $k$ de $n$, dans $\N^*$, tel que $\pi(k)$ engendre $K$ et $o(K) = \dfrac{n}{k}$.*

</MathBlock>

<MathBlock id="3.12" kind="cor" title="Corollaire (3.12)">

*Le nombre des sous-groupes de $\dfrac{\Z}{n\Z}$ ($n \neq 0$ dans $\N$) est égal au nombre des diviseurs de $n$ dans $\N^*$.*

</MathBlock>

En effet, d’après la <MathRef id="3.11">proposition $(3.11)$</MathRef>, $\dfrac{\Z}{n\Z}$ n’a pas d’autres sous-groupes que les $\langle \pi(k) \rangle$ où $k$ divise $n$, dans $\N^*$. De plus, si $k$ et $k'$ sont deux diviseurs de $n$, tels que $k \neq k'$ dans $\N^*$, les ordres des sous-groupes $\langle \pi(k) \rangle$ et $\langle \pi(k') \rangle$ sont respectivement $\dfrac{n}{k}$ et $\dfrac{n}{k'}$, donc ces sous-groupes sont distincts.

Si $n > 1$, on remarque que $n$ a au moins deux diviseurs distincts dans $\N^*$, $1$ et $n$, qui correspondent, respectivement, au sous-groupe plein $\dfrac{\Z}{n\Z}$ et au sous-groupe réduit à l’élément neutre $(\overline{0})$.

<MathBlock id="3.13" kind="ex" title="Exemple (3.13)">

Les diviseurs de $6$, dans $\N$, étant $1, 2, 3$ et $6$, on peut affirmer que $\dfrac{\Z}{6\Z}$ a quatre sous-groupes distincts :

$$\langle \overline{1} \rangle = \frac{\Z}{6\Z}, \qquad \langle \overline{2} \rangle = \{\overline{2}, \overline{4}, \overline{0}\}, \qquad \langle \overline{3} \rangle = \{\overline{3}, \overline{0}\} \qquad \text{et} \qquad \langle \overline{6} \rangle = (\overline{0}).$$

Les sous-groupes $\langle \overline{4} \rangle$ et $\langle \overline{5} \rangle$ coïncident donc nécessairement avec l’un des quatre sous-groupes précédents.

On peut vérifier que $\langle \overline{4} \rangle = \langle \overline{2} \rangle$ et $\langle \overline{5} \rangle = \dfrac{\Z}{6\Z}$ ; ces résultats seront justifiés par les propriétés des générateurs d’un groupe cyclique (paragraphe C /, ci-dessous).

</MathBlock>

<MicroChallenge title="Défi avant le théorème $(3.14)$ — Sous-groupes de $\dfrac{\Z}{12\Z}$" hint="Listez les diviseurs positifs de $12$, puis associez à chacun d’eux le sous-groupe $\langle \overline{k} \rangle$ et son ordre $d = 12/k$.">

Combien le groupe cyclique $\dfrac{\Z}{12\Z}$ possède-t-il de sous-groupes ? Décrivez-les tous explicitement, classez-les par ordre croissant et déterminez à quel sous-groupe de cette liste est égal $\langle \overline{9} \rangle$.

<template #answer>

Les diviseurs de $12$ dans $\N^*$ sont $1, 2, 3, 4, 6, 12$ ($6$ diviseurs). Par le corollaire <MathRef id="3.12">$(3.12)$</MathRef>, $\dfrac{\Z}{12\Z}$ possède exactement **$6$ sous-groupes**, un pour chaque ordre $d \mid 12$ :

- ordre $1$ ($k = 12$) : $\langle \overline{12} \rangle = \{\overline{0}\}$ ;
- ordre $2$ ($k = 6$) : $\langle \overline{6} \rangle = \{\overline{0}, \overline{6}\}$ ;
- ordre $3$ ($k = 4$) : $\langle \overline{4} \rangle = \{\overline{0}, \overline{4}, \overline{8}\}$ ;
- ordre $4$ ($k = 3$) : $\langle \overline{3} \rangle = \{\overline{0}, \overline{3}, \overline{6}, \overline{9}\}$ ;
- ordre $6$ ($k = 2$) : $\langle \overline{2} \rangle = \{\overline{0}, \overline{2}, \overline{4}, \overline{6}, \overline{8}, \overline{10}\}$ ;
- ordre $12$ ($k = 1$) : $\langle \overline{1} \rangle = \dfrac{\Z}{12\Z}$.

Pour $\langle \overline{9} \rangle$ : on a $2 \cdot \overline{9} = \overline{6}$, $3 \cdot \overline{9} = \overline{3}$, $4 \cdot \overline{9} = \overline{0}$, donc $\langle \overline{9} \rangle = \{\overline{0}, \overline{3}, \overline{6}, \overline{9}\} = \langle \overline{3} \rangle$ (d’ordre $4$, correspondant à $k = \pgcd(9, 12) = 3$).

</template>

</MicroChallenge>

De l’étude des sous-groupes de $\dfrac{\Z}{n\Z}$, pour $n \neq 0$, on déduit le <PageRef :page="96" /> théorème suivant, relatif aux sous-groupes d’un groupe cyclique quelconque (que l’on notera multiplicativement) :

<MathBlock id="3.14" kind="thm" title="Théorème (3.14)">

*$G = \langle x \rangle$ étant un groupe cyclique d’ordre $n$, alors, pour tout diviseur $d$ de $n$, il existe un et un seul sous-groupe d’ordre $d$ de $G$ et ce sous-groupe est engendré par $x^k$ où $k = \dfrac{n}{d}$.*

</MathBlock>

<ProofBlock :steps="steps3_14">

$\pi$ désigne toujours l’épimorphisme canonique $\Z \to \dfrac{\Z}{n\Z}$.

D’après la <MathRef id="3.5">remarque $(3.4)$</MathRef> : $\begin{aligned}[t] \overline{\psi} : \frac{\Z}{n\Z} &\to G \\ \pi(k) &\mapsto x^k \end{aligned}$ est un isomorphisme de groupes.

Tout sous-groupe de $G$ est donc l’image par $\overline{\psi}$ d’un sous-groupe de $\dfrac{\Z}{n\Z}$.

Soit $d$ un diviseur de $n$, dans $\N^*$ ; posons $k = \dfrac{n}{d}$.

D’après la <MathRef id="3.11">proposition $(3.11)$</MathRef> et le <MathRef id="3.12">corollaire $(3.12)$</MathRef>, $\langle \pi(k) \rangle$ est l’unique sous-groupe de $\dfrac{\Z}{n\Z}$ d’ordre $d = \dfrac{n}{k}$.

On en déduit que $G$ a un et un seul sous-groupe d’ordre $d$, engendré par $\overline{\psi}(\pi(k)) = x^k$.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 96, preuve du théorème $(3.14)$), il est imprimé « D’après la remarque $(3.4)$ » ; il s’agit d’une erreur de renvoi pour les <MathRef id="3.5">*Remarques $(3.5)$* $1^\circ$</MathRef> (p. 91), le numéro $(3.4)$ correspondant au <MathRef id="3.4">Corollaire $(3.4)$</MathRef>.

</FoldNote>

<MathBlock id="3.15" kind="rem" title="Remarques (3.15)">

$1^\circ$ Si le groupe $G = \langle x \rangle$ est noté additivement, dans l’énoncé du <MathRef id="3.14">théorème $(3.14)$</MathRef>, $x^k$ doit être remplacé par $kx$.

$2^\circ$ L’étude ci-dessus montre que, lorsqu’un groupe $G$ est *cyclique* d’ordre $n$, il existe une bijection entre l’ensemble des diviseurs de $n$ dans $\N^*$ et l’ensemble des sous-groupes de $G$.

Nous verrons plus loin (chap. VI) que cette propriété n’est pas vérifiée, en général, par un groupe fini quelconque ; plus précisément, si $G$ est un groupe fini d’ordre $n$ et si $d$ divise $n$ dans $\N^*$, alors :

*a)* *il n’existe pas nécessairement un sous-groupe de $G$, d’ordre $d$ (exercice 10, chap. IV) ;*

*b)* *s’il existe un sous-groupe de $G$, d’ordre $d$, il n’est pas nécessairement unique.*

</MathBlock>

<FoldNote kind="prepa" title="Précision prépa — Ordre de $x^k$ et réciproque du théorème de Lagrange">

Deux formules très utiles en exercice prolongent directement le théorème <MathRef id="3.14">$(3.14)$</MathRef> :

1. **Ordre d’une puissance $x^k$** : si $x \in G$ est d’ordre fini $n$, alors pour tout $k \in \Z$,
   $$\langle x^k \rangle = \langle x^{\pgcd(n, k)} \rangle \qquad \text{et} \qquad o(x^k) = \frac{n}{\pgcd(n, k)}.$$
   En effet, dans $\dfrac{\Z}{n\Z}$, $\pi^{-1}(\langle \overline{k} \rangle) = k\Z + n\Z = \pgcd(n, k)\Z$, ce qui ramène immédiatement au cas où $k$ divise $n$ dans la proposition <MathRef id="3.11">$(3.11)$</MathRef> !
2. **Contre-exemple à la réciproque de Lagrange** : la remarque $(3.15)\;2^\circ\;a)$ anticipe le groupe alterné $A_4$ (d’ordre $12$), qui ne possède **aucun** sous-groupe d’ordre $6$ bien que $6 \mid 12$. À l’inverse, le groupe de Klein $V \simeq \Zn{2} \times \Zn{2}$ (d’ordre $4$) illustre $b)$ : il possède **trois** sous-groupes distincts d’ordre $2$.

</FoldNote>

<PageRef :page="97" />

<MathBlock id="3.16" kind="prop" title="Proposition (3.16)">

*Soit $G$ un groupe non réduit à l’élément neutre $e$ ; alors $G$ n’a pas d’autre sous-groupe que $G$ et $(e)$, si et seulement si $G$ est cyclique d’ordre premier.*

</MathBlock>

<ProofBlock>

— Soit $G$ un groupe cyclique d’ordre premier $p$ ; $p > 1$ implique $G \neq (e)$ ; d’après le <MathRef id="2.9">théorème de Lagrange</MathRef>, l’ordre d’un sous-groupe de $G$ ne peut être que $1$ ou $p$, donc $G$ n’a pas d’autre sous-groupe que $(e)$ et $G$.

Réciproquement, considérons un groupe $G \neq (e)$ dont les seuls sous-groupes sont $G$ et $(e)$.

Soit $x \neq e$, dans $G$ ; le sous-groupe $\langle x \rangle$ de $G$ est nécessairement différent de $(e)$, donc $\langle x \rangle = G$, c’est-à-dire que $G$ est monogène.

Si $G$ était infini, $G$ serait isomorphe à $\Z$, donc aurait d’autres sous-groupes que $G$ et $(e)$ ; par suite, $G$ est cyclique.

$G$ n’ayant pas d’autre sous-groupe que $G$ et $(e)$, l’ordre de $G$ n’a pas, dans $\N^*$, d’autre diviseur que lui-même et $1$, c’est donc un nombre premier.

</ProofBlock>

### C / Générateurs d’un groupe monogène

*a) Préliminaires.* Rappelons que dans $\Z$ deux éléments non nuls $a$ et $b$ sont dits *premiers entre eux*, si leurs seuls diviseurs communs sont $1$ et $-1$ ; autrement dit, si $1$ est $\mathrm{PGCD}$ de $a$ et $b$ ($\mathrm{PGCD}$ = plus grand commun diviseur).

— On suppose alors connu le résultat suivant [49] :

<MathBlock id="thm-bezout" kind="thm" title="Théorème de Bezout">

*Deux entiers non nuls $a$ et $b$ sont premiers entre eux dans $\Z$, si et seulement s’il existe $u$ et $v$ dans $\Z$, tels que :*<BookFootnote num="1" text="Etienne Bezout, mathématicien français (1730-1783)." />

<span id="ref-eq-3-2"></span>

$$au + bv = 1 \tag{2}$$

</MathBlock>

<MathBlock id="not-3-coprime" kind="not" title="Notation — Entiers premiers entre eux">

Pour $a$ et $b$ non nuls dans $\Z$, on écrira

<span id="ref-eq-3-3"></span>

$$(a, b) = 1 \tag{3}$$

pour exprimer que $a$ et $b$ sont premiers entre eux.

</MathBlock>

<PageRef :page="98" />

En effet, dans $\Z$, un $\mathrm{PGCD}$ de $a$ et $b$ est souvent noté $(a, b)$ et <MathRef id="eq-3-3">$(3)$</MathRef> exprime que $1$ est $\mathrm{PGCD}$ de $a$ et $b$.

*b) Générateurs d’un groupe monogène.* Un groupe monogène quelconque sera noté multiplicativement.

<MathBlock id="3.17" kind="rem" title="Remarque (3.17)">

Soit $G = \langle x \rangle = \{x^k ;\; k \in \Z\}$ ; alors, pour que $x^k$ soit un générateur de $G$, il faut et il suffit que $x \in \langle x^k \rangle$, sous-groupe de $G$ engendré par $x^k$ ; d’où

<span id="ref-eq-3-4"></span>

$$x^k \text{ générateur de } G \iff \exists m \in \Z, \quad x^{km} = x \tag{4}$$

</MathBlock>

<MicroChallenge title="Défi avant le théorème $(3.18)$ — Générateurs de $\dfrac{\Z}{8\Z}$ et $\dfrac{\Z}{10\Z}$" hint="Testez $\langle \overline{k} \rangle$ pour $1 \leqslant k \leqslant n - 1$ : $\overline{k}$ engendre $\dfrac{\Z}{n\Z}$ si et seulement s’il permet d’atteindre $\overline{1}$.">

Dans le groupe additif $\dfrac{\Z}{8\Z}$, quels éléments $\overline{k}$ sont générateurs du groupe ? Même question dans $\dfrac{\Z}{10\Z}$. Quel lien arithmétique entre $k$ et $n$ apparaît ?

<template #answer>

- Dans $\dfrac{\Z}{8\Z}$ : $\overline{1}, \overline{3}, \overline{5}, \overline{7}$ sont générateurs (par exemple $3 \cdot \overline{3} = \overline{1}$, $5 \cdot \overline{5} = \overline{1}$, $7 \cdot \overline{7} = \overline{1}$), tandis que $\overline{0}, \overline{2}, \overline{4}, \overline{6}$ engendrent des sous-groupes stricts d’ordres $1, 4, 2, 4$. Ce sont exactement les entiers $k \in \{1, \dots, 7\}$ premiers avec $8$ (il y en a $\varphi(8) = 4$).
- Dans $\dfrac{\Z}{10\Z}$ : les générateurs sont $\overline{1}, \overline{3}, \overline{7}, \overline{9}$, soit les entiers $k \in \{1, \dots, 9\}$ premiers avec $10$ (il y en a $\varphi(10) = 4$).

Dans les deux cas, $\overline{k}$ engendre $\dfrac{\Z}{n\Z}$ si et seulement si $\pgcd(k, n) = 1$, comme va le démontrer le théorème <MathRef id="3.18">$(3.18)$</MathRef>.

</template>

</MicroChallenge>

<MathBlock id="3.18" kind="thm" title="Théorème (3.18)">

*Soit un groupe monogène $G = \langle x \rangle$.*

$1^\circ$ *Si $G$ est infini, alors les seuls générateurs de $G$ sont $x$ et $x^{-1}$.*

$2^\circ$ *Si $G$ est cyclique d’ordre $n > 1$, alors l’ensemble des générateurs de $G$ est formé par les $x^k$, tels que $k$ et $n$ sont premiers entre eux dans $\Z$.*

</MathBlock>

<ProofBlock :steps="steps3_18">

$1^\circ$ Si $G$ est monogène infini, alors $\begin{aligned}[t] \psi : \Z &\to G \\ k &\mapsto x^k \end{aligned}$ est un isomorphisme de groupe (<MathRef id="3.3">théorème $(3.3)$</MathRef>).

Tout générateur de $G$ est donc l’image par $\psi$ d’un générateur de $(\Z, +)$.

Or les seuls générateurs de $(\Z, +)$ sont $1$ et $-1$ (<MathRef id="1.42">exemple $(1.42)$</MathRef>), d’où le résultat énoncé.

$2^\circ$ On suppose $G = \langle x \rangle$, cyclique d’ordre $n > 1$.

Cherchons s’il existe un entier $k \neq 1$ tel que $x^k$ engendre $G$. D’après la <MathRef id="3.17">remarque $(3.17)$</MathRef>, on a

$$\begin{aligned}
G = \langle x^k \rangle &\iff \exists m \in \Z, \quad x^{km} = x \\
G = \langle x^k \rangle &\iff \exists m \in \Z, \quad x^{km - 1} = e \\
G = \langle x^k \rangle &\iff \exists m \in \Z, \quad (km - 1) \in n\Z \\
G = \langle x^k \rangle &\iff \exists (m, q) \in \Z \times \Z, \quad km - nq = 1.
\end{aligned}$$

D’après le <MathRef id="thm-bezout">théorème de Bezout</MathRef>, la dernière condition écrite exprime que $k$ et $n$ sont premiers entre eux dans $\Z$.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 98, preuve du théorème $(3.18)$), on lit « isomorphisme de groupe » au singulier ($1^\circ$) et « Cherchons s’il existe un entier $k \neq 1$ tel que $x^k$ engendre $G$ » ($2^\circ$) : $k = 1$ est évidemment générateur avec $(1, n) = 1$, comme le confirme aussitôt l’intervalle $1 \leqslant k' \leqslant n - 1$ de la remarque $(3.19)$.

</FoldNote>

<MathBlock id="3.19" kind="rem" title="Remarque (3.19)">

Soit $G = \langle x \rangle$ cyclique d’ordre $n$, donc $G = \{e, x, \dots, x^{n-1}\}$. Quel que soit $k \in \Z$ tel que $(k, n) = 1$ (notation définie plus haut par <MathRef id="eq-3-3">$(3)$</MathRef>), il existe $s$ et $k'$ dans $\Z$ tels que

$$k = ns + k' \qquad \text{et} \qquad 1 \leqslant k' \leqslant n - 1.$$

<PageRef :page="99" />

On a alors

$$x^k = x^{k'}, \qquad \text{car } x^{ns} = (x^n)^s = e$$

et $(k', n) = 1$, car tout diviseur commun à $k'$ et $n$ divise aussi $k$.

On en conclut que, *si $G = \langle x \rangle$ est cyclique d’ordre $n$, alors les générateurs de $G$ sont les $x^k$ tels que $k$ est premier avec $n$ et $1 \leqslant k \leqslant n - 1$.*

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

La conclusion en italique de la remarque $(3.19)$ (p. 99) suppose implicitement $n > 1$ (hypothèse du théorème $(3.18)\;2^\circ$). Pour $n = 1$, le groupe trivial $(e)$ admet $e = x^0$ pour unique générateur, ce que prend en compte la convention $\varphi(1) = 1$ de la définition $(3.20)$.

</FoldNote>

Pour $n$ donné dans $\N^*$, posons

$$E(n) = \{k \in \N ;\; 1 \leqslant k \leqslant n - 1 \text{ et } (k, n) = 1\}.$$

<MathBlock id="3.20" kind="def" title="Définition (3.20)">

On appelle *<GlossaryTerm id="fonction-euler">fonction d’Euler</GlossaryTerm>*<BookFootnote num="2" text="Leonhard Euler, mathématicien et astronome suisse (1707-1783)." /> l’application $\varphi : \N^* \to \N^*$ telle que

$$\varphi(1) = 1$$

et quel que soit $n > 1$, $\varphi(n) = \card(E(n))$.

</MathBlock>

La conclusion de la <MathRef id="3.19">remarque $(3.19)$</MathRef> implique la propriété suivante :

<MathBlock id="3.21" kind="prop" title="Proposition (3.21)">

*Le nombre des générateurs d’un groupe cyclique d’ordre $n$ est égal à $\varphi(n)$, $\varphi$ étant la fonction d’Euler.*

</MathBlock>

<MathBlock id="3.22" kind="rem" title="Remarque (3.22)">

$1^\circ$ La fonction d’Euler est appelée dans certains ouvrages « Indicateur » ou « Indicatrice » d’Euler.

$2^\circ$ La <MathRef id="3.21">proposition $(3.21)$</MathRef> n’a d’intérêt que si l’on sait calculer $\varphi(n)$ ; c’est ce que nous ferons dans le paragraphe D / suivant. On peut déjà remarquer que si $p$ est un nombre premier, alors :

$$\varphi(p) = p - 1.$$

</MathBlock>

*c) Caractérisation des générateurs du groupe $\left(\dfrac{\Z}{n\Z}, +\right)$ pour $n > 1$.*

<MathBlock id="3.23" kind="rem" title="Remarque (3.23)">

Si, pour $n > 1$, on considère $\dfrac{\Z}{n\Z} = \Zn{n}$ comme *anneau commutatif et unitaire* (exercice 21, chap. $\mathrm{I}^{\text{er}}$), alors un élément $\overline{k} \in \dfrac{\Z}{n\Z}$ est dit *inversible*, s’il existe $\overline{k}' \in \dfrac{\Z}{n\Z}$ tel que $\overline{k}\,\overline{k}' = \overline{1}$.

</MathBlock>

<PageRef :page="100" />

<MathBlock id="3.24" kind="prop" title="Proposition (3.24)">

*Pour $n > 1$ dans $\N$, les générateurs du groupe cyclique $\left(\dfrac{\Z}{n\Z}, +\right)$ sont les éléments inversibles de l’anneau $\dfrac{\Z}{n\Z}$ et leur ensemble forme un groupe multiplicatif, abélien, d’ordre $\varphi(n)$.*

</MathBlock>

<ProofBlock>

D’après le <MathRef id="3.18">théorème $(3.18)$</MathRef> et la <MathRef id="3.19">remarque $(3.19)$</MathRef>, un élément $\overline{k}$ de $\dfrac{\Z}{n\Z}$ est générateur du groupe $\left(\dfrac{\Z}{n\Z}, +\right)$ si et seulement si $k$ est premier avec $n$. Appliquons le <MathRef id="thm-bezout">théorème de Bezout</MathRef> :

$$\begin{aligned}
(k, n) = 1 &\iff \exists (k', q) \in \Z \times \Z, \quad kk' + nq = 1 \\
&\iff \exists \overline{k}' \in \frac{\Z}{n\Z}, \quad \overline{k}\,\overline{k}' = \overline{1}.
\end{aligned}$$

Les générateurs du groupe $\left(\dfrac{\Z}{n\Z}, +\right)$ sont donc les éléments inversibles de l’anneau $\dfrac{\Z}{n\Z}$ ; notons $G_n$ leur ensemble et vérifions que la multiplication de l’anneau $\dfrac{\Z}{n\Z}$ induit une loi de composition interne dans $G_n$.

Soient $\overline{k}_1, \overline{k}_2$ dans $G_n$ et $\overline{k}'_1, \overline{k}'_2$ leurs inverses dans $\dfrac{\Z}{n\Z}$ ; alors $(\overline{k}_1\,\overline{k}_2)(\overline{k}'_2\,\overline{k}'_1) = \overline{1}$, car la multiplication de l’anneau est *associative*, on en déduit que $\overline{k}_1\,\overline{k}_2 \in G_n$.

D’autre part, $\overline{1} \in G_n$ et de plus, si $\overline{k}$ est dans $G_n$, alors son inverse $\overline{k}'$ est nécessairement dans $G_n$.

Ainsi $G_n$ est un groupe par rapport à la multiplication de l’anneau $\dfrac{\Z}{n\Z}$ ; ce groupe est abélien, car l’anneau $\dfrac{\Z}{n\Z}$ est commutatif (exercice 21, chap. I) et il est d’ordre $\varphi(n)$, d’après la <MathRef id="3.21">proposition $(3.21)$</MathRef>.

</ProofBlock>

<MathBlock id="3.25" kind="rem" title="Remarque (3.25)">

$1^\circ$ Si $p$ est premier, le groupe $G_p$ est d’ordre $\varphi(p) = p - 1$, donc $G_p = \dfrac{\Z}{p\Z} - \{\overline{0}\}$, ce qui confirme que $\dfrac{\Z}{p\Z}$ est un corps (exercice 21, chap. I).

$2^\circ$ On peut vérifier que dans tout anneau unitaire l’ensemble des éléments inversibles forme un groupe par rapport à la multiplication de l’anneau.

</MathBlock>

<FoldNote kind="prepa" title="Précision prépa — Théorème d’Euler et petit théorème de Fermat">

En appliquant le corollaire <MathRef id="3.7">$(3.7)$ $3)$</MathRef> au groupe multiplicatif $G_n = \left(\dfrac{\Z}{n\Z}\right)^\times$ (d’ordre $\varphi(n)$ par la proposition <MathRef id="3.24">$(3.24)$</MathRef>), on obtient aussitôt le **théorème d’Euler** : pour tout $n > 1$ et tout $a \in \Z$ premier avec $n$,

$$\overline{a}^{\varphi(n)} = \overline{1} \quad \text{dans } \frac{\Z}{n\Z}, \qquad \text{soit} \qquad a^{\varphi(n)} \equiv 1 \pmod{n}.$$

En particulier, si $n = p$ est premier (remarque <MathRef id="3.22">$(3.22)$ $2^\circ$</MathRef>, $\varphi(p) = p - 1$), on retrouve le **petit théorème de Fermat** : pour tout $a \in \Z$ non multiple de $p$, $a^{p - 1} \equiv 1 \pmod{p}$ (et donc $a^p \equiv a \pmod{p}$ pour tout $a \in \Z$).

</FoldNote>

<PageRef :page="101" />

### D / Produits directs de groupes cycliques. Calcul de $\varphi(n)$

<MathBlock id="3.26" kind="rem" title="Remarque (3.26)">

Le calcul de $\varphi(n)$ s’appuyant sur le résultat de la <MathRef id="3.24">proposition $(3.24)$</MathRef>, il est commode, dans ce paragraphe, d’utiliser quelques propriétés liées à la structure d’anneau commutatif unitaire de $\dfrac{\Z}{n\Z}$, pour $n > 1$ dans $\N$.

Pour cette raison, nous supposerons connues [49] les notions de *morphisme* et de *produit direct* d’anneaux unitaires et nous admettrons, pour les anneaux unitaires, le *1er théorème d’isomorphisme* analogue à celui vu pour les groupes (<MathRef id="2.27">théorème $(2.27)$</MathRef>).

</MathBlock>

*a) Produits directs de groupes cycliques.* Le groupe produit direct de deux groupes cycliques n’est pas nécessairement cyclique, puisque nous savons (<MathRef id="1.86">exemple $(1.86)$</MathRef>) que le groupe de Klein, $\dfrac{\Z}{2\Z} \times \dfrac{\Z}{2\Z}$, n’est pas cyclique.

Dans ce paragraphe, nous allons déterminer dans quel cas le groupe produit direct de deux et, plus généralement, de $n$ groupes cycliques est cyclique ($n \geqslant 2$ dans $\N$).

Rappelons préalablement quelques propriétés arithmétiques de $\Z$ (voir [49], par exemple) :

Étant donné deux entiers non nuls et positifs $m$ et $n$, dont $d > 0$ est un $\mathrm{PGCD}$ et $l > 0$ est un $\mathrm{PPCM}$ (plus petit commun multiple), on a :

$a) \quad dl = mn$ ;

par suite, compte tenu de <MathRef id="eq-3-3">la notation $(3)$</MathRef>, on obtient :

$b) \quad (m, n) = 1 \iff mn \text{ est } \mathrm{PPCM} \text{ de } m \text{ et } n$ ;

$c)$

<span id="ref-eq-3-5"></span>

$$m\Z \cap n\Z = l\Z \tag{5}$$

On en déduit immédiatement le résultat suivant :

<MathBlock id="3.27" kind="lem" title="Lemme (3.27)">

*Si $m$ et $n$ sont deux entiers non nuls et positifs, alors*

<span id="ref-eq-3-6"></span>

$$m\Z \cap n\Z = mn\Z \iff (m, n) = 1 \tag{6}$$

</MathBlock>

<PageRef :page="102" />

<MathBlock id="3.28" kind="rem" title="Remarque (3.28)">

À titre d’exercice, on pourra démontrer le <MathRef id="3.27">lemme $(3.27)$</MathRef>, sans l’aide des propriétés rappelées plus haut, mais en utilisant le théorème de Gauss [49] :

</MathBlock>

<MathBlock id="thm-gauss" kind="thm" title="Théorème de Gauss">

*$a, b, c$ étant trois éléments non nuls de $\Z$, si $a$ et $b$ sont premiers entre eux et $a$ divise $bc$, alors $a$ divise $c$.*<BookFootnote num="3" text="C. F. Gauss, mathématicien, physicien, astronome allemand (1777-1855)." />

</MathBlock>

<MicroChallenge title="Défi avant le théorème $(3.29)$ — Comparer $\dfrac{\Z}{2\Z} \times \dfrac{\Z}{3\Z}$ et $\dfrac{\Z}{2\Z} \times \dfrac{\Z}{4\Z}$" hint="Calculez l’ordre de chaque élément $(a, b)$ dans les deux groupes produits.">

L’un des deux groupes $\dfrac{\Z}{2\Z} \times \dfrac{\Z}{3\Z}$ et $\dfrac{\Z}{2\Z} \times \dfrac{\Z}{4\Z}$ est cyclique, l’autre ne l’est pas. Lequel est cyclique (donnez-en un générateur) et pourquoi l’autre ne peut-il pas l’être ?

<template #answer>

- **$\dfrac{\Z}{2\Z} \times \dfrac{\Z}{3\Z}$ est cyclique d’ordre $6$** : l’élément $(\overline{1}, \overline{1})$ vérifie $k(\overline{1}, \overline{1}) = (\overline{0}, \overline{0}) \iff 2 \mid k \text{ et } 3 \mid k \iff 6 \mid k$, donc il est d’ordre $6$ et engendre tout le groupe (isomorphe à $\dfrac{\Z}{6\Z}$).
- **$\dfrac{\Z}{2\Z} \times \dfrac{\Z}{4\Z}$ n’est pas cyclique** : pour tout $(\overline{a}, \overline{b}) \in \dfrac{\Z}{2\Z} \times \dfrac{\Z}{4\Z}$, on a $4(\overline{a}, \overline{b}) = (\overline{4a}, \overline{4b}) = (\overline{0}, \overline{0})$ car $2 \mid 4$ et $4 \mid 4$. Ainsi tout élément est d’ordre au plus $4 < 8$, et aucun élément ne peut engendrer ce groupe d’ordre $8$.

La condition clé est bien $(m, n) = 1$, comme l’établit le théorème <MathRef id="3.29">$(3.29)$</MathRef>.

</template>

</MicroChallenge>

<MathBlock id="3.29" kind="thm" title="Théorème (3.29)">

*Si $m$ et $n$ sont deux entiers positifs non nuls, alors les anneaux unitaires (donc en particulier les groupes additifs) $\dfrac{\Z}{m\Z} \times \dfrac{\Z}{n\Z}$ et $\dfrac{\Z}{mn\Z}$ sont isomorphes si et seulement si $m$ et $n$ sont premiers entre eux.*

</MathBlock>

<ProofBlock :steps="steps3_29">

Notons respectivement $\sigma$ et $\pi$ les surjections canoniques :

$$\Z \to \frac{\Z}{m\Z} \qquad \text{et} \qquad \Z \to \frac{\Z}{n\Z}.$$

$\sigma$ et $\pi$ sont des morphismes de groupes additifs ; de plus, la définition de la multiplication dans $\dfrac{\Z}{m\Z}$ et dans $\dfrac{\Z}{n\Z}$ (exercice 21, chap. I) implique que $\sigma$ et $\pi$ sont des morphismes d’anneaux unitaires.

On en déduit que l’application

$$\begin{aligned}
f : \Z &\to \frac{\Z}{m\Z} \times \frac{\Z}{n\Z} \\
x &\mapsto (\sigma(x), \pi(x))
\end{aligned}$$

est aussi un morphisme d’anneaux unitaires

$$\Ker f = \{x \in \Z ;\; \sigma(x) = \sigma(o) \text{ et } \pi(x) = \pi(o)\}$$

d’où $\Ker f = m\Z \cap n\Z$.

D’après le <MathRef id="3.27">lemme $(3.27)$</MathRef>, on a (en utilisant <MathRef id="eq-3-3">la notation $(3)$</MathRef>) :

<span id="ref-eq-3-7"></span>

$$(m, n) = 1 \iff \Ker f = mn\Z \tag{7}$$

donc

<span id="ref-eq-3-8"></span>

$$(m, n) = 1 \iff \Im f \simeq \frac{\Z}{mn\Z} \tag{8}$$

<PageRef :page="103" />

Or, $\Im f$ est un sous-anneau de $\dfrac{\Z}{m\Z} \times \dfrac{\Z}{n\Z}$, qui est fini et de cardinal $mn$ ; on en déduit la relation :

<span id="ref-eq-3-9"></span>

$$(m, n) = 1 \iff f \text{ surjectif} \tag{9}$$

et par suite :

<span id="ref-eq-3-10"></span>

$$(m, n) = 1 \iff \frac{\Z}{m\Z} \times \frac{\Z}{n\Z} \simeq \frac{\Z}{mn\Z} \tag{10}$$

cet isomorphisme d’anneaux unitaires est, en particulier, un *isomorphisme de groupes additifs*.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 102, preuve du théorème $(3.29)$), la formule du noyau est imprimée avec la lettre minuscule italique $o$ au lieu du chiffre $0$ : « $\Ker f = \{x \in \Z ;\; \sigma(x) = \sigma(o) \text{ et } \pi(x) = \pi(o)\}$ ».

</FoldNote>

En convenant de désigner, d’une façon générale, par $\mathrm{C}_k$ un groupe cyclique d’ordre $k$, on obtient la propriété suivante :

<MathBlock id="3.30" kind="cor" title="Corollaire (3.30)">

*Le produit direct de deux groupes cycliques $\mathrm{C}_m$ et $\mathrm{C}_n$ est un groupe cyclique, si et seulement si $m$ et $n$ sont premiers entre eux.*

</MathBlock>

En effet, le groupe $\mathrm{C}_m \times \mathrm{C}_n$ est cyclique, si et seulement s’il est isomorphe à $\mathrm{C}_{mn}$.

<MathBlock id="3.31" kind="rem" title="Remarques (3.31)">

$1^\circ$ Une démonstration directe du <MathRef id="3.30">corollaire $(3.30)$</MathRef> est proposée dans l’exercice 1, chapitre III.

$2^\circ$ On verra dans l’exercice 2, chapitre III, qu’en explicitant la surjectivité de $f$ on peut donner une autre démonstration de la <MathRef id="eq-3-9">relation $(9)$</MathRef> ci-dessus.

$3^\circ$ Le <MathRef id="3.29">théorème $(3.29)$</MathRef> et par suite le <MathRef id="3.30">corollaire $(3.30)$</MathRef> se généralisent pour un nombre fini d’entiers $m_1, m_2, \dots, m_k$ :

</MathBlock>

<MathBlock id="3.32" kind="cor" title="Corollaire (3.32)">

*Soient $m_1, m_2, \dots, m_k$ ($k \geqslant 2$ dans $\N$) des entiers positifs non nuls, alors les anneaux unitaires*

$$\frac{\Z}{m_1 \Z} \times \frac{\Z}{m_2 \Z} \times \dots \times \frac{\Z}{m_k \Z} \qquad \text{\textit{et}} \qquad \frac{\Z}{m_1 m_2 \dots m_k \Z}$$

*sont isomorphes si et seulement si les $m_i$ ($1 \leqslant i \leqslant k$) sont deux à deux premiers entre eux.*

*Cette dernière condition est donc nécessaire et suffisante, pour que le groupe produit direct $\displaystyle\prod_{1 \leqslant i \leqslant k} \mathrm{C}_{m_i}$ soit cyclique, c’est-à-dire isomorphe à $\mathrm{C}_{m_1 m_2 \dots m_k}$.*

</MathBlock>

Démonstration laissée au lecteur.

<FoldNote kind="prepa" title="Précision prépa — Théorème des restes chinois et calcul explicite de l’inverse">

Le théorème <MathRef id="3.29">$(3.29)$</MathRef> est la formulation algébrique du **théorème des restes chinois** : lorsque $\pgcd(m, n) = 1$, pour tout $(a, b) \in \Z^2$, le système de congruences

$$\left\{\begin{aligned} x &\equiv a \pmod{m} \\ x &\equiv b \pmod{n} \end{aligned}\right.$$

admet une **unique** solution modulo $mn$. En pratique, si $mu + nv = 1$ est une relation de Bezout, l’isomorphisme réciproque envoie $(\sigma(a), \pi(b))$ sur la classe modulo $mn$ de

$$x_0 = bmu + anv.$$

En effet, $x_0 \equiv a(1 - mu) \equiv a \pmod{m}$ et $x_0 \equiv b(1 - nv) \equiv b \pmod{n}$.

Par ailleurs, pour le sens $(\implies)$ dans <MathRef id="3.29">$(3.29)$</MathRef> et <MathRef id="3.30">$(3.30)$</MathRef> : si $\pgcd(m, n) = d > 1$, alors $l = \ppcm(m, n) = \dfrac{mn}{d} < mn$ annule tout élément $(u, v) \in \dfrac{\Z}{m\Z} \times \dfrac{\Z}{n\Z}$, car $m \mid l$ et $n \mid l$ impliquent $l(u, v) = (lu, lv) = (\overline{0}, \overline{0})$. Aucun élément n’atteint donc l’ordre $mn$, ce qui exclut tout isomorphisme avec $\dfrac{\Z}{mn\Z}$.

</FoldNote>

<PageRef :page="104" />

*b) Calcul de $\varphi(n)$ pour $n > 1$.*

<MathBlock id="3.33" kind="lem" title="Lemme (3.33)">

*Si $m$ et $n$ sont deux entiers positifs premiers entre eux, alors :*

<span id="ref-eq-3-11"></span>

$$\varphi(mn) = \varphi(m)\,\varphi(n) \tag{11}$$

</MathBlock>

<ProofBlock>

D’après la <MathRef id="3.24">proposition $(3.24)$</MathRef>, $\varphi(mn)$ est le nombre des éléments inversibles de l’anneau $\dfrac{\Z}{mn\Z}$.

D’autre part, dans l’anneau $\dfrac{\Z}{m\Z} \times \dfrac{\Z}{n\Z}$, un élément $(\sigma(x), \pi(y))$ est inversible si et seulement si $\sigma(x)$ et $\pi(y)$ sont respectivement inversibles dans $\dfrac{\Z}{m\Z}$ et $\dfrac{\Z}{n\Z}$ ; on en déduit que le nombre des éléments inversibles dans $\dfrac{\Z}{m\Z} \times \dfrac{\Z}{n\Z}$ est $\varphi(m)\varphi(n)$.

Si $m$ et $n$ sont premiers entre eux, le résultat du <MathRef id="3.29">théorème $(3.29)$</MathRef> implique alors :

$$\varphi(mn) = \varphi(m)\,\varphi(n).$$

</ProofBlock>

<FoldNote kind="prepa" title="Précision prépa — Cas $m = 1$ ou $n = 1$ et caractère multiplicatif de $\varphi$">

La démonstration ci-dessus s’appuie sur la proposition <MathRef id="3.24">$(3.24)$</MathRef> qui suppose $m > 1$ et $n > 1$ (dans l’anneau nul $\dfrac{\Z}{1\Z} = \{\overline{0}\}$, on a $\overline{0} = \overline{1}$ donc l’unique élément est inversible, d’ordre $1 = \varphi(1)$). Si $m = 1$ ou $n = 1$, la formule <MathRef id="eq-3-11">$(11)$</MathRef> reste immédiatement vraie puisque $\varphi(1) = 1$ (<MathRef id="3.20">définition $(3.20)$</MathRef>) : $\varphi(1 \cdot n) = \varphi(n) = \varphi(1)\,\varphi(n)$.

On dit en arithmétique que $\varphi$ est une fonction **multiplicative** (sans être *complètement* multiplicative : par exemple $\varphi(4) = 2 \neq 2 \cdot 2 = \varphi(2)\varphi(2)$ parce que $(2, 2) \neq 1$).

</FoldNote>

<MathBlock id="3.34" kind="rem" title="Remarque (3.34)">

$1^\circ$ Compte tenu du <MathRef id="3.32">corollaire $(3.32)$</MathRef>, si $m_1, m_2, \dots, m_k$ ($k \geqslant 2$ dans $\N$) sont des entiers positifs *deux à deux premiers entre eux*, alors :

<span id="ref-eq-3-12"></span>

$$\varphi(m_1 m_2 \dots m_k) = \varphi(m_1)\varphi(m_2)\dots\varphi(m_k) \tag{12}$$

$2^\circ$ Tout entier $n > 1$ s’écrivant sous la forme

$$n = p_1^{\alpha_1} p_2^{\alpha_2} \dots p_k^{\alpha_k},$$

les $p_i$ étant des nombres premiers distincts et les $\alpha_i$ des entiers strictement positifs, la remarque précédente implique :

<span id="ref-eq-3-13"></span>

$$\varphi(n) = \varphi(p_1^{\alpha_1})\,\varphi(p_2^{\alpha_2})\dots\varphi(p_k^{\alpha_k}) \tag{13}$$

On est donc ramené à calculer $\varphi(p^\alpha)$ pour $p$ premier et $\alpha \geqslant 1$ dans $\N$.

</MathBlock>

<PageRef :page="105" />

<MathBlock id="3.35" kind="lem" title="Lemme (3.35)">

*Si $p \in \N$ est un nombre premier, pour tout $\alpha \geqslant 1$ dans $\N$, on a*

<span id="ref-eq-3-14"></span>

$$\varphi(p^\alpha) = p^{\alpha - 1}(p - 1) \tag{14}$$

</MathBlock>

<ProofBlock>

On remarque que $\varphi(p^\alpha)$ est le nombre des entiers $k$ tels que :

$$1 \leqslant k < p^\alpha \qquad \text{et} \qquad k \text{ non multiple de } p.$$

Or les entiers $m$, tels que $1 \leqslant m \leqslant p^\alpha$, qui sont multiples de $p$, sont de la forme :

$$m = pq \qquad \text{avec } 1 \leqslant q \leqslant p^{\alpha - 1} ;$$

il y en a donc $p^{\alpha - 1}$.

On en déduit que $\varphi(p^\alpha) = p^\alpha - p^{\alpha - 1} = p^{\alpha - 1}(p - 1)$.

</ProofBlock>

<MathBlock id="3.36" kind="thm" title="Théorème (3.36)">

*Soit $n > 1$ dans $\N$ ; si $n = p_1^{\alpha_1} p_2^{\alpha_2} \dots p_k^{\alpha_k}$, avec $k \geqslant 1$, les $p_i$ étant des nombres premiers distincts et les $\alpha_i$ des entiers strictement positifs, alors :*

<span id="ref-eq-3-15"></span>

$$\varphi(n) = n\left(1 - \frac{1}{p_1}\right)\left(1 - \frac{1}{p_2}\right)\dots\left(1 - \frac{1}{p_k}\right) \tag{15}$$

</MathBlock>

La <MathRef id="eq-3-15">formule $(15)$</MathRef> est une conséquence directe des <MathRef id="eq-3-13">relations $(13)$</MathRef> et <MathRef id="eq-3-14">$(14)$</MathRef>.

<CyclicEulerLab />

---

*(Note originale de la page 97)* — `(1)` Etienne Bezout, mathématicien français (1730-1783).

*(Note originale de la page 99)* — `(2)` Leonhard Euler, mathématicien et astronome suisse (1707-1783).

*(Note originale de la page 102)* — `(3)` C. F. Gauss, mathématicien, physicien, astronome allemand (1777-1855).
