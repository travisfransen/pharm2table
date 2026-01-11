import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="font-bold">pharm2table</Link>
        <nav className="space-x-4">
          <Link href="/conditions" className="text-sm text-gray-600 hover:text-gray-900">Conditions</Link>
          <Link href="/conditions/weight-loss" className="text-sm text-gray-600 hover:text-gray-900">Weight loss</Link>
        </nav>
      </div>
    </header>
  )
}
