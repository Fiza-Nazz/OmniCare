import React from "react";

export interface CarbonMonoxideHboCriteriaProps {
  carboxyhemoglobinPercent: number;
  pregnancyStatus: string;
  lossOfConsciousnessReported: string;
  hboChamberTransferRecommended: string;
  className?: string;
}

export const CarbonMonoxideHboCriteria: React.FC<CarbonMonoxideHboCriteriaProps> = ({
  carboxyhemoglobinPercent,
  pregnancyStatus,
  lossOfConsciousnessReported,
  hboChamberTransferRecommended,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Carbon Monoxide (Hyperbaric O2)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Toxicology Chamber Protocol
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>CO-Hb Fraction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${carboxyhemoglobinPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Pregnancy Confirmed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pregnancyStatus}</strong></div>
        <div className="flex justify-between"><span>Loss of Consciousness / Syncope:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{lossOfConsciousnessReported}</strong></div>
        <div className="flex justify-between"><span>Hyperbaric O2 (HBO) Indicated:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hboChamberTransferRecommended}</strong></div>
      </div>
    </div>
  );
};
