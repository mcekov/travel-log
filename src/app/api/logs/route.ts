import { TravelLog, TravelLogs, TravelLogWithId } from '@/models/TravelLogs';
import { NextApiResponse } from 'next';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  const logs = await TravelLogs.find().toArray();
  const data = JSON.stringify(logs);
  return new Response(data);
}

export async function POST(
  req: NextApiResponse<
    TravelLogWithId | TravelLogWithId[] | { message: string }
  >
) {
  const validatedLog = await TravelLog.parseAsync(req.body);
  const insertResult = await TravelLogs.insertOne(validatedLog);

  return new Response({ ...validatedLog, _id: insertResult.insertedId });
}
