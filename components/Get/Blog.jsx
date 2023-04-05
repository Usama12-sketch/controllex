
import ReuseableEdit from '@/components/Edit/ReuseableEdit';
import Link from 'next/link';

import Image from 'next/image';
import { useSession } from "next-auth/react";
import React, { useState } from 'react'
import { useRouter } from 'next/router'; 


const BlogPosts = ({ posts, Blocks, archives, Admins, url, url2 }) => {
  const router = useRouter()
  const [archiv, setArchives] = useState({id:"qeqe", })
    const [form, setForm] = useState({ title: '', content: '', img: '', id: "" })
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [display, setDisplay] = useState("hidden")
    const session = useSession(false)
    console.log(archives)


    async function addArchive (post){
      const archive = await fetch ("/api/CUD/archives",{
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        
        body: JSON.stringify(post)
      })
    
        router.replace( router.asPath, undefined, { scroll: false });
      
            setIsButtonDisabled(false);
    
    }
    
  return (
    <div>
       
 {posts.filter(post => !archives.some(archive => archive.id === post.id)).map((post, index) => { return <ol className='bg-green-300 to-yellow-200 shadow-2xl flex flex-col gap-3' key={index}>

                <div className='flex flex-col  gap-2 bg-gradient-to-br from-green-400 p-3'>
                <Link className='flex gap-3' href={`/Blog/${post.user.id}`}>
                <h1 className=' font-mono w-max p-2 rounded-lg  bg-slate-400 text-center '>{post.user.name}</h1>
                <Image  width={40} height={40} src=
                    {post.user.image}
                    alt="" />
                </Link>
            
                <h1 className=' font-semibold bg-clip-text   bg-gradient-to-br from-white to-yellow-600 text-transparent text-3xl font-serif '>{post.title}:</h1>
                <p className=' text-lg '>{post.content}</p>
                            </div>
                            
                    {!Blocks.some(p => p.emails === session.data?.user?.email) ? (<div className=' m-4 '>
                        {Admins.some(p => p.emails === session.data?.user?.email) || session.data?.user?.email === post.user.email ? (
                            <>

<button className='bg-gradient-to-t text-white to-white rounded-sm from-slate-600 p-2'
   disabled={isButtonDisabled}
onClick={async () => {
  function arch() {
    return {id: post.id};
  }
  setIsButtonDisabled(true);
  const archives = arch();
  await setArchives(archives);
  addArchive(archives)
}}>Archives</button>

              <button className='ml-2 mb-8 bg-gradient-to-b from-blue-300 to-green-500 text-white  rounded  p-2 w-min' onFocusCapture={() => { setForm({ title: post.title, content: post.content, img: post.img }); setDisplay("block") }}>Edit</button>

<div className={`${display} flex flex-col justify-center fixed top-0 h-screen bg-yellow-400 bg-opacity-70  items-center `}>

                            <div className={`  `} >
                                <input type="text" placeholder='Title' onChange={e => setForm({ ...form, title: e.target.value })} value={form.title} className='w-full m-1 bg-gray-500' />

                                <textarea value={form.content} className={` w-full bg-gray-500`} id="" cols="30" rows="10" onChange={e => setForm({ ...form, content: e.target.value })} ></textarea>
                                <input value={form.img} onChange={e => setForm({ ...form, img: e.target.value })} className=' w-full bg-green-900 placeholder:text-green-200' type="text" placeholder='type url here' />
                            <ReuseableEdit url2={url2} url={url} data1={post.title} data3={post.img} id={post.id} datua2={post.content} user={post.user} form={form} setForm={setForm} display={display} setDisplay={setDisplay}>
                            </ReuseableEdit>
                            </div>
</div>
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
