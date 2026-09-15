import React from "react";

export interface CongenitalLongQtSyndromeSchwartzProps {
  bazettQrcIntervalMs: number;
  notchedTWavesThreeLeads: string;
  schwartzRiskScore: number;
  nadololTargetDoseMgKg: number;
  className?: string;
}

export const CongenitalLongQtSyndromeSchwartz: React.FC<CongenitalLongQtSyndromeSchwartzProps> = ({
  bazettQrcIntervalMs,
  notchedTWavesThreeLeads,
  schwartzRiskScore,
  nadololTargetDoseMgKg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Schwartz Congenital Long QT Score</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Channelopathy
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Corrected QTc Interval:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bazettQrcIntervalMs} ms (&gt;480ms risk)`}</strong></div>
        <div className="flex justify-between"><span>T-Wave Morphology Anomalies:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{notchedTWavesThreeLeads}</strong></div>
        <div className="flex justify-between"><span>Composite Schwartz Criteria:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${schwartzRiskScore} / 9 (&ge;3.5 high)`}</strong></div>
        <div className="flex justify-between"><span>Prescribed Nadolol Prophylaxis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${nadololTargetDoseMgKg} mg/kg/day`}</strong></div>
      </div>
    </div>
  );
};
