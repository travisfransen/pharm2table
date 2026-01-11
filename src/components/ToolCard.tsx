import React from 'react'

export default function ToolCard({ title, description }: { title: string; description?: string }) {
  return (
    <div className="p-4 border rounded hover:shadow transition">
      <h3 className="text-lg font-medium">{title}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  )
}
