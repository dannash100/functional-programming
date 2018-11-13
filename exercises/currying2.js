const R = require('ramda')

const curry2 = (fn) => {
  return (firstArg) => {
    return (secondArg) => {
      return fn(firstArg, secondArg)
    }
  }
}

const checkType = curry2((typeDef, actualType) => {
  if (R.is(typeDef, actualType)) {
    return typeDef.name
  } else {
    throw new TypeError(`Type mismatch. Expected [${typeDef.name}] but found [${typeof actualType}] `)
  }
})

console.log(checkType(Number)(22))
console.log(checkType(String)(22))
