import express from 'express'
const router = express.Router()
import {
  getEntries,
  getEntryById,
  deleteEntry,
  updateEntry,
  createEntry,
  getTopEntries,
} from '../controllers/entryController.js'

router.route('/').get(getEntries).post(createEntry)
router.get('/top-entries', getTopEntries)
router.route('/:id').get(getEntryById).delete(deleteEntry).put(updateEntry)

export default router
