import React from "react";

export interface ArterialCannulationSiteCheckProps {
  insertionSite: string;
  distalPulseStatus: string;
  capillaryRefill: string;
  hematomaStatus: string;
  className?: string;
}

export const ArterialCannulationSiteCheck: React.FC<ArterialCannulationSiteCheckProps> = ({
  insertionSite,
  distalPulseStatus,
  capillaryRefill,
  hematomaStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">A-Line Perfusion Check</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Perfusion Check
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Insertion Site:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{insertionSite}</strong></div>
        <div className="flex justify-between"><span>Distal Pulse:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{distalPulseStatus}</strong></div>
        <div className="flex justify-between"><span>Capillary Refill:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{capillaryRefill}</strong></div>
        <div className="flex justify-between"><span>Site Hematoma:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hematomaStatus}</strong></div>
      </div>
    </div>
  );
};
