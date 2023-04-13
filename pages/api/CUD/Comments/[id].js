
import prisma from '@/pages/../lib/prisma';

import { authOptions } from '../../auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
export default async function handler(req, res) {

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
    const { comment, } = req.body;
    console.log({ comment });
    const result = await prisma.comments.update({
      where: { id: projectId },
      data: { comment, },
    })
    res.json(result);
  }

  if (req.method === 'DELETE') {
    const projectId = req.query.id ;
    const result = await prisma.comments.delete({
      where: { id: projectId }
    });
    res.json(result);
  }

}