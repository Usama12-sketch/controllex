"use client"
import React from "react";
import Link from "next/link";
import {useState} from 'react'
import { useSession } from "next-auth/react";

const IndexDropdown = () => {
  // dropdown props
const session = useSession(false)
 const [display, setDisplay] = useState("hidden")
  return (
    <div className="">
      <button
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold rounded-sm shadow-2xl  my-1 bg-slate-400"
      
    
        onClick={(e) => {
          e.preventDefault();
        display === "hidden" ? setDisplay("block") : setDisplay("hidden")
        }}
      >
         Pages
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
        <Link href="/admin/"
          
        
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Dashboard
          
        </Link>
        <Link href="/admin/settings"
        
        
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Settings
        
        </Link>
        <Link href="/admin/tables"
          
        
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }>
          
            Tables
        
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
        <Link href="/auth/register"
        
        
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Register
        
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          No Layout
        </span>
        <Link href="/landing"
          
          
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Landing
          
        </Link>
        <Link href="/profile"
          
            
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Profile
         
        </Link>
      </div>
    </div>
  );
};

export default IndexDropdown;
