import React from "react";

export interface MethemoglobinemiaMethyleneBlueProps {
  methemoglobinPercent: number;
  coOximetrySpo2Discrepancy: string;
  g6pdDeficiencyScreened: string;
  methyleneBlueDoseMgKg: number;
  className?: string;
}

export const MethemoglobinemiaMethyleneBlue: React.FC<MethemoglobinemiaMethyleneBlueProps> = ({
  methemoglobinPercent,
  coOximetrySpo2Discrepancy,
  g6pdDeficiencyScreened,
  methyleneBlueDoseMgKg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Methemoglobinemia (Methylene Blue)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Hematology Toxicology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Methemoglobin Fraction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${methemoglobinPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Oxygen Saturation Gap:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{coOximetrySpo2Discrepancy}</strong></div>
        <div className="flex justify-between"><span>G6PD Deficiency Excluded:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{g6pdDeficiencyScreened}</strong></div>
        <div className="flex justify-between"><span>Methylene Blue (1%):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${methyleneBlueDoseMgKg} mg/kg IV`}</strong></div>
      </div>
    </div>
  );
};
