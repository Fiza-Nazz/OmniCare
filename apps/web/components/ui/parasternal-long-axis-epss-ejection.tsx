import React from "react";

export interface ParasternalLongAxisEpssEjectionProps {
  epssDistanceMm: number;
  visualEyeballEfEstimate: string;
  aorticRootDimensionMm: number;
  leftAtrialDilationPresent: string;
  className?: string;
}

export const ParasternalLongAxisEpssEjection: React.FC<ParasternalLongAxisEpssEjectionProps> = ({
  epssDistanceMm,
  visualEyeballEfEstimate,
  aorticRootDimensionMm,
  leftAtrialDilationPresent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cardiac PLAX E-Point Septal Separation</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cardiac PLAX
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>E-Point Septal Separation (EPSS):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${epssDistanceMm} mm (&gt;7mm depressed)`}</strong></div>
        <div className="flex justify-between"><span>Qualitative LV Global Function:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{visualEyeballEfEstimate}</strong></div>
        <div className="flex justify-between"><span>Sinus of Valsalva Root Caliber:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${aorticRootDimensionMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Left Atrial Enlargement:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{leftAtrialDilationPresent}</strong></div>
      </div>
    </div>
  );
};
