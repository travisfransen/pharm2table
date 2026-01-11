import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">pharm2table</h1>
        <p className="mb-6 text-gray-700">Find the best pharmacy pricing and compare vendors for treatments and tools.</p>

        <section className="grid gap-4 sm:grid-cols-2">
          <Link href="/conditions" className="block p-4 border rounded hover:shadow">
            <h2 className="text-xl font-semibold">Conditions</h2>
            <p className="text-sm text-gray-600">Browse condition pathways and tools (e.g., weight loss).</p>
          </Link>

          <Link href="/vendors/example-vendor" className="block p-4 border rounded hover:shadow">
            <h2 className="text-xl font-semibold">Example Vendor</h2>
            <p className="text-sm text-gray-600">See a vendor profile and price table.</p>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
