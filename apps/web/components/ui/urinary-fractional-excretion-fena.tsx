import React from "react";

export interface UrinaryFractionalExcretionFenaProps {
  fractionalExcretionNaPercent: number;
  fractionalExcretionUreaPercent: number;
  diureticTherapyActive: string;
  diagnosticEtiology: string;
  className?: string;
}

export const UrinaryFractionalExcretionFena: React.FC<UrinaryFractionalExcretionFenaProps> = ({
  fractionalExcretionNaPercent,
  fractionalExcretionUreaPercent,
  diureticTherapyActive,
  diagnosticEtiology,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Fractional Excretion of Sodium (FeNa)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          AKI Differential
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Calculated FeNa Fraction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${fractionalExcretionNaPercent}% (&lt;1% prerenal)`}</strong></div>
        <div className="flex justify-between"><span>Calculated FeUrea (Post-Diuretic):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${fractionalExcretionUreaPercent}% (&lt;35% prerenal)`}</strong></div>
        <div className="flex justify-between"><span>Concurrent Loop Diuretic:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{diureticTherapyActive}</strong></div>
        <div className="flex justify-between"><span>Probable Renal Insult:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{diagnosticEtiology}</strong></div>
      </div>
    </div>
  );
};
