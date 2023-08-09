import Head from 'next/head'
import { Inter } from '@next/font/google'
import Profile from '@/components/Profile/Profile'
import prisma from '@/lib/prisma'
import ImageUpload from '@/components/Main/image'


export default function Home({ post }) {
  return (
    <>
      <Head>
        <title>{post?.name}</title>
        <meta name="description" content={post.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={post.image} />
      </Head>
      <main>
        <Profile Post={post.Post} data={post} />
        {/* <ImageUpload/> */}
      </main>
    </>
    
  )
}

// export async function getStaticPaths() {
//   const users = await prisma.user.findMany()
//   const paths = users.map((user) => ({ params: { id: user.id.toString() } }))
//   return { paths, fallback: false }
// }


export async function getStaticPaths() {
  const posts = await prisma.user.findMany()
  
  const serializedData = JSON.stringify(posts);
  const pages = JSON.parse(serializedData);
  const paths = pages.map(post => ({
    params: { id: post.id }
  }))
  return {
    paths,
    fallback: true // See the "fallback" section below
  }
}

export async function getStaticProps({ params }) {
  
  const data = await prisma.user.findUnique({
    where: {
      id :params.id,
    },
    include: {
      Post: {
        where:{
          published:true,
                    },
        include:{
          Comments:{
            include:{
              user:true
            }
          },
          hearts: {
            include:{
              user: true
            }
          }
    
        }
      },
      Archives: true,
    },
  });

  const serializedData = JSON.stringify(data);
  const safeData = JSON.parse(serializedData);

  return {
    props: {
      post: safeData,
    },
  
  };
}
