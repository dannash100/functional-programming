const R = require('ramda')

const checkType = R.curry((typeDef, actualType) => {
  if (R.is(typeDef, actualType)) {
    return typeDef.name
  } else {
    throw new TypeError(`Type mismatch. Expected [${typeDef.name}] but found [${typeof actualType}]`)
  }
})

console.log(checkType(Number)(22))
console.log(checkType(String)(22))
