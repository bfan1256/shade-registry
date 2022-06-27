import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavbarLayout from 'layouts/NavbarLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavbarLayout>
      <Component {...pageProps} />
    </NavbarLayout>
  )
}

export default MyApp
