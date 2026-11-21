# Éléments de théorie des groupes

**Édition numérique interactive et autonome (v2)** des chapitres I à III de **Josette Calais**, *Éléments de théorie des groupes* (Presses Universitaires de France, coll. « Mathématiques », 1984, pp. 17–135).

---

## 1. Sommaire de l’ouvrage couvert

Cette édition couvre intégralement les **119 pages** des trois premiers chapitres (énoncés, démonstrations, exemples, notes de bas de page et exercices), soit :

- **Chapitre premier — Structure de groupe** *(pp. 17–70, énoncés `(1.1)` à `(1.92)`, formules `(1)` à `(29)`)*
  - [1 — Notion de groupe (pp. 17–29)](/chap1/1-notion-de-groupe) : lois internes, axiomes $(\mathrm{G}_1)$–$(\mathrm{G}_3)$, règles de calcul, $\Zn{n}$, $S_n$, $Q_8$, $\GL(n, K)$, tables de Cayley et carrés latins.
  - [2 — Sous-groupe (pp. 29–40)](/chap1/2-sous-groupes) : caractérisation, intersections/réunions, sous-groupes de $\Z$, $U_n$, géométrie euclidienne, centre, engendrement, groupes monogènes/cycliques et sommes directes.
  - [3 — Morphismes de groupes (pp. 41–54)](/chap1/3-morphismes) : noyau et image, isomorphismes, automorphismes intérieurs, théorème de Cayley, monomorphismes et épimorphismes.
  - [4 — Produit direct de groupes (pp. 54–61)](/chap1/4-produit-direct) : produit fini et quelconque, caractérisation interne, groupe de Klein, propriété universelle.
  - [Exercices — Chapitre I (pp. 61–70)](/chap1/exercices) : **33 exercices** complets avec atelier de rédaction et correction.

- **Chapitre II — Classes modulo un sous-groupe** *(pp. 71–88, énoncés `(2.1)` à `(2.27)`, formules `(1)` à `(13)`)*
  - [1 — Classes à droite, classes à gauche modulo un sous-groupe (pp. 71–79)](/chap2/1-classes-lagrange) : relations $\mathscr{R}_H$ et ${}_H\mathscr{R}$, théorème de Lagrange, équipotence $(G/H)_d \simeq (G/H)_g$, indice $[G : H]$, théorème de Poincaré et formule des indices.
  - [2 — Propriétés des relations d’équivalence modulo un sous-groupe (pp. 79–84)](/chap2/2-quotient-isomorphisme) : compatibilité avec une loi, loi quotient, cas abélien, quotient par $\Ker f$ et **$1^{\text{er}}$ théorème d’isomorphisme**.
  - [Exercices — Chapitre II (pp. 84–88)](/chap2/exercices) : **10 exercices** complets.

- **Chapitre III — Groupes monogènes. Groupes symétriques $S_n$. Groupes diédraux** *(pp. 89–135, énoncés `(3.1)` à `(3.77)` et `(3.70)`–`(3.75)` bis, formules `(1)` à `(35)`)*
  - [1 — Groupes monogènes (pp. 89–105)](/chap3/1-groupes-monogenes) : caractérisation à isomorphisme près ($\Z$ et $\Zn{n}$), sous-groupes d’un groupe cyclique, générateurs, fonction d’Euler $\varphi(n)$, théorème chinois $\Zn{m} \times \Zn{n} \simeq \Zn{mn}$ et calcul de $\varphi(n)$.
  - [2 — Groupes symétriques $S_n$ (pp. 105–120)](/chap3/2-groupes-symetriques) : support, $\sigma$-orbites, $r$-cycles et transpositions, décomposition canonique en cycles disjoints, ordre d’une permutation, signature $\varepsilon(\sigma) = (-1)^{n-t}$ et groupe alterné $A_n$.
  - [3 — Groupes diédraux $D_n$ (pp. 120–126)](/chap3/3-groupes-diedraux) : isométries du polygone régulier $\mathscr{P}_n$, structure de $D_n = \Gamma_n \langle \sigma \rangle$ d’ordre $2n$, plongement dans $S_n$, caractérisation par générateurs et distinction $D_4 \not\simeq Q_8$.
  - [Exercices — Chapitre III (pp. 126–135)](/chap3/exercices) : **33 exercices** complets (soit **76 exercices** au total sur les 3 chapitres) avec atelier de rédaction et export.

- **Outils transversaux**
  - [Glossaire comparatif (1984 ↔ Prépa actuelle)](/glossaire) : dictionnaire complet de la terminologie et des notations d’époque.
  - [Architecture logique & dépendances](/dependances) : organisation déductive des résultats des deux chapitres et graphe interactif.

---

## 2. Fidélité absolue à l’édition de 1984

Chaque page de cours et chaque énoncé d’exercice sont transcrits **mot à mot** d’après les planches numérisées de l’édition PUF de 1984 :

- **Numérotation et pagination d’origine préservées** : des pastilles `p. 17` à `p. 135` marquent chaque saut de page exact du livre, et les notes de bas de page d’origine sont accessibles en infobulle.
- **Notations et vocabulaire conservés** : *entiers rationnels*, $\Zn{n}$, $(e)$, *sous-groupe propre*, *élément unité*, *symétrisable*, *permutables*, *demi-groupe*, *monomorphisme* / *épimorphisme* restent intacts dans le texte de Josette Calais.
- **Transparence éditoriale** : les rares coquilles typographiques de l’impression de 1984 (double numérotation `(1.9)`, saut de `(1.87)`, coquille *Comptabilité* p. 79, renvoi erroné p. 82, etc.) sont documentées dans des encarts *Note d’édition (1984)* indiquant exactement la leçon imprimée.
- **Fonctionnement 100 % autonome et hors-ligne** : toutes les formules sont compilées au build via **KaTeX strict** avec les polices bundlées localement (zéro dépendance CDN).

---

## 3. Les 4 niveaux d’interactivité

1. **Lecture fluide et outillée sans altérer le texte**
   - Survolez (ou sélectionnez au clavier / sur mobile) tout renvoi souligné (`<MathRef>`) pour afficher immédiatement l’énoncé exact du résultat cité, avec sa page.
   - Cliquez ou survolez les termes techniques d’époque soulignés en pointillé (`<GlossaryTerm>`) pour voir leur équivalent actuel en prépa.
   - Sur les grandes démonstrations, basculez vers le mode **Lecture pas à pas** pour dérouler les étapes stratégiques accompagnées du bouton *« Pourquoi cette étape ? »*.

2. **Approfondissement niveau prépa (encarts repliables)**
   - **Précision prépa** : compléments rigoureux (démonstrations laissées au lecteur comme `(2.20)`, vérification de l’unicité en `(2.23)`, démonstration injective de Poincaré, applications classiques du $1^{\text{er}}$ théorème d’isomorphisme).
   - **Intuition** : images géométriques (classes dans $\R^2$) et lectures combinatoires (formule des indices).
   - **Piège classique** : erreurs usuelles (pourquoi $Hx \mapsto xH$ n’est pas bien définie, pourquoi une classe $Hx$ avec $x \notin H$ n’est pas un sous-groupe, etc.).
   - **Note d’édition (1984)** : traçabilité des variantes et coquilles du texte imprimé.

3. **Découverte active & laboratoires génératifs**
   - Des **Micro-défis** placés *avant* les théorèmes majeurs vous invitent à chercher un contre-exemple ou formuler une conjecture avant de lire l’énoncé formel.
   - **13 laboratoires interactifs** intégrés au fil des sections (permutations de $S_3/D_4/S_4$, tables de Cayley et carrés latins, racines de l’unité $U_n$, treillis des sous-groupes et test $HK = KH$, sommes directes, testeur de morphismes, théorème de Cayley, produit direct et propriété universelle, classes modulo $H$ / Lagrange / indices, compatibilité et $1^{\text{er}}$ théorème d’isomorphisme, groupes cycliques / $\varphi(n)$ / théorème chinois, orbites / cycles / signature dans $S_n$, géométrie du groupe diédral $D_n$) ainsi que la [carte des dépendances](/dependances) permettent d’expérimenter directement sur des groupes finis.

4. **Atelier de rédaction d’exercices (76 exercices)**
   - Chaque fiche d’exercice intègre un **éditeur Markdown + LaTeX** avec barre de symboles rapides, **aperçu KaTeX en direct** et sauvegarde automatique dans le navigateur (`localStorage`).
   - Le tableau de bord de chapitre permet de suivre l’avancement (*À faire*, *Brouillon*, *Prêt à corriger*, *Corrigé*), d’activer le **Mode entraînement** (masquant les corrections disponibles) et d’exporter ou restaurer tout votre travail au format JSON. *(Note : les exercices du Chapitre III sont fournis avec leur énoncé fidèle et l’atelier d’écriture complet, sans indices ni corrigés pré-rédigés.)*

---

## 4. Export des exercices vers un agent correcteur

Chaque fiche d’exercice (et la barre d’export par lot en haut de chaque page d’exercices) génère un **paquet structuré prêt à copier ou télécharger** au format **Markdown (`.md`)** ou **LaTeX (`.tex`)** à destination d’un agent correcteur externe (ou d’un enseignant).

Vous choisissez le mode de retour souhaité :
- **Guidage socratique (sans solution)** : l’agent vérifie votre preuve étape par étape, repère précisément où un raisonnement bloque et vous donne un indice ciblé *sans révéler la solution complète*.
- **Correction rigoureuse ligne par ligne** : contrôle systématique des quantificateurs, de l’associativité/commutativité, des justifications niveau prépa $1^{\text{re}}$ année et proposition d’une rédaction modèle.

Le paquet exporté contient **5 sections ciblées** (sans encombrer l’export avec la liste complète des résultats des chapitres précédents) :
1. **Contexte de l’exercice** (ouvrage, chapitre, numéro et page) ;
2. **Énoncé complet** de l’exercice ;
3. **Rédaction de l’étudiant** ;
4. **Points de doute / questions ciblées** (facultatifs) ;
5. **Consigne de correction** choisie.
