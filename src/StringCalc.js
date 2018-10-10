class StringCalc {

  add (dString) {

    console.log('dString: ', dString)
    let array = dString.split(',').map(Number)
    console.log('array: ', array)
    let total = array.reduce((a, b) => {return a+b})
    console.log('total: ', total)
    if(dString === '') return 0
    else return total
  }
}
module.exports = StringCalc
