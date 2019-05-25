import mongoose from 'mongoose'

const WorkExperienceSchema = new mongoose.Schema({
  jobPosition: String,
  companyName: String,
  companyAddress: String,
  startDate: Date,
  endDate: Date,
  isCurrentWork: Boolean,
  description: String,
})

const WorkExperience = mongoose.model('workExperience', WorkExperienceSchema)

export default WorkExperience