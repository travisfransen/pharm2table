import { PriceTier } from '../lib/types'

export default function PriceTable({ prices }: { prices?: PriceTier[] }) {
  if (!prices || prices.length === 0) {
    return <div className="p-4 text-sm text-gray-600">No pricing available</div>
  }

  return (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr>
          <th className="text-left p-2 border-b">Item</th>
          <th className="text-right p-2 border-b">Unit price</th>
        </tr>
      </thead>
      <tbody>
        {prices.map((p) => (
          <tr key={p.id ?? p.name}>
            <td className="p-2 border-b">{p.name}</td>
            <td className="p-2 border-b text-right">{typeof p.unitPrice === 'number' ? `$${p.unitPrice.toFixed(2)}` : '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
