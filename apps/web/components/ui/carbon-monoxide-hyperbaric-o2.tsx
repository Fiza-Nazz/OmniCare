import React from "react";

export interface CarbonMonoxideHyperbaricO2Props {
  cohbLevelPercent: number;
  lossOfConsciousness: string;
  pregnancyStatus: string;
  hbo2ChamberCandidate: string;
  className?: string;
}

export const CarbonMonoxideHyperbaricO2: React.FC<CarbonMonoxideHyperbaricO2Props> = ({
  cohbLevelPercent,
  lossOfConsciousness,
  pregnancyStatus,
  hbo2ChamberCandidate,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Carbon Monoxide Hyperbaric Oxygen</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Toxic Gas
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Carboxyhemoglobin Level:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cohbLevelPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Syncope / Neurologic Event:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{lossOfConsciousness}</strong></div>
        <div className="flex justify-between"><span>Pregnancy Consideration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pregnancyStatus}</strong></div>
        <div className="flex justify-between"><span>Hyperbaric Chamber (HBO2):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hbo2ChamberCandidate}</strong></div>
      </div>
    </div>
  );
};
