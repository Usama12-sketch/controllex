import React, { useState, useRef } from 'react'
import Image from 'next/image'
const Users = ({users, setForm}) => {



  
  const hidesearch = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setDispaly("-ml-80");
      // setSearch("")
    }, 400);
  };
  const hideTimeoutRef = useRef(null);
  const [display, setDispaly] = useState("-ml-80")
  return (<>
  <button className='m-1 p-1 md:hidden lg:hidden block rounded-md h-max w-max  text-green-300 bg-blue-400 ' 
  onBlur={hidesearch}
  onClick={()=> setDispaly("ml-0")}>users</button>

    <div className={`${display} lg:ml-0 md:ml-0 lg:relative md:relative  absolute  -left-0 lg:top-0 md:top-0  top-10`}>
      <div className=' bg-slate-500  p-5 shadow-xl text-yellow-200  lg:flex lg:flex-row  flex-col '>
 <h1 className=' bg-gradient-to-tl text-transparent  bg-clip-text  p-1 font-bold text-3xl'> Users:</h1>
 <div className=' flex flex-nowrap flex-col lg:flex-row  lg:flex-wrap'> 

{users.map((block) => <div className=' m-1 shadow-xl  flex flex-col'  key={block.id}>
  <span className=' text-blue-400 '>
  Email: 
  </span>
{block.email}
  <span className=' text-green-400 '>
  Name: 
  </span>
<h1>{block.name}</h1>
<div className=' overflow-hidden rounded-3xl h-10 w-10'>
    <Image  width={40} height={40}
 layout='intrinsic'       src={block.image}
 />
 </div>
 <button className=' m-2 bg-gradient-to-tr from-red-500 w-max p-1' onClick={() =>  setForm({emails:block.email, name:block.name , img:block.image })}> Add</button>
</div>)}
 </div>
 </div>
    </div>
  </>
  )
}

export default Users

