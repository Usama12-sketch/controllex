"use client"
import React from 'react'
import { useQuery } from 'react-query'
import { useState } from 'react'
import axios from 'axios'

async function fetchPosts() {

    const { data } = await axios.get('http://localhost:3000/api/getposts')
    return data
}

function Query({handleofDelete}) {
   
    const { data, error, isError, isLoading } = useQuery('post', fetchPosts)
    // first argument is a string to cache and track the query result
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }

    return (
        <div className='container'>
           

            <h1>Posts</h1>
            {
                data.map((post, index) => {
                    return <li key={index}>
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
