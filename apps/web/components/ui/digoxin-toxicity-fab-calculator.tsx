import React from "react";

export interface DigoxinToxicityFabCalculatorProps {
  serumDigoxinNgMl: number;
  patientWeightKg: number;
  calculatedFabVialsRequired: number;
  hyperkalemiaStatus: string;
  className?: string;
}

export const DigoxinToxicityFabCalculator: React.FC<DigoxinToxicityFabCalculatorProps> = ({
  serumDigoxinNgMl,
  patientWeightKg,
  calculatedFabVialsRequired,
  hyperkalemiaStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Digoxin Toxicity (DigiFab Vials)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cardiovascular Antidote
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum Digoxin Level:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumDigoxinNgMl} ng/mL`}</strong></div>
        <div className="flex justify-between"><span>Body Weight:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${patientWeightKg} kg`}</strong></div>
        <div className="flex justify-between"><span>DigiFab Vials Needed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedFabVialsRequired} vials`}</strong></div>
        <div className="flex justify-between"><span>Serum Potassium:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hyperkalemiaStatus}</strong></div>
      </div>
    </div>
  );
};
