import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c519112d6aedef",
      pass: "220fbf4763246f"
    }
  })

       {/*  @ts-ignore */}
export class NodemailerMailAdapter implements MailAdapter {
    // async sendMail(data: SendMailData) {
      /*  @ts-ignore */
      async sendMail({ subject, body }: SendMailData) {
        
        await transport.sendMail({
      from: 'Equipe Feedget <oi @feedget.com>',
      to: 'Matheus Felipe <matheusfelipefonsecasegundo@gmail.com>',
       /*  @ts-ignore */
      subject,
       /*  @ts-ignore */
      html: body,
    })
    }
  }
