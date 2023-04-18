import Head from 'next/head'
import { Inter } from '@next/font/google'

import Profile from '@/components/Profile/Profile'
import prisma from '../lib/prisma'
import { getSession, useSession } from 'next-auth/react'
import { authOptions } from './api/auth/[...nextauth]'
import { useRouter } from 'next/router'
import { SafeJson } from '@/lib/formatHelpers'
// import { SafeJson } from './lib/formatHelpers'


const inter = Inter({ subsets: ['latin'] })

export default function Home({post,}) {

  const router = useRouter()
  const session = useSession()
  if(session.status === 'unauthenticated') 
  {
    router.replace('/Blog')
  } else if (session.status === 'authenticated') {

    
    return (
      <>
      <Head>
        <title>Controllex</title>
        
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
      <Profile Post={post.Post} data={post}/>
              </main>
    </>
  )
}
}

export const getServerSideProps = async ({req}) =>{
  const session = await getSession({req, authOptions})
  if(session){
  
        
    let  data = await  prisma.user.findUnique({
      where:{
        email: session.user.email
      },
      include:{
        Post:{
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

          },
        },
        Archives: true
      }
    })
  
      let post = SafeJson(data)
    // console.log(safeData)
    return{ props: {
      post,  
    }}
  }

  else{
  
    return { props: { } }
  }
  }