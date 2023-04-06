import Link from 'next/link'
import React, { useState , useRef,useEffect} from 'react'
import { useSession } from 'next-auth/react'
import IndexDropDown from './Main/Dropdowns/IndexDropdown'
import Image from 'next/image'
const Navbar = ({}) => {


  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const hideTimeoutRef = useRef(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/Get/getUsers');
      const post = await fetch('/api/Get/getPosts');
      const data = await res.json();
      const posts = await post.json();
      setUsers(data);
      setPosts(posts)
    }
    fetchData();
  }, []);

  const session = useSession(null)

  const hidesearch = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setBlur(false);
      // setSearch("")
    }, 500);
  };
  const [search , setSearch] = useState("")
  const [blur , setBlur] = useState(false)

  return (
  
  <div  className='duration-500 hover:py-2 fixed bg-black bg-opacity-50 z-30   flex w-screen items-center justify-between'>
  
      <Link className=' m-1 p-1 rounded-lg text-shadow-xl text-lg hover:text-green-500 duration-300  bg-gradient-to-br ease-in-out text-blue-300 font-bold font-sans ' href={'/Blog'}>Controllex</Link>

<div  onClick={()=> setBlur(true)} onBlur={hidesearch}  className='flex w-max  mx-4   rounded-md  '>


    <input className=' rounded-xl px-2 bg-gray-300 font-semibold font-mono' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      
<div className={`${blur ? "flex": "hidden" } mt-10 flex-col absolute bg-white`}>

      {search.length > 0 && users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())).map((user) =>
       <ol className='  bg-slate-200 m-3 flex flex-col' key={user.id}>
       <button onClick={()=> setSearch("")}>
        <Link href=
      {`/Blog/${user.id}`}>{user.name}
      </Link>
        </button> 
        </ol>
        )}
    
      {search.length > 0 && posts.filter(user => user.title.toLowerCase().includes(search.toLowerCase())).map((user) => <ol className=' bg-blue-300 p-1 m-3 flex flex-col' key={user.id}>
       <button onClick={()=> setSearch("")}>
        <Link href=
      {`/${user.id}`}>{user.title}
      </Link>
        </button> 
        </ol>)}
</div>
</div>
    <div className='w-max relative top-0 h-min right-0'> 
    <IndexDropDown></IndexDropDown>
    </div>


   
      </div>
  )
}

export default Navbar
