const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const accessToken = req.headers.authorization?.split(' ')[1]

    if (!accessToken) {
        return res.status(401).send('Authorization is required')
    }

    try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        req.user = decoded.user
    } catch (err) {
        return res.status(401).send('Token is invalid')
    }

    return next()
}

module.exports = authMiddleware
