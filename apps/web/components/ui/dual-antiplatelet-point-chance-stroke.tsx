import React from "react";

export interface DualAntiplateletPointChanceStrokeProps {
  initialNihssScore: number;
  abcd2TiaRiskScore: number;
  dualAntiplateletPrescribed: string;
  twentyOneDayDiscontinuationPlanned: string;
  className?: string;
}

export const DualAntiplateletPointChanceStroke: React.FC<DualAntiplateletPointChanceStrokeProps> = ({
  initialNihssScore,
  abcd2TiaRiskScore,
  dualAntiplateletPrescribed,
  twentyOneDayDiscontinuationPlanned,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">POINT / CHANCE Minor Stroke DAPT</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Secondary Prevention
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Presenting NIHSS Severity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${initialNihssScore} (&le;3 minor)`}</strong></div>
        <div className="flex justify-between"><span>ABCD2 TIA Prognostic Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${abcd2TiaRiskScore} / 7 (&ge;4 high risk)`}</strong></div>
        <div className="flex justify-between"><span>Aspirin + Clopidogrel (DAPT):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dualAntiplateletPrescribed}</strong></div>
        <div className="flex justify-between"><span>21-Day Clopidogrel Stop Plan:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{twentyOneDayDiscontinuationPlanned}</strong></div>
      </div>
    </div>
  );
};
