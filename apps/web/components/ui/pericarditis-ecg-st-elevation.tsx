import React from "react";

export interface PericarditisEcgStElevationProps {
  diffuseStElevation: string;
  prSegmentDepression: string;
  pericardialFrictionRub: string;
  crpMgL: number;
  className?: string;
}

export const PericarditisEcgStElevation: React.FC<PericarditisEcgStElevationProps> = ({
  diffuseStElevation,
  prSegmentDepression,
  pericardialFrictionRub,
  crpMgL,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Acute Pericarditis ECG Criteria</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pericarditis
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Diffuse Concave ST Segment:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{diffuseStElevation}</strong></div>
        <div className="flex justify-between"><span>PR Segment Inversion (aVR):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{prSegmentDepression}</strong></div>
        <div className="flex justify-between"><span>Audible Friction Rub:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pericardialFrictionRub}</strong></div>
        <div className="flex justify-between"><span>C-Reactive Protein (CRP):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${crpMgL} mg/L`}</strong></div>
      </div>
    </div>
  );
};
