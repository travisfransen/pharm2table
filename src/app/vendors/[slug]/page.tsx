import { vendors } from '../../../lib/data/vendors'
import Header from '../../../components/Header'
import PriceTable from '../../../components/PriceTable'

interface Props {
  params: { slug: string }
}

export default function VendorPage({ params }: Props) {
  const vendor = vendors.find((v) => v.slug === params.slug)
  if (!vendor) {
    return (
      <div>
        <Header />
        <main className="max-w-4xl mx-auto p-6">Vendor not found</main>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-2">{vendor.name}</h1>
        <p className="text-gray-600 mb-4">{vendor.description}</p>

        <PriceTable prices={vendor.prices} />
      </main>
    </div>
  )
}
