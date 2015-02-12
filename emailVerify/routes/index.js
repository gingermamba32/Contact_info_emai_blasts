var express = require('express');
var router = express.Router();
var cookie = require('cookie-parser');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
var uuid = require('node-uuid');
var sendgrid = require("sendgrid")('mpmonter', 'send grid password');
var email = new sendgrid.Email();





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Email_verify', page:'index' });
});

/*practice



//save random key to redit based on user 
var Hashkey = uuid.v4();

client.on("connect", function () {
        client.set("Hashkey", Hashkey); //redis.print to make sure you are connected
        client.get("Hashkey", function(err, reply){
        	if (err) throw err;
        	console.log('we are retreiving your random hex: ' + reply);
       		client.quit(); 
   });
        
});


/**********POST to homepage after processing data from the client**************/
/*
router.post('/', function (req, res, next) {
	//need to process the email info and use nodemailer to send out an email to them
	// var nonce = uuid.v4();
	// var mailBody = createVerificationEmail(nonce);
	// sendMail(user.email, mailBody, function() {
 //    redisClient.set(nonce, user.id, function() {


 	//set up specific email type
 	var transporter = nodemailer.createTransport({
 		service: 'Gmail',
 		auth: {
 			user: user: 'gmail.user@gmail.com',
        pass: 'userpass'
    	}
	});


});


	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});





})



*/

router.post('/', function (req, res) {

	//https://www.google.com/settings/security/lesssecureapps
	//use this to change to less secure apps allowed in your gmail account
  
  //Setup Nodemailer transport, 
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: "MY EMAIL",
          //pass: "MY PASSWORD" 
      }
  });
  //Mail options
  var mailOptions = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: 'MY EMAIL',
      subject: 'Website contact form: NAME: ' + req.body.name + ' EMAIL: ' + req.body.email + ' MESSAGE: ',
      text: req.body.message
  };

  transporter.sendMail(mailOptions, function (error, response) {
      //Email not sent
      if (error) {
          res.render('index', { title: 'Homepage', msg: 'Error occured, message not sent.', err: true, page: 'index' })
     		console.log(error);
      }

      // Email sent
      else {
          res.render('index', { title: 'Homepage', msg: 'Message sent! Thank you.', err: false, page: 'index' })
      		console.log(response);
      }
  });

	

	email.addTo(req.body.email2);
	email.setFrom("MY EMAIL");
	email.setSubject("TESTING");
	email.setHtml("This is the body");

	sendgrid.send(email);
///need to use conditional to run through the req.body.email to see which submit button to run on the data


});



//*****************SENDGRID SEND EMAILS TO CUSTOMEERS********************
// using SendGrid's Node.js Library - https://github.com/sendgrid/sendgrid-nodejs







module.exports = router;
