const express = require('express');
const app = express();
const dotenv = require('dotenv').config()

//connecting to DB
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT * FROM clients;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row))
  }
  client.end();
});



//whatever
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