class StringCalc {

  add (dString) {
    let array = dString.split('\n').join().split(',').filter(i => isNaN(i) || i <= 1000)
    let negArray = array.filter(value => value < 0)

    if (array.length === 0) return 0
    if (negArray.length > 0) throw new Error('negatives not allowed: ' + negArray.toString())
    if(dString.startsWith('//')) {
      let newDelim = ''
      for(let i=2; isNaN(dString[i]); i++) {
        if (isNaN(dString[i])) {newDelim += dString[i]}
      }
      console.log(array)
      array.splice(0,1)
      console.log(array)
      array = array.join('').split(newDelim)
    }
    return array.map(Number).reduce((a, b) => a + b)
  }
  catch(error) {console.log(error)}
}
module.exports = StringCalc
