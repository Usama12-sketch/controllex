import React from 'react'
import Image from 'next/image'
import EditAdmins from '../Edit/EditAdmins'
const Admin = ({Admins , url}) => {
      return  Admins.map((block) => <div className=' flex flex-col' key={block.id}>
    <span className=' text-blue-400 '>
  Email: 
  </span>
{block.emails}
  <span className=' text-green-400 '>
  Name: 
  </span>
<h1>
  {block.name}</h1>

  <div className=' h-10 overflow-hidden rounded-3xl w-10'>

<Image width={20} height={20}   src={block.img}
 alt="" />
 </div>
  
      
<EditAdmins url={url}  emailsform={block.emails} id={block.id} name={block.name} img={block.img} />
</div>)
  
}


export default Admin