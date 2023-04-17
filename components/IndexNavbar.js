import Link from 'next/link'
import React, { useState , useRef,useEffect} from 'react'
import { useSession } from 'next-auth/react'
import IndexDropDown from './Main/Dropdowns/IndexDropdown'
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
  
  <div  className='duration-500  hover:py-2 fixed bg-black bg-opacity-50 z-50 h-max  sm:h-auto  flex w-screen items-center justify-between'>
  
      <Link className=' m-1 p-1 rounded-lg lg:text-lg md:text-lg text-sm  duration-300  bg-gradient-to-br ease-in-out text-blue-300 font-bold  home ' href={'/Blog'}>Controllex</Link>

<div  onClick={()=> setBlur(true)} onBlur={hidesearch}  className='flex w-max  mx-4   rounded-md  '>


    <input className=' rounded-xl lg:w-max md:w-max w-32 px-2 bg-gray-300 font-semibold font-mono placeholder:text-sm' type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search for users, content' />
      
<div className={`${blur ? "flex": "hidden" } mt-10 flex-col w-max absolute bg-white`}>

      {search.length > 0 && users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())).map((user) =>
       <ol className='  bg-slate-200 my-3 flex flex-col' key={user.id}>
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

        {search.length > 0 && posts.filter(post => post.content.toLowerCase().includes(search.toLowerCase())).map((post) => {
    let words = post.content.split(' ');
    let index = words.findIndex(word => word.toLowerCase().includes(search.toLowerCase()));
    let slicedWords = words.slice(Math.max(0, index - 2), index + 3);
    let slicedContent = slicedWords.join(' ');
    return (
        <ol className=' bg-blue-300 p-1 m-3 flex flex-col' key={post.id}>
            <h2 className='font-bold text-lg'>{post.title.split(" ").slice(0 , 3).join(" ") }</h2>
            <button onClick={()=> setSearch("")}>
                <Link href={`/${post.id}`}>{slicedContent}</Link>
            </button> 
        </ol>
    );
})}


</div>
</div>
    <div className='w-max relative top-0 h-min right-0'> 
    <IndexDropDown></IndexDropDown>
    </div>


   
      </div>
  )
}

export default Navbar
