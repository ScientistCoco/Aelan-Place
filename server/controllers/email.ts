/** Sending emails: https://stackabuse.com/how-to-send-emails-with-node-js/ */
/** Mail host: https://mailtrap.io/inboxes/790027/messages/1526923931 */

import { Response, Request } from 'express';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '0bbec1079d833b',
    pass: '740e00eead2b7d'
  }
});

export const sendMail = (req: Request, res: Response) => {
  const { message } = req.body;

  const emailContents = {
    from: 'info@aelanplace.com',
    to: 'courtney.lum@gmail.com',
    subject: 'Aelan Place - Inquiry',
    text: `${message}`
  };

  transport.sendMail(emailContents, (err: Error) => {
    if (err) {
      return res.status(500).json({
        error: 'Failed to send.'
      })      
    } 
    return res.json({ message: 'success' });
  })  
}