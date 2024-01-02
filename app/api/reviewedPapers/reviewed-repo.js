import path from 'path'
import { promises as fs } from 'fs'

const dataPath = path.join(process.cwd(), 'data/reviewedPapers.json')

export async function getPapers() {
    const fileContent = await fs.readFile(dataPath, 'utf8')
    return JSON.parse(fileContent)
  }