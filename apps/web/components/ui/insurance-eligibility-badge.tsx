import React from "react";

export type EligibilityStatus = "active" | "inactive" | "pending" | "suspended";

export interface InsuranceEligibilityBadgeProps {
  status: EligibilityStatus;
  payerName?: string;
  copay?: string;
  className?: string;
}

const statusConfig: Record<EligibilityStatus, { bg: string; text: string; label: string }> = {
  active: { bg: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300", label: "Active Coverage" },
  inactive: { bg: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950 dark:text-rose-300", label: "Inactive Policy" },
  pending: { bg: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300", label: "Verification Pending" },
  suspended: { bg: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300", label: "Suspended" },
};

export const InsuranceEligibilityBadge: React.FC<InsuranceEligibilityBadgeProps> = ({
  status,
  payerName,
  copay,
  className = "",
}) => {
  const config = statusConfig[status];

  return (
    <div className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-xs font-semibold ${config.bg} ${className}`}>
      <span>{payerName ? `${payerName} - ` : ""}{config.label}</span>
      {copay && <span className="opacity-75 font-mono">• Copay: {copay}</span>}
    </div>
  );
};
