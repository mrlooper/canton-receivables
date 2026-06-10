import {
  Building2,
  CircleDollarSign,
  Factory,
  Landmark,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";
import type {
  Invoice,
  Metric,
  Participant,
  TimelineItem,
  VisibilityRow,
} from "@/types/domain";

export const metrics: Metric[] = [
  {
    label: "Total financed",
    value: "$4,250,000",
    detail: "+12.5% vs last 30 days",
    tone: "success",
  },
  {
    label: "Open invoices",
    value: "18",
    detail: "$2,915,000 outstanding",
  },
  {
    label: "Avg. discount",
    value: "2.35%",
    detail: "-0.15pp vs last 30 days",
    tone: "success",
  },
  {
    label: "Default risk",
    value: "Low",
    detail: "Portfolio risk score: 2.1/10",
    tone: "success",
  },
];

export const invoices: Invoice[] = [
  {
    id: "INV-2025-000134",
    company: "Northbridge Supplies",
    amount: "$250,000.00",
    dueDate: "Jun 10, 2025",
    grade: "A",
    score: 90,
    status: "Listed",
  },
  {
    id: "INV-2025-000133",
    company: "Vertex Manufacturing",
    amount: "$175,000.00",
    dueDate: "Jun 12, 2025",
    grade: "A",
    score: 88,
    status: "Offer Submitted",
  },
  {
    id: "INV-2025-000132",
    company: "BluePeak Packaging",
    amount: "$325,000.00",
    dueDate: "Jun 15, 2025",
    grade: "B",
    score: 72,
    status: "Verified",
  },
  {
    id: "INV-2025-000131",
    company: "Summit Retail Group",
    amount: "$210,000.00",
    dueDate: "Jun 18, 2025",
    grade: "B",
    score: 68,
    status: "Listed",
  },
  {
    id: "INV-2025-000130",
    company: "Ironwood Logistics",
    amount: "$410,000.00",
    dueDate: "Jun 20, 2025",
    grade: "B",
    score: 68,
    status: "Listed",
  },
  {
    id: "INV-2025-000129",
    company: "Pioneer Electronics",
    amount: "$185,000.00",
    dueDate: "Jun 22, 2025",
    grade: "C",
    score: 55,
    status: "Draft",
  },
  {
    id: "INV-2025-000128",
    company: "Coastal Office Supplies",
    amount: "$150,000.00",
    dueDate: "Jun 25, 2025",
    grade: "C",
    score: 48,
    status: "Draft",
  },
  {
    id: "INV-2025-000127",
    company: "Horizon Construct",
    amount: "$300,000.00",
    dueDate: "Jun 28, 2025",
    grade: "B",
    score: 70,
    status: "Verified",
  },
];

export const companyIcons = [
  Factory,
  CircleDollarSign,
  Package,
  Building2,
  Truck,
  Landmark,
];

export const participants: Participant[] = [
  {
    name: "Acme Group (You)",
    role: "SME",
    icon: Building2,
  },
  {
    name: "Prosper Capital",
    role: "Funder",
    icon: Landmark,
  },
  {
    name: "ClearView Audit",
    role: "Auditor",
    icon: ShieldCheck,
  },
];

export const timeline: TimelineItem[] = [
  {
    label: "Invoice created",
    time: "May 28, 2025  10:21 AM",
    state: "done",
  },
  {
    label: "Verified",
    time: "May 28, 2025  11:03 AM",
    state: "done",
  },
  {
    label: "Listed",
    time: "May 28, 2025  11:45 AM",
    state: "done",
  },
  {
    label: "Offer submitted",
    time: "May 28, 2025  01:15 PM",
    state: "current",
  },
  {
    label: "Funded",
    state: "pending",
  },
];

export const visibilityRows: VisibilityRow[] = [
  {
    label: "Invoice details",
    SME: true,
    Funder: true,
    Auditor: true,
  },
  {
    label: "Buyer information",
    SME: true,
    Funder: true,
    Auditor: false,
  },
  {
    label: "Offers",
    SME: true,
    Funder: true,
    Auditor: false,
  },
  {
    label: "Funding terms",
    SME: false,
    Funder: true,
    Auditor: false,
  },
  {
    label: "Audit reports",
    SME: false,
    Funder: false,
    Auditor: true,
  },
];
