class StringCalc {

  add (dString) {
    let array = dString.split('\n').join().split(',')
    console.log('array:', array)
    let negArray = array.filter(value => value < 0)
    console.log('negArray:', negArray)

    let newDelimString = dString.substring(0,2)

    if(newDelimString === '//') {
      let newDelim = dString[2]
      console.log('newDelim:', newDelim)
      let string = array.splice(0,1).join()
      array = array.join().split('')
      console.log('string:', string)
      console.log('array:', array)

    }
    array = array.map(Number)
    console.log('array:', array)

    let oneKArray = array.filter(value => value < 1001, 0)

    console.log('oneKArray:', oneKArray)
    console.log('dString:', dString)
    console.log('newDelimString:', newDelimString)


    if (dString === '' || oneKArray.length === 0) return 0
    if (negArray.length > 0) {
      return 'negatives not allowed: ' + negArray.toString()
    } else {
        return oneKArray.reduce((a, b) => a + b)
      }
  }
}
module.exports = StringCalc
