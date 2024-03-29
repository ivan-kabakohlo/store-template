const { ValidationError } = require('sequelize')

const reviewRepository = require('../../data/repositories/review.repository')

const constructValidationError = require('../../utils/constructValidationError.util')

const readAll = async (req, res, next) => {
    try {
        const reviews = await reviewRepository.readAll({ productId: req.query.productId })
        res.send(reviews)
    } catch (err) {
        next(err)
    }
}

const readById = async (req, res, next) => {
    try {
        const review = await reviewRepository.readById(req.params.id)

        if (!review) {
            return res.status(404).send('Not Found')
        }

        res.send(review)
    } catch (err) {
        next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const newComment = await reviewRepository.create({ ...req.body, userId: req.user.id })
        res.send(newComment)
    } catch (err) {
        if (err instanceof ValidationError) {
            return res.status(422).send(constructValidationError(err))
        }
        next(err)
    }
}

const updateById = async (req, res, next) => {
    if ('userId' in req.body || 'productId' in req.body) {
        return res.status(403).send('Forbidden')
    }

    try {
        const updatedComment = await reviewRepository.updateById(req.params.id, req.body)
        res.send(updatedComment)
    } catch (err) {
        if (err instanceof ValidationError) {
            return res.status(422).send(constructValidationError(err))
        }
        next(err)
    }
}

const deleteById = async (req, res) => {
    const review = await reviewRepository.readById(req.params.id)

    if (!review) {
        return res.status(400).send('Bad Request')
    }
    if (review.user.id !== req.user.id) {
        return res.status(403).send('Forbidden')
    }

    try {
        await reviewRepository.deleteById(req.params.id)
        res.send('Deleted')
    } catch (err) {
        console.error(`Failed to delete review ${req.params.id}. ${err}`)
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
