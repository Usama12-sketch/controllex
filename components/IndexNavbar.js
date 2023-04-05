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
    {session.status === 'unauthenticated' &&  <div className='relative bg-slate-500 py-5 overflow-hidden mx-10 rounded-3xl flex h-10 justify-center items-center p'>
    <Image layout='intrinsic' width={40} height={40} className=' w-10 bg-slate-300' src={'https://www.karachiliteraturefestival.com/wp-content/uploads/2019/02/Zia-Mohyeddin.jpg'} alt="" />
 <h1 className='z-30 text-white absolute hover:bg-green-400 hover:block h-40 duration-500 w-40 hover:bg-opacity-40'></h1>
    </div>
}



      </div>
  )
}

export default Navbar
