const express = require('express')

var app = express()

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  })
})

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Eduardo Faria',
      age: 22
    },
    {
      name: 'Lais Maia',
      age: 20
    },
    {
      name: 'Lisa',
      age: 1
    }
  ])
})

app.listen(3001)
module.exports.app = app