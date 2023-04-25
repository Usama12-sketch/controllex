import prisma from '@/pages/../lib/prisma';

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
   
        const data = await prisma.post.findUnique({
          where: {
            id: req.query.id,
          },
          include: {
            user: {
              include: {
                Archives: true,
              },
            },
            Comments: {
              include: {
                user: true,
              },
            },
            Archives: true,
          },
        });
      
       
            return res.status(200).json(data)
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post" })
    }
  }
  
  
  
  

}

