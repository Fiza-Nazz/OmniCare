import React from "react";

export interface IntermittentHemodialysisRunSummaryProps {
  preDialysisWeightKg: number;
  postDialysisWeightKg: number;
  netUfRemovedLiters: number;
  crampingHypotensionIncidents: string;
  className?: string;
}

export const IntermittentHemodialysisRunSummary: React.FC<IntermittentHemodialysisRunSummaryProps> = ({
  preDialysisWeightKg,
  postDialysisWeightKg,
  netUfRemovedLiters,
  crampingHypotensionIncidents,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hemodialysis Session Run Summary</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Dialysis Run
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Pre-Session Scale Weight:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${preDialysisWeightKg} kg`}</strong></div>
        <div className="flex justify-between"><span>Post-Session Scale Weight:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${postDialysisWeightKg} kg`}</strong></div>
        <div className="flex justify-between"><span>Total Ultrafiltration Removed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${netUfRemovedLiters} L`}</strong></div>
        <div className="flex justify-between"><span>Intradialytic Hemodynamic Events:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{crampingHypotensionIncidents}</strong></div>
      </div>
    </div>
  );
};
