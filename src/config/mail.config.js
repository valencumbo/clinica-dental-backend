import nodemailer from "nodemailer";
import ENVIRONMENT from "./environment.config.js";

const mail_transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: ENVIRONMENT.GMAIL_USERNAME,
        pass: ENVIRONMENT.GMAIL_PASSWORD
    }
});

mail_transporter.verify().then(() => {
    console.log("✅ Nodemailer conectado a Gmail correctamente");
}).catch((error) => {
    console.error("❌ Error de conexión Nodemailer:", error);
});

export default mail_transporter;