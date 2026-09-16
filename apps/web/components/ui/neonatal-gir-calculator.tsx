import React from "react";

export interface NeonatalGirCalculatorProps {
  dextroseConcentrationPercent: number;
  ivRateMlPerHour: number;
  patientWeightKg: number;
  calculatedGirMgKgMin: number;
  className?: string;
}

export const NeonatalGirCalculator: React.FC<NeonatalGirCalculatorProps> = ({
  dextroseConcentrationPercent,
  ivRateMlPerHour,
  patientWeightKg,
  calculatedGirMgKgMin,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Neonatal Glucose Infusion Rate (GIR)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neonatal Metabolic
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Dextrose Concentration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${dextroseConcentrationPercent}%`}</strong></div>
        <div className="flex justify-between"><span>IV Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${ivRateMlPerHour} mL/hr`}</strong></div>
        <div className="flex justify-between"><span>Weight:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${patientWeightKg} kg`}</strong></div>
        <div className="flex justify-between"><span>Calculated GIR:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedGirMgKgMin} mg/kg/min`}</strong></div>
      </div>
    </div>
  );
};
