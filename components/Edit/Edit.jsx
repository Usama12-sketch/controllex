"use client"
import { useState } from 'react'
import React from 'react'
import { useRouter } from 'next/router'

import { useSession } from "next-auth/react";

const EditPostS = ({ id, posttitle,archives, content, img , user}) => {
  const router = useRouter(false)
  const session = useSession(false)

  const [form, setForm] = useState({ title: '', content: '', img: '', id: "" })
  const [display, setDisplay] = useState("hidden")

  function reset() {
    setForm({ title: '', content: '', img: '' })
  }
  
  async function deleteposts(id) {
    const post = await fetch(`/api/CUD/Blog/${id}`, {
      method: 'DELETE',
    })
    if(archives.some((p) => p.id === id)){

  
    }
    router.replace(router.asPath, undefined, {scroll: false})
    reset()

  }


  async function updateposts(data) {
    const post = await fetch(`/api/CUD/Blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }

      
    })
    router.replace(router.asPath, undefined, {scroll: false})
    console.log(post.json())
    setDisplay("hidden");
    // reset()
    
  }


  return (
    <div className=' z-40'>
      <div className='flex flex-col   gap-4 '>
        <div className=' flex'>
  <button className='bg-blue-500 rounded  p-2 w-min' onClick={() => { setForm({title:posttitle, content:content , img:img }); setDisplay("block") }}>Edit</button>

        </div>
        <br />

      </div>


      <div className={`flex flex-col gap-2 p-2 justify-center items-center  fixed top-0 h-screen  ${display}`} >

        {/* 
        Update here  ..........
        */}


<div className={` bg-blue-400 p-2 rounded-md `} >
                              
                           

        <input type="text" placeholder='Title' onChange={e => setForm({...form, title: e.target.value})} value={form.title} className=' px-2 rounded-sm w-full my-1 bg-red-200' />

        <textarea value={form.content} className={` px-1 w-full bg-green-200`} id="" cols="30" rows="10" onChange={e => setForm({...form, content: e.target.value})} ></textarea>
        <input  value={form.img} onChange={e => setForm({...form, img: e.target.value})} className='w-full px-1 bg-blue-900 placeholder:text-green-200' type="text" placeholder='type url here' />

        <ol className='flex gap-5'>
          <button className='bg-blue-500 rounded  p-2 w-min' onClick={() => deleteposts(id)}>delete</button>
          <button className='bg-blue-500 rounded p-2  w-min' onClick={() => {
            setDisplay("hidden");
            reset()
          }}>cancel</button>
          <button className='bg-blue-500 rounded p-2  w-min' onClick={() => updateposts(form)}>update</button>
        </ol>
</div>
      </div>
    </div>
  )
}

export default EditPostS
