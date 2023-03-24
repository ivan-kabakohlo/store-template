const { ValidationError } = require('sequelize')

const productRepository = require('../../data/repositories/product.repository')

const constructValidationError = require('../../utils/constructValidationError.util')

const readAll = async (req, res, next) => {
    try {
        const products = await productRepository.readAll({ userId: req.query.userId })
        res.send(products)
    } catch (err) {
        next(err)
    }
}

const readById = async (req, res, next) => {
    try {
        const product = await productRepository.readById(req.params.id)

        if (!product) {
            return res.status(404).send('Not Found')
        }

        res.send(product)
    } catch (err) {
        next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const newProduct = await productRepository.create({ ...req.body, userId: req.user.id })
        res.send(newProduct)
    } catch (err) {
        if (err instanceof ValidationError) {
            return res.status(422).send(constructValidationError(err))
        }
        next(err)
    }
}

const updateById = async (req, res, next) => {
    const product = await productRepository.readById(req.params.id)

    if (!product) {
        return res.status(400).send('Bad Request')
    }
    if (product.user.id !== req.user.id) {
        return res.status(403).send('Forbidden')
    }

    try {
        const updatedProduct = await productRepository.updateById(req.params.id, req.body)
        res.send(updatedProduct)
    } catch (err) {
        if (err instanceof ValidationError) {
            return res.status(422).send(constructValidationError(err))
        }
        next(err)
    }
}

const deleteById = async (req, res) => {
    const product = await productRepository.readById(req.params.id)

    if (!product) {
        return res.status(400).send('Bad Request')
    }
    if (product.user.id !== req.user.id) {
        return res.status(403).send('Forbidden')
    }

    try {
        await productRepository.deleteById(req.params.id)
        res.send('Deleted')
    } catch (err) {
        console.error(`Failed to delete product ${req.params.id}. ${err}`)
        res.status(400).send('Not deleted')
    }
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById,
}
