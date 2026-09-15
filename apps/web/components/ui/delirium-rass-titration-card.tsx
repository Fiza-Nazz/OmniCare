import React from "react";

export interface DeliriumRassTitrationCardProps {
  currentRass: number;
  targetRass: number;
  sedativeAgent: string;
  agitationStatus: string;
  className?: string;
}

export const DeliriumRassTitrationCard: React.FC<DeliriumRassTitrationCardProps> = ({
  currentRass,
  targetRass,
  sedativeAgent,
  agitationStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">RASS Sedation Titration</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Sedation Target
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Current RASS:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${currentRass > 0 ? '+' : ''}${currentRass}`}</strong></div>
        <div className="flex justify-between"><span>Target Goal:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${targetRass > 0 ? '+' : ''}${targetRass}`}</strong></div>
        <div className="flex justify-between"><span>Infused Sedative:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sedativeAgent}</strong></div>
        <div className="flex justify-between"><span>Behavior State:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{agitationStatus}</strong></div>
      </div>
    </div>
  );
};
