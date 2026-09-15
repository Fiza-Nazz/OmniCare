import React from "react";

export interface PulmonaryEmbolismPesiScoreProps {
  pesiScore: number;
  riskClass: string;
  thirtyDayMortalityRisk: string;
  outpatientEligible: string;
  className?: string;
}

export const PulmonaryEmbolismPesiScore: React.FC<PulmonaryEmbolismPesiScoreProps> = ({
  pesiScore,
  riskClass,
  thirtyDayMortalityRisk,
  outpatientEligible,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">PESI Pulmonary Embolism Severity</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          PE Stratification
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Total PESI Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pesiScore} Points`}</strong></div>
        <div className="flex justify-between"><span>Clinical Risk Class:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{riskClass}</strong></div>
        <div className="flex justify-between"><span>30-Day Mortality Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{thirtyDayMortalityRisk}</strong></div>
        <div className="flex justify-between"><span>Hestia Outpatient Candidate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{outpatientEligible}</strong></div>
      </div>
    </div>
  );
};
