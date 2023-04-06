"use client"
import React from "react";
import Link from "next/link";
import {useState} from 'react'
import { useSession } from "next-auth/react";
import Image from "next/image";

const IndexDropdown = () => {
  // dropdown props
const session = useSession(false)
 const [display, setDisplay] = useState("hidden")
  return (
    <div className="">
      <button
        onClick={(e) => {
          e.preventDefault();
        display === "hidden" ? setDisplay("block") : setDisplay("hidden")
        }}
      >
         {session.status === 'unauthenticated' &&  <div className='relative bg-slate-500 py-5 overflow-hidden mx-10 rounded-3xl flex h-10 justify-center items-center p'>
    <Image  width={40} height={40} className=' w-10 bg-slate-300' src={'https://www.karachiliteraturefestival.com/wp-content/uploads/2019/02/Zia-Mohyeddin.jpg'} alt="" />
 <h1 className='z-30 text-white absolute hover:bg-green-400 hover:block h-40 duration-500 w-40 hover:bg-opacity-40'></h1>
    </div>
}
         {session.status === 'authenticated' && <div className='relative bg-slate-500 py-5 overflow-hidden mx-10 rounded-3xl flex h-10 w-10justify-center items-center p'>
  <Image width={40} height={40} className='  bg-slate-300' src={session.data.user.image} alt="" />
    </div>
}
      </button>
      <div
        
        className={
           
          `${ display === "hidden" ? "hidden" : "block"} block bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 absolute`
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Admin Layout
        </span>
        <Link href="/Dashboard/"
          
        
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Dashboard
          
        </Link>
       
   

        {session.status === "authenticated" && <Link href="/api/auth/signout"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Logout
        
        </Link>
}        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Auth Layout
        </span>
        { session.status ===  'unauthenticated' && <Link href="/api/auth/signin"
          
        
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Login
        
        </Link>}
        <Link href="#"
        
        
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Register
        
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        
    
        <Link  href="/"
          
            
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {session.status === 'authenticated' && <div className='relative bg-slate-500 overflow-hidden mx-10 rounded-3xl flex h-8 w-8 shadow-xl shadow-green-400 justify-center items-center '>
  <Image width={70} height={10} layout='intrinsic' className='  bg-slate-300' src={session.data.user.image} alt="" />
    </div>
}  
  Profile
        </Link>
      </div>
    </div>
  );
};

export default IndexDropdown;
