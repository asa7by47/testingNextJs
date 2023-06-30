import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'
import { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Swiper from 'swiper';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <>
    <Navbar />  
  <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
