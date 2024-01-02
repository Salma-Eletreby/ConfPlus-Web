import { getInst } from "./institution-repo";

export async function GET(request) {
  try {
    const institutions = await getInst();
    return Response.json(institutions);
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
