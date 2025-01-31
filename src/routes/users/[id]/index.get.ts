import db from '@/db';
import { usersTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NotFoundError } from 'lithia/core';
import { LithiaRequest, LithiaResponse } from 'lithia/types';

export default async function handle(req: LithiaRequest, res: LithiaResponse) {
  const id = Number(req.params.id);
  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.id, id),
  });

  if (!user) {
    throw new NotFoundError(`User does not exist with id ${id}`);
  }

  res.json(user);
}
