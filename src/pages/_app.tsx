import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Context } from "../configs/context";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Context>
        <Component {...pageProps} />
      </Context>
    </SSRProvider>
  );
}
