import express from 'express'
import nodemailer from 'nodemailer'
import { SubmitFeedbackUseCase } from "../src/use-cases/submit-feedback-use-case"
import {PrismaFeedbacksRepository} from "../src/repositories/prisma/prisma-feedback-repository"
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';


export const routes = express.Router(); // midware ou plugin

// const transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "c519112d6aedef",
//       pass: "220fbf4763246f"
//     }
//   })


routes.post("/feedbacks", async (req, res) => {
 
    const { type, comment, screenshot } = req.body;


    {/*  @ts-ignore */}
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    {/*  @ts-ignore */}
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMailAdapter                 
    )


      await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
       })

    


  
    // await transport.sendMail({
    //   from: 'Equipe Feedget <oi @feedget.com>',
    //   to: 'Matheus Felipe <matheusfelipefonsecasegundo@gmail.com>',
    //   subject: 'Novo feedback',
    //   html: [
    //     `<div style="font-family:sans-serif; font-size:16px color: #111">`,
    //     `<p>Tipo do feedback${type}</p>`,
    //     `<p>Comentário${comment}</p>`,
    //     `</div>`
    //   ].join('\n')
    // })
     // @ts-ignore 
    return res.status(201).send()
  });
  
  
  
  
  
  
  