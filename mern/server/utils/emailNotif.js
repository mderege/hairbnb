import nodemailer from "nodemailer";

const sendEmail = async (emailSubject, emailMessage, emailReciepient, emailSender, replySend) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'hairbnbco@gmail.com',
            pass: 'uemn ijvl iloi kvfq',
        },
        tls: {
            rejectUnauthorized: false, //helps with errors 
        }
    })//object that communicates with the email server 

    const options = {
        from: emailSender,
        to: emailReciepient,
        replyTo: replySend,
        subject: emailSubject,
        html: emailMessage,
    }

    //sends email with content
    transporter.sendMail(options, function(err, info){
        if (err) {
            console.log("Error", err)
        }
        else {
            console.log("success", info)
        }
    }) 
}

export default sendEmail;