import React from "react";

export interface RevenueCycleDenialAppealProps {
  deniedClaimNumber: string;
  carcReasonCode: string;
  deniedAmountDollars: number;
  appealSubmissionDeadline: string;
  className?: string;
}

export const RevenueCycleDenialAppeal: React.FC<RevenueCycleDenialAppealProps> = ({
  deniedClaimNumber,
  carcReasonCode,
  deniedAmountDollars,
  appealSubmissionDeadline,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Claims Denial & CARC Root Cause</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Billing Appeals
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Hospital Claim Number:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{deniedClaimNumber}</strong></div>
        <div className="flex justify-between"><span>CARC Denial Reason Code:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{carcReasonCode}</strong></div>
        <div className="flex justify-between"><span>Denied Remittance Sum:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`$${deniedAmountDollars}`}</strong></div>
        <div className="flex justify-between"><span>Appeals Filing Deadline:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{appealSubmissionDeadline}</strong></div>
      </div>
    </div>
  );
};
