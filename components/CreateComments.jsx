"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Image from 'next/image'


const CreateComments = ({form,name, setShow, url, url2, data ,setForm}) => {

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
setShow(false)

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
    <div className='text-black flex  gap-5' >

     
      <div className=' shadow-2xl bg-gray-500 hover:bg-gray-800 transition-all duration-500 rounded-sm p-4 flex flex-col gap-5'>

<div className=' flex gap-2 justify-around'> 

<button className=' text-orange-200 bg-gradient-to-tr  shadow-lg  w-max p-1  font-bold' onClick={()=>{posts(form); }}>{name}</button>


</div>
      
      </div>
    </div>
  )
}

export default CreateComments
