import React from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import Image from 'next/image'
const Comments = ({post}) => {
    const router = useRouter()
           const session = useSession()
  async function deleteComment(id) {
    let comment = await fetch (`/api/CUD/Comments/${id}`, {
        method: "DELETE",
    }) 
    router.replace(router.asPath, undefined, {scroll: false})
  }


  return (
    <div>
      {post.Comments.map(c => <ol className='flex items-center gap-3 bg-black bg-opacity-50 border' key={c.id}> 

<div className=' bg-white m-2 p-2 rounded-md'>

 <h1 className=' font-serif text-blue-600 font-semibold text-[10px]'>{c.user.name}
 </h1>

 <div className='w-max bg-yellow-200 rounded-3xl overflow-hidden'>
 <Image  width={30} height={40} src=
     {c.user.image}
     alt="" />
     </div>
     </div>

 <h2 className=' px-1 rounded-md bg-gray-400 text-center h-max'>
  {c.comment}
 </h2>
 {session.data?.user.name === c.user.name && 
 <button onClick= { ()=> deleteComment(c.id)}  className=' bg-white font-semibold text-red-500 rounded-md px-1'>delete</button>
}
  </ol> 

)}
    </div>
  )
}

export default Comments
