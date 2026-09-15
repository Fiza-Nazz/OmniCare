import React from "react";

export interface RenalTransplantDelayedGraftProps {
  dialysisRequiredWeek1: string;
  resistiveIndexDoppler: number;
  tacrolimusTroughNgMl: number;
  allograftBiopsyScheduled: string;
  className?: string;
}

export const RenalTransplantDelayedGraft: React.FC<RenalTransplantDelayedGraftProps> = ({
  dialysisRequiredWeek1,
  resistiveIndexDoppler,
  tacrolimusTroughNgMl,
  allograftBiopsyScheduled,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Delayed Graft Function (DGF)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Transplant Kidney
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>First-Week Hemodialysis (DGF):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dialysisRequiredWeek1}</strong></div>
        <div className="flex justify-between"><span>Allograft Resistive Index (RI):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${resistiveIndexDoppler} (&lt;0.70 normal)`}</strong></div>
        <div className="flex justify-between"><span>Calcineurin Inhibitor Trough:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${tacrolimusTroughNgMl} ng/mL`}</strong></div>
        <div className="flex justify-between"><span>Transplant Protocol Biopsy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{allograftBiopsyScheduled}</strong></div>
      </div>
    </div>
  );
};
