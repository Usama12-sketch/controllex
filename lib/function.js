
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




export  const CreateItem = async (url, input, reset, setIsButtonDisabled , initialAction ) => {
try {

  if(!navigator.onLine)
  {
     return
  }  
  if (setIsButtonDisabled) setIsButtonDisabled(true);
  if (initialAction) initialAction();


  let response = await fetch (url, {
    method:'POST',
    headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      body:JSON.stringify(input)

    })
    if(!response.ok) {
      if (setIsButtonDisabled) setIsButtonDisabled(false);
      
      if (initialAction) initialAction();
    }
    
    else if(response.ok) {
      reset()
      setIsButtonDisabled(false)
    }
  } catch (error) {
  }   
}






export const toggleItem = async (url, input, reset, setIsButtonDisabled ) => {
    try {
 if(!navigator.onLine)
{
    return
}
        if (setIsButtonDisabled) setIsButtonDisabled(true);
    
      
      
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(input),
      });
      
      if (!response.ok) {
        
    
      if (setIsButtonDisabled) setIsButtonDisabled(false);
  
    }
    else if(response.ok) {
           reset();
      }
    } catch (error) {
      console.error(error);
    }
  };
  