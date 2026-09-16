import React from "react";

export interface ScortenTenMortalityRiskProps {
  scortenTotalPoints: number;
  predictedMortalityPercent: number;
  skinDetachmentTbsaPercent: number;
  ivigCyclosporineInitiated: string;
  className?: string;
}

export const ScortenTenMortalityRisk: React.FC<ScortenTenMortalityRiskProps> = ({
  scortenTotalPoints,
  predictedMortalityPercent,
  skinDetachmentTbsaPercent,
  ivigCyclosporineInitiated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">SCORTEN (Toxic Epidermal Necrolysis)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Dermatology Critical Care
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>SCORTEN Total Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${scortenTotalPoints} / 7`}</strong></div>
        <div className="flex justify-between"><span>Predicted Mortality:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${predictedMortalityPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Epidermal Detachment:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${skinDetachmentTbsaPercent}% TBSA`}</strong></div>
        <div className="flex justify-between"><span>Immunomodulatory Treatment:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ivigCyclosporineInitiated}</strong></div>
      </div>
    </div>
  );
};
