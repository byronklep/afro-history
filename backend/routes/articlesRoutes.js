import express from 'express'
const router = express.Router()
import {
  getArticles,
  getArticleById,
  deleteArticle,
  updateArticle,
  createArticle,
  getTopArticles,
} from '../controllers/articleController.js'

router.route('/').get(getArticles).post(createArticle)
router.get('/top-articles', getTopArticles)
router
  .route('/:id')
  .get(getArticleById)
  .delete(deleteArticle)
  .put(updateArticle)

export default router
