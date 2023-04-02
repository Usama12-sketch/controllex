import prisma from '../../lib/prisma'
import React from 'react'
// import Post from '../../components/Create'
import Deletebtn from '../../../components/Edit'
import { SafeJson, safeJson } from "../../lib/formatHelpers";
import { useState, useRef } from 'react';
import { useSession } from "next-auth/react";
import Head from 'next/head';
import Image from 'next/image';




const Blog = ({ posts, Admins, Blocks }) => {
  const session = useSession(false)
  
  // const allowedUsers = ["usama jamshaid", "John Doe", "Jane Smith"];

  
//   const url = `/api/CUD/Blog`
//   const data =  { title: '', content: '', img: '', }
  

//   const [form, setForm] = useState(data)

  console.log(posts)
//   const allowedUsers = [
// { name: "usama jamshaid", emails: "usama@example.com" },
// { name: "John Doe", emails: "john@example.com" },
// { name: "Jane Smith", emails: "jane@example.com" }
// ];
//   console.log(Blocks)
//   console.log(Admins)

  return (
    <>
    <Head>
      <title>{posts.title}</title>
    </Head>
<div className=' from-green-800 bg-gradient-to-tr h-screen'>
<h2 className='mx-3 text-xl font-semibold '>
{posts.user.name}
</h2>
<div className=' relative rounded-3xl overflow-hidden h-10  w-10 mx-1'>
<div className=' bg-transparent border-t-4 border-4 border-blue-500 shadow-2xl shadow-green-400 rounded-xl animate-spin w-full h-full absolute top-0 left-0'></div>
<Image width={60} height={50} layout="responsive" src={posts.user.image} alt="" />
</div>
<hr />
<br />
<h1 className=' bg-gray-400 mx-1 text-white shadow-md text-2xl font-semibold   '>
{posts.title}
</h1>
<br />
<hr />
{posts.content}

    
       <div key={posts.id}> 
        <h1>{posts.title}</h1>
    {   !Blocks.some(p => p.emails === session.data?.user?.email)     ? ( <div>
    {   Admins.some(p => p.emails === session.data?.user?.email)  || session.data?.user?.email === posts.user.email   ? ( <div>  
      <div className="flex gap-4">
        <Deletebtn posttitle={posts.title} img={posts.img} id={posts.id} content={posts.content} user={posts.user} />
        </div>
      </div>
      ) : null}
      </div>
) : null}

      </div>

  
</div>      
    </>
  )
}

export default Blog

export const getServerSideProps = async ({params}) => {
  
  
  let posts = await prisma.post.findUnique({
    where:{
     id : params.id
    },
    include: {
      user: true

    }
  });
  let Admins = await prisma.admins.findMany()
  let Blocks = await prisma.blocs.findMany()
  Admins = SafeJson(Admins);
  Blocks = SafeJson(Blocks);
  posts = SafeJson(posts)
  return {
    props: { posts, Admins, Blocks },
  };
};