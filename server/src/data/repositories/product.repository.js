const { ProductModel, UserModel } = require('../models')

const readAll = async ({ userId }) =>
    ProductModel.findAll({
        where: {
            ...(userId ? { userId } : {}),
        },
    })

const readById = async (id) =>
    ProductModel.findByPk(id, {
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

const create = async (data) => (await ProductModel.create(data)).get({ plain: true })

const updateById = async (id, data) => {
    await ProductModel.update(data, { where: { id } })
    return readById(id)
}

const deleteById = async (id) => ProductModel.destroy({ where: { id } })

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById,
}
