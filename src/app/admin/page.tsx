'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Operation {
  id: number
  type: 'INWARD' | 'OUTWARD'
  quantity: number
  isApproved: boolean
  product: {
    id: string
    name: string
  }
  rack: {
    id: string
    number: string
  }
  user: {
    name: string
    designation: string
  }
  createdAt: string
}

export default function AdminDashboard() {
  const [pendingOperations, setPendingOperations] = useState<Operation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Get user from localStorage
    const userStr = localStorage.getItem('user')
    if (userStr) {
      const userData = JSON.parse(userStr)
      // Redirect if not admin
      if (!userData.isAdmin) {
        router.push('/inventory')
        return
      }
    } else {
      // No user logged in, redirect to login
      router.push('/login')
      return
    }

    fetchPendingOperations()
  }, [])

  const fetchPendingOperations = async () => {
    try {
      const response = await fetch('/api/operations?pending=true')
      if (response.ok) {
        const data = await response.json()
        setPendingOperations(data)
      } else {
        setError('Failed to fetch pending operations')
      }
    } catch (error) {
      setError('An error occurred while fetching operations')
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (operationIds: number[]) => {
    try {
      const userData = JSON.parse(localStorage.getItem('user') || '{}')
      const response = await fetch('/api/operations/approve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          operationIds,
          userId: userData.id 
        }),
      })

      if (response.ok) {
        // Refresh the list after approval
        fetchPendingOperations()
      } else {
        setError('Failed to approve operations')
      }
    } catch (error) {
      setError('An error occurred while approving operations')
    }
  }

  const handleCancel = async (operationId: number) => {
    try {
      const userData = JSON.parse(localStorage.getItem('user') || '{}')
      const response = await fetch('/api/operations/cancel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          operationId,
          userId: userData.id 
        }),
      })

      if (response.ok) {
        // Refresh the list after cancellation
        fetchPendingOperations()
      } else {
        setError('Failed to cancel operation')
      }
    } catch (error) {
      setError('An error occurred while cancelling operation')
    }
  }

  if (loading) {
    return <div className="p-4">Loading...</div>
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto p-8 bg-background">
      <div className="bg-white dark:bg-[#1e293b] p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold mb-4 dark:text-gray-200">Pending Approvals</h1>
        {pendingOperations.length === 0 ? (
          <p className="dark:text-gray-300">No pending operations</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1e293b] border border-gray-300 dark:border-[#334155]">
              <thead>
                <tr className="bg-gray-100 dark:bg-[#0f172a]">
                  <th className="px-4 py-2 border dark:border-[#334155] dark:text-gray-300">Type</th>
                  <th className="px-4 py-2 border dark:border-[#334155] dark:text-gray-300">Product</th>
                  <th className="px-4 py-2 border dark:border-[#334155] dark:text-gray-300">Quantity</th>
                  <th className="px-4 py-2 border dark:border-[#334155] dark:text-gray-300">Rack</th>
                  <th className="px-4 py-2 border dark:border-[#334155] dark:text-gray-300">Requested By</th>
                  <th className="px-4 py-2 border dark:border-[#334155] dark:text-gray-300">Date</th>
                  <th className="px-4 py-2 border dark:border-[#334155] dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingOperations.map((operation) => (
                  <tr key={operation.id} className="dark:text-gray-300 dark:hover:bg-[#1a2847]">
                    <td className="px-4 py-2 border dark:border-[#334155]">
                      <span className={operation.type === 'INWARD' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {operation.type}
                      </span>
                    </td>
                    <td className="px-4 py-2 border dark:border-[#334155]">{operation.product.name}</td>
                    <td className="px-4 py-2 border dark:border-[#334155]">{operation.quantity}</td>
                    <td className="px-4 py-2 border dark:border-[#334155]">{operation.rack.number}</td>
                    <td className="px-4 py-2 border dark:border-[#334155]">
                      {operation.user.name} ({operation.user.designation})
                    </td>
                    <td className="px-4 py-2 border dark:border-[#334155]">
                      {new Date(operation.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 border dark:border-[#334155]">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleApprove([operation.id])}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleCancel(operation.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {pendingOperations.length > 0 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleApprove(pendingOperations.map(op => op.id))}
                  className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-md shadow-sm flex items-center gap-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Approve All ({pendingOperations.length})
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 