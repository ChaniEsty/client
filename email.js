var nodemailer = require('nodemailer');

class Email{
    sendEmail=(user,job)=>{
        console.log("sending mail",user);
        var transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user:  process.env.USER_MAIL,
                pass: process.env.PASSWORD_MAIL
            }
        });
        var mailOptions = {
            from: process.env.USER_MAIL,
            to: user,
            subject: `A new job just for you `,
            text: job.dataValues,
        };
        transporter.sendMail(mailOptions,function(error, info){
           
            if (error) {
              console.log("sending mail",error);
            } 
            else {
               
              console.log('Email sent: ' + info.response);
            }
        });
    }
}

const email=new Email();
module.exports=email;