
// add and raise function lexically bound and has access to amount and base variables

const makeAddFunction = amount => {
  const add = number => number + number
  return add
}

const makeExponentialFunction = base => {
  const raise = exponent => Math.pow(base, exponent)
  return raise
}

const addTenTo = makeAddFunction(10)
console.log(addTenTo(10))

const raiseThreeTo = makeExponentialFunction(3)
console.log(raiseThreeTo(2))
