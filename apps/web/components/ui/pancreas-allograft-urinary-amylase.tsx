import React from "react";

export interface PancreasAllograftUrinaryAmylaseProps {
  baselineUrinaryAmylaseUnitsL: number;
  currentUrinaryAmylaseUnitsL: number;
  percentDropUrinaryAmylase: number;
  acuteAllograftRejectionSuspected: string;
  className?: string;
}

export const PancreasAllograftUrinaryAmylase: React.FC<PancreasAllograftUrinaryAmylaseProps> = ({
  baselineUrinaryAmylaseUnitsL,
  currentUrinaryAmylaseUnitsL,
  percentDropUrinaryAmylase,
  acuteAllograftRejectionSuspected,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Bladder-Drained Pancreas Allograft</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pancreas Transplant
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Baseline 24h Urinary Amylase:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${baselineUrinaryAmylaseUnitsL} U/L`}</strong></div>
        <div className="flex justify-between"><span>Current Spot Urinary Amylase:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${currentUrinaryAmylaseUnitsL} U/L`}</strong></div>
        <div className="flex justify-between"><span>Exocrine Clearance Drop:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${percentDropUrinaryAmylase}% Decline (&gt;50% alert)`}</strong></div>
        <div className="flex justify-between"><span>Pancreas Biopsy Indication:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{acuteAllograftRejectionSuspected}</strong></div>
      </div>
    </div>
  );
};
