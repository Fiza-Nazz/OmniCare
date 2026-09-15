import React from "react";

export type ClaimState = "submitted" | "cleared" | "adjudicated" | "paid" | "denied";

export interface BillingClaimStatusProps {
  claimId: string;
  state: ClaimState;
  billedAmount: number;
  paidAmount?: number;
  className?: string;
}

const stateConfig: Record<ClaimState, { label: string; badge: string }> = {
  submitted: { label: "Submitted", badge: "bg-blue-100 text-blue-800" },
  cleared: { label: "Clearinghouse Passed", badge: "bg-teal-100 text-teal-800" },
  adjudicated: { label: "Adjudicated", badge: "bg-purple-100 text-purple-800" },
  paid: { label: "Paid in Full", badge: "bg-emerald-100 text-emerald-800" },
  denied: { label: "Claim Denied", badge: "bg-rose-100 text-rose-800" },
};

export const BillingClaimStatus: React.FC<BillingClaimStatusProps> = ({
  claimId,
  state,
  billedAmount,
  paidAmount,
  className = "",
}) => {
  const config = stateConfig[state];

  return (
    <div className={`flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div>
        <span className="font-mono font-bold text-slate-700 dark:text-slate-300">Claim #{claimId}</span>
        <p className="text-slate-400 mt-0.5">Billed: ${billedAmount.toFixed(2)} {paidAmount !== undefined && `• Paid: $${paidAmount.toFixed(2)}`}</p>
      </div>
      <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${config.badge}`}>
        {config.label}
      </span>
    </div>
  );
};
