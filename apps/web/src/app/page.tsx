import { Bell, ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DealRoom } from "@/features/deals/deal-room";
import { MetricCard } from "@/features/dashboard/metric-card";
import { InvoiceTable } from "@/features/invoices/invoice-table";
import { RoleSwitcher } from "@/features/parties/role-switcher";
import { metrics } from "@/mock/demo-data";

function LogoMark() {
  return (
    <div className="relative size-9 text-[#061b49]">
      <div className="absolute left-0 top-0 h-9 w-2 rounded-sm bg-current" />
      <div className="absolute left-0 top-0 h-2 w-8 rounded-sm bg-current" />
      <div className="absolute left-0 top-[15px] h-2 w-7 rounded-sm bg-current" />
      <div className="absolute bottom-0 left-0 h-2 w-8 rounded-sm bg-current" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-[#061b49]">
      <header className="sticky top-0 z-10 grid min-h-[72px] grid-cols-[1fr_auto_1fr] items-center border-b border-slate-200 bg-white px-8">
        <div className="flex items-center gap-4">
          <LogoMark />
          <span className="text-2xl font-bold tracking-tight">
            Canton Receivables
          </span>
        </div>

        <RoleSwitcher />

        <div className="flex items-center justify-end gap-4">
          <Button variant="ghost" size="icon-lg" aria-label="Notifications">
            <Bell className="size-5" />
          </Button>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-slate-100 font-semibold ring-1 ring-slate-200">
              AG
            </span>
            <ChevronDown className="size-4 text-slate-600" />
          </div>
        </div>
      </header>

      <div className="grid min-h-[calc(100vh-72px)] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_520px]">
        <section className="space-y-6 px-8 py-10">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome back, Acme Group
              </h1>
              <p className="mt-3 text-slate-600">
                Here&apos;s what&apos;s happening with your receivables.
              </p>
            </div>
            <Button className="h-11 rounded-lg bg-[#061b49] px-5 text-sm font-semibold hover:bg-[#102a63]">
              <Plus className="size-4" />
              Create Private Invoice
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>

          <InvoiceTable />
        </section>

        <DealRoom />
      </div>
    </main>
  );
}
