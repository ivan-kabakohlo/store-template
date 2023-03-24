const mapErrors = errors => errors.map(error => ({
    field: error.path,
    message: error.message,
}))

const constructValidationError = (sequelizeValidationError) => ({
    type: 'ValidationError',
    data: mapErrors(sequelizeValidationError.errors),
})

module.exports = constructValidationError
