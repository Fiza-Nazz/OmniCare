import React from "react";

export interface ToxicologyUrineScreenConfirmatoryProps {
  immunoassayResult: string;
  crossReactingFalsePositive: string;
  gcMsConfirmatoryStatus: string;
  clinicalDisposition: string;
  className?: string;
}

export const ToxicologyUrineScreenConfirmatory: React.FC<ToxicologyUrineScreenConfirmatoryProps> = ({
  immunoassayResult,
  crossReactingFalsePositive,
  gcMsConfirmatoryStatus,
  clinicalDisposition,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Toxicology Screen & Confirmatory Assay</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Tox Laboratory
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Rapid Immunoassay Panel:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{immunoassayResult}</strong></div>
        <div className="flex justify-between"><span>Potential False Positive Cause:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{crossReactingFalsePositive}</strong></div>
        <div className="flex justify-between"><span>GC-MS / LC-MS Confirmation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{gcMsConfirmatoryStatus}</strong></div>
        <div className="flex justify-between"><span>Clinical Action Decision:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{clinicalDisposition}</strong></div>
      </div>
    </div>
  );
};
