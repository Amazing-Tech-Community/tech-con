import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script'; // Import the Script component

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="/fonts/SF-Text-Medium.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        strategy="afterInteractive" // Choose an appropriate loading strategy
        src="https://assets.mailerlite.com/js/universal.js"
        id="mailerlite-script"
        async
      >
        {`
          (function(w,d,e,u,f,l,n){
            w[f]=w[f]||function(){
              (w[f].q=w[f].q||[]).push(arguments);
            },l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);
          })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '670955');
        `}
      </Script>
      <main className={`font-sf-pro bg-[#1e1e1e] text-[#fafafa]  px-3 `}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default App;
