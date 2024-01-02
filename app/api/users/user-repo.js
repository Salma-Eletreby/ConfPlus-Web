import path from "path";
import { promises as fs } from "fs";

const dataPath = path.join(process.cwd(), "data/users.json");

export async function getUsers() {
  const fileContent = await fs.readFile(dataPath, "utf8");
  return JSON.parse(fileContent);
}
