"use client"
import React from 'react'
import { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Image from 'next/image'


const Post = ({form, url, data ,setForm}) => {

  const session = useSession(false)
  const router = useRouter(false)


    async function posts(data) {
const post = await fetch (url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
    'Content-type': 'application/json',
  },

})
console.log (post.json())
router.replace(router.asPath)

rest()
}

function rest () {
  setForm(data)
   }


  return (
    <div className='text-black flex flex-col gap-5'>
      {session.status === 'authenticated' && <div>

      {session.data.user.name}
      <Image width={40} height={40} layout='intrinsic' src={session.data.user.image} alt="" />
       
      </div>
      }
      <div className=' shadow-2xl shadow-green-500 bg-gray-500 hover:bg-gray-800 transition-all duration-500 rounded-sm p-4 flex flex-col gap-5'>


<button className=' shadow-md rounded bg-red-600 shadow-red-600 lg:w-20 md:w-20 w-10' onClick={()=>{posts(form); }}>post</button>
      
      </div>
    </div>
  )
}

export default Post
