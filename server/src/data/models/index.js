const associate = require('../db/associations')

const User = require('./user.model')
const Product = require('./product.model')
const Review = require('./review.model')

associate({
    User,
    Product,
    Review,
})

module.exports = {
    UserModel: User,
    ProductModel: Product,
    ReviewModel: Review,
}
