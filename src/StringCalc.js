class StringCalc {

  add (dString) {
    let array = dString.split('\n').join().split(',').map(Number)
    let negArray = array.filter(value => value < 0)
    let oneKArray = array.filter(value => value < 1001, 0)

    if(dString === '' || oneKArray.length === 0) return 0
    if (negArray.length > 0) {return 'negatives not allowed: ' + negArray.toString()}
    else {return oneKArray.reduce((a, b) => {return a+b})}
  }
}
module.exports = StringCalc
