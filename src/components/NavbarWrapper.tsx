'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { useTheme } from './ThemeProvider'
import { useEffect } from 'react'

export default function NavbarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { theme } = useTheme()
  
  // Don't show navbar on login and signup pages
  const isAuthPage = pathname === '/login' || pathname === '/signup'
  
  // Set dark mode background color on the html element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.style.backgroundColor = '#0f172a'
    } else {
      document.documentElement.style.backgroundColor = ''
    }
  }, [theme])
  
  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
    </>
  )
} 