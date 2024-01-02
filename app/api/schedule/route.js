import { getSched, addSchedule } from "./schedule-repo.js";

export async function GET(request) {
  try {
    const sched = await getSched();
    return Response.json(sched);
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    let schedule = await request.json();
    schedule = await addSchedule(schedule);
    return Response.json({schedule}, { status: 201 });
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
