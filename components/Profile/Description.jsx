import { useState } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"


export default function UpdateDescription({setProjectState, projectState , des }) {
  
  const [description, setDescription] = useState('')

  
  const router = useRouter()
const session = useSession()
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(`/api/Get/authPost`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        //   Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify({ description }),
      })

      if (response.ok) {
        console.log("User description updated")
        router.replace(router.asPath, undefined, {scroll: true})
        setProjectState("view")
      } else {
        console.error("Error updating user description")
      }
    } catch (err) {
      console.error("Error updating user description", err)
    }
  }
  
    function setUpdate (){
     setDescription(des)
     setProjectState('edit') 
    }
    return (<div>
    {projectState === 'view' && 
    <button className=" bg-red-400 p-2 rounded-md text-white  font-bold " onClick={setUpdate} > Edit</button>
  }
{projectState === 'edit' && 
    <form className=" flex flex-col" onSubmit={handleSubmit}>
    
  
        <textarea className=" rounded-md p-2"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          />
          <button className=" bg-red-300 w-max p-2 rounded-md  m-3" onClick={()=> 
          setProjectState('edit') 
          } >Cancel</button>
      
          <button className=" bg-green-300 w-max p-2 rounded-md  m-3" type="submit" >Update</button>
    </form>
}
  </div>
  )
}
