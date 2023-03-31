import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/pages/lib/prisma';

import { authOptions } from '../auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(404).json({ error: 'Unauthorized' })
    return
  }
  const PrismaUser = await prisma.user.findUnique({
    where: { email: session?.user?.email },
  })
  if (!PrismaUser) {
    res.status(404).json({ error: 'Unauthorized' })
    return
  }
  console.log(PrismaUser.id)

  if (req.method === 'PUT') {
    const projectId = req.query.id 
    const { title, content, img } = req.body;
    console.log({ title });
    const result = await prisma.post.update({
      where: { id: projectId },
      data: { title , content, img },
    })
    res.json(result);
  }

  if (req.method === 'DELETE') {
    const projectId = req.query.id ;
    const result = await prisma.post.delete({
      where: { id: projectId }
    });
    res.json(result);
  }

}