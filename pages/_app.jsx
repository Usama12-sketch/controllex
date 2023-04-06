import '@/styles/globals.css'
import Authcontext from './auth/Authcontext'

import Navbar from '../components/IndexNavbar'

export default function App({ Component, pageProps, }) {
  return<><Authcontext>
    
    <Navbar  />
    
<div className='pt-12'>
   <Component {...pageProps} ></Component>
</div>
  
  </Authcontext>
  </>
}
