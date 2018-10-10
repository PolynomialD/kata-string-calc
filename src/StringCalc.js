class StringCalc {

  add (dString) {
    let array = []
    if(dString === '') return 0
    if (dString.includes(',')){
      array = dString.split(',').map(Number)
      return array.reduce((a, b) => {return a+b})
    }
    if (dString.includes('\n')){
      array = dString.split('\n').map(Number)
      return array.reduce((a, b) => {return a+b})
    } else {
        return parseInt(dString)
      }
  }
}
module.exports = StringCalc
