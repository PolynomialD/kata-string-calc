const StringCalc = require('../src/StringCalc')

describe('StringCalc', () => {
  verify.it('An empty string returns zero', () => {
    const stringCalc = new StringCalc()
    stringCalc.add('').should.eql(0)
  })
})
