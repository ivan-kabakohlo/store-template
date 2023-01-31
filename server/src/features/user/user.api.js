const userController = require('./user.controller')

const authMiddleware = require('../../middlewares/auth.middleware')

const initUserApi = (Router) => {
    const router = Router()

    router
        .get('/', userController.readAll)
        .get('/:id', userController.readById)
        .post('/', userController.create)
        .put('/:id', authMiddleware, userController.updateById)
        .delete('/:id', authMiddleware, userController.deleteById)

    return router
}

module.exports = initUserApi
