import React, { useEffect, useState } from "react";
const { Client } = require("whatsapp-web.js");

const whats = () => {
    const [QR, setQR] = useState(null);

    useEffect(() => {
        console.log("QR RECEIVED", QR);
    }, [QR]);

    const client = new Client();

    client.on("qr", (qr) => {
        // Generate and scan this code with your phone
        setQR(qr);
        console.log("QR RECEIVED", qr);
    });

    client.on("ready", () => {
        console.log("Client is ready!");
    });

    client.on("message", (msg) => {
        if (msg.body == "!ping") {
            msg.reply("pong");
        }
    });

    client.initialize();

    const test = () => {
        client.emit("test");
    };

    return (
        <div>
            <button onClick={}>Send Message</button>
        </div>
    );
};

export default whats;
