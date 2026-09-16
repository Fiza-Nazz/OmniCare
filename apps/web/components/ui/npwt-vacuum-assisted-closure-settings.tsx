import React from "react";

export interface NpwtVacuumAssistedClosureSettingsProps {
  targetNegativePressureMmHg: number;
  therapyModeContinuousOrIntermittent: string;
  canisterOutput24hMl: number;
  airLeakRateAuditPassed: string;
  className?: string;
}

export const NpwtVacuumAssistedClosureSettings: React.FC<NpwtVacuumAssistedClosureSettingsProps> = ({
  targetNegativePressureMmHg,
  therapyModeContinuousOrIntermittent,
  canisterOutput24hMl,
  airLeakRateAuditPassed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Negative Pressure Wound Therapy (NPWT/VAC)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Wound Healing
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Negative Vacuum Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${targetNegativePressureMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Cycle Mode:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{therapyModeContinuousOrIntermittent}</strong></div>
        <div className="flex justify-between"><span>24h Drainage Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${canisterOutput24hMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Airtight Seal Intact:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{airLeakRateAuditPassed}</strong></div>
      </div>
    </div>
  );
};
