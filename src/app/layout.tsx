import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import NavbarWrapper from '@/components/NavbarWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inventory Management System',
  description: 'A modern inventory management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarWrapper>{children}</NavbarWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
