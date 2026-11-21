---
title: "3 — Morphismes de groupes"
---

<script setup>
const steps_1_55 = [
  {
    title: '1. Image du neutre : $f(e) = e\'$',
    body: 'Pour un $x \\in G$, on écrit $f(x) = f(xe) = f(x)f(e)$ et d’autre part $f(x) = f(x)e\'$ dans $G\'$. Par règle de simplification à gauche par $f(x)$ dans $G\'$, on obtient $f(e) = e\'$.',
    why: 'Dans un groupe, tout élément est simplifiable (à la différence d’un monoïde quelconque où $f(e)^2 = f(e)$ n’impliquerait pas $f(e) = e\'$).'
  },
  {
    title: '2. Image de l’inverse et des puissances $x^n$ ($n \\in \\Z$)',
    body: 'Pour $2^\\circ$, $f(x)f(x^{-1}) = f(xx^{-1}) = f(e) = e\'$ entraîne $f(x^{-1}) = (f(x))^{-1}$ par unicité du symétrique dans $G\'$. Pour $3^\\circ$, on distingue $n = 0$ (ramené au $1^\\circ$), $n > 0$ (produit de $n$ facteurs) et $n < 0$ en écrivant $n = -n\'$ ($n\' > 0$) et $x^n = (x^{-1})^{n\'}$.',
    why: 'Distinguer $n > 0$, $n = 0$ et $n < 0$ permet de déduire rigoureusement le cas négatif en combinant le cas positif avec le $2^\\circ$.'
  },
  {
    title: '3. Image directe d’un sous-groupe ($4^\\circ$)',
    body: 'Soit $H \\leqslant G$. D’abord $e \\in H \\implies f(e) = e\' \\in f(H) \\neq \\varnothing$. Pour $y_1 = f(x_1)$ et $y_2 = f(x_2)$ dans $f(H)$ ($x_1, x_2 \\in H$), on calcule :\n\n$$y_1 y_2^{-1} = f(x_1)(f(x_2))^{-1} = f(x_1)f(x_2^{-1}) = f(x_1 x_2^{-1}).$$\n\nComme $x_1 x_2^{-1} \\in H$, on a $y_1 y_2^{-1} \\in f(H)$, donc $f(H) \\leqslant G\'$ par $(1.24)$.',
    why: 'On remonte aux antécédents dans $H$ pour utiliser $H \\leqslant G$, puis on redescend dans $G\'$ par le morphisme $f$.'
  },
  {
    title: '4. Image réciproque d’un sous-groupe ($5^\\circ$)',
    body: 'Soit $H\' \\leqslant G\'$. Comme $f(e) = e\' \\in H\'$, on a $e \\in f^{-1}(H\') \\neq \\varnothing$. Si $x_1, x_2 \\in f^{-1}(H\')$, alors $f(x_1), f(x_2) \\in H\'$, donc $f(x_1 x_2^{-1}) = f(x_1)(f(x_2))^{-1} \\in H\'$ car $H\' \\leqslant G\'$. Par suite $x_1 x_2^{-1} \\in f^{-1}(H\')$, d’où $f^{-1}(H\') \\leqslant G$.',
    why: 'À l’inverse du $4^\\circ$, on pousse les éléments dans $G\'$ via $f$ pour exploiter la stabilité de $H\'$.'
  }
]

const steps_1_58 = [
  {
    title: '1. Surjectivité $\\iff \\Im f = G\'$',
    body: 'Par définition de l’image directe $\\Im f = f(G)$, une application $f : G \\to G\'$ est surjective si et seulement si $\\Im f = G\'$.',
    why: 'Ce premier point est purement ensembliste et ne fait pas intervenir les lois de groupe.'
  },
  {
    title: '2. Sens direct ($2^\\circ$) : $f$ injectif $\\implies \\Ker f = (e)$',
    body: 'Supposons $f$ injectif. Si $x \\in \\Ker f$, alors $f(x) = e\' = f(e)$ d’après $(1.55)\\ 1^\\circ$, d’où $x = e$ par injectivité. Comme $e \\in \\Ker f$, on a $\\Ker f = (e)$.',
    why: 'Un élément du noyau a la même image que $e$ : l’injectivité l’oblige à être égal à $e$.'
  },
  {
    title: '3. Réciproque ($2^\\circ$) : $\\Ker f = (e) \\implies f$ injectif',
    body: 'Supposons $\\Ker f = (e)$ et soient $x, x\' \\in G$ tels que $f(x) = f(x\')$. En multipliant à gauche par $(f(x))^{-1} = f(x^{-1})$, on obtient :\n\n$$e\' = f(x^{-1})f(x\') = f(x^{-1}x\'),$$\n\ndonc $x^{-1}x\' \\in \\Ker f = (e)$, soit $x^{-1}x\' = e$ et finalement $x\' = x$.',
    why: 'Grâce au morphisme, la comparaison de deux images $f(x) = f(x\')$ se ramène à un seul test autour du neutre $e\'$ : c’est pourquoi la seule fibre au-dessus de $e\'$ contrôle toutes les autres fibres !'
  }
]

const steps_1_66 = [
  {
    title: '1. Sens direct ($1^\\circ$ a) : tout isomorphisme est un morphisme bijectif',
    body: 'Si $f$ est un isomorphisme au sens de $(1.65)$, il existe $g \\in \\operatorname{Hom}(G\', G)$ tel que $g \\circ f = \\id_G$ et $f \\circ g = \\id_{G\'}$. Tout $y \\in G\'$ s’écrit $y = f(g(y))$ (surjectivité), et $f(x) = f(x\') \\implies g(f(x)) = g(f(x\')) \\implies x = x\'$ (injectivité).',
    why: 'L’existence d’une inverse à gauche et à droite pour la composition caractérise ensemblistement les bijections.'
  },
  {
    title: '2. Réciproque ($1^\\circ$ b et $2^\\circ$) : $f^{-1}$ est automatiquement un morphisme',
    body: 'Soit $f \\in \\operatorname{Hom}(G, G\')$ bijectif, et soit $f^{-1} : G\' \\to G$ sa bijection réciproque. Pour $y_1, y_2 \\in G\'$, posons $x_1 = f^{-1}(y_1)$, $x_2 = f^{-1}(y_2)$ et $x = f^{-1}(y_1 y_2)$. On a :\n\n$$f(x) = y_1 y_2 = f(x_1)f(x_2) = f(x_1 x_2).$$\n\nPar injectivité de $f$, $x = x_1 x_2$, c’est-à-dire $f^{-1}(y_1 y_2) = f^{-1}(y_1) f^{-1}(y_2)$. Donc $f^{-1} \\in \\operatorname{Hom}(G\', G)$, ce qui montre à la fois $1^\\circ$ et $2^\\circ$.',
    why: 'C’est le point remarquable : il est inutile de vérifier à la main que la réciproque d’une bijection algébrique respecte la loi, cela découle mécaniquement du fait que $f$ la respecte !'
  }
]

const steps_1_74 = [
  {
    title: '1. Construire l’application de conjugaison $\\varphi(\\sigma) = f \\circ \\sigma \\circ f^{-1}$',
    body: 'Soit $f : E \\to E\'$ une bijection. Pour $\\sigma \\in S_E$, la composée $E\' \\xrightarrow{f^{-1}} E \\xrightarrow{\\sigma} E \\xrightarrow{f} E\'$ appartient à $S_{E\'}$, ce qui définit $\\varphi : S_E \\to S_{E\'}$, $\\sigma \\mapsto f \\circ \\sigma \\circ f^{-1}$.',
    why: 'La bijection $f$ sert de dictionnaire entre $E$ et $E\'$ : pour agir sur $E\'$, on traduit dans $E$ par $f^{-1}$, on permute par $\\sigma$, et on retraduit dans $E\'$ par $f$.'
  },
  {
    title: '2. Prouver la bijectivité de $\\varphi$',
    body: '$\\varphi$ est injective : si $f \\circ \\sigma \\circ f^{-1} = f \\circ \\sigma\' \\circ f^{-1}$, on compose par $f^{-1}$ à gauche et par $f$ à droite (en simplifiant via $f$ injective) pour retrouver $\\sigma = \\sigma\'$. Elle est surjective : pour tout $\\tau \\in S_{E\'}$, $\\sigma = f^{-1} \\circ \\tau \\circ f \\in S_E$ vérifie $\\varphi(\\sigma) = \\tau$.',
    why: 'On construit explicitement la réciproque $\\tau \\mapsto f^{-1} \\circ \\tau \\circ f$.'
  },
  {
    title: '3. Prouver que $\\varphi$ est un morphisme et traiter le cas fini',
    body: 'Pour $\\sigma, \\sigma\' \\in S_E$, on insère $f^{-1} \\circ f = \\id_E$ :\n\n$$\\varphi(\\sigma \\circ \\sigma\') = f \\circ \\sigma \\circ f^{-1} \\circ f \\circ \\sigma\' \\circ f^{-1} = \\varphi(\\sigma) \\circ \\varphi(\\sigma\').$$\n\nLorsque $E = \\{x_1, \\dots, x_n\\}$, la bijection $f(i) = x_i$ donne l’isomorphisme $S_n \\simeq S_E$ défini par $\\varphi(\\sigma)(x_i) = x_{\\sigma(i)}$.',
    why: 'L’insertion de $f^{-1} \\circ f = \\id_E$ est exactement le mécanisme matriciel $(P A P^{-1})(P B P^{-1}) = P A B P^{-1}$ !'
  }
]

const steps_1_77 = [
  {
    title: '1. Montrer que $T_G$ est un sous-groupe de $S_G$',
    body: 'On sait par $(1.75)$ que $T_G = \\{\\tau_g ;\\; g \\in G\\}$ est une partie non vide de $S_G$. Pour $g_1, g_2 \\in G$ et $x \\in G$, $\\tau_{g_1} \\circ \\tau_{g_2}(x) = g_1 g_2 x = \\tau_{g_1 g_2}(x)$, donc $\\tau_{g_1} \\circ \\tau_{g_2} = \\tau_{g_1 g_2} \\in T_G$. Comme $\\tau_g \\circ \\tau_{g^{-1}} = \\tau_e = \\id_G$, on a $(\\tau_g)^{-1} = \\tau_{g^{-1}} \\in T_G$, d’où $T_G \\leqslant S_G$.',
    why: 'C’est l’associativité de la loi de $G$ qui assure $\\tau_{g_1} \\circ \\tau_{g_2} = \\tau_{g_1 g_2}$ : composer deux translations à gauche revient à translater par le produit.'
  },
  {
    title: '2. Montrer que $\\tau : G \\to T_G$, $g \\mapsto \\tau_g$ est bijective',
    body: '$\\tau$ est surjective par définition de $T_G$. Elle est injective car $\\tau_g = \\tau_{g\'} \\implies \\forall x \\in G,\\; gx = g\'x$, d’où $g = g\'$ (par simplification ou en évaluant en $x = e$).',
    why: 'L’existence du neutre $e$ garantit qu’on peut retrouver $g = \\tau_g(e)$ à partir de la permutation $\\tau_g$ : deux éléments distincts induisent toujours des translations distinctes.'
  },
  {
    title: '3. Conclure que $\\tau$ est un isomorphisme (et le théorème de Cayley)',
    body: 'L’égalité $\\tau_{g_1 g_2} = \\tau_{g_1} \\circ \\tau_{g_2}$ montre que $\\tau$ est un morphisme bijectif, donc un isomorphisme $G \\simeq T_G$ d’après $(1.66)$. En composant avec $(1.74)$ si $\\card G = n$, on plonge $G$ dans $S_n$ (théorème $(1.78)$).',
    why: 'Tout groupe abstrait est ainsi réalisé de façon fidèle comme un sous-groupe de permutations de lui-même.'
  }
]

const steps_1_80 = [
  {
    title: '1. Sens direct de $1^\\circ$ : morphisme injectif $\\implies$ monomorphisme',
    body: 'Soit $f \\in \\operatorname{Hom}(G, G\')$ injectif. Si $u, v \\in \\operatorname{Hom}(\\Gamma, G)$ vérifient $f \\circ u = f \\circ v$, alors pour tout $x \\in \\Gamma$, $f(u(x)) = f(v(x))$, et par injectivité de $f$, $u(x) = v(x)$, soit $u = v$.',
    why: 'Une application injective est toujours simplifiable à gauche, même pour des applications quelconques.'
  },
  {
    title: '2. Réciproque de $1^\\circ$ : monomorphisme $\\implies$ injectif via le groupe test $\\Gamma = \\Z$',
    body: 'Supposons $f$ monomorphisme et $f(x) = f(x\')$. On choisit $\\Gamma = \\Z$ et les morphismes $u(n) = x^n$, $v(n) = {x\'}^n$. Comme $f(x) = f(x\')$, on a $f(u(n)) = f(x)^n = f(x\')^n = f(v(n))$ pour tout $n \\in \\Z$, donc $f \\circ u = f \\circ v$. Par propriété de monomorphisme, $u = v$, et en $n = 1$ on obtient $x = x\'$.',
    why: 'Pour tester l’égalité $x = x\'$ avec la définition $(1.79)$, on doit fabriquer de vrais *morphismes* depuis un groupe $\\Gamma$ vers $G$ : le groupe $\\Z$ joue le rôle d’objet libre à un générateur, encodant tout élément $x \\in G$ par le morphisme $n \\mapsto x^n$.'
  },
  {
    title: '3. Sens direct de $2^\\circ$ : morphisme surjectif $\\implies$ épimorphisme',
    body: 'Si $f$ est surjectif et $u \\circ f = v \\circ f$ avec $u, v \\in \\operatorname{Hom}(G\', \\Gamma)$, tout $y \\in G\'$ s’écrit $y = f(x)$, d’où $u(y) = u(f(x)) = v(f(x)) = v(y)$, soit $u = v$.',
    why: 'Une application surjective est toujours simplifiable à droite.'
  },
  {
    title: '4. Réciproque de $2^\\circ$ (construction) : agir sur $E = Q_H \\cup \\{\\infty\\}$',
    body: 'Par l’absurde, supposons $f$ épimorphisme avec $H = \\Im f \\neq G\'$. On note $Q_H = \\{x\'H ;\\; x\' \\in G\'\\}$, on ajoute un point extérieur $\\infty \\notin G\'$ ($E = Q_H \\cup \\{\\infty\\}$), et on définit $\\tau \\in S_E$ comme la transposition échangeant $H$ et $\\infty$ (et fixant tout autre élément). Pour $g \\in G\'$, on pose $\\sigma_g(x\'H) = gx\'H$ et $\\sigma_g(\\infty) = \\infty$, puis $\\sigma(g) = \\sigma_g$ et $\\gamma(g) = \\tau \\circ \\sigma_g \\circ \\tau$.',
    why: 'Dans un groupe non abélien, $H = \\Im f$ n’est pas toujours un sous-groupe distingué, donc $G\'$ ne se quotiente pas forcément en un groupe. On contourne l’obstacle en faisant agir $G\'$ par permutations sur les classes à gauche $Q_H$, et l’ajout du point fixe $\\infty$ garantit qu’on dispose toujours d’un point à échanger avec $H$ même si $Q_H$ n’a que deux classes !'
  },
  {
    title: '5. Réciproque de $2^\\circ$ (contradiction) : $\\sigma \\circ f = \\gamma \\circ f$ mais $\\sigma \\neq \\gamma$',
    body: 'Pour $x \\in G$, $h = f(x) \\in H$ vérifie $hH = H$ et fixe $\\infty$, donc $\\sigma_h$ laisse invariant le couple $\\{H, \\infty\\}$ point par point et coïncide donc avec $\\tau \\circ \\sigma_h \\circ \\tau$ sur tout $E$. D’où $\\sigma \\circ f = \\gamma \\circ f$, et par hypothèse d’épimorphisme, $\\sigma = \\gamma$. Or pour $g \\in G\' \\setminus H$, on a $\\sigma_g(H) = gH \\neq H$ alors que $\\gamma_g(H) = (\\tau \\circ \\sigma_g \\circ \\tau)(H) = \\tau(\\sigma_g(\\infty)) = \\tau(\\infty) = H$, contradiction !',
    why: 'Conjuguer $\\sigma_g$ par la transposition $(H\\ \\infty)$ ne modifie pas l’action des éléments de $H$ (qui fixent à la fois $H$ et $\\infty$), mais trahit immédiatement tout élément $g \\notin H$ qui déplace $H$ hors de $\\{H, \\infty\\}$.'
  }
]
</script>

# Chapitre premier — Structure de groupe

<PageRef :page="41" />

## 3 — Morphismes de groupes

### A / Définitions. Propriétés générales

<MathBlock id="1.54" kind="def" title="Définition (1.54)">

Etant donné deux groupes $(G, \cdot)$ et $(G', *)$, *un morphisme de groupes* de $G$ dans $G'$ est une application $f : G \to G'$ telle que, quels que soient $x$ et $y$ dans $G$, on ait :

<span id="ref-eq-1-22"></span>

$$f(x \cdot y) = f(x) * f(y) \tag{22}$$

Un morphisme de groupes est aussi appelé *homomorphisme* de groupes.

L’ensemble des morphismes d’un groupe $G$ dans un groupe $G'$ sera noté $\operatorname{Hom}(G, G')$.

Un morphisme d’un groupe $G$ dans lui-même est appelé *endomorphisme* de groupe.

L’ensemble des endomorphismes d’un groupe $G$ sera noté $\operatorname{End}(G)$.

</MathBlock>

*Selon nos conventions générales, dans la suite, les groupes $G$ et $G'$ seront notés multiplicativement, leurs éléments unités étant respectivement $e$ et $e'$.*

<MathBlock id="1.55" kind="prop" title="Proposition (1.55)">

*Tout $f \in \operatorname{Hom}(G, G')$ vérifie les propriétés suivantes :*

- $1^\circ$ $f(e) = e'$.
- $2^\circ$ $f(x^{-1}) = (f(x))^{-1}$, *quel que soit $x$ dans $G$.*
- $3^\circ$ $f(x^n) = (f(x))^n$, *quels que soient $x$ dans $G$ et $n$ dans $\Z$.*
- $4^\circ$ $H \leqslant G \Rightarrow f(H) \leqslant G'$.
- $5^\circ$ $H' \leqslant G' \Rightarrow f^{-1}(H') \leqslant G$, *où $f^{-1}(H') = \{x \in G ; f(x) \in H'\}$.*

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Coquille typographique dans $(1.55)$ $5^\circ$">

Dans l’édition imprimée de 1984 (p. 41), la dernière expression du $5^\circ$ est imprimée « $f^{-1}(H') = \{x \in G ; f(x) \in H\}$ » (prime omise sur $H'$). Elle a été rétablie en $f(x) \in H'$.

</FoldNote>

<ProofBlock :steps="steps_1_55">

$1^\circ$ Pour tout $x \in G$, on a $f(x) = f(xe) = f(x)f(e)$ ; or,

$$f(x) \in G' \Rightarrow f(x) = f(x)e'.$$

La règle de simplification dans $G'$ implique alors :

$$f(e) = e'.$$

<PageRef :page="42" />

$2^\circ$ Quel que soit $x \in G$, $f(xx^{-1}) = f(x)f(x^{-1}) = f(e)$ ; or,

$$f(e) = e' = f(x)(f(x))^{-1},$$

d’où $(f(x))^{-1} = f(x^{-1})$.

$3^\circ$ Pour $n = 0$, $x^0 = e$ et $(f(x))^0 = e'$ ; on est ramené au $1^\circ$.

Pour $n > 0$, $x^n = xx \dots x$ ($n$ fois), d’où

$$f(x^n) = f(x)f(x) \dots f(x) \quad (n \text{ fois}),$$

donc $f(x^n) = (f(x))^n$.

Pour $n < 0$, on pose $n = -n'$, $n' > 0$ ;

$$
\begin{aligned}
x^n = (x^{-1})^{n'} \Rightarrow f(x^n) &= (f(x^{-1}))^{n'} \\
&= ((f(x))^{-1})^{n'} = (f(x))^{-n'}
\end{aligned}
$$

d’où $f(x^n) = f(x)^n$.

$4^\circ$ $f(H) = \{f(x) ; x \in H\}$. Soient $y_1$ et $y_2$ dans $f(H)$ ; il existe $x_1$ et $x_2$ dans $H$ tels que $y_1 = f(x_1)$, $y_2 = f(x_2)$.

$$y_1 y_2^{-1} = f(x_1)(f(x_2))^{-1} = f(x_1)f(x_2^{-1}),$$

d’où $y_1 y_2^{-1} = f(x_1 x_2^{-1})$.

$$(x_1 \in H,\; x_2 \in H \text{ et } H \leqslant G) \Rightarrow x_1 x_2^{-1} \in H ;$$

par suite $y_1 y_2^{-1} \in f(H)$, donc $f(H) \leqslant G'$.

$5^\circ$ Soient $x_1$ et $x_2$ dans $f^{-1}(H')$ ; alors $f(x_1) \in H'$ et $f(x_2) \in H'$ ; $H'$ étant un sous-groupe de $G'$, on a

$$f(x_1)(f(x_2))^{-1} = f(x_1)f(x_2^{-1}) = f(x_1 x_2^{-1}) \text{ dans } H',$$

d’où $x_1 x_2^{-1} \in f^{-1}(H')$ et par suite $f^{-1}(H')$ *est un sous-groupe de $G$.*

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Coquille typographique dans la preuve de $(1.55)$ $3^\circ$">

Dans l’édition imprimée de 1984 (p. 42, preuve de $(1.55)$ $3^\circ$), le dernier facteur du produit pour $n > 0$ est imprimé « $f(x^n) = f(x)f(x) \dots f(n) \quad (n \text{ fois})$ » au lieu de $f(x)$.

</FoldNote>

<MathBlock id="1.56" kind="cor" title="Corollaire (1.56)">

*Soit $f \in \operatorname{Hom}(G, G')$, alors :*

- $1^\circ$ *$f(G)$ est un sous-groupe de $G'$.*
- $2^\circ$ *$f^{-1}(e') = \{x \in G ; f(x) = e'\}$ est un sous-groupe de $G$.*

Ces propriétés découlent de l’application de <MathRef id="1.55">la proposition (1.55)</MathRef> aux cas particuliers : $H = G$ et $H' = (e')$.

</MathBlock>

<PageRef :page="43" />

<MathBlock id="1.57" kind="def" title="Définition (1.57)">

Soit $f \in \operatorname{Hom}(G, G')$.

$f(G)$ est appelé *image de $f$* et est noté $\Im f$.

$f^{-1}(e')$ est appelé *noyau de $f$* et est noté $\Ker f$.

</MathBlock>

<MathBlock id="1.58" kind="prop" title="Proposition (1.58)">

*Pour $f \in \operatorname{Hom}(G, G')$, on a :*

- $1^\circ$ *$f$ surjectif $\Leftrightarrow \Im f = G'$.*
- $2^\circ$ *$f$ injectif $\Leftrightarrow \Ker f = (e)$.*

</MathBlock>

<ProofBlock :steps="steps_1_58">

La première propriété est immédiate puisque, par définition, $f$ est surjectif si $f(G) = G'$.

Démontrons la seconde propriété ; rappelons que $f$ est injectif si et seulement si, quels que soient $x$ et $x'$ dans $G$, $f(x) = f(x')$ implique $x = x'$.

— Supposons $f$ injectif ; soit $x \in \Ker f$, alors $f(x) = e' = f(e)$, d’où $x = e$ et par suite $\Ker f = (e)$ ;

— Supposons $\Ker f = (e)$ ; soient $x$ et $x'$ dans $G$ tels que $f(x) = f(x')$ ; on en déduit :

$$e' = (f(x))^{-1}f(x') = f(x^{-1})f(x'), \qquad \text{d’où } e' = f(x^{-1}x'),$$

ce qui implique $x^{-1}x' \in \Ker f$ ;

$$\Ker f = (e) \Rightarrow x^{-1}x' = e, \qquad \text{d’où } x' = x ;$$

$f$ est donc injectif.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Coquille typographique dans la preuve de $(1.58)$">

Dans l’édition imprimée de 1984 (p. 43), l’égalité suivante est imprimée sans prime sur le second $e'$ : « $\text{d’où } e = f(x^{-1}x')$ ». Il s’agit bien de l’élément neutre $e'$ de $G'$.

</FoldNote>

<FoldNote kind="prepa" title="Précision prépa — Pourquoi $\Ker f = (e)$ caractérise-t-il l’injectivité d’un morphisme ?">

Pour une application quelconque $\varphi : E \to E'$ (sans structure de groupe), connaître la préimage d’un seul point ne dit rien sur l’injectivité : par exemple $x \mapsto x^2$ sur $\R$ vérifie $\varphi^{-1}(\{0\}) = \{0\}$ sans être injective !

Dans un **morphisme de groupes** $f : G \to G'$, la loi permet de ramener *toute* égalité $f(x) = f(x')$ à l’élément neutre $e'$ via :
$$f(x) = f(x') \iff f(x^{-1}x') = (f(x))^{-1}f(x') = e' \iff x^{-1}x' \in \Ker f.$$
En d’autres termes, toutes les fibres non vides $f^{-1}(\{y\})$ (avec $y = f(x_0)$) sont de la forme $x_0 \Ker f$, donc en bijection avec le seul noyau $\Ker f$ (c’est le point de départ du théorème d’isomorphisme au Chapitre II !). En notation additive, on retrouve la caractérisation familière d’algèbre linéaire : $f(x) = f(x') \iff x - x' \in \Ker f$.

</FoldNote>

<MathBlock id="1.59" kind="prop" title="Proposition (1.59)">

*Soient $G$, $G'$, $G''$ trois groupes, alors $f \in \operatorname{Hom}(G, G')$ et $g \in \operatorname{Hom}(G', G'')$ implique $g \circ f \in \operatorname{Hom}(G, G'')$.*

</MathBlock>

<ProofBlock>

Soient $x$ et $y$ dans $G$ ;

$$
\begin{aligned}
g \circ f(xy) &= g(f(xy)) \\
g \circ f(xy) &= g(f(x)f(y)), \qquad \text{car } f \in \operatorname{Hom}(G, G') ; \\
g \circ f(xy) &= g(f(x))\,g(f(y)), \qquad \text{car } g \in \operatorname{Hom}(G', G'') \\
\text{d’où} \quad g \circ f(xy) &= (g \circ f(x))\,(g \circ f(y)).
\end{aligned}
$$

</ProofBlock>

<MathBlock id="1.60" kind="def" title="Définition (1.60)">

Un groupe $G'$ est dit *image homomorphe* d’un groupe $G$, s’il existe un morphisme surjectif $f \in \operatorname{Hom}(G, G')$.

</MathBlock>

<PageRef :page="44" />

*Premiers exemples de morphismes de groupes.*

<MathBlock id="1.61" kind="ex" title="Exemples (1.61)">

$1^\circ$ Soient $G$ un groupe et $H$ un sous-groupe de $G$.

*L’injection canonique*

$$
\begin{aligned}
i : H &\to G \\
x &\mapsto x
\end{aligned}
$$

est un *morphisme injectif* de groupes.

$2^\circ$ Soient deux groupes $G$ et $G'$ ; l’application

$$
\begin{aligned}
h : G &\to G' \\
x &\mapsto e'
\end{aligned}
$$

est un morphisme de groupes tel que $\Ker h = G$.

Lorsque le groupe $G'$ est additif et que $e'$ est noté $0$, $h$ est appelé : *morphisme nul* de $G$ dans $G'$.

</MathBlock>

<MathBlock id="1.62" kind="ex" title="Exemple (1.62)">

Soit $n > 0$ dans $\Z$ ; la *surjection canonique* de $\Z$ dans <GlossaryTerm id="z-sur-n">$\Zn{n}$</GlossaryTerm>, c’est-à-dire l’application :

$$
\begin{aligned}
\pi : \Z &\to \Zn{n} \\
x &\mapsto \overline{x} \text{ (classe de } x \text{ modulo } n\text{)},
\end{aligned}
$$

est un *morphisme surjectif* de groupes.

En effet, compte tenu de la définition de l’addition dans $\Zn{n}$ (<MathRef id="1.13">exemple (1.13)</MathRef>, formule 10), on a, quels que soient $x$ et $y$ dans $\Z$, $\pi(x + y) = \pi(x) + \pi(y)$.

</MathBlock>

<MathBlock id="1.63" kind="ex" title="Exemple (1.63)">

Soit $n > 1$ dans $\N$ ; en associant à toute matrice $A$ du groupe $\GL(n, \R)$ son *déterminant* : $\det A$, on définit une application, que nous noterons $d$, de $\GL(n, \R)$ dans le groupe multiplicatif $\R^*$, car toute matrice de $\GL(n, \R)$ est inversible, donc de déterminant non nul ; de plus, quels que soient $A$ et $B$ dans $\GL(n, \R)$, on a $\det AB = \det A \det B$ (voir [31] ou [50]) ; par suite, l’application

$$
\begin{aligned}
d : \GL(n, \R) &\to \R^* \\
A &\mapsto \det A
\end{aligned}
$$

est un morphisme de groupes.

$$\Ker d = \{A \in \GL(n, \R) ; \det A = 1\}.$$

$\Ker d$ est un sous-groupe de $\GL(n, \R)$ appelé : *groupe linéaire spécial* des matrices carrées d’ordre $n$ sur $\R$ et noté $\SL(n, \R)$ ; <PageRef :page="45" /> plus généralement, on peut définir $\SL(n, K)$, où $K$ est un corps commutatif quelconque [51].

</MathBlock>

<MathBlock id="1.64" kind="ex" title="Exemple (1.64)">

Soit $\operatorname{GO}(\R^2)$ le groupe des similitudes de l’espace vectoriel euclidien $\R^2$ (<MathRef id="1.32">exemple (1.32)</MathRef>).

L’application

$$
\begin{aligned}
\lambda : \operatorname{GO}(\R^2) &\to \R_+^* \\
u &\mapsto \lambda_u
\end{aligned}
$$

où $\lambda_u$ est le rapport de la similitude $u$ est un *morphisme de groupes* (le vérifier à partir de <MathRef id="eq-1-16">la relation (16)</MathRef>).

$$\Ker \lambda = \{u \in \operatorname{GO}(\R^2) ; \lambda_u = 1\}$$

$\Ker \lambda$ est un sous-groupe de $\operatorname{GO}(\R^2)$, appelé *groupe orthogonal de $\R^2$* et noté $\operatorname{O}(\R^2)$.

Pour tout espace vectoriel euclidien de dimension finie $E$, on peut définir de même le groupe orthogonal $\operatorname{O}(E)$ ([23], [51]).

</MathBlock>

<FoldNote kind="intuition" title="Intuition — Morphismes fondateurs : $\pi : \Z \to \Zn{n}$, déterminant et rapport de similitude">

Les exemples <MathRef id="1.62">$(1.62)$</MathRef>–<MathRef id="1.64">$(1.64)$</MathRef> illustrent un mécanisme unificateur : à chaque fois qu’une grandeur mesurant une transformation est compatible avec la loi ($\overline{x+y} = \overline{x}+\overline{y}$, $\det(AB) = \det(A)\det(B)$, $\lambda_{u \circ v} = \lambda_u \lambda_v$), on obtient un morphisme dont le **noyau** découpe le sous-groupe des éléments « de mesure neutre » ($n\Z$ pour $\pi$, $\SL(n, \R)$ pour le déterminant, $\operatorname{O}(\R^2)$ pour les isométries vectorielles).

*(Précision sur le renvoi de <MathRef id="1.62">$(1.62)$</MathRef> : la mention « formule 10 » de l’édition originale désigne l’égalité $\overline{x} + \overline{y} = \overline{x + y}$ écrite dans <MathRef id="1.13">l’exemple $(1.13)$</MathRef>, p. 25, sans numéro d’équation imprimé.)*

</FoldNote>

<MorphismLab />

### B / Isomorphismes. Théorème de Cayley

<MathBlock id="1.65" kind="def" title="Définition (1.65)">

Une application $f$ d’un groupe $G$ dans un groupe $G'$ est un *isomorphisme de groupe* si $f \in \operatorname{Hom}(G, G')$ et s’il existe $g \in \operatorname{Hom}(G', G)$ tel que

<span id="ref-eq-1-23"></span>

$$g \circ f = \id_G \quad \text{et} \quad f \circ g = \id_{G'} \tag{23}$$

</MathBlock>

<MathBlock id="1.66" kind="prop" title="Proposition (1.66)">

*Soient deux groupes $G$ et $G'$ :*

- $1^\circ$ *Si $f$ est une application de $G$ dans $G'$, alors : $f$ est un isomorphisme de groupes $\Leftrightarrow f \in \operatorname{Hom}(G, G')$ et $f$ bijectif.*
- $2^\circ$ *$f$ isomorphisme de $G$ sur $G' \Rightarrow f^{-1}$ isomorphisme de $G'$ sur $G$.*

</MathBlock>

<ProofBlock :steps="steps_1_66">

$1^\circ$ *a)* Supposons $f$ isomorphisme de groupes ; d’après <MathRef id="1.65">la définition (1.65)</MathRef>, $f \in \operatorname{Hom}(G, G')$ et il existe $g \in \operatorname{Hom}(G', G)$ vérifiant <MathRef id="eq-1-23">les relations (23)</MathRef>.

Montrons que $f$ est surjectif ; soit $y \in G'$, on a

$$y = \id_{G'}(y) = f \circ g(y) = f(g(y)),$$

donc $G' = \Im f$.

<PageRef :page="46" />

Montrons que $f$ est injectif ; supposons $x$ et $x'$ dans $G$ tels que $f(x) = f(x')$ ; on a alors : $g \circ f(x) = g \circ f(x')$, c’est-à-dire $\id_G(x) = \id_G(x')$, donc $x = x'$.

On en conclut que $f$ est *bijectif*.

*b)* Supposons $f \in \operatorname{Hom}(G, G')$ et $f$ bijectif. $f$ admet une application réciproque $f^{-1}$ qui est une bijection de $G'$ sur $G$ et qui vérifie

$$f^{-1} \circ f = \id_G \quad \text{et} \quad f \circ f^{-1} = \id_{G'}.$$

Montrons que $f^{-1}$ est un morphisme de groupes.

Soient $y_1$ et $y_2$ dans $G'$, posons $x = f^{-1}(y_1 y_2)$ ; on a $f(x) = y_1 y_2$ ; d’autre part, il existe $x_1$ et $x_2$ uniques dans $G$ tels que $y_1 = f(x_1)$ et $y_2 = f(x_2)$, d’où

$$f(x) = f(x_1)f(x_2) = f(x_1 x_2), \qquad \text{car } f \in \operatorname{Hom}(G, G').$$

$f$ bijectif implique $f$ injectif, par suite $x = x_1 x_2$ ; or, $x_1 = f^{-1}(y_1)$, $x_2 = f^{-1}(y_2)$, on en déduit :

$$f^{-1}(y_1 y_2) = f^{-1}(y_1)f^{-1}(y_2) ;$$

alors, $g = f^{-1}$ satisfait aux <MathRef id="eq-1-23">conditions (23)</MathRef>, donc $f$ *est isomorphisme*.

Le $2^\circ$ de <MathRef id="1.66">la proposition (1.66)</MathRef> résulte directement de la démonstration précédente.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Coquille typographique dans la preuve de $(1.66)$">

Dans l’édition imprimée de 1984 (p. 46, $1^\circ$ *b)*), il est imprimé « $f^{-1} \circ f = f \circ f^{-1} = \id_E$. », avec un symbole $E$ étranger à l’énoncé et sans distinguer $\id_G$ de $\id_{G'}$. Le texte a été rectifié en $f^{-1} \circ f = \id_G$ et $f \circ f^{-1} = \id_{G'}$.

</FoldNote>

<MathBlock id="1.67" kind="def" title="Définition (1.67)">

S’il existe un isomorphisme d’un groupe $G$ sur un groupe $G'$, on dit que $G$ et $G'$ sont des groupes *isomorphes* ; dans ce cas on écrit : $G \simeq G'$.

</MathBlock>

<MathBlock id="1.68" kind="rem" title="Remarques (1.68)">

$1^\circ$ Un isomorphisme étant une bijection, deux groupes isomorphes sont équipotents, c’est-à-dire sont de même cardinal [28]. En particulier, *deux groupes finis isomorphes sont de même ordre ; la réciproque de cette propriété est fausse.*

Considérons par exemple le groupe $\Zn{4}$ et le groupe $V$ *défini par <MathRef id="table-11">la table (11)</MathRef>* ; ils sont de même ordre $4$.

Supposons qu’une bijection $f$ de $V$ sur $\Zn{4}$ soit un isomorphisme ; on aurait :

$$\Zn{4} = \{f(e) = \overline{0}, f(a), f(b), f(c)\} ;$$

<PageRef :page="47" />

mais <MathRef id="table-11">la table (11)</MathRef> montre que dans $V$ tout élément $x \neq e$ est d’ordre $2$ ; par suite, dans $\Zn{4}$ tout élément, autre que $\overline{0}$, devrait être d’ordre $2$ ; or nous savons que $\overline{1}$ et $\overline{3}$ sont d’ordre $4$ ; on en conclut que *les groupes $\Zn{4}$ et $V$ ne sont pas isomorphes et, en particulier, le groupe $V$ n’est pas cyclique.* (La notation $V$ vient du nom allemand : *Vierergruppe*.)

$2^\circ$ Même si deux groupes $G$ et $G'$ sont isomorphes, une bijection de $G$ sur $G'$ n’est pas nécessairement un isomorphisme (voir <MathRef id="1.76">remarque (1.76) $1^\circ$</MathRef>).

$3^\circ$ *$(f \in \operatorname{Hom}(G, G') \text{ et } f \text{ injectif}) \Rightarrow G \simeq \Im f$.*

En effet, la restriction surjective de $f$, c’est-à-dire l’application

$$
\begin{aligned}
f_1 : G &\to \Im f \\
x &\mapsto f_1(x) = f(x)
\end{aligned}
$$

est un isomorphisme de groupes d’après <MathRef id="1.66">la proposition (1.66) $1^\circ$</MathRef>.

</MathBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Renvoi fautif dans $(1.68)$ $3^\circ$">

Dans l’édition imprimée de 1984 (p. 47, fin du $3^\circ$), le renvoi est imprimé « d’après la proposition (1.62) $1^\circ$ » alors que $(1.62)$ est un exemple. Il s’agit de la proposition (1.66) $1^\circ$.

</FoldNote>

<FoldNote kind="piege" title="Piège classique — Bijection $\neq$ isomorphisme, et invariants pour montrer $G \not\simeq G'$">

Retenir deux réflexes indispensables face à la relation d’isomorphisme $\simeq$ :

1. **Prouver que $G \not\simeq G'$** : exhiber un **invariant algébrique** préservé par isomorphisme qui diffère entre $G$ et $G'$. Les plus courants en prépa sont : le cardinal (ordre), la commutativité (abélien vs non abélien, ex. $\Zn{6}$ vs $S_3$), l’existence ou le nombre d’éléments d’un ordre donné (comme entre $\Zn{4}$ qui possède deux éléments d’ordre $4$ et $V$ qui n’en possède aucun !).
2. **Une bijection quelconque entre deux groupes isomorphes n’est pas un isomorphisme** : sur un groupe $G \neq (e)$, la translation $\tau_g : x \mapsto gx$ ($g \neq e$) est une bijection de $G$ sur $G$, mais $\tau_g(e) = g \neq e$ suffit à prouver que ce n’est pas un morphisme.

</FoldNote>

<MathBlock id="1.69" kind="def" title="Définition (1.69)">

$G$ étant un groupe, un isomorphisme de $G$ sur lui-même est appelé un *automorphisme* du groupe $G$.

L’ensemble des automorphismes d’un groupe $G$ est noté $\operatorname{Aut}(G)$.

</MathBlock>

<MathBlock id="1.70" kind="prop" title="Proposition (1.70)">

*Pour tout groupe $G$, $\operatorname{Aut}(G)$ est un sous-groupe du groupe symétrique $S_G$.*

Ce résultat se déduit des propositions <MathRef id="1.59">(1.59)</MathRef> et <MathRef id="1.66">(1.66)</MathRef>.

</MathBlock>

<MathBlock id="1.71" kind="rem" title="Remarque (1.71)">

$G$, $G'$, $G''$ désignant des groupes, les propositions <MathRef id="1.59">(1.59)</MathRef> et <MathRef id="1.66">(1.66)</MathRef> impliquent :

- *a)* $G \simeq G$ ;
- *b)* $G \simeq G' \Rightarrow G' \simeq G$ ;
- *c)* $(G \simeq G' \text{ et } G' \simeq G'') \Rightarrow G \simeq G''$.

</MathBlock>

*Exemples d’isomorphismes.*

<MathBlock id="1.72" kind="ex" title="Exemple (1.72)">

On a défini (<MathRef id="1.17">exemple (1.17)</MathRef>) les groupes linéaires $\GL(E)$ et les groupes de matrices $\GL(n, K)$. On démontre en algèbre <PageRef :page="48" /> linéaire (voir par exemple [49]) que si $E$ est un espace vectoriel de dimension finie $n$ sur un corps $K$, alors les groupes *$\GL(E)$ et $\GL(n, K)$ sont isomorphes* et toute base $b = \{e_1, e_2, \dots, e_n\}$ de $E$ sur $K$ permet de définir un *isomorphisme*

$$
\begin{aligned}
M_b : \GL(E) &\to \GL(n, K) \\
u &\mapsto M_b(u)
\end{aligned}
$$

où $M_b(u)$ est *la matrice de $u$ dans la base $b$*, c’est-à-dire la matrice carrée d’ordre $n$ dont les colonnes sont respectivement formées par les composantes dans la base $b$ des vecteurs $u(e_1), u(e_2), \dots, u(e_n)$.

</MathBlock>

<MathBlock id="1.73" kind="ex" title="Exemples (1.73)">

*Automorphismes intérieurs d’un groupe $G$.*

A tout $g \in G$, associons l’application :

$$
\begin{aligned}
\sigma_g : G &\to G \\
x &\mapsto gxg^{-1}.
\end{aligned}
$$

Pour $x$ et $y$ dans $G$, $\sigma_g(xy) = gxyg^{-1} = (gxg^{-1})(gyg^{-1})$, $\sigma_g(xy) = \sigma_g(x)\sigma_g(y)$, donc $\sigma_g \in \operatorname{End}(G)$.

D’autre part, la règle de simplification à droite et à gauche implique l’injectivité de $\sigma_g$.

Enfin, quel que soit $y \in G$, on peut écrire :

$$y = g(g^{-1}yg)g^{-1} = \sigma_g(g^{-1}yg),$$

donc $\sigma_g$ est surjectif.

On en conclut que $\sigma_g \in \operatorname{Aut}(G)$.

$\sigma_g$ est appelé : *automorphisme intérieur* de $G$ défini par $g$.

Posons $\operatorname{Int}(G) = \{\sigma_g ; g \in G\}$ et montrons que *$\operatorname{Int}(G)$ est un sous-groupe de $\operatorname{Aut}(G)$.*

$$\sigma_e = \id_G \Rightarrow \operatorname{Int}(G) \neq \varnothing.$$

Soient $g_1$ et $g_2$ dans $G$ ; pour tout $x \in G$, on a

$$\sigma_{g_1} \circ \sigma_{g_2}(x) = g_1(g_2 x g_2^{-1})g_1^{-1} = (g_1 g_2)x(g_1 g_2)^{-1},$$

d’où $\sigma_{g_1} \circ \sigma_{g_2} = \sigma_{g_1 g_2}$, donc $\sigma_{g_1} \circ \sigma_{g_2} \in \operatorname{Int}(G)$.

De plus, pour tout $g \in G$,

$$(\sigma_g \circ \sigma_{g^{-1}} = \sigma_e = \id_G) \Rightarrow (\sigma_g)^{-1} = \sigma_{g^{-1}} ;$$

par suite, $(\sigma_g)^{-1} \in \operatorname{Int}(G)$, d’où *$\operatorname{Int} G \leqslant \operatorname{Aut}(G)$.*

</MathBlock>

<FoldNote kind="prepa" title="Précision prépa — Conjugaison $gxg^{-1}$ et changement de base $P A P^{-1}$">

La transformation $x \mapsto gxg^{-1}$ (appelée *conjugaison* par $g$) unifie trois situations majeures du programme de prépa :

1. **Matrices semblables dans $\GL(n, K)$** : changer de base dans un endomorphisme $u$ transforme sa matrice $A$ en $P A P^{-1}$ (<MathRef id="1.72">exemple $(1.72)$</MathRef>) : deux matrices de $\GL(n, K)$ sont semblables si et seulement si elles sont conjuguées !
2. **Transport de structure dans $S_E$** : pour une bijection $f : E \to E'$, l’isomorphisme $\sigma \mapsto f \circ \sigma \circ f^{-1}$ du <MathRef id="1.74">lemme $(1.74)$</MathRef> est la version ensembliste exacte d’un changement de base.
3. **Cas des groupes abéliens** : si $G$ est abélien, $\sigma_g(x) = gxg^{-1} = x$ pour tout $g \in G$, donc $\operatorname{Int}(G) = \{\id_G\}$. Plus généralement, l’application $g \mapsto \sigma_g$ est un morphisme $G \to \operatorname{Aut}(G)$ dont le noyau est le centre $Z(G)$ (<MathRef id="1.35">exemple $(1.35)$</MathRef>) !

</FoldNote>

<MicroChallenge title="Micro-défi — Morphismes $S_3 \to \Zn{3}$ et plongement universel d’un groupe fini" hint="Observez l’image d’une transposition $\tau_i$ (d’ordre $2$) dans $\Zn{3}$, puis demandez-vous dans quel groupe de permutations tout groupe d’ordre $n$ peut s’injecter.">

Existe-t-il un morphisme injectif — ou même simplement un morphisme non trivial — de $S_3$ dans $(\Zn{3}, +)$ ? Et inversement, compte tenu de la <MathRef id="1.68">remarque $(1.68)\ 3^\circ$</MathRef>, dans quel groupe concret peut-on espérer plonger par isomorphisme sur son image *tout* groupe fini $G$ d’ordre $n$ ?

<template #answer>

1. **Aucun morphisme non trivial $f : S_3 \to \Zn{3}$ n’existe** (et encore moins de morphisme injectif) ! En effet, dans $S_3$, chaque transposition vérifie $\tau_i^2 = e$, donc dans $(\Zn{3}, +)$ :
   $$f(\tau_i) + f(\tau_i) = f(\tau_i^2) = f(e) = \overline{0},$$
   soit $2 f(\tau_i) = \overline{0}$ dans $\Zn{3}$, ce qui force $f(\tau_i) = \overline{0}$ (car $\overline{1}+\overline{1}=\overline{2}$ et $\overline{2}+\overline{2}=\overline{1}$). Comme $\sigma_1 = \tau_1 \circ \tau_3$ et $\sigma_2 = \tau_3 \circ \tau_1$, on obtient $f(\sigma) = \overline{0}$ pour tout $\sigma \in S_3$.
2. En revanche, tout groupe fini $G$ d’ordre $n$ s’injecte toujours dans le groupe symétrique $S_G \simeq S_n$ en le faisant agir sur lui-même par translations à gauche : c’est l’objet des <MathRef id="1.74">lemmes $(1.74)$</MathRef> et <MathRef id="1.77">$(1.77)$</MathRef> et du <MathRef id="1.78">théorème de Cayley $(1.78)$</MathRef> ci-dessous.

</template>

</MicroChallenge>

<PageRef :page="49" />

*Théorème de Cayley.*

<MathBlock id="1.74" kind="lem" title="Lemme (1.74)">

*Soient $E$ et $E'$ deux ensembles non vides ; $S_E$ et $S_{E'}$ étant leurs groupes symétriques, on a :*

$$E \text{ équipotent à } E' \Rightarrow S_E \simeq S_{E'} ;$$

*en particulier :*

$$(E \text{ fini et } \card E = n) \Rightarrow S_E \simeq S_n.$$

</MathBlock>

<ProofBlock :steps="steps_1_74">

Dire que $E$ est équipotent à $E'$, c’est-à-dire qu’il existe une bijection $f$ de $E$ sur $E'$.

Soit $\sigma \in S_E$, le diagramme :

$$E' \xrightarrow{f^{-1}} E \xrightarrow{\sigma} E \xrightarrow{f} E'$$

montre que $f \circ \sigma \circ f^{-1} \in S_{E'}$.

Considérons alors l’application

$$
\begin{aligned}
\varphi : S_E &\to S_{E'} \\
\sigma &\mapsto f \circ \sigma \circ f^{-1}.
\end{aligned}
$$

$\varphi$ *est injective*, car $\varphi(\sigma) = \varphi(\sigma')$ implique

$$f \circ \sigma \circ f^{-1}(x') = f \circ \sigma' \circ f^{-1}(x'), \quad \forall x' \in E' ;$$

$f$ étant injective, on en déduit que

$$\sigma \circ f^{-1}(x') = \sigma' \circ f^{-1}(x'), \quad \forall x' \in E',$$

donc $\sigma \circ f^{-1} = \sigma' \circ f^{-1}$ ;

par suite, $\sigma \circ f^{-1} \circ f = \sigma' \circ f^{-1} \circ f$, d’où $\sigma = \sigma'$.

$\varphi$ *est surjective* ; en effet, étant donné $\tau \in S_{E'}$, si l’on pose $\sigma = f^{-1} \circ \tau \circ f$, on a $\sigma \in S_E$ et $\tau = \varphi(\sigma)$.

Enfin, $\varphi$ est un *morphisme* de groupes, car, quels que soient $\sigma$ et $\sigma'$ dans $S_E$, on a :

$$
\begin{aligned}
\varphi(\sigma \circ \sigma') &= f \circ \sigma \circ \sigma' \circ f^{-1} \\
\varphi(\sigma \circ \sigma') &= (f \circ \sigma \circ f^{-1}) \circ (f \circ \sigma' \circ f^{-1}) \\
\varphi(\sigma \circ \sigma') &= \varphi(\sigma) \circ \varphi(\sigma') ;
\end{aligned}
$$

on en conclut que $\varphi$ est un *isomorphisme* de groupes.

Dans le cas particulier où $E$ est fini et $\card E = n$, posons $E = \{x_1, x_2, \dots, x_n\}$. La bijection $f : i \mapsto x_i$ de $\{1, 2, \dots, n\}$ <PageRef :page="50" /> sur $E$ induit, comme plus haut, l’isomorphisme $\varphi$ de $S_n$ sur $S_E$ tel que pour tout $\sigma \in S_n$,

$$\varphi(\sigma)(x_i) = x_{\sigma(i)}, \quad \forall x_i \in E.$$

On peut alors *identifier* $S_E$ à $S_n$, en notant $\sigma$ l’élément de $S_E$ égal à $\varphi(\sigma)$.

</ProofBlock>

*Compte tenu de cette identification, quel que soit l’entier $n \geqslant 1$, nous considérerons le groupe $S_n$ comme étant le groupe symétrique de tout ensemble de cardinal $n$.*

<MathBlock id="1.75" kind="def" title="Définition (1.75)">

$G$ étant un groupe, à tout $g \in G$, on associe l’application

$$
\begin{aligned}
\tau_g : G &\to G \\
x &\mapsto gx.
\end{aligned}
$$

$\tau_g$ s’appelle la *translation à gauche* de $G$, définie par $g$.

On remarque que $\tau_e = \id_G$.

Posons $T_G = \{\tau_g ; g \in G\}$ ; on a $T_G \neq \varnothing$ ; montrons que *$T_G$ est un sous-ensemble du groupe symétrique $S_G$.*

Pour tout $g \in G$, l’injectivité de $\tau_g$ résulte de la règle de simplification à gauche ; d’autre part, quels que soient $g$ et $y$ dans $G$, il existe $x \in G$ tel que $y = gx$, d’où la surjectivité de $\tau_g$. On a donc $T_G \subseteq S_G$.

</MathBlock>

<MathBlock id="1.76" kind="rem" title="Remarques (1.76)">

$1^\circ$ Pour $g \neq e$, $\tau_g$ n’est pas un automorphisme de $G$, car pour $x$ et $y$ quelconques dans $G$, on a, en général, $gxy \neq gxgy$.

$2^\circ$ Si $G$ est noté additivement, $\tau_g$ est telle que, pour tout $x \in G$, $\tau_g(x) = g + x$.

$3^\circ$ On peut définir de façon analogue la notion de *translation à droite* $\delta_g$, telle que pour tout $x \in G$, $\delta_g(x) = xg$.

L’ensemble $T'_G$ des translations à droite de $G$ est aussi une partie non vide de $S_G$.

</MathBlock>

<MathBlock id="1.77" kind="lem" title="Lemme (1.77)">

*Pour tout groupe $G$, on a*

$$T_G \leqslant S_G \quad \text{et} \quad G \simeq T_G.$$

</MathBlock>

<ProofBlock :steps="steps_1_77">

On a montré précédemment que $T_G$ est une partie non vide de $S_G$. Soient $\tau_{g_1}$ et $\tau_{g_2}$ dans $T_G$.

Pour tout $x \in G$, $\tau_{g_1} \circ \tau_{g_2}(x) = g_1 g_2 x = \tau_{g_1 g_2}(x)$, donc $\tau_{g_1} \circ \tau_{g_2} \in T_G$.

<PageRef :page="51" />

D’autre part, pour tout $g$ et tout $x$ dans $G$, on a :

$$\tau_g \circ \tau_{g^{-1}}(x) = \tau_e(x) = x,$$

d’où $(\tau_g)^{-1} = \tau_{g^{-1}} \in T_G$ ;

on en conclut que *$T_G$ est un sous-groupe de $S_G$.*

Considérons l’application

$$
\begin{aligned}
\tau : G &\to T_G \\
g &\mapsto \tau_g
\end{aligned}
$$

$\tau$ est surjective, par définition, et

$$\tau_g = \tau_{g'} \Leftrightarrow gx = g'x, \quad \forall x \in G,$$

d’où $\tau_g = \tau_{g'} \Rightarrow g = g'$ ;

$\tau$ est donc injective, par suite $\tau$ est une bijection.

On a vu plus haut que $\tau_{g_1 g_2} = \tau_{g_1} \circ \tau_{g_2}$, quels que soient $g_1$ et $g_2$ dans $G$, donc $\tau$ est un morphisme de groupes.

D’après <MathRef id="1.66">la proposition (1.66)</MathRef> $\tau$ est un *isomorphisme* de groupes.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Symbole manquant dans la preuve de $(1.77)$">

Dans l’édition imprimée de 1984 (p. 51), le quantificateur est imprimé « $\forall xG$ » (symbole $\in$ omis entre $x$ et $G$). Il a été rétabli en $\forall x \in G$.

</FoldNote>

Ce résultat s’énonce généralement sous la forme du théorème suivant, connu sous le nom de *Théorème de Cayley* :

<MathBlock id="1.78" kind="thm" title="Théorème (1.78)">

*Tout groupe est isomorphe à un sous-groupe du groupe de ses permutations.*

*En particulier, tout groupe fini d’ordre $n$ est isomorphe à un sous-groupe du groupe symétrique $S_n$.*

</MathBlock>

Dans le cas particulier où le groupe est fini, la propriété résulte à la fois des lemmes <MathRef id="1.74">(1.74)</MathRef> et <MathRef id="1.77">(1.77)</MathRef>.

<FoldNote kind="intuition" title="Intuition — Le théorème de Cayley : translations à gauche vs translations à droite">

Le <MathRef id="1.78">théorème de Cayley $(1.78)$</MathRef> montre que tout groupe abstrait est isomorphe à un groupe de permutations (ce qui justifie historiquement l’étude des groupes par Galois et Cayley).

**Piège classique sur les translations à droite** (<MathRef id="1.76">remarque $(1.76)\ 3^\circ$</MathRef>) : si l’on pose $\delta_g(x) = xg$, on obtient pour deux translations :
$$(\delta_{g_1} \circ \delta_{g_2})(x) = \delta_{g_1}(xg_2) = xg_2g_1 = \delta_{g_2 g_1}(x),$$
ce qui renverse l’ordre du produit (on parle d’*antimorphisme*). Pour obtenir un morphisme avec les translations à droite, il faut composer avec l’inverse : $\tilde{\delta}_g(x) = xg^{-1}$, ce qui donne bien $\tilde{\delta}_{g_1} \circ \tilde{\delta}_{g_2} = \tilde{\delta}_{g_1 g_2}$.

En pratique, $S_n$ est immense ($n!$ éléments) dès que $n$ grandit : au Chapitre II, on remplacera l’action de $G$ sur lui-même par une action sur les classes modulo un sous-groupe, souvent beaucoup plus petite.

</FoldNote>

<CayleyTheoremLab />

### C / Monomorphismes et épimorphismes de groupes

<MathBlock id="1.79" kind="def" title="Définitions (1.79)">

Soient deux groupes $G$ et $G'$.

$1^\circ$ Une application $f : G \to G'$ est appelée *monomorphisme de groupes*, si :

- *a)* $f \in \operatorname{Hom}(G, G')$ et
- *b)* quel que soit le groupe $\Gamma$, la propriété suivante est vérifiée :

$$(u \text{ et } v \text{ dans } \operatorname{Hom}(\Gamma, G) \text{ et } f \circ u = f \circ v) \Rightarrow u = v.$$

<PageRef :page="52" />

$2^\circ$ Une application $f : G \to G'$ est appelée *épimorphisme de groupes*, si :

- *a)* $f \in \operatorname{Hom}(G, G')$ et
- *b)* quel que soit le groupe $\Gamma$, on a la propriété :

$$(u \text{ et } v \text{ dans } \operatorname{Hom}(G', \Gamma) \text{ et } u \circ f = v \circ f) \Rightarrow u = v.$$

</MathBlock>

<MathBlock id="1.80" kind="prop" title="Proposition (1.80)">

*Pour une application $f$ d’un groupe $G$ dans un groupe $G'$, on a :*

- $1^\circ$ *$f$ morphisme injectif $\Leftrightarrow f$ monomorphisme*
- $2^\circ$ *$f$ morphisme surjectif $\Leftrightarrow f$ épimorphisme.*

</MathBlock>

<ProofBlock :steps="steps_1_80">

$1^\circ$ Supposons $f \in \operatorname{Hom}(G, G')$ et $f$ injectif ; soient $\Gamma$ un groupe et $u, v$ dans $\operatorname{Hom}(\Gamma, G)$ tels que $f \circ u = f \circ v$.

Pour tout $x \in \Gamma$, on a $f(u(x)) = f(v(x))$ ; l’injectivité de $f$ implique alors $u = v$, d’où $f$ monomorphisme.

Réciproquement, supposons $f$ monomorphisme et $x, x'$ dans $G$ tels que $f(x) = f(x')$. Considérons le groupe $\Z$ et les applications $u$ et $v$ de $\Z$ dans $G$ telles que :

$$
\begin{aligned}
u : \Z &\to G, & v : \Z &\to G \\
n &\mapsto x^n & n &\mapsto x'^n.
\end{aligned}
$$

On sait que pour $n$ et $m$ dans $\Z$ on a $x^{m+n} = x^m x^n$ ; $u$ et $v$ sont donc des morphismes de groupes. D’autre part,

$$f \circ u(n) = f(x^n) = (f(x))^n \quad \text{et} \quad f \circ v(n) = f(x'^n) = (f(x'))^n ;$$

alors $f(x) = f(x') \Rightarrow f \circ u = f \circ v$ et $f$ monomorphisme implique $u = v$, d’où :

$$x^n = x'^n, \quad \text{quel que soit } n \in \Z ;$$

pour $n = 1$, on obtient $x = x'$, par suite, $f$ est un morphisme injectif.

$2^\circ$ On suppose que $f$ est un morphisme surjectif de $G$ sur $G'$. Soient $\Gamma$ un groupe et $u, v$ dans $\operatorname{Hom}(G', \Gamma)$ tels que

$$u \circ f = v \circ f.$$

<PageRef :page="53" />

Soit $y \in G'$, $f$ étant surjectif, il existe $x \in G$ tel que $y = f(x)$, par suite :

$$u(y) = u(f(x)) = v(f(x)) = v(y), \quad \text{d’où } u = v ;$$

$f$ est donc un épimorphisme.

Réciproquement, supposons $f$ épimorphisme de $G$ dans $G'$.

Posons $H = \Im f$ et supposons $H \neq G'$.

Soit $Q_H = \{x'H ; x' \in G'\}$, où $x'H = \{x'h ; h \in H\}$.

Considérons l’ensemble $E = Q_H \cup \{\infty\}$, où $\infty$ désigne un élément arbitraire n’appartenant pas à $G'$.

$$H = e'H \Rightarrow H \in Q_H.$$

Soit $\tau$ la permutation de $E$ qui échange $H$ et $\infty$ et qui laisse fixes tous les autres éléments de $E$.

D’autre part, pour tout $g \in G'$, notons $\sigma_g$ l’application de $E$ dans $E$ définie par :

$$
\begin{cases}
\sigma_g(x'H) = gx'H, & \forall x'H \in Q_H \\
\sigma_g(\infty) = \infty.
\end{cases}
$$

On vérifie facilement que $\sigma_g$ est une permutation de $E$, c’est-à-dire un élément du groupe symétrique $S_E$.

Considérons alors les applications :

$$
\begin{aligned}
\sigma : G' &\to S_E & \text{et} && \gamma : G' &\to S_E \\
g &\mapsto \sigma_g &&& g &\mapsto \tau \circ \sigma_g \circ \tau.
\end{aligned}
$$

Des définitions de $\tau$ et $\sigma_g$, on déduit aisément que $\sigma$ et $\gamma$ sont des morphismes de groupes.

Montrons que l’on a $\sigma \circ f = \gamma \circ f$.

Soit $x$ dans $G$ ; $f(x) \in H$, posons $f(x) = h$ ; on a $hH = H$ et

$$
\begin{aligned}
\sigma \circ f(x) &= \sigma_h, & \gamma \circ f(x) &= \tau \circ \sigma_h \circ \tau \\
\sigma_h(\infty) &= \infty ; & \tau \circ \sigma_h \circ \tau(\infty) &= \tau \circ \sigma_h(H) = \tau(H) = \infty. \\
\sigma_h(H) &= H ; & \tau \circ \sigma_h \circ \tau(H) &= \tau \circ \sigma_h(\infty) = \tau(\infty) = H.
\end{aligned}
$$

$$x'H \neq H \Rightarrow \sigma_h(x'H) = hx'H \quad \text{et} \quad \tau \circ \sigma_h \circ \tau(x'H) = \tau \circ \sigma_h(x'H) = hx'H,$$

$f$ étant un épimorphisme,

$$\sigma \circ f = \gamma \circ f \Rightarrow \sigma = \gamma,$$

par suite, pour tout $g \in G'$, $\sigma_g = \tau \circ \sigma_g \circ \tau$.

<PageRef :page="54" />

Soit $g \notin H$ dans $G'$ ; on a alors :

$$\sigma_g(H) = gH \neq H$$

et

$$\tau \circ \sigma_g \circ \tau(H) = \tau \circ \sigma_g(\infty) = \tau(\infty) = H,$$

d’où une contradiction ; par suite $\Im f = H = G'$, donc $f$ est surjectif.

</ProofBlock>

<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Coquille typographique dans la preuve de $(1.80)$">

Dans l’édition imprimée de 1984 (p. 53, dernière ligne), il est imprimé « par suite, par tout $g \in G'$ » au lieu de « pour tout $g \in G'$ ».

</FoldNote>

<MathBlock id="1.81" kind="rem" title="Remarque (1.81)">

Les résultats de <MathRef id="1.80">la proposition (1.80)</MathRef> autorisent, dans le cas des groupes, à appeler :

- *monomorphisme, tout morphisme injectif*
- et *épimorphisme, tout morphisme surjectif.*

</MathBlock>

Compte tenu de <MathRef id="1.66">la proposition (1.66)</MathRef>, <MathRef id="1.80">la proposition (1.80)</MathRef> admet le corollaire suivant :

<MathBlock id="1.82" kind="cor" title="Corollaire (1.82)">

*Une application $f$ d’un groupe $G$ dans un groupe $G'$ est un isomorphisme de groupes si et seulement si c’est à la fois un monomorphisme et un épimorphisme.*

</MathBlock>

<FoldNote kind="prepa" title="Précision prépa — Monomorphismes et épimorphismes : groupes vs ensembles et anneaux">

Les définitions <MathRef id="1.79">$(1.79)$</MathRef> (« simplifiable à gauche / à droite pour $\circ$ ») proviennent de la **théorie des catégories** et ne coïncident pas toujours avec l’injectivité et la surjectivité hors du cadre des ensembles et des groupes :

- **Dans les ensembles** : monomorphisme $\iff$ injection et épimorphisme $\iff$ surjection (via des fonctions test à valeurs dans $\{0, 1\}$).
- **Dans les groupes** : l’équivalence reste vraie (<MathRef id="1.80">proposition $(1.80)$</MathRef>), mais le sens « épimorphisme $\implies$ surjectif » demande la construction ingénieuse de $\tau \circ \sigma_g \circ \tau$ sur $Q_H \cup \{\infty\}$ car $H = \Im f$ n’est pas toujours un sous-groupe permettant de quotienter $G'$.
- **Contre-exemple célèbre (dans les anneaux unitaires)** : l’inclusion $\Z \hookrightarrow \Q$ est un **épimorphisme d’anneaux** (deux morphismes d’anneaux unitaires $u, v : \Q \to A$ qui coïncident sur $\Z$ coïncident partout car $u(p/q) = u(p)u(q)^{-1}$), alors qu’elle n’est évidemment **pas surjective** ! De même, un morphisme à la fois mono et épi dans une catégorie n’est pas toujours un isomorphisme (contre-exemple ici : l’inclusion $\Z \hookrightarrow \Q$ dans les anneaux).

</FoldNote>
