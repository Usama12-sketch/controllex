import React from 'react'
import Image from 'next/image'
const Users = ({users, setForm}) => {
  return (
    <div>
      <div className=' bg-slate-500 gap-5 p-5 shadow-xl text-yellow-200  flex '>
 <h1 className=' bg-gradient-to-tl text-transparent  bg-clip-text  p-1 font-bold text-3xl'> Users:</h1>
 <div className=' flex flex-wrap'> 

{users.map((block) => <div className='  flex flex-col'  key={block.id}>
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
  )
}

export default Users

