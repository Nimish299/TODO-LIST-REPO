import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/Component/layout/Layout'
export default function App({ Component, pageProps }: AppProps) {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider> 
      <Layout>     
         <Component {...pageProps} />
         </Layout>

      </ChakraProvider>
      )
}
