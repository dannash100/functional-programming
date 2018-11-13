# functional-programming
notes and experimentation with functional programming
*Following Luis Atencio - Functional Programming in javascript (2016, Manning)*

## techniques

### closures

*also known as static or lexical scope*

- closures form around object and function declarations permitting the access of information declared in the enclosing function
- closure is a data structure that binds a function to its enviroment at the moment it is declared.
- useful for higher-order functions, event-handling and callbacks.

## lodash

### methods

- ```_.uniq``` throw away duplicates
- ```_.startCase``` Capitalize first letters
- ```_.isNull, _.isUndefined```

### chaining

*see chaining.js*

- ```_.chain(params)``` to begin chain
- ```.value``` to complete
