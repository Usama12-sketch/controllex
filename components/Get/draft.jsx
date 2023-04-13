import ReuseableEdit from '@/components/Edit/ReuseableEdit'
import Link from 'next/link';

import Image from 'next/image';

import { useSession } from "next-auth/react";
import React, { useState } from 'react'
import MainEdit from '../Edit/MainEdit';
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

                            <MainEdit url={url} url2={url2} post={post}/>

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
