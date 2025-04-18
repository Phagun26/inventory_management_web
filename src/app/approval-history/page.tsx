'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { format, isWithinInterval, startOfDay, endOfDay, parseISO } from 'date-fns'

interface TransactionHistory {
  id: string
  operationId: string
  userId: string
  action: string
  timestamp: string
  notes: string | null
  user: {
    name: string
  }
  operation: {
    type: string
    quantity: number
    productId: string
    rackId: string
    isApproved: boolean
    isCancelled: boolean
    product: {
      name: string
    }
    rack: {
      number: string
    }
  }
}

interface FilterState {
  productId: string
  rackNumber: string
  operationType: string
  startDate: string
  endDate: string
}

export default function ApprovalHistoryPage() {
  const router = useRouter()
  const [allHistory, setAllHistory] = useState<TransactionHistory[]>([])
  const [filteredHistory, setFilteredHistory] = useState<TransactionHistory[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<FilterState>({
    productId: '',
    rackNumber: '',
    operationType: '',
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: format(new Date(), 'yyyy-MM-dd')
  })
  const [showExportDialog, setShowExportDialog] = useState(false)
  const [exportFileName, setExportFileName] = useState(`Export_${format(new Date(), 'yyyy-MM-dd')}`)

  // Fetch all history data once
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('/api/transaction-history')
        if (!response.ok) {
          throw new Error('Failed to fetch history')
        }
        const data = await response.json()
        setAllHistory(data)
        setFilteredHistory(data)
      } catch (error) {
        console.error('Error fetching history:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchHistory()
  }, [])

  // Apply filters on the client side
  useEffect(() => {
    let result = [...allHistory]

    // Filter by product ID
    if (filters.productId) {
      const searchTerm = filters.productId.toLowerCase()
      result = result.filter(item => 
        item.operation.productId.toLowerCase().includes(searchTerm)
      )
    }

    // Filter by rack number
    if (filters.rackNumber) {
      const searchTerm = filters.rackNumber.toLowerCase()
      result = result.filter(item => 
        item.operation.rack.number.toLowerCase().includes(searchTerm)
      )
    }

    // Filter by operation type
    if (filters.operationType) {
      result = result.filter(item => 
        item.operation.type.toLowerCase() === filters.operationType.toLowerCase()
      )
    }

    // Filter by date range
    if (filters.startDate && filters.endDate) {
      const start = startOfDay(parseISO(filters.startDate))
      const end = endOfDay(parseISO(filters.endDate))
      
      result = result.filter(item => {
        const itemDate = parseISO(item.timestamp)
        return isWithinInterval(itemDate, { start, end })
      })
    }

    setFilteredHistory(result)
  }, [filters, allHistory])

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const handleExport = () => {
    const headers = ['Timestamp', 'User', 'Action', 'Product', 'Rack', 'Quantity', 'Type', 'Status', 'Notes']
    const csvContent = [
      headers.join(','),
      ...filteredHistory.map(item => [
        new Date(item.timestamp).toLocaleString(),
        item.user.name,
        item.action,
        item.operation.product.name,
        item.operation.rack.number,
        item.operation.quantity,
        item.operation.type,
        item.operation.isApproved ? 'Approved' : item.operation.isCancelled ? 'Cancelled' : 'Pending',
        item.notes || '-'
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `${exportFileName}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setShowExportDialog(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen p-8 bg-background">
        <div className="bg-white dark:bg-[#1e293b] p-6 rounded-lg shadow-md">
          <p className="text-lg font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="bg-white dark:bg-[#1e293b] p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold dark:text-gray-200">Approval History</h1>
          <button
            onClick={() => setShowExportDialog(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Export to CSV
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          <input
            type="text"
            name="productId"
            placeholder="Search by Product ID"
            value={filters.productId}
            onChange={handleFilterChange}
            className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="text"
            name="rackNumber"
            placeholder="Search by Rack Number"
            value={filters.rackNumber}
            onChange={handleFilterChange}
            className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <select
            name="operationType"
            value={filters.operationType}
            onChange={handleFilterChange}
            className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            <option value="">All Operations</option>
            <option value="inward">Inward</option>
            <option value="outward">Outward</option>
          </select>
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleFilterChange}
            className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleFilterChange}
            className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rack</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Notes</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredHistory.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {new Date(item.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.action}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.operation.product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.operation.rack.number}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.operation.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.operation.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.operation.isApproved ? 'Approved' : item.operation.isCancelled ? 'Cancelled' : 'Pending'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.notes || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showExportDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-[#1e293b] p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 dark:text-white">Export to CSV</h2>
            <input
              type="text"
              value={exportFileName}
              onChange={(e) => setExportFileName(e.target.value)}
              className="w-full p-2 border rounded mb-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Enter file name"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowExportDialog(false)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
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
    </div>
  )
} 