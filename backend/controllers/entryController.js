import asyncHandler from 'express-async-handler'
import Entry from '../models/entryModel.js'

// @desc    Fetch all entries
// @route   GET /api/entries
// @access  Public
const getEntries = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword
    ? {
        title: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Entry.countDocuments({ ...keyword })
  const entries = await Entry.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ entries, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single entrie
// @route   GET /api/entries/:id
// @access  Public
const getEntryById = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id)

  if (entry) {
    res.json(entry)
  } else {
    res.status(404)
    throw new Error('Entry not found')
  }
})

// @desc    Delete an entry
// @route   DELETE /api/entries/:id
// @access  Public
const deleteEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id)

  if (entry) {
    await entry.remove()
    res.json({ message: 'Entry removed' })
  } else {
    res.status(404)
    throw new Error('Entry not found')
  }
})

// @desc    Create an entry
// @route   POST /api/entries
// @access  Public
const createEntry = asyncHandler(async (req, res) => {
  const entry = new Entry({
    title: 'Sample title',
    description: 'Sample description',
  })

  const createdEntry = await Entry.save()
  res.status(201).json(createdEntry)
})

// @desc    Update an entry
// @route   PUT /api/entries/:id
// @access  Public
const updateEntry = asyncHandler(async (req, res) => {
  const { title, description } = req.body

  const entry = await Entry.findById(req.params.id)

  if (entry) {
    entry.title = title
    entry.description = description

    const updatedEntry = await entry.save()
    res.json(updatedEntry)
  } else {
    res.status(404)
    throw new Error('Entry not found')
  }
})

// @desc    Get top rated entries
// @route   GET /api/entries/top
// @access  Public
const getTopEntries = asyncHandler(async (req, res) => {
  const entry = await Entry.find({}).sort({ rating: -1 }).limit(3)

  res.json(entry)
})

export {
  getEntries,
  getEntryById,
  deleteEntry,
  createEntry,
  updateEntry,
  getTopEntries,
}
