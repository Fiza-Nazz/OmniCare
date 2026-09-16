import React from "react";

export interface LrinecScoreNecrotizingFasciitisProps {
  lrinecCalculatedScore: number;
  highProbabilityThresholdMet: string;
  subcutaneousGasOnCtXray: string;
  emergentSurgicalDebridementOrdered: string;
  className?: string;
}

export const LrinecScoreNecrotizingFasciitis: React.FC<LrinecScoreNecrotizingFasciitisProps> = ({
  lrinecCalculatedScore,
  highProbabilityThresholdMet,
  subcutaneousGasOnCtXray,
  emergentSurgicalDebridementOrdered,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Necrotizing Soft Tissue Infection (LRINEC)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Emergency Surgery
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>LRINEC Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lrinecCalculatedScore} / 13`}</strong></div>
        <div className="flex justify-between"><span>High Risk (Score >= 6):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{highProbabilityThresholdMet}</strong></div>
        <div className="flex justify-between"><span>Subcutaneous Gas / Crepitus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{subcutaneousGasOnCtXray}</strong></div>
        <div className="flex justify-between"><span>Emergent Operative Debridement:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{emergentSurgicalDebridementOrdered}</strong></div>
      </div>
    </div>
  );
};
