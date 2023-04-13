import MainPosts from '@/components/Get/MainPosts';
import prisma from '@/lib/prisma'
import React from 'react'
import Post from '@/components/Create'
import { SafeJson, safeJson } from "@/lib/formatHelpers";
import { useState, useRef } from 'react';
import { useSession } from "next-auth/react";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';


const Blog = ({ posts, Admins, comments, Blocks, archives }) => {
  const session = useSession(false)




  const url = `/api/CUD/Blog`
  const url2 = `/api/CUD/Draft`
  const data = { title: '', content: '', img: ''}
  const publish = {published: true}



  const [form, setForm] = useState(data)
 const [add, setAdd] = useState("hidden")
 
  
  const urlA = "/api/CUD/Blog"
  console.log(comments)
  // console.log(Admins)
  return (
    <>
    <Head>
     <title> Blog</title>
    </Head>
      <div className=  ' p-5 text-black bg-gradient-to-br  flex-col gap-5'>
        <div className='flex  justify-center'> 

<h1 className='rounded-xl drop-shadow-lg bg-gradient-to-bl from-green-600 to-green-100 font-serif p-5 text-center md:text-4xl text-3xl lg:text-7xl main'>
        Controllex
</h1>
        </div>

<button className=' m-2  bg-purple-300 p-1 rounded-lg font-semibold ' onClick={()=> setAdd(!add)}>{add ? "Add" : "Cancel"} </button>

        <div className={`${add ? "hidden" : "flex"} shadow-2xl shadow-green-500 bg-gray-500 hover:bg-gray-800 transition-all duration-500 rounded-sm p-4  flex-col gap-5`}>
          <label  className='bg-gray-400 p-2 rounded-lg w-max'>Title:</label>
          <input id='input1' className='transition-all duration-500    hover:rounded-sm' value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}></input>

          <label  className='bg-gray-400 p-2 rounded-lg w-max'>Content :</label>
          <textarea id='input2' className='transition-all duration-500 hover:rounded-sm' cols="30" rows="10" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })}></textarea>
          <label  className='bg-gray-400 p-2 rounded-lg w-max'>Image Url : </label>
          <input className='transition-all duration-500 hover:rounded-sm' id='input3' value={form.img} onChange={e => setForm({ ...form, img: e.target.value })}></input>
          <Post  input1={form.title} setForm={setForm} data={data} publish={publish} url={url} form={form} />
        </div>
         
<div>

<MainPosts url={urlA} posts={posts} Blocks={Blocks} archives={archives}  Admins={Admins}/>
</div>

      </div>




  


</ >
)
}

export default Blog

export const getServerSideProps = async () => {

  let posts = await prisma.post.findMany({
    
    where:{
      published: true,
      
     
        
      
    
    },

    include: {
      user: true,
      Comments: {
        include:{
          user: true
        }
      }
    }
  });
  let archives = await prisma.archives.findMany()
  
  let Admins = await prisma.admins.findMany()
  let Blocks = await prisma.blocs.findMany()
  Admins = SafeJson(Admins);
  Blocks = SafeJson(Blocks);
  posts = SafeJson(posts)
  
   archives = SafeJson(archives)
  // console.log(archives)
  return {
    props: { posts,  Admins, Blocks, archives },
  };
};