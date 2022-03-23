import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'llewellyn.ankunding9@ethereal.email',
        pass: 'v1yv45aAFW552P8bh6'
    }
},
    { 
        from: 'Glovepicker-web-app <llewellyn.ankunding9@ethereal.email>' 
    })

export const mail = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

//module.exports = mail