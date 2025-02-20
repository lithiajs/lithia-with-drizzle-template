import db from '@/db';
import { usersTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { LithiaRequest, LithiaResponse, NotFoundError } from 'lithia';

export default async function handle(req: LithiaRequest, res: LithiaResponse) {
  const id = Number(req.params.id);
  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.id, id),
  });

  if (!user) {
    throw new NotFoundError(`Cannot find user with id ${id}`);
  }

  await db.delete(usersTable).where(eq(usersTable.id, id));

  res.status(204).end();
}
