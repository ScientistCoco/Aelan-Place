/** Error handling: https://thecodebarbarian.com/80-20-guide-to-express-error-handling */
import { Availability, Email, HealthCheck } from './routes';
import bodyParser from 'body-parser';
import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(bodyParser.json());

/** Routes: */
app.use('/api/availabilities', Availability);
app.use('/api/email', Email);
app.use('/api/healthcheck', HealthCheck);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
