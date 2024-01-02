import { getLocation } from "./location-repo"

export async function GET(request) {
    try {
      const dates = await getLocation()
      return Response.json(dates)
    } catch (err) {
        console.log(err)
        return Response.json({ error: err.message}, {status: 500 })
    }
  }