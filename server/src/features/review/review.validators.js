const validator = require('validator')

const getMissingObjectFields = require('../../utils/getMissingObjectFields.util')

const validateRequiredFields = (review) => {
    const missingFields = getMissingObjectFields(review, ['text', 'productId'])

    if (missingFields.length === 1) {
        throw new Error(`Field "${missingFields[0]}" is required.`)
    }
    if (missingFields.length > 1) {
        throw new Error(`Fields ${missingFields.map((f) => `"${f}"`).join(', ')} are required.`)
    }
}

const validateValues = (review, isUpdate = false) => {
    Object.keys(review).forEach((key) => {
        const value = review[key]

        switch (key) {
            case 'text':
                if (
                    typeof value !== 'string' ||
                    !validator.isLength(value, { min: 2, max: 150 })
                ) {
                    throw new Error('"text" must be a string of 2 to 150 characters.')
                }
                break
            case 'productId':
                if (isUpdate) {
                    throw new Error('"productId" cannot be updated.')
                }
                if (
                    typeof value !== 'number' ||
                    value < 1 ||
                    !Number.isInteger(value)
                ) {
                    throw new Error('"productId" is invalid.')
                }
                break
            default:
                throw new Error(`Invalid field "${key}" of request body`)
        }
    })
}

module.exports = {
    validateRequiredFields,
    validateValues,
}
