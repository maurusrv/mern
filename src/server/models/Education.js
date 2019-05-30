import mongoose from 'mongoose'


const EducationSchema = new mongoose.Schema({
  institution_name: String,
  institution_address: String,
  education_level: String,
  field_of_study: String,
  start_date: Date,
  end_date: Date,
  description: String,
  achievements: Array,
})

const Education = mongoose.model('education', EducationSchema)


export default Education