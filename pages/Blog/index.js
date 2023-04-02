import GetPost from '../../components/GetPost';
import prisma from '../lib/prisma'
import React from 'react'
import Post from '../../components/Create'
import Deletebtn from '../../components/Edit'
import { SafeJson, safeJson } from "../lib/formatHelpers";
import { useState, useRef } from 'react';
import { useSession } from "next-auth/react";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';


const Blog = ({ posts, Admins, Blocks }) => {
  const session = useSession(false)

  // const allowedUsers = ["usama jamshaid", "John Doe", "Jane Smith"];


  const url = `/api/CUD/Blog`
  const url2 = `/api/CUD/Draft`
  const data = { title: '', content: '', img: '', }


  const [form, setForm] = useState(data)

  console.log(posts)
  //   const allowedUsers = [
  // { name: "usama jamshaid", emails: "usama@example.com" },
  // { name: "John Doe", emails: "john@example.com" },
  // { name: "Jane Smith", emails: "jane@example.com" }
  // ];
  const urlA = "/api/CUD/Blog"
  console.log(Blocks)
  console.log(Admins)
  return (
    <>
    <Head>
     <title> Blog</title>
    </Head>
      <div className='text-black flex flex-col gap-5'>

        <div className=' shadow-2xl shadow-green-500 bg-gray-500 hover:bg-gray-800 transition-all duration-500 rounded-sm p-4 flex flex-col gap-5'>
          <input id='input1' className='transition-all duration-500    hover:rounded-sm' value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}></input>

          <textarea id='input2' className='transition-all duration-500 hover:rounded-sm' cols="30" rows="10" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })}></textarea>


          <input className='transition-all duration-500 hover:rounded-sm' id='input3' value={form.img} onChange={e => setForm({ ...form, img: e.target.value })}></input>
          <Post url2={url2} setForm={setForm} data={data} url={url} form={form} />
          {/* {Blocks.map((block) => <div key={block.id}>{block.emails}</div>)} */}
          {/* {Admins.map((block) => <div key={block.id}>{block.emails}</div>)} */}


<GetPost url={urlA} posts={posts} Blocks={Blocks}  Admins={Admins}/>

        </div>
      </div>




  


</ >
)
}

export default Blog

export const getStaticProps = async () => {


  let posts = await prisma.post.findMany({
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