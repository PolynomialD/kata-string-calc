class StringCalc {

  add (dString) {
    let array = dString.split('\n').join().split(',').map(Number)
    let negArray = array.filter(value => value < 0)
    
    if(dString === '') return 0
    if (negArray.length > 0) {return 'negatives not allowed: ' + negArray.toString()}
    else {return array.reduce((a, b) => {return a+b})}
  }
}
module.exports = StringCalc
