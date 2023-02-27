import db from '@/db';
import { WithId } from 'mongodb';
import { z } from 'zod';

export const TravelLog = z.object({
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  image: z.string().url(),
  rating: z.coerce.number().min(0).max(10).default(0),
  latitude: z.coerce.number().min(-90).max(90),
  longitude: z.coerce.number().min(-180).max(180),
  visitDate: z.coerce.date(),
});

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TravelLog = z.infer<typeof TravelLog>;
export type TravelLogWithId = WithId<TravelLog>;

export const TravelLogs = db.collection('logs');
