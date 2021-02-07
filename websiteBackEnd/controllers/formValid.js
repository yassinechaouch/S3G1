const gpc = require('generate-pincode')
const Joi = require('joi')
const { post, validPin } = require('../models/DBconnect')
const schema = require('../models/schema')

const generatePin = ()=>{
    let pin = 0
    do{
        pin = gpc(6)
    }while (validPin(pin))
    console.log("pin done")
    return pin
}

const form = (req, res, next)=>{
    try{
        let data = schema.validate(req.body).value
    }catch(err){
        res.send(err).status('400')
        next()
    }
    let data = req.body
    data.pin = parseInt(generatePin())
    res.send(data)
    post(data)
    next()
}

module.exports = form