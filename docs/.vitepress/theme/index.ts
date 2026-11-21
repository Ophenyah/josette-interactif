import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import 'katex/dist/katex.min.css'
import './custom.css'

import MathBlock from '../../../src/components/MathBlock.vue'
import ProofBlock from '../../../src/components/ProofBlock.vue'
import FoldNote from '../../../src/components/FoldNote.vue'
import PageRef from '../../../src/components/PageRef.vue'
import MathRef from '../../../src/components/MathRef.vue'
import GlossaryTerm from '../../../src/components/GlossaryTerm.vue'
import BookFootnote from '../../../src/components/BookFootnote.vue'
import CayleyTable from '../../../src/components/CayleyTable.vue'
import MicroChallenge from '../../../src/components/MicroChallenge.vue'
import ExerciseCard from '../../../src/components/ExerciseCard.vue'
import ExerciseChapterBar from '../../../src/components/ExerciseChapterBar.vue'
import DependencyGraph from '../../../src/components/DependencyGraph.vue'
import CayleyLab from '../../../src/components/labs/CayleyLab.vue'
import PermutationLab from '../../../src/components/labs/PermutationLab.vue'
import RootsUnityLab from '../../../src/components/labs/RootsUnityLab.vue'
import SubgroupLatticeLab from '../../../src/components/labs/SubgroupLatticeLab.vue'
import DirectSumLab from '../../../src/components/labs/DirectSumLab.vue'
import MorphismLab from '../../../src/components/labs/MorphismLab.vue'
import CayleyTheoremLab from '../../../src/components/labs/CayleyTheoremLab.vue'
import DirectProductLab from '../../../src/components/labs/DirectProductLab.vue'
import CosetsLagrangeLab from '../../../src/components/labs/CosetsLagrangeLab.vue'
import QuotientIsoLab from '../../../src/components/labs/QuotientIsoLab.vue'
import CyclicEulerLab from '../../../src/components/labs/CyclicEulerLab.vue'
import SymmetricCyclesLab from '../../../src/components/labs/SymmetricCyclesLab.vue'
import DihedralLab from '../../../src/components/labs/DihedralLab.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MathBlock', MathBlock)
    app.component('ProofBlock', ProofBlock)
    app.component('FoldNote', FoldNote)
    app.component('PageRef', PageRef)
    app.component('MathRef', MathRef)
    app.component('GlossaryTerm', GlossaryTerm)
    app.component('BookFootnote', BookFootnote)
    app.component('CayleyTable', CayleyTable)
    app.component('MicroChallenge', MicroChallenge)
    app.component('ExerciseCard', ExerciseCard)
    app.component('ExerciseChapterBar', ExerciseChapterBar)
    app.component('DependencyGraph', DependencyGraph)
    app.component('CayleyLab', CayleyLab)
    app.component('PermutationLab', PermutationLab)
    app.component('RootsUnityLab', RootsUnityLab)
    app.component('SubgroupLatticeLab', SubgroupLatticeLab)
    app.component('DirectSumLab', DirectSumLab)
    app.component('MorphismLab', MorphismLab)
    app.component('CayleyTheoremLab', CayleyTheoremLab)
    app.component('DirectProductLab', DirectProductLab)
    app.component('CosetsLagrangeLab', CosetsLagrangeLab)
    app.component('QuotientIsoLab', QuotientIsoLab)
    app.component('CyclicEulerLab', CyclicEulerLab)
    app.component('SymmetricCyclesLab', SymmetricCyclesLab)
    app.component('DihedralLab', DihedralLab)
  }
} satisfies Theme
