const Sequelize = require('sequelize')

const dbConfig = require('../../configs/db.config')

module.exports = new Sequelize(dbConfig)
