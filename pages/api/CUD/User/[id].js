import prisma from '@/pages/lib/prisma';

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
    const { name, emails, img} = req.body;
    console.log({ name });
    const result = await prisma.admins.update({
      where: { id: projectId },
      data: { name , emails, img },
    })
    res.json(result);
  }

  if (req.method === 'DELETE') {
    const projectId = req.query.id ;
    const result = await prisma.admins.delete({
      where: { id: projectId }
    });
    res.json(result);
  }

}