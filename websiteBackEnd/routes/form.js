const router = require('express').Router()
const form = require('../controllers/formValid')
const dataGet = require('../controllers/dataGet')

router.get('/form', (req,res)=> res.send('waiting for post'))

router.post('/form', form)

router.get('/data', dataGet)

module.exports = router