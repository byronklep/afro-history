import asyncHandler from 'express-async-handler'
import Person from '../models/personModel.js'

// @desc    Fetch all people
// @route   GET /api/people
// @access  Public
const getPeople = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Person.countDocuments({ ...keyword })
  const people = await Person.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ people, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single person
// @route   GET /api/people/:id
// @access  Public
const getPersonById = asyncHandler(async (req, res) => {
  const person = await Person.findById(req.params.id)

  if (person) {
    res.json(person)
  } else {
    res.status(404)
    throw new Error('Person not found')
  }
})

// @desc    Delete a person
// @route   DELETE /api/people/:id
// @access  Public
const deleteProduct = asyncHandler(async (req, res) => {
  const person = await Person.findById(req.params.id)

  if (person) {
    await person.remove()
    res.json({ message: 'Person removed' })
  } else {
    res.status(404)
    throw new Error('Person not found')
  }
})

// @desc    Create a person
// @route   POST /api/people
// @access  Public
const createPerson = asyncHandler(async (req, res) => {
  const person = new Person({
    name: 'Sample name',
    description: 'Sample description',
  })

  const createdPerson = await person.save()
  res.status(201).json(createdPerson)
})

// @desc    Update a person
// @route   PUT /api/people/:id
// @access  Public
const updateProduct = asyncHandler(async (req, res) => {
  const { name, description } = req.body

  const person = await Person.findById(req.params.id)

  if (person) {
    person.name = name
    person.description = description

    const updatedPerson = await person.save()
    res.json(updatedPerson)
  } else {
    res.status(404)
    throw new Error('Person not found')
  }
})

// @desc    Get top rated people
// @route   GET /api/people/top
// @access  Public
const getTopPeople = asyncHandler(async (req, res) => {
  const people = await Person.find({}).sort({ rating: -1 }).limit(3)

  res.json(people)
})

export {
  getPeople,
  getPersonById,
  deleteProduct,
  createPerson,
  updateProduct,
  getTopPeople,
}
