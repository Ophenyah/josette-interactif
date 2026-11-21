# Architecture logique & dépendances (Chapitres I à III)

L’exposé de **Josette Calais** suit une progression strictement déductive, des axiomes de base jusqu’aux groupes monogènes, symétriques et diédraux. Cette page synthétise la structure logique des **Chapitres I à III (pp. 17–126)** ainsi que les liens de dépendance entre énoncés.

---

## 1. Vue d’ensemble de la progression (pp. 17–126)

### Chapitre I — Structure de groupe (pp. 17–61)

1. **I § 1 — Notion de groupe (pp. 17–29)**
   - **Axiomatique :** loi interne, associativité, commutativité, neutre, symétrisable (<MathRef id="1.1">(1.1)</MathRef>, <MathRef id="1.2">(1.2)</MathRef>) $\longrightarrow$ définition d’un groupe (<MathRef id="1.3">(1.3)</MathRef>), unicité du neutre et du symétrique (<MathRef id="1.4">(1.4)</MathRef>), groupes abéliens (<MathRef id="1.5">(1.5)</MathRef>) et finis (<MathRef id="1.8">(1.8)</MathRef>).
   - **Calcul algébrique :** associativité généralisée <MathRef id="eq-1-1">(1)</MathRef>, règles de puissances <MathRef id="eq-1-2">(2)</MathRef>–<MathRef id="eq-1-3">(3)</MathRef>, inverse d’un produit <MathRef id="eq-1-5">(5)</MathRef>.
   - **Modèles concrets :** groupes de nombres <MathRef id="1.12">(1.12)</MathRef>, classes de congruence $\Zn{n}$ <MathRef id="1.13">(1.13)</MathRef>, groupe symétrique $S_E, S_n$ <MathRef id="1.14">(1.14)</MathRef>–<MathRef id="1.15">(1.15)</MathRef>, quaternions $Q_8$ <MathRef id="1.16">(1.16)</MathRef>, groupes linéaires $\GL(E), \GL(n, K)$ <MathRef id="1.17">(1.17)</MathRef> et tables de Cayley (<MathRef id="table-10">Table (10)</MathRef>, <MathRef id="table-11">Table (11)</MathRef>, <MathRef id="table-12">Table (12)</MathRef>).

2. **I § 2 — Sous-groupe (pp. 29–40)**
   - **Critères et stabilité :** définition <MathRef id="1.20">(1.20)</MathRef>, caractérisation par $xy^{-1} \in H$ (<MathRef id="1.24">(1.24)</MathRef>, <MathRef id="eq-1-15">(15)</MathRef>), stabilité par intersection <MathRef id="1.25">(1.25)</MathRef> et cas de la réunion (<MathRef id="1.26">(1.26)</MathRef>, <MathRef id="1.27">(1.27)</MathRef>).
   - **Sous-groupes classiques :** classification $n\Z$ dans $\Z$ <MathRef id="1.28">(1.28)</MathRef>, racines de l’unité $U_n \subset U$ <MathRef id="1.30">(1.30)</MathRef>, similitudes et isométries <MathRef id="1.32">(1.32)</MathRef>–<MathRef id="1.34">(1.34)</MathRef>, centre $Z(G)$ <MathRef id="1.35">(1.35)</MathRef>.
   - **Engendrement et ordre :** sous-groupe engendré $\langle S \rangle$ (<MathRef id="1.36">(1.36)</MathRef>, <MathRef id="1.38">(1.38)</MathRef>), groupes monogènes et cycliques (<MathRef id="1.40">(1.40)</MathRef>, <MathRef id="1.43">(1.43)</MathRef>), ordre d’un élément <MathRef id="1.44">(1.44)</MathRef>.
   - **Produit et somme directe :** $HK \leqslant G \iff HK = KH$ (<MathRef id="1.47">(1.47)</MathRef>) et sommes directes finies ou quelconques dans les groupes abéliens (<MathRef id="1.50">(1.50)</MathRef>–<MathRef id="1.53">(1.53)</MathRef>).

3. **I § 3 — Morphismes de groupes (pp. 41–54)**
   - **Propriétés de base :** morphismes <MathRef id="1.54">(1.54)</MathRef>, préservation des opérations et sous-groupes <MathRef id="1.55">(1.55)</MathRef>, image $\Im f$ et noyau $\Ker f$ (<MathRef id="1.57">(1.57)</MathRef>), critère d’injectivité $\Ker f = (e)$ (<MathRef id="1.58">(1.58)</MathRef>).
   - **Exemples fondamentaux :** surjection $\Z \to \Zn{n}$ <MathRef id="1.62">(1.62)</MathRef>, déterminant $\GL(n, \R) \to \R^*$ de noyau $\SL(n, \R)$ <MathRef id="1.63">(1.63)</MathRef>, rapport de similitude <MathRef id="1.64">(1.64)</MathRef>.
   - **Isomorphismes et théorème de Cayley :** isomorphismes (<MathRef id="1.65">(1.65)</MathRef>–<MathRef id="1.67">(1.67)</MathRef>), automorphismes intérieurs <MathRef id="1.73">(1.73)</MathRef>, équipotence sur $S_E$ <MathRef id="1.74">(1.74)</MathRef> et translations à gauche (<MathRef id="1.75">(1.75)</MathRef>, <MathRef id="1.77">(1.77)</MathRef>) conduisant au **théorème de Cayley** (<MathRef id="1.78">(1.78)</MathRef>).
   - **Monomorphismes et épimorphismes :** équivalence avec injectivité et surjectivité dans les groupes (<MathRef id="1.79">(1.79)</MathRef>–<MathRef id="1.82">(1.82)</MathRef>).

4. **I § 4 — Produit direct de groupes (pp. 54–61)**
   - **Produits finis :** construction <MathRef id="1.83">(1.83)</MathRef>–<MathRef id="1.84">(1.84)</MathRef>, caractérisation interne (<MathRef id="1.85">(1.85)</MathRef>, <MathRef id="1.88">(1.88)</MathRef>), groupe de Klein <MathRef id="1.86">(1.86)</MathRef>.
   - **Produits quelconques :** projections/injections <MathRef id="1.90">(1.90)</MathRef> et **propriété universelle du produit direct** (<MathRef id="1.91">(1.91)</MathRef>–<MathRef id="1.92">(1.92)</MathRef>).

---

### Chapitre II — Classes modulo un sous-groupe (pp. 71–84)

Le Chapitre II déploie deux branches parallèles qui se rejoignent sur l’étude des groupes quotients :

1. **Branche combinatoire — Classes, Lagrange, Poincaré & Indice (II § 1, pp. 71–79)**
   - Relations $\mathscr{R}_H$ et ${}_H\mathscr{R}$ (<MathRef id="2.1">(2.1)</MathRef>) $\longrightarrow$ classes à droite $Hx$ et à gauche $xH$ (<MathRef id="2.2">(2.2)</MathRef>), partition de $G$ (<MathRef id="2.3">(2.3)</MathRef>).
   - Bijection $H \to Hx$ (<MathRef id="2.6">(2.6)</MathRef>–<MathRef id="2.8">(2.8)</MathRef>) $\longrightarrow$ **Théorème de Lagrange** (<MathRef id="2.9">(2.9)</MathRef>) et divisibilité de l’ordre d’un élément (<MathRef id="2.10">(2.10)</MathRef>).
   - Bijection $Hx \mapsto x^{-1}H$ entre $(G/H)_d$ et $(G/H)_g$ (<MathRef id="2.12">(2.12)</MathRef>) $\longrightarrow$ définition générale de l’indice $[G : H]$ (<MathRef id="2.14">(2.14)</MathRef>) et formule $o(G) = o(H)[G : H]$ (<MathRef id="2.15">(2.15)</MathRef>).
   - **Théorème de Poincaré** sur l’indice d’une intersection finie (<MathRef id="2.17">(2.17)</MathRef>, <MathRef id="eq-2-4">(4)</MathRef>–<MathRef id="eq-2-5">(5)</MathRef>).
   - **Formule des indices** $[G : H] = [G : K][K : H]$ (<MathRef id="2.18">(2.18)</MathRef>–<MathRef id="2.19">(2.19)</MathRef>).

2. **Branche algébrique — Compatibilité, Quotients & Isomorphisme (II § 2, pp. 79–84)**
   - Compatibilité à droite/gauche <MathRef id="eq-2-7">(7)</MathRef>–<MathRef id="eq-2-7-prime">(7')</MathRef> $\iff$ compatibilité globale <MathRef id="eq-2-8">(8)</MathRef> (<MathRef id="2.20">(2.20)</MathRef>) $\iff$ existence d’une **loi quotient** (<MathRef id="2.21">(2.21)</MathRef>), héritant de la structure (<MathRef id="2.22">(2.22)</MathRef>).
   - Classification des équivalences compatibles à droite/gauche dans un groupe : ce sont exactement les $\mathscr{R}_H$ et ${}_H\mathscr{R}$ (<MathRef id="2.23">(2.23)</MathRef>).
   - Cas où $\mathscr{R}_H = {}_H\mathscr{R}$ (passage au groupe quotient $G/H$) :
     - tout sous-groupe $H$ d’un groupe **abélien** $G$ (<MathRef id="2.24">(2.24)</MathRef>–<MathRef id="2.25">(2.25)</MathRef>) ;
     - le **noyau** $H = \Ker f$ d’un morphisme quelconque (<MathRef id="2.26">(2.26)</MathRef>) $\longrightarrow$ **$1^{\text{er}}$ théorème d’isomorphisme** $\dfrac{G}{\Ker f} \simeq \Im f$ (<MathRef id="2.27">(2.27)</MathRef>).

---

### Chapitre III — Groupes monogènes, symétriques $S_n$ et diédraux $D_n$ (pp. 89–126)

1. **III § 1 — Groupes monogènes (pp. 89–105)**
   - **Classification :** conservation par épimorphisme <MathRef id="3.1">(3.1)</MathRef>, caractérisation des groupes monogènes à isomorphisme près ($\Z$ ou $\Zn{n}$, <MathRef id="3.3">(3.3)</MathRef>–<MathRef id="3.4">(3.4)</MathRef>), critère d’ordre (<MathRef id="3.6">(3.6)</MathRef>–<MathRef id="3.7">(3.7)</MathRef>) et primalité (<MathRef id="3.9">(3.9)</MathRef>).
   - **Sous-groupes & générateurs :** structure des sous-groupes d’un groupe cyclique d’ordre $n$ (bijection avec les diviseurs $d \mid n$, <MathRef id="3.10">(3.10)</MathRef>–<MathRef id="3.14">(3.14)</MathRef>), théorème de Bezout <MathRef id="thm-bezout">(2)</MathRef>, fonction d’Euler $\varphi(n)$ (<MathRef id="3.18">(3.18)</MathRef>–<MathRef id="3.21">(3.21)</MathRef>) et groupe multiplicatif $G_n = (\Zn{n})^\times$ (<MathRef id="3.24">(3.24)</MathRef>).
   - **Théorème chinois & calcul de $\varphi(n)$ :** produit direct $\Zn{m} \times \Zn{n} \simeq \Zn{mn} \iff (m, n) = 1$ (<MathRef id="3.29">(3.29)</MathRef>–<MathRef id="3.32">(3.32)</MathRef>) $\longrightarrow$ multiplicativité et formule d’Euler (<MathRef id="3.33">(3.33)</MathRef>–<MathRef id="3.36">(3.36)</MathRef>).

2. **III § 2 — Groupes symétriques $S_n$ (pp. 105–120)**
   - **Orbites & cycles :** support <MathRef id="3.37">(3.37)</MathRef>, commutation à supports disjoints <MathRef id="3.39">(3.39)</MathRef>, $\sigma$-orbites <MathRef id="3.40">(3.40)</MathRef>, $r$-cycles et transpositions (<MathRef id="3.43">(3.43)</MathRef>–<MathRef id="3.53">(3.53)</MathRef>).
   - **Décompositions :** décomposition canonique unique en cycles disjoints (<MathRef id="3.55">(3.55)</MathRef>), ordre égal au PPCM (<MathRef id="3.59">(3.59)</MathRef>), engendrement par les transpositions (<MathRef id="3.60">(3.60)</MathRef>, <MathRef id="3.63">(3.63)</MathRef>–<MathRef id="3.64">(3.64)</MathRef>).
   - **Signature & $A_n$ :** $\varepsilon(\sigma) = (-1)^{n-t}$ (<MathRef id="3.65">(3.65)</MathRef>), invariant de parité $(-1)^k$ (<MathRef id="3.67">(3.67)</MathRef>–<MathRef id="3.68">(3.68)</MathRef>), épimorphisme $\varepsilon : S_n \to \{-1, 1\}$ (<MathRef id="3.70">(3.70)</MathRef>) et groupe alterné $A_n = \Ker \varepsilon$ d’ordre $n!/2$ (<MathRef id="3.75">(3.75)</MathRef>–<MathRef id="3.76">(3.76)</MathRef>).

3. **III § 3 — Groupes diédraux $D_n$ (pp. 120–126)**
   - Isométries conservant un polygone régulier $\mathscr{P}_n$ (<MathRef id="3.70-bis">(3.70)</MathRef> p. 121), ordre $2n$ et présentation $\Gamma_n \langle \sigma \rangle$ (<MathRef id="3.71-bis">(3.71)</MathRef>–<MathRef id="3.73-3">(3.73)</MathRef>), caractérisation par générateurs $o(a) = n,\, o(b) = o(ab) = 2$ (<MathRef id="3.74">(3.74)</MathRef>) et $D_4 \not\simeq Q_8$ (<MathRef id="3.75-bis">(3.75)</MathRef>).

---

## 2. Tableau des théorèmes clés et de leurs prérequis directs

| Résultat | Intitulé | Dépendances directes (`dependsOn`) | Page |
| :--- | :--- | :--- | :---: |
| <MathRef id="1.24">Théorème (1.24)</MathRef> | Caractérisation d’un sous-groupe ($xy^{-1} \in H$) | <MathRef id="1.20">(1.20)</MathRef>, <MathRef id="eq-1-13">(13)</MathRef>, <MathRef id="eq-1-14">(14)</MathRef> | 30 |
| <MathRef id="1.47">Proposition (1.47)</MathRef> | Sous-groupe produit $HK \leqslant G \iff HK = KH$ | <MathRef id="1.24">(1.24)</MathRef>, <MathRef id="1.46">(1.46)</MathRef>, <MathRef id="eq-1-20">(20)</MathRef> | 37 |
| <MathRef id="1.58">Proposition (1.58)</MathRef> | Injectivité et noyau $\Ker f = (e)$ | <MathRef id="1.55">(1.55)</MathRef>, <MathRef id="1.57">(1.57)</MathRef> | 43 |
| <MathRef id="1.66">Proposition (1.66)</MathRef> | Isomorphisme $\iff$ morphisme bijectif | <MathRef id="1.65">(1.65)</MathRef> | 45 |
| <MathRef id="1.78">Théorème (1.78)</MathRef> | **Théorème de Cayley** | <MathRef id="1.74">(1.74)</MathRef>, <MathRef id="1.77">(1.77)</MathRef> | 51 |
| <MathRef id="1.80">Proposition (1.80)</MathRef> | Monomorphisme $\iff$ injectif ; Épimorphisme $\iff$ surjectif | <MathRef id="1.79">(1.79)</MathRef> | 52 |
| <MathRef id="1.85">Proposition (1.85)</MathRef> | Caractérisation interne d’un produit direct $G_1 \times G_2$ | <MathRef id="1.47">(1.47)</MathRef>, <MathRef id="1.83">(1.83)</MathRef>, <MathRef id="1.84">(1.84)</MathRef> | 55 |
| <MathRef id="1.91">Théorème (1.91)</MathRef> | **Propriété universelle du produit direct** | <MathRef id="1.84">(1.84)</MathRef>, <MathRef id="1.90">(1.90)</MathRef> | 60 |
| <MathRef id="2.1">Proposition (2.1)</MathRef> | Relations d’équivalence $\mathscr{R}_H$ et ${}_H\mathscr{R}$ | <MathRef id="1.3">(1.3)</MathRef> | 71 |
| <MathRef id="2.9">Théorème (2.9)</MathRef> | **Théorème de Lagrange** | <MathRef id="1.8">(1.8)</MathRef>, <MathRef id="2.3">(2.3)</MathRef>, <MathRef id="2.8">(2.8)</MathRef> | 75 |
| <MathRef id="2.12">Théorème (2.12)</MathRef> | Équipotence de $(G/H)_d$ et $(G/H)_g$ | <MathRef id="2.1">(2.1)</MathRef>, <MathRef id="2.3">(2.3)</MathRef> | 75 |
| <MathRef id="2.17">Théorème (2.17)</MathRef> | **Théorème de Poincaré** | <MathRef id="2.1">(2.1)</MathRef>, <MathRef id="2.14">(2.14)</MathRef> | 77 |
| <MathRef id="2.18">Théorème (2.18)</MathRef> | **Formule des indices** $[G : H] = [G : K][K : H]$ | <MathRef id="2.3">(2.3)</MathRef>, <MathRef id="2.14">(2.14)</MathRef> | 78 |
| <MathRef id="2.21">Proposition (2.21)</MathRef> | Existence de la loi quotient $\iff$ compatibilité | <MathRef id="eq-2-8">(8)</MathRef> | 80 |
| <MathRef id="2.23">Proposition (2.23)</MathRef> | Réciproque des équivalences compatibles à droite/gauche | <MathRef id="2.1">(2.1)</MathRef>, <MathRef id="eq-2-7">(7)</MathRef>, <MathRef id="eq-2-7-prime">(7')</MathRef> | 81 |
| <MathRef id="2.27">Théorème (2.27)</MathRef> | **$1^{\text{er}}$ théorème d’isomorphisme** | <MathRef id="2.26">(2.26)</MathRef> | 83 |
| <MathRef id="3.3">Théorème (3.3)</MathRef> | Caractérisation des groupes monogènes ($\Z$ ou $\Zn{n}$) | <MathRef id="1.28">(1.28)</MathRef>, <MathRef id="2.27">(2.27)</MathRef>, <MathRef id="3.1">(3.1)</MathRef> | 90 |
| <MathRef id="3.14">Théorème (3.14)</MathRef> | Unicité du sous-groupe d’ordre $d \mid n$ dans un groupe cyclique | <MathRef id="3.4">(3.4)</MathRef>, <MathRef id="3.11">(3.11)</MathRef>, <MathRef id="3.12">(3.12)</MathRef> | 96 |
| <MathRef id="3.29">Théorème (3.29)</MathRef> | Théorème chinois ($\Zn{m} \times \Zn{n} \simeq \Zn{mn}$) | <MathRef id="2.27">(2.27)</MathRef>, <MathRef id="3.27">(3.27)</MathRef> | 102 |
| <MathRef id="3.36">Théorème (3.36)</MathRef> | Formule d’Euler $\varphi(n) = n \prod (1 - 1/p_i)$ | <MathRef id="3.34">(3.34)</MathRef>, <MathRef id="3.35">(3.35)</MathRef> | 105 |
| <MathRef id="3.55">Théorème (3.55)</MathRef> | Décomposition canonique en cycles disjoints | <MathRef id="3.39">(3.39)</MathRef>, <MathRef id="3.40">(3.40)</MathRef>, <MathRef id="3.53">(3.53)</MathRef> | 111 |
| <MathRef id="3.68">Théorème (3.68)</MathRef> | Signature et décomposition en transpositions $\varepsilon(\sigma) = (-1)^k$ | <MathRef id="3.66">(3.66)</MathRef>, <MathRef id="3.67">(3.67)</MathRef> | 117 |
| <MathRef id="3.70">Théorème (3.70)</MathRef> | Épimorphisme signature $\varepsilon : S_n \to \{-1, 1\}$ | <MathRef id="3.68">(3.68)</MathRef> | 118 |
| <MathRef id="3.74">Proposition (3.74)</MathRef> | Caractérisation de $D_n$ par deux générateurs | <MathRef id="3.71-bis">(3.71)</MathRef>, <MathRef id="3.72-bis">(3.72)</MathRef> | 125 |

---

## 3. Explorateur interactif du graphe des dépendances

<DependencyGraph />

---

**Navigation :** [Préface & mode d’emploi](/) · [Glossaire (1984 ↔ Prépa)](/glossaire) · [Chapitre I](/chap1/1-notion-de-groupe) · [Chapitre II](/chap2/1-classes-lagrange) · [Chapitre III](/chap3/1-groupes-monogenes)
