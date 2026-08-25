import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATE = await fs.readFile(path.join(__dirname, 'index.test.ts.template'), 'utf-8');

for (let i = 0; i < 700; i++)
  await fs.writeFile(path.join(__dirname, `${i}.test.ts`), TEMPLATE);

