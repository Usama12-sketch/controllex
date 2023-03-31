"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Post = () => {
  const router = useRouter(false)

  const [form, setForm] = useState({title: '', content: '', img: '',})
    // const [images, setImages] = useState("")
    
    // const [title, setTitle] = useState("")
    // const [content, setContent] = useState("")

    async function posts(data) {
const post = await fetch (`/api/projects`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
    'Content-type': 'application/json',
  },

})
console.log (post.json())
router.refresh()

    }


  return (
    
    <div className='text-black flex flex-col gap-5'>
        <button className=' shadow-md rounded bg-red-600 shadow-red-600 lg:w-20 md:w-20 w-10' >Create</button>
      <div className=' shadow-2xl shadow-green-500 bg-gray-500 hover:bg-gray-800 transition-all duration-500 rounded-sm p-4 flex flex-col gap-5'>

<input className='transition-all duration-500 hover:rounded-sm'  value={form.title} onChange={e => setForm({...form, title: e.target.value})}></input>

<textarea className='transition-all duration-500 hover:rounded-sm'  id="" cols="30" rows="10" value={form.content} onChange={e => setForm({...form, content: e.target.value})}></textarea>


<input className='transition-all duration-500 hover:rounded-sm'   value={form.img} onChange={e => setForm({...form, img: e.target.value})}></input>

<button className=' shadow-md rounded bg-red-600 shadow-red-600 lg:w-20 md:w-20 w-10' onClick={()=>posts(form)}>post</button>
      
      </div>
    </div>
  )
}

export default Post
