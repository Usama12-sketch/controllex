import Link from 'next/link'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import IndexDropDown from './Main/Dropdowns/IndexDropdown'
import Image from 'next/image'
const Navbar = () => {
  const session = useSession(null)
  const [display , setDisplay] = useState("text-2xl")
  return (
    <div  className='duration-500 bg-gradient-to-br from-slate-800 hover:bg-black flex w-screen items-center justify-between'>
      <Link className=' bg-gray-500   m-1 p-1 rounded-lg hover:bg-green-300 duration-300 shadow-md   ease-in-out text-red-500 font-bold font-sans hover:text-gray-600 ' href={'/Blog'}>Controllex</Link>
      
    <div className=' relative top-0 h-min right-0 ml-80'> 
    <IndexDropDown></IndexDropDown>
    </div>
   
      </div>
  )
}

export default Navbar
