/** Error handling: https://thecodebarbarian.com/80-20-guide-to-express-error-handling */
import { Availability } from './routes';
import bodyParser from 'body-parser';
import express from 'express';

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

/** Routes: */
app.use('/api/availabilities', Availability);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
