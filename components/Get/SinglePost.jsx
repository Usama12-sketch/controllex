import SingleUser from '@/components/Get/SingleUser'
import React from 'react'
import Comments from '../Comments/Comments'
import NewComment from '../Comments/NewComment'

const SinglePost = ({post, }) => {
  return (
    <div className=' flex  flex-col rounded-sm bg-gradient-to-bl from to-blue-400 '>
{post.published !== false && <ol>

      <img src={post.img} alt="" />

      <SingleUser user={post.user}/>
      <h1 className=' text-3xl text-gray-300  font-black'>{post.title} :</h1>

      <p className=' text-lg font-serif p-1'>{post.content}</p>
      <div>
<button className='bg-white text-green-400 font-black font-serif border-b-4 border-green-300 duration-300 hover:border-green-400 px-1 my-1 rounded-md'>Comments:</button>
</div>
      <NewComment postid={post.id}  />
      <Comments post={post}/>
</ol>
}
    </div>
  )
}

export default SinglePost
