import { useRouter } from "next/router"

export  const deleteItem = async (url, reset ) => {

    let item =  await fetch (url, {
        method:'DELETE',
    })
    
    reset()
}

export  const UpdateItem = async (url, input, reset ) => {
    let items = await fetch (url, {
        method:'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body:JSON.stringify(input)

    })
   reset()
}
export  const CreateItem = async (url, input, reset ) => {
    
    let items = await fetch (url, {
        method:'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body:JSON.stringify(input)

    })
   reset()
}

