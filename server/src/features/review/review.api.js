const reviewController = require('./review.controller')

const authMiddleware = require('../../middlewares/auth.middleware')

const initReviewApi = (Router) => {
    const router = Router()

    router
        .get('/', reviewController.readAll)
        .get('/:id', reviewController.readById)
        .post('/', authMiddleware, reviewController.create)
        .put('/:id', authMiddleware, reviewController.updateById)
        .delete('/:id', authMiddleware, reviewController.deleteById)

    return router
}

module.exports = initReviewApi
