import { Vendor } from "../types";

export const vendors: Vendor[] = [
  {
    slug: "lillydirect",
    name: "LillyDirect",
    pathType: "manufacturer_direct",
    shortDescription: "Manufacturer-direct pathway for eligible Lilly medications; requires a separate prescription.",
    pros: ["Transparent pricing structure", "Lower total cost vs bundled programs (often)", "No ongoing program fees"],
    cons: ["Prescription required separately", "Less support/coaching", "Fulfillment / eligibility constraints may apply"],
    pricingNotes: "Costs vary by dose and program terms. Displayed ranges are estimates.",
    referralUrl: "https://www.lilly.com/lillydirect",
    sponsored: false,
  },
];
