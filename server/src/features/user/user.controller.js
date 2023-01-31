const userRepository = require('../../data/repositories/user.repository')

const userValidators = require('./user.validators')

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
        userValidators.validateRequiredFields(req.body)
        userValidators.validateValues(req.body)
    } catch (err) {
        return res.status(422).send(`Validation Error! ${err.message}`)
    }

    try {
        const newUser = await userRepository.create(req.body)
        res.send(newUser)
    } catch (err) {
        next(err)
    }
}

const updateById = async (req, res, next) => {
    try {
        userValidators.validateValues(req.body)
    } catch (err) {
        return res.status(422).send(`Validation Error! ${err.message}`)
    }

    try {
        const updatedUser = await userRepository.updateById(req.params.id, req.body)
        res.send(updatedUser)
    } catch (err) {
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
