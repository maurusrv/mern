import express from 'express'
import WorkExperience from '../../models/WorkExperience'

const router = express.Router()

// @route GET api/workExperiences
// @desc  Get all work experiences
// @access Public
router.get('/', (req, res) => {
  WorkExperience.find()
    .sort({ endDate: -1 })
    .then(workExperiences => res.json(workExperiences))
})



export default router


