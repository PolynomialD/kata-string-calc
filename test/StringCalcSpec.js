const StringCalc = require('../src/StringCalc')
const Gen = require('verify-it').Gen

describe('StringCalc', () => {
  verify.it('An empty string returns zero', () => {
    const stringCalc = new StringCalc()
    stringCalc.add('').should.eql(0)
  })

  verify.it('A single number returns the value', Gen.integer, (randomInt) => {
    const stringCalc = new StringCalc()
    randomInt = Math.abs(randomInt)
    let stringInt = randomInt.toString()
    stringCalc.add(stringInt).should.eql(randomInt)
  })

  verify.it('Two numbers, comma delimited, returns the sum', () => {
    const stringCalc = new StringCalc()
    stringCalc.add('20,30').should.eql(50)
  })

  verify.it('Two numbers, newline delimited, returns the sum', () => {
    const stringCalc = new StringCalc()
    stringCalc.add('2\n4').should.eql(6)
  })

  verify.it('Three numbers, delimited either way, returns the sum', () => {
    const stringCalc = new StringCalc()
    stringCalc.add('1\n2,3\n4').should.eql(10)
  })

  verify.it('Negative numbers throw an exception with the message', () => {
    const stringCalc = new StringCalc()
    stringCalc.add('-1,2,-3').should.eql('negatives not allowed: -1,-3')
  })

})
