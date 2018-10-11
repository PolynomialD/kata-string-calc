class StringCalc {

  add (dString) {
    let array = dString.split('\n').join().split(',')
    let negArray = array.filter(value => value < 0)
    let newDelim = ''

    if (negArray.length > 0) return 'negatives not allowed: ' + negArray.toString()

    if(dString.startsWith('//')) {
      for(let i=2; isNaN(dString[i]); i++) {
        if (isNaN(dString[i])) {newDelim += dString[i]}
      }
      array.splice(0,1)
      array = array.join(',').split(newDelim)
    }
    array = array.map(Number)
    let oneKArray = array.filter(value => value < 1001, 0)

    if (dString === '' || oneKArray.length === 0) return 0
    else return oneKArray.reduce((a, b) => a + b)
  }
}
module.exports = StringCalc
