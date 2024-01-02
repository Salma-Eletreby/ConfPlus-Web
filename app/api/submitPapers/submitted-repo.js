import path from "path";
import { promises as fs } from "fs";

const dataPath = path.join(process.cwd(), "data/submittedPapers.json");

export async function getPapers() {
  const fileContent = await fs.readFile(dataPath, "utf8");
  return JSON.parse(fileContent);
}

export async function addPaper(paper) {
  let papers = await getPapers()
  paper.id = "P"+ Date.now()
  papers.push(paper)
  await fs.writeFile(dataPath, JSON.stringify(papers))
  return paper
}