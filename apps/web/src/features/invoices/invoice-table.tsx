import { Info, MoreHorizontal, Search, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { companyIcons, invoices } from "@/mock/demo-data";
import type { Invoice, InvoiceStatus, RiskGrade } from "@/types/domain";

const statusClassName: Record<InvoiceStatus, string> = {
  Listed: "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Offer Submitted": "border-blue-200 bg-blue-50 text-blue-700",
  Verified: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Draft: "border-slate-200 bg-slate-100 text-slate-600",
};

const scoreClassName: Record<RiskGrade, string> = {
  A: "border-emerald-200 bg-emerald-50 text-emerald-700",
  B: "border-lime-200 bg-lime-50 text-lime-700",
  C: "border-amber-200 bg-amber-50 text-amber-700",
};

function CompanyCell({ invoice, index }: { invoice: Invoice; index: number }) {
  const Icon = companyIcons[index % companyIcons.length];

  return (
    <div className="flex items-center gap-3">
      <span className="flex size-6 items-center justify-center rounded-md bg-slate-100 text-[#061b49] ring-1 ring-slate-200">
        <Icon className="size-3.5" />
      </span>
      <span>{invoice.company}</span>
    </div>
  );
}

export function InvoiceTable() {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <div className="flex flex-col gap-4 border-b border-slate-200 p-5 md:flex-row md:items-center md:justify-between">
        <h2 className="text-base font-bold text-[#061b49]">Your invoices</h2>
        <div className="flex gap-3">
          <div className="flex h-10 w-full min-w-64 items-center gap-2 rounded-lg border border-slate-200 px-3 text-sm text-slate-500 md:w-80">
            <Search className="size-4" />
            <span>Search invoices...</span>
          </div>
          <Button variant="outline" size="lg" className="h-10 px-4">
            <SlidersHorizontal className="size-4" />
            Filters
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="px-5 text-[#061b49]">Invoice ID</TableHead>
            <TableHead className="text-[#061b49]">Company</TableHead>
            <TableHead className="text-[#061b49]">Amount</TableHead>
            <TableHead className="text-[#061b49]">Due date</TableHead>
            <TableHead className="text-[#061b49]">
              <span className="inline-flex items-center gap-1">
                Score <Info className="size-3.5 text-slate-500" />
              </span>
            </TableHead>
            <TableHead className="text-[#061b49]">Status</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice.id} className="h-[58px]">
              <TableCell className="px-5 font-medium text-[#061b49]">
                {invoice.id}
              </TableCell>
              <TableCell className="text-[#061b49]">
                <CompanyCell invoice={invoice} index={index} />
              </TableCell>
              <TableCell className="font-medium text-[#061b49]">
                {invoice.amount}
              </TableCell>
              <TableCell className="text-[#061b49]">
                {invoice.dueDate}
              </TableCell>
              <TableCell>
                <span
                  className={`inline-flex overflow-hidden rounded-md border text-xs font-semibold ${scoreClassName[invoice.grade]}`}
                >
                  <span className="border-r border-current/15 px-2 py-1">
                    {invoice.grade}
                  </span>
                  <span className="px-2 py-1">{invoice.score}</span>
                </span>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={statusClassName[invoice.status]}
                >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon-sm" aria-label="More">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between border-t border-slate-200 px-5 py-3 text-sm text-slate-600">
        <span>Showing 1 to 8 of 18 invoices</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon-lg" disabled>
            <span className="sr-only">Previous page</span>
            {"<"}
          </Button>
          {["1", "2", "3"].map((page) => (
            <Button
              key={page}
              variant={page === "1" ? "secondary" : "outline"}
              size="icon-lg"
            >
              {page}
            </Button>
          ))}
          <Button variant="outline" size="icon-lg">
            <span className="sr-only">Next page</span>
            {">"}
          </Button>
        </div>
      </div>
    </section>
  );
}
