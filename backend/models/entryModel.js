import mongoose from 'mongoose'

const entrySchema = mongoose.Schema(
  {
    titleA: {
      type: String,
    },
    descriptionA: {
      type: String,
    },
    titleB: {
      type: String,
    },
    descriptionB: {
      type: String,
    },
    titleC: {
      type: String,
    },
    descriptionC: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Entry = mongoose.model('Entry', entrySchema)

export default Entry
