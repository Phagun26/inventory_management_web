'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface InventoryItem {
  id: string
  name: string
  quantity: number
  rackNumber: string
}

export default function InventoryPage() {
  const router = useRouter()
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([])
  const [filteredItems, setFilteredItems] = useState<InventoryItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [pendingCount, setPendingCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch inventory items
        const inventoryResponse = await fetch('/api/inventory')
        if (!inventoryResponse.ok) {
          throw new Error('Failed to fetch inventory')
        }
        const inventoryData = await inventoryResponse.json()
        setInventoryItems(inventoryData)
        setFilteredItems(inventoryData)

        // Fetch pending operations count
        const pendingResponse = await fetch('/api/operations/pending-count')
        if (pendingResponse.ok) {
          const pendingData = await pendingResponse.json()
          setPendingCount(pendingData.count)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // Filter items based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredItems(inventoryItems)
      return
    }
    
    const lowerSearchTerm = searchTerm.toLowerCase()
    const filtered = inventoryItems.filter(item => 
      item.id.toLowerCase().includes(lowerSearchTerm) || 
      item.rackNumber.toLowerCase().includes(lowerSearchTerm)
    )
    setFilteredItems(filtered)
  }, [searchTerm, inventoryItems])

  return (
    <div className="min-h-screen p-8 bg-background">
      {pendingCount > 0 && (
        <div className="mb-8">
          <button
            onClick={() => router.push('/admin')}
            className="flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-800 font-medium py-2 px-4 rounded-full transition-colors border border-amber-300 dark:bg-amber-900 dark:text-amber-100 dark:border-amber-700 dark:hover:bg-amber-800"
          >
            <span className="inline-flex items-center justify-center bg-amber-500 text-white text-xs font-bold rounded-full h-6 w-6">
              {pendingCount}
            </span>
            <span>transactions left to be approved</span>
          </button>
        </div>
      )}

      <div className="bg-white dark:bg-[#1e293b] p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold dark:text-gray-200">Inventory Items</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by product ID or rack number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 pr-10 border border-gray-300 dark:border-[#334155] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-[#0f172a] dark:text-gray-200"
            />
            <svg 
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-[#334155]">
              <thead className="bg-gray-50 dark:bg-[#0f172a]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Rack Number
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#1e293b] divide-y divide-gray-200 dark:divide-[#334155]">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-[#1a2847]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {item.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {item.rackNumber}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                      No matching items found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => router.push('/transactions')}
        className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  )
} 