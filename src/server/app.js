// Core
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

// Routes
import work_experiences from './routes/api/work_experiences'

// DB Config
const mongoURI = process.env.MONGO_URI

// Database
mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

const port = process.env.PORT || 5376
const app = express()

// Middleware
app.use(bodyParser.json())

// Routes
app.use('/api/work_experiences', work_experiences)
// app.use('/api/workExperiences', workExperiences)



app.listen(port, () => console.log(`Server started on port ${port}`))