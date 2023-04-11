
import ReuseableEdit from '@/components/Edit/ReuseableEdit';
import Link from 'next/link';
import QueryComments from '../Comments/QueryComments'
import Image from 'next/image';
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'; 
import dynamic from 'next/dynamic'
import NewComment from '../Comments/NewComment';
import QueryWrapper from '../Comments/QueryWrapper';
import Comments from '../Comments/Comments';

const Edit = dynamic(()=> import("@/components/Edit/ReuseableEdit"), {
  loading:()=> <p>editing..</p>
} )

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

  const [show, setShow] = useState(false)

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
    <div className='  transition-all duration-700'>
       
 {posts.filter(post => !archives.some(archive => archive.id === post.id)).map((post, index) => { return <ol className=' my-4 shadow-2xl flex flex-col gap-3' key={index}>

                <div className='flex flex-col duration-700 boxes2 gap-2  p-3'>
                <Link className='flex gap-3' href={`/Blog/${post.user.id}`}>
                <h1 className=' font-mono w-max p-2 rounded-lg  bg-slate-400 text-center '>{post.user.name}</h1>
                <Image  width={40} height={40} src=
                    {post.user.image}
                    alt="" />
                </Link>
            
                <h1 className=' font-semibold bg-clip-text   bg-gradient-to-br from-white to-yellow-500 text-transparent text-3xl lg:text-4xl font-serif'>{post.title}:</h1>
                <p className=' text-lg '>{post.content.split(' ').slice(0, 5).join(' ')}.....</p>

                <img className=' w-full lg:p-20 ' src={post.img} alt="" />
                <div className=' flex  justify-end'>


<Link className=' lg:text-xl text-md font-mono bottom-14 right-5 bg-orange-200 px-1 w-max rounded-lg text-gray-800' href={`/${post.id}`} >Details...</Link>

 </div>

 <div className=''>
<NewComment postid={post.id} />
<Comments post={post}/>

{/* <QueryComments postid={post.id}/> */}


</div>

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

              <button className='ml-2 mb-8 bg-gradient-to-b from-blue-300 to-green-500 text-white  rounded  p-2 w-min' onFocusCapture={() => { setForm({ title: post.title, content: post.content, img: post.img }); setDisplay("block");setShow(true) }}>Edit</button>

<div className={`${display} flex flex-col justify-center fixed top-0 h-screen bg-yellow-400 bg-opacity-70  items-center `}>

                            <div className={` `} >
                                <input type="text" placeholder='Title' onChange={e => setForm({ ...form, title: e.target.value })} value={form.title} className='w-full m-1 bg-gray-500' />

                                <textarea value={form.content} className={` w-full bg-gray-500`} id="" cols="30" rows="10" onChange={e => setForm({ ...form, content: e.target.value })} ></textarea>
                                <input value={form.img} onChange={e => setForm({ ...form, img: e.target.value })} className=' w-full bg-green-900 placeholder:text-green-200' type="text" placeholder='type url here' />
                            {/* <ReuseableEdit
                            >
                          </ReuseableEdit> */}
                            {show ? <Edit
                          url2={url2} url={url} data1={post.title} data3={post.img} id={post.id} datua2={post.content} user={post.user} form={form} setForm={setForm} display={display} setDisplay={setDisplay}
                            
                            />: <></> }

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
