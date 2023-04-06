import Head from 'next/head'
import { Inter } from '@next/font/google'
import Profile from '@/components/Profile/Profile'
import prisma from '@/lib/prisma'
import ImageUpload from '../../../components/Main/image'

// import { SafeJson } from './lib/formatHelpers'


const inter = Inter({ subsets: ['latin'] })

export default function Home({post}) {
  
  
    return (
      <>
      <Head>
        <title>{post?.name}</title>
        
        <meta name="description" content={post.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={post.image} />
      </Head>
      <main>
    <div>
      </div>    
     
      
  
      <Profile Post={post.Post} data={post}/>
      {/* <ImageUpload/> */}
              </main>
    </>
  )
}


export const getServerSideProps = async ({params}) =>{
  

    let  data = await  prisma.user.findUnique({
      where:{
        id: params.id
      },
      include:{
        Post: true,
        Archives: true
      }
    })
    
    
    const serializedData = JSON.stringify(data);
    const safeData = JSON.parse(serializedData);   
    console.log(safeData)
    return{ props: {
      post: safeData,
    }}
  
  }