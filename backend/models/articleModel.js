import mongoose from 'mongoose'

const articleSchema = mongoose.Schema(
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

const Article = mongoose.model('Article', articleSchema)

export default Article
