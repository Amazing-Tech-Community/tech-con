import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>

      <main className={`${inter.variable} font-inter px-3 `}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
