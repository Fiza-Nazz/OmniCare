import React from "react";

export interface HivOccupationalPepStarterKitProps {
  hoursSinceSharpsInjury: number;
  sourcePatientHivStatus: string;
  pepStarterPackDispensed: string;
  baselineHivHcvHpvLabs: string;
  className?: string;
}

export const HivOccupationalPepStarterKit: React.FC<HivOccupationalPepStarterKitProps> = ({
  hoursSinceSharpsInjury,
  sourcePatientHivStatus,
  pepStarterPackDispensed,
  baselineHivHcvHpvLabs,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Occupational HIV PEP Starter Pack</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Occupational Health
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Time Post-Needlestick:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hoursSinceSharpsInjury} Hours (&lt;72h window)`}</strong></div>
        <div className="flex justify-between"><span>Source Patient Rapid Screen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sourcePatientHivStatus}</strong></div>
        <div className="flex justify-between"><span>3-Drug 28-Day Regimen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pepStarterPackDispensed}</strong></div>
        <div className="flex justify-between"><span>Baseline Serology Panel:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{baselineHivHcvHpvLabs}</strong></div>
      </div>
    </div>
  );
};
