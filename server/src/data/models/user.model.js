const { DataTypes } = require('sequelize')

const sequelize = require('../db/connection')

const User = sequelize.define(
    'user',
    {
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            },
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                len: [4, 20],
            },
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                len: [4, 20],
            },
        },
        about: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 150],
            },
        },
        avatarUrl: {
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

module.exports = User
