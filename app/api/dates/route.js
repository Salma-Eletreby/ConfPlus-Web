import { getDates } from "./dates-repo"

export async function GET(request) {
    try {
      const dates = await getDates()
      return Response.json(dates)
    } catch (err) {
        console.log(err)
        return Response.json({ error: err.message}, {status: 500 })
    }
  }