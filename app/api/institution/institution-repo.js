import path from "path";
import { promises as fs } from "fs";

const dataPath = path.join(process.cwd(), "data/institutions.json");

export async function getInst() {
  const fileContent = await fs.readFile(dataPath, "utf8");
  return JSON.parse(fileContent);
}