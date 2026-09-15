import React from "react";

export interface AkiKdigoStagingUrineOutputProps {
  kdigoStage: string;
  creatinineFoldIncrease: number;
  urineOutputMlKgHr: number;
  oliguriaDurationHours: number;
  className?: string;
}

export const AkiKdigoStagingUrineOutput: React.FC<AkiKdigoStagingUrineOutputProps> = ({
  kdigoStage,
  creatinineFoldIncrease,
  urineOutputMlKgHr,
  oliguriaDurationHours,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">KDIGO Acute Kidney Injury Staging</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Nephrology AKI
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Assigned KDIGO Stage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{kdigoStage}</strong></div>
        <div className="flex justify-between"><span>Baseline Creatinine Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${creatinineFoldIncrease}x Baseline`}</strong></div>
        <div className="flex justify-between"><span>Urine Volume Metric:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${urineOutputMlKgHr} mL/kg/hr`}</strong></div>
        <div className="flex justify-between"><span>Duration of Oliguria:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${oliguriaDurationHours} Hours`}</strong></div>
      </div>
    </div>
  );
};
