class StringCalc {

  add (dString) {
    if(dString === '') return 0
    let array = dString.split('\n').join().split(',').map(Number)
    return array.reduce((a, b) => {return a+b})
  }
}
module.exports = StringCalc
