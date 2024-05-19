import 'focus-visible'
import '@/styles/tailwind.css'

import GoogleTagManager from '../components/GoogleTagManager';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
