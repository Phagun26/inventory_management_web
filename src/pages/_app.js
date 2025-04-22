import '@/app/globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import NavbarWrapper from '@/components/NavbarWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NavbarWrapper>
        <Component {...pageProps} />
      </NavbarWrapper>
    </ThemeProvider>
  )
}

export default MyApp 