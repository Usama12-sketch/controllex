"use client"
import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import Image from 'next/image'

async function fetchPosts() {

    const { data } = await axios.get('http://localhost:3000/api/authPost')
    return data
}

function Query() {
   
    const { data, error, isError, isLoading } = useQuery('pos', fetchPosts)
    // first argument is a string to cache and track the query result
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }

    return (
        <div className='container'>
           

            <Image width={100} height={100} layout='instrinsic' src={`${data.image}`}  alt="" />
            <h1>Posts of {data.name}</h1>
            {
                data.emails.map((post, index) => {
                    return <li key={index}>
                        <h1>{data.name}</h1>

                    <h1>{post.title}</h1>
                    <h1>{post.content}</h1>
                    <button onClick={() => handleofDelete(post.id)}>Update</button>
                    </li>
                })
            }

        </div>
    )
}

export default Query
