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

export default mail_transporter;