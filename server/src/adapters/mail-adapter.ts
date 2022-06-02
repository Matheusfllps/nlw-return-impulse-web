export interface SendMailData {
  subject: String;
  body: String;
}

export interface MailAdapter {
    sendMail: (data: SendMailData) => Promise<void>;
}