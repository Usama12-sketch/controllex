"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useRef } from 'react'
// import { useRouter } from 'next/navigation'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Image from 'next/image'


const CreateComments = ({form,name,input1, setShow, url, url2, data ,setForm}) => {
  const hideTimeoutRef = useRef(null);

  const hidesearch = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShow(false);
      // setSearch("")
    }, 2000);
  };

  const session = useSession(false)
  const router = useRouter()
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    async function posts(data) {
      if(input1.length > 0) {
setIsButtonDisabled(true)
        const post = await fetch (url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json',
          },
          
        })
      }

router.replace(router.asPath, undefined, {scroll: false})
hidesearch()
// setShow(false)
rest()
}

function rest () {
  setForm(data)
  setIsButtonDisabled(false)
   }

const path = router.pathname

  return (
    <div className='text-black flex  gap-5' >

     

<div className=' flex gap-2 p-1 justify-around'> 

<button className=' text-orange-200 duration-300  rounded-sm  from-green-400 bg-gradient-to-tr  shadow-lg hover:rounded-xl  w-max p-1  font-bold' disabled={isButtonDisabled} onClick={()=>{posts(form); }}>{name}</button>


      
      </div>
    </div>
  )
}

export default CreateComments
