import { Vendor } from '../types'

export function calculateMonthlyCost(vendor: Vendor, quantityPerMonth: number) {
  // Safely handle vendors without prices or with missing unitPrice
  const item = vendor.prices && vendor.prices.length > 0 ? vendor.prices[0] : undefined
  const unitPrice = item && typeof item.unitPrice === 'number' ? item.unitPrice : 0
  const base = unitPrice * quantityPerMonth
  // Add a simple dispensing fee of $5
  const dispensing = 5
  return base + dispensing
}
