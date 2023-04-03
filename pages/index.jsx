import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/IndexNavbar'

import Query from '@/components/Data-Emails/Query'
import UpdateDescription from '@/components/Data-Emails/update'
import prisma from '../lib/prisma'
import { getSession, useSession } from 'next-auth/react'
import { authOptions } from './api/auth/[...nextauth]'
import { useRouter } from 'next/router'
// import { SafeJson } from './lib/formatHelpers'


const inter = Inter({ subsets: ['latin'] })

export default function Home({post}) {

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
    <div>
      </div>    
     
      
    <h1>
      </h1>  
    {/* <QueryWrapper> */}
    {/* </QueryWrapper> */}
      <Query Post={post.Post} data={post}/>
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
        Post: true,
      }
    })
    
    
    const serializedData = JSON.stringify(data);
    const safeData = JSON.parse(serializedData);   
    console.log(safeData)
    return{ props: {
      post: safeData,
    }}
  }

  else{
  
    return { props: { } }
  }
  }