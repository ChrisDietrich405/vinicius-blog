import "styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
