import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={
          {
            duration: 1.5
          }
        }
      >
        <ThemeProvider defaultTheme='system' attribute='class'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
