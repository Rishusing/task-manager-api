const nodemailer = require('nodemailer');

const sendWelcomeEmail = (email, name) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rishu04072001@gmail.com',
            pass: process.env.emailPassword
        }
    });

    const mailOptions = {
        from: 'rishu04072001@gmail.com',
        to: email,
        subject: 'Thanks for joining in!',
        html: `<h1>Welcome ${name} </h1><p>That was easy!</p>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const sendCancelationEmail = (email, name) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rishu04072001@gmail.com',
            pass: '8853631554'
        }
    });

    const mailOptions = {
        from: 'rishu04072001@gmail.com',
        to: email,
        subject: `Good Buy, ${name}`,
        html: `I hope to see you back sometime soon`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'rishu04072001@gmail.com',
//         pass: '8853631554'
//     }
// });

// const mailOptions = {
//   from: 'rishu04072001@gmail.com',
//   to: 'rishusingh8853631554@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
