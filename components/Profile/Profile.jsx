"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Likes from '@/components/Comments/Likes'
import UpdateDescription from './Description'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Comments from '@/components/Comments/Comments'
import NewComment from '@/components/Comments/NewComment'
import MainEdit from '@/components/Edit/MainEdit';

function Profile({Post, data}) {

  const [show, setShow] = useState(null)
  function hideShow(id) {
    if (id)  {
      setShow(id);
    }
  }

const router = useRouter()
           
const url = "/api/CUD/Blog"
const url2 = "/api/CUD/Blog"

    useEffect(() => {
        const boxes = document.querySelectorAll('.boxes2');
    
        const checkboxes = () => {
          const triggerbottom = (window.innerHeight / 5) * 4;
    
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

    const [projectState, setProjectState] = useState('view');

    const session = useSession()
    return (
      <div className=' bg-gradient-to-tr from-blue-300 rounded-sm h-full  to-yellow-200 p-7 flex flex-col gap-4'>
         {router.pathname !== "/Draft" &&
          <div>
        
            <h1 className=' bg-clip-text bg-gradient-to-b from-blue-700 to-yellow-500 drop-shadow-xl  rounded-lg  font-bold text-transparent text-3xl lg:text-5xl  p-2 '> {data.name}</h1> 
           
            <div>
        <div className='mb-5 relative rounded-3xl overflow-hidden h-10  w-10 mx-1'>
<div className=' bg-transparent border-t-4 border-4 border-green-500 shadow-2xl shadow-green-400 rounded-xl animate-spin w-full h-full absolute top-0 left-0'></div>
      <Image width={40} height={40}  src={data.image} alt="" />
      </div>
      {session.data?.user.name === data.name &&

<ol>

            <Link className=' bg-gray-500 w-max  m-1 p-1 rounded-lg hover:bg-green-300 duration-300 shadow-md   ease-in-out text-yellow-300 font-bold font-sans hover:text-gray-600 ' href={'/Draft'}>Drafts</Link> 
            <Link className=' bg-gray-500 w-max  m-1 p-1 rounded-lg hover:bg-green-300 duration-300 shadow-md   ease-in-out text-yellow-300 font-bold font-sans hover:text-gray-600 ' href={'/Archives'}>Archives</Link> 
</ol>
        }
            </div>
            <p className=' text-blue-500 shadow-2xl font-black   text-lg font-serif ' > Description: 
             
                </p>
{projectState === 'view' && 
             <span className=' text-xl font-semibold  text-black'>
             {data.description} 
             </span>
}


               {session.data?.user.email === data.email && 
             <UpdateDescription   des={data.description} setProjectState={setProjectState} projectState={projectState}/>
               }

</div>
                    
                  }
            {Post.filter((p) => !data.Archives.some((ar) => ar.id === p.id )).map((post, index) => {
                    return <ol className=' transition-all boxes2 to-yellow-200 p-4 shadow-2xl flex flex-col gap-3'  key={index}>
                        <h1 className=' font-mono w-max p-2 rounded-lg  bg-slate-400 text-center '>{data.name}</h1>
                    <Image layout='intrinsic' width={40} height={40} src=
                     {data.image}
                     alt="" />

                    <h1 className=' bg-clip-text bg-gradient-to-br text-3xl font-serif '>{post.title}:</h1>

                    <p className=' text-lg '>{post.content}</p>
                    <img src={post.img} alt="" />
                  
                    <Link className=' bg-orange-500 px-1 w-max rounded-sm text-white' href={`/${post.id}`} >Details</Link>

                     {session.data?.user.email === data.email &&
                                      <MainEdit url={url} url2={url2} post={post}/>

                   }
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

                
                    </ol>
                })
            }

        </div>
    )
}

export default Profile
