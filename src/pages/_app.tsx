// pages/_app.tsx
import { LuggageProvider } from "@/context/luggageContext";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LuggageProvider>
      <Component {...pageProps} />
    </LuggageProvider>
  );
}