import nodemailer from 'nodemailer';
import config from '../config';
export const sendEmail = async () => {
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
    to: 'bar@example.com, baz@example.com', // list of receivers
    subject: 'Password Change', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  });
};
