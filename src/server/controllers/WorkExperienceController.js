// Models
import WorkExperience from '../models/WorkExperience'

export default {
  create: (req, res) => {
    const {
      body: {
        job_position: jobPosition,
        company_name: companyName,
        company_address: companyAddress,
        start_date: startDate,
        end_date: endDate,
        is_current_work: isCurrentWork,
        description,
      },
    } = req

    const newWorkExperience = new WorkExperience({
      jobPosition,
      companyName,
      companyAddress,
      startDate,
      endDate,
      isCurrentWork,
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

  delete: (req, res) => {
    WorkExperience.findById(req.params.id)
      .then(workExperience => workExperience.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }))
  }
}