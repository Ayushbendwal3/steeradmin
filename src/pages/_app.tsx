import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { StoreProvider, UsersStore } from '../store'

const store = new UsersStore()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Steer Health</title>
      </Head>
      <CssBaseline />
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  )
}

export default MyApp
