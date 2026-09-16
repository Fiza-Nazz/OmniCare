import React from "react";

export interface CerebralVenousSinusThrombosisProps {
  occludedDuralSinus: string;
  emptyDeltaSignPresent: string;
  venousInfarctHemorrhage: string;
  therapeuticLmwHeparinStarted: string;
  className?: string;
}

export const CerebralVenousSinusThrombosis: React.FC<CerebralVenousSinusThrombosisProps> = ({
  occludedDuralSinus,
  emptyDeltaSignPresent,
  venousInfarctHemorrhage,
  therapeuticLmwHeparinStarted,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cerebral Venous Thrombosis (CVST)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Venous Stroke
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Thrombosed Dural Sinus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{occludedDuralSinus}</strong></div>
        <div className="flex justify-between"><span>Contrast 'Empty Delta' Sign:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{emptyDeltaSignPresent}</strong></div>
        <div className="flex justify-between"><span>Secondary Venous Infarction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{venousInfarctHemorrhage}</strong></div>
        <div className="flex justify-between"><span>Full-Dose Heparin Anticoagulation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{therapeuticLmwHeparinStarted}</strong></div>
      </div>
    </div>
  );
};
