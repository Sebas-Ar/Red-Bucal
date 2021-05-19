import sgMail from "@sendgrid/mail";

export default (req, res) => {
    if (req.method === "GET") {
        const { email } = req.query;

        sgMail.setApiKey(process.env.TOKEN_SEND_GRID);

        const contentHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Correo</title>
            </head>
            <body>
                <h2>¡Bienvenido a tu programa de beneficios RED BUCAL!</h2>
                <p>Nuestros especialistas están listos para atenderte en cualquiera de nuestras sucursales. Ingresando a <a href="www.redbucal.com">www.redbucal.com</a> tendrás acceso a tu perfil y todos los beneficios de la cobertura</p>
                <p>Para más información, puedes comunicarte con nosotros al teléfono +507 63281368</p>
                <p>El equipo de Red Bucal</p>
            </body>
            </html>
        `;
        const msg = {
            to: email,
            /* from: 'xevaz.ariasd@gmail.com', */
            from: "redbucal.info@gmail.com",
            subject: "CONTACTENOS - Red Bucal",
            text: "esete es el texto de inicio",
            html: contentHTML,
        };

        try {
            sgMail.send(msg);
        } catch (error) {
            console.log(error);
        }

        res.status(200).json({
            status: "ok",
            message: "correo enviado",
        });
    } else {
        // Handle any other HTTP method
    }
};
