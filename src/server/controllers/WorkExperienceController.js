// Models
import WorkExperience from '../models/WorkExperience'

export default {
  create: (req, res) => {
    const {
      body: {
        job_position,
        company_name,
        company_address,
        start_date,
        end_date,
        is_current_work,
        description,
      },
    } = req

    const newWorkExperience = new WorkExperience({
      job_position,
      company_name,
      company_address,
      start_date,
      end_date,
      is_current_work,
      description,
    })

    newWorkExperience
      .save()
      .then(workExperience => res.json(workExperience))
      .catch(err => {
        res.json({ success: false, result: err })
      })
  },

  read: (req, res) => {
    WorkExperience.find()
      .sort({ endDate: -1 })
      .then(workExperiences => res.json(workExperiences))
  },

  update: (req, res) => {
    const {
      params: { id },
      body: {
        job_position,
        company_name,
        company_address,
        start_date,
        end_date,
        is_current_work,
        description,
      },
    } = req

    WorkExperience.findById(id)
      .then(workExperiences => workExperiences.updateOne({
        job_position,
        company_name,
        company_address,
        start_date,
        end_date,
        is_current_work,
        description,
      }).then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false, result: err }))
  },

  delete: (req, res) => {
    WorkExperience.findById(req.params.id)
      .then(workExperience => workExperience.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false, result: err }))
  }
}