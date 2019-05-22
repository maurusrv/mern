import mongoose from 'mongoose'

const WorkExperienceSchema = new mongoose.Schema({
  job: {
    position: String,
  },
  company: {
    name: String,
    address: String,
  },
  duration: {
    startdate: Date,
    endDate: Date,
  },
  isCurrentWork: Boolean,
  description: String,
})

const WorkExperience = mongoose.model('workExperience', WorkExperienceSchema)

export default WorkExperience