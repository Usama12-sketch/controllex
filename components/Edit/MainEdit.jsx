import React,{useState,useEffect, useRef} from 'react'
import dynamic from 'next/dynamic'
const Quill = dynamic(() => import("@/components/Quill"), {
  ssr: false,
  loading: () => <p>editing..</p>
})
const Edit = dynamic(() => import("@/components/Edit/ReuseableEdit"), {
    loading: () => <p>editing..</p>
  })
const MainEdit = ({post, url, url2}) => {
    const [title, setTitle] = useState("")
    const [value, setValue] = useState("");   
     const [display, setDisplay] = useState("hidden")
     const [show, setShow] = useState(false)
     const form = { title: title, content: value}


    const targetRef = useRef(null);

  return (
    <div  >
      
      <button className='ml-2 mb-8 bg-gradient-to-b from-blue-300 to-green-500 text-white  rounded  p-2 w-min' onFocusCapture={() => { setTitle(post.title); setValue(post.content); setDisplay("block"); setShow(true) }}>Edit</button>

<div   className={`${display} flex flex-col justify-center fixed z-30 h-full top-0  p-4  bg-opacity-70  items-center `}>

  <div ref={targetRef} className={` bg-blue-400 p-2 rounded-md `} >
    <input type="text" placeholder='Title' onChange={e => setForm({ ...form, title: e.target.value })} value={form.title} className=' px-2 rounded-sm w-full my-1 bg-red-200' />

    <Quill value={value} setValue={setValue} /> 

    {show ? <Edit
       url={url}  id={post.id}  user={post.user} form={form} setValue={setValue} setTitle={setTitle} display={display} setDisplay={setDisplay}

    /> : <></>}
    </div>
    </div>
    </div>
  )
}

export default MainEdit
