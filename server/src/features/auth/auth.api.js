const authController = require('../auth/auth.controller')

const initAuthApi = (Router) => {
    const router = Router()

    router
        .post('/login', authController.login)
        .post('/signup', authController.signup)
        .post('/refresh', authController.refresh)

    return router
}

module.exports = initAuthApi
