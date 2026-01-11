export interface PriceTier {
  id: string
  name: string
  unitPrice: number
}

export type PathType = "manufacturer_direct" | "cost_plus" | "independent_pharmacy" | "telehealth_bundle";

export type DoseBand = "low" | "mid" | "high" | "unknown";
export type DurationMonths = 3 | 6 | 12;

export type PrescriptionStatus = "yes" | "no" | "unknown";
export type StartTimeline = "asap" | "weeks" | "wait";
export type ClinicianAccessNeed = "yes" | "no" | "only_if_required";
export type SelfManageRefills = "yes" | "no";

export type Vendor = {
  slug: string;
  name: string;
  pathType: PathType;
  shortDescription: string;
  pros: string[];
  cons: string[];
  pricingNotes?: string;
  referralUrl?: string;
  sponsored?: boolean;
  // Backwards compatibility: keep `description` and `prices` optional so existing code continues to work
  description?: string;
  prices?: PriceTier[];
};

// End of file.
