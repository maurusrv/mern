import mongoose from 'mongoose'

const WorkExperienceSchema = new mongoose.Schema({
  job_position: String,
  company_name: String,
  company_address: String,
  start_date: Date,
  end_date: Date,
  is_current_work: Boolean,
  description: String,
})

const WorkExperience = mongoose.model('work_experience', WorkExperienceSchema)

export default WorkExperience