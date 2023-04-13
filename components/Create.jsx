"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import {deleteItem , CreateItem} from '@/lib/function'


const Post = ({form, url,input1, publish, data ,setForm}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const session = useSession(false)
  const router = useRouter()
  
  
  function reset () {
    setForm(data)
    setIsButtonDisabled(false);
    router.replace(router.asPath, undefined, {scroll: false})
  }
   
      
    useEffect(() => {
  function handleBeforeUnload(event) {
  
    event.preventDefault();

    Draft(form);

    window.removeEventListener('beforeunload', handleBeforeUnload);
  }

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, [form]);

async function Draft(data) {
  if(input1.length > 0){
    setIsButtonDisabled(true)
    
        const post = await fetch (url, {
          method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
  },

})
console.log (post.json())
reset()
}

function rest () {
  setForm(data)
}
   }
   const path = router.pathname
   
   return (
    <div className='text-black flex  gap-5' >

     
      <div className=' shadow-2xl bg-gray-500 hover:bg-gray-800 transition-all duration-500 rounded-sm p-4 flex flex-col gap-5'>

<div className=' flex gap-2 justify-around'> 

<button className=' text-orange-200 bg-gradient-to-tr  shadow-lg  w-max p-1  font-bold'  disabled={isButtonDisabled} onClick={()=>{ if(input1.length> 0) {         setIsButtonDisabled(true);
 CreateItem(url, {...form,  ...publish }, reset)} }}>Post</button>

{path === '/Blog' &&
<button className=' shadow-md rounded bg-blue-600   text-green-200 font-semibold shadow-green-600 lg:w-20 md:w-20 w-10' disabled={isButtonDisabled}  onClick={()=>{Draft(form); }}>Draft</button>
}
</div>
      
      </div>
    </div>
  )
}

export default Post
