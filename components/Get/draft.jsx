import ReuseableEdit from '../ReuseableEdit'
import Link from 'next/link';

import Image from 'next/image';

import { useSession } from "next-auth/react";
import React, { useState } from 'react'
const Draft = ({ posts, Blocks, Admins, url, url2 }) => {
    const [form, setForm] = useState({ title: '', content: '', img: '', id: "" })
    const [display, setDisplay] = useState("hidden")
    const session = useSession(false)
  return (
    <div>
                  {posts.map((post, index) => {
                return <ol className=' bg-green-300 to-yellow-200  shadow-2xl flex flex-col gap-3' key={index}>
                    
                    {!Blocks.some(p => p.emails === session.data?.user?.email) ? (<div>
                        {Admins.some(p => p.emails === session.data?.user?.email) || session.data?.user?.email === post.user.email ? (<div className=' '>

                            <div className='flex flex-col gap-1 bg-red-400 p-3'>
                            <h1 className=' font-mono w-max p-2 rounded-lg  bg-slate-400 text-center '>{post.user.name}</h1>
                            <Image layout='intrinsic' width={40} height={40} src=
                                {post.user.image}
                                alt="" />

                            <h1 className=' bg-clip-text bg-gradient-to-br text-3xl font-serif '>{post.title}:</h1>
                            <p className=' text-lg '>{post.content}</p>
                            <Link href={`/Blog/${post.id}`}>Details...</Link>

                            <button className='bg-blue-500 rounded  p-2 w-min' onFocusCapture={() => { setForm({ title: post.title, content: post.content, img: post.img }); setDisplay("block") }}>Edit</button>

                            </div>
<div className={`${display} flex flex-col justify-center fixed top-0 h-screen bg-yellow-400 bg-opacity-70  items-center `}>

                            <div className={`  `} >
                                <input type="text" placeholder='Title' onChange={e => setForm({ ...form, title: e.target.value })} value={form.title} className='w-full m-1 bg-gray-500' />

                                <textarea value={form.content} className={` w-full bg-gray-500`} id="" cols="30" rows="10" onChange={e => setForm({ ...form, content: e.target.value })} ></textarea>
                                <input value={form.img} onChange={e => setForm({ ...form, img: e.target.value })} className=' w-full bg-green-900 placeholder:text-green-200' type="text" placeholder='type url here' />
                            <ReuseableEdit url2={url2} url={url} data1={post.title} data3={post.img} id={post.id} datua2={post.content} user={post.user} form={form} setForm={setForm} display={display} setDisplay={setDisplay}>
                            </ReuseableEdit>
                            </div>
</div>

                        </div>
                        ) : null}
                    </div>
                    ) : null}

                </ol>
            })
            }

    </div>
  )
}

export default Draft
