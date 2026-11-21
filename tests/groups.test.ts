import { describe, expect, it } from 'vitest'
import {
  allSubgroups,
  center,
  checkEquivalenceCompatibility,
  checkGroupAxioms,
  checkHKequalsKH,
  checkInternalDirectSum,
  checkMorphism,
  composePerm,
  cyclicGroup,
  dihedralGroup,
  directProduct,
  elementOrder,
  fromTable,
  generatedSubgroup,
  isNormalSubgroup,
  isSubgroup,
  kleinGroup,
  leftCosets,
  quaternionGroup,
  quotientGroup,
  rightCosets,
  subgroupIndex,
  subgroupLattice,
  subsetProduct,
  symmetricGroup,
  translationPermutations,
  unitsModN
} from '../src/math/groups'
import { NON_ASSOC_SAMPLE } from '../src/data/book-tables'
import { renderMath } from '../src/math/katex-macros'

describe('Noyau mathématique des groupes finis', () => {
  it('valide les axiomes de groupe pour Z/(n), Klein V et S3', () => {
    for (const g of [cyclicGroup(2), cyclicGroup(4), cyclicGroup(6), kleinGroup()]) {
      const r = checkGroupAxioms(g.table)
      expect(r.isGroup).toBe(true)
      expect(r.isAbelian).toBe(true)
      expect(r.isLatinSquare).toBe(true)
      expect(r.assocWitness).toBeNull()
    }

    const s3 = symmetricGroup(3)
    const rs3 = checkGroupAxioms(s3.table)
    expect(rs3.isGroup).toBe(true)
    expect(rs3.isAbelian).toBe(false)
    expect(center(s3)).toEqual([0])
    expect(elementOrder(s3, 1)).toBe(3) // sigma_1
    expect(elementOrder(s3, 3)).toBe(2) // tau_1
  })

  it('détecte un contre-exemple explicite d’associativité sur une loi non associative', () => {
    const r = checkGroupAxioms(NON_ASSOC_SAMPLE.table)
    expect(r.isGroup).toBe(false)
    expect(r.isAssociative).toBe(false)
    expect(r.assocWitness).not.toBeNull()
    const [a, b, c] = r.assocWitness!
    const t = NON_ASSOC_SAMPLE.table
    expect(t[t[a][b]][c]).not.toBe(t[a][t[b][c]])
  })

  it('couvre S1, S2, S4, S5 et les tables invalides ou sans neutre', () => {
    const s1 = symmetricGroup(1)
    expect(checkGroupAxioms(s1.table).isGroup).toBe(true)

    const s2 = symmetricGroup(2)
    expect(checkGroupAxioms(s2.table).isGroup).toBe(true)

    const s4 = symmetricGroup(4)
    expect(s4.elements.length).toBe(24)
    const rs4 = checkGroupAxioms(s4.table)
    expect(rs4.isGroup).toBe(true)
    expect(rs4.isAbelian).toBe(false)

    const s5 = symmetricGroup(5)
    expect(s5.elements.length).toBe(120)
    const rs5 = checkGroupAxioms(s5.table)
    expect(rs5.isGroup).toBe(true)
    expect(rs5.isAbelian).toBe(false)
    expect(center(s5)).toEqual([0])
    expect(s5.elements).toContain('(1 2)')
    expect(s5.elements).toContain('(1 2 3 4 5)')
    const ordersInS5 = new Set(s5.elements.map((_, idx) => elementOrder(s5, idx)))
    expect(ordersInS5).toEqual(new Set([1, 2, 3, 4, 5, 6]))

    expect(() => symmetricGroup(0)).toThrow()
    expect(() => symmetricGroup(6)).toThrow()
    expect(() => cyclicGroup(0)).toThrow()

    // Table hors bornes
    const invalid = checkGroupAxioms([[0, 9], [1, 0]])
    expect(invalid.validEntries).toBe(false)
    expect(invalid.isGroup).toBe(false)

    // Table sans neutre (constante x*y = 0 sur {0, 1})
    const noNeutral = checkGroupAxioms([[0, 0], [0, 0]])
    expect(noNeutral.neutralIndex).toBeNull()
    expect(noNeutral.isLatinSquare).toBe(false)
    expect(noNeutral.isGroup).toBe(false)

    // elementOrder renvoie null si le neutre n'est jamais atteint
    const semi = fromTable({
      id: 'semi',
      name: 'Demi-groupe sans inverse',
      texName: 'M',
      elements: ['e', 'a'],
      table: [[0, 1], [1, 1]]
    })
    expect(semi.opSymbol).toBe('·')
    expect(semi.neutralIndex).toBe(0)
    expect(elementOrder(semi, 1)).toBeNull()
  })
})

describe('Constructeurs supplémentaires : (Z/nZ)×, D_n, Q_8 et produit direct', () => {
  it('construit (Z/8Z)× ≃ V et (Z/10Z)× ≃ Z/(4)', () => {
    expect(() => unitsModN(1)).toThrow()
    expect(() => unitsModN(3.5)).toThrow()

    const u8 = unitsModN(8)
    expect(u8.elements).toEqual(['1̄', '3̄', '5̄', '7̄'])
    expect(u8.neutralIndex).toBe(0)
    expect(checkGroupAxioms(u8.table).isGroup).toBe(true)
    expect(checkGroupAxioms(u8.table).isAbelian).toBe(true)
    expect(u8.elements.map((_, i) => elementOrder(u8, i))).toEqual([1, 2, 2, 2])
    const isoU8V = checkMorphism(u8, kleinGroup(), [0, 1, 2, 3])
    expect(isoU8V.isMorphism).toBe(true)
    expect(isoU8V.isBijective).toBe(true)

    const u10 = unitsModN(10)
    expect(u10.elements).toEqual(['1̄', '3̄', '7̄', '9̄'])
    expect(u10.neutralIndex).toBe(0)
    expect(checkGroupAxioms(u10.table).isGroup).toBe(true)
    expect(elementOrder(u10, 1)).toBe(4) // 3̄ engendre (Z/10Z)× : 3^0=1, 3^1=3, 3^2=9, 3^3=7
    const isoU10Z4 = checkMorphism(u10, cyclicGroup(4), [0, 1, 3, 2])
    expect(isoU10Z4.isMorphism).toBe(true)
    expect(isoU10Z4.isBijective).toBe(true)
  })

  it('construit D_n (D_3 ≃ S_3, D_4 d’ordre 8 et ses 10 sous-groupes, D_12 multi-chiffres)', () => {
    expect(() => dihedralGroup(2)).toThrow()

    const d3 = dihedralGroup(3)
    expect(d3.elements.length).toBe(6)
    expect(checkGroupAxioms(d3.table).isGroup).toBe(true)
    expect(checkGroupAxioms(d3.table).isAbelian).toBe(false)
    // D_3 -> S_3 via r -> sigma_1 (1), s -> tau_1 (3)
    // r^0=e(0)->0, r=1->1, r^2=2->2, s=3->3, sr=3*1=4 -> tau_1∘sigma_1 = tau_2 (4), sr^2=5 -> tau_3 (5)
    const isoD3S3 = checkMorphism(d3, symmetricGroup(3), [0, 1, 2, 3, 4, 5])
    expect(isoD3S3.isMorphism).toBe(true)
    expect(isoD3S3.isBijective).toBe(true)

    const d4 = dihedralGroup(4)
    expect(d4.elements).toEqual(['e', 'r', 'r²', 'r³', 's', 'sr', 'sr²', 'sr³'])
    const rD4 = checkGroupAxioms(d4.table)
    expect(rD4.isGroup).toBe(true)
    expect(rD4.isAbelian).toBe(false)
    expect(center(d4)).toEqual([0, 2]) // {e, r^2}
    // Vérification directe de sr^k s = r^{-k} et r^a · sr^b = sr^{b-a}
    expect(d4.table[d4.table[4][1]][4]).toBe(3) // s · r · s = r^3 = r^{-1}
    expect(d4.table[1][4]).toBe(7) // r · s = sr^3
    expect(d4.table[5][6]).toBe(1) // (sr) · (sr^2) = r^{2-1} = r

    const subsD4 = allSubgroups(d4)
    expect(subsD4.length).toBe(10)
    expect(subsD4.filter((s) => s.order === 1).length).toBe(1)
    expect(subsD4.filter((s) => s.order === 2).length).toBe(5)
    expect(subsD4.filter((s) => s.order === 4).length).toBe(3)
    expect(subsD4.filter((s) => s.order === 8).length).toBe(1)
    expect(subsD4.filter((s) => s.isNormal).length).toBe(6)
    expect(subsD4.filter((s) => !s.isNormal).length).toBe(4)

    const d12 = dihedralGroup(12)
    expect(d12.elements.length).toBe(24)
    expect(d12.texName).toBe('D_{12}')
    expect(d12.elements).toContain('r¹¹')
    expect(d12.elements).toContain('sr¹⁰')
    expect(checkGroupAxioms(d12.table).isGroup).toBe(true)
  })

  it('construit Q_8 non abélien dont tous les sous-groupes sont distingués', () => {
    const q8 = quaternionGroup()
    expect(q8.elements).toEqual(['1', '-1', 'i', '-i', 'j', '-j', 'k', '-k'])
    const rq8 = checkGroupAxioms(q8.table)
    expect(rq8.isGroup).toBe(true)
    expect(rq8.isAbelian).toBe(false)
    expect(center(q8)).toEqual([0, 1]) // {1, -1}

    // Relations des quaternions : i^2 = j^2 = k^2 = ijk = -1
    expect(q8.table[2][2]).toBe(1) // i^2 = -1
    expect(q8.table[4][4]).toBe(1) // j^2 = -1
    expect(q8.table[6][6]).toBe(1) // k^2 = -1
    expect(q8.table[2][4]).toBe(6) // ij = k
    expect(q8.table[4][2]).toBe(7) // ji = -k
    expect(q8.table[q8.table[2][4]][6]).toBe(1) // ijk = -1
    expect(q8.table[4][6]).toBe(2) // jk = i
    expect(q8.table[6][4]).toBe(3) // kj = -i
    expect(q8.table[6][2]).toBe(4) // ki = j
    expect(q8.table[2][6]).toBe(5) // ik = -j

    const subsQ8 = allSubgroups(q8)
    expect(subsQ8.length).toBe(6)
    expect(subsQ8.every((s) => s.isNormal)).toBe(true)
    expect(subsQ8.map((s) => s.order)).toEqual([1, 2, 4, 4, 4, 8])
  })

  it('construit le produit direct G_1 × G_2 (Z/(2)×Z/(2) ≃ V, Z/(2)×Z/(3) ≃ Z/(6))', () => {
    const empty = fromTable({
      id: 'empty',
      name: 'Vide',
      texName: '\\varnothing',
      elements: [],
      table: []
    })
    expect(() => directProduct(empty, cyclicGroup(2))).toThrow()

    const z2z2 = directProduct(cyclicGroup(2), cyclicGroup(2))
    expect(z2z2.elements.length).toBe(4)
    expect(checkGroupAxioms(z2z2.table).isGroup).toBe(true)
    const isoV = checkMorphism(z2z2, kleinGroup(), [0, 1, 2, 3])
    expect(isoV.isMorphism).toBe(true)
    expect(isoV.isBijective).toBe(true)

    const z2z3 = directProduct(cyclicGroup(2), cyclicGroup(3))
    expect(z2z3.elements.length).toBe(6)
    expect(checkGroupAxioms(z2z3.table).isGroup).toBe(true)
    // (0,0)->0, (0,1)->4, (0,2)->2, (1,0)->3, (1,1)->1, (1,2)->5 : (a mod 2, a mod 3) <-> a mod 6
    const z6 = cyclicGroup(6)
    const crtMap = z2z3.elements.map((_, idx) => {
      const a = Math.floor(idx / 3)
      const b = idx % 3
      for (let x = 0; x < 6; x++) {
        if (x % 2 === a && x % 3 === b) return x
      }
      return -1
    })
    const isoZ6 = checkMorphism(z2z3, z6, crtMap)
    expect(isoZ6.isMorphism).toBe(true)
    expect(isoZ6.isBijective).toBe(true)
  })
})

describe('Sous-groupes engendrés, treillis de Hasse et produit de parties', () => {
  it('calcule les clôtures engendrées et le treillis de Hasse de S_3, Z/(12), D_4 et Q_8', () => {
    const s3 = symmetricGroup(3)
    expect(generatedSubgroup(s3, [])).toEqual([0])
    expect(generatedSubgroup(s3, [1])).toEqual([0, 1, 2]) // <sigma_1>
    expect(generatedSubgroup(s3, [1, 5])).toEqual([0, 1, 2, 3, 4, 5]) // <sigma_1, tau_3> = S_3
    expect(() => generatedSubgroup(s3, [99])).toThrow()

    const latS3 = subgroupLattice(s3)
    expect(latS3.nodes.length).toBe(6)
    expect(latS3.edges.length).toBe(8)
    expect(latS3.nodes[0].minimalGenerators).toEqual([])
    expect(latS3.nodes[0].label).toBe('(e)')
    expect(latS3.nodes[5].minimalGenerators.length).toBe(2)

    const latZ12 = subgroupLattice(cyclicGroup(12))
    expect(latZ12.nodes.map((n) => n.order)).toEqual([1, 2, 3, 4, 6, 12])
    expect(latZ12.edges.length).toBe(7)
    expect(latZ12.nodes.every((n) => n.isNormal)).toBe(true)

    const latD4 = subgroupLattice(dihedralGroup(4))
    expect(latD4.nodes.length).toBe(10)
    expect(latD4.edges.length).toBe(15)
    // Aucune arête directe ne saute un niveau intermédiaire
    expect(latD4.edges.some((e) => e.from === latD4.nodes[0].id && e.to === latD4.nodes[9].id)).toBe(false)

    const latQ8 = subgroupLattice(quaternionGroup())
    expect(latQ8.nodes.length).toBe(6)
    expect(latQ8.edges.length).toBe(7)

    const latZ1 = subgroupLattice(cyclicGroup(1))
    expect(latZ1.nodes.length).toBe(1)
    expect(latZ1.edges).toEqual([])

    // Garde-fou |G| > 32 et structure non-groupe
    expect(() => allSubgroups(symmetricGroup(5))).toThrow()
    expect(() => subgroupLattice(symmetricGroup(5))).toThrow()
    expect(() => allSubgroups(NON_ASSOC_SAMPLE)).toThrow()
    expect(() =>
      allSubgroups(
        fromTable({
          id: 'empty',
          name: 'Vide',
          texName: '\\varnothing',
          elements: [],
          table: []
        })
      )
    ).toThrow()
  })

  it('vérifie HK ≠ KH dans S_3 (Remarque 1.46) et HK = KH (Proposition 1.47)', () => {
    const s3 = symmetricGroup(3)
    expect(subsetProduct(s3, [], [0, 1])).toEqual([])

    // H = <tau_1> = {e, tau_1}, K = <tau_2> = {e, tau_2}
    const rDiff = checkHKequalsKH(s3, [0, 3], [0, 4])
    expect(rDiff.hk).toEqual([0, 1, 3, 4])
    expect(rDiff.kh).toEqual([0, 2, 3, 4])
    expect(rDiff.equal).toBe(false)
    expect(rDiff.isSubgroup).toBe(false)

    // H = <sigma_1>, K = <tau_1> -> HK = KH = S_3
    const rSub = checkHKequalsKH(s3, [0, 1, 2], [0, 3])
    expect(rSub.hk).toEqual([0, 1, 2, 3, 4, 5])
    expect(rSub.kh).toEqual([0, 1, 2, 3, 4, 5])
    expect(rSub.equal).toBe(true)
    expect(rSub.isSubgroup).toBe(true)

    // Parties qui commutent sans être sous-groupes : A = B = {0, 1} dans Z/(6)
    const z6 = cyclicGroup(6)
    const rNotSub = checkHKequalsKH(z6, [0, 1], [0, 1])
    expect(rNotSub.equal).toBe(true)
    expect(rNotSub.isSubgroup).toBe(false)
    expect(isSubgroup(z6, [])).toBe(false)
    expect(isSubgroup(z6, [1, 2])).toBe(false)
  })

  it('vérifie les sommes directes internes dans Z/(6), Z/(12) et les contre-exemples', () => {
    const z6 = cyclicGroup(6)
    const dsZ6 = checkInternalDirectSum(z6, [0, 2, 4], [0, 3])
    expect(dsZ6.isDirectSum).toBe(true)
    expect(dsZ6.elementsCommute).toBe(true)
    expect(dsZ6.trivialIntersection).toBe(true)
    expect(dsZ6.spansGroup).toBe(true)
    expect(dsZ6.decompositions).not.toBeNull()
    expect(dsZ6.decompositions!.length).toBe(6)
    for (const d of dsZ6.decompositions!) {
      expect([0, 2, 4]).toContain(d.h)
      expect([0, 3]).toContain(d.k)
      expect((d.h + d.k) % 6).toBe(d.x)
    }

    const z12 = cyclicGroup(12)
    const dsZ12 = checkInternalDirectSum(z12, [0, 4, 8], [0, 3, 6, 9])
    expect(dsZ12.isDirectSum).toBe(true)
    expect(dsZ12.decompositions!.length).toBe(12)
    for (const d of dsZ12.decompositions!) {
      expect((d.h + d.k) % 12).toBe(d.x)
    }

    // Intersection non triviale {0, 6} dans Z/(12)
    const failInter = checkInternalDirectSum(z12, [0, 2, 4, 6, 8, 10], [0, 3, 6, 9])
    expect(failInter.isDirectSum).toBe(false)
    expect(failInter.intersection).toEqual([0, 6])
    expect(failInter.trivialIntersection).toBe(false)
    expect(failInter.decompositions).toBeNull()

    // Somme qui n'engendre pas tout Z/(12)
    const failSpan = checkInternalDirectSum(z12, [0, 4, 8], [0, 6])
    expect(failSpan.isDirectSum).toBe(false)
    expect(failSpan.trivialIntersection).toBe(true)
    expect(failSpan.spansGroup).toBe(false)
    expect(failSpan.decompositions).toBeNull()

    // S_3 = <sigma_1><tau_1> mais non commutatif -> pas somme directe
    const s3 = symmetricGroup(3)
    const failComm = checkInternalDirectSum(s3, [0, 1, 2], [0, 3])
    expect(failComm.isDirectSum).toBe(false)
    expect(failComm.elementsCommute).toBe(false)
    expect(failComm.nonCommutingPair).not.toBeNull()
    expect(failComm.trivialIntersection).toBe(true)
    expect(failComm.spansGroup).toBe(true)
  })
})

describe('Classes modulo H, normalité, morphismes, compatibilité et quotient', () => {
  it('calcule classes à droite/gauche, indice et normalité (Exemple 2.4)', () => {
    const s3 = symmetricGroup(3)
    const hTau3 = [0, 5] // {e, tau_3}
    const rCosets = rightCosets(s3, hTau3)
    const lCosets = leftCosets(s3, hTau3)

    expect(subgroupIndex(s3, hTau3)).toBe(3)
    expect(isNormalSubgroup(s3, hTau3)).toBe(false)
    expect(rCosets.map((c) => c.elements)).toEqual([
      [0, 5],
      [1, 3],
      [2, 4]
    ])
    expect(lCosets.map((c) => c.elements)).toEqual([
      [0, 5],
      [1, 4],
      [2, 3]
    ])

    const hSigma = [0, 1, 2]
    expect(subgroupIndex(s3, hSigma)).toBe(2)
    expect(isNormalSubgroup(s3, hSigma)).toBe(true)
    expect(rightCosets(s3, hSigma).map((c) => c.elements)).toEqual([
      [0, 1, 2],
      [3, 4, 5]
    ])
    expect(leftCosets(s3, hSigma).map((c) => c.elements)).toEqual([
      [0, 1, 2],
      [3, 4, 5]
    ])

    expect(() => rightCosets(s3, [0, 1])).toThrow()
    expect(isNormalSubgroup(s3, [0, 1])).toBe(false)

    // Groupe avec neutralIndex !== 0
    const shiftedZ2 = fromTable({
      id: 'shifted-z2',
      name: 'Z2 décalé',
      texName: 'Z_2',
      elements: ['1̄', '0̄'],
      neutralIndex: 1,
      table: [[1, 0], [0, 1]]
    })
    const cos = rightCosets(shiftedZ2, [1])
    expect(cos[0]).toEqual({ representative: 1, elements: [1] })
    expect(cos[1]).toEqual({ representative: 0, elements: [0] })
  })

  it('diagnostique morphismes valides et invalides (noyau, image, témoins)', () => {
    const z6 = cyclicGroup(6)
    const z3 = cyclicGroup(3)
    const z2 = cyclicGroup(2)
    const z4 = cyclicGroup(4)

    const proj = checkMorphism(z6, z3, [0, 1, 2, 0, 1, 2])
    expect(proj.isMorphism).toBe(true)
    expect(proj.failingPairs).toEqual([])
    expect(proj.kernel).toEqual([0, 3])
    expect(proj.image).toEqual([0, 1, 2])
    expect(proj.isInjective).toBe(false)
    expect(proj.isSurjective).toBe(true)
    expect(proj.isBijective).toBe(false)

    const inj = checkMorphism(z2, z4, [0, 2])
    expect(inj.isMorphism).toBe(true)
    expect(inj.kernel).toEqual([0])
    expect(inj.image).toEqual([0, 2])
    expect(inj.isInjective).toBe(true)
    expect(inj.isSurjective).toBe(false)
    expect(inj.isBijective).toBe(false)

    // Bijection V -> Z/(4) qui n'est PAS un morphisme
    const badBij = checkMorphism(kleinGroup(), z4, [0, 1, 2, 3])
    expect(badBij.isMorphism).toBe(false)
    expect(badBij.isBijective).toBe(true)
    expect(badBij.failingPairs.length).toBeGreaterThan(0)
    for (const f of badBij.failingPairs) {
      expect(f.fxy).not.toBe(f.fxfy)
    }

    expect(() => checkMorphism(z2, z4, [0])).toThrow()
    expect(() => checkMorphism(z2, z4, [0, 9])).toThrow()
  })

  it('teste la compatibilité (7), (7\') et (8) modulo sous-groupe normal vs non normal', () => {
    const s3 = symmetricGroup(3)

    // Sous-groupe normal <sigma_1> : compatible à droite et à gauche
    const classNormal = [0, 0, 0, 1, 1, 1]
    const repNormal = checkEquivalenceCompatibility(s3, classNormal)
    expect(repNormal.rightCompatible).toBe(true)
    expect(repNormal.leftCompatible).toBe(true)
    expect(repNormal.isCompatible).toBe(true)
    expect(repNormal.failingWitnesses).toEqual([])

    // Classes à droite R_H pour H = <tau_3> : compatible à droite uniquement (Prop. 2.23)
    const rCos = rightCosets(s3, [0, 5])
    const classRight = Array<number>(6).fill(0)
    rCos.forEach((c, idx) => c.elements.forEach((el) => (classRight[el] = idx)))
    const repRight = checkEquivalenceCompatibility(s3, classRight)
    expect(repRight.rightCompatible).toBe(true)
    expect(repRight.leftCompatible).toBe(false)
    expect(repRight.isCompatible).toBe(false)
    expect(repRight.failingWitnesses.length).toBeGreaterThan(0)
    expect(repRight.failingWitnesses.every((w) => w.rightOk && !w.leftOk)).toBe(true)

    // Classes à gauche _H R pour H = <tau_3> : compatible à gauche uniquement
    const lCos = leftCosets(s3, [0, 5])
    const classLeft = Array<number>(6).fill(0)
    lCos.forEach((c, idx) => c.elements.forEach((el) => (classLeft[el] = idx)))
    const repLeft = checkEquivalenceCompatibility(s3, classLeft)
    expect(repLeft.rightCompatible).toBe(false)
    expect(repLeft.leftCompatible).toBe(true)
    expect(repLeft.isCompatible).toBe(false)
    expect(repLeft.failingWitnesses.length).toBeGreaterThan(0)
    expect(repLeft.failingWitnesses.every((w) => w.leftOk && !w.rightOk)).toBe(true)

    // Partition arbitraire ni à droite ni à gauche (supporte aussi des chaînes)
    const repArb = checkEquivalenceCompatibility(s3, ['A', 'A', 'B', 'B', 'B', 'B'])
    expect(repArb.rightCompatible).toBe(false)
    expect(repArb.leftCompatible).toBe(false)
    expect(repArb.isCompatible).toBe(false)

    expect(() => checkEquivalenceCompatibility(s3, [0, 1])).toThrow()
  })

  it('construit le groupe quotient S_3 / <sigma_1> ≃ Z/(2) et D_4 / Z(D_4) ≃ V', () => {
    const s3 = symmetricGroup(3)
    const qS3 = quotientGroup(s3, [0, 1, 2])
    expect(qS3.elements.length).toBe(2)
    expect(checkGroupAxioms(qS3.table).isGroup).toBe(true)
    const isoZ2 = checkMorphism(qS3, cyclicGroup(2), [0, 1])
    expect(isoZ2.isMorphism).toBe(true)
    expect(isoZ2.isBijective).toBe(true)

    // Quotient par sous-groupe non distingué -> erreur explicite
    expect(() => quotientGroup(s3, [0, 3])).toThrow()

    // Quotient trivial et total (pour couvrir toutes les formes d'étiquettes)
    expect(quotientGroup(s3, [0]).elements.length).toBe(6)
    expect(quotientGroup(s3, [0, 1, 2, 3, 4, 5]).elements.length).toBe(1)

    // D_4 / Z(D_4) ≃ V
    const d4 = dihedralGroup(4)
    const qD4 = quotientGroup(d4, center(d4))
    expect(qD4.elements.length).toBe(4)
    expect(checkGroupAxioms(qD4.table).isGroup).toBe(true)
    expect(qD4.elements.map((_, i) => elementOrder(qD4, i))).toEqual([1, 2, 2, 2])
    const isoKlein = checkMorphism(qD4, kleinGroup(), [0, 1, 2, 3])
    expect(isoKlein.isMorphism).toBe(true)
    expect(isoKlein.isBijective).toBe(true)
  })

  it('calcule les permutations de translation (Cayley) à gauche et à droite', () => {
    const s3 = symmetricGroup(3)
    const left = translationPermutations(s3, 'left')
    const right = translationPermutations(s3, 'right')

    expect(translationPermutations(s3)).toEqual(left)
    expect(left.length).toBe(6)
    expect(right.length).toBe(6)

    for (let g1 = 0; g1 < 6; g1++) {
      // Chaque translation est bien une permutation de {0..5}
      expect(new Set(left[g1]).size).toBe(6)
      expect(new Set(right[g1]).size).toBe(6)
      for (let g2 = 0; g2 < 6; g2++) {
        // tau_{g1} o tau_{g2} = tau_{g1 g2} (Lemme 1.77)
        expect(composePerm(left[g1], left[g2])).toEqual(left[s3.table[g1][g2]])
        // delta_{g1} o delta_{g2} = delta_{g2 g1} (Remarque 1.76 3°)
        expect(composePerm(right[g1], right[g2])).toEqual(right[s3.table[g2][g1]])
      }
    }

    // Sur S_3 non abélien, g -> delta_g n'est pas un morphisme
    expect(composePerm(right[1], right[3])).not.toEqual(right[s3.table[1][3]])
    expect(() => translationPermutations(s3, 'invalid' as 'left')).toThrow()
  })

  it('produit des expressions KaTeX strictes valides pour tous les constructeurs et treillis', () => {
    const groups = [
      unitsModN(8),
      dihedralGroup(4),
      quaternionGroup(),
      directProduct(cyclicGroup(2), cyclicGroup(3)),
      symmetricGroup(5),
      quotientGroup(symmetricGroup(3), [0, 1, 2])
    ]
    for (const g of groups) {
      expect(() => renderMath(g.texName)).not.toThrow()
      expect(() => renderMath(g.opTex)).not.toThrow()
      for (const tex of g.elementTex.slice(0, 10)) {
        expect(() => renderMath(tex)).not.toThrow()
      }
    }
    for (const node of allSubgroups(dihedralGroup(4))) {
      expect(() => renderMath(node.texLabel)).not.toThrow()
    }
  })
})
