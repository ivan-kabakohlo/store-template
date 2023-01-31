const { DataTypes } = require('sequelize')

const sequelize = require('../db/connection')

const User = sequelize.define(
    'user',
    {
        email: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        about: {
            type: DataTypes.STRING,
        },
        avatarUrl: {
            type: DataTypes.STRING,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {},
)

module.exports = User
