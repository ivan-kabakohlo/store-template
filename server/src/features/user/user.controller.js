const { ValidationError } = require('sequelize')

const userRepository = require('../../data/repositories/user.repository')

const constructValidationError = require('../../utils/constructValidationError.util')

const readAll = async (req, res, next) => {
    try {
        const users = await userRepository.readAll()
        res.send(users)
    } catch (err) {
        next(err)
    }
}

const readById = async (req, res, next) => {
    try {
        const user = await userRepository.readById(req.params.id)

        if (!user) {
            return res.status(404).send('Not Found')
        }

        res.send(user)
    } catch (err) {
        next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const newUser = await userRepository.create(req.body)
        res.send(newUser)
    } catch (err) {
        if (err instanceof ValidationError) {
            return res.status(422).send(constructValidationError(err))
        }
        next(err)
    }
}

const updateById = async (req, res, next) => {
    try {
        const updatedUser = await userRepository.updateById(req.params.id, req.body)
        res.send(updatedUser)
    } catch (err) {
        if (err instanceof ValidationError) {
            return res.status(422).send(constructValidationError(err))
        }
        next(err)
    }
}

const deleteById = async (req, res) => {
    try {
        await userRepository.deleteById(req.params.id)
        res.send('Deleted')
    } catch (err) {
        console.error(`Failed to delete user ${req.params.id}. ${err}`)
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
