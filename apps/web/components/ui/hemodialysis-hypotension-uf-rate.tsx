import React from "react";

export interface HemodialysisHypotensionUfRateProps {
  prescribedUfRateMlKgHr: number;
  safeCeilingThreshold: number;
  trendelenburgRequired: string;
  midodrinePremedication: string;
  className?: string;
}

export const HemodialysisHypotensionUfRate: React.FC<HemodialysisHypotensionUfRateProps> = ({
  prescribedUfRateMlKgHr,
  safeCeilingThreshold,
  trendelenburgRequired,
  midodrinePremedication,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Intradialytic Ultrafiltration Rate</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Dialysis Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Calculated UF Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${prescribedUfRateMlKgHr} mL/kg/hr`}</strong></div>
        <div className="flex justify-between"><span>Myocardial Safe Limit:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${safeCeilingThreshold} mL/kg/hr max`}</strong></div>
        <div className="flex justify-between"><span>Intradialytic Trendelenburg Rescue:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{trendelenburgRequired}</strong></div>
        <div className="flex justify-between"><span>Midodrine Alpha-1 Premed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{midodrinePremedication}</strong></div>
      </div>
    </div>
  );
};
