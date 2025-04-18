'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import UserDropdown from './UserDropdown'

export default function InventoryScreen() {
  const router = useRouter()

  useEffect(() => {
    router.push('/inventory')
  }, [router])

  return null
} 