import React from "react";

export interface DialysisSessionSummaryProps {
  preWeightKg: number;
  postWeightKg: number;
  ufRemovedLiters: number;
  durationMinutes: number;
  bloodFlowQb: number;
  dialysateFlowQd: number;
  className?: string;
}

export const DialysisSessionSummary: React.FC<DialysisSessionSummaryProps> = ({
  preWeightKg,
  postWeightKg,
  ufRemovedLiters,
  durationMinutes,
  bloodFlowQb,
  dialysateFlowQd,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Hemodialysis Run Summary</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-500">UF Removed</span>
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400">{ufRemovedLiters} L</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-500">Weight Delta</span>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{(preWeightKg - postWeightKg).toFixed(1)} kg</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-500">Blood Flow (Qb)</span>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{bloodFlowQb} mL/min</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-500">Duration</span>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{Math.floor(durationMinutes / 60)}h {durationMinutes % 60}m</p>
        </div>
      </div>
    </div>
  );
};
