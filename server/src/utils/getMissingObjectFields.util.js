const isEmpty = require('./isEmpty.util')

const getMissingObjectFields = (obj, requiredFields) =>
    requiredFields.reduce((missingFields, requiredField) => {
        if (isEmpty(obj[requiredField])) {
            missingFields.push(requiredField)
        }
        return missingFields
    }, [])

module.exports = getMissingObjectFields
