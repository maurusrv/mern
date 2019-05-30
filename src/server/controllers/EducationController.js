// Models
import Education from '../models/Education'

export default {
  create: (req, res) => {
    const {
      body: {
        institution_name,
        institution_address,
        education_level,
        field_of_study,
        start_date,
        end_date,
        description,
        achievements,
      },
    } = req

    const newEducation = new Education({
      institution_name,
      institution_address,
      education_level,
      field_of_study,
      start_date,
      end_date,
      description,
      achievements,
    })

    newEducation
      .save()
      .then(education => res.json(education))
      .catch(err => {
        res.json({ success: false, result: err })
      })
  },

  read: (req, res) => {
    Education.find()
      .sort({ endDate: -1 })
      .then(education => res.json(education))
  },

  update: (req, res) => {
    const {
      params: { id },
      body: {
        institution_name,
        institution_address,
        education_level,
        field_of_study,
        start_date,
        end_date,
        description,
        achievements,
      },
    } = req

    Education.findById(id)
      .then(education => education.updateOne({
        institution_name,
        institution_address,
        education_level,
        field_of_study,
        start_date,
        end_date,
        description,
        achievements,
      }).then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false, result: err }))
  },

  delete: (req, res) => {
    Education.findById(req.params.id)
      .then(education => education.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false, result: err }))
  }
}