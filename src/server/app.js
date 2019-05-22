// Core
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

// DB Config
import { mongoURI } from './config/keys'

// API
import workExperiences from './routes/api/workExperiences'

mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

const port = process.env.PORT || 5376
const app = express()

// body-parser middleware
app.use(bodyParser.json())

// use routes
app.use('/api/workExperiences', workExperiences)


app.listen(port, () => console.log(`Server started on port ${port}`))