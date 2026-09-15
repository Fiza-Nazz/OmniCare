import React from "react";

export interface MedicationReconciliationDiscrepancyProps {
  discrepancyType: string;
  medicationName: string;
  clinicalSignificanceSeverity: string;
  pharmacistInterventionStatus: string;
  className?: string;
}

export const MedicationReconciliationDiscrepancy: React.FC<MedicationReconciliationDiscrepancyProps> = ({
  discrepancyType,
  medicationName,
  clinicalSignificanceSeverity,
  pharmacistInterventionStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Medication Reconciliation Discrepancy</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Med Rec Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Discrepancy Category:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{discrepancyType}</strong></div>
        <div className="flex justify-between"><span>Flagged Drug Name:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{medicationName}</strong></div>
        <div className="flex justify-between"><span>Potential Harm Severity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{clinicalSignificanceSeverity}</strong></div>
        <div className="flex justify-between"><span>Pharmacy Resolution:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pharmacistInterventionStatus}</strong></div>
      </div>
    </div>
  );
};
