import React, { useState } from 'react'
import Post from '../Create'
import CreateComments from '../CreateComments'

const NewComment = ({postid}) => {
    let data = {comment: "" , postId:postid}
    const [commen, setComment ] = useState(data)
    const [show, setShow] = useState(false)
    let url = '/api/CUD/Comments'
  return (
    <div>
        <button  className={`${show ? "hidden" : "Block"}  text-white bg-red-400 w-max px-1 rounded-md `} 
        
        onClick={()=> setShow(true)} >Add comment</button>

        <div className={`${show ? "block" : "hidden"} `} >
        <textarea className=' rounded-xl text-sm px-2' value={commen.comment} onChange={(e) => setComment({...commen, comment: e.target.value}) } id="" cols="40" rows="2"></textarea>
        <CreateComments name="add" url={url} data={data} form={commen} setShow={setShow} setForm={setComment}/>
    
        </div>
    </div>
  )
}

export default NewComment
