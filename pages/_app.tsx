import "../styles/globals.css";
import type { AppProps } from "next/app";
import wrapper from "../reducer/redux";
import MbMenu from "../components/MbMenu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MbMenu />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
