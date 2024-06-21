import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (toEmail: string, link: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: config.email_sender,
      pass: config.email_app_pass,
    },
  });

  await transporter.sendMail({
    from: config.email_sender, // sender address
    to: toEmail, // list of receivers
    subject: 'Password Reset', // Subject line
    text: `Reset your password within 10 mins by clicking the link:${link}`, // plain text body
    html: `<b>Reset your password within 10 mins by clicking the link:${link}</b>`, // html body
  });
};
