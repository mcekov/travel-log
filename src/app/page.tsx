import { TravelLogs } from '@/models/TravelLogs';

export default async function Home() {
  const logs = await TravelLogs.find().toArray();

  return (
    <main>
      <h1>Hello Travel Log!</h1>
      <h2>There are {logs.length} in the db</h2>
      {logs.map((log) => (
        <div key={log._id.toString()}>{log.title}</div>
      ))}
    </main>
  );
}
