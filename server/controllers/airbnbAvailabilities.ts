import { Response, Request } from 'express';
import got from 'got';

const availabilityEndpoint = "https://www.airbnb.com.au/api/v2/homes_pdp_availability_calendar";

export const getAvailabilities = async (req: Request, res: Response) => {
  const { listing_id, month, year, count } = req.body;

  const searchParams = new URLSearchParams([
    ['key', 'd306zoyjsyarp7ifhu67rjxn52tv0t20'],
    ['listing_id', listing_id],
    ['month', month],
    ['year', year],
    ['count', count]
  ]);

  const details: any = await got(availabilityEndpoint, { searchParams: searchParams, responseType: 'json' });
  
  const months = details.body.calendar_months.map((month: any) => month.days);  

  const days = months.map((month: any) => month.map((day: any) => { 
    return {
      date: day.date, 
      available: day.available
    }
  }));

  return res.json([].concat.apply([], days));
};
