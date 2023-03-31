import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/pages/lib/prisma';

export default async function handler(req:  NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const data = await prisma.post.findMany()
      return res.status(200).json(data)
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post" })
    }
  }
  
  
  
  

  if(req.method === "POST")
  try {
  const { name, email } = req.body;
  const result = await prisma.post.create({
    data: {
      name,
      email,
      
    },
  });
return res.json(result);

}


catch (err) {
  res.status(403).json({ err: "Error has occured while making a post" })
} 
}

