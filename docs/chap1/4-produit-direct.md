---
title: "4 — Produit direct de groupes"
---

<script setup>
const steps_1_85 = [
  {
    title: '1. Sens direct ($\\implies$) : retrouver $H_1$ et $H_2$ dans $G_1 \\times G_2$',
    body: 'À isomorphisme près, on se ramène au cas $G = G_1 \\times G_2$ et on pose $H_1 = \\Im q_1 = G_1 \\times (e_2)$ et $H_2 = \\Im q_2 = (e_1) \\times G_2$. Par $(1.84)\\ 2^\\circ$, $H_i \\simeq G_i$. Pour $h_1 = (x_1, e_2)$ et $h_2 = (e_1, x_2)$, on a $h_1 h_2 = (x_1, x_2) = h_2 h_1$ : les éléments de $H_1$ et $H_2$ commutent deux à deux, $G = H_1 H_2$, et $H_1 \\cap H_2 = ((e_1, e_2))$.',
    why: 'Les deux « axes » du produit cartésien donnent le modèle canonique des quatre conditions internes 1)–4).'
  },
  {
    title: '2. Réciproque ($\\Longleftarrow$), partie 1 : unicité de l’écriture $g = h_1 h_2$',
    body: 'Par 3), tout $g \\in G$ s’écrit $g = h_1 h_2$ ($h_1 \\in H_1$, $h_2 \\in H_2$). Si $h_1 h_2 = h\'_1 h\'_2$, alors ${h\'_1}^{-1} h_1 = h\'_2 h_2^{-1} \\in H_1 \\cap H_2 = (e)$ par 4), ce qui impose $h\'_1 = h_1$ et $h\'_2 = h_2$.',
    why: 'Cette unicité est indispensable avant même de définir $\\varphi(h_1 h_2) = (\\varphi_1(h_1), \\varphi_2(h_2))$, afin que $\\varphi$ soit bien une application !'
  },
  {
    title: '3. Réciproque ($\\Longleftarrow$), partie 2 : $\\varphi$ est un morphisme de groupes',
    body: 'À l’aide d’isomorphismes $\\varphi_i : H_i \\to G_i$ donnés par 1), on pose $\\varphi(h_1 h_2) = (\\varphi_1(h_1), \\varphi_2(h_2))$. Pour $g = h_1 h_2$ et $g\' = h\'_1 h\'_2$, la commutativité croisée 2) permet d’échanger $h_2$ et $h\'_1$ :\n\n$$gg\' = h_1 h_2 h\'_1 h\'_2 = (h_1 h\'_1)(h_2 h\'_2),$$\n\nd’où $\\varphi(gg\') = (\\varphi_1(h_1 h\'_1), \\varphi_2(h_2 h\'_2)) = \\varphi(g)\\varphi(g\')$.',
    why: 'C’est ici que la condition 2) est cruciale : sans elle, $(h_1 h_2)(h\'_1 h\'_2)$ ne se réorganiserait pas en un produit (élément de $H_1$)$\\times$(élément de $H_2$).'
  },
  {
    title: '4. Réciproque ($\\Longleftarrow$), partie 3 : $\\varphi$ est bijectif',
    body: 'Si $\\varphi(h_1 h_2) = (e_1, e_2)$, alors $\\varphi_1(h_1) = e_1$ et $\\varphi_2(h_2) = e_2$, d’où $h_1 = h_2 = e$ (car $\\varphi_1, \\varphi_2$ sont injectifs), donc $\\Ker \\varphi = (e)$ et $\\varphi$ est injectif. Inversement, tout $(x_1, x_2) \\in G_1 \\times G_2$ est l’image de $\\varphi_1^{-1}(x_1)\\varphi_2^{-1}(x_2)$, donc $\\varphi$ est surjectif.',
    why: 'On conclut par $(1.58)$ et $(1.66)$ que $\\varphi$ est un isomorphisme de $G$ sur $G_1 \\times G_2$.'
  }
]

const steps_1_91 = [
  {
    title: '1. Existence : définir $h(x) = (f_1(x), f_2(x))$ et vérifier le morphisme',
    body: 'On pose $h : G \\to G_1 \\times G_2$, $x \\mapsto (f_1(x), f_2(x))$. Pour tous $x, y \\in G$, comme $f_1$ et $f_2$ sont des morphismes et que la loi sur $G_1 \\times G_2$ opère composante par composante :\n\n$$h(xy) = (f_1(xy), f_2(xy)) = (f_1(x)f_1(y), f_2(x)f_2(y)) = h(x)h(y),$$\n\ndonc $h \\in \\operatorname{Hom}(G, G_1 \\times G_2)$.',
    why: 'Construire un morphisme vers un produit revient simplement à regrouper les morphismes sur chaque composante.'
  },
  {
    title: '2. Commutativité du diagramme : $p_i \\circ h = f_i$',
    body: 'Pour tout $x \\in G$, $p_1(h(x)) = p_1(f_1(x), f_2(x)) = f_1(x)$ et $p_2(h(x)) = p_2(f_1(x), f_2(x)) = f_2(x)$, d’où $p_1 \\circ h = f_1$ et $p_2 \\circ h = f_2$.',
    why: 'Ces deux égalités traduisent exactement la commutativité des deux triangles du diagramme.'
  },
  {
    title: '3. Unicité de $h$',
    body: 'Soit $h\' \\in \\operatorname{Hom}(G, G_1 \\times G_2)$ satisfaisant $p_1 \\circ h\' = f_1$ et $p_2 \\circ h\' = f_2$. D’après la formule $(25)$ ($y = (p_1(y), p_2(y))$), pour tout $x \\in G$ :\n\n$$h\'(x) = (p_1(h\'(x)), p_2(h\'(x))) = (f_1(x), f_2(x)) = h(x),$$\n\nd’où $h\' = h$. (Pour une famille quelconque $I$, la formule $(29)$ donne exactement la même unicité.)',
    why: 'Un élément d’un produit cartésien étant entièrement déterminé par ses projections, imposer $p_i \\circ h\' = f_i$ détermine de façon unique chacune des composantes de $h\'(x)$.'
  }
]
</script>

# Chapitre premier — Structure de groupe

<PageRef :page="54" />

## 4 — Produit direct de groupes

### A / Produit direct de deux groupes

Soient deux groupes $G_1$ et $G_2$ d’éléments unités $e_1$ et $e_2$.

Posons $G = G_1 \times G_2 = \{(x_1, x_2) ; x_1 \in G_1, x_2 \in G_2\}$.

On vérifie facilement que l’ensemble non vide $G$ muni de la loi de composition interne définie par :

$$
\begin{aligned}
G \times G &\to G \\
((x_1, x_2), (y_1, y_2)) &\mapsto (x_1 y_1, x_2 y_2)
\end{aligned}
$$

est un groupe dont l’<GlossaryTerm id="element-unite">élément unité</GlossaryTerm> est $(e_1, e_2)$ et quel que soit $(x_1, x_2) \in G$, $(x_1, x_2)^{-1} = (x_1^{-1}, x_2^{-1})$.

<MathBlock id="1.83" kind="def" title="Définition (1.83)">

Le groupe $G_1 \times G_2$ est appelé *groupe produit direct* des groupes $G_1$ et $G_2$.

</MathBlock>

Au produit direct $G_1 \times G_2$ on associe deux couples d’applications :

<PageRef :page="55" />

*a)* les *projections canoniques* $p_1$ et $p_2$ telles que :

$$
\begin{aligned}
p_1 : G_1 \times G_2 &\to G_1, & p_2 : G_1 \times G_2 &\to G_2 \\
(x_1, x_2) &\mapsto x_1 & (x_1, x_2) &\mapsto x_2.
\end{aligned}
$$

*b)* les *injections canoniques* $q_1$ et $q_2$ définies par :

$$
\begin{aligned}
q_1 : G_1 &\to G_1 \times G_2, & q_2 : G_2 &\to G_1 \times G_2 \\
x_1 &\mapsto (x_1, e_2) & x_2 &\mapsto (e_1, x_2).
\end{aligned}
$$

Il est alors facile de montrer que :

*$p_1$ et $p_2$ sont des épimorphismes de groupes*

et que *$q_1$ et $q_2$ sont des monomorphismes de groupes.*

<MathBlock id="1.84" kind="rem" title="Remarques (1.84)">

$1^\circ$ Le groupe $G_1 \times G_2$ est abélien si et seulement si $G_1$ et $G_2$ sont abéliens.

$2^\circ$ Les applications :

$$
\begin{aligned}
G_1 &\to G_1 \times (e_2) = \Im q_1 & \text{et} && G_2 &\to (e_1) \times G_2 = \Im q_2 \\
x_1 &\mapsto (x_1, e_2) &&& x_2 &\mapsto (e_1, x_2)
\end{aligned}
$$

sont des isomorphismes de groupes ; on en déduit que *le groupe $G_1 \times G_2$ contient au moins un sous-groupe isomorphe à $G_1$ et un sous-groupe isomorphe à $G_2$.*

$3^\circ$

<span id="ref-eq-1-24"></span>

$$p_1 \circ q_1 = \id_{G_1} \quad \text{et} \quad p_2 \circ q_2 = \id_{G_2} \tag{24}$$

$4^\circ$ Pour $x = (x_1, x_2)$ dans $G_1 \times G_2$, on peut écrire :

<span id="ref-eq-1-25"></span>

$$x = (p_1(x), p_2(x)) \tag{25}$$

<span id="ref-eq-1-26"></span>

$$x = q_1(x_1)q_2(x_2) = q_2(x_2)q_1(x_1) \tag{26}$$

$5^\circ$ Si $G_1$ et $G_2$ sont des groupes finis, compte tenu des propriétés générales des cardinaux [28], on a :

<span id="ref-eq-1-27"></span>

$$o(G_1 \times G_2) = o(G_1)\,o(G_2) \tag{27}$$

</MathBlock>

<FoldNote kind="prepa" title="Précision prépa — Rétro-projection $p_i \circ q_i = \id_{G_i}$ et commutativité des facteurs">

Dans le produit direct $G_1 \times G_2$ :

1. Les formules <MathRef id="eq-1-24">$(24)$–$(26)$</MathRef> montrent que les deux « axes » $H_1 = \Im q_1 = G_1 \times (e_2)$ et $H_2 = \Im q_2 = (e_1) \times G_2$ **commutent toujours élément par élément** : $q_1(x_1) q_2(x_2) = (x_1, x_2) = q_2(x_2) q_1(x_1)$, **même si $G_1$ et $G_2$ sont non abéliens** ! De plus, $p_1 \circ q_2$ et $p_2 \circ q_1$ sont les morphismes triviaux.
2. **Exemple classique de prépa (théorème chinois)** : $\Zn{m} \times \Zn{n} \simeq \Zn{mn}$ si et seulement si $\pgcd(m, n) = 1$ (alors que pour $m = n = 2$, on obtient le groupe de Klein non cyclique de <MathRef id="1.86">l’exemple $(1.86)$</MathRef>).

</FoldNote>

<MicroChallenge title="Micro-défi — Reconnaître un produit direct interne dans $V$ et dans $\Zn{6}$" hint="Cherchez deux sous-groupes $H_1$ et $H_2$ d’intersection triviale dont le produit $H_1 H_2$ (ou la somme $H_1 + H_2$) recouvre tout le groupe.">

Considérons d’une part le groupe $V = \{e, a, b, c\}$ (<MathRef id="table-11">table $(11)$</MathRef>), et d’autre part le groupe additif $(\Zn{6}, +)$. Peut-on décrire chacun d’eux comme produit direct de deux groupes plus petits (d’ordres $2$ et $2$ pour $V$ ; d’ordres $2$ et $3$ pour $\Zn{6}$) ? Quelles propriétés les deux sous-groupes utilisés vérifient-ils ?

<template #answer>

- **Dans $V$** : avec $H_1 = \{e, a\} \simeq \Zn{2}$ et $H_2 = \{e, b\} \simeq \Zn{2}$, on a $H_1 \cap H_2 = (e)$, $H_1$ et $H_2$ commutent ($V$ est abélien), et $H_1 H_2 = \{e, a, b, ab\} = \{e, a, b, c\} = V$, d’où $V \simeq \Zn{2} \times \Zn{2}$.
- **Dans $(\Zn{6}, +)$** : avec $H_1 = \{\overline{0}, \overline{3}\} \simeq \Zn{2}$ et $H_2 = \{\overline{0}, \overline{2}, \overline{4}\} \simeq \Zn{3}$, on a $H_1 \cap H_2 = (\overline{0})$, la loi est commutative, et $H_1 + H_2 = \Zn{6}$ (par exemple $\overline{1} = \overline{3} + \overline{4}$), d’où $\Zn{6} \simeq \Zn{2} \times \Zn{3}$.

La <MathRef id="1.85">proposition $(1.85)$</MathRef> ci-dessous formalise exactement ces quatre conditions internes.

</template>

</MicroChallenge>

<MathBlock id="1.85" kind="prop" title="Proposition (1.85)">

*Soient deux groupes $G_1$ et $G_2$ ; un groupe $G$ est isomorphe au produit direct $G_1 \times G_2$, si et seulement s’il contient deux sous-groupes $H_1$ et $H_2$ tels que :*

1) $H_i \simeq G_i$, *pour $i = 1, 2$.*
2) $\forall h_1 \in H_1,\; \forall h_2 \in H_2,\; h_1 h_2 = h_2 h_1$.

<PageRef :page="56" />

3) $G = H_1 H_2$.
4) $H_1 \cap H_2 = (e)$, *$e$ étant l’élément neutre de $G$.*

</MathBlock>

<ProofBlock :steps="steps_1_85">

$1^\circ$ Supposons $G$ isomorphe à $G_1 \times G_2$ ; sans restreindre la généralité du résultat, on peut supposer $G = G_1 \times G_2$.

$q_1$ et $q_2$ étant les injections canoniques associées à $G_1 \times G_2$, posons :

$$H_1 = \Im q_1, \qquad H_2 = \Im q_2.$$

D’après <MathRef id="1.84">la remarque (1.84) $2^\circ$</MathRef>, on a

$$H_1 \simeq G_1 \quad \text{et} \quad H_2 \simeq G_2.$$

D’autre part, quels que soient $h_1 \in H_1$ et $h_2 \in H_2$, il existe $x_1 \in G_1$ et $x_2 \in G_2$ tels que

$$h_1 = (x_1, e_2), \qquad h_2 = (e_1, x_2) ;$$

d’où $(x_1, x_2) = h_1 h_2 = h_2 h_1$.

Le résultat ci-dessus implique que $H_1 H_2$ est un sous-groupe de $G$ (<MathRef id="1.47">Proposition (1.47)</MathRef>). De plus, d’après <MathRef id="1.84">la remarque (1.84) $4^\circ$</MathRef>, tout élément de $G$ appartient à $H_1 H_2$, d’où $G = H_1 H_2$.

Enfin, compte tenu de la définition de $H_1$ et de $H_2$, on a $H_1 \cap H_2 = (e_1, e_2)$, élément neutre de $G$.

$2^\circ$ On suppose que $G$ contient deux sous-groupes $H_1, H_2$ satisfaisant aux quatre conditions énoncées.

Soit $g \in G$ ; les hypothèses impliquent qu’il existe $h_1 \in H_1$ et $h_2 \in H_2$ tels que :

$$g = h_1 h_2 = h_2 h_1.$$

Montrons que $g$ s’écrit sous cette forme, de *façon unique* ; supposons qu’il existe $h'_1 \in H_1$, $h'_2 \in H_2$ tels que

$$
\begin{aligned}
g &= h'_1 h'_2 = h'_2 h'_1 \\
h_1 h_2 &= h'_1 h'_2 \Rightarrow h'^{-1}_1 h_1 = h'_2 h_2^{-1},
\end{aligned}
$$

La condition 4) implique alors $e = h'^{-1}_1 h_1 = h'_2 h_2^{-1}$, d’où $h'_1 = h_1$, $h'_2 = h_2$.

<PageRef :page="57" />

D’après la condition 1), pour $i = 1, 2$, il existe un isomorphisme $\varphi_i : H_i \to G_i$. Considérons alors l’application $\varphi$ suivante :

$$
\begin{aligned}
\varphi : G &\to G_1 \times G_2 \\
g = h_1 h_2 &\mapsto (\varphi_1(h_1), \varphi_2(h_2)).
\end{aligned}
$$

Pour $g = h_1 h_2$ et $g' = h'_1 h'_2$ dans $G$, on a

$$gg' = h_1 h_2 h'_1 h'_2 = h_1 h'_1 h_2 h'_2 \quad (\text{d’après la condition 2}) ;$$

on en déduit facilement que $\varphi$ *est un morphisme de groupes.*

D’autre part, $\varphi(h_1 h_2) = (e_1, e_2) \Rightarrow \varphi_1(h_1) = e_1$ et $\varphi_2(h_2) = e_2$ ; or $\varphi_1$ et $\varphi_2$ sont des isomorphismes, par suite,

$$\varphi(h_1 h_2) = (e_1, e_2) \Rightarrow h_1 = h_2 = e ;$$

on en déduit que $\Ker \varphi = (e)$, donc $\varphi$ *est injectif.*

De plus, si $x = (x_1, x_2) \in G_1 \times G_2$, il existe un unique $h_1 \in H_1$ et un unique $h_2 \in H_2$ tels que : $x_1 = \varphi_1(h_1)$ et $x_2 = \varphi_2(h_2)$ ; par suite, $x = \varphi(h_1 h_2)$, donc $\varphi$ *est surjectif.*

En conclusion : $\varphi$ est un isomorphisme de $G$ sur $G_1 \times G_2$.

</ProofBlock>

<FoldNote kind="piege" title="Piège classique — Vérifier les 4 conditions de la décomposition en produit direct interne">

Dans la <MathRef id="1.85">proposition $(1.85)$</MathRef>, **aucune** des conditions 2), 3) et 4) ne peut être omise :

- **Piège si l’on oublie la commutativité croisée 2)** : dans $S_3$, posons $H_1 = \langle \sigma_1 \rangle$ (ordre $3$) et $H_2 = \langle \tau_1 \rangle$ (ordre $2$). On a bien $S_3 = H_1 H_2$ (3)) et $H_1 \cap H_2 = (e)$ (4)), **mais** $\sigma_1 \tau_1 \neq \tau_1 \sigma_1$ — et en effet $S_3$ n’est pas abélien, donc $S_3 \not\simeq \Zn{3} \times \Zn{2}$ ! *(C’est un produit semi-direct, et non un produit direct.)*
- **Rôle précis de 2) dans la preuve** : l’unicité de $g = h_1 h_2$ n’utilise que 3) et 4), mais c’est la commutativité $h_2 h'_1 = h'_1 h_2$ qui garantit que $\varphi(h_1 h_2) = (\varphi_1(h_1), \varphi_2(h_2))$ est un **morphisme**.

</FoldNote>

<MathBlock id="1.86" kind="ex" title="Exemple (1.86)">

Le groupe produit direct $\Zn{2} \times \Zn{2}$ est généralement appelé *groupe de Klein*<BookFootnote num="3" text="Félix Klein, mathématicien allemand (1849–1925)." /> ; d’après les propriétés vues plus haut, c’est un groupe *abélien fini d’ordre $4$*. Considérons alors le groupe $V$ défini par <MathRef id="table-11">la table (11)</MathRef>. Dans $V$, posons $H_1 = \langle a \rangle = \{e, a\}$ et $H_2 = \langle b \rangle = \{e, b\}$. On remarque que $H_1$ et $H_2$ sont isomorphes à $\Zn{2}$. D’autre part, $ab = ba = c$, d’où $V = H_1 H_2$ ; de plus $H_1 \cap H_2 = (e)$ ; compte tenu de <MathRef id="1.85">la proposition (1.85)</MathRef>, on a :

$$V \simeq \Zn{2} \times \Zn{2}$$

D’après <MathRef id="1.68">la remarque (1.68) $1^\circ$</MathRef>, $V$ est non cyclique, donc le *groupe de Klein est non cyclique.*

</MathBlock>

<PageRef :page="58" />

### B / Produit direct d’un nombre fini quelconque de groupes

La notion de produit direct de deux groupes se généralise de façon naturelle au produit direct de $n$ groupes $G_i$ ($1 \leqslant i \leqslant n$), quel que soit $n > 2$ dans $\N$. Le groupe produit direct est alors noté $G_1 \times G_2 \times \dots \times G_n$ ou $\displaystyle\prod_{1 \leqslant i \leqslant n} G_i$.

On généralise sans peine les définitions de projection et injection canoniques pour $n > 2$ dans $\N$, ainsi que <MathRef id="1.84">les remarques (1.84)</MathRef> et <MathRef id="1.85">la proposition (1.85)</MathRef> s’énonce alors sous la forme suivante :

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Renvoi $(1.81)$ et omission de $(1.87)$">

1. À la ligne 6 de la page 58, l’édition imprimée de 1984 porte « ainsi que les remarques (1.81) » ; il s’agit manifestement d’une coquille typographique pour les *remarques (1.84)* sur le produit direct (rectifié ci-dessus).
2. La numérotation des énoncés passe directement de l’**Exemple (1.86)** (p. 57) à la **Proposition (1.88)** (p. 58) : aucun énoncé ne porte le numéro **$(1.87)$** dans l’ouvrage original.

</FoldNote>

<MathBlock id="1.88" kind="prop" title="Proposition (1.88)">

*Soit $\{G_i\}_{1 \leqslant i \leqslant n}$ une famille finie de $n$ groupes ; un groupe $G$ est isomorphe au groupe produit direct $\displaystyle\prod_{1 \leqslant i \leqslant n} G_i$, si et seulement s’il contient une famille de $n$ sous-groupes $H_i$ ($1 \leqslant i \leqslant n$) tels que :*

1) $H_i \simeq G_i$, $\forall i\; (1 \leqslant i \leqslant n)$.
2) $\forall (i, j)\; (1 \leqslant i < j \leqslant n),\; \forall h_i \in H_i,\; \forall h_j \in H_j,\; h_i h_j = h_j h_i$.
3) $G = H_1 H_2 \dots H_n$.
4) $H_i \cap H_1 H_2 \dots H_{i-1} H_{i+1} \dots H_n = (e),\; \forall i\; (1 \leqslant i \leqslant n)$, *$e$ étant l’élément unité de $G$.*

</MathBlock>

Démonstration laissée au lecteur.

<MathBlock id="1.89" kind="cor" title="Corollaire (1.89)">

*Si $(G, +)$ est un groupe abélien et si $\{G_i\}_{1 \leqslant i \leqslant n}$ est une famille finie de $n$ groupes abéliens, alors $G$ est isomorphe au produit direct $\displaystyle\prod_{1 \leqslant i \leqslant n} G_i$, si et seulement s’il existe une famille de sous-groupes $\{H_i\}_{1 \leqslant i \leqslant n}$ tels que $H_i \simeq G_i$, pour tout $i$ ($1 \leqslant i \leqslant n$), et*

$$G = \bigoplus_{1 \leqslant i \leqslant n} H_i.$$

</MathBlock>

Ce résultat est une conséquence de <MathRef id="1.88">la proposition (1.88)</MathRef> et de <MathRef id="1.52">la définition (1.52)</MathRef>.

<FoldNote kind="prepa" title="Précision prépa — Produit direct vs somme directe : deux notions qui coïncident en dimension finie abélienne">

Il est essentiel de bien situer **produit direct** ($\times$) et **somme directe** ($\oplus$) :

1. **Famille finie de groupes abéliens** : à isomorphisme près, les deux notions coïncident (<MathRef id="1.89">corollaire $(1.89)$</MathRef>). L’écart n’est qu’un changement de point de vue : le produit direct $\prod_{i=1}^n G_i$ est une construction *externe* (à partir de groupes donnés séparément), tandis que la somme directe $\bigoplus_{i=1}^n H_i$ est une décomposition *interne* d’un groupe $G$ donné à l’avance.
2. **Groupes non abéliens** : on n’emploie **jamais** le terme « somme directe » ni le symbole $\oplus$ (réservés au cas abélien additif) ; on parle uniquement de produit direct, et l’on exige en plus que les facteurs distincts commutent élément par élément (<MathRef id="1.85">$(1.85)$</MathRef>, <MathRef id="1.88">$(1.88)$</MathRef>).
3. **Famille infinie de groupes abéliens** : le produit direct $\prod_{i \in I} G_i$ contient toutes les familles $(x_i)_{i \in I}$ (ex. $\R^\N$, toutes les suites réelles), alors que la somme directe $\bigoplus_{i \in I} G_i$ ne retient que les familles **à support fini** ($x_i = 0$ sauf pour un nombre fini d’indices, ex. les polynômes $\R[X] \simeq \R^{(\N)}$).

</FoldNote>

### C / Produit direct d’une famille quelconque de groupes

Soit $I$ un ensemble non vide quelconque, donc éventuellement infini, et soit $\{G_i\}_{i \in I}$ une famille de groupes indexée par $I$.

<PageRef :page="59" />

L’ensemble produit cartésien

$$\prod_{i \in I} G_i = \{(x_i)_{i \in I} ; x_i \in G_i,\; \forall i \in I\}$$

muni de la loi de composition définie par :

$$((x_i)_{i \in I}, (y_i)_{i \in I}) \mapsto (x_i y_i)_{i \in I}$$

est un groupe, dont l’élément neutre est $(e_i)_{i \in I}$, où $e_i$ désigne l’élément neutre du groupe $G_i$ ; ce groupe noté $\displaystyle\prod_{i \in I} G_i$ est, par définition, le *groupe produit direct* des $G_i$, $i \in I$.

Quel que soit l’ensemble non vide $I$, pour tout $k \in I$, on définit :

la *projection canonique*

$$
\begin{aligned}
p_k : \prod_{i \in I} G_i &\to G_k \\
(x_i)_{i \in I} &\mapsto x_k
\end{aligned}
$$

et *l’injection canonique*

$$
\begin{aligned}
q_k : G_k &\to \prod_{i \in I} G_i \\
x_k &\mapsto (x_i)_{i \in I}
\end{aligned}
$$

où $x_i = e_i$ si $i \neq k$ et $x_i = x_k$ si $i = k$.

Les projections et les injections canoniques sont, respectivement, des épimorphismes et monomorphismes de groupes.

<MathBlock id="1.90" kind="rem" title="Remarque (1.90)">

Les <MathRef id="1.84">remarques $(1.84)$ $1^\circ$ $2^\circ$ $3^\circ$</MathRef> se généralisent au cas d’une famille quelconque $\{G_i\}_{i \in I}$ de groupes ; en particulier, pour tout $i \in I$, on a :

<span id="ref-eq-1-28"></span>

$$p_i \circ q_i = \id_{G_i} \tag{28}$$

et quel que soit $x \in \displaystyle\prod_{i \in I} G_i$, on peut écrire

<span id="ref-eq-1-29"></span>

$$x = (p_i(x))_{i \in I} \tag{29}$$

Par contre, si $I$ est infini, <MathRef id="eq-1-26">la formule (26)</MathRef> et <MathRef id="1.88">la proposition (1.88)</MathRef> *ne peuvent pas être généralisées*, puisque, dans un groupe, seul le produit d’un nombre fini d’éléments a un sens.

</MathBlock>

<FoldNote kind="prepa" title="Précision prépa — Pourquoi le produit infini $\prod_{i \in I} G_i$ diffère-t-il du cas fini ?">

Lorsque $I$ est infini, le sous-groupe de $\prod_{i \in I} G_i$ engendré par la réunion des images des injections canoniques $\bigcup_{i \in I} \Im q_i$ est exactement l’ensemble des familles $(x_i)_{i \in I}$ telles que **$x_i = e_i$ pour presque tout $i \in I$** (sauf pour un nombre fini d’indices), appelé *somme restreinte* (ou *produit direct faible*).

Si $I$ est infini et une infinité de $G_i$ sont non triviaux, cette somme restreinte est **strictement contenue** dans $\prod_{i \in I} G_i$ : par exemple dans $\prod_{n \in \N} \Zn{2}$, la suite constante $(\overline{1})_{n \in \N}$ n’appartient pas à $\langle \bigcup_{n \in \N} \Im q_n \rangle$.

</FoldNote>

<PageRef :page="60" />

### D / Propriété universelle du produit direct de groupes

<MathBlock id="1.91" kind="thm" title="Théorème (1.91)">

*Soient $I$ un ensemble non vide, $\{G_i\}_{i \in I}$ une famille de groupes et $\{p_i\}_{i \in I}$ la famille des projections canoniques associées au groupe produit direct $\displaystyle\prod_{i \in I} G_i$.*

*Etant donné un groupe $G$, quelle que soit la famille $\{f_i\}_{i \in I}$ de morphismes de groupes telle que, pour tout $i \in I$, $f_i \in \operatorname{Hom}(G, G_i)$, il existe un unique morphisme $h \in \operatorname{Hom}\!\left(G, \displaystyle\prod_{i \in I} G_i\right)$ tel que, quel que soit $i \in I$, $p_i \circ h = f_i$.*

</MathBlock>

Compte tenu des hypothèses, <MathRef id="1.91">le théorème (1.91)</MathRef> exprime que, *pour tout $i \in I$*, le diagramme suivant commute :

<div class="katex-block-wrap">
  <svg viewBox="0 0 260 155" width="240" role="img" aria-label="Diagramme commutatif de la propriété universelle du produit direct" style="display:block;margin:0.5rem auto;color:var(--jc-text);">
    <defs>
      <marker id="diag-arrow-1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="currentColor" />
      </marker>
    </defs>
    <text x="35" y="30" text-anchor="middle" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="16">G</text>
    <text x="200" y="30" text-anchor="middle" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="16">∏<tspan font-size="10" dy="5">i∈I</tspan><tspan dy="-5"> G</tspan><tspan font-size="10" dy="4">i</tspan></text>
    <text x="35" y="135" text-anchor="middle" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="16">G<tspan font-size="10" dy="4">i</tspan></text>
    <line x1="50" y1="25" x2="165" y2="25" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4" marker-end="url(#diag-arrow-1)" />
    <text x="108" y="16" text-anchor="middle" fill="currentColor" font-family="KaTeX_Math, Georgia, serif" font-style="italic" font-size="14">h</text>
    <line x1="35" y1="40" x2="35" y2="113" stroke="currentColor" stroke-width="1.5" marker-end="url(#diag-arrow-1)" />
    <text x="20" y="80" text-anchor="middle" fill="currentColor" font-family="KaTeX_Math, Georgia, serif" font-style="italic" font-size="14">f<tspan font-size="10" dy="3">i</tspan></text>
    <line x1="184" y1="42" x2="50" y2="122" stroke="currentColor" stroke-width="1.5" marker-end="url(#diag-arrow-1)" />
    <text x="130" y="96" text-anchor="middle" fill="currentColor" font-family="KaTeX_Math, Georgia, serif" font-style="italic" font-size="14">p<tspan font-size="10" dy="3">i</tspan></text>
  </svg>
</div>

<ProofBlock :steps="steps_1_91">

Nous ferons la démonstration dans le cas où $I = \{1, 2\}$ ; la méthode se généralise sans peine au cas où $I$ est un ensemble non vide quelconque. Le problème peut être schématisé par le diagramme ci-dessous :

<div class="katex-block-wrap">
  <svg viewBox="0 0 340 160" width="320" role="img" aria-label="Diagramme commutatif du produit direct de deux groupes" style="display:block;margin:0.5rem auto;color:var(--jc-text);">
    <defs>
      <marker id="diag-arrow-2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="currentColor" />
      </marker>
    </defs>
    <text x="170" y="25" text-anchor="middle" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="16">G</text>
    <text x="45" y="138" text-anchor="middle" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="16">G<tspan font-size="10" dy="4">1</tspan></text>
    <text x="170" y="138" text-anchor="middle" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="16">G<tspan font-size="10" dy="4">1</tspan><tspan dy="-4"> × G</tspan><tspan font-size="10" dy="4">2</tspan></text>
    <text x="295" y="138" text-anchor="middle" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="16">G<tspan font-size="10" dy="4">2</tspan></text>
    <line x1="155" y1="32" x2="55" y2="119" stroke="currentColor" stroke-width="1.5" marker-end="url(#diag-arrow-2)" />
    <text x="93" y="68" text-anchor="middle" fill="currentColor" font-family="KaTeX_Math, Georgia, serif" font-style="italic" font-size="14">f<tspan font-size="10" dy="3">1</tspan></text>
    <line x1="185" y1="32" x2="285" y2="119" stroke="currentColor" stroke-width="1.5" marker-end="url(#diag-arrow-2)" />
    <text x="247" y="68" text-anchor="middle" fill="currentColor" font-family="KaTeX_Math, Georgia, serif" font-style="italic" font-size="14">f<tspan font-size="10" dy="3">2</tspan></text>
    <line x1="170" y1="36" x2="170" y2="115" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4" marker-end="url(#diag-arrow-2)" />
    <text x="179" y="82" text-anchor="start" fill="currentColor" font-family="KaTeX_Main, Georgia, serif" font-size="14">∃!<tspan font-style="italic"> h</tspan></text>
    <line x1="138" y1="133" x2="64" y2="133" stroke="currentColor" stroke-width="1.5" marker-end="url(#diag-arrow-2)" />
    <text x="101" y="125" text-anchor="middle" fill="currentColor" font-family="KaTeX_Math, Georgia, serif" font-style="italic" font-size="14">p<tspan font-size="10" dy="3">1</tspan></text>
    <line x1="202" y1="133" x2="276" y2="133" stroke="currentColor" stroke-width="1.5" marker-end="url(#diag-arrow-2)" />
    <text x="239" y="125" text-anchor="middle" fill="currentColor" font-family="KaTeX_Math, Georgia, serif" font-style="italic" font-size="14">p<tspan font-size="10" dy="3">2</tspan></text>
  </svg>
</div>

$\{p_1, p_2\}$, $\{f_1, f_2\}$ sont connus, il s’agit de prouver l’existence et l’unicité du morphisme $h$.

*a) Existence de $h$ :* Considérons l’application

$$h : G \to G_1 \times G_2$$

définie par :

$$x \mapsto (f_1(x), f_2(x))$$

$f_1$ et $f_2$ étant des morphismes de groupes, on en déduit facilement que $h \in \operatorname{Hom}(G, G_1 \times G_2)$.

<PageRef :page="61" />

D’autre part, $p_1 \circ h(x) = f_1(x)$ et $p_2 \circ h(x) = f_2(x)$, quel que soit $x \in G$, impliquent :

$$p_1 \circ h = f_1 \quad \text{et} \quad p_2 \circ h = f_2.$$

*b) Unicité de $h$ :* Supposons qu’il existe $h' \in \operatorname{Hom}(G, G_1 \times G_2)$ tel que $p_1 \circ h' = f_1$ et $p_2 \circ h' = f_2$ ; ces conditions impliquent que pour tout $x \in G$ on a (<MathRef id="eq-1-25">formule 25</MathRef>) :

$$h'(x) = (f_1(x), f_2(x)) = h(x),$$

d’où $h' = h$.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Coquilles dans la preuve de $(1.91)$ *b)*">

Dans l’édition imprimée de 1984 (p. 61, preuve de $(1.91)$ *b)*), le texte porte deux coquilles typographiques : « tel que $p'_1 \circ h' = f_1$ et $p_2 \circ h' = f_2$ » (prime parasite sur $p_1$) et « on a (formules 24) » (renvoi erroné aux formules $(24)$ au lieu de la formule $(25)$ : $x = (p_1(x), p_2(x))$).

</FoldNote>

<MathBlock id="1.92" kind="rem" title="Remarque (1.92)">

La propriété du produit direct d’une famille de groupes énoncée dans <MathRef id="1.91">le théorème (1.91)</MathRef> est dite « *universelle* » ; le lecteur pourra trouver dans [54], par exemple, la justification de ce qualificatif, issu de la théorie des catégories, et que nous retrouverons plusieurs fois au cours de cet ouvrage.

</MathBlock>

<FoldNote kind="intuition" title="Intuition — Lire et utiliser la propriété universelle du produit direct">

En langage moderne, le <MathRef id="1.91">théorème $(1.91)$</MathRef> fournit une bijection naturelle entre morphismes vers le produit et familles de morphismes vers chaque facteur :
$$\operatorname{Hom}\!\left(G, \prod_{i \in I} G_i\right) \simeq \prod_{i \in I} \operatorname{Hom}(G, G_i).$$
- **Usage pratique en prépa** : pour définir un morphisme $h : G \to G_1 \times \dots \times G_n$ (par exemple $k \mapsto (\overline{k}, \overline{k})$ de $\Z$ dans $\Zn{m} \times \Zn{n}$ pour le théorème chinois), il suffit que chaque coordonnée $f_i = p_i \circ h$ soit un morphisme ; réciproquement, tout morphisme vers un produit est entièrement déterminé par ses composantes.
- **Sens des flèches** : le produit direct est universel pour les morphismes *entrants* ($G \to \prod G_i$, via les projections $p_i$). Dans la catégorie des groupes abéliens, c’est la *somme directe* $\bigoplus_{i \in I} G_i$ qui possède la propriété universelle symétrique pour les morphismes *sortants* ($\bigoplus G_i \to G$, via les injections $q_i$).

</FoldNote>

<DirectProductLab />

---

*(Note originale de la page 57)* — `(3)` Félix Klein, mathématicien allemand (1849–1925).
