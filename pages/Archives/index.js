
import prisma from '../../lib/prisma'
import React, {useEffect, lazy, Suspense} from 'react'
import Post from '../../components/Create'
import { SafeJson, safeJson } from "@/lib/formatHelpers";
import { useState, useRef } from 'react';
import { useSession } from "next-auth/react";

import { useRouter } from 'next/router'; 



const Archives = ({ Admins,posts }) => {
  const [ NotAdmin, setNotadmin] = useState()
  
  
async function Unarchive (id){
  const archive = await fetch(`/api/CUD/archives/${id}`,{
    method: 'DELETE',
  })
  router.replace(router.asPath, undefined, {scroll: false})
}

  const url = "/api/CUD/archives"
  const data =  {  id:"",  }
  
  const [form, setForm] = useState(data)
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotadmin( "Alert! you are not Usama")
    }
    , 2000);
    return () => clearTimeout(timer);
  }, []);
  
  
  console.log(Admins)
  const session = useSession(false)
  const router = useRouter()
  if(session.status === 'unauthenticated'){
    router.replace('/Blog')
  }
 else if(session.status === 'authenticated'){
   return (
     <div className=' bg-gradient-to-br from-yellow-200 to-pink-600 text-red-500'>
<Suspense fallback={<div> {session.data?.user?.name} is waiting for surprise</div>}>



      <div className="flex gap-4"></div>
    {   Admins.some((p) => p.emails === session.data?.user?.email)  || session.data?.user?.email === "chodarykhan115@gmail.com" ? ( <div>  
      
        
  


      <div className='text-black flex flex-col gap-5'>

        <div className=' shadow-2xl shadow-green-500 bg-gray-500 hover:bg-gray-800 transition-all duration-500 rounded-sm p-4 flex flex-col gap-5'>


{/*          
          <Post setForm={setForm} data={data} url={url} form={form} /> */}

          {posts.filter(post => Admins.some(archive => archive.id == post.id)).map((post, index) => {
  return (
    <ol className='bg-green-300 to-yellow-200 shadow-2xl flex flex-col gap-3' key={index}>
      <div className='flex flex-col gap-1 bg-red-400 p-3'>
        {/* <h1 className='font-mono w-max p-2 rounded-lg bg-slate-400 text-center'>{post.user.name}</h1> */}
        {/* < layout='intrinsic' width={40} height={40} src={post.user.image} alt='' /> */}
        <h1 className='bg-clip-text bg-gradient-to-br text-3xl font-serif'>{post.title}:</h1>
        
               <p className='text-lg' dangerouslySetInnerHTML={{__html:post.content}}></p>

<button onClick={()=> Unarchive(post.id)}>UnArchive</button>
      </div>
    </ol>
  );
})}




        </div>
      </div>


</div>
) : <div className='flex justify-center relative h-screen    items-center text-center '>

<h1>
   {NotAdmin}  
  </h1>
</div>
}
</Suspense>
    </div>
  )
}
}

export default Archives

export const getServerSideProps = async () => {
  let posts = await prisma.post.findMany()
  let Admins = await prisma.archives.findMany()
  
  Admins = SafeJson(Admins)
  posts = SafeJson(posts)
  return {
    props: {  Admins, posts},
  };
};