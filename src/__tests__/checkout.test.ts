import totalPrice from '..'

describe('Checkout for Unit Price', () => {
  it('0 for no product', () => {
    expect(totalPrice('')).toBe(0)
  })
  it('50 for A', () => {
    expect(totalPrice('A')).toBe(50)
  })
  it('30 for B', () => {
    expect(totalPrice('B')).toBe(30)
  })
  it('20 for C', () => {
    expect(totalPrice('C')).toBe(20)
  })
  it('15 for D', () => {
    expect(totalPrice('D')).toBe(15)
  })
})

describe('Checkout for Multiple Prices', () => {
  it('80 for AB', () => {
    expect(totalPrice('AB')).toBe(80)
  })
  it('115 for CDBA', () => {
    expect(totalPrice('CDBA')).toBe(115)
  })
  it('100 for AA', () => {
    expect(totalPrice('AA')).toBe(100)
  })

  it('130 for AAA', () => {
    expect(totalPrice('AAA')).toBe(130)
  })

  it('175 for AAABB', () => {
    expect(totalPrice('AAABB')).toBe(175)
  })

  it('190 for DABABA', () => {
    expect(totalPrice('DABABA')).toBe(190)
  })
})
