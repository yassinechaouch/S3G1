const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
var securePin = require("secure-pin");

const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send',(req,res)=>{
   const output = 
   `<p> You have a new contact request </p>
   <h3>Contact Details</h3>
   <ul>
   <li> Name:${req.body.name}</li>
   <li> Company:${req.body.company}</li>
   <li> Name:${req.body.email}</li>
   <li> Name:${req.body.phone}</li>

   </ul>
   <h3>Message</h3>
   <p>${res.body.message} </p>
   `
     // create reusable transporter object using the default SMTP transport
 
})
/*
let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "mahmoud.mansouri@medtech.tn", // generated ethereal user
      pass: "Midou2001", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info =  transporter.sendMail({
    from: '"Nodemailer 👻" <mahmoud.mansouri@medtech.tn>', // sender address
    to: "mahmoudmansouri2001@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
*/
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

 
  // create reusable transporter object using the default SMTP transport
 /*
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
*/
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
      user: 'mahmoudmansouri2001@gmail.com',
      pass: 'Midou2001'
  }
});
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Mahmoud Mansouri " <mahmoudmansouri2001@gmail.com>', // sender address
    to: "mahmoud.mansouri@medtech.tn", // list of receivers
    subject: "User information", // Subject line
    text: "Si ça marche je suis vraiment trop fort", // plain text body
    html: "<b>Si ça marche je suis vraiment trop fort</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
securePin.generatePin(4, (pin)=> {
  console.log("Pin: " + pin);
})
//main().catch(console.error);
app.listen(3000, () => console.log('Server started...'));