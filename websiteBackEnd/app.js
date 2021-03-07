const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const {connect} = require('./models/DBconnect')
const morganBody = require('morgan-body')

morganBody(app);

connect()

//whatever
const form = require('./routes/form')

const port = 5000;

app.use(express.json())
app.use('/', form)

app.post('/', (req, res)=>{
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})