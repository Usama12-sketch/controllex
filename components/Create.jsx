"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Image from 'next/image'


const Post = ({form, url, url2, data ,setForm}) => {

  const session = useSession(false)
  const router = useRouter()


    async function posts(data) {
const post = await fetch (url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
    'Content-type': 'application/json',
  },

})
console.log (post.json())
router.replace(router.asPath, undefined, {scroll: false})

rest()
}

function rest () {
  setForm(data)
   }
    async function Draft(data) {
const post = await fetch (url2, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
    'Content-type': 'application/json',
  },

})
console.log (post.json())
router.replace(router.asPath, {scroll: false})

rest()
}

function rest () {
  setForm(data)
   }
const path = router.pathname

  return (
    <div className='text-black flex flex-col gap-5' >

      {session.status === 'authenticated' && <div>
 
      <h1 className=' text-2xl font-bold'>
      {session.data.user.name}
      </h1>
      
      <div className=' relative rounded-3xl overflow-hidden h-10  w-10 mx-1'>
<div className=' bg-transparent border-t-4 border-4 border-green-500 shadow-2xl shadow-green-400 rounded-xl animate-spin w-full h-full absolute top-0 left-0'></div>
      <Image width={40} height={40}  src={session.data.user.image} alt="" />

</div>


       
      </div>
      }
      <div className=' shadow-2xl bg-gray-500 hover:bg-gray-800 transition-all duration-500 rounded-sm p-4 flex flex-col gap-5'>

<div className=' flex gap-2 justify-around'> 

<button className=' text-orange-200 bg-gradient-to-tr  shadow-lg  w-max p-1  font-bold' onClick={()=>{posts(form); }}>Post</button>
{path === '/Blog' &&  
<button className=' shadow-md rounded bg-blue-600   text-green-200 font-semibold shadow-green-600 lg:w-20 md:w-20 w-10' onClick={()=>{Draft(form); }}>Draft</button>
}
</div>
      
      </div>
    </div>
  )
}

export default Post
