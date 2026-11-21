# Rapport de relecture de fidélité R1 — Jalon 1 (`./v2/`)

**Périmètre contrôlé** :
1. Scans `page-01.png` à `page-13.png` (pp. 17–29, jusqu’à la fin de `E / Table de Cayley`) vs `v2/docs/chap1/1-notion-de-groupe.md` et `v2/src/data/book-tables-t1.ts`.
2. Scans `page-13.png` (à partir de `2 — Sous-groupe`) à `page-24.png` (pp. 29–40) vs `v2/docs/chap1/2-sous-groupes.md`.
3. Scans `page-45.png` (à partir de `Exercices Chapitre Premier`) à `page-54.png` (pp. 61–70, exercices `1)` à `33)`) vs `v2/src/data/exercises-c1.ts` et `v2/docs/chap1/exercices.md`.

**Verdict global** : **0 écart `MAJEUR`**, **5 écarts `MINEUR`** (détails typographiques et compléments de `<FoldNote kind="edition">`). Aucune omission ni altération mathématique détectée, et **aucun ajout du Jalon 2** (`prepa`, `MathRef`, `GlossaryTerm`, laboratoire, `hintTex`/`correctionTex` non vides) n’a été introduit.

---

## 1. Liste numérotée des écarts

### `[E1]` — Barre de classe étendue à l’indice dans $(1.13)$
- **Statut** : `CORRIGÉ` (`\overline{x}_i` dans `1-notion-de-groupe.md`)
- **Fichier cible** : `v2/docs/chap1/1-notion-de-groupe.md` (ligne 368)
- **Page du livre / Scan** : p. 24 (`page-08.png`)
- **Imprimé dans le scan** :
  $$\frac{\mathbf{E}}{\mathscr{R}} = \{\overline{x}_i ;\, i \in \mathrm{I}\}.$$
  *(La barre supérieure ne recouvre que la lettre $x$, l’indice $i$ restant à l’extérieur.)*
- **Transcrit** :
  ```latex
  $$\dfrac{E}{\mathscr{R}} = \{\overline{x_i} ;\; i \in I\}.$$
  ```
- **Gravité** : `MINEUR`
- **Correction exacte demandée** : Remplacer `\overline{x_i}` par `\overline{x}_i` à la ligne 368 de `1-notion-de-groupe.md`.

---

### `[E2]` — Fonte maigre de $N$ normalisée en $\N$ sans `<FoldNote kind="edition">` systématique
- **Statut** : `CORRIGÉ` (mentions ajoutées dans les notes d’édition de `1-notion-de-groupe.md` et `2-sous-groupes.md`)
- **Fichiers cibles** :
  - `v2/docs/chap1/1-notion-de-groupe.md` (lignes 166 et 204)
  - `v2/docs/chap1/2-sous-groupes.md` (ligne 133, par comparaison avec les lignes 135 et 152–156)
- **Pages du livre / Scans** :
  - p. 20 (`page-04.png`, § C *a)*, ligne 1 du paragraphe) : `(n ⩾ 2 dans N)` avec `N` en italique maigre.
  - p. 21 (`page-05.png`, § C *b)*, ligne 1 du paragraphe) : `(n ⩾ 1 dans N)` avec `N` en italique maigre.
  - p. 31 (`page-15.png`, Exemple `(1.28)`, 1er alinéa en italique) : `Pour tout entier n ∈ N` avec `N` en italique maigre.
- **Transcrit** : Normalisé directement en `\N` dans les trois cas sans note d’édition, alors que la même particularité typographique au 3e alinéa de l’exemple `(1.28)` (`2-sous-groupes.md`, ligne 135) fait l’objet d’une `<FoldNote kind="edition">` dédiée aux lignes 152–156 (*« Fonte de $\N$ en $(1.28)$ »*).
- **Gravité** : `MINEUR`
- **Correction exacte demandée** : Par cohérence éditoriale, compléter la `<FoldNote kind="edition">` de `2-sous-groupes.md` (lignes 152–156) pour mentionner également le 1er alinéa de `(1.28)`, et ajouter une brève `<FoldNote kind="edition">` (ou mention regroupée) dans `1-notion-de-groupe.md` indiquant que la fonte maigre $N$ dans les intitulés en italique des sous-sections *a)* (p. 20) et *b)* (p. 21) est normalisée en $\N$.

---

### `[E3]` — Absence de `<FoldNote kind="edition">` pour la coquille de renvoi de l’exercice 24 *b)*
- **Statut** : `CORRIGÉ` (`<FoldNote kind="edition">` ajoutée après `c1-e24` dans `exercices.md`)
- **Fichier cible** : `v2/docs/chap1/exercices.md` (après la ligne 83, `<ExerciseCard id="c1-e24" />`)
- **Page du livre / Scan** : p. 66 (`page-50.png`, Exercice 24 *b)*)
- **Imprimé dans le scan** :
  `Ces groupes sont-ils isomorphes au groupe de Klein (exemple (1.83))?`
- **Transcrit** :
  - `v2/src/data/exercises-c1.ts` (ligne 444) reproduit fidèlement : `Ces groupes sont-ils isomorphes au groupe de Klein (exemple (1.83)) ?`
  - `v2/docs/chap1/exercices.md` (lignes 83–85) n’ajoute aucune `<FoldNote kind="edition">`.
  Or, dans l’ouvrage de 1984, `(1.83)` est la **Définition (1.83)** (produit direct de deux groupes, p. 55) tandis que le groupe de Klein est traité à l’**Exemple (1.86)** (p. 57). Contrairement aux coquilles des exercices 12, 14, 17, 26 et 31, celle-ci n’est pas signalée au lecteur.
- **Gravité** : `MINEUR`
- **Correction exacte demandée** : Conserver `(exemple (1.83))` dans `exercises-c1.ts` et insérer dans `exercices.md`, immédiatement après `<ExerciseCard id="c1-e24" />` (ligne 83), une `<FoldNote kind="edition" title="Note d’édition (texte de 1984) — Exercice 24 b)">` précisant que le renvoi imprimé « `exemple (1.83)` » est une coquille de l’édition de 1984 pour « `exemple (1.86)` » (groupe de Klein), conservée telle quelle dans l’énoncé.

---

### `[E4]` — Imprécision de la `<FoldNote kind="edition">` de l’exercice 26 sur le statut des deux coquilles
- **Statut** : `CORRIGÉ` (`exercices.md` précisé pour `1.` conservé et `2.` rectifié)
- **Fichiers cibles** : `v2/docs/chap1/exercices.md` (lignes 91–98) et `v2/src/data/exercises-c1.ts` (lignes 494, 502–504)
- **Page du livre / Scan** : p. 67 (`page-51.png`, Exercice 26 *c)* et *f)*)
- **Imprimé dans le scan** :
  - *c)* : `(par convention, quel que soit la droite Δ, s_Δ⁰ = id_P).`
  - *f)* : `r_{0, α}` (chiffre `0` au lieu de la lettre `O`, aux 3 occurrences de *f)*).
- **Transcrit** :
  - `exercises-c1.ts` (ligne 494) conserve littéralement `quel que soit la droite \Delta` en *c)*, mais rectifie `r_{0, \alpha}` en `r_{O, \alpha}` en *f)* (lignes 502–504).
  - `exercices.md` (lignes 91–98) signale les deux coquilles dans la `<FoldNote kind="edition">`, sans indiquer explicitement que la première est conservée verbatim dans l’énoncé alors que la seconde y a été rectifiée (contrairement au reste du projet qui distingue explicitement « conservé tel quel » et « rectifié en… »).
- **Gravité** : `MINEUR`
- **Correction exacte demandée** : Préciser dans `exercices.md` (lignes 95–96) : au point `1.`, « *(formulation originale conservée dans l’énoncé)* » ; au point `2.`, « *(rectifié ici en $r_{O, \alpha}$)* ».

---

### `[E5]` — Harmonisation typographique mineure (apostrophe droite et majuscules accentuées)
- **Statut** : `CORRIGÉ` (apostrophe typographique `d’un` rétablie L510 et capitales initiales accentuées `Étant`/`À` harmonisées dans `1-notion-de-groupe.md`)
- **Fichiers cibles** :
  - `v2/docs/chap1/1-notion-de-groupe.md` (ligne 510)
  - `v2/docs/chap1/2-sous-groupes.md` (ligne 415)
  - `v2/src/data/exercises-c1.ts` (lignes 200, 216, 396, 498, 518)
- **Pages du livre / Scans** :
  - p. 27 (`page-11.png`) : `E / Table de Cayley d’un groupe fini` → transcrit avec apostrophe droite ASCII `d'un` (`1-notion-de-groupe.md`, ligne 510), alors que tout le reste du fichier utilise l’apostrophe typographique `’`.
  - pp. 37, 63, 65, 67 (`page-21.png`, `page-47.png`, `page-49.png`, `page-51.png`) : l’impression de 1984 omet les accents sur les majuscules initiales (`Etant donné`, `A tout`, `Ecrire`, `A toute`). `1-notion-de-groupe.md` conserve ces graphies sans accent (lignes 15, 356, 364), tandis que `2-sous-groupes.md` (ligne 415 : `Étant`) et `exercises-c1.ts` (lignes 200 : `Étant` ; 216 : `À` ; 396 : `Écrire` ; 498 : `À` ; 518 : `À`) les modernisent avec accent.
- **Gravité** : `MINEUR`
- **Correction exacte demandée** : Remplacer `d'un` par `d’un` à la ligne 510 de `1-notion-de-groupe.md` ; uniformiser le choix typographique sur les capitales accentuées entre les fichiers si une stricte uniformité est souhaitée (l’accentuation moderne en `É`/`À` reste préférable à l’usage typographique de 1984).

---

## 2. Contrôles de fidélité validés sans écart

- **Tables de Cayley et permutations (`v2/src/data/book-tables-t1.ts` & `1-notion-de-groupe.md`)** :
  - Permutations `(1.15)` (p. 26, `page-10.png`) : les 6 éléments `e`, `\sigma_1`, `\sigma_2`, `\tau_1`, `\tau_2`, `\tau_3` dans `1-notion-de-groupe.md` (lignes 460–462) et `S3_NOTATIONS` (`book-tables-t1.ts`, lignes 8–18) sont exacts.
  - Les 8 matrices de $Q_8$ en `(1.16)` (p. 27, `page-11.png`, `1-notion-de-groupe.md` ligne 492) sont exactes entrée par entrée.
  - Tables de l’exemple `(1.18)` : $\Zn{2}$ (4 cases), $\Zn{3}$ (9 cases), $\Zn{4}$ (16 cases) et Table `(10)` de $S_3$ (36 cases) vérifiées **case par case** sur `page-12.png` ; coquilles d’en-tête (`0` au lieu de `\overline{0}` dans $\Zn{2}$ et `0` au lieu de `\circ` dans la Table `(10)`) documentées par `<FoldNote kind="edition">` (lignes 538–545).
  - Table `(11)` (16 cases, p. 28, `page-12.png`) et Table `(12)` (25 cases, p. 29, `page-13.png`) vérifiées **case par case**.
- **Numérotation complète** :
  - Énoncés `(1.1)`–`(1.53)` (avec double `(1.9)` p. 19 et p. 21 documenté par deux `<FoldNote kind="edition">`, plus les 4 blocs non numérotés pp. 18, 19, 31, 40) : 100 % conformes.
  - Équations `(1)`–`(21)` (y compris `(2')`, `(3')`, `(15')`, `(17')`, `(19')`, `(20')`) et tables `(10)`–`(12)` : 100 % conformes.
  - Exercices `1)`–`33)` (`c1-e01` à `c1-e33`) : tous les énoncés, sous-questions, formules (y compris matrices de l’ex. 22, homographies de l’ex. 27, intégrales de l’ex. 30 et $\mathscr{T}(P)$ de l’ex. 26 *e)*) sont exacts.
- **Notes de bas de page et sauts de page** :
  - Notes originales `(1)` (Abel, p. 19) et `(2)` (Cayley, p. 27) fidèlement reprises.
  - Balises `<PageRef :page="N" />` exactes pour toutes les pages `17`–`40` et `61`–`70` (y compris les coupures intra-phrase pp. 19/20, 25/26, 31/32, 38/39).
- **Vocabulaire d’époque et absence d’ajouts Jalon 2** :
  - Notations et termes d’époque intégralement conservés (`entiers rationnels`, `symétrisable`, `permutables`, `élément unité`, `sous-groupe propre`, `somme des sous-groupes de H_i` p. 39, `rapport à la similitude` p. 33, `f_2 \circ f_1` ex. 26 *a)*).
  - Aucune occurrence de `prepa`, `MathRef`, `GlossaryTerm`, laboratoire interactif, ni de `hintTex`/`correctionTex` renseignés.

---

## 3. Tableau récapitulatif page par page

| Page du livre | Scan | Fichier(s) cible(s) | Écarts |
| :--- | :--- | :--- | :--- |
| p. 17 | `page-01.png` | `1-notion-de-groupe.md` | 0 écart |
| p. 18 | `page-02.png` | `1-notion-de-groupe.md` | 0 écart |
| p. 19 | `page-03.png` | `1-notion-de-groupe.md` | 0 écart |
| p. 20 | `page-04.png` | `1-notion-de-groupe.md` | `[E2]` |
| p. 21 | `page-05.png` | `1-notion-de-groupe.md` | `[E2]` |
| p. 22 | `page-06.png` | `1-notion-de-groupe.md` | 0 écart |
| p. 23 | `page-07.png` | `1-notion-de-groupe.md` | 0 écart |
| p. 24 | `page-08.png` | `1-notion-de-groupe.md` | `[E1]` |
| p. 25 | `page-09.png` | `1-notion-de-groupe.md` | 0 écart |
| p. 26 | `page-10.png` | `1-notion-de-groupe.md`, `book-tables-t1.ts` | 0 écart |
| p. 27 | `page-11.png` | `1-notion-de-groupe.md` | `[E5]` |
| p. 28 | `page-12.png` | `1-notion-de-groupe.md`, `book-tables-t1.ts` | 0 écart |
| p. 29 | `page-13.png` | `1-notion-de-groupe.md`, `book-tables-t1.ts`, `2-sous-groupes.md` | 0 écart |
| p. 30 | `page-14.png` | `2-sous-groupes.md` | 0 écart |
| p. 31 | `page-15.png` | `2-sous-groupes.md` | `[E2]` |
| p. 32 | `page-16.png` | `2-sous-groupes.md` | 0 écart |
| p. 33 | `page-17.png` | `2-sous-groupes.md` | 0 écart |
| p. 34 | `page-18.png` | `2-sous-groupes.md` | 0 écart |
| p. 35 | `page-19.png` | `2-sous-groupes.md` | 0 écart |
| p. 36 | `page-20.png` | `2-sous-groupes.md` | 0 écart |
| p. 37 | `page-21.png` | `2-sous-groupes.md` | `[E5]` |
| p. 38 | `page-22.png` | `2-sous-groupes.md` | 0 écart |
| p. 39 | `page-23.png` | `2-sous-groupes.md` | 0 écart |
| p. 40 | `page-24.png` | `2-sous-groupes.md` | 0 écart |
| p. 61 | `page-45.png` | `exercises-c1.ts`, `exercices.md` | 0 écart |
| p. 62 | `page-46.png` | `exercises-c1.ts`, `exercices.md` | 0 écart |
| p. 63 | `page-47.png` | `exercises-c1.ts`, `exercices.md` | `[E5]` |
| p. 64 | `page-48.png` | `exercises-c1.ts`, `exercices.md` | 0 écart |
| p. 65 | `page-49.png` | `exercises-c1.ts`, `exercices.md` | `[E5]` |
| p. 66 | `page-50.png` | `exercises-c1.ts`, `exercices.md` | `[E3]` |
| p. 67 | `page-51.png` | `exercises-c1.ts`, `exercices.md` | `[E4]`, `[E5]` |
| p. 68 | `page-52.png` | `exercises-c1.ts`, `exercices.md` | 0 écart |
| p. 69 | `page-53.png` | `exercises-c1.ts`, `exercices.md` | 0 écart |
| p. 70 | `page-54.png` | `exercises-c1.ts`, `exercices.md` | 0 écart |
