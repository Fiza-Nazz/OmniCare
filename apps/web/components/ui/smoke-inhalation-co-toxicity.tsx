import React from "react";

export interface SmokeInhalationCoToxicityProps {
  carboxyhemoglobinPercent: number;
  serumLactateMmolPerL: number;
  arterialOxygenPaO2MmHg: number;
  hydroxocobalaminAdministered: string;
  className?: string;
}

export const SmokeInhalationCoToxicity: React.FC<SmokeInhalationCoToxicityProps> = ({
  carboxyhemoglobinPercent,
  serumLactateMmolPerL,
  arterialOxygenPaO2MmHg,
  hydroxocobalaminAdministered,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Smoke Inhalation Dual Toxicity (CO/CN)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Trauma Toxicology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>CO-Hb Fraction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${carboxyhemoglobinPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Serum Lactate (CN surrogate):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumLactateMmolPerL} mmol/L`}</strong></div>
        <div className="flex justify-between"><span>Arterial PaO2 (on 100% O2):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${arterialOxygenPaO2MmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Cyanokit Infused:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hydroxocobalaminAdministered}</strong></div>
      </div>
    </div>
  );
};
