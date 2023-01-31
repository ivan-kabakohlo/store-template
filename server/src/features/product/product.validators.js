const validator = require('validator')

const isEmpty = require('../../utils/isEmpty.util')
const getMissingObjectFields = require('../../utils/getMissingObjectFields.util')

const validateRequiredFields = (product) => {
    const missingFields = getMissingObjectFields(product, ['name', 'price'])

    if (missingFields.length === 1) {
        throw new Error(`Field "${missingFields[0]}" is required.`)
    }
    if (missingFields.length > 1) {
        throw new Error(`Fields ${missingFields.map((f) => `"${f}"`).join(', ')} are required.`)
    }
}

const validateValues = (product) => {
    Object.keys(product).forEach((key) => {
        const value = product[key]

        switch (key) {
            case 'name':
                if (
                    typeof value !== 'string' ||
                    !validator.isLength(value, { min: 4, max: 50 })
                ) {
                    throw new Error('"name" must be a string of 4 to 50 characters.')
                }
                break
            case 'description':
                if (
                    !isEmpty(value) && (
                        typeof value !== 'string' ||
                        !validator.isLength(value, { min: 0, max: 250 })
                    )
                ) {
                    throw new Error('"description" must be a string up to 250 characters.')
                }
                break
            case 'price':
                if (
                    typeof value !== 'number' ||
                    Number.isNaN(value) ||
                    value < 0
                ) {
                    throw new Error('"price" must be a positive number.')
                }
                break
            case 'imageUrl':
                if (
                    !isEmpty(value) && (
                        typeof value !== 'string' ||
                        !validator.isURL(value)
                    )
                ) {
                    throw new Error('"imageUrl" must be a string of a valid URL.')
                }
                break
            default:
                throw new Error(`Invalid field "${key}" of request body.`)
        }
    })
}

module.exports = {
    validateRequiredFields,
    validateValues,
}
