export interface PriceTier {
  id: string
  name: string
  unitPrice: number
}

export interface Vendor {
  slug: string
  name: string
  description?: string
  prices: PriceTier[]
}
