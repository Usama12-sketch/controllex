import prisma from '../../lib/prisma'
import React, { useEffect, } from 'react'
import Post from '../../components/Create'
import { SafeJson, safeJson } from "../../lib/formatHelpers";
import { useState, useRef } from 'react';
import { useSession } from "next-auth/react";
import Users from '../../components/Users';
import Admin from '../../components/Admins';
import Head from 'next/head'

const Blog = ({ Admins, users }) => {
  const session = useSession(false)
  const [NotAdmin, setNotadmin] = useState()


  const url = "/api/CUD/Blocks"
  const data = { emails: '', name: '', img: '', }

  const [form, setForm] = useState(data)


  useEffect(() => {
    const timer = setTimeout(() => {
      setNotadmin("Sorry! you are not Admin!")
    }
      , 2000);
    return () => clearTimeout(timer);
  }, []);


  console.log(Admins)

  return (
    <>
         <Head>

 <title> Blocked!</title>

         </Head>
    <div className='flex flex-col justify-evenly bg-gradient-to-br from-yellow-500 to-pink-700 '>




      <div className="flex gap-4 "></div>
      {Admins.some((p) => p.emails === session.data?.user?.email) || session.data?.user?.email === "chodarykhan115@gmail.com" ? (<div className='  text-red-500'>





        <div className='text-black flex flex-col h-screen gap-5'>

          <div className=' shadow-2xl shadow-green-500 h-screen   hover:bg-gray-800 transition-all duration-500 rounded-sm p-4 flex flex-col gap-5'>
            <span className=' text-blue-400 '>
              Email:
            </span>

            <input id='input1' className='transition-all duration-500    hover:rounded-sm' value={form.emails} onChange={e => setForm({ ...form, emails: e.target.value })}></input>

            <span className=' text-green-400 '>
              Name:
            </span>
            <input id='input2' className='transition-all duration-500 hover:rounded-sm' cols="30" rows="10" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}></input>

            <span className=' text-green-400 '>
              image: url
            </span>

            <input className='transition-all duration-500 hover:rounded-sm' id='input3' value={form.img} onChange={e => setForm({ ...form, img: e.target.value })}></input>
            <Post setForm={setForm} data={data} url={url} form={form} />


            <div className='  bg-gradient-to-br from-yellow-500 to-pink-700  flex '>
              <div className='   hover:shadow-xl hover:shadow-red-400 bg-gradient-to-br from-yellow-500 to-pink-700  gap-5 p-5  shadow-xl text-yellow-200  flex flex-col '>
                <h1 className=' bg-clip-text from-slate-500 to-green-600 bg-gradient-to-l text-transparent font-bold text-2xl'>Blocked!</h1>
                <Admin url={url} Admins={Admins} />

              </div>


              <Users setForm={setForm} url={url} users={users} />
            </div>

          </div>
        </div>


      </div>
      ) : <div className='flex justify-center relative h-screen    items-center text-center '>

        <h1>
          {NotAdmin}
        </h1>
      </div>
      }

    </div>
</>
  )
}

export default Blog

export const getServerSideProps = async () => {
  let users = await prisma.user.findMany()
  let Admins = await prisma.blocs.findMany({
    include: {
      user: true
    }
  })

  Admins = SafeJson(Admins)
  users = SafeJson(users)
  return {
    props: { Admins, users },
  };
};