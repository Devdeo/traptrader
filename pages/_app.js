// pages/_app.js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Novbar from '../components/Novbar';
import Footer from '../components/Footer';
import Script from 'next/script';
import './scrap.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Dev Trap Trader</title>
       
        
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"/>
 
      </Head>
      <Script src="https://kit.fontawesome.com/yourcode.js" crossOrigin="anonymous"/>
      <Novbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;