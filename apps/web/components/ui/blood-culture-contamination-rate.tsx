import React from "react";

export interface BloodCultureContaminationRateProps {
  positiveBottleSets: string;
  identifiedOrganism: string;
  timeToPositivityHours: number;
  trueBacteremiaVsContaminant: string;
  className?: string;
}

export const BloodCultureContaminationRate: React.FC<BloodCultureContaminationRateProps> = ({
  positiveBottleSets,
  identifiedOrganism,
  timeToPositivityHours,
  trueBacteremiaVsContaminant,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Blood Culture Contamination Check</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Microbiology Quality
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Positive Culture Growth:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{positiveBottleSets}</strong></div>
        <div className="flex justify-between"><span>Isolate Species:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{identifiedOrganism}</strong></div>
        <div className="flex justify-between"><span>Time to Bottle Positivity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${timeToPositivityHours} Hours`}</strong></div>
        <div className="flex justify-between"><span>Clinical Interpretation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{trueBacteremiaVsContaminant}</strong></div>
      </div>
    </div>
  );
};
