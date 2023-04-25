import Head from 'next/head'
import { Inter } from '@next/font/google'
import Profile from '@/components/Profile/Profile'
import prisma from '@/lib/prisma'
import SinglePost from '@/components/Get/SinglePost'

import SingleUser from '@/components/Get/SingleUser'
// import ImageUpload from '../../../components/Main/image'

// import { SafeJson } from './lib/formatHelpers'


const inter = Inter({ subsets: ['latin'] })

export default function Home({post}) {
  
  
    return (
      <>
      <Head>
        <title>{post?.name}</title>
        
        <meta name="description" content={post?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={post?.image} />
      </Head>
      <main className=' p-2'>
        {/* <SingleUser user={post.user}/> */}
  <SinglePost post={post}/>
              </main>
    </>
  )
}


export const getServerSideProps = async ({params}) =>{
  

    let  data = await  prisma.post.findUnique({
      where:{
    
        id: params.id,
      },
      include:{
        user: {
          include: {
            Archives: true
          }
        },
        
       Comments:{
                include:{
                  user:true
                }
              },
           
          Archives: true,
        },
      
    })
 
    
    const serializedData = JSON.stringify(data);
    const safeData = JSON.parse(serializedData);   Blog
    console.log(safeData)
    return{ props: {
      post: safeData,
    }}
  
  }