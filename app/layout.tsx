import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'pharm2table',
  description: 'Pharm2Table — generated Next.js app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
