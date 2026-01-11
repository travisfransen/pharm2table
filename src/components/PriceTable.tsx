import { PriceTier } from '../lib/types'

export default function PriceTable({ prices }: { prices: PriceTier[] }) {
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
          <tr key={p.id}>
            <td className="p-2 border-b">{p.name}</td>
            <td className="p-2 border-b text-right">${p.unitPrice.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
