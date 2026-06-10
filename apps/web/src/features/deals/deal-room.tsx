import {
  Check,
  ChevronDown,
  Eye,
  EyeOff,
  Info,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { participants, timeline, visibilityRows } from "@/mock/demo-data";
import type { Role, TimelineItem } from "@/types/domain";

const roleClassName: Record<Role, string> = {
  SME: "bg-blue-50 text-blue-700",
  Funder: "bg-emerald-50 text-emerald-700",
  Auditor: "bg-slate-100 text-slate-700",
};

function TimelineMarker({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  if (item.state === "done") {
    return (
      <span className="flex size-6 items-center justify-center rounded-full bg-emerald-700 text-white">
        <Check className="size-3.5" />
      </span>
    );
  }

  if (item.state === "current") {
    return (
      <span className="flex size-6 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
        {index + 1}
      </span>
    );
  }

  return (
    <span className="flex size-6 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
      {index + 1}
    </span>
  );
}

export function DealRoom() {
  return (
    <aside className="border-l border-slate-200 bg-white px-7 py-5">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ChevronDown className="size-4 text-[#061b49]" />
          <h2 className="text-xl font-bold text-[#061b49]">Deal Room</h2>
        </div>
        <Button variant="ghost" size="icon-lg" aria-label="Close deal room">
          <X className="size-5" />
        </Button>
      </div>

      <div className="space-y-3 px-4">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[#061b49]">INV-2025-000133</p>
          <Badge
            variant="outline"
            className="border-emerald-200 bg-emerald-50 text-emerald-700"
          >
            Offer Submitted
          </Badge>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
          <span>Vertex Manufacturing</span>
          <span className="text-slate-300">|</span>
          <span>$175,000.00</span>
          <span className="text-slate-300">|</span>
          <span>Due Jun 12, 2025</span>
        </div>
      </div>

      <Separator className="my-6" />

      <section className="space-y-4 px-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-[#061b49]">Participants</h3>
          <Button variant="link" className="h-auto px-0 text-blue-700">
            View all
          </Button>
        </div>
        <div className="space-y-4">
          {participants.map((participant) => {
            const Icon = participant.icon;

            return (
              <div
                key={participant.name}
                className="grid grid-cols-[2rem_1fr_auto] items-center gap-3"
              >
                <span className="flex size-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#061b49]">
                  <Icon className="size-4" />
                </span>
                <span className="font-semibold text-[#061b49]">
                  {participant.name}
                </span>
                <Badge
                  variant="secondary"
                  className={`min-w-20 justify-center ${roleClassName[participant.role]}`}
                >
                  {participant.role}
                </Badge>
              </div>
            );
          })}
        </div>
      </section>

      <Separator className="my-6" />

      <section className="space-y-5 px-4">
        <h3 className="font-bold text-[#061b49]">Timeline</h3>
        <div className="space-y-5">
          {timeline.map((item, index) => (
            <div
              key={item.label}
              className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 text-sm"
            >
              <TimelineMarker item={item} index={index} />
              <span
                className={
                  item.state === "current"
                    ? "font-bold text-[#061b49]"
                    : "text-[#061b49]"
                }
              >
                {item.label}
              </span>
              <span className="text-xs text-slate-500">{item.time}</span>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-6" />

      <section className="space-y-4 px-1">
        <div className="flex items-center gap-2 px-3">
          <h3 className="font-bold text-[#061b49]">Privacy & Visibility</h3>
          <Info className="size-4 text-slate-500" />
        </div>
        <div className="overflow-hidden text-sm">
          <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] border-b border-slate-200 py-2 text-center font-semibold text-[#061b49]">
            <span />
            <span>SME</span>
            <span>Funder</span>
            <span>Auditor</span>
          </div>
          {visibilityRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1.5fr_repeat(3,1fr)] border-b border-slate-100 py-3 text-center last:border-b-0"
            >
              <span className="text-right text-[#061b49]">{row.label}</span>
              {(["SME", "Funder", "Auditor"] as const).map((role) => (
                <span key={role} className="flex justify-center text-[#061b49]">
                  {row[role] ? (
                    <Eye className="size-4 text-emerald-700" />
                  ) : (
                    <EyeOff className="size-4 text-red-600" />
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Button className="mt-7 h-14 w-full rounded-lg bg-[#061b49] text-base font-bold hover:bg-[#102a63]">
        Make Offer
      </Button>
    </aside>
  );
}
