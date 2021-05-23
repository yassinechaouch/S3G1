const { getData } = require('../models/DBconnect')

const dataGet = async (req, res, next) => {
    let data = await getData()
    res.send(data)
    next()
}

module.exports = dataGet