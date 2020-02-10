/** Error handling: https://thecodebarbarian.com/80-20-guide-to-express-error-handling */
import { Availability, Email, HealthCheck } from './routes';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const corsWhitelist = ["https://aelanplace.com"];
const corsOptions = {
  origin: function(origin: any, callback: any) {
    if (corsWhitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  }
};
const PORT = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(bodyParser.json());

/** Setting CORS */
app.use(cors(corsOptions));

/** Routes: */
app.use('/api/availabilities', Availability);
app.use('/api/email', Email);
app.use('/api/healthcheck', HealthCheck);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
