const express = require("express");
const app = express();
const pool = require("./db");
const range = require("./range");
app.use(express.json());
const nodemailer = require("nodemailer");
var securePin = require("secure-pin");

var path = require("path");

app.use(function (req, res, next) {
  res.header("Content-Range", "posts 0-20/20");
  res.header("X-Total-Count", "10");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8888");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Expose-Headers");
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/users", async (req, res) => {
  // res.header('X-Total-Count', '10')
  //res.header('Access-Control-Expose-Headers')
  try {
    res.header("Access-Control-Expose-Headers", "X-Total-Count");
    const allTodos = await pool.query("SELECT * FROM booked");
    // res.headers['X-Total-Count'] = '10'
    //res.headers['Access-Control-Expose-Headers'] = 'X-Total-Count'

    //    res.header('Access-Control-Expose-Headers', 'X-Total-Count')
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/", function (req, res) {
  res.send("hello world");
});

app.post("/users", async (req, res) => {
  try {
    //        res.header('X-Total-Count', '10')
    //      res.header('Access-Control-Expose-Headers')

    const {
      name,
      email,
      mobile,
      studentid,
      date,
      timein,
      timeout,
      department,
      pinCode,
      id,
    } = req.body;
    var pin = securePin.generatePinSync(4);

    const newTodo = await pool.query(
      `INSERT INTO booked(name, email,mobile, studentid,date,timein,timeout,department,pin) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
      [name, email, mobile, studentid, date, timein, timeout, department, pin]
    );
    //    [description])
    // const newTodopin =
    //    await pool.query(`INSERT INTO booked(pin) VALUES( 3) RETURNING *`,
    //  [pinCode])
    res.json(newTodo);

    //  const pinId =
    //  await pool.query(`INSERT INTO booked(pin) VALUES(${pin}) RETURNING *`, [pinCode] )

    async function main() {
      // securePin.generatePin(4, (pin)=> {
      //      console.log("Pin: " + pin);
      //  })
      let testAccount = await nodemailer.createTestAccount();

      var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
          user: "mahmoudmansouri2001@gmail.com",
          pass: "Midou2001",
        },
      });

      let info = await transporter.sendMail({
        from: '"Mahmoud Mansouri " <mahmoudmansouri2001@gmail.com>',
        to: `${req.body.email}`,
        subject: "User information",
        text: "Si ça marche je suis vraiment trop fort",
        html: `<b>Dear ${req.body.name},</b>
              <br/>
              <br/>

              <b>You have booked a place in the makerSpace on the ${req.body.date} from ${req.body.timein} to ${req.body.timeout}.</b>
              <br/>
              <br/>

              <b>Enter this pin code to enter the makerSpace : ${pin}.</b>
              <br/>
              <br/>

              <b> Please try to come in time and to keep your place clean after you leave. </b>
              <br/>
              <br/>

              <b>Thank you, </b> 
              <br/>
              <br/>
              
              <b>Admin </b>  
              `,
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);
    //   console.log(req.body)
    //   res.header('X-Total-Count', '10')
    //     res.header('Access-Control-Allow-Headers')
    //res.header('Access-Control-Expose-Headers')
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await pool.query("SELECT * FROM booked WHERE id = $1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});
/*
app.post('/todos', async (req,res)=>{
    try{
        const {description}= req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *",
         [description])
         res.json(newTodo.rows(0))
    }catch(err){
        console.log(err.message)
    }
})
*/
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      email,
      mobile,
      studentid,
      date,
      timein,
      timeout,
      department,
    } = req.body;

    //     const updateTodo = await pool.query("UPDATE booked SET name= $1, email =$2,mobile=$3, studentid=$4,date=$5,timein=$6,timeout=$7,department=$8 WHERE id = $9",
    //   [name, email, mobile,studentid,date,timein,timeout,department, id])

    const updateTodo = await pool.query(
      "INSERT INTO booked(name, email,mobile, studentid,date,timein,timeout,department) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING",

      [name, email, mobile, studentid, date, timein, timeout, department]
    );
    res.json(updateTodo);
  } catch {
    console.log(err.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM booked WHERE id = $1", [
      id,
    ]);
    res.json("todos was succefully deleted");
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/admins", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newTodo3 = await pool.query(
      "INSERT INTO adminoff (username, password) VALUES ($1,$2) RETURNING *",
      [username, password]
    );
    res.json(newTodo3);

    // const newTodopin =
    //    await pool.query(`INSERT INTO booked(pin) VALUES( 3) RETURNING *`,
    //  [pinCode])
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5001, () => {
  console.log("serveur is listening");
});
