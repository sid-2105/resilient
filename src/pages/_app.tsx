export const dynamic = 'error';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])
  return (
  <Component {...pageProps} />
  )
}
