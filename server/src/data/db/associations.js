module.exports = ({ User, Product, Review }) => {
    User.hasMany(Product)
    User.hasMany(Review)
  
    Product.belongsTo(User)
    Product.hasMany(Review)
  
    Review.belongsTo(User)
    Review.belongsTo(Product)
}
