class StringCalc {

  add (dString) {
    let array = dString.split('\n').join().split(',')
    let negArray = array.filter(value => value < 0)
    let newDelimString = dString.substring(0,2)

    if(newDelimString === '//') {
      let newDelim = []
      for(let i=2; isNaN(dString[i]); i++) {
        if (isNaN(dString[i])) {newDelim.push(dString[i])}
      }
      newDelim = newDelim.join('')
      array.splice(0,1)
      array = array.join(',').split(newDelim)
    }
    array = array.map(Number)
    let oneKArray = array.filter(value => value < 1001, 0)

    if (dString === '' || oneKArray.length === 0) return 0
    if (negArray.length > 0) {
      return 'negatives not allowed: ' + negArray.toString()
    } else {
        return oneKArray.reduce((a, b) => a + b)
      }
  }
}
module.exports = StringCalc

