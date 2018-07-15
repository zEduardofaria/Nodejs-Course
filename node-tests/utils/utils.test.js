const expect = require('expect')

const utils = require('./utils')

describe('Utils', () => {
  describe('#add', () => {
    it('Should add two numbers', () => {
      const res = utils.add(33, 11)
    
      expect(res).toBe(44).toBeA('number')
    })
    
    it('Should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number')
        done()
      })
    })
  })
  
  describe('#square', () => {
    it('Should square a number', () => {
      const res = utils.square(3)
      
      expect(res).toBe(9).toBeA('number')
    })
    
    it('Should async square a number', (done) => {
      utils.squareAsync(3, (res) => {
        expect(res).toBe(9).toBeA('number')
        done()
      })
    })
  })
})


it('Should expect some values', () => {
  expect({
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

  expect(res).toInclude({
    firstName: 'Eduardo',
    lastName: 'Faria'
  })
})