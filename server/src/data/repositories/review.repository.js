const { UserModel, ReviewModel } = require('../models')

const readAll = async ({ productId }) =>
    ReviewModel.findAll({
        where: {
            ...(productId ? { productId } : {}),
        },
        attributes: {
            exclude: ['userId'],
        },
        include: [
            {
                model: UserModel,
                attributes: ['id', 'username', 'avatarUrl'],
            },
        ],
    })

const readById = async (id) =>
    ReviewModel.findOne({
        where: { id },
        attributes: {
            exclude: ['userId'],
        },
        include: [
            {
                model: UserModel,
                attributes: ['id', 'username', 'avatarUrl'],
            },
        ],
    })

const create = async (data) => {
    const { id } = (await ReviewModel.create(data)).get({ plain: true })
    return readById(id)
}

const updateById = async (id, data) => {
    await ReviewModel.update(data, { where: { id } })
    return readById(id)
}

const deleteById = async (id) => ReviewModel.destroy({ where: { id } })

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById,
}
