# *Éléments de théorie des groupes* — Édition web interactive (v2)

Édition numérique autonome, fidèle et interactive des **Chapitres I, II et III** (*pp. 17–135*, 76 exercices, 13 laboratoires interactifs et carte des dépendances) de **Josette Calais**, *Éléments de théorie des groupes* (PUF, 1984), propulsée par **VitePress + Vue 3 + TypeScript + KaTeX strict**.

---

## 1. Lancement rapide (une seule commande)

Prérequis : **Node.js 22 LTS** et **npm**. Toutes les polices KaTeX et bibliothèques sont embarquées localement (aucun appel CDN à l'exécution ; le site fonctionne 100 % hors ligne).

### Mode développement interactif (HMR)
```bash
npm run docs:dev
```

### Construction statique + prévisualisation locale
```bash
npm run docs:build && npm run docs:preview
```
Le site est alors accessible sur `http://127.0.0.1:4173`.

---

## 2. Commandes de vérification et de tests

| Commande | Rôle |
| :--- | :--- |
| `npx tsc --noEmit` | Vérification typage TypeScript strict sur tout `src/`, `tests/` et `e2e/` |
| `npm run test` | Suite unitaire Vitest (noyau mathématique, tables du livre, registre, KaTeX, export) |
| `npm run test:coverage` | Suite unitaire avec rapport de couverture V8 |
| `npm run docs:build` | Build statique VitePress avec **KaTeX en mode strict** (`throwOnError: true`) |
| `npm run test:e2e` | Suite Playwright Chromium (`e2e/qa.spec.ts`) sur les 15 routes (Desktop/Mobile, Clair/Sombre, hors-ligne) |

---

## 3. Architecture du projet (`v2/`)

```text
v2/
├── CONVENTIONS.md                  # Contrats partagés (registre, composants, transcription, KaTeX strict)
├── RAPPORT.md                      # Bilan complet, portes de validation, notes d'édition 1984, captures
├── README.md                       # Ce guide
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts              # Navigation, recherche locale, plugin KaTeX strict
│   │   └── theme/
│   │       ├── index.ts            # Enregistrement global des composants et laboratoires Vue
│   │       └── custom.css          # Thème clair/sombre, responsive, styles des blocs sémantiques
│   ├── index.md                    # Préface & mode d'emploi
│   ├── glossaire.md                # Glossaire terminologique 1984 ↔ prépa actuelle
│   ├── dependances.md              # Architecture logique & explorateur de graphe
│   ├── chap1/                      # Chapitre I (pp. 17–70 : 4 sections de cours + 33 exercices)
│   ├── chap2/                      # Chapitre II (pp. 71–88 : 2 sections de cours + 10 exercices)
│   └── chap3/                      # Chapitre III (pp. 89–135 : 3 sections de cours + 33 exercices)
├── src/
│   ├── math/
│   │   ├── katex-macros.ts         # Table unique des macros KaTeX + renderSafeMarkdownMath échappé
│   │   └── groups.ts               # Noyau de calcul sur les groupes finis (axiomes, Sₙ, Dₙ, Q₈, quotients...)
│   ├── data/
│   │   ├── registry*.ts            # Registre unique de tous les énoncés, équations et tables
│   │   ├── book-tables*.ts         # Tables de Cayley / S₃ extraites de l'ouvrage
│   │   ├── glossary.ts             # Entrées des infobulles <GlossaryTerm>
│   │   └── exercises*.ts           # Base typée des 76 exercices (c1, c2, c3)
│   ├── components/
│   │   ├── MathBlock.vue, ProofBlock.vue, FoldNote.vue, PageRef.vue, MathRef.vue, GlossaryTerm.vue, BookFootnote.vue, CayleyTable.vue, MicroChallenge.vue
│   │   ├── DependencyGraph.vue
│   │   ├── ExerciseChapterBar.vue, ExerciseCard.vue
│   │   └── labs/*.vue              # 13 laboratoires génératifs branchés sur src/math/groups.ts
│   └── utils/
│       ├── exercise-export.ts      # Export épuré (contexte, énoncé, résolution étudiant, doutes, consigne) + JSON
│       └── exercise-store.ts       # Persistance localStorage réactive
├── tests/                          # Tests Vitest
└── e2e/                            # Tests Playwright + captures dans e2e/screenshots/
```

---

## 4. Guide pas à pas pour ajouter le Chapitre IV (ou suivant)

Pour étendre cette édition aux chapitres suivants de *Josette Calais* tout en conservant les garanties strictes :

1. **Extraction des planches scannées (`v2/.scans/`)**
   - Extraire chaque page PDF avec `pdftoppm -png -r 150 ...` et nommer les fichiers selon la convention `page-(p - 16).png` afin de conserver l'alignement exact avec la pagination du livre.

2. **Transcription fidèle & repères de page (`docs/chap4/*.md`)**
   - Lire chaque planche visuellement page par page.
   - Insérer `<PageRef :page="p" />` à chaque saut de page exact du livre.
   - Utiliser `<MathBlock id="4.X" kind="..." title="...">` et `<ProofBlock>` (toujours avec une **ligne vide** après la balise ouvrante et avant la balise fermante).
   - Poser `<span id="ref-eq-4-N"></span>` avant chaque équation numérotée `\tag{N}`.
   - Signaler toute coquille typographique de l'édition 1984 dans un `<FoldNote kind="edition" title="Note d’édition (texte de 1984) — ...">`.
   - Enrichir les preuves denses avec `:steps="..."` (avec `why`), ajouter des `<FoldNote kind="prepa|intuition|piege">`, `<MicroChallenge>`, `<GlossaryTerm>` et `<MathRef>`.

3. **Extension du registre (`src/data/registry-c4.ts` & `src/data/registry.ts`)**
   - Élargir le type `chapter` de `RegistryEntry` (`1 | 2 | 3 | 4`) dans `src/data/registry.ts` (et dans `DependencyGraph.vue` si souhaité).
   - Créer `src/data/registry-c4.ts` avec des `orderIndex` strictement croissants (ex. `900+`) et des `dependsOn` causaux.
   - Fusionner `REGISTRY_C4` dans `src/data/registry.ts`.

4. **Laboratoires interactifs (`src/components/labs/*.vue`)**
   - Compléter si besoin `src/math/groups.ts` avec les nouveaux algorithmes (avec tests unitaires dans `tests/groups.test.ts`).
   - Créer des composants Vue paramétrables utilisant **exclusivement** `renderMath` / `renderSafeMarkdownMath` de `src/math/katex-macros.ts` (jamais de `$...$` brut injecté dans le DOM).
   - Enregistrer chaque nouveau laboratoire dans `docs/.vitepress/theme/index.ts` et le monter dans la section Markdown correspondante.

5. **Exercices (`src/data/exercises-c4.ts` & `docs/chap4/exercices.md`)**
   - Élargir `chapter` dans `src/data/exercises.ts`, `src/utils/exercise-export.ts` et `src/components/ExerciseChapterBar.vue`.
   - Créer `src/data/exercises-c4.ts` avec les énoncés fidèles (`hintTex: ''` et `correctionTex: ''` si les corrigés sont confiés à un agent externe, ou rédigés le cas échéant) et les fusionner dans `EXERCISES`.
   - Créer `docs/chap4/exercices.md` avec `<ExerciseChapterBar chapter="4" />`, `<PageRef>` et `<ExerciseCard id="c4-eXX" />`.

6. **Navigation & Validation**
   - Ajouter la section du Chapitre IV dans `nav` et `sidebar` de `docs/.vitepress/config.mts`, puis mettre à jour `docs/index.md` et `docs/dependances.md`.
   - Étendre `tests/registry.test.ts` (nouveaux numéros d'énoncés, nouvelles pages, nouveaux exercices) et `e2e/qa.spec.ts` (nouvelles routes et laboratoires).
   - Exécuter :
     ```bash
     npx tsc --noEmit && npm run test:coverage && npm run docs:build && npx playwright test
     ```
