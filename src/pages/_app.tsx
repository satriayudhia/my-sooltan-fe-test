import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Context } from "../configs/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}
