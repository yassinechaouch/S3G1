const router = require('express').Router()
var gpc = require('generate-pincode')

let users = [
    {
        name : "",
        surname : "",
        email : ""
    }
]

router.post('/form', (req, res)=>{
    users.push(req.body)
    users[1].pin = gpc(6)
    res.send(users[1])
})

module.exports = router