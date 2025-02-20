import db from '@/db';
import { usersTable } from '@/db/schema';
import { LithiaRequest, LithiaResponse } from 'lithia';

export default async function handle(req: LithiaRequest, res: LithiaResponse) {
  const users = await db.select().from(usersTable);
  res.json(users);
}
