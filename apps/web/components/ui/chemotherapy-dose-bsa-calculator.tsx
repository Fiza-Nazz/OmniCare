import React from "react";

export interface ChemotherapyDoseBsaCalculatorProps {
  heightCm: number;
  weightKg: number;
  calculatedBsaM2: number;
  cappedDoseWarning: string;
  className?: string;
}

export const ChemotherapyDoseBsaCalculator: React.FC<ChemotherapyDoseBsaCalculatorProps> = ({
  heightCm,
  weightKg,
  calculatedBsaM2,
  cappedDoseWarning,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Mosteller BSA Chemo Dosing</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Chemo Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Stature Height:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${heightCm} cm`}</strong></div>
        <div className="flex justify-between"><span>Actual Body Weight:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${weightKg} kg`}</strong></div>
        <div className="flex justify-between"><span>Body Surface Area (BSA):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedBsaM2} m²`}</strong></div>
        <div className="flex justify-between"><span>Safety Dose Capping:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cappedDoseWarning}</strong></div>
      </div>
    </div>
  );
};
