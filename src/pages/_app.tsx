import '../styles/globals.scss';
import "../styles/banner.scss";
import "../styles/modals.scss";
import "../styles/bannerImage.scss"

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
