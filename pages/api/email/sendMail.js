/* import nodeMailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport' */
import sgMail from '@sendgrid/mail'

export default (req, res) => {
    if (req.method === 'POST') {
        const { name, phone, email, message } = req.body

        sgMail.setApiKey('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')
        
        const contentHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Correo</title>
            </head>
            <body>
                <ul>
                    <li>Nombre: ${name}</li>
                    <li>Telefono: ${phone}</li>
                    <li>Email: ${email}</li>
                </ul>
                <p>${message}</p>
            </body>
            </html>
        `
        const msg = {
            to: email,
            from: 'info.redbucal@gmail.com',
            /* from: 'sebas_ariasd@hotmail.com', */
            subject: 'CONTACTENOS - Red Bucal',
            text: 'esete es el texto de inicio',
            html: contentHTML
        }

        const info = sgMail.send(msg);

        res.status(200).json({ info: info })

    } else {
        // Handle any other HTTP method
    }
}