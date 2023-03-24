const { DataTypes } = require('sequelize')

const sequelize = require('../db/connection')

const Review = sequelize.define(
    'comment',
    {
        text: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                len: [2, 150],
            },
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {},
)

module.exports = Review
