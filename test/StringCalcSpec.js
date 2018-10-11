const StringCalc = require('../src/StringCalc')
const Gen = require('verify-it').Gen

describe('StringCalc', () => {
  verify.it('An empty string returns zero', () => {
    const stringCalc = new StringCalc()
    stringCalc.add('').should.eql(0)
  })

  verify.it('A single number returns the value', Gen.integerBetween(0,1000), (randomInt) => {
    const stringCalc = new StringCalc()
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
    const errorString = stringCalc.add('-1,2,-3')
    console.log(errorString)
    expect(errorString).to.throw()
  })

  verify.it('Numbers greater than 1000 are ignored', Gen.integerBetween(1001,9999999), (randomInt) => {
    const stringCalc = new StringCalc()
    randomInt = randomInt.toString()
    stringCalc.add(randomInt).should.eql(0)
  })

  verify.it('A single char delimiter can be defined on the first line', () => {
    const stringCalc = new StringCalc()
    stringCalc.add('//#\n8#4').should.eql(12)
  })

  verify.it('A multi char delimiter can be defined on the first line', () => {
    const stringCalc = new StringCalc()
    stringCalc.add('//###\n5###9').should.eql(14)
  })

})
