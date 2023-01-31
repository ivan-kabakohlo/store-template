const validator = require('validator')

const isEmpty = require('../../utils/isEmpty.util')
const getMissingObjectFields = require('../../utils/getMissingObjectFields.util')

const validateRequiredFields = (user) => {
    const missingFields = getMissingObjectFields(user, ['email', 'username', 'password'])

    if (missingFields.length === 1) {
        throw new Error(`Field "${missingFields[0]}" is required.`)
    }
    if (missingFields.length > 1) {
        throw new Error(`Fields ${missingFields.map((f) => `"${f}"`).join(', ')} are required.`)
    }
}

const validateValues = (user) =>
    Object.keys(user).forEach((key) => {
        const value = user[key]

        switch (key) {
            case 'email':
                if (
                    typeof value !== 'string' ||
                    !validator.isEmail(value)
                ) {
                    throw new Error('"email" must be a string of a valid email.')
                }
                break
            case 'username':
                if (
                    typeof value !== 'string' ||
                    !validator.isLength(value, { min: 4, max: 20 })
                ) {
                    throw new Error('"username" must be a string of 4 to 20 characters.')
                }
                break
            case 'avatarUrl':
                if (
                    !isEmpty(value) && (
                        typeof value !== 'string' ||
                        !validator.isURL(value)
                    )
                ) {
                    throw new Error('"avatarUrl" must be a string of a valid URL.')
                }
                break
            case 'password':
                if (
                    typeof value !== 'string' ||
                    !validator.isLength(value, { min: 4, max: 20 })
                ) {
                    throw new Error('"password" must be a string of 4 to 20 characters.')
                }
                break
            case 'about':
                if (
                    !isEmpty(value) && (
                        typeof value !== 'string' ||
                        !validator.isLength(value, { min: 0, max: 150 })
                    )
                ) {
                    throw new Error('"about" must be a string up to 150 characters.')
                }
                break
            default:
                throw new Error(`Invalid field "${key}" of request body.`)
        }
    })

module.exports = {
    validateRequiredFields,
    validateValues,
}