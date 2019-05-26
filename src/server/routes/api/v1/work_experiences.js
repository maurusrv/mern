// Core
import express from 'express'

// Models
import WorkExperience from '../../../models/WorkExperience'

// Controllers
import WorkExperienceController from '../../../controllers/WorkExperienceController'


const router = express.Router()

// @route GET api/work_experiences
// @desc  Get all work experiences
// @access Public
router.get('/', WorkExperienceController.read)

// @route POST api/work_experiences
// @desc Create a work experience
// @access Public
router.post('/', WorkExperienceController.create)

// @route PUT api/work_experiences
// @desc Update a work experience
// @access Public
router.put('/:id', WorkExperienceController.update)

// @route DELETE api/work_experiences
// @desc Delete a work experience
// @access Public
router.delete('/:id', WorkExperienceController.delete)


export default router


