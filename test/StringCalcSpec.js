const StringCalc = require('../src/StringCalc')
const Gen = require('verify-it').Gen

describe('StringCalc', () => {
  verify.it('An empty string returns zero', () => {
    const stringCalc = new StringCalc()
    stringCalc.add('').should.eql(0)
  })

  verify.it('A single number returns the value', Gen.integer, (num) => {
    const stringCalc = new StringCalc()
    stringCalc.add(num).should.eql(num)
  })
  
})
