/** Sending emails: https://stackabuse.com/how-to-send-emails-with-node-js/ */
/** Mail host: https://mailtrap.io/inboxes/790027/messages/1526923931 */

import { Response, Request } from 'express';
import nodemailer from 'nodemailer';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD
  }
});

export const sendMail = (req: Request, res: Response) => {
  const { message } = req.body;

  const emailContents = {
    to: process.env.GMAIL_USERNAME,
    subject: 'Aelan Place - Inquiry',
    html: `${message}`
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