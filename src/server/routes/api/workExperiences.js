import express from 'express'
import WorkExperience from '../../models/WorkExperience'

const router = express.Router()

// @route GET api/work_experiences
// @desc  Get all work experiences
// @access Public
router.get('/', (req, res) => {
  WorkExperience.find()
    .sort({ endDate: -1 })
    .then(workExperiences => res.json(workExperiences))
})

// @route POST api/work_experiences
// @desc Create a work experience
// @access Public
router.post('/', (req, res) => {
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

  newWorkExperience.save().then(workExperience => res.json(workExperience))
})

router.delete('/:id', (req, res) => {
  WorkExperience.findById(req.params.id)
    .then(workExperience => workExperience.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
})



export default router


