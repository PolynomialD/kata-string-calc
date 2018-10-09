const StringCalc = require('../src/StringCalc')

describe('StringCalc', () => {
  verify.it('returns the input hello world', () => {
    const stringCalc = new StringCalc()
    stringCalc.input.should.eql('hello world')
  })
})
