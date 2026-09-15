import React from "react";

export interface SubcutaneousIcdShockHistoryProps {
  sensingVector: string;
  cumulativeShocks: number;
  appropriateShockCount: number;
  leadImpedanceOhms: number;
  className?: string;
}

export const SubcutaneousIcdShockHistory: React.FC<SubcutaneousIcdShockHistoryProps> = ({
  sensingVector,
  cumulativeShocks,
  appropriateShockCount,
  leadImpedanceOhms,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Subcutaneous ICD Event Log</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Defibrillator
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Selected Sensing Vector:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sensingVector}</strong></div>
        <div className="flex justify-between"><span>Lifetime Shocks Delivered:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cumulativeShocks}`}</strong></div>
        <div className="flex justify-between"><span>True Arrhythmic Terminations:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${appropriateShockCount}`}</strong></div>
        <div className="flex justify-between"><span>Subcutaneous Impedance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${leadImpedanceOhms} Ω`}</strong></div>
      </div>
    </div>
  );
};
