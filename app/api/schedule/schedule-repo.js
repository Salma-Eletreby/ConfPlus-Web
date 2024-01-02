import path from "path";
import { promises as fs } from "fs";

const dataPath = path.join(process.cwd(), "data/schedules.json");

export async function getSched() {
  const fileContent = await fs.readFile(dataPath, "utf8");
  return JSON.parse(fileContent);
}

export async function addSchedule(schedule) {
  await fs.writeFile(dataPath, JSON.stringify(schedule))
}