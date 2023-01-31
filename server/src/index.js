const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const sequelize = require('./data/db/connection')
const initApi = require('./initApi')

const apiErrorMiddleware = require('./middlewares/apiError.middleware')

dotenv.config()

const port = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', initApi(express.Router), apiErrorMiddleware)

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to database successfully')
    })
    .catch((err) => {
        console.error(`Failed to connect to database. ${err}`)
    })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
