import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from '../theme'
import Navbar from '../components/Navbar'
import '@fontsource/poppins/700.css'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Navbar />
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          <SessionProvider>
            <Component {...pageProps} />
          </SessionProvider>
        </motion.div>
        <Footer />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
