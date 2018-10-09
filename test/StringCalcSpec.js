const StringCalc = require('../src/StringCalc')

describe('StringCalc', () => {
  verify.it('An empty string returns zero', () => {
    const stringCalc = new StringCalc()
    stringCalc.add('').should.eql(0)
  })

  verify.it('A single number returns the value', () => {
    const stringCalc = new StringCalc()
    stringCalc.add(1).should.eql(1)

  })

})
