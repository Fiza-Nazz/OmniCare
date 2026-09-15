import React from "react";

export interface AminoglycosideHartfordNomogramProps {
  hoursPostInfusion: number;
  randomSerumLevelMcgMl: number;
  nomogramDosingIntervalHours: number;
  nephrotoxicityAudit: string;
  className?: string;
}

export const AminoglycosideHartfordNomogram: React.FC<AminoglycosideHartfordNomogramProps> = ({
  hoursPostInfusion,
  randomSerumLevelMcgMl,
  nomogramDosingIntervalHours,
  nephrotoxicityAudit,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hartford Once-Daily Aminoglycoside</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Hartford Nomogram
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Hours After 7mg/kg Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hoursPostInfusion} Hours`}</strong></div>
        <div className="flex justify-between"><span>Serum Aminoglycoside Level:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${randomSerumLevelMcgMl} µg/mL`}</strong></div>
        <div className="flex justify-between"><span>Hartford Dosing Interval:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`Q${nomogramDosingIntervalHours}H Regimen`}</strong></div>
        <div className="flex justify-between"><span>Audiometry / Renal Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{nephrotoxicityAudit}</strong></div>
      </div>
    </div>
  );
};
