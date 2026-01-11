'use client'
import { useState } from 'react'
import Header from '../../../../../components/Header'
import { vendors } from '../../../../../lib/data/vendors'
import { findCheapestVendor } from '../../../../../lib/logic/cheapestPath'

export default function CheapestPathTool() {
  const [quantity, setQuantity] = useState(1)
  const result = findCheapestVendor(vendors, quantity)

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Cheapest path</h1>
        <label className="block mb-4">
          <span className="text-sm text-gray-700">Quantity</span>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mt-1 block w-32 rounded border p-2"
          />
        </label>

        <div className="p-4 border rounded">
          <h2 className="font-medium">Cheapest vendor</h2>
          <p className="text-lg font-semibold">{result.vendor.name}</p>
          <p className="text-gray-700">Estimated total: ${result.total.toFixed(2)}</p>
        </div>
      </main>
    </div>
  )
}
