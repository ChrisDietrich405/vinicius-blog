import "styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      {/* session represents the users' data */}
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
