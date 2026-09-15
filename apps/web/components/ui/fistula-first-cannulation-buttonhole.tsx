import React from "react";

export interface FistulaFirstCannulationButtonholeProps {
  cannulationMethod: string;
  arterialNeedleGauge: string;
  venousNeedleGauge: string;
  postDialysisBleedingMin: number;
  className?: string;
}

export const FistulaFirstCannulationButtonhole: React.FC<FistulaFirstCannulationButtonholeProps> = ({
  cannulationMethod,
  arterialNeedleGauge,
  venousNeedleGauge,
  postDialysisBleedingMin,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">AV Fistula Cannulation Technique</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Dialysis Access
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Vascular Cannulation Track:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cannulationMethod}</strong></div>
        <div className="flex justify-between"><span>Arterial Needle Caliber:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{arterialNeedleGauge}</strong></div>
        <div className="flex justify-between"><span>Venous Needle Caliber:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{venousNeedleGauge}</strong></div>
        <div className="flex justify-between"><span>Post-Decannulation Bleed Time:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${postDialysisBleedingMin} min (&lt;20m)`}</strong></div>
      </div>
    </div>
  );
};
