import React from "react";

export interface TargetedTemperatureManagementProps {
  currentTempC: number;
  targetTempC: number;
  coolingPhase: string;
  shiveringScore: number;
  className?: string;
}

export const TargetedTemperatureManagement: React.FC<TargetedTemperatureManagementProps> = ({
  currentTempC,
  targetTempC,
  coolingPhase,
  shiveringScore,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Targeted Temperature Management</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neuroprotection
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Core Temperature:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${currentTempC} °C`}</strong></div>
        <div className="flex justify-between"><span>Target Goal:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${targetTempC} °C`}</strong></div>
        <div className="flex justify-between"><span>Protocol Phase:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{coolingPhase}</strong></div>
        <div className="flex justify-between"><span>BSAS Shiver Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${shiveringScore} / 3`}</strong></div>
      </div>
    </div>
  );
};
