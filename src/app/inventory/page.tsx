'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { useTheme } from '@/components/ThemeProvider'

interface InventoryItem {
  quantity: number
  product: {
    id: string
    name: string
  }
  rack: {
    id: string
    number: string
    description: string
  }
}

export default function Inventory() {
  const router = useRouter()
  const { theme } = useTheme()
  const [inventory, setInventory] = useState<InventoryItem[]>([])
  const [filteredItems, setFilteredItems] = useState<InventoryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [pendingCount, setPendingCount] = useState(0)
  const [productFilter, setProductFilter] = useState('')
  const [rackFilter, setRackFilter] = useState('')
  const [showExportDialog, setShowExportDialog] = useState(false)
  const [exportFileName, setExportFileName] = useState(`Inventory_${format(new Date(), 'yyyy-MM-dd')}`)

  // Polling interval in milliseconds (e.g., 5 seconds)
  const POLLING_INTERVAL = 5000

  useEffect(() => {
    fetchData() // Initial fetch

    // Set up polling
    const pollInterval = setInterval(fetchData, POLLING_INTERVAL)

    // Cleanup polling on component unmount
    return () => clearInterval(pollInterval)
  }, [])

  useEffect(() => {
    let filtered = [...inventory]
    
    if (productFilter.trim()) {
      const lowerProductFilter = productFilter.toLowerCase()
      filtered = filtered.filter(item => 
        item.product.name.toLowerCase().includes(lowerProductFilter)
      )
    }
    
    if (rackFilter.trim()) {
      const lowerRackFilter = rackFilter.toLowerCase()
      filtered = filtered.filter(item => 
        item.rack.number.toLowerCase().includes(lowerRackFilter)
      )
    }
    
    setFilteredItems(filtered)
  }, [productFilter, rackFilter, inventory])

  const fetchData = async () => {
    try {
      // Use cache-control headers for Prisma Accelerate
      const inventoryResponse = await fetch('/api/inventory', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache'
        }
      })
      
      if (!inventoryResponse.ok) {
        throw new Error('Failed to fetch inventory')
      }
      const inventoryData = await inventoryResponse.json()
      setInventory(inventoryData)
      setFilteredItems(inventoryData)

      const pendingResponse = await fetch('/api/operations?pending=true')
      if (pendingResponse.ok) {
        const pendingData = await pendingResponse.json()
        setPendingCount(pendingData.length)
      }
    } catch (error) {
      setError('Error loading inventory')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleExport = () => {
    const headers = ['Product', 'Quantity', 'Rack']
    const csvContent = [
      headers.join(','),
      ...filteredItems.map(item => [
        item.product.name,
        item.quantity,
        item.rack.number
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', `${exportFileName}.csv`)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
    setShowExportDialog(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
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

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Inventory
            </h1>
            <button
              onClick={() => setShowExportDialog(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Export to CSV
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by Product Name"
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white text-sm"
            />
            <input
              type="text"
              placeholder="Search by Rack Number"
              value={rackFilter}
              onChange={(e) => setRackFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white text-sm"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Rack
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredItems.map((item, index) => (
                  <tr key={`${item.product.id}-${item.rack.id}`} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {item.product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {item.rack.number}
                    </td>
                  </tr>
                ))}
                {filteredItems.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                      No inventory items found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Export Dialog */}
      {showExportDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Export Inventory</h3>
            <input
              type="text"
              value={exportFileName}
              onChange={(e) => setExportFileName(e.target.value)}
              className="w-full px-4 py-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white text-sm"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowExportDialog(false)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Export
              </button>
            </div>
          </div>
        </div>
      )}

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