import path from 'path'
import { promises as fs } from 'fs'

const dataPath = path.join(process.cwd(), 'data/locations.json')

export async function getLocation() {
    const fileContent = await fs.readFile(dataPath, 'utf8')
    return JSON.parse(fileContent)
  }