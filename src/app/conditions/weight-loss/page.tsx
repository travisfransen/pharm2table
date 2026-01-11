import Link from 'next/link'
import Header from '../../../../components/Header'
import ToolCard from '../../../../components/ToolCard'

export default function WeightLossIndex() {
  const tools = [
    { slug: 'cost-calculator', title: 'Cost calculator', description: 'Estimate monthly cost for medications.' },
    { slug: 'price-explainer', title: 'Price explainer', description: 'Understand the components of a price.' },
    { slug: 'cheapest-path', title: 'Cheapest path', description: 'Find the provider with the lowest total cost.' },
  ]

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Weight loss</h1>
        <p className="text-gray-600 mb-6">Tools to help you compare and estimate medication costs.</p>

        <div className="grid gap-4">
          {tools.map((t) => (
            <Link key={t.slug} href={`/conditions/weight-loss/tools/${t.slug}`}>
              <ToolCard title={t.title} description={t.description} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
