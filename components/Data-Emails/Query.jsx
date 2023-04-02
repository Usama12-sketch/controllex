"use client"
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import Image from 'next/image'
import Deletebtn from '../../components/Edit'
import UpdateDescription from './update'

function Query({Post, data}) {
    const [projectState, setProjectState] = useState('view');

    
    return (
        <div className=' container bg-gradient-to-tr from-blue-300 rounded-sm shadow-xl h-screen  to-yellow-200 p-7 flex flex-col gap-4      '>
           
               <div className='   overflow-hidden rounded-3xl w-max  '>

            <Image width={100} height={100} layout='instrinsic' src={`${data.image}`}  alt="" />
               </div>
            <h1 className=' bg-clip-text bg-gradient-to-b from-blue-700 to-yellow-500 shadow-2xl rounded-lg  font-bold text-transparent text-3xl border-4 p-2 '>Profile of {data.name}</h1>  
            <p className=' text-blue-500 shadow-2xl font-black   text-lg font-serif ' > Description: 
             
                </p>
{projectState === 'view' && 
             <span className=' text-xl font-semibold  text-black'>
             {data.description} 
             </span>
}



             <UpdateDescription   des={data.description} setProjectState={setProjectState} projectState={projectState}/>

                    
            {Post.map((post, index) => {
                    return <ol className=' bg-green-300 to-yellow-200 p-4 shadow-2xl flex flex-col gap-3'  key={index}>
                        <h1 className=' font-mono w-max p-2 rounded-lg  bg-slate-400 text-center '>{data.name}</h1>
                    <Image layout='intrinsic' width={40} height={40} src=
                     {data.image}
                     alt="" />

                    <h1 className=' bg-clip-text bg-gradient-to-br text-3xl font-serif '>{post.title}:</h1>
                    <p className=' text-lg '>{post.content}</p>
                    <Deletebtn posttitle={post.title} img={post.img} id={post.id} content={post.content} user={post.user} />

                
                    </ol>
                })
            }

        </div>
    )
}

export default Query
