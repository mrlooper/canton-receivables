import { Info, TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Metric } from "@/types/domain";

export function MetricCard({ metric }: { metric: Metric }) {
  const isRisk = metric.label === "Default risk";
  const TrendIcon = metric.detail.startsWith("-") ? TrendingDown : TrendingUp;

  return (
    <Card className="rounded-lg border-slate-200 bg-white shadow-none">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
          <span>{metric.label}</span>
          <Info className="size-4 text-slate-500" />
        </div>
        <div
          className={
            isRisk
              ? "text-3xl font-bold text-emerald-700"
              : "text-3xl font-bold tracking-tight text-[#061b49]"
          }
        >
          {metric.value}
        </div>
        <div className="flex items-center gap-1 text-sm text-slate-600">
          {metric.tone === "success" ? (
            <TrendIcon className="size-3.5 text-emerald-700" />
          ) : null}
          <span
            className={
              metric.tone === "success"
                ? "font-semibold text-emerald-700"
                : undefined
            }
          >
            {metric.tone === "success"
              ? metric.detail.split(" ")[0]
              : metric.detail}
          </span>
          {metric.tone === "success" ? (
            <span>{metric.detail.split(" ").slice(1).join(" ")}</span>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
