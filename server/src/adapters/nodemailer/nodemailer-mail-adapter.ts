import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from './../mail.adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2b9d1d0184594c",
    pass: "44d893010a6c9c"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'André Sales <asalesg@gmail.com>',
      subject,
      html: body,
  });

  };
}