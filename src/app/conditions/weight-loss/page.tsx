import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import { vendors } from "@/lib/data/vendors";

export default function WeightLossPage() {
  const weightLossVendors = vendors; // later filter by condition

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Weight Loss</h1>
        <p className="text-gray-700">
          Find the lowest-cost legitimate path. We rank cheaper viable options first and disclose sponsorships.
        </p>
        <div className="flex gap-3">
          <Link className="rounded-md bg-black px-4 py-2 text-white" href="/conditions/weight-loss/tools/cheapest-path">
            See lowest-cost options
          </Link>
          <Link className="rounded-md border px-4 py-2" href="/conditions/weight-loss/tools/cost-calculator">
            True Cost Calculator
          </Link>
        </div>
        <TrustStrip />
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-medium">Cost-first paths</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Link className="rounded-lg border p-4 hover:bg-gray-50" href="/conditions/weight-loss/tools/cost-calculator">
            <div className="font-medium">Manufacturer-direct & cost-plus</div>
            <div className="text-sm text-gray-700">Often cheapest long-term. Requires more self-management.</div>
          </Link>
          <Link className="rounded-lg border p-4 hover:bg-gray-50" href="/conditions/weight-loss/tools/price-explainer">
            <div className="font-medium">Where people overpay</div>
            <div className="text-sm text-gray-700">Program fees, bundled services, and dose escalation surprises.</div>
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-medium">Featured vendor profiles</h2>
        <div className="mt-4 grid gap-3">
          {weightLossVendors.map(v => (
            <Link key={v.slug} href={`/vendors/${v.slug}`} className="rounded-lg border p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="font-medium">{v.name}</div>
                {v.sponsored ? <span className="text-xs rounded bg-yellow-100 px-2 py-1">Sponsored</span> : null}
              </div>
              <div className="text-sm text-gray-700">{v.shortDescription}</div>
              <div className="mt-2 text-xs text-gray-600">Path: {v.pathType.replaceAll("_", " ")}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
