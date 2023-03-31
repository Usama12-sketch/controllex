"use client"
import QueryWrapper from '@/app/QueryWrapper'
import Query from './Query'
import React from 'react'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation' 

const Wrapper = () => {
  const refresh = useRef(null)
    const [form, setForm] = useState({ title: "", content: "" })

    const router = useRouter(false)

    async function handleofDelete (dataid){

        // document.getElementById("props").innerHTML = `usama ${data}`
        
            try {
        
                await fetch(`http://localhost:3000/api/projects/${dataid}`, {
                    method: 'PUT',
                    body: JSON.stringify(form),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      }
                });
      
    router.refresh('/post')
            } catch (error) {
                console.log(error)
            }
        
    
     }
    async function handleofPost (){

        // document.getElementById("props").innerHTML = `usama ${data}`
        
            try {
        
                await fetch(`http://localhost:3000/api/projects`, {
                    method: 'POST',
                    body: JSON.stringify(form),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      }
                }).then(() => { router.refresh('/post'); document.window.click() }).then(() => {refresh.current.click()})
                
      
            } catch (error) {
                console.log(error)
            }
        
    
     }

  return (
    <div ref={refresh} >
      
        <h1 id='props'>bro</h1>
        <QueryWrapper>
      <Query handleofDelete={handleofDelete}/>
        </QueryWrapper>
    <button onClick={()=> handleofPost()}>post</button>
            <textarea className='transition-all duration-500 hover:rounded-sm' id="" cols="30" rows="10" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })}></textarea>


            <textarea className='transition-all duration-500 hover:rounded-sm' value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}></textarea>
    </div>
  )
}

export default Wrapper
