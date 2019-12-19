import { Router, Response, Request } from 'express';
import { body } from 'express-validator';
import { parse, isPast, isThisMonth } from 'date-fns';
import { getAvailabilities } from "../controllers";
import { validate } from '../helpers';

const availabilityRouter = Router();

const postSchema = [
  body('listing_id').not().isEmpty().withMessage('Listing id must be provided'),
  body('month').not().isEmpty().withMessage('Starting month must be provided'),
  body('year').not().isEmpty().withMessage('Starting year must be provided')
    .custom((value, { req }) => {      
      const givenDate = parse(`${req.body.month}-${value}`, 'MM-yyyy', new Date());
      if (isPast(givenDate) && !isThisMonth(givenDate)) {
        throw new Error('Query dates must be in the present');
      }
      return true;
    }),
  body('count').not().isEmpty().withMessage('Number of months to count must be provided')
];

availabilityRouter.post('/', postSchema, validate, (req: Request, res: Response) => {
  getAvailabilities(req, res);
});

export default availabilityRouter;