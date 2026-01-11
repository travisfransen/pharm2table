import { Vendor } from '../types'

export const vendors: Vendor[] = [
  {
    slug: 'example-vendor',
    name: 'Example Pharmacy',
    pathType: 'independent_pharmacy',
    shortDescription: 'A demo vendor with sample prices',
    pros: ['Local pickup', 'Flexible refills'],
    cons: ['Limited stock'],
    pricingNotes: 'Sample dataset — not real prices',
    referralUrl: 'https://example.com/referral',
    sponsored: false,
    description: 'A demo vendor with sample prices',
    prices: [
      { id: 'med1', name: 'Semaglutide 1mg (per dose)', unitPrice: 8.5 },
      { id: 'med2', name: 'Pens (pack)', unitPrice: 25 },
    ],
  },
  {
    slug: 'cheap-med',
    name: 'Budget Pharmacy',
    pathType: 'cost_plus',
    shortDescription: 'Lower-cost focused pharmacy',
    pros: ['Low prices', 'Fast shipping'],
    cons: ['Limited customer support'],
    pricingNotes: 'Discounts applied at checkout',
    referralUrl: 'https://budget.example.com',
    sponsored: false,
    description: 'Lower-cost focused pharmacy',
    prices: [
      { id: 'med1', name: 'Semaglutide 1mg (per dose)', unitPrice: 7.25 },
      { id: 'med2', name: 'Pens (pack)', unitPrice: 22 },
    ],
  },
]

// End of file.
