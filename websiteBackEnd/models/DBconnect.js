//connecting to DB
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const connect = () => {
  client.connect(() => { console.log("DB connected") });
}

const post = (data) =>{
  client
    .query(`INSERT INTO clients VALUES ( '${data.name}', '${data.surname}', '${data.student_id}', '${data.date}', '${data.time_in}', '${data.time_out}', '${data.pin}', '${data.email}');`)
    .then(res =>{
      console.log('data sent')
    })
    .catch(e=>{
      console.error('data push err: ' + e.stack)
      console.log(data)
    })
}

const validPin = (data) =>{
  client
    .query(`SELECT pin FROM clients WHERE pin=${parseInt(data)}`)
    .then(res =>{
      return true
    })
    .catch(e=>{
      console.error('pin err: ' + e.stack)
      return false
    })
}

module.exports = { connect, post, validPin }



// client.query('SELECT * FROM clients;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     db = JSON.stringify(row)
//   }
//   client.end();
// });




