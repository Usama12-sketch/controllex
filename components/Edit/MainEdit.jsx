import React,{useState,useEffect, useRef} from 'react'
import dynamic from 'next/dynamic'

const Edit = dynamic(() => import("@/components/Edit/ReuseableEdit"), {
    loading: () => <p>editing..</p>
  })
const MainEdit = ({post, url, url2}) => {
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({ title: '', content: '', img: '', id: "" })
    const [display, setDisplay] = useState("hidden")


    const targetRef = useRef(null);

  return (
    <div  >
      
      <button className='ml-2 mb-8 bg-gradient-to-b from-blue-300 to-green-500 text-white  rounded  p-2 w-min' onFocusCapture={() => { setForm({ title: post.title, content: post.content, img: post.img }); setDisplay("block"); setShow(true) }}>Edit</button>

<div   className={`${display} flex flex-col justify-center fixed z-30 h-full top-0  p-4  bg-opacity-70  items-center `}>

  <div ref={targetRef} className={` bg-blue-400 p-2 rounded-md `} >
    <input type="text" placeholder='Title' onChange={e => setForm({ ...form, title: e.target.value })} value={form.title} className=' px-2 rounded-sm w-full my-1 bg-red-200' />

    <textarea value={form.content} className={` px-1 w-full bg-green-200`} id="" cols="30" rows="10" onChange={e => setForm({ ...form, content: e.target.value })} ></textarea>
    <input value={form.img} onChange={e => setForm({ ...form, img: e.target.value })} className=' w-full px-1 bg-blue-900 placeholder:text-green-200' type="text" placeholder='type url here' />
    {/* <ReuseableEdit
            >  Same as Edit below
          </ReuseableEdit> */}
    {show ? <Edit
      url2={url2} url={url} data1={post.title} data3={post.img} id={post.id} datua2={post.content} user={post.user} form={form} setForm={setForm} display={display} setDisplay={setDisplay}

    /> : <></>}
    </div>
    </div>
    </div>
  )
}

export default MainEdit
