import Header from '../../../../../components/Header'
import PriceTable from '../../../../../components/PriceTable'
import { vendors } from '../../../../../lib/data/vendors'

export default function PriceExplainer() {
  const vendor = vendors[0]
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Price explainer</h1>
        <p className="text-gray-700 mb-4">Breakdown of components that make up the price.</p>

        <section className="mb-6">
          <h2 className="font-medium">What affects price</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Manufacturer list price</li>
            <li>Packaging and dispensing fees</li>
            <li>Insurance copays and discounts</li>
          </ul>
        </section>

        <PriceTable prices={vendor.prices} />
      </main>
    </div>
  )
}
