const { DataTypes } = require('sequelize')

const sequelize = require('../db/connection')

const Product = sequelize.define(
    'product',
    {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                len: [4, 50],
            },
        },
        description: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 250],
            },
        },
        price: {
            allowNull: false,
            type: DataTypes.DECIMAL(12, 2),
            min: 0,
            validate: {
                min: 0,
                max: 9_999_999_999,
            },
        },
        imageUrl: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            },
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {},
)

module.exports = Product
