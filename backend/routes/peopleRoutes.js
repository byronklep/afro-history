import express from 'express'
const router = express.Router()
import {
  getPeople,
  getPersonById,
  deletePerson,
  updatePerson,
  createPerson,
  getTopPeople,
} from '../controllers/personController.js'

router.route('/').get(getPeople).post(createPerson)
router.get('/top', getTopPeople)
router.route('/:id').get(getPersonById).delete(deletePerson).put(updatePerson)

export default router
