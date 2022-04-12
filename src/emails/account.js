const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'silviu.c.anton@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCacelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'silviu.c.anton@gmail.com',
        subject: 'Why are you leaving us?',
        text: `Hello, ${name}! We are sorry to hear that you cancelled your account. Please let us know what made you take this decision.`
    })
}

module.exports = { sendWelcomeEmail, sendCacelationEmail }