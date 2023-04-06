import SingleUser from '@/components/Get/SingleUser'
import React from 'react'

const SinglePost = ({post, }) => {
  return (
    <div className=' flex  flex-col rounded-sm bg-gradient-to-bl from to-blue-400 '>
      <img src={post.img} alt="" />

      <SingleUser user={post.user}/>
      <h1 className=' text-3xl text-gray-300  font-black'>{post.title} :</h1>

      <p className=' text-lg font-serif p-1'>{post.content}</p>
    </div>
  )
}

export default SinglePost
