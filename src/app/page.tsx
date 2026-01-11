import Link from "next/link";
import { TrustStrip } from "../components/TrustStrip";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold">Pharm 2 Table</h1>
        <p className="text-lg text-gray-700">
          Compare legitimate direct-to-consumer healthcare options with clear tradeoffs and pricing logic.
        </p>

        <div className="flex gap-3">
          <Link className="rounded-md bg-black px-4 py-2 text-white" href="/conditions">
            Find care by condition
          </Link>
          <Link className="rounded-md border px-4 py-2" href="/conditions/weight-loss">
            Start with weight loss
          </Link>
        </div>

        <TrustStrip />
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <Link href="/conditions/weight-loss/tools/cost-calculator" className="rounded-lg border p-4 hover:bg-gray-50">
          <h2 className="font-medium">True Cost Calculator</h2>
          <p className="text-sm text-gray-700">Estimate real 3/6/12-month costs with dose changes.</p>
        </Link>
        <Link href="/conditions/weight-loss/tools/price-explainer" className="rounded-lg border p-4 hover:bg-gray-50">
          <h2 className="font-medium">Why is this more expensive?</h2>
          <p className="text-sm text-gray-700">Break down where the extra dollars go.</p>
        </Link>
        <Link href="/conditions/weight-loss/tools/cheapest-path" className="rounded-lg border p-4 hover:bg-gray-50">
          <h2 className="font-medium">Cheapest Viable Path Finder</h2>
          <p className="text-sm text-gray-700">Cheapest option that still fits your constraints.</p>
        </Link>
      </section>
    </main>
  );
}
