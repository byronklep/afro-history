import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import path from 'path'

import peopleRoutes from './routes/peopleRoutes.js'
import articlesRoutes from './routes/articlesRoutes.js'
import entriesRoutes from './routes/entriesRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use('/api/people', peopleRoutes)
app.use('/api/articles', articlesRoutes)
app.use('/api/entries', entriesRoutes)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
