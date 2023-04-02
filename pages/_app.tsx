import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Authcontext from './auth/Authcontext'

import Navbar from '../components/IndexNavbar'
export default function App({ Component, pageProps }: AppProps) {
  return<><Authcontext>
    
    <Navbar />

   <Component {...pageProps} ></Component>
  
  </Authcontext>
  </>
}
