import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/pages/lib/prisma';
import { authOptions } from '../../auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(404).json({ error: 'Unauthorized' })
    return
  }
  const PrismaUser = await prisma.user.findUnique({
    where: { email: session.user?.email },
  })
  if (!PrismaUser) {
    res.status(404).json({ error: 'Unauthorized' })
    return
  }
  console.log(PrismaUser.id)


  const { emails, name, img } = req.body;
  const result = await prisma.user.create({

    data: {
      emails,
      name,
      img,
      userId: PrismaUser.id

    },
  });
  res.json(result);
}