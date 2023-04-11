// pages/api/comments/[postId].js

import prisma from '@/lib/prisma';


export default async function handler(req, res) {
 

  const postId = req.query.postId ;

  try {
    const comments = await prisma.comments.findMany({
      where: { postId },
      include: { user: true },
      orderBy: [{ createdAt: 'desc' }],
    });

    res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}
