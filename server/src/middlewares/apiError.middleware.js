const apiErrorMiddleware = (err, req, res) => {
    console.error(`API ERROR! ${err.stack}`)
    res.status(400).send('Bad Request')
}
  
module.exports = apiErrorMiddleware
