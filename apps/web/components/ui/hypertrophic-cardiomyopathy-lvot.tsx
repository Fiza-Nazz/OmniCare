import React from "react";

export interface HypertrophicCardiomyopathyLvotProps {
  septalThicknessMm: number;
  restingLvotGradientMmHg: number;
  provokedValsalvaGradient: number;
  samMitralValve: string;
  className?: string;
}

export const HypertrophicCardiomyopathyLvot: React.FC<HypertrophicCardiomyopathyLvotProps> = ({
  septalThicknessMm,
  restingLvotGradientMmHg,
  provokedValsalvaGradient,
  samMitralValve,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">HCM Outflow Tract Obstruction</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cardiomyopathy
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Max Septal Thickness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${septalThicknessMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Resting LVOT Gradient:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${restingLvotGradientMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Valsalva Provoked Peak:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${provokedValsalvaGradient} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Systolic Anterior Motion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{samMitralValve}</strong></div>
      </div>
    </div>
  );
};
