const { Op } = require('sequelize')

const { UserModel } = require('../models')

const readAll = async () =>
    UserModel.findAll({
        raw: true,
        attributes: { exclude: ['password'] },
    })

const readById = async (id) =>
    UserModel.findByPk(id, {
        raw: true,
        attributes: { exclude: ['password'] },
    })

const readByUsernameOrEmail = async (username, email) =>
    UserModel.findOne({
        where: {
            [Op.or]: [
                { username },
                { email },
            ],
        },
    })

const readByCreds = async (username, password) =>
    UserModel.findOne({
        where: { username, password },
    })

const create = async (data) => {
    const result = await UserModel.create(data)
    const newUser = result.get({ plain: true })
    delete newUser.password
    return newUser
}

const updateById = async (id, data) => {
    await UserModel.update(data, { where: { id } })
    const updatedUser = await readById(id)
    return updatedUser
}

const deleteById = async (id) => UserModel.destroy({ where: { id } })

module.exports = {
    readAll,
    readById,
    readByUsernameOrEmail,
    readByCreds,
    create,
    updateById,
    deleteById,
}
