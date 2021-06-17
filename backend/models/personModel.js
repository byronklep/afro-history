import mongoose from 'mongoose'

const personSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    birthplace: {
      type: String,
    },
    year: {
      type: Number,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Person = mongoose.model('Person', personSchema)

export default Person
