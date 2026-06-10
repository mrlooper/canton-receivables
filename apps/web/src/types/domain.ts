import type { LucideIcon } from "lucide-react";

export type Role = "SME" | "Funder" | "Auditor";

export type InvoiceStatus =
  | "Listed"
  | "Offer Submitted"
  | "Verified"
  | "Draft";

export type RiskGrade = "A" | "B" | "C";

export type Invoice = {
  id: string;
  company: string;
  amount: string;
  dueDate: string;
  grade: RiskGrade;
  score: number;
  status: InvoiceStatus;
};

export type Metric = {
  label: string;
  value: string;
  detail: string;
  tone?: "success" | "neutral";
};

export type Participant = {
  name: string;
  role: Role;
  icon: LucideIcon;
};

export type TimelineItem = {
  label: string;
  time?: string;
  state: "done" | "current" | "pending";
};

export type VisibilityRow = {
  label: string;
  SME: boolean;
  Funder: boolean;
  Auditor: boolean;
};
