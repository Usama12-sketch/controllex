import React,{useState} from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {deleteItem , UpdateItem} from '@/lib/function'
const Comments = ({post}) => {
  const [editableCommentId, setEditableCommentId] = useState(null);

    const [input, setInput] = useState({comment:""})
    const router = useRouter()
    const session = useSession()

        function reset() {
            EditShow(" ")
            router.replace(router.asPath, undefined, {scroll: false})
          }
        

  function EditShow(id, comment) {
    if (id) {
      setEditableCommentId(id);
      setInput({comment: comment}) 
      console.log(`hi ${comment}`)
      
    }
    // setInput(c.comment);
  }
  

  return (   <div className='  max-h-60 overflow-auto bg-slate-200 bg-opacity-40 scroll '>

      {post.Comments.map(c => <ol className='flex items-center gap-3 bg-black bg-opacity-50  pr-1  rounded-lg border' key={c.id}> 

<div className='w-24 bg-white items-center flex m-2 gap-1 p-2 rounded-md'>

 <h1 className=' font-serif text-blue-600 font-semibold text-[10px]'>{c.user.name}
 </h1>

 <div className='w-max bg-yellow-200 rounded-3xl overflow-hidden'>
 <Image  width={30} height={40} src=
     {c.user.image}
     alt="" />
     </div>
     </div>


     {c.id === editableCommentId ? (
  <div className="flex">
    <input onKeyUp={(e)=>{ e.key === 'Enter' && UpdateItem(`/api/CUD/Comments/${c.id}`, input , reset)}}
      type="text"
      className="px-1 lg:text-xl md:text-xl text-sm rounded-md bg-gray-400 text-center"
      onChange={((e) => {setInput({...input, comment: e.target.value}); console.log(input.comment) }  )}
      value={input.comment}
    />
    <button
      onClick={() => deleteItem(`/api/CUD/Comments/${c.id}` , reset)}
      className="bg-white font-semibold text-red-500 rounded-md px-1"
    >
      delete
    </button>
  </div>
) : (
  <div className="flex">
    <h2 className="px-1 lg:text-xl md:text-xl text-sm rounded-md bg-gray-400 text-center">
      {c.comment}
    </h2>
    {session.data?.user.name === c.user.name && (
      <button className=' bg-black text-white px-1 mx-1 rounded-sm' onClick={() => { EditShow(c.id, c.comment);}}>Edit</button>
    )}
  </div>
)}

 
  </ol> 

)}
    </div>
  )
}

export default Comments
