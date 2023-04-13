"use client"
import { useState } from 'react'
import React from 'react'
import { useRouter } from 'next/router'
import { deleteItem, UpdateItem} from '@/lib/function'
import { useSession } from "next-auth/react";

const ReuseableEdit = ({ id,setDisplay,display, url,  setForm, form, user}) => {
  const router = useRouter(false)
  const session = useSession(false)

 
  

  function reset() {
    setForm({ title: '', content: '', img: '' })
    setDisplay("hidden");
    router.replace(router.asPath, undefined, {scroll: false})

  }
let publish = {published: true}
 

  const path = window.location.pathname;

  return (
    <div>

   <div>
    
    <div className=' z-40'>
     
      <div className={`flex flex-col w-full gap-2 p-2 justify-center items-center   bg-sky-500/70 ${display}`} >
        
        <ol className='flex gap-5'>
          <button className='bg-red-400 rounded  p-2 w-min' onClick={() => deleteItem(`${url}/${id}` , reset)}>delete</button>
          <button className='bg-blue-500 rounded p-2  w-min' onClick={() => {
            setDisplay("hidden");
            reset()
          }}>cancel</button>

          <button className='bg-yellow-500 rounded p-2  w-min' onClick={() => UpdateItem( `${url}/${id}`, form ,reset)}>update</button>
    {path === "/Draft" ? 
      <button className='bg-green-400 rounded p-2  w-min' onClick={() => UpdateItem( `${url}/${id}`, {...form, ...publish} ,reset)}>Publish</button>
      : null}
    
        </ol>
      </div>
      </div>
      </div> 
    </div>
  )
}

export default ReuseableEdit
