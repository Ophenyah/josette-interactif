<script setup lang="ts">
import type { ProofStep } from '../../src/components/ProofBlock.vue'

const steps2_23: ProofStep[] = [
  {
    title: '1°) Sens direct : $\\mathscr{R}_H$ est compatible à droite',
    body: 'Soient $x, y, a \\in G$ avec $x \\mathrel{\\mathscr{R}_H} y$, c’est-à-dire $xy^{-1} \\in H$. On observe que $(xa)(ya)^{-1} = x(aa^{-1})y^{-1} = xy^{-1} \\in H$, donc $xa \\mathrel{\\mathscr{R}_H} ya$.',
    why: 'L’inversion de $ya$ place $a^{-1}$ juste à droite de $a$ et l’élimine. En multipliant à gauche, on obtiendrait $(ax)(ay)^{-1} = axy^{-1}a^{-1}$, qui n’est plus forcément dans $H$ si $G$ n’est pas abélien.'
  },
  {
    title: '2°) Réciproque : $H = \\cl_{\\mathscr{R}}(e)$ est un sous-groupe de $G$',
    body: 'Posons $H = \\{x \\in G ;\\; x \\mathrel{\\mathscr{R}} e\\}$. On a $e \\in H$ par réflexivité. Si $x, y \\in H$, on a $x \\mathrel{\\mathscr{R}} e$ et $y \\mathrel{\\mathscr{R}} e$ ; par compatibilité à droite par $y^{-1}$, on obtient $xy^{-1} \\mathrel{\\mathscr{R}} y^{-1}$ et $e \\mathrel{\\mathscr{R}} y^{-1}$, d’où par symétrie et transitivité $xy^{-1} \\mathrel{\\mathscr{R}} e$, soit $xy^{-1} \\in H$. Donc $H \\leqslant G$.',
    why: 'Si $\\mathscr{R}$ coïncide avec $\\mathscr{R}_H$, la classe de $e$ est nécessairement $He = H$. Le seul sous-groupe candidat est donc $H = \\cl_{\\mathscr{R}}(e)$, dont on vérifie le critère du théorème $(1.24)$.'
  },
  {
    title: '3°) Identification $\\mathscr{R} = \\mathscr{R}_H$',
    body: 'Si $x \\mathrel{\\mathscr{R}} y$, la compatibilité à droite par $y^{-1}$ donne $xy^{-1} \\mathrel{\\mathscr{R}} e$, soit $xy^{-1} \\in H$ ($x \\mathrel{\\mathscr{R}_H} y$). Réciproquement, si $xy^{-1} \\in H$, i.e. $xy^{-1} \\mathrel{\\mathscr{R}} e$, la compatibilité à droite par $y$ donne $x \\mathrel{\\mathscr{R}} y$.',
    why: 'Multiplier à droite par $y^{-1}$ puis par $y$ établit l’équivalence entre $x \\mathrel{\\mathscr{R}} y$ et $xy^{-1} \\in H$.'
  }
]

const steps2_27: ProofStep[] = [
  {
    title: '1) Définition de la correspondance $\\varphi : \\dfrac{G}{\\Ker f} \\to \\Im f$',
    body: 'À toute classe $\\overline{x} \\in \\dfrac{G}{\\Ker f}$, on tente d’associer $\\varphi(\\overline{x}) = f(x)$.',
    why: 'On veut factoriser $f$ à travers la surjection canonique $x \\mapsto \\overline{x}$ ; il faut d’abord vérifier que $f(x)$ ne dépend pas du représentant $x$ choisi dans la classe.'
  },
  {
    title: '2) Bonne définition et injectivité via la relation $(13)$',
    body: 'En posant $H = \\Ker f$, on a établi $\\overline{x\'} = \\overline{x} \\iff x\' \\mathrel{\\mathscr{R}_H} x \\iff f(x\') = f(x)$ (relation $(13)$). Le sens $(\\implies)$ prouve que $\\varphi$ est une application bien définie ; le sens $(\\Longleftarrow)$ prouve que $\\varphi$ est injective.',
    why: 'La relation $(13)$ fait d’une pierre deux coups : elle garantit à la fois que $\\varphi$ est bien définie et qu’elle est injective.'
  },
  {
    title: '3) Surjectivité de $\\varphi$',
    body: 'Par définition de $\\Im f = f(G)$, tout $y \\in \\Im f$ s’écrit $y = f(x) = \\varphi(\\overline{x})$ pour un $x \\in G$. Ainsi $\\varphi$ est bijective.',
    why: 'Restreindre l’ensemble d’arrivée à $\\Im f$ rend la surjectivité immédiate.'
  },
  {
    title: '4) Propriété de morphisme et conclusion',
    body: 'Quels que soient $\\overline{x}, \\overline{x\'} \\in \\dfrac{G}{\\Ker f}$, $\\varphi(\\overline{x}\\,\\overline{x\'}) = \\varphi(\\overline{xx\'}) = f(xx\') = f(x)f(x\') = \\varphi(\\overline{x})\\,\\varphi(\\overline{x\'})$. Comme $\\varphi$ est un morphisme bijectif, c’est un isomorphisme de groupes.',
    why: 'La loi quotient $\\overline{x}\\,\\overline{x\'} = \\overline{xx\'}$ et le fait que $f$ soit un morphisme assurent que $\\varphi$ respecte les lois ; la proposition $(1.66)$ conclut que $\\varphi$ est un isomorphisme.'
  }
]
</script>

<PageRef :page="79" />

## 2 — Propriétés des relations d’équivalence modulo un sous-groupe

### A / Compatibilité d’une relation d’équivalence avec une loi de composition

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 79), le titre du paragraphe est imprimé : « A / Comptabilité d’une relation d’équivalence avec une loi de composition » (coquille pour *Compatibilité*).

</FoldNote>

Soit $\mathscr{R}$ une relation d’équivalence définie dans un ensemble $(E, \cdot)$. On dit que :

$1^\circ$ *$\mathscr{R}$ est <GlossaryTerm id="relation-compatible">compatible à droite</GlossaryTerm> ($\textit{resp}^t$ à gauche) avec la loi $\cdot$, si, quels que soient $x, y, a$ dans $E$,*

<span id="ref-eq-2-7"></span>

$$x \mathrel{\mathscr{R}} y \implies x \cdot a \mathrel{\mathscr{R}} y \cdot a \tag{7}$$

<span id="ref-eq-2-7-prime"></span>

$$(\text{resp}^t \quad x \mathrel{\mathscr{R}} y \implies a \cdot x \mathrel{\mathscr{R}} a \cdot y) \tag{7'}$$

<PageRef :page="80" />

$2^\circ$ *$\mathscr{R}$ est compatible avec la loi $\cdot$, si, quels que soient $x, x', y, y'$ dans $E$,*

<span id="ref-eq-2-8"></span>

$$(x \mathrel{\mathscr{R}} x' \text{ et } y \mathrel{\mathscr{R}} y') \implies x \cdot y \mathrel{\mathscr{R}} x' \cdot y' \tag{8}$$

<MathBlock id="2.20" kind="prop" title="Proposition (2.20)">

*Une relation d’équivalence $\mathscr{R}$ définie dans un ensemble $(E, \cdot)$ est compatible avec la loi $\cdot$, si et seulement si elle est compatible à droite et à gauche avec cette loi.*

</MathBlock>

Démonstration laissée au lecteur.

<FoldNote kind="prepa" title="Précision prépa — Démonstration complète de la proposition $(2.20)$">

Voici la rédaction attendue en classe préparatoire (remarquez le rôle précis de la **réflexivité** et de la **transitivité** de $\mathscr{R}$) :

- **Sens direct ($\implies$)** : supposons $\mathscr{R}$ compatible avec $\cdot$, c’est-à-dire vérifiant <MathRef id="eq-2-8">$(8)$</MathRef>. Soient $x, y, a \in E$ tels que $x \mathrel{\mathscr{R}} y$. Par *réflexivité* de $\mathscr{R}$, on a aussi $a \mathrel{\mathscr{R}} a$.
  - En appliquant $(8)$ avec $(x, x', y, y') = (x, y, a, a)$, on obtient $x \cdot a \mathrel{\mathscr{R}} y \cdot a$ : c’est la compatibilité à droite <MathRef id="eq-2-7">$(7)$</MathRef>.
  - En appliquant $(8)$ avec $(x, x', y, y') = (a, a, x, y)$, on obtient $a \cdot x \mathrel{\mathscr{R}} a \cdot y$ : c’est la compatibilité à gauche <MathRef id="eq-2-7-prime">$(7')$</MathRef>.

- **Réciproque ($\Longleftarrow$)** : supposons $\mathscr{R}$ compatible à droite <MathRef id="eq-2-7">$(7)$</MathRef> et à gauche <MathRef id="eq-2-7-prime">$(7')$</MathRef>. Soient $x, x', y, y' \in E$ tels que $x \mathrel{\mathscr{R}} x'$ et $y \mathrel{\mathscr{R}} y'$.
  - Par compatibilité à droite appliquée à $x \mathrel{\mathscr{R}} x'$ avec $a = y$, on a $x \cdot y \mathrel{\mathscr{R}} x' \cdot y$.
  - Par compatibilité à gauche appliquée à $y \mathrel{\mathscr{R}} y'$ avec $a = x'$, on a $x' \cdot y \mathrel{\mathscr{R}} x' \cdot y'$.
  - Par *transitivité* de $\mathscr{R}$, on conclut $x \cdot y \mathrel{\mathscr{R}} x' \cdot y'$, ce qui établit $(8)$.

</FoldNote>

<MicroChallenge title="Défi avant la loi quotient — Tester la compatibilité sur $\Z$" hint="Pour tester si la valeur absolue $|x|$ passe au quotient, essayez de trouver des couples $(x, x')$ et $(y, y')$ vérifiant $|x|=|x'|$ et $|y|=|y'|$ mais tels que $|x+y| \neq |x'+y'|$.">

On considère sur $\Z$ la relation d’équivalence définie par $x \sim y \iff |x| = |y|$.

Cette relation est-elle compatible avec l’addition $+$ ? avec la multiplication $\times$ ? Peut-on définir une « addition quotient » ou une « multiplication quotient » sur les classes $\{n, -n\}$ ?

<template #answer>

1. **Avec $+$ : NON.** Par exemple, $1 \sim -1$ et $2 \sim 2$, pourtant $1 + 2 = 3$ alors que $(-1) + 2 = 1$, et $|3| \neq |1|$ ($3 \not\sim 1$). La relation n’est donc compatible ni à droite ni à gauche avec $+$, et l’addition ne passe pas au quotient (la « somme » de $\overline{1} = \{1, -1\}$ et $\overline{2} = \{2, -2\}$ dépendrait des représentants choisis : $3$ ou $1$).
2. **Avec $\times$ : OUI.** Si $|x| = |x'|$ et $|y| = |y'|$, alors $|xy| = |x|\,|y| = |x'|\,|y'| = |x'y'|$, donc $xy \sim x'y'$. La multiplication induit bien une loi quotient sur les classes $\{n, -n\}$ (qui s’identifie tout simplement à la multiplication sur $\N$ !).

La <MathRef id="2.21">proposition $(2.21)$</MathRef> ci-dessous formalise exactement ce mécanisme.

</template>

</MicroChallenge>

$\mathscr{R}$ étant une relation d’équivalence dans $(E, \cdot)$, posons $\overline{E} = \dfrac{E}{\mathscr{R}}$ et $\overline{x} = \cl_{\mathscr{R}}(x)$, pour tout $x \in E$.

<MathBlock id="2.21" kind="prop" title="Proposition (2.21)">

*Compte tenu des notations ci-dessus, la correspondance $\lambda : \overline{E} \times \overline{E} \to \overline{E}$ définit une loi de composition interne dans $\overline{E}$,*

$$(\overline{x}, \overline{y}) \mapsto \overline{x \cdot y}$$

*si et seulement si $\mathscr{R}$ est compatible avec la loi $\cdot$.*

</MathBlock>

Dans ce cas, la loi de composition interne définie par $\lambda$ est appelée *<GlossaryTerm id="loi-quotient">loi quotient</GlossaryTerm>* de celle de $E$ par $\mathscr{R}$ ; en général, elle est encore notée $\cdot$ et quels que soient $\overline{x}$ et $\overline{y}$ dans $\overline{E}$, on a :

<span id="ref-eq-2-9"></span>

$$\overline{x} \cdot \overline{y} = \overline{x \cdot y} \tag{9}$$

<ProofBlock>

$\lambda$ définit une loi de composition interne dans $\overline{E}$ si et seulement si $\lambda$ est une *application*, c’est-à-dire, si et seulement si, quels que soient $\overline{x}, \overline{x}', \overline{y}, \overline{y}'$ dans $\overline{E}$ :

<span id="ref-eq-2-10"></span>

$$(\overline{x} = \overline{x}' \text{ et } \overline{y} = \overline{y}') \implies \overline{x \cdot y} = \overline{x' \cdot y'} \tag{10}$$

or la <MathRef id="eq-2-10">relation $(10)$</MathRef> équivaut à <MathRef id="eq-2-8">$(8)$</MathRef>, d’où la propriété énoncée.

</ProofBlock>

<MathBlock id="2.22" kind="rem" title="Remarques (2.22)">

$1^\circ$ Les définitions de l’addition et de la multiplication dans $\Zn{n}$ (<MathRef id="1.13">exemple $(1.13)$</MathRef> et exercice 21, chap. $\mathrm{I}^{\text{er}}$) sont une illustration de la <MathRef id="2.21">proposition $(2.21)$</MathRef>.

$2^\circ$ La <MathRef id="eq-2-9">formule $(9)$</MathRef> implique que si, dans $E$, la loi $\cdot$ est associative ou commutative, il en est de même de la loi quotient <PageRef :page="81" /> dans $\overline{E}$ ; de plus, si $e$ est élément neutre dans $(E, \cdot)$, alors $\overline{e}$ est élément neutre dans $(\overline{E}, \cdot)$ et si $x \in E$ admet un symétrique $x^{-1}$ dans $E$, $\overline{x}$ est symétrisable dans $\overline{E}$ et $\overline{x}^{-1} = \overline{x^{-1}}$.

</MathBlock>

### B / Propriétés des relations du type $\mathscr{R}_H$ et ${}_H\mathscr{R}$. Premier théorème d’isomorphisme

*a) Cas général :*

<MathBlock id="2.23" kind="prop" title="Proposition (2.23)">

*Pour tout sous-groupe $H$ d’un groupe $G$, la relation d’équivalence $\mathscr{R}_H$ ($\textit{resp}^t$ ${}_H\mathscr{R}$) est compatible à droite ($\textit{resp}^t$ à gauche) avec la loi de composition de $G$.*

*Réciproquement, si $\mathscr{R}$ est une relation d’équivalence définie dans un groupe $G$, compatible à droite ($\textit{resp}^t$ à gauche) avec la loi de composition du groupe, alors il existe un unique sous-groupe $H$ de $G$ tel que $\mathscr{R} = \mathscr{R}_H$ ($\textit{resp}^t$ $\mathscr{R} = {}_H\mathscr{R}$).*

</MathBlock>

<ProofBlock :steps="steps2_23">

$1^\circ$ $H$ étant un sous-groupe de $G$, supposons $x$ et $y$ dans $G$, tels que $x \mathrel{\mathscr{R}_H} y$ et soit $a \in G$.

$$\begin{aligned}
&\qquad x \mathrel{\mathscr{R}_H} y \iff xy^{-1} \in H ; \\
\text{or} \qquad &(xa)(ya)^{-1} = x(aa^{-1})y^{-1} = xy^{-1}, \\
\text{d’où} \qquad &(x \mathrel{\mathscr{R}_H} y \text{ et } a \in G) \implies xa \mathrel{\mathscr{R}_H} ya.
\end{aligned}$$

$2^\circ$ Réciproquement, $\mathscr{R}$ étant une relation d’équivalence définie dans $G$ et compatible à droite avec la loi de composition du groupe, désignons par $H$ la classe d’équivalence de $e$ modulo $\mathscr{R}$ et montrons que $H$ est un sous-groupe de $G$. $e \in H \implies H \neq \varnothing$ ; pour $x$ et $y$ dans $H$, on a $x \mathrel{\mathscr{R}} e$ et $y \mathrel{\mathscr{R}} e$ ; la compatibilité à droite de $\mathscr{R}$ avec la loi de composition de $G$ implique alors : $xy^{-1} \mathrel{\mathscr{R}} y^{-1}$ et $e \mathrel{\mathscr{R}} y^{-1}$, donc $xy^{-1} \mathrel{\mathscr{R}} e$ et par suite $xy^{-1} \in H$.

Vérifions maintenant que $\mathscr{R} = \mathscr{R}_H$.

Supposons $x \mathrel{\mathscr{R}} y$ ; la compatibilité à droite de $\mathscr{R}$ avec la loi de composition de $G$ implique $xy^{-1} \mathrel{\mathscr{R}} e$, d’où $xy^{-1} \in H$ ; on en déduit : $\mathscr{R} \subseteq \mathscr{R}_H$.

<PageRef :page="82" />

Supposons $x \mathrel{\mathscr{R}_H} y$, c’est-à-dire $xy^{-1} \in H$.

$$\begin{aligned}
&\qquad xy^{-1} \in H \iff xy^{-1} \mathrel{\mathscr{R}} e \\
\text{et} \qquad &xy^{-1} \mathrel{\mathscr{R}} e \implies x \mathrel{\mathscr{R}} y,
\end{aligned}$$

par multiplication à droite par $y$, d’où $\mathscr{R}_H \subseteq \mathscr{R}$ ; on en conclut que $\mathscr{R} = \mathscr{R}_H$.

</ProofBlock>

<FoldNote kind="prepa" title="Précision prépa — Complément à $(2.23)$ : unicité de $H$ et preuve à gauche">

La démonstration originale vérifie l’existence dans le cas à droite, mais laisse implicites l’**unicité** de $H$ et le **cas à gauche** :

1. **Unicité de $H$** : supposons qu’il existe un sous-groupe $H' \leqslant G$ tel que $\mathscr{R} = \mathscr{R}_{H'}$. Alors la classe d’équivalence de $e$ modulo $\mathscr{R}$ est aussi sa classe modulo $\mathscr{R}_{H'}$ :
   $$\cl_{\mathscr{R}}(e) = \cl_{\mathscr{R}_{H'}}(e) = H'e = H'.$$
   Ainsi $H' = \cl_{\mathscr{R}}(e) = H$ : le sous-groupe $H$ est **unique**.
2. **Cas de la compatibilité à gauche** :
   - Pour tout $H \leqslant G$, si $x \mathrel{ {}_H\mathscr{R} } y$ ($x^{-1}y \in H$) et $a \in G$, alors $(ax)^{-1}(ay) = x^{-1}(a^{-1}a)y = x^{-1}y \in H$, d’où $ax \mathrel{ {}_H\mathscr{R} } ay$.
   - Réciproquement, si $\mathscr{R}$ est compatible à gauche, $H = \cl_{\mathscr{R}}(e)$ est un sous-groupe de $G$ (car $x, y \in H \implies x \mathrel{\mathscr{R}} e \text{ et } y \mathrel{\mathscr{R}} e$, d’où $x^{-1}y \mathrel{\mathscr{R}} x^{-1}$ en multipliant $y \mathrel{\mathscr{R}} e$ à gauche par $x^{-1}$, et $e \mathrel{\mathscr{R}} x^{-1}$ en multipliant $x \mathrel{\mathscr{R}} e$ à gauche par $x^{-1}$, d’où $x^{-1}y \in H$), et on montre de même $\mathscr{R} = {}_H\mathscr{R}$ avec unicité de $H = \cl_{\mathscr{R}}(e)$.

</FoldNote>

*b) Cas où le groupe $G$ est abélien.*

Pour tout sous-groupe $H$ de $G$, on a alors $\mathscr{R}_H = {}_H\mathscr{R}$ (<MathRef id="2.3">remarques $(2.3)$ $6^\circ$</MathRef>) ; cette relation d’équivalence est, d’après les <MathRef id="2.23">propositions $(2.23)$</MathRef> et <MathRef id="2.20">$(2.20)$</MathRef>, compatible avec la loi de composition de $G$ ; par suite, l’ensemble quotient de $G$ par $\mathscr{R}_H$ ($= {}_H\mathscr{R}$), noté $\dfrac{G}{H}$, est muni de la loi de composition quotient de celle de $G$ (<MathRef id="2.21">proposition $(2.21)$</MathRef>) telle que quels que soient $\overline{x}$ et $\overline{y}$ dans $\dfrac{G}{H}$ :

<span id="ref-eq-2-11"></span>

$$\overline{x}\,\overline{y} = \overline{xy} \tag{11}$$

De la <MathRef id="2.22">remarque $(2.22)$ $2^\circ$</MathRef>, on déduit alors le résultat suivant :

<FoldNote kind="edition" title="Note d’édition (texte de 1984)">

Dans l’édition imprimée de 1984 (p. 82), il est imprimé « De la remarque (2.8) 2° » ; il s’agit d’une erreur typographique de renvoi pour les *Remarques (2.22)* $2^\circ$ (pp. 80–81), comme le confirme le renvoi exact à la page 83.

</FoldNote>

<MathBlock id="2.24" kind="prop" title="Proposition (2.24)">

*Si $G$ est un groupe abélien, pour tout sous-groupe $H$ de $G$, la relation d’équivalence $\mathscr{R}_H = {}_H\mathscr{R}$ est compatible avec la loi de composition de $G$ et l’ensemble $\dfrac{G}{H}$ muni de la loi de composition quotient de celle de $G$ par $\mathscr{R}_H$ ($= {}_H\mathscr{R}$) est un groupe abélien.*

</MathBlock>

<MathBlock id="2.25" kind="rem" title="Remarques (2.25)">

$1^\circ$ $G$ étant abélien, pour tout $\overline{x} \in \dfrac{G}{H}$, on a $\overline{x} = Hx = xH$.

La <MathRef id="eq-2-11">formule $(11)$</MathRef> peut donc s’écrire sous la forme :

<span id="ref-eq-2-12"></span>

$$(Hx)(Hy) = Hxy \qquad (\text{ou } (xH)(yH) = xyH) \tag{12}$$

En notation additive, <MathRef id="eq-2-11">$(11)$</MathRef> et <MathRef id="eq-2-12">$(12)$</MathRef> deviennent :

<span id="ref-eq-2-11-prime"></span>

$$\overline{x} + \overline{y} = \overline{x + y} \tag{11'}$$

<span id="ref-eq-2-12-prime"></span>

$$\begin{aligned}
(H + x) + (H + y) &= H + (x + y) \\
(\text{ou } (x + H) + (y + H) &= (x + y) + H)
\end{aligned} \tag{12'}$$

<PageRef :page="83" />

$2^\circ$ Si $\pi$ est la <GlossaryTerm id="surjection-canonique">surjection canonique</GlossaryTerm> : $\begin{aligned}[t] G &\to \dfrac{G}{H} \\ x &\mapsto \overline{x} \end{aligned}$, alors, compte tenu de <MathRef id="eq-2-11">$(11)$</MathRef>, $\pi$ est un *<GlossaryTerm id="epimorphisme">épimorphisme</GlossaryTerm>* de groupes.

</MathBlock>

*c) Cas où le sous-groupe $H$ de $G$ est le noyau d’un morphisme de groupes.*

Soient deux groupes quelconques $G$ et $G'$ et $f \in \operatorname{Hom}(G, G')$.

Posons $H = \Ker f$ et considérons les relations $\mathscr{R}_H$ et ${}_H\mathscr{R}$.

Dans $G$, on a :

$$\begin{aligned}
x \mathrel{\mathscr{R}_H} y &\iff xy^{-1} \in \Ker f \\
x \mathrel{\mathscr{R}_H} y &\iff f(xy^{-1}) = e', \text{ élément unité de } G'. \\
x \mathrel{\mathscr{R}_H} y &\iff f(x)(f(y))^{-1} = e'
\end{aligned}$$

d’où $x \mathrel{\mathscr{R}_H} y \iff f(x) = f(y)$.

On vérifie de même que $x \mathrel{ {}_H\mathscr{R} } y \iff f(x) = f(y)$, d’où $\mathscr{R}_H = {}_H\mathscr{R}$.

Posons alors $\dfrac{G}{H} = \left(\dfrac{G}{H}\right)_d = \left(\dfrac{G}{H}\right)_g$ (<MathRef id="2.3">remarque $(2.3)$, $7^\circ$</MathRef>).

Puisque $H = \Ker f$, ce quotient sera plus précisément noté $\dfrac{G}{\Ker f}$ et en s’appuyant, comme dans le cas abélien, sur les propositions <MathRef id="2.20">$(2.20)$</MathRef>, <MathRef id="2.21">$(2.21)$</MathRef>, <MathRef id="2.23">$(2.23)$</MathRef> et la <MathRef id="2.22">remarque $(2.22)$ $2^\circ$</MathRef>, on obtient la propriété suivante :

<MathBlock id="2.26" kind="prop" title="Proposition (2.26)">

*Pour tout morphisme $f$ d’un groupe $G$ dans un groupe $G'$, l’ensemble quotient $\dfrac{G}{\Ker f}$ est un groupe par rapport à la loi de composition quotient, définie par : $\overline{x}\,\overline{y} = \overline{xy}$, quels que soient $\overline{x}$ et $\overline{y}$ dans $\dfrac{G}{\Ker f}$ et la surjection canonique $\begin{aligned}[t] \pi : G &\to \dfrac{G}{\Ker f} \\ x &\mapsto \overline{x} \end{aligned}$ est un épimorphisme de groupes.*

</MathBlock>

<FoldNote kind="prepa" title="Précision prépa — Vers le Chapitre III : sous-groupes distingués et noyaux">

Dans un groupe non abélien $G$, un sous-groupe quelconque $H$ n’a aucune raison de vérifier $\mathscr{R}_H = {}_H\mathscr{R}$ (on a vu en <MathRef id="2.4">(2.4)</MathRef> que pour $H = \langle \tau \rangle \subset S_3$, $(S_3/H)_d$ et $(S_3/H)_g$ diffèrent, et le produit des classes $(Hx)(Hy)$ n’est même pas bien défini).

Pour qu’un sous-groupe $H \leqslant G$ définisse un **groupe quotient** $G/H$ muni de la loi $\overline{x}\,\overline{y} = \overline{xy}$, il faut et il suffit d’après <MathRef id="2.20">(2.20)</MathRef>, <MathRef id="2.21">(2.21)</MathRef> et <MathRef id="2.23">(2.23)</MathRef> que $\mathscr{R}_H = {}_H\mathscr{R}$, c’est-à-dire :

$$\forall x \in G, \quad Hx = xH \qquad (\text{ou de façon équivalente : } \forall x \in G, \; xHx^{-1} = H).$$

C’est précisément la définition d’un **sous-groupe distingué** (ou *normal*, noté $H \trianglelefteq G$), qui fera l’objet du **Chapitre III** de l’ouvrage. Le calcul mené en *c)* montre déjà que **tout noyau $\Ker f$ d’un morphisme est un sous-groupe distingué** (directement : si $k \in \Ker f$ et $x \in G$, $f(xkx^{-1}) = f(x)f(k)f(x)^{-1} = f(x)e'f(x)^{-1} = e'$), et le Chapitre III montrera réciproquement que tout sous-groupe distingué $H \trianglelefteq G$ est le noyau de la surjection canonique $\pi : G \to G/H$.

</FoldNote>

<MathBlock id="2.27" kind="thm" title="Théorème (2.27) — $1^{\text{er}}$ théorème d’isomorphisme">

*Pour tout morphisme $f$ d’un groupe $G$ dans un groupe $G'$, on a :*

$$\frac{G}{\Ker f} \simeq \Im f.$$

</MathBlock>

<PageRef :page="84" />

<ProofBlock :steps="steps2_27">

Considérons la correspondance

$$\begin{aligned}
\varphi : \frac{G}{\Ker f} &\to \Im f \\
\overline{x} &\mapsto f(x).
\end{aligned}$$

— Montrons que $\varphi$ est une *application*, c’est-à-dire que $\overline{x}' = \overline{x}$ implique $f(x') = f(x)$

$$\overline{x}' = \overline{x} \iff x' \mathrel{\mathscr{R}_H} x, \qquad \text{où } H = \Ker f.$$

Or, on a vu plus haut que :

<span id="ref-eq-2-13"></span>

$$(x' \mathrel{\mathscr{R}_H} x, \text{ avec } H = \Ker f) \iff f(x') = f(x) \tag{13}$$

donc $\varphi$ est bien une application.

— La définition de $\varphi$ implique sa surjectivité.

— On remarque que <MathRef id="eq-2-13">$(13)$</MathRef> exprime l’injectivité de $\varphi$.

— Enfin

$$\varphi(\overline{x}\,\overline{x}') = \varphi(\overline{xx'}) = f(xx') = f(x)f(x'),$$

d’où $\varphi(\overline{x}\,\overline{x}') = \varphi(\overline{x})\,\varphi(\overline{x}')$ ;

on en conclut que $\varphi$ est un *isomorphisme* de groupes.

</ProofBlock>

<FoldNote kind="prepa" title="Précision prépa — Applications classiques du $1^{\text{er}}$ théorème d’isomorphisme ($\det$, $|\cdot|$, $\pi$)">

Le $1^{\text{er}}$ théorème d’isomorphisme (<MathRef id="2.27">(2.27)</MathRef>) permet d’identifier immédiatement un groupe quotient sans calculer explicitement la table des classes : il suffit de trouver un morphisme surjectif $f : G \to G'$ dont le noyau est le sous-groupe $H$ étudié !

1. **Déterminant ($\det$)** — D’après l’<MathRef id="1.63">exemple (1.63)</MathRef>, l’application $d : \GL(n, \R) \to \R^*$, $A \mapsto \det A$, est un morphisme de groupes de noyau $\Ker d = \SL(n, \R)$. Elle est surjective (pour tout $\alpha \in \R^*$, la matrice diagonale $\operatorname{diag}(\alpha, 1, \dots, 1)$ a pour déterminant $\alpha$). Le théorème <MathRef id="2.27">(2.27)</MathRef> donne donc :
   $$\frac{\GL(n, \R)}{\SL(n, \R)} \simeq \R^*.$$
2. **Module complexe ($|\cdot|$)** — L’application $m : (\C^*, \times) \to (\R_+^*, \times)$, $z \mapsto |z|$, est un morphisme surjectif (tout réel $r > 0$ vérifie $m(r) = r$) de noyau le groupe unitaire $U = \{z \in \C^* ;\; |z| = 1\}$ (<MathRef id="1.30">exemples (1.30)</MathRef>). On obtient :
   $$\frac{\C^*}{U} \simeq \R_+^*.$$
   Géométriquement, chaque classe modulo $U$ est le cercle de centre $0$ et de rayon $r > 0$ dans le plan complexe, paramétré par son rayon $r \in \R_+^*$.
3. **Surjection canonique et factorisation canonique ($\pi$)** — Pour tout morphisme $f : G \to G'$, le théorème <MathRef id="2.27">(2.27)</MathRef> se lit comme une factorisation $f = i \circ \varphi \circ \pi$, où $\pi : G \to G/\Ker f$ est la surjection canonique (<MathRef id="2.26">(2.26)</MathRef>), $\varphi : G/\Ker f \to \Im f$ est l’isomorphisme de <MathRef id="2.27">(2.27)</MathRef> et $i : \Im f \hookrightarrow G'$ est l’injection canonique (<MathRef id="1.61">(1.61)</MathRef>). En particulier :
   - avec l’épimorphisme canonique $\pi_n : (\Z, +) \to (\Zn{n}, +)$ (<MathRef id="1.62">exemple (1.62)</MathRef>) de noyau $n\Z$, on retrouve l’isomorphisme $\dfrac{\Z}{n\Z} \simeq \Zn{n}$ (<MathRef id="2.5">exemple (2.5)</MathRef>) ;
   - avec le morphisme surjectif $(\R, +) \to (U, \times)$, $t \mapsto e^{it}$, de noyau $2\pi\Z$, on obtient $\dfrac{\R}{2\pi\Z} \simeq U$.

</FoldNote>

<QuotientIsoLab />
