const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const {connect} = require('./models/DBconnect')
const morganBody = require('morgan-body')
const form = require('./routes/form')

morganBody(app);

connect()

const port = 5000;

app.use(express.json())
app.use('/', form)

app.get('/', (req, res)=>{
  res.send('here')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})