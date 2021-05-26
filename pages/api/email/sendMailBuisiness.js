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
                <h2>¡Bienvenido a tu programa de beneficios RED BUCAL CORPORATIVO!</h2>
                <br />
                <p>Nuestros especialistas están listos para atenderte en cualquiera de nuestras sucursales. Ingresando a <a href="www.redbucal.com">www.redbucal.com</a> tendrás acceso a tu perfil y todos los beneficios de la cobertura</p>
                <br />
                <img src="/img/email/emailCorporativo.png" alt="Corporativo red bucal" />
                <br />
                <p>Síguenos nuestras redes como:</p>
                <p><a href="https://www.instagram.com/red_bucal/">Instagram</a> red_bucal</p>
                <p><a href="https://www.facebook.com/pages/category/Product-Service/Red-Bucal-103457618545667/">Facebook</a> red_bucal</p>
                <p><a href="https://www.linkedin.com/company/redbucal">Linkedln</a> red_bucal</p>
                <br />
                <p>Para más información, puedes comunicarte con nosotros al teléfono +507 63281368</p>
                <br />
                <p>El equipo de Red Bucal</p>
            </body>
            </html>
        `;
        console.log("sending email to " + email);
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
