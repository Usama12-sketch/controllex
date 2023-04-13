import React from 'react'
import { useRouter } from 'next/router';
import { dividerClasses } from '@mui/material';
import Link from 'next/link'
import { useState } from 'react';
const DashBoard = () => {
    const location = useRouter();
    const path = location.pathname;
const [dashboard, setDashboard] = useState(false)
  
    return (
<> {
        path.includes('/Dashboard') ?

      <div className='ml-0   md:w-40  lg:w-60 flex gap-3 relative   duration-500 bg-slate-500 hover:bg-gray-600 z-40'>
        
        <button className=' text-gray-200 rounded-xl bg-red-400 p-2 text-center m-2  md:hidden lg:hidden block hover:bg-red-500  ' 
        onBlur={()=> setDashboard(false)} 
        onClick={() => {dashboard ? setDashboard(false): setDashboard(true)}}>dashboard</button>

      <div className={   `${dashboard ? "ml-0" : "-ml-40"} flex flex-col transition-all duration-500 lg:ml-0 md:ml-0 delay-300  z-50 lg:bg-transparent md:bg-transparent bg-gray-600 fixed p-3 h-screen`}>

        <button className='md:hidden lg:hidden bg-white rounded-xl w-max px-2  block' onClick={() =>  setDashboard(false)}>close</button>

       <Link className={`
       
       ${path === '/Dashboard' ? '    border-b-green-500 hover:border-b-green-400': "border-b-white"} 
       border-b-4
       shadow-2xl hover:shadow-blue-500 my-element
       transition  hover:shadow-2xl duration-300 bg-gradient-to-br from-blue-400  font-bold px-2 rounded-lg m-3`} href='/Dashboard/'>Admins</Link>
       <Link className={`
       ${path === '/Dashboard/Blocks' ? ' border-b-4 border-b-red-700 hover:border-b-red-400': "border-b-white"} 
       border-b-4
       shadow-2xl shadow-red-600 element
         bg-gradient-to-br transition from-red-500  to-gray-500 font-bold  px-2 rounded-lg m-3`} href='/Dashboard/Blocks'>Blocks</Link>
      </div>
 
 </div>
 : null
    }
    </>
  )
}

export default DashBoard
