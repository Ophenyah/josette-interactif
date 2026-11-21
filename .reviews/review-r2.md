# Rapport de relecture de fidélité R2 — Jalon 1 (`./v2/`)

- **Périmètre audité** :
  - Chapitre I, § 3–4 (`page-25.png` à `page-45.png`, pp. 41–61 jusqu'à la fin de `Remarque (1.92)`) :
    - `/home/opheshark/Josette/v2/docs/chap1/3-morphismes.md`
    - `/home/opheshark/Josette/v2/docs/chap1/4-produit-direct.md`
  - Chapitre II, § 1–2 et Exercices 1–10 (`page-55.png` à `page-72.png`, pp. 71–88) :
    - `/home/opheshark/Josette/v2/docs/chap2/1-classes-lagrange.md`
    - `/home/opheshark/Josette/v2/docs/chap2/2-quotient-isomorphisme.md`
    - `/home/opheshark/Josette/v2/src/data/exercises-c2.ts`
    - `/home/opheshark/Josette/v2/docs/chap2/exercices.md`
- **Verdict global** : **0 écart MAJEUR**, **3 écarts MINEURS** (`[E1]` à `[E3]`), aucune omission ni altération mathématique, aucune fuite du Jalon 2 (`prepa`, `intuition`, `piege`, `MathRef`, `GlossaryTerm`, laboratoires, `hintTex`/`correctionTex` non vides), et toutes les corrections éditoriales de coquilles de l’édition de 1984 sont dûment documentées dans `<FoldNote kind="edition">`.

---

## 1. Liste numérotée des écarts

### [E1] Italique omis sur « pour tout » avant le premier diagramme de la propriété universelle
- **Statut** : `CORRIGÉ` (italique rétabli sur `*pour tout $i \in I$*` dans `4-produit-direct.md`)
- **Fichier cible** : `/home/opheshark/Josette/v2/docs/chap1/4-produit-direct.md` (ligne 301)
- **Page du livre / Scan** : `p. 60` (`page-44.png`, ligne 11)
- **Texte imprimé dans le scan** :
  > Compte tenu des hypothèses, le théorème (1.91) exprime que, *pour tout* $i \in I$, le diagramme suivant commute :
  (les mots « *pour tout* $i \in I$ » sont composés en italique).
- **Texte transcrit** :
  ```markdown
  Compte tenu des hypothèses, le théorème (1.91) exprime que, pour tout $i \in I$, le diagramme suivant commute :
  ```
- **Gravité** : `MINEUR`
- **Correction exacte demandée** :
  ```markdown
  Compte tenu des hypothèses, le théorème (1.91) exprime que, *pour tout $i \in I$*, le diagramme suivant commute :
  ```

### [E2] Fusion sur une seule ligne des deux équivalences de la Proposition (2.1) $2)$
- **Statut** : `CORRIGÉ` (séparation en `\begin{aligned}[t]` dans `1-classes-lagrange.md`)
- **Fichier cible** : `/home/opheshark/Josette/v2/docs/chap2/1-classes-lagrange.md` (lignes 21–22)
- **Page du livre / Scan** : `p. 71` (`page-55.png`, `Proposition (2.1)`, point `2)`)
- **Texte/formule imprimé(e) dans le scan** :
  Les deux équivalences figurent sur **deux lignes distinctes** alignées verticalement sur $\Leftrightarrow$ :
  $$2)\; y \equiv x(\mathscr{R}_H) \Leftrightarrow y \in Hx, \quad \text{\textit{où }} Hx = \{hx ; h \in H\} ;$$
  $$\phantom{2)\;} y \equiv x({}_H\mathscr{R}) \Leftrightarrow y \in xH, \quad \text{\textit{où }} xH = \{xh ; h \in H\}.$$
- **Texte/formule transcrit(e)** :
  ```markdown
  $2)$ $y \equiv x(\mathscr{R}_H) \iff y \in Hx, \qquad \text{\textit{où }} Hx = \{hx ; h \in H\} ;$
  $y \equiv x({}_H\mathscr{R}) \iff y \in xH, \qquad \text{\textit{où }} xH = \{xh ; h \in H\}.$
  ```
  Dans le HTML produit par VitePress, le retour à la ligne simple entre deux formules inline fusionne les deux équivalences dans un même `<p>` sur une seule ligne, en collant `;` directement au `y` suivant sans espace ni saut de ligne.
- **Gravité** : `MINEUR`
- **Correction exacte demandée** :
  Séparer explicitement les deux lignes (par exemple avec un bloc `aligned` ou un saut `<br>`), en conservant l’italique sur `où`, par ex. :
  ```markdown
  $2)$ $\begin{aligned}[t]
  y \equiv x(\mathscr{R}_H) &\iff y \in Hx, \qquad \text{\textit{où }} Hx = \{hx ; h \in H\} ; \\
  y \equiv x({}_H\mathscr{R}) &\iff y \in xH, \qquad \text{\textit{où }} xH = \{xh ; h \in H\}.
  \end{aligned}$
  ```

### [E3] Abréviation `respᵗ` en romain droit au lieu d’italique dans des énoncés en italique
- **Statut** : `CORRIGÉ` (`\textit{resp}^t` appliqué aux 4 emplacements dans `1-classes-lagrange.md` et `2-quotient-isomorphisme.md`)
- **Fichiers cibles** :
  - `/home/opheshark/Josette/v2/docs/chap2/1-classes-lagrange.md` (ligne 161, `Proposition (2.6)`)
  - `/home/opheshark/Josette/v2/docs/chap2/2-quotient-isomorphisme.md` (ligne 15, § 2 A `1°` ; lignes 85 et 87, `Proposition (2.23)`)
- **Pages du livre / Scans** :
  - `p. 74` (`page-58.png`) : `Proposition (2.6)`
  - `p. 79` (`page-63.png`) : § 2 A `1°`
  - `p. 81` (`page-65.png`) : `Proposition (2.23)`
- **Texte/formule imprimé(e) dans le scan** :
  Dans ces trois énoncés intégralement composés en italique, l’abréviation est imprimée en italique (*respᵗ*). (À l’inverse, en `(2.11)` p. 75, preuve `(2.15)` p. 76 et `(7')` p. 79, le contexte est en romain et le scan porte bien `respᵗ` en romain.)
- **Texte/formule transcrit(e)** :
  `$\text{resp}^t$` est employé aux quatre emplacements cités, ce que KaTeX rend en romain droit à l’intérieur de phrases en italique.
- **Gravité** : `MINEUR`
- **Correction exacte demandée** :
  Remplacer `$\text{resp}^t$` par `$\textit{resp}^t$` aux quatre emplacements situés dans des énoncés en italique (`1-classes-lagrange.md` l. 161 ; `2-quotient-isomorphisme.md` l. 15, l. 85, l. 87), de façon cohérente avec `\textit{où }` utilisé en `(2.1)`.

---

## 2. Contrôles transversaux complémentaires

1. **Numérotation des énoncés et équations** :
   - Chapitre I § 3–4 : `(1.54)` à `(1.92)` complets et ordonnés, avec saut confirmé de `(1.87)` absent du livre de 1984 (explicité dans `<FoldNote kind="edition">` p. 58) ; équations `(22)` à `(29)` toutes présentes.
   - Chapitre II § 1–2 : `(2.1)` à `(2.27)` complets et ordonnés ; équations `(1)` à `(13)` ainsi que `(7')`, `(11')`, `(12')` toutes présentes et fidèles.
   - Exercices du Chapitre II : `1)` à `10)` (`c2-e01` à `c2-e10`) complets, dans l’ordre exact.
2. **Notations et diagrammes** :
   - Notations $\mathscr{R}_H$ et ${}_H\mathscr{R}$ exactement respectées tout au long du Chapitre II.
   - Les deux diagrammes commutatifs SVG de la page 60 (`page-44.png`) sont fidèles aux schémas imprimés (sommets $G$, $\prod_{i \in I} G_i$, $G_i$, $G_1$, $G_1 \times G_2$, $G_2$, orientation de toutes les flèches, style pointillé sur $h$ et $\exists!\,h$, traits pleins sur $f_i, p_i, f_1, f_2, p_1, p_2$).
3. **Notes de bas de page** :
   - Note `(3)` p. 57 (Félix Klein) présente via `<BookFootnote num="3" .../>` et rappelée en bas de `4-produit-direct.md`.
   - Note `(1)` p. 75 (Joseph-Louis Lagrange) et note `(2)` p. 77 (Henri-Jules Poincaré) présentes via `<BookFootnote>` et rappelées en bas de `1-classes-lagrange.md`. *(Remarque technique : dans le scan, `(1)` et `(2)` suivent le titre du théorème entre parenthèses ; en raison de l’échappement HTML de la prop `title` de `MathBlock.vue`, `<BookFootnote>` est placé immédiatement en fin d’énoncé, avec contenu textuel strictement identique.)*
4. **Sauts de page (`<PageRef />`)** :
   - Tous les `<PageRef :page="N" />` des quatre fichiers de cours correspondent exactement aux coupures de page réelles des scans.
   - Dans `docs/chap2/exercices.md`, chaque `<ExerciseCard>` est placé sous le `<PageRef>` de sa page de début (`c2-e01`–`c2-e02` sous p. 84, `c2-e03`–`c2-e05` sous p. 85, `c2-e06` sous p. 86, `c2-e07`–`c2-e09` sous p. 87, `c2-e10` sous p. 88), conformément à la convention atomique de `ExerciseCard` adoptée au Chapitre I (les sous-questions `2) b)` figurent en réalité p. 85 et `5) c)–d)` p. 86 dans le livre).
5. **Notes d’édition (coquilles de 1984)** :
   - Toutes les corrections apportées au texte de 1984 (pp. 41, 42, 43, 46, 47, 51, 53, 58, 61, 71–72, 74, 75, 77, 78, 79, 82, 88) sont explicitement justifiées par un `<FoldNote kind="edition">`.
6. **Étanchéité Jalon 1 / Jalon 2** :
   - Aucune occurrence de `prepa`, `intuition`, `piege`, `MathRef`, `GlossaryTerm`, `MicroChallenge` ni de composant de laboratoire n’apparaît dans les fichiers relus ; les champs `hintTex` et `correctionTex` des 10 entrées de `exercises-c2.ts` sont tous vides (`''`).

---

## 3. Tableau récapitulatif page par page

### Chapitre I — § 3 et § 4 (`pp. 41–61`)

| Page livre | Scan | Fichier(s) cible(s) | État / Écarts |
| :---: | :---: | :--- | :--- |
| p. 41 | `page-25.png` | `docs/chap1/3-morphismes.md` | `0 écart` (coquille `(1.55) 5°` documentée) |
| p. 42 | `page-26.png` | `docs/chap1/3-morphismes.md` | `0 écart` (coquille `(1.55) 3°` documentée) |
| p. 43 | `page-27.png` | `docs/chap1/3-morphismes.md` | `0 écart` (coquille `(1.58)` documentée) |
| p. 44 | `page-28.png` | `docs/chap1/3-morphismes.md` | `0 écart` |
| p. 45 | `page-29.png` | `docs/chap1/3-morphismes.md` | `0 écart` |
| p. 46 | `page-30.png` | `docs/chap1/3-morphismes.md` | `0 écart` (coquille `(1.66) 1° b)` documentée) |
| p. 47 | `page-31.png` | `docs/chap1/3-morphismes.md` | `0 écart` (renvoi `(1.68) 3°` documenté) |
| p. 48 | `page-32.png` | `docs/chap1/3-morphismes.md` | `0 écart` |
| p. 49 | `page-33.png` | `docs/chap1/3-morphismes.md` | `0 écart` |
| p. 50 | `page-34.png` | `docs/chap1/3-morphismes.md` | `0 écart` |
| p. 51 | `page-35.png` | `docs/chap1/3-morphismes.md` | `0 écart` (symbole omis `(1.77)` documenté) |
| p. 52 | `page-36.png` | `docs/chap1/3-morphismes.md` | `0 écart` |
| p. 53 | `page-37.png` | `docs/chap1/3-morphismes.md` | `0 écart` (coquille `(1.80) 2°` documentée) |
| p. 54 | `page-38.png` | `docs/chap1/3-morphismes.md`, `docs/chap1/4-produit-direct.md` | `0 écart` |
| p. 55 | `page-39.png` | `docs/chap1/4-produit-direct.md` | `0 écart` |
| p. 56 | `page-40.png` | `docs/chap1/4-produit-direct.md` | `0 écart` |
| p. 57 | `page-41.png` | `docs/chap1/4-produit-direct.md` | `0 écart` (note `(3)` présente) |
| p. 58 | `page-42.png` | `docs/chap1/4-produit-direct.md` | `0 écart` (renvoi `(1.81)` et saut `(1.87)` documentés) |
| p. 59 | `page-43.png` | `docs/chap1/4-produit-direct.md` | `0 écart` |
| p. 60 | `page-44.png` | `docs/chap1/4-produit-direct.md` | `[E1]` (SVG 1 & 2 conformes) |
| p. 61 | `page-45.png` | `docs/chap1/4-produit-direct.md` | `0 écart` (jusqu’à fin de `(1.92)` ; coquilles `(1.91) b)` documentées) |

### Chapitre II — § 1, § 2 et Exercices (`pp. 71–88`)

| Page livre | Scan | Fichier(s) cible(s) | État / Écarts |
| :---: | :---: | :--- | :--- |
| p. 71 | `page-55.png` | `docs/chap2/1-classes-lagrange.md` | `[E2]` (coquille `R_H` romain documentée) |
| p. 72 | `page-56.png` | `docs/chap2/1-classes-lagrange.md` | `0 écart` (coquille `R_H` romain documentée) |
| p. 73 | `page-57.png` | `docs/chap2/1-classes-lagrange.md` | `0 écart` |
| p. 74 | `page-58.png` | `docs/chap2/1-classes-lagrange.md` | `[E3]` (`p. 74`, coquille `(2.5)` documentée) |
| p. 75 | `page-59.png` | `docs/chap2/1-classes-lagrange.md` | `0 écart` (note `(1)` et coquilles `(2.9)` documentées) |
| p. 76 | `page-60.png` | `docs/chap2/1-classes-lagrange.md` | `0 écart` |
| p. 77 | `page-61.png` | `docs/chap2/1-classes-lagrange.md` | `0 écart` (note `(2)` et coquille `(2.16)` documentées) |
| p. 78 | `page-62.png` | `docs/chap2/1-classes-lagrange.md` | `0 écart` (coquille `(2.18)` documentée) |
| p. 79 | `page-63.png` | `docs/chap2/1-classes-lagrange.md`, `docs/chap2/2-quotient-isomorphisme.md` | `[E3]` (`p. 79`, coquille `Comptabilité` documentée) |
| p. 80 | `page-64.png` | `docs/chap2/2-quotient-isomorphisme.md` | `0 écart` |
| p. 81 | `page-65.png` | `docs/chap2/2-quotient-isomorphisme.md` | `[E3]` (`p. 81`) |
| p. 82 | `page-66.png` | `docs/chap2/2-quotient-isomorphisme.md` | `0 écart` (renvoi `(2.8) 2°` documenté) |
| p. 83 | `page-67.png` | `docs/chap2/2-quotient-isomorphisme.md` | `0 écart` |
| p. 84 | `page-68.png` | `docs/chap2/2-quotient-isomorphisme.md`, `docs/chap2/exercices.md`, `src/data/exercises-c2.ts` | `0 écart` |
| p. 85 | `page-69.png` | `docs/chap2/exercices.md`, `src/data/exercises-c2.ts` | `0 écart` |
| p. 86 | `page-70.png` | `docs/chap2/exercices.md`, `src/data/exercises-c2.ts` | `0 écart` |
| p. 87 | `page-71.png` | `docs/chap2/exercices.md`, `src/data/exercises-c2.ts` | `0 écart` |
| p. 88 | `page-72.png` | `docs/chap2/exercices.md`, `src/data/exercises-c2.ts` | `0 écart` (coquille ex. `10 b)` documentée) |
