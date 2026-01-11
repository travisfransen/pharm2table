import React from 'react'

export default function RadioGroup<T>({ value, onChange, options }: { value: T; onChange: (v: T) => void; options: { value: T; label: string }[] }) {
  return (
    <div className="flex gap-4">
      {options.map((o, i) => (
        <label key={i} className="inline-flex items-center gap-2">
          <input type="radio" checked={o.value === value} onChange={() => onChange(o.value)} />
          <span className="text-sm">{o.label}</span>
        </label>
      ))}
    </div>
  )
}
