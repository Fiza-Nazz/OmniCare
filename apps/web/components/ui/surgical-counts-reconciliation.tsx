import React from "react";

export interface SurgicalCountsReconciliationProps {
  spongeCountMatch: string;
  needleSharpCountMatch: string;
  instrumentCountMatch: string;
  xrayRequired: string;
  className?: string;
}

export const SurgicalCountsReconciliation: React.FC<SurgicalCountsReconciliationProps> = ({
  spongeCountMatch,
  needleSharpCountMatch,
  instrumentCountMatch,
  xrayRequired,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Surgical Counts Reconciliation</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Counts Correct
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Laparotomy / Gauze Sponge:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{spongeCountMatch}</strong></div>
        <div className="flex justify-between"><span>Suture Needles & Sharps:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{needleSharpCountMatch}</strong></div>
        <div className="flex justify-between"><span>Retractors & Instruments:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{instrumentCountMatch}</strong></div>
        <div className="flex justify-between"><span>Retained Foreign Object X-ray:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{xrayRequired}</strong></div>
      </div>
    </div>
  );
};
