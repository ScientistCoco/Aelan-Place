import { Router, Response, Request } from 'express';
import { body } from 'express-validator';
import { sendMail } from "../controllers";
import { validate } from '../helpers';

const emailRouter = Router();

const postSchema = [
  body('message').not().isEmpty().withMessage('Message must be provided')
];

emailRouter.post('/', postSchema, validate, (req: Request, res: Response) => {
  sendMail(req, res);
});

export default emailRouter;