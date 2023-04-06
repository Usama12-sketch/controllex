import React from 'react'
import Link from 'next/link'
const SingleUser = ({user}) => {
  return (
    <div>
           <Link href={`/Blog/${user.id}`}>
<div className=' my-2 flex hover:bg-yellow-300 rounded-sm duration-500 w-max py-1 px-3'>
           <div className=' w-10 h-10  rounded-xl  overflow-hidden'> 

           <img src={user.image} alt="" />
        </div>
          <h1 className=' bg-slate-300 rounded-lg  m-2 h-max'>{user.name}</h1>
        </div>
           </Link>
    </div>
  )
}

export default SingleUser
