import "@src/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@norriswu/ui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
