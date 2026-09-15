import React from "react";

export interface VasopressorInfusionTitrationProps {
  agentName: string;
  currentDose: string;
  targetMapMmHg: number;
  currentMapMmHg: number;
  className?: string;
}

export const VasopressorInfusionTitration: React.FC<VasopressorInfusionTitrationProps> = ({
  agentName,
  currentDose,
  targetMapMmHg,
  currentMapMmHg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Vasopressor Titration Goal</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Hemodynamic Goal
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Active Vasopressor:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{agentName}</strong></div>
        <div className="flex justify-between"><span>Current Infusion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{currentDose}</strong></div>
        <div className="flex justify-between"><span>Target MAP:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${targetMapMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Current Patient MAP:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${currentMapMmHg} mmHg`}</strong></div>
      </div>
    </div>
  );
};
