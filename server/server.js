const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')

dotenv.config()

const server = express()

const PORT = process.env.PORT || 5000

server.get('/', (req, res) => {
  res.send('hello!')
})

server.get('/api/products', (req, res) => {
  res.json(products)
})

server.get('/api/products/:id', (req, res) => {
  const id = req.params.id
  const product = products.find((p) => p._id === id)
  res.json(product)
})

server.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
