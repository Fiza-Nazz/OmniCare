import React from "react";

export interface CrrtFilterClottingEarlyWarningProps {
  circuitLifespanHours: number;
  hollowFiberResistanceIncrease: number;
  preFilterChamberClotObserved: string;
  plannedElectiveExchange: string;
  className?: string;
}

export const CrrtFilterClottingEarlyWarning: React.FC<CrrtFilterClottingEarlyWarningProps> = ({
  circuitLifespanHours,
  hollowFiberResistanceIncrease,
  preFilterChamberClotObserved,
  plannedElectiveExchange,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CRRT Circuit Clotting Early Warning</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          CRRT Monitoring
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Circuit Runtime Elapsed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${circuitLifespanHours} Hours`}</strong></div>
        <div className="flex justify-between"><span>Fiber Hydraulic Resistance Spike:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hollowFiberResistanceIncrease}% Rise`}</strong></div>
        <div className="flex justify-between"><span>Venous Drip Chamber Clots:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{preFilterChamberClotObserved}</strong></div>
        <div className="flex justify-between"><span>Elective Return & Changeout:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{plannedElectiveExchange}</strong></div>
      </div>
    </div>
  );
};
