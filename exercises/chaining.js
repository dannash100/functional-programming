const _ = require('lodash')

const names = [
  'alonzo church',
  'Haskell curry',
  'stephen_kleene',
  'John Von Neumann',
  'stephen_kleene'
]

const isValid = val => !_.isUndefined(val) && !_.isNull(val)

let result = _.chain(names)
  .filter(isValid)
  .map(s => s.replace(/_/, ' '))
  .uniq()
  .map(_.startCase)
  .sort()
  .value()

console.log(result)
