// Core
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import { config } from 'dotenv'

// Routes
import work_experiences from './routes/api/v1/work_experiences'
import education from './routes/api/v1/education'

// Initialize environment variables
config()

const mongoURI = process.env.MONGODB_URI

// Database
mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

const port = process.env.PORT || 5376
const app = express()



// Middlewares
app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/api/v1/work_experiences', work_experiences)
app.use('/api/v1/education', education)

app.listen(port, () => console.log(`Server started on port ${port}`))