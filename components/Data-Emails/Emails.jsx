"use client"
import QueryWrapper from '@/app/QueryWrapper'
import Query from './Query'
import React from 'react'
import Post from './Post'


const Emails = () => {


  return  <div >
      
        <h1 id='props'>Verified</h1>
        <Post/>
        <QueryWrapper>
      <Query />
         </QueryWrapper>
    
    </div>
  
}

export default Emails
