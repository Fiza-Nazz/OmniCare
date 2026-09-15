import React from "react";

export interface ClinicalDecisionSupportAlertProps {
  cdsHookType: string;
  alertSeverity: string;
  clinicalCardSummary: string;
  overrideReasonRequired: string;
  className?: string;
}

export const ClinicalDecisionSupportAlert: React.FC<ClinicalDecisionSupportAlertProps> = ({
  cdsHookType,
  alertSeverity,
  clinicalCardSummary,
  overrideReasonRequired,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CDS Hook Bedside Decision Alert</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          CDS Hook
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Triggering CDS Hook:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cdsHookType}</strong></div>
        <div className="flex justify-between"><span>Alert Severity Tier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{alertSeverity}</strong></div>
        <div className="flex justify-between"><span>Guideline Recommendation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{clinicalCardSummary}</strong></div>
        <div className="flex justify-between"><span>Structured Override Reason:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{overrideReasonRequired}</strong></div>
      </div>
    </div>
  );
};
