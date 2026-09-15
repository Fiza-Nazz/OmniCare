import React from "react";

export interface PriorAuthorizationX12278Props {
  payerAuthorizationId: string;
  serviceRequestedCode: string;
  authorizationStatus: string;
  turnaroundDeadlineHours: number;
  className?: string;
}

export const PriorAuthorizationX12278: React.FC<PriorAuthorizationX12278Props> = ({
  payerAuthorizationId,
  serviceRequestedCode,
  authorizationStatus,
  turnaroundDeadlineHours,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Electronic Prior Authorization (EDI 278)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Revenue Cycle
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Payer Tracking ID:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{payerAuthorizationId}</strong></div>
        <div className="flex justify-between"><span>Requested CPT / HCPCS:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{serviceRequestedCode}</strong></div>
        <div className="flex justify-between"><span>Payer Adjudication Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{authorizationStatus}</strong></div>
        <div className="flex justify-between"><span>Statutory Turnaround Window:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${turnaroundDeadlineHours} Hours`}</strong></div>
      </div>
    </div>
  );
};
