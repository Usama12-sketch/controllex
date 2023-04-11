import '@/styles/globals.css'
import Authcontext from './auth/Authcontext'
import { useRouter } from 'next/router'
import QueryWrapper from '@/components/Comments/QueryWrapper'
import Navbar from '../components/IndexNavbar'
import DashBoard from '@/components/DashBoard'
export default function App({ Component, pageProps, }) {
  const location = useRouter();
  const path = location.pathname;

  return<>
  <QueryWrapper>

  <Authcontext>
    <Navbar  />
    
<div className='lg:pt-12 pt-12 flex-col lg:flex lg:flex-row md:flex md:flex-row
'>
  
<DashBoard/>
  <div className='w-screen'>

   <Component {...pageProps} ></Component>
  </div>
</div>
  
  </Authcontext>
  </QueryWrapper>
  </>
}

