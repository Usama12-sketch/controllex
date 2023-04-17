import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(401).json({ message: "Please signin to create a post." })
  }
  //Get User
  const prismaUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  })
  //check to see if post was liked by user
  const hearts = await prisma.hearts.findFirst({
    where: {
      postId: req.body.postId,
      userId: prismaUser.id,
    },
  })

  if (req.method === "POST") {
    //Add Like
    try {
      if (!hearts) {
        const result = await prisma.hearts.create({
          data: {
            postId: req.body.postId,
            userId: prismaUser.id,
          },
        })
        res.status(201).json(result)
      } else {
        const result = await prisma.hearts.delete({
          where: {
            id: hearts.id,
          },
        })
        res.status(200).json(result)
      }
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post" })
    }
  }
}
