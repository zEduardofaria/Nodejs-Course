const utils = require('./utils')

it('should add two numbers', () => {
  const res = utils.add(33, 11)
  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}`)
  }
})

it('should square a number', () => {
  const res = utils.square(3)
  if (res !== 4) {
    throw new Error(`Expected 4, but got ${res}`)
  }
})