import '../styles/globals.css';
import Navbar from '../components/Navbar';
import '../styles/custom-tree.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
