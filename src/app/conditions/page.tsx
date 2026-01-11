import Link from 'next/link'
import Header from '../../../components/Header'

export default function ConditionsIndex() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Conditions</h1>
        <ul className="space-y-2">
          <li>
            <Link href="/conditions/weight-loss" className="text-blue-600 hover:underline">
              Weight loss
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
