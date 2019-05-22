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
  console.log(req)
  // const newWorkExperience = new WorkExperience({

  // })
})


export default router


