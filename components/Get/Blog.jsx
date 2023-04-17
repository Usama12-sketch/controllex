
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

import MainEdit from '@/components/Edit/MainEdit';
import dynamic from 'next/dynamic'
import {deleteItem , UpdateItem , CreateItem} from '@/lib/function'
import Likes from '../Comments/Likes';



const Comments = dynamic(() => import("../Comments/Comments"), {
  loading: () => <p>editing..</p>
})

const BlogPosts = ({ posts, Blocks, archives, Admins, url, url2 }) => {

  
  useEffect(() => {
    const boxes = document.querySelectorAll('.boxes2');

    const checkboxes = () => {
      const triggerbottom = (window.innerHeight / 5) * 3;

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerbottom) {

          box.classList.add("animate");
        } else {
          box.classList.remove("animate");
        }
      });
    };

    window.addEventListener('scroll', checkboxes);
    checkboxes();
    
    return () => {
      window.removeEventListener('scroll', checkboxes);
    };
  }, []);




  const router = useRouter()
  
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const session = useSession(false)
const archUrl = "/api/CUD/archives"

  
  const reset = ()=> {
    router.replace(router.asPath, undefined, {scroll: false})
    setIsButtonDisabled(false);
  }

  // for toggle **********
  // function initialAction(id) {
  //   if (id === show) {
  //     setClienthide(null); // Hide comments if button is clicked again
  //   } else {
  //     setClienthide(id);
  //   }
  // }





  
  
  const [show, setShow] = useState(null)
  function hideShow(id) {
    if (id)  {
      setShow(id);
    }
  }

  return (
    <div className=''>

      {posts.filter(post => !archives.some(archive => archive.id === post.id)).map((post, index) => {
        return <ol className=' my-4 shadow-2xl flex flex-col gap-3' key={index}>

          <div className='flex bg-slate-950 text-white flex-col duration-200 boxes2  gap-2  p-3'>
            {/* Link to profile */}
            <Link className='flex w-max gap-3' href={`/Blog/${post.user.id}`}>
              <h1 className=' font-mono w-max p-2 rounded-lg  bg-slate-400 text-center '>{post.user.name}</h1>
              <Image width={40} height={40} src=
                {post.user.image}
                alt="" />
            </Link>

            <h1 className=' font-semibold bg-clip-text   bg-gradient-to-br from-white to-yellow-500 text-transparent text-3xl lg:text-4xl font-serif'>{post.title}:</h1>
            <p className=' text-lg '>{post.content.split(' ').slice(0, 5).join(' ')}.....</p>

            <img className=' w-full lg:p-20 ' src={post.img} alt="" />
            <div className=' flex  justify-end'>


              <Link className=' lg:text-xl text-md font-mono bottom-14 right-5 bg-orange-200 px-1 w-max rounded-lg text-gray-800' href={`/${post.id}`} >Details...</Link>

            </div>
            {/* comments and likes */}

            <div className=' flex flex-col w-full  '>
              <div className='flex   items-center gap-3 '>
              <Likes post={post}/>
                  

                <button className='bg-white w-max text-green-400 font-black font-serif border-b-4 border-green-300 duration-300 hover:border-green-400 px-1 my-1 rounded-md' onClick={() => hideShow(post.id)}> Comments: </button>
              </div>
<div className= " flex ">

              {post.hearts.map((h) => (
                <ol className="flex " key={h.id}>

    <Link href={`/Blog/${h.user.id}`}>
<div className=' my-2 flex bg-yellow-300 rounded-2xl duration-500 w-max '>
           <div className=' w-7 h-7  rounded-2xl  overflow-hidden'> 

           <Image width={50} height={10} src={h.user.image} alt="" />
        </div>
        </div>
           </Link>

        </ol>
      ))}
      </div>

             { show === post.id && <Comments post={post} >
              </Comments>}
              
            </div>

          </div>

          {!Blocks.some(p => p.emails === session.data?.user?.email) ? (<div className='flex m-4 '>
            {Admins.some(p => p.emails === session.data?.user?.email) || session.data?.user?.email === post.user.email ? (
              <>

                <button className='bg-gradient-to-t h-max text-white to-white rounded-sm from-slate-600 p-2'
                  disabled={isButtonDisabled}
                  onClick={() => {
                  const archives = { id: post.id ,postId: post.id };
            
                    CreateItem(archUrl, archives , reset, setIsButtonDisabled)
                  }}>Archives</button>

                  <MainEdit url={url} url2={url2} post={post}/>

              </>
            ) : null}
          </div>
          ) : null}
        </ol>


      })
      }

    </div>
  )
}

export default BlogPosts
