const validator = require('validator')

const isEmpty = require('../../utils/isEmpty.util')
const getMissingObjectFields = require('../../utils/getMissingObjectFields.util')

const validateLoginRequiredFields = (userData) => {
    const missingFields = getMissingObjectFields(userData, ['username', 'password'])

    if (missingFields.length === 1) {
        throw new Error(`Field "${missingFields[0]}" is required.`)
    }
    if (missingFields.length > 1) {
        throw new Error(`Fields ${missingFields.map((f) => `"${f}"`).join(', ')} are required.`)
    }
}

const validateLoginValues = (userData) => {
    Object.keys(userData).forEach((key) => {
        const value = userData[key]

        switch (key) {
            case 'username':
                if (typeof value !== 'string') {
                    throw new Error('"username" must be a string.')
                }
                break
            case 'password':
                if (typeof value !== 'string') {
                    throw new Error('"password" must be a string.')
                }
                break
            default:
                throw new Error(`Invalid field "${key}" of request body`)
        }
    })
}

const validateSignupRequiredFields = (newUserData) => {
    const missingFields = getMissingObjectFields(newUserData, ['username', 'password', 'email'])

    if (missingFields.length === 1) {
        throw new Error(`Field "${missingFields[0]}" is required.`)
    }
    if (missingFields.length > 1) {
        throw new Error(`Fields ${missingFields.map((f) => `"${f}"`).join(', ')} are required.`)
    }
}

const validateSignupValues = (newUserData) => {
    Object.keys(newUserData).forEach((key) => {
        const value = newUserData[key]

        switch (key) {
            case 'username':
                if (
                    typeof value !== 'string' ||
                    !validator.isLength(value, { min: 4, max: 25 })
                ) {
                    throw new Error('"username" must be a string of 4 to 25 characters.')
                }
                break
            case 'email':
                if (
                    typeof value !== 'string' ||
                    !validator.isEmail(value)
                ) {
                    throw new Error('"email" must be a string of a vaild email.')
                }
                break
            case 'password':
                if (
                    typeof value !== 'string' ||
                    !validator.isLength(value, { min: 8, max: 25 })
                ) {
                    throw new Error('"password" must be a string of 8 to 25 characters.')
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
            case 'about':
                if (
                    !isEmpty(value) && (
                        typeof value !== 'string' ||
                        !validator.isLength(value, { min: 0, max: 250 })
                    )
                ) {
                    throw new Error('"about" must be a string up to 250 characters.')
                }
                break
            default:
                throw new Error(`Invalid field "${key}" of request body`)
        }
    })
}

module.exports = {
    validateLoginRequiredFields,
    validateLoginValues,
    validateSignupRequiredFields,
    validateSignupValues,
}
