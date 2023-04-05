"use client"
import { useState } from 'react'
import React from 'react'
import { useRouter } from 'next/router'

import { useSession } from "next-auth/react";

const ReuseableEdit = ({ id,setDisplay,display, url, url2,  setForm, form, user}) => {
  const router = useRouter(false)
  const session = useSession(false)

 
  

  function reset() {
    setForm({ title: '', content: '', img: '' })
  }

  async function deleteposts(id) {
    const post = await fetch(`${url}/${id}`, {
      method: 'DELETE',


    })
    console.log(post.json())
    router.replace(router.asPath, undefined, {scroll: false})
    setDisplay("hidden");
  }


  async function updateposts(data) {
    const post = await fetch(`${url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }


    })
    console.log(post.json())
    setDisplay("hidden");
    router.replace(router.asPath, undefined, {scroll: false})
    // reset()

    
  }
  async function posts(data) {
    const post = await fetch(`${url2}/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }


    })
    console.log(post.json())
    deleteposts(id)
    setDisplay("hidden");
    router.replace(router.asPath, undefined, {scroll: false})    // reset()
    
  }
  const path = window.location.pathname;

  return (
    <div>

    {path !== "/Draft" ? <div>
    
    <div className=' z-40'>
      <div className='flex flex-col z-40  '>
        <div className=' flex'>
        </div>
        <br />
      </div>

      <div className={`flex flex-col w-full gap-2 p-2 justify-center items-center   bg-sky-500/70 ${display}`} >
        
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
      </div> : null}
    {path === "/Draft" ? <div>

    <div className=' z-40'>
      <div className='flex flex-col z-40  '>
        <div className=' flex'>
        </div>
        <br />
      </div>

      <div className={`flex flex-col w-full gap-2 p-2 justify-center items-center   bg-sky-500/70 ${display}`} >
        
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

      <button className='bg-blue-500 rounded p-2  w-min' onClick={() => posts(form)}>Publish</button>
      </div> : null}
    </div>
  )
}

export default ReuseableEdit
