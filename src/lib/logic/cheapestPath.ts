import { Vendor } from '../types'

export function findCheapestVendor(vendors: Vendor[], quantity: number) {
  // Very simple: find vendor with lowest price for first price item
  const results = vendors.map((v) => {
    const unit = v.prices[0]?.unitPrice ?? Infinity
    const total = unit * quantity
    return { vendor: v, total }
  })
  results.sort((a, b) => a.total - b.total)
  return results[0]
}
