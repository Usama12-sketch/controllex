import prisma from "../../../../lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(401).json({ message: "Please signin to create a post." })
  }

  if (req.method === "GET") {
    try {
      const data = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
        include: {
          Post: true,
          Archives: true
           
          },
        },
      )

      return res.status(200).json(data)
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post" })
    }
  }


}