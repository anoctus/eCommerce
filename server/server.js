const express = require('express')
const products = require('./data/products')

const server = express()

const port = process.env.PORT || 5000

server.get('/', (req, res) => {
  res.send('hello')
})

server.get('/api/products', (req, res) => {
  res.json(products)
})

server.get('/api/products/:id', (req, res) => {
  const id = req.params.id
  const product = products.find((p) => p._id === id)
  res.json(product)
})

server.listen(port, () => console.log('Listening on port', port))
