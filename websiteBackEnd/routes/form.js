const router = require('express').Router()
const form = require('../controllers/formValid')

router.get('/form', (req,res)=> res.send('waiting for post'))

router.post('/form', form)

module.exports = router