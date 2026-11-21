# Glossaire — Terminologie de 1984 & prépa actuelle

L’ouvrage de **Josette Calais** (*Éléments de théorie des groupes*, PUF, 1984) appartient à la grande tradition algébrique française des années 1970–1980. Pour rester rigoureusement fidèle au texte original tout en facilitant la lecture à un étudiant de classes préparatoires (MPSI/MP) ou de licence aujourd’hui, ce glossaire met en regard le vocabulaire et les notations d’époque avec les formulations actuelles.

---

## 1. Correspondance terminologique (1984 ↔ Prépa actuelle)

| Terme chez Josette Calais (1984) | Formulation actuelle en prépa | Précision et contexte dans le cours | Page |
| :--- | :--- | :--- | :---: |
| **Entiers rationnels** ($\Z$) | **Entiers relatifs** ($\Z$) | Désigne $\Z = \{\dots, -2, -1, 0, 1, 2, \dots\}$ (à ne pas confondre avec $\Q$, ensemble des nombres rationnels). | 18 |
| **Symétrisable / Symétrique** | **Inversible / Inverse** (multiplicatif) ou **Opposé** (additif) | Un élément $x$ est symétrisable s’il existe $x'$ tel que $x' \cdot x = x \cdot x' = e$ (<MathRef id="1.1">(1.1)</MathRef> *c)*). | 17 |
| **Élément unité** | **Élément neutre** ($e$ ou $1$) | Terme réservé au neutre en notation multiplicative (<MathRef id="1.9-1">(1.9)</MathRef>). | 19 |
| **Éléments permutables** | **Éléments qui commutent** ($xy = yx$) | Synonyme employé dès la <MathRef id="1.7">définition (1.7)</MathRef> puis pour les sous-groupes deux à deux permutables en <MathRef id="1.88">(1.88)</MathRef>. | 19 |
| **Notations $(e)$ et $(0)$** | **Sous-groupe trivial** $\{e\}$ ou $\{0\}$ | Les parenthèses autour du neutre désignent le sous-groupe réduit au singleton neutre (<MathRef id="1.21">(1.21)</MathRef> $3^\circ$). | 19, 30 |
| **Demi-groupe** (et *demi-groupe unitaire*) | **Magma associatif** / **Semi-groupe** (et *monoïde*) | Ensemble non vide muni d’une loi associative (<MathRef id="1.9-2">(1.9)</MathRef> $2^\circ$). | 21 |
| **Notation $\Zn{n}$** | **Groupe quotient $\Z / n\Z$** | Ici $(n) = n\Z$ désigne le sous-groupe des multiples de $n$ (<MathRef id="1.13">(1.13)</MathRef>, <MathRef id="2.5">(2.5)</MathRef>). | 25 |
| **Sous-groupe propre** ($H < G$) | **Sous-groupe strict** ($H \subsetneq G$) | **Piège classique :** chez Calais (<MathRef id="1.22">(1.22)</MathRef>), *tout* sous-groupe $H \neq G$ est propre, **y compris** le sous-groupe trivial $(e)$ dès que $\card G > 1$. Certains manuels récents exigent $H \neq (e)$ et $H \neq G$. | 30 |
| **Groupe monogène / Groupe cyclique** | **Monogène** ($\simeq \Z$ ou $\Z/n\Z$) / **Cyclique** ($\simeq \Z/n\Z$) | En France, *monogène* signifie engendré par un élément (<MathRef id="1.40">(1.40)</MathRef>) et *cyclique* signifie monogène **fini** (<MathRef id="1.43">(1.43)</MathRef>). Attention : en anglais, *cyclic* couvre les deux cas. | 35–36 |
| **Homomorphisme de groupes** | **Morphisme de groupes** | Les deux termes sont donnés comme synonymes en <MathRef id="1.54">(1.54)</MathRef>. | 41 |
| **Image homomorphe** | **Image par un morphisme surjectif** | $G'$ est image homomorphe de $G$ s’il existe un morphisme surjectif $G \to G'$ (<MathRef id="1.60">(1.60)</MathRef>). | 43 |
| **Surjection canonique** | **Application quotient** $\pi : G \to G/\mathscr{R}$ | Envoie $x$ sur sa classe $\overline{x}$ (<MathRef id="1.62">(1.62)</MathRef>, <MathRef id="2.25">(2.25)</MathRef>, <MathRef id="2.26">(2.26)</MathRef>). | 44, 83 |
| **Ensembles équipotents** | **Ensembles en bijection** (même cardinal) | Exprime l’existence d’une bijection entre deux ensembles finis ou infinis (<MathRef id="1.74">(1.74)</MathRef>, <MathRef id="2.6">(2.6)</MathRef>, <MathRef id="2.12">(2.12)</MathRef>). | 49, 74 |
| **Monomorphisme / Épimorphisme** | **Morphisme injectif / Morphisme surjectif** | Définis par simplifiabilité à gauche/droite pour $\circ$ en <MathRef id="1.79">(1.79)</MathRef>, puis démontrés équivalents à injectif/surjectif dans les groupes en <MathRef id="1.80">(1.80)</MathRef>–<MathRef id="1.81">(1.81)</MathRef>. | 51–54 |
| **Classes à droite $Hx$ et à gauche $xH$** | **Classes (latérales) à droite / à gauche** | Classes modulo $\mathscr{R}_H$ ($xy^{-1} \in H$) et ${}_H\mathscr{R}$ ($x^{-1}y \in H$) (<MathRef id="2.2">(2.2)</MathRef>). Certains auteurs (Mac Lane & Birkhoff) inversent les adjectifs *à droite* et *à gauche*. | 72 |
| **Indice $[G : H]$** | **Indice de $H$ dans $G$** | Cardinal (fini ou infini) de $(G/H)_d$, égal à celui de $(G/H)_g$ (<MathRef id="2.14">(2.14)</MathRef>). | 76 |
| **Relation compatible avec une loi** | **Congruence sur $(E, \cdot)$** | Équivalence vérifiant $(x \mathrel{\mathscr{R}} x' \text{ et } y \mathrel{\mathscr{R}} y') \implies x \cdot y \mathrel{\mathscr{R}} x' \cdot y'$ (<MathRef id="2.20">(2.20)</MathRef>). | 79–80 |
| **Loi quotient** | **Loi induite sur $E/\mathscr{R}$** | Définie par $\overline{x} \cdot \overline{y} = \overline{x \cdot y}$ si et seulement si $\mathscr{R}$ est compatible avec $\cdot$ (<MathRef id="2.21">(2.21)</MathRef>). | 80 |
| **Indicateur d’Euler** ($\varphi(n)$) | **Indicatrice d’Euler** $\varphi(n) = \card((\Z/n\Z)^\times)$ | Compte les générateurs d’un groupe cyclique d’ordre $n$ ou les éléments inversibles de l’anneau $\Zn{n}$ (<MathRef id="3.20">(3.20)</MathRef>, <MathRef id="3.22">(3.22)</MathRef>). | 99 |
| **$\sigma$-orbite** ($\Omega_\sigma(i)$) | **Orbite de $i$ sous $\langle \sigma \rangle$** | Classe d’équivalence de $i \in \N_n$ modulo $i \mathrel{\mathscr{R}_\sigma} k \iff \exists r \in \Z,\; \sigma^r(i) = k$ (<MathRef id="3.40">(3.40)</MathRef>) ; une orbite de cardinal $1$ est dite *ponctuelle*. | 107 |
| **Support** ($\supp(\sigma)$) | **Support d’une permutation** | Ensemble $\{i \in \N_n \;;\; \sigma(i) \neq i\}$ (<MathRef id="3.37">(3.37)</MathRef>). Deux permutations à supports disjoints commutent (<MathRef id="3.39">(3.39)</MathRef>). | 106 |
| **Signature** ($\varepsilon(\sigma)$) | **Signature d’une permutation** | Définie par $\varepsilon(\sigma) = (-1)^{n-t}$ où $t$ est le nombre de $\sigma$-orbites (<MathRef id="3.65">(3.65)</MathRef>), puis montrée égale à $(-1)^k$ pour $k$ transpositions (<MathRef id="3.68">(3.68)</MathRef>). | 115 |
| **Groupe alterné** ($A_n$) | **Groupe alterné de degré $n$** | Noyau $\Ker \varepsilon$ des permutations paires de $S_n$, d’ordre $n!/2$ pour $n \geqslant 2$ (<MathRef id="3.75">(3.75)</MathRef>–<MathRef id="3.76">(3.76)</MathRef>). | 120 |
| **Groupe diédral** ($D_n$) | **Groupe diédral d’ordre $2n$** | Groupe des isométries du plan conservant un polygone régulier $\mathscr{P}_n$ à $n$ sommets (<MathRef id="3.70-bis">(3.70)</MathRef> p. 121). | 121 |

---

## 2. Notations et conventions typographiques

| Notation du livre (1984) | Usage courant en prépa | Remarque de lecture |
| :--- | :--- | :--- |
| $o(G)$, $o(x)$ | $\card(G)$ ou $\lvert G \rvert$, $\omega(x)$ ou $\operatorname{ord}(x)$ | Ordre d’un groupe fini (<MathRef id="1.8">(1.8)</MathRef>) et ordre d’un élément (<MathRef id="1.44">(1.44)</MathRef>). |
| $H \leqslant G$, $H < G$ | $H < G$, $H \subsetneq G$ | Chez Calais (<MathRef id="1.23">(1.23)</MathRef>), $\leqslant$ autorise $H = G$ et $<$ signifie strict ($H \neq G$). |
| $\langle S \rangle$, $\langle x \rangle$ | $\langle S \rangle$ ou $\operatorname{gr}(S)$ | Sous-groupe engendré par $S$ (<MathRef id="1.36">(1.36)</MathRef>) ou par $x$. |
| $S_E$, $S_n$ | $\mathfrak{S}_E$, $\mathfrak{S}_n$ | Groupe symétrique (<MathRef id="1.14">(1.14)</MathRef>). |
| $e, \sigma_1, \sigma_2, \tau_1, \tau_2, \tau_3$ | $\operatorname{id}, (1\;2\;3), (1\;3\;2), (2\;3), (1\;3), (1\;2)$ | Notations matricielles à deux lignes de $S_3$ introduites en <MathRef id="1.15">(1.15)</MathRef>. |
| $\cl_{\mathscr{R}}(x)$, $\overline{x}$ | $[x]_{\mathscr{R}}$, $\overline{x}$, $\dot{x}$ | Classe d’équivalence de $x$ modulo $\mathscr{R}$ (<MathRef id="1.13">(1.13)</MathRef>, p. 23). |
| $\left(\dfrac{G}{H}\right)_d$, $\left(\dfrac{G}{H}\right)_g$ | $H \backslash G$ (classes $Hx$), $G / H$ (classes $xH$) | Ensembles quotients à droite et à gauche en <MathRef id="2.3">(2.3)</MathRef> $7^\circ$. |
| $G \simeq G'$ | $G \cong G'$ ou $G \simeq G'$ | Relation d’isomorphisme (<MathRef id="1.67">(1.67)</MathRef>). |
| $\N = \{0, 1, 2, \dots\}$ | $\N = \{0, 1, 2, \dots\}$, $\N^* = \N \setminus \{0\}$ | $0$ appartient bien à $\N$ (p. 18) ; $\Q^*_+, \R^*_+$ désignent les rationnels / réels strictement positifs ; $\N_n = \{1, 2, \dots, n\}$ dès la p. 105. |
| $(a, b) = 1$ | $\pgcd(a, b) = 1$ ou $a \wedge b = 1$ | Notation de <MathRef id="not-3-coprime">l’équation $(3)$ du chap. III</MathRef> (<MathRef id="eq-3-3">(3)</MathRef>) exprimant que $a$ et $b$ sont premiers entre eux dans $\Z$ (p. 97). |
| $\mathrm{C}_n^2$, $\mathrm{C}_p^r$ | $\dbinom{n}{2}$, $\dbinom{p}{r}$ | Coefficients binomiaux en notation française classique (<MathRef id="3.47">(3.47)</MathRef> p. 109, ex. 20 p. 132). |
| $\text{resp}^t$ | resp. | Abréviation typographique de *respectivement*. |

---

## 3. Spécificités éditoriales du texte de 1984

Dans le souci d’une fidélité intégrale à l’ouvrage imprimé :

- **Double numérotation `(1.9)`** : ce numéro apparaît deux fois dans le Chapitre I, d’abord page 19 (<MathRef id="1.9-1">Remarque (1.9)</MathRef> sur les notations multiplicative et additive) puis page 21 (<MathRef id="1.9-2">Remarques (1.9)</MathRef> sur les puissances). Les deux occurrences sont conservées et distinguées dans les renvois.
- **Saut de `(1.87)`** : dans la numérotation originale du livre (p. 58), l’énoncé passe directement de l’exemple <MathRef id="1.86">(1.86)</MathRef> à la proposition <MathRef id="1.88">(1.88)</MathRef> sans `(1.87)`.
- **Numérotation au Chapitre III (`(3.73)` double, saut de `(3.74)`, reprise à `(3.70)`)** : page 119, le numéro `(3.73)` est attribué successivement à un Exemple (<MathRef id="3.73-1">Exemple (3.73)</MathRef>) puis à une Remarque (<MathRef id="3.73-2">Remarque (3.73)</MathRef>) ; après la <MathRef id="3.77">Remarque (3.77)</MathRef> (p. 120), le paragraphe `3 — Groupes diédraux D_n` recommence la numérotation à `(3.70)` (<MathRef id="3.70-bis">(3.70)</MathRef> p. 121 à <MathRef id="3.75-bis">(3.75)</MathRef> p. 126). Tous les numéros imprimés d’origine sont conservés tels quels dans le texte.
- **Coquilles typographiques documentées** : toute coquille manifeste de l’impression de 1984 (telle que *Comptabilité* pour *Compatibilité* p. 79, le renvoi erroné *(2.8) 2°* p. 82 pour <MathRef id="2.22">*(2.22)* $2^\circ$</MathRef>, ou le renvoi *théorème (2.12)* p. 91 pour <MathRef id="2.27">théorème (2.27)</MathRef>) est signalée explicitement dans un encart *Note d’édition (1984)*.

---

**Navigation :** [Préface & mode d’emploi](/) · [Chapitre I](/chap1/1-notion-de-groupe) · [Chapitre II](/chap2/1-classes-lagrange) · [Chapitre III](/chap3/1-groupes-monogenes) · [Architecture logique & dépendances](/dependances)
