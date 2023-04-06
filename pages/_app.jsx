import '@/styles/globals.css'
import Authcontext from './auth/Authcontext'

import Navbar from '../components/IndexNavbar'

export default function App({ Component, pageProps, }) {
  return<><Authcontext>
    
    <Navbar  />
    

   <Component {...pageProps} ></Component>
  
  </Authcontext>
  </>
}

