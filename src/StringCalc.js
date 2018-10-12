class StringCalc {

  add (dString) {
    let array = dString.split('\n').join().split(',').filter(i => isNaN(i) || i <= 1000)
    let negatives = array.filter(i => i < 0).toString()

    if(array.length === 0) return 0
    if (negatives) throw new Error('negatives not allowed: ' + negatives)
    if(dString.startsWith('//')) {
      let newDelim = array.splice(0,1).toString().slice(2)
      array = array.join('').split(newDelim)
    } 
    return array.map(Number).reduce((a, b) => a + b)
  }
  catch(error) {console.log(error)}
}
module.exports = StringCalc
