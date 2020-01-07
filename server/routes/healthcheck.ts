import { Router, Response, Request } from 'express';

const healthCheckRouter = Router();


healthCheckRouter.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Success '});
});

export default healthCheckRouter;