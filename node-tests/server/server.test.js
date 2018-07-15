const request = require('supertest')
const expect = require('expect')

var app = require('./server').app


describe('Server', () => {
  describe('GET /', () => {
    it('Should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          })
        })
        .end(done)
    })
  })
  
  describe('GET /users', () => {
    it('Should return a array of users', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Eduardo Faria',
            age: 22
          })
        })
        .end(done)
    })
  })
})

