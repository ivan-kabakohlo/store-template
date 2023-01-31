const { DataTypes } = require('sequelize')

const sequelize = require('../db/connection')

const Product = sequelize.define(
    'product',
    {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        price: {
            allowNull: false,
            type: DataTypes.DECIMAL(12, 2),
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {},
)

module.exports = Product
