# Conventions partagées — *Éléments de théorie des groupes* (v2)

Ce document fige les **6 contrats partagés** entre tous les rôles du projet. Seul l'orchestrateur peut le modifier après validation du Jalon 0.

---

## 1. Registre des énoncés (`src/data/registry.ts`)

Un registre unique recense tous les énoncés numérotés, notations, équations et tables du livre :

- `id`: identifiant stable URL-safe (ex. `"1.1"`, `"1.9-1"`, `"1.9-2"`, `"eq-1-5"`, `"table-10"`, `"2.12"`). Note : les deux *Remarques (1.9)* du livre portent les ids `"1.9-1"` (p. 19) et `"1.9-2"` (p. 21), tout en conservant `label: "Remarque (1.9)"` (avec précision `[2e occurrence]` dans l'aperçu de `"1.9-2"`).
- `label`: intitulé exact imprimé dans l'ouvrage (ex. `"Définition (1.3)"`, `"Théorème (2.9) — Théorème de Lagrange"`).
- `shortLabel`: forme compacte (ex. `"(1.3)"`, `"(2.9)"`).
- `kind`: `'def' | 'not' | 'thm' | 'prop' | 'cor' | 'lem' | 'rem' | 'ex' | 'eq' | 'table'`.
- `chapter`: `1 | 2`.
- `section`: ex. `"I § 1 B"`.
- `page`: numéro de page du livre de 1984 (`17` à `88`).
- `route`: route VitePress cible (ex. `"/chap1/1-notion-de-groupe"` ou `"/pilote"` pendant le Jalon 0).
- `anchor`: ancre HTML cible (`"ref-" + id`).
- `orderIndex`: entier strictement croissant reflétant l'ordre exact d'apparition dans le livre (utilisé pour l'export d'exercices afin de lister uniquement les résultats **déjà établis** avant l'exercice considéré).
- `summaryTex`: résumé ou énoncé fidèle en Markdown + LaTeX (utilisant uniquement les macros communes) affiché dans l'infobulle `<MathRef />` au survol.
- `dependsOn`: liste des `id` dont cet énoncé dépend directement (alimente la carte des dépendances).

---

## 2. Composants sémantiques Vue (dans les fichiers `.md`)

Tous les composants sont enregistrés globalement dans `docs/.vitepress/theme/index.ts`.

**Règle critique VitePress/Markdown** : toujours laisser **une ligne vide après la balise ouvrante et avant la balise fermante** d'un composant contenant du Markdown ou des formules `$...$`/`$$...$$` dans son slot (sinon `markdown-it` traite le contenu comme du HTML brut et ne compile pas les formules).

Composants disponibles :
- `<PageRef :page="18" />` : badge discret indiquant le passage à la page `18` du livre de 1984.
- `<MathBlock id="1.3" kind="def" title="Définition (1.3)"> ... </MathBlock>` : encadré typé (`def`, `not`, `thm`, `prop`, `cor`, `lem`, `rem`, `ex`), pose l'ancre `#ref-1.3` et un bouton de lien permanent.
- `<ProofBlock :steps="[...]"> ... </ProofBlock>` : encadré de démonstration terminé par `∎`. Optionnellement, la prop `steps` (`Array<{ title: string; body: string; why?: string }>`) active un mode « Lecture pas à pas » avec pastilles « Pourquoi cette étape ? ».
- `<FoldNote kind="prepa" title="..."> ... </FoldNote>` : encadré replié par défaut (`kind`: `'prepa' | 'intuition' | 'piege' | 'edition' | 'indice' | 'correction'`). Le `title` peut contenir du LaTeX `$...$` (rendu via `renderSafeMarkdownMath`).
- `<MathRef id="1.2">la remarque (1.2)</MathRef>` (ou auto-fermant `<MathRef id="1.2" />`) : lien cliquable vers `#ref-1.2` + **infobulle d'aperçu au survol / focus clavier / tap mobile**.
- `<GlossaryTerm id="element-unite">élément unité</GlossaryTerm>` : terme souligné discrètement avec infobulle de définition moderne (adaptée prépa 1re année).
- `<BookFootnote num="1" text="..." />` : note de bas de page de l’édition originale de 1984 avec infobulle au survol / clic (à rappeler aussi en bas de page).
- `<CayleyTable :table="..." caption="..." />` : affichage accessible de table de Cayley rendue via KaTeX.
- `<MicroChallenge title="..." hint="..."> ... </MicroChallenge>` : défi d'exploration placé *avant* un théorème majeur, avec réponse dépliable.
- `<CayleyLab ... />` (et futurs laboratoires dans `src/components/labs/`) : laboratoires génératifs branchés sur `src/math/groups.ts`.
- `<ExerciseChapterBar chapter="1" />` : barre d'avancement, filtre/export en lot vers agent correcteur, sauvegarde/restauration JSON et interrupteur « Mode entraînement (masquer les corrections) ».
- `<ExerciseCard id="c1-e03" />` : fiche d'exercice fidèle + atelier de rédaction sécurisé + export vers agent correcteur.

**Interdit** : entourer du Markdown ou du LaTeX par des balises `<div>` ou `<span>` HTML brutes.

---

## 3. Règles de transcription fidèle

1. **Lecture sur scan uniquement** : toute transcription provient de la lecture visuelle des images `.scans/page-XX.png` (`page n` du PDF = `page n + 16` du livre). Ne jamais recopier de mémoire ni copier aveuglément la v1.
2. **Mot à mot** : reproduire exactement les énoncés, démonstrations, exemples, numérotations et l'ordre du texte de 1984.
3. **Typographie conservée** : conserver les italiques, gras et notations d'époque (« entiers rationnels », $\frac{\mathbb{Z}}{(n)}$ via `\Zn{n}`, $(e)$, « sous-groupe propre », « élément unité », « symétrisable », « permutables »). Toute explication moderne va dans `<FoldNote kind="prepa">` ou `<GlossaryTerm>`, jamais à la place du texte.
4. **Repères de page** : placer `<PageRef :page="X" />` à chaque changement de page exact du livre.
5. **Coquilles corrigées** : toute correction typographique d'une coquille du livre de 1984 doit être accompagnée d'un `<FoldNote kind="edition">` citant exactement ce qui était imprimé. En cas d'ambiguïté sur un symbole scanné, le signaler en Note d'édition et dans `RAPPORT.md`.

---

## 4. Règles LaTeX & table unique des macros (`src/math/katex-macros.ts`)

- **Un seul pipeline** : KaTeX compilé au build en **mode strict** (`throwOnError: true`, `strict` bloquant sauf `unicodeTextInMathMode`), avec les polices bundlées localement (`katex/dist/katex.min.css`).
- **Macros autorisées** (définies dans `KATEX_MACROS`) : `\Ker`, `\Im`, `\card`, `\id`, `\GL`, `\SL`, `\pgcd`, `\ppcm`, `\cl`, `\Zn{#1}`, `\Z`, `\N`, `\Q`, `\R`, `\C`, plus les macros LaTeX standard supportées nativement par KaTeX (`\mathscr`, `\operatorname`, `\mathbb`, `\dfrac`, `\leqslant`, `\geqslant`, `\simeq`, etc.). Ne pas utiliser `\xmapsto` ni `\tag` en dehors des équations numérotées du livre.
- **Composants dynamiques** : utiliser exclusivement `renderMath(tex, displayMode)` ou `renderSafeMarkdownMath(md)` de `src/math/katex-macros.ts`. Ne jamais injecter de `$ ... $` brut dans un template HTML ni utiliser `v-html` sur une saisie utilisateur non échappée.
- **Syntaxe Markdown** : pas de ligne vide à l'intérieur de `$$...$$`, pas d'espace immédiatement après `$` ouvrant ni avant `$` fermant. Toujours protéger `\{` et `\}` pour les ensembles en LaTeX.

---

## 5. Propriété des fichiers (pour éviter tout conflit en parallèle)

- **Architecte** (seul autorisé à modifier avec accord de l'orchestrateur) : `package.json`, `tsconfig.json`, `vitest.config.ts`, `playwright.config.ts`, `CONVENTIONS.md`, `docs/.vitepress/**`, `src/math/katex-macros.ts`, `src/components/*.vue` (hors `labs/`), `src/data/registry.ts` (schéma), `src/data/glossary.ts` (schéma).
- **Transcripteurs (T1–T5)** : chacun ses pages dans `docs/chap1/` ou `docs/chap2/`, sa tranche d'entrées de registre/tables à fusionner dans `src/data/registry.ts`, `src/data/book-tables.ts` et `src/data/exercises.ts`.
- **Relecteurs de fidélité** : lecture seule sur tout le dépôt ; produisent un rapport d'écarts remis à l'orchestrateur.
- **Auteur pédagogique** : ajoute `<FoldNote>`, `<GlossaryTerm>`, `steps` de `<ProofBlock>`, indices et corrections dans les pages validées au Jalon 1 sans modifier une seule phrase du texte original.
- **Ingénieur mathématique et laboratoires** : `src/math/groups.ts` (et modules associés), `src/components/labs/*.vue`, `src/components/DependencyGraph.vue`, `tests/*.test.ts`.
- **Ingénieur atelier d'exercices** : `src/utils/exercise-export.ts`, `src/components/ExerciseCard.vue`, `src/components/ExerciseChapterBar.vue`, `src/data/exercises.ts` (enrichissement des `upToOrderIndex`).
- **Vérificateur QA** : `e2e/*.spec.ts` et `tests/*.test.ts` (ne modifie pas les sources applicatives).

---

## 6. Données mathématiques transcrites

- Toute table de Cayley, permutation ou table d'opération finie extraite du livre est stockée comme donnée typée dans `src/data/book-tables.ts` (jamais dupliquée en dur dans les composants UI).
- Chaque table est soumise à des tests Vitest au Jalon 1 vérifiant ses propriétés annoncées (associativité / non-associativité, neutre, inverses, commutativité, produits de permutations).
