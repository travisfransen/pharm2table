import { Vendor } from '../types'

export function calculateMonthlyCost(vendor: Vendor, quantityPerMonth: number) {
  // Sum unitPrice for a canonical medication (first price) times quantity
  const item = vendor.prices[0]
  const base = item ? item.unitPrice * quantityPerMonth : 0
  // Add a simple dispensing fee of $5
  const dispensing = 5
  return base + dispensing
}
