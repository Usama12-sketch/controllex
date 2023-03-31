import prisma from '../lib/prisma'
import React from 'react'
import Post from '../../components/Create'
import Deletebtn from '../../components/Edit'
import { SafeJson, safeJson } from "../lib/formatHelpers";
import { useState, useRef } from 'react';
import { useSession } from "next-auth/react";




const Blog = ({ posts, Admins, Blocks }) => {
  const session = useSession(false)
  
  // const allowedUsers = ["usama jamshaid", "John Doe", "Jane Smith"];

  
  const url = `/api/CUD/Blog`
  const data =  { title: '', content: '', img: '', }
  

  const [form, setForm] = useState(data)

  console.log(posts)
  const allowedUsers = [
{ name: "usama jamshaid", emails: "usama@example.com" },
{ name: "John Doe", emails: "john@example.com" },
{ name: "Jane Smith", emails: "jane@example.com" }
];
  console.log(Blocks)
  console.log(Admins)

  return (
    <div>
      <div className='text-black flex flex-col gap-5'>

        <div className=' shadow-2xl shadow-green-500 bg-gray-500 hover:bg-gray-800 transition-all duration-500 rounded-sm p-4 flex flex-col gap-5'>
          <input  id='input1' className='transition-all duration-500    hover:rounded-sm' value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}></input>

          <textarea id='input2' className='transition-all duration-500 hover:rounded-sm' cols="30" rows="10" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })}></textarea>


          <input  className='transition-all duration-500 hover:rounded-sm' id='input3' value={form.img} onChange={e => setForm({ ...form, img: e.target.value })}></input>
          <Post setForm={setForm} data={data} url={url} form={form} />
{/* {Blocks.map((block) => <div key={block.id}>{block.emails}</div>)} */}
{Admins.map((block) => <div key={block.id}>{block.emails}</div>)}

        </div>
      </div>



    
      {posts.map((post) => <div key={post.id}> {post.id}
        <h1>{post.title}</h1>
    {   !Blocks.some(p => p.emails === session.data?.user?.email)     ? ( <div>
    {   Admins.some(p => p.emails === session.data?.user?.email)  || session.data?.user?.email === post.user.email   ? ( <div>  
      <div className="flex gap-4">
        <Deletebtn posttitle={post.title} img={post.img} id={post.id} content={post.content} user={post.user} />
        </div>
      </div>
      ) : null}
      </div>
) : null}

        <button>post</button>

      </div>)}

  
    </div>
  )
}

export default Blog

export const getServerSideProps = async () => {
  
  
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