import { useRouter } from "next/router";
import ReactLoading from 'react-loading';
import { useEffect, useState } from "react";
export default function Loading() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const handleStart = (url) =>  {setLoading(true); setError(false) };
        const handleComplete = (url) => { setLoading(false) ; setError(false)};
        const handleError = (url) =>  setError(true);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        // router.events.on('routeChangeError', handleError)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            // router.events.off('routeChangeError', handleError)
        }
    })
    
    return<>
  
    
    {loading && <div  className=" bg-green-300 top-0 left-0 h-screen w-screen absolute  bg-opacity-50 text-4xl flex flex-row justify-center items-center">
    

    <ReactLoading type={"bars"} color={"#035455"} height={570} width={175} />
       
        </div>}

    {error && <div  className=" absolute top-0 left-50 bg-transparent text-4xl">
        Error....</div>}

    </>
}