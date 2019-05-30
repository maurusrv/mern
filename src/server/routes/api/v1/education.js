// Core
import express from 'express'

// Models
import Education from '../../../models/Education'

// Controllers
import EducationController from '../../../controllers/EducationController'


const router = express.Router()

// @route GET api/education
// @desc  Get all education
// @access Public
router.get('/', EducationController.read)

// @route POST api/education
// @desc Create an education
// @access Public
router.post('/', EducationController.create)

// @route PUT api/education
// @desc Update an education
// @access Public
router.put('/:id', EducationController.update)

// @route DELETE api/education
// @desc Delete an education
// @access Public
router.delete('/:id', EducationController.delete)


export default router



