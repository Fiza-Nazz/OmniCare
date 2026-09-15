import React from "react";

export interface DialysisDisequilibriumSyndromeProps {
  baselineBunMgDl: number;
  plannedFirstRunHours: number;
  restrictedQbFlowMlMin: number;
  hypertonicSalineReadiness: string;
  className?: string;
}

export const DialysisDisequilibriumSyndrome: React.FC<DialysisDisequilibriumSyndromeProps> = ({
  baselineBunMgDl,
  plannedFirstRunHours,
  restrictedQbFlowMlMin,
  hypertonicSalineReadiness,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Dialysis Disequilibrium Syndrome (DDS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          First HD Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Pre-Dialysis Initial BUN:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${baselineBunMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>First Run Time Restriction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${plannedFirstRunHours} Hours max`}</strong></div>
        <div className="flex justify-between"><span>Low-Clearance Blood Pump Qb:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${restrictedQbFlowMlMin} mL/min`}</strong></div>
        <div className="flex justify-between"><span>Headache / Neurologic DDS Watch:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hypertonicSalineReadiness}</strong></div>
      </div>
    </div>
  );
};
