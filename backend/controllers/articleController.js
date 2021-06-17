import asyncHandler from 'express-async-handler'
import Article from '../models/articleModel.js'

// @desc    Fetch all articles
// @route   GET /api/articles
// @access  Public
const getArticles = asyncHandler(async (req, res) => {
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

  const count = await Article.countDocuments({ ...keyword })
  const articles = await Article.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ articles, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single article
// @route   GET /api/articles/:id
// @access  Public
const getArticleById = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id)

  if (article) {
    res.json(article)
  } else {
    res.status(404)
    throw new Error('Article not found')
  }
})

// @desc    Delete an article
// @route   DELETE /api/articles/:id
// @access  Public
const deleteArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id)

  if (article) {
    await article.remove()
    res.json({ message: 'Article removed' })
  } else {
    res.status(404)
    throw new Error('Article not found')
  }
})

// @desc    Create an article
// @route   POST /api/articles
// @access  Public
const createArticle = asyncHandler(async (req, res) => {
  const article = new Article({
    title: 'Sample title',
    description: 'Sample description',
  })

  const createdArticle = await person.save()
  res.status(201).json(createdArticle)
})

// @desc    Update a article
// @route   PUT /api/articles/:id
// @access  Public
const updateArticle = asyncHandler(async (req, res) => {
  const { title, description } = req.body

  const article = await Article.findById(req.params.id)

  if (article) {
    article.title = title
    article.description = description

    const updatedArticle = await article.save()
    res.json(updatedArticle)
  } else {
    res.status(404)
    throw new Error('Article not found')
  }
})

// @desc    Get top rated articles
// @route   GET /api/articles/top
// @access  Public
const getTopArticles = asyncHandler(async (req, res) => {
  const article = await Article.find({}).sort({ rating: -1 }).limit(3)

  res.json(article)
})

export {
  getArticles,
  getArticleById,
  deleteArticle,
  createArticle,
  updateArticle,
  getTopArticles,
}
