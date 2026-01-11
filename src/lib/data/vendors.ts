import { Vendor } from '../types'

export const vendors: Vendor[] = [
  {
    slug: 'example-vendor',
    name: 'Example Pharmacy',
    description: 'A demo vendor with sample prices',
    prices: [
      { id: 'med1', name: 'Semaglutide 1mg (per dose)', unitPrice: 8.5 },
      { id: 'med2', name: 'Pens (pack)', unitPrice: 25 },
    ],
  },
  {
    slug: 'cheap-med',
    name: 'Budget Pharmacy',
    description: 'Lower-cost focused pharmacy',
    prices: [
      { id: 'med1', name: 'Semaglutide 1mg (per dose)', unitPrice: 7.25 },
      { id: 'med2', name: 'Pens (pack)', unitPrice: 22 },
    ],
  },
]
