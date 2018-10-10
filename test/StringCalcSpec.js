const StringCalc = require('../src/StringCalc')
const Gen = require('verify-it').Gen

// const randomNumber = Math.floor((Math.random() * 100000000) * (Math.random())).toString(10)

// const randomDelimitedNumber = () => {
//   let delim = randomNumber.split('').join(',')
//   return delim
//   console.log('delimitedNumber: ', delim)
// }

// const total = () => {
//   let number = randomNumber.split('').map(Number)
//   let total = number.reduce((a, b) => {return a+b})
//   return total
//   console.log('total: ', total)
// }

// const getRandomInt = (max) => {
//   return Math.floor(Math.random() * Math.floor(max))
// }

describe('StringCalc', () => {
  verify.it('An empty string returns zero', () => {
    const stringCalc = new StringCalc()
    stringCalc.add('').should.eql(0)
  })

  verify.it('A single number returns the value', Gen.integer, (randomInt) => {
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

})
