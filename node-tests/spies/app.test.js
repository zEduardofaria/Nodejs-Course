const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db)

  it('Should call the spy correctly', () => {
    var spy = expect.createSpy()
    spy('Eduardo', 22)
    expect(spy).toHaveBeenCalledWith('Eduardo', 22)
  })

  it('Should call saveUser with user object', () => {
    var email = 'z.eduardofaria@gmail.com'
    var password = '123abc'

    app.handleSignup(email, password)
    expect(db.saveUser).toHaveBeenCalledWith({email, password})
  }) 
})
