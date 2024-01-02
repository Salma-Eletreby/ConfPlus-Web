import { getUsers } from "./user-repo";

export async function GET(request) {
  try {
    const users = await getUsers();
    return Response.json(users);
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}