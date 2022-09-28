import "../styles/globals.scss";
import "../styles/banner.scss";
import "../styles/modals.scss";
import "../styles/bannerImage.scss";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
