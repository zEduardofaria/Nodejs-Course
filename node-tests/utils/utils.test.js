const expected = require('expect')

const utils = require('./utils')

it('Should add two numbers', () => {
  const res = utils.add(33, 11)

  expected(res).toBe(44).toBeA('number')
})

it('Should square a number', () => {
  const res = utils.square(3)
  
  expected(res).toBe(9).toBeA('number')
})

it('Should expect some values', () => {
  // expected({ name: 'Eduardo' }).toNotEqual({ name: 'Eduardo' })
  // expected([1,2,3]).toExclude(4)
  expected({
    name: 'Eduardo',
    age: 22,
    location: 'Philadephia'
  }).toInclude({
    age: 22
  })
})

it('Should verify first and last name are set', () => {
  const user = {location: 'Betim', age: 22}
  const res = utils.setName(user, 'Eduardo Faria')

  expected(res).toInclude({
    firstName: 'Eduardo',
    lastName: 'Faria'
  })
})