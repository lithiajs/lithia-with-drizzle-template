import db from '@/db';
import { usersTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { ConflictError } from 'lithia/core';
import { LithiaRequest, LithiaResponse } from 'lithia/types';

export default async function handle(req: LithiaRequest, res: LithiaResponse) {
  const body = await req.body<{
    name: string;
    age: number;
    email: string;
  }>();

  const userExists = await db.query.usersTable.findFirst({
    where: eq(usersTable.email, body.email),
  });

  if (userExists) {
    throw new ConflictError('Email already in use');
  }

  const user = await db
    .insert(usersTable)
    .values({
      name: body.name,
      age: body.age,
      email: body.email,
    })
    .returning();

  res.status(201).json(user);
}
