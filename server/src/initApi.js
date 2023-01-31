const initUserApi = require('./features/user/user.api')
const initProductApi = require('./features/product/product.api')
const initReviewApi = require('./features/review/review.api')
const initAuthApi = require('./features/auth/auth.api')

const initApi = (Router) => {
    const apiRouter = Router()

    apiRouter.use('/users', initUserApi(Router))
    apiRouter.use('/products', initProductApi(Router))
    apiRouter.use('/reviews', initReviewApi(Router))
    apiRouter.use(initAuthApi(Router))

    return apiRouter
}

module.exports = initApi
