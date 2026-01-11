'use client'
import { useState } from 'react'
import Header from '../../../../../components/Header'
import PriceTable from '../../../../../components/PriceTable'
import { calculateMonthlyCost } from '../../../../../lib/logic/costCalculator'
import { vendors } from '../../../../../lib/data/vendors'

export default function CostCalculatorTool() {
  const [vendorSlug, setVendorSlug] = useState(vendors[0].slug)
  const [quantityPerMonth, setQuantityPerMonth] = useState(1)

  const vendor = vendors.find((v) => v.slug === vendorSlug) || vendors[0]
  const monthlyCost = calculateMonthlyCost(vendor, quantityPerMonth)

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Cost calculator</h1>

        <div className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-700">Vendor</span>
            <select
              value={vendorSlug}
              onChange={(e) => setVendorSlug(e.target.value)}
              className="mt-1 block w-full rounded border p-2"
            >
              {vendors.map((v) => (
                <option key={v.slug} value={v.slug}>
                  {v.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm text-gray-700">Quantity per month</span>
            <input
              type="number"
              min={1}
              value={quantityPerMonth}
              onChange={(e) => setQuantityPerMonth(Number(e.target.value))}
              className="mt-1 block w-full rounded border p-2"
            />
          </label>

          <div className="p-4 border rounded">
            <h2 className="font-medium">Estimated monthly cost</h2>
            <p className="text-xl font-semibold">${monthlyCost.toFixed(2)}</p>
          </div>

          <PriceTable prices={vendor.prices} />
        </div>
      </main>
    </div>
  )
}
