'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface HistoryItem {
  id: string
  type: 'item' | 'rack'
  value: string
}

interface ProductEntry {
  id: string
  quantity: string
}

interface RackProduct {
  id: string
  name: string
  quantity: number
}

export default function TransactionsPage() {
  const router = useRouter()
  const [rackNumber, setRackNumber] = useState('')
  const [operationType, setOperationType] = useState<'INWARD' | 'OUTWARD'>('INWARD')
  const [products, setProducts] = useState<ProductEntry[]>([{ id: '', quantity: '' }])
  const [rackHistory, setRackHistory] = useState<HistoryItem[]>([])
  const [itemHistory, setItemHistory] = useState<HistoryItem[]>([])
  const [showProcessing, setShowProcessing] = useState(false)
  const [rackSuggestions, setRackSuggestions] = useState<string[]>([])
  const [focusedProductIndex, setFocusedProductIndex] = useState<number | null>(null)
  const [itemSuggestions, setItemSuggestions] = useState<string[]>([])
  const [rackProducts, setRackProducts] = useState<RackProduct[]>([])
  const rackInputRef = useRef<HTMLDivElement>(null)
  const productInputRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Load history from localStorage
    const savedRackHistory = localStorage.getItem('rackHistory')
    const savedItemHistory = localStorage.getItem('itemHistory')
    if (savedRackHistory) setRackHistory(JSON.parse(savedRackHistory))
    if (savedItemHistory) setItemHistory(JSON.parse(savedItemHistory))
  }, [])

  useEffect(() => {
    // Fetch products in rack when outward operation is selected and rack number is entered
    if (operationType === 'OUTWARD' && rackNumber) {
      const fetchRackProducts = async () => {
        try {
          const response = await fetch(`/api/inventory/rack/${rackNumber}`)
          if (response.ok) {
            const data = await response.json()
            setRackProducts(data)
          }
        } catch (error) {
          console.error('Error fetching rack products:', error)
        }
      }
      fetchRackProducts()
    } else {
      setRackProducts([])
    }
  }, [operationType, rackNumber])

  const handleProductSuggestionClick = (index: number, value: string) => {
    handleProductChange(index, 'id', value)
    setItemSuggestions([])
    setRackProducts([]) // Also close the rack products dropdown

    // Find next empty product ID field and focus it
    const nextEmptyIndex = products.findIndex((p, i) => i > index && !p.id.trim())
    if (nextEmptyIndex !== -1) {
      // Focus the input in the next empty row
      const nextInput = productInputRefs.current[nextEmptyIndex]?.querySelector('input')
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close rack suggestions
      if (rackInputRef.current && !rackInputRef.current.contains(event.target as Node)) {
        setRackSuggestions([])
      }

      // Close product suggestions
      let clickedInsideProductInput = false
      productInputRefs.current.forEach((ref) => {
        if (ref && ref.contains(event.target as Node)) {
          clickedInsideProductInput = true
        }
      })
      if (!clickedInsideProductInput) {
        setItemSuggestions([])
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleRackNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setRackNumber(value)
    // Filter suggestions based on input
    const filtered = rackHistory
      .filter(rack => rack.value.toLowerCase().includes(value.toLowerCase()))
      .map(rack => rack.value)
    setRackSuggestions(filtered)
  }

  const handleProductChange = (index: number, field: keyof ProductEntry, value: string) => {
    const newProducts = [...products]
    newProducts[index] = { ...newProducts[index], [field]: value }
    setProducts(newProducts)

    // Filter product suggestions based on input
    if (field === 'id') {
      const filtered = itemHistory
        .filter(item => item.value.toLowerCase().includes(value.toLowerCase()))
        .map(item => item.value)
      setItemSuggestions(filtered)
      setFocusedProductIndex(index)
    }
  }

  const addProductRow = () => {
    setProducts([...products, { id: '', quantity: '' }])
  }

  const removeProductRow = (index: number) => {
    if (products.length > 1) {
      const newProducts = products.filter((_, i) => i !== index)
      setProducts(newProducts)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setShowProcessing(true)

    try {
      const operations = products.map(product => ({
        type: operationType,
        quantity: parseInt(product.quantity),
        productId: product.id,
        rackId: rackNumber,
        userId: JSON.parse(localStorage.getItem('user') || '{}').id
      }))

      const responses = await Promise.all(
        operations.map(operation => 
          fetch('/api/operations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(operation)
          })
        )
      )

      const allOk = responses.every(response => response.ok)
      if (!allOk) {
        throw new Error('Failed to create some operations')
      }

      // Add to history if not already present
      if (rackNumber && !rackHistory.some(rack => rack.value === rackNumber)) {
        const newRackHistory = [...rackHistory, { id: Date.now().toString(), type: 'rack' as const, value: rackNumber }]
        setRackHistory(newRackHistory)
        localStorage.setItem('rackHistory', JSON.stringify(newRackHistory))
      }

      // Add product IDs to history
      products.forEach(product => {
        if (product.id && !itemHistory.some(item => item.value === product.id)) {
          const newItemHistory = [...itemHistory, { id: Date.now().toString(), type: 'item' as const, value: product.id }]
          setItemHistory(newItemHistory)
          localStorage.setItem('itemHistory', JSON.stringify(newItemHistory))
        }
      })

      // Clear form
      setRackNumber('')
      setProducts([{ id: '', quantity: '' }])
      setRackSuggestions([])
      setItemSuggestions([])

      setTimeout(() => {
        setShowProcessing(false)
      }, 2000)
    } catch (error) {
      console.error('Error creating operations:', error)
      setShowProcessing(false)
    }
  }

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="bg-white dark:bg-[#1e293b] p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold mb-4 dark:text-gray-200">Inventory Transactions</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Operation Type
            </label>
            <select
              value={operationType}
              onChange={(e) => setOperationType(e.target.value as 'INWARD' | 'OUTWARD')}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-[#334155] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-[#0f172a] dark:text-gray-200 sm:text-sm"
            >
              <option value="INWARD">Inward</option>
              <option value="OUTWARD">Outward</option>
            </select>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Rack Number
            </label>
            <div ref={rackInputRef}>
              <input
                type="text"
                value={rackNumber}
                onChange={handleRackNumberChange}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-[#334155] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-[#0f172a] dark:text-gray-200 sm:text-sm"
              />
              {rackSuggestions.length > 0 && (
                <div className="absolute z-10 mt-1 w-full bg-white dark:bg-[#1e293b] shadow-lg rounded-md">
                  {rackSuggestions.map((suggestion) => (
                    <div
                      key={suggestion}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#334155] cursor-pointer dark:text-gray-200"
                      onClick={() => {
                        setRackNumber(suggestion)
                        setRackSuggestions([])
                      }}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Products
            </label>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div 
                        className="relative" 
                        ref={el => {
                          if (el) {
                            productInputRefs.current[index] = el
                          }
                        }}
                      >
                        <input
                          type="text"
                          value={product.id}
                          onChange={(e) => handleProductChange(index, 'id', e.target.value)}
                          onFocus={() => setFocusedProductIndex(index)}
                          onBlur={() => {
                            // Use setTimeout to allow click events on suggestions to fire first
                            setTimeout(() => setFocusedProductIndex(null), 200)
                          }}
                          className="mt-1 block w-full rounded-md border-gray-300 dark:border-[#334155] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-[#0f172a] dark:text-gray-200 sm:text-sm"
                        />
                        {focusedProductIndex === index && itemSuggestions.length > 0 && (
                          <div className="absolute z-10 mt-1 w-full bg-white dark:bg-[#1e293b] shadow-lg rounded-md">
                            {itemSuggestions.map((suggestion) => (
                              <div
                                key={suggestion}
                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#334155] cursor-pointer dark:text-gray-200"
                                onClick={() => handleProductSuggestionClick(index, suggestion)}
                              >
                                {suggestion}
                              </div>
                            ))}
                          </div>
                        )}
                        {focusedProductIndex === index && operationType === 'OUTWARD' && rackProducts.length > 0 && (
                          <div className="absolute z-10 mt-1 w-full bg-white dark:bg-[#1e293b] shadow-lg rounded-md">
                            {rackProducts.map((rackProduct) => (
                              <div
                                key={rackProduct.id}
                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#334155] cursor-pointer dark:text-gray-200"
                                onClick={() => handleProductSuggestionClick(index, rackProduct.id)}
                              >
                                {rackProduct.name} (Qty: {rackProduct.quantity})
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-[#334155] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-[#0f172a] dark:text-gray-200 sm:text-sm"
                        required
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        type="button"
                        onClick={() => removeProductRow(index)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              onClick={addProductRow}
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-indigo-300 dark:bg-indigo-900 dark:hover:bg-indigo-800"
            >
              Add Product
            </button>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Proceed
          </button>
        </form>

        {/* Processing Popup */}
        {showProcessing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">Processing your request...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 