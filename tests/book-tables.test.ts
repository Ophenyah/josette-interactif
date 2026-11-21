import { describe, expect, it } from 'vitest'
import { BOOK_TABLES_T1, S3_NOTATIONS } from '../src/data/book-tables'
import { checkGroupAxioms, composePerm } from '../src/math/groups'

describe('Vérification mathématique des tables transcrites (pp. 26–29)', () => {
  it('valide les tables abéliennes de Z/(2), Z/(3), Z/(4) et la table (11) de Klein', () => {
    for (const g of [
      BOOK_TABLES_T1.z2,
      BOOK_TABLES_T1.z3,
      BOOK_TABLES_T1.z4,
      BOOK_TABLES_T1.table11
    ]) {
      const r = checkGroupAxioms(g.table)
      expect(r.isGroup).toBe(true)
      expect(r.isAbelian).toBe(true)
      expect(r.isLatinSquare).toBe(true)
      expect(r.neutralIndex).toBe(0)
    }
  })

  it('valide la table (10) de S3 et sa correspondance cellule par cellule avec les permutations (1.15)', () => {
    const t10 = BOOK_TABLES_T1.table10
    const report = checkGroupAxioms(t10.table)
    expect(report.isGroup).toBe(true)
    expect(report.isAbelian).toBe(false)
    expect(report.isLatinSquare).toBe(true)

    const orderKeys = ['e', 'sigma1', 'sigma2', 'tau1', 'tau2', 'tau3'] as const
    const permList = orderKeys.map((k) => S3_NOTATIONS[k])
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        const composed = composePerm(permList[i], permList[j])
        const expectedIdx = permList.findIndex(
          (p) => p[0] === composed[0] && p[1] === composed[1] && p[2] === composed[2]
        )
        expect(t10.table[i][j]).toBe(expectedIdx)
      }
    }
  })

  it('valide la table (12) : carré latin avec neutre et inverses, mais non associative avec le témoin (ab)c != a(bc)', () => {
    const t12 = BOOK_TABLES_T1.table12.table
    const report = checkGroupAxioms(t12)
    expect(report.validEntries).toBe(true)
    expect(report.neutralIndex).toBe(0) // e
    expect(report.isLatinSquare).toBe(true)
    expect(report.hasAllInverses).toBe(true)
    expect(report.isAssociative).toBe(false)
    expect(report.isGroup).toBe(false)

    // Témoin exact de la p. 29 : e=0, a=1, b=2, c=3, d=4 -> (ab)c = dc = a (1) et a(bc) = ad = c (3)
    const ab = t12[1][2] // 4 (d)
    const bc = t12[2][3] // 4 (d)
    expect(ab).toBe(4)
    expect(bc).toBe(4)
    expect(t12[ab][3]).toBe(1) // a
    expect(t12[1][bc]).toBe(3) // c
    expect(t12[ab][3]).not.toBe(t12[1][bc])
  })
})
