import type { AppProps } from "next/app";
import { ThemeProvider } from "@norriswu/ui";
import "@norriswu/ui/styles.css";
import "@src/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
