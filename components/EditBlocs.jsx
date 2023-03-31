"use client"
import { useState } from 'react'
import React from 'react'
import { useRouter } from 'next/navigation'

import { useSession } from "next-auth/react";

const EditBlocs = ({ id, emailsform, name, img , user}) => {
  const router = useRouter(false)
  const session = useSession(false)

  const [form, setForm] = useState({ emails: '', name: '', img: '', id: "" })
  const [display, setDisplay] = useState("hidden")

  function reset() {
    setForm({ emails: '', name: '', img: '' })
  }

  async function deleteposts(id) {
    const post = await fetch(`/api/CUD/Blocks/${id}`, {
      method: 'DELETE',


    })
    console.log(post.json())
    router.refresh()

  }


  async function updateposts(data) {
    const post = await fetch(`/api/CUD/Blocks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }


    })
    console.log(post.json())
    router.refresh()
    // reset()
    
  }

  return (
    <div className=' z-40'>
      <div className='flex flex-col z-40  gap-4 '>
        <div className=' flex gap-10'>
  <button className='bg-blue-500 rounded  p-2 w-min' onClick={() => { setForm({emails:emailsform, name:name , img:img }); setDisplay("block") }}>Edit</button>

        </div>
        <br />

      </div>


      <div className={`flex flex-col w-full gap-2 p-2 justify-center items-center fixed top-0 h-screen bg-sky-500/70 ${display}`} >

        {/* 
        Update here  ..........
        */}
        <input type="text" placeholder='Title' onChange={e => setForm({...form, emails: e.target.value})} value={form.emails} className='name-full bg-gray-500' />

        <textarea value={form.name} className={` w-full bg-gray-500`} id="" cols="30" rows="10" onChange={e => setForm({...form, name: e.target.value})} ></textarea>
        <input  value={form.img} onChange={e => setForm({...form, img: e.target.value})} className=' w-full bg-green-900 placeholder:text-green-200' type="text" placeholder='type url here' />

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
  )
}

export default EditBlocs
