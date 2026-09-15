import React from "react";

export interface PortACathBloodReturnCheckProps {
  needleGaugeFrench: string;
  bloodReturnBrisk: string;
  resistanceOnFlush: string;
  heparinLockInstilled: string;
  className?: string;
}

export const PortACathBloodReturnCheck: React.FC<PortACathBloodReturnCheckProps> = ({
  needleGaugeFrench,
  bloodReturnBrisk,
  resistanceOnFlush,
  heparinLockInstilled,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Port-A-Cath Access & Patency</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Chemo Access
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Huber Non-Coring Needle:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{needleGaugeFrench}</strong></div>
        <div className="flex justify-between"><span>Brisk Venous Blood Return:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bloodReturnBrisk}</strong></div>
        <div className="flex justify-between"><span>Ease of Saline Flush:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{resistanceOnFlush}</strong></div>
        <div className="flex justify-between"><span>Heparinized Lock Concentration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{heparinLockInstilled}</strong></div>
      </div>
    </div>
  );
};
