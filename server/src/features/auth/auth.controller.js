const jwt = require('jsonwebtoken')

const refreshTokens = require('../../refreshTokens')

const userRepository = require('../../data/repositories/user.repository')

const authValidators = require('./auth.validators')

const login = async (req, res, next) => {
    try {
        authValidators.validateLoginRequiredFields(req.body)
        authValidators.validateLoginValues(req.body)
    } catch (err) {
        return res.status(422).send(`Validation Error! ${err.message}`)
    }

    const { username, password } = req.body

    try {
        const user = await userRepository.readByUsername(username)

        if (!user) {
            return res.status(404).send('User not found')
        }
        if (user.password !== password) {
            return res.status(403).send('Incorrect password')
        }

        delete user.password

        const accessToken = jwt.sign(
            { user },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' },
        )
        const refreshToken = jwt.sign(
            { user },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1 day' },
        )

        refreshTokens.push(refreshToken)

        return res.send({ user, accessToken, refreshToken })
    } catch (err) {
        next(err)
    }
}

const signup = async (req, res, next) => {
    const { username, email } = req.body

    const users = await userRepository.readAll()
    let userExistsError = ''

    users.forEach((user) => {
        if (user.email === email) {
            return (userExistsError = 'User with this email already exists.')
        }
        if (user.username === username) {
            return (userExistsError = 'User with this username already exists.')
        }
    })

    if (userExistsError) {
        return res.status(422).send(userExistsError)
    }

    try {
        authValidators.validateSignupRequiredFields(req.body)
        authValidators.validateSignupValues(req.body)
    } catch (err) {
        return res.status(422).send(`Validation Error! ${err.message}`)
    }

    try {
        const newUser = await userRepository.create(req.body)
        delete newUser.password

        const accessToken = jwt.sign(
            { user: newUser },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' },
        )
        const refreshToken = jwt.sign(
            { user: newUser },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1 day' },
        )

        refreshTokens.push(refreshToken)
        return res.send({ user: newUser, accessToken, refreshToken })
    } catch (err) {
        next(err)
    }
}

const refresh = async (req, res) => {
    const { refreshToken } = req.body

    if (!refreshToken) {
        return res.status(401).send('Token is required')
    }
    if (!refreshTokens.includes(refreshToken)) {
        return res.status(401).send('Token is invalid')
    }

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        {},
        (err, decoded) => {
            if (err) {
                return res.status(401).send('Token is invalid')
            }
            const accessToken = jwt.sign(
                { user: decoded.user },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15m' },
            )
            return res.send({ accessToken, user: decoded.user })
        },
    )
}

module.exports = {
    login,
    signup,
    refresh,
}
