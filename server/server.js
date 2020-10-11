import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const server = express()

server.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

server.get('/', (req, res) => {
  res.send('hello!')
})


server.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
