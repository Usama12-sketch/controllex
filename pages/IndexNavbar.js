import Link from 'next/link'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import IndexDropDown from '../components/Main/Dropdowns/IndexDropdown'
import Image from 'next/image'
const Navbar = () => {
  const session = useSession(null)
  const [display , setDisplay] = useState("text-2xl")
  return (
    <div  className=' bg-slate-200 flex w-screen items-center justify-between'>
      <button className='left-0  py-1 lg:hidden md:hidden block bg-gray-900  text-green-300 rounded-md px-2 font-bold' onClick={(e)=> { 
        e.preventDefault();

        (display === "text-2xl" ?  setDisplay("-mx-32"): setDisplay("text-2xl"))
      }}>Menu</button>


      <div onClick={(e)=> { 
        e.preventDefault();

        (display === "mx-1" ?  setDisplay("-mx-32"): setDisplay("mx-1"))
      }} className={`bg-slate-400 md:bg-white  lg:bg-white-400 flex  left-0
      md:flex-row md:mx-0 md:relative md:mt-0
      lg:flex-row lg:mx-0 Lg:relative lg:mt-0
       duration-500 flex-col fixed mt-14 top-0  ` + (display === "text-2xl" ? "-mx-32" : "text-2xl" )}> 

      <Link className=' bg-gray-500   m-1 p-1 rounded-lg hover:bg-green-300 duration-300 shadow-md   ease-in-out text-yellow-300 font-bold font-sans hover:text-gray-600 ' href={'/'}>Home</Link>
      
      <Link className=' bg-gray-500   m-1 p-1 rounded-lg hover:bg-green-300 duration-300 shadow-md   ease-in-out text-yellow-300 font-bold font-sans hover:text-gray-600 ' href={'/Blog'}>Blog</Link>
      <Link className=' bg-gray-500   m-1 p-1 rounded-lg hover:bg-green-300 duration-300 shadow-md   ease-in-out text-yellow-300 font-bold font-sans hover:text-gray-600 ' href={'/Draft'}>Draft</Link>
      {session.data?.user?.email === 'chodarykhan115@gmail.com' && 
      <Link className=' bg-gray-500   m-1 p-1 rounded-lg hover:bg-green-300 duration-300 shadow-md   ease-in-out text-yellow-300 font-bold font-sans hover:text-gray-600 ' href={'/Dashboard'}>Dashboard</Link>
       }
      <Link className=' bg-gray-500   m-1 p-1 rounded-lg hover:bg-green-300 duration-300 shadow-md   ease-in-out text-yellow-300 font-bold font-sans hover:text-gray-600 ' href={'/Admins'}>Admins</Link>
      <Link className=' bg-gray-500   m-1 p-1 rounded-lg hover:bg-green-300 duration-300 shadow-md   ease-in-out text-yellow-300 font-bold font-sans hover:text-gray-600 ' href={'/Blocks'}>Blocks</Link>
    </div>

    <div className=' relative top-0 h-min right-0 ml-80'> 
    <IndexDropDown></IndexDropDown>
    </div>
    {session.status === 'unauthenticated' &&  <div className='relative bg-slate-500 py-5 overflow-hidden mx-10 rounded-3xl flex h-10 justify-center items-center p'>
    <Image layout='intrinsic' width={40} height={40} className=' w-10 bg-slate-300' src={'https://www.karachiliteraturefestival.com/wp-content/uploads/2019/02/Zia-Mohyeddin.jpg'} alt="" />
 <h1 className='z-30 text-white absolute hover:bg-green-400 hover:block h-40 duration-500 w-40 hover:bg-opacity-40'></h1>
    </div>
}

{session.status === 'authenticated' && <div className='relative bg-slate-500 py-5 overflow-hidden mx-10 rounded-3xl flex h-10 justify-center items-center p'>
    <Image width={40} height={40} layout='intrinsic' className=' w-10 bg-slate-300' src={session.data.user.image} alt="" />
 <h1 className='z-30 text-white absolute hover:bg-green-400 hover:block h-40 duration-500 w-40 hover:bg-opacity-40'></h1>
    </div>
}

      </div>
  )
}

export default Navbar
