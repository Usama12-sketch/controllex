import prisma from '../../lib/prisma'
import React, {useEffect, lazy, Suspense} from 'react'
import Post from '../../components/Create'
import Deletebtn from '../../components/Edit'
import { SafeJson, safeJson } from "../../lib/formatHelpers";
import { useState, useRef } from 'react';
import EditAdmins from '../../components/EditAdmins';
import { useSession } from "next-auth/react";

import { useRouter } from 'next/router'



const Blog = ({ Admins, }) => {
  const [ NotAdmin, setNotadmin] = useState()
  
  
  const url = "/api/CUD/Admins"
  const data =  { emails: '', name: '', img: '', }
  
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
          <input  id='input1' className='transition-all duration-500    hover:rounded-sm' value={form.emails} onChange={e  => setForm({...form, emails: e.target.value  })}></input>

          <textarea id='input2' className='transition-all duration-500 hover:rounded-sm' cols="30" rows="10" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}></textarea>


          <input  className='transition-all duration-500 hover:rounded-sm' id='input3' value={form.img} onChange={e => setForm({ ...form, img: e.target.value })}></input>
          <Post setForm={setForm} data={data} url={url} form={form} />


{Admins.map((block) => <div key={block.id}>email: {block.emails}
<h1>name:{block.name}</h1>
<h1>img:{block.img}</h1>
<EditAdmins url={url} emailsform={block.emails} id={block.id} name={block.name} img={block.img} />
</div>)}

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

export default Blog

export const getServerSideProps = async () => {
  
  let Admins = await prisma.admins.findMany({
    include:{
      user: true
    }
  })
  
  Admins = SafeJson(Admins)
  return {
    props: {  Admins, },
  };
};