"use client"
import React from 'react'

import Link from 'next/link'
import { useState } from 'react'
export default function Nav() {

  const [nav, setNav] = useState(
    "hidden")
  const [icon, setIcon] = useState("MENU"
  )

  function navbarflex() {
    if (nav == (" hidden ")) {

      let tailplus = " block "
      setNav(
        tailplus)
      setIcon("CLOSE")
    }
    else {

      setNav(
        " hidden "
      )
      setIcon("MENU")
    }
  }

  return (
    <>


      <div className="flex-col hover:cursor-pointer  right-0 z-40 lg:relative  bg-opacity-50 lg:h-auto h-10 ">
        <button className="right-0 text-yellow-400 bg-blue-500 rounded-xl
        md lg:invisible 
        text-center sm:text-2xl lg:text-3xl" onClick={navbarflex}>{icon}</button>
        </div>


        <ol className="menu lg:-mt-2 md:mt-0 mt-16">

          <Link 
             href="/"  
          className={nav} onClick={navbarflex}>
              HOME
          </Link>
          
          <Link 
             href="/Editor"  
          className={nav} onClick={navbarflex}>
              Editor
          
          </Link>


          {/* <div className={nav}>
            <Link href="/features" onClick={navbarflex} >Features</Link>
          </div> */}

           <div className={nav}>
            <Link href="/posts" onClick={navbarflex} >Posts</Link>
          </div>



        </ol>

    </>
  )
}
