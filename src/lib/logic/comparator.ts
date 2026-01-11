import { Vendor } from '../types'

export function compareVendorsByUnitPrice(v1: Vendor, v2: Vendor, priceId: string) {
  const p1 = v1.prices.find((p) => p.id === priceId)
  const p2 = v2.prices.find((p) => p.id === priceId)
  if (!p1 || !p2) return 0
  return p1.unitPrice - p2.unitPrice
}
