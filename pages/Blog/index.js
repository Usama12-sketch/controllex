import MainPosts from '@/components/Get/MainPosts';
import prisma from '../../lib/prisma'
import React from 'react'
import Post from '@/components/Create'
import { SafeJson} from "@/lib/formatHelpers";
import { useState} from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Quill = dynamic(() => import("../../components/Quill"), {
  ssr: false,
})

const Blog = ({ posts, Admins, comments, Blocks, archives }) => {
 const [title, setTitle] = useState("")
  const [value, setValue] = useState("");



  const url = `/api/CUD/Blog`
  const form = { title: title, content: value}
  const publish = {published: true}

  const data = ""

 const [add, setAdd] = useState("hidden")
 
  
  const urlA = "/api/CUD/Blog"
  return (
    <>
    <Head>
     <title> Blog</title>
    </Head>
      <div className=  ' p-5 text-black bg-gradient-to-br  flex-col gap-5'>
        <div className='flex   justify-center'> 

<h1 className='rounded-xl drop-shadow-lg bg-gradient-to-bl from-blue-600 shadow-b to-green-100 font-serif p-5 text-center md:text-4xl text-3xl lg:text-7xl main'>
        Controllex
</h1>
        </div>

<button className=' m-2  bg-purple-300 p-1 rounded-lg font-semibold ' onClick={()=> setAdd(!add)}>{add ? "Add" : "Cancel"} </button>

        <div className={`${add ? "hidden" : "flex"} shadow-2xl shadow-green-500 bg-gray-500 hover:bg-gray-800 transition-all duration-500 rounded-sm p-4  flex-col gap-5`}>
          <label  className='bg-gray-400 p-2 rounded-lg w-max'>Title:</label>
          <input id='input1' className='text-3xl transition-all duration-500    hover:rounded-sm' value={title} onChange={e => setTitle(e.target.value )}></input>
         <Quill value={value} setValue={setValue} /> 

          <Post  input1={title} setValue={setValue} setForm={setTitle} data={data} tag="Post" publish={publish} url={url} form={form} />
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
      },
      hearts: {
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