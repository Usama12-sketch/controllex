import prisma from '../lib/prisma'
import React from 'react'
import Post from '../../components/Create'
import Deletebtn from '../../components/Edit'
import { SafeJson, safeJson } from "../lib/formatHelpers";
import { useState, useRef } from 'react';
import { useSession } from "next-auth/react";
import EditBlocs from '../../components/EditBlocs';




const Blog = ({ posts, Admins, Blocks }) => {
  const session = useSession(false)
  
  // const allowedUsers = ["usama jamshaid", "John Doe", "Jane Smith"];
  
  
  const url = `/api/CUD/Blocks`
  const data =  { emails: '', name: '', img: '', }
  
  
  setTimeout(NotAdmins, 6000)
  const [form, setForm] = useState(data)
  function NotAdmins (){
    return<div>you are gone!</div>
  }

  console.log(Blocks)

  return (
    <div>
      <div className='text-black flex flex-col gap-5'>
      {   Admins.some((p) => p.emails === session.data?.user?.email)   ? ( <div>  
        <div className=' shadow-2xl shadow-green-500 bg-gray-500 hover:bg-gray-800 transition-all duration-500 rounded-sm p-4 flex flex-col gap-5'>
          <input  id='input1' className='transition-all duration-500    hover:rounded-sm' value={form.emails} onChange={e  => setForm({...form, emails: e.target.value  })}></input>

          <textarea id='input2' className='transition-all duration-500 hover:rounded-sm' cols="30" rows="10" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}></textarea>


          <input  className='transition-all duration-500 hover:rounded-sm' id='input3' value={form.img} onChange={e => setForm({ ...form, img: e.target.value })}></input>
          <Post setForm={setForm} data={data} url={url} form={form} />
{/* {Blocks.map((block) => <div key={block.id}>{block.emails}</div>)} */}


{Blocks.map((block) => <div key={block.id}>email: {block.emails}
<h1>name:{block.name}</h1>
<h1>img:{block.img}</h1>
<EditBlocs  emailsform={block.emails} id={block.id} name={block.name} img={block.img} />
</div>)}
          
        </div>
     
</div>
) : <div className='flex justify-center relative h-screen    items-center text-center '>
<h1>
   Alert! 
  </h1>

  <hr />
<h1>

   {/* You are not from admins!  */}
   {NotAdmins()
  }
   
  </h1>
</div>
}
      </div>

    </div>
  )
}

export default Blog

export const getServerSideProps = async () => {
  
  let Blocks = await prisma.blocs.findMany()
  let Admins = await prisma.admins.findMany()
  
  Blocks = SafeJson(Blocks)
  Admins = SafeJson(Admins)
  return {
    props: {  Blocks, Admins },
  };
};