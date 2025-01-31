import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
// import { readFileSync } from 'fs';
// import path from 'path';

const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
    // Make sure to add the following line to your connection object if you are using SSL
    // ssl: {
    //   ca: readFileSync(
    //     path.resolve(process.cwd(), 'certs', 'ca-certificate.crt'),
    //     'utf-8',
    //   ).toString(),
    // },
  },
  schema,
});

export default db;
