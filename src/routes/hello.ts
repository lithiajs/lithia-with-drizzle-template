import { LithiaRequest, LithiaResponse } from 'lithia/types';

export default async function handle(req: LithiaRequest, res: LithiaResponse) {
  res.send('Hello, World!');
}
