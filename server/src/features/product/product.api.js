const productController = require('./product.controller')

const authMiddleware = require('../../middlewares/auth.middleware')

const initProductApi = (Router) => {
    const router = Router()

    router
        .get('/', productController.readAll)
        .get('/:id', productController.readById)
        .post('/', authMiddleware, productController.create)
        .put('/:id', authMiddleware, productController.updateById)
        .delete('/:id', authMiddleware, productController.deleteById)

    return router
}

module.exports = initProductApi
