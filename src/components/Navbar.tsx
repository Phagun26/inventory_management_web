'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import UserDropdown from './UserDropdown'

interface User {
  name: string
  designation: string
  isAdmin: boolean
}

export default function Navbar() {
  const [pendingCount, setPendingCount] = useState(0)
  const [user, setUser] = useState<User | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Get user from localStorage
    const userStr = localStorage.getItem('user')
    if (userStr) {
      const userData = JSON.parse(userStr)
      setUser(userData)
    }
  }, [])

  useEffect(() => {
    // Only fetch pending count if user is admin
    if (user?.isAdmin) {
      const fetchPendingCount = async () => {
        try {
          const response = await fetch('/api/operations/pending-count')
          if (response.ok) {
            const data = await response.json()
            setPendingCount(data.count)
          }
        } catch (error) {
          console.error('Error fetching pending count:', error)
        }
      }

      fetchPendingCount()
      // Refresh count every minute
      const interval = setInterval(fetchPendingCount, 60000)
      return () => clearInterval(interval)
    }
  }, [user])

  return (
    <nav className="bg-white dark:bg-[#0f172a] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/inventory"
              className={`flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 ${
                pathname === '/inventory' ? 'border-b-2 border-indigo-500' : ''
              }`}
            >
              Inventory Management
            </Link>
            {user?.isAdmin && (
              <Link
                href="/admin"
                className={`flex items-center ml-8 px-3 py-2 text-gray-700 dark:text-gray-200 relative ${
                  pathname === '/admin' ? 'border-b-2 border-indigo-500' : ''
                }`}
              >
                Admin Dashboard
                {pendingCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {pendingCount}
                  </span>
                )}
              </Link>
            )}
            <Link
              href="/approval-history"
              className={`flex items-center ml-8 px-3 py-2 text-gray-700 dark:text-gray-200 ${
                pathname === '/approval-history' ? 'border-b-2 border-indigo-500' : ''
              }`}
            >
              Approval History
            </Link>
          </div>
          <div className="flex items-center">
            {user && <UserDropdown />}
          </div>
        </div>
      </div>
    </nav>
  )
} 