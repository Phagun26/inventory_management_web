'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function UnauthorizedPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/inventory')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Unauthorized Access
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            You do not have permission to access this page. You will be redirected to the inventory page in 3 seconds.
          </p>
        </div>
      </div>
    </div>
  )
} 