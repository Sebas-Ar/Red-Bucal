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
            to: 'juan_ariasd@hotmail.com',
            /* from: 'xevaz.ariasd@gmail.com', */
            from: 'sebas_ariasd@hotmail.com',
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