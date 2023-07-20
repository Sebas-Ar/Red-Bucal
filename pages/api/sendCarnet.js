import sgMail from "@sendgrid/mail";
import axios from "axios";

export default async (req, res) => {
    if (req.method === "GET") {
        const { email, name, identification,start, end,plan  } = req.query;

        const apiUrl = `${req.secure ? 'https' : 'http'}://${req.headers.host}/api/generateCarnet`;

        sgMail.setApiKey(process.env.TOKEN_SEND_GRID);

        const contentHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Correo</title>
            </head>
            <body>
                <h2>Gracias por elegir Red Bucal Tu Plan de Salud</h2>

                <p>Red Bucal te brinda beneficios en Salud Dental y en Medicina Preventiva General, puedes descargar tu carnet de afiliación a Red Bucal que se encuentra adjunto, 
                tu Plan está activo a partir de hoy y puedes comenzar a utilizarlo de inmediato, solo debes coordinar con una de nuestras sucursales la atención que necesitas.</p>
                
                <p>Nuestros especialistas están listos para atenderte en cualquiera de nuestras sucursales. Ingresando a www.redbucal.com tendrás acceso a tu perfil y todos los beneficios de la cobertura.
                Para más información, puedes comunicarte a nuestra línea de Atención al Cliente vía WhatsApp <strong>+507 63281368</strong>.</p>
                
                <br>
                <p>El equipo de Red Bucal</p>
            </body>
            </html>
        `;

        const msg = {
            to: email.trim(),
            from: "redbucal.info@gmail.com",
            subject: "CONTACTENOS - Red Bucal",
            text: "esete es el texto de inicio",
            html: contentHTML,
            attachments: [],
        };

    
        try {
            
            const params = {
                name,
                identification,
                start,
                end,
                plan
              };
          
            const response = await axios.get(apiUrl, {
                params: params,
                responseType: 'arraybuffer'
              });

            msg.attachments.push({
                content: Buffer.from(response.data).toString('base64'),//pdfBytes.toString('base64'),
                filename: 'carnet.png',
                type: 'image/png',
                disposition: 'attachment',
            });

            sgMail.send(msg);
        } catch (error) {
            console.error(error);
        }

        res.status(200).json({
            status: "ok",
            message: "correo enviado",
        });
    } else {
        // Handle any other HTTP method
    }
};
