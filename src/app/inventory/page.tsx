'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'

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
  const [productIdFilter, setProductIdFilter] = useState('')
  const [rackNumberFilter, setRackNumberFilter] = useState('')
  const [showExportDialog, setShowExportDialog] = useState(false)
  const [exportFileName, setExportFileName] = useState(`Inventory_${format(new Date(), 'yyyy-MM-dd')}`)

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

  // Filter items based on both filters
  useEffect(() => {
    let filtered = [...inventoryItems]
    
    if (productIdFilter.trim()) {
      const lowerProductId = productIdFilter.toLowerCase()
      filtered = filtered.filter(item => 
        item.id.toLowerCase().includes(lowerProductId)
      )
    }
    
    if (rackNumberFilter.trim()) {
      const lowerRackNumber = rackNumberFilter.toLowerCase()
      filtered = filtered.filter(item => 
        item.rackNumber.toLowerCase().includes(lowerRackNumber)
      )
    }
    
    setFilteredItems(filtered)
  }, [productIdFilter, rackNumberFilter, inventoryItems])

  const handleExport = () => {
    // Create CSV content
    const headers = ['ID', 'Name', 'Quantity', 'Rack Number']
    const csvContent = [
      headers.join(','),
      ...filteredItems.map(item => [
        item.id,
        item.name,
        item.quantity,
        item.rackNumber
      ].join(','))
    ].join('\n')

    // Create blob and download
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
          <button
            onClick={() => setShowExportDialog(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Export to CSV
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by Product ID"
            value={productIdFilter}
            onChange={(e) => setProductIdFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-[#334155] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-[#0f172a] dark:text-gray-200"
          />
          <input
            type="text"
            placeholder="Search by Rack Number"
            value={rackNumberFilter}
            onChange={(e) => setRackNumberFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-[#334155] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-[#0f172a] dark:text-gray-200"
          />
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

      {/* Export Dialog */}
      {showExportDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-medium mb-4 dark:text-gray-200">Export Inventory</h3>
            <input
              type="text"
              value={exportFileName}
              onChange={(e) => setExportFileName(e.target.value)}
              className="w-full px-4 py-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
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