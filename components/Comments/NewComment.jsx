import React, { useState, useRef } from 'react'
import Post from '../Create'
import CreateComments from '../CreateComments'

const NewComment = ({postid}) => {
  
  const [show, setShow] = useState(false)
  const hideTimeoutRef = useRef(null);
  
  const hidesearch = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShow(false);
      // setSearch("")
    }, 2000);
  };
  
  let data = {comment: "" , postId:postid}
  const [commen, setComment ] = useState(data)
    let url = '/api/CUD/Comments'
  return (
    <div>
      <div className={`${show ? "hidden" : "Block"}   flex items-center h-10`}>

        <button  className={`text-gray-700  border-b-4 font-serif hover:border-red-400 ease-in-out bg-gray-400 hover:bg-red-200 duration-300 w-max px-1 rounded-md `} 
        
        onClick={()=> setShow(true)} >New </button>
        </div>

        <div className={`${show ? "block" : "hidden"} `} >
        <textarea onBlur={hidesearch} className=' rounded-xl text-sm bg-gray-400 px-2' value={commen.comment} onChange={(e) => setComment({...commen, comment: e.target.value}) } id="" cols="40" rows="2"></textarea>
        <CreateComments input1={commen.comment} name="add" url={url} data={data} form={commen} setShow={setShow} setForm={setComment}/>
    
        </div>
    </div>
  )
}

export default NewComment
