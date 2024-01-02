import { getPapers, addPaper } from "./submitted-repo";

export async function GET(request) {
  try {
    const papers = await getPapers();
    return Response.json(papers);
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    let paper = await request.json();
    paper = await addPaper(paper);
    return Response.json({paper}, { status: 201 });
  } catch (err) {
    console.log(err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
