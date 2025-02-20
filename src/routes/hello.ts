import { LithiaRequest, LithiaResponse } from 'lithia';

export default async function handle(req: LithiaRequest, res: LithiaResponse) {
  res.send('Hello, from Lithia! 🚀');
}
