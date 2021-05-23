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
}//to fix -- the think you want to do is not happening

async function getData(){
  let { rows } = await client.query("SELECT * FROM clients")
  data = rows
  //console.log(data)
  return data;
}


// const getData = async () =>{
//   let res = await client
//     .query(`SELECT * FROM clients`)
//     // .then(res =>{
//     //   console.log(res.rows)
//     // })
//     // .catch(e=>{
//     //   console.error('db error: ' + e.stack)
//     // })
//     return res.rows[0]
// }

module.exports = { connect, post, validPin, getData }