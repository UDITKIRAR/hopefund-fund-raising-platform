
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
// import { SessionProvider } from 'next-auth/react'
// import {} from '@next/font/google'

export default function App({ Component, pageProps,session }) {
  return <>
    {/* <SessionProvider session={session}> */}
      <Navbar />
      <Component {...pageProps} />
    {/* </SessionProvider> */}
  </>
}
