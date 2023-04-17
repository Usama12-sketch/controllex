
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
    const { heart, } = req.body;
    console.log({ heart });
    const result = await prisma.hearts.update({
      where: { id: projectId },
      data: { heart, },
    })
    res.json(result);
  }

  if (req.method === 'DELETE') {
    const projectId = req.query.id ;
    const result = await prisma.hearts.delete({
      where: { id: projectId }
    });
    res.json(result);
  }

}