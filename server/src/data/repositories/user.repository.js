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

const readByUsername = async (username) =>
    UserModel.findOne({
        where: { username },
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
    readByUsername,
    create,
    updateById,
    deleteById,
}
