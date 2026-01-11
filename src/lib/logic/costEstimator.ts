import { DoseBand, DurationMonths, PathType } from "../types";

export type CostEstimate = {
  month: number;
  medicationLow: number;
  medicationHigh: number;
  serviceLow: number;
  serviceHigh: number;
};

export function estimateCosts(path: PathType, dose: DoseBand, duration: DurationMonths): CostEstimate[] {
  // Placeholder logic: replace with real ranges as you validate.
  const base = path === "telehealth_bundle" ? { med: [250, 600], svc: [100, 250] }
            : path === "manufacturer_direct" ? { med: [200, 500], svc: [0, 50] }
            : path === "cost_plus" ? { med: [180, 450], svc: [0, 25] }
            : { med: [180, 500], svc: [0, 0] };

  const doseMultiplier = dose === "low" ? 0.9 : dose === "mid" ? 1.0 : dose === "high" ? 1.15 : 1.0;

  const rows: CostEstimate[] = [];
  for (let m = 1; m <= duration; m++) {
    const escalation = m >= 3 ? 1.15 : 1.0; // simple “dose goes up” bump
    rows.push({
      month: m,
      medicationLow: Math.round(base.med[0] * doseMultiplier * escalation),
      medicationHigh: Math.round(base.med[1] * doseMultiplier * escalation),
      serviceLow: base.svc[0],
      serviceHigh: base.svc[1],
    });
  }
  return rows;
}
