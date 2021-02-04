const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
var pgp = require('pg-promise')(/* options */)
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DBCONNECT,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect(await ()=>{
  console.log('connected')
});




const form = require('./routes/form')

const port = 3000;

app.use(express.json())
app.use('/', form)

app.post('/', (req, res)=>{
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})