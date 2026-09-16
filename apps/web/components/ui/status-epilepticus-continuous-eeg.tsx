import React from "react";

export interface StatusEpilepticusContinuousEegProps {
  electrographicSeizuresPerHour: number;
  burstSuppressionRatioPercent: number;
  anestheticInfusionTitration: string;
  rhythmicPeriodicDischarges: string;
  className?: string;
}

export const StatusEpilepticusContinuousEeg: React.FC<StatusEpilepticusContinuousEegProps> = ({
  electrographicSeizuresPerHour,
  burstSuppressionRatioPercent,
  anestheticInfusionTitration,
  rhythmicPeriodicDischarges,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Continuous cEEG Status Epilepticus</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          ICU cEEG
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Subclinical Seizure Frequency:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${electrographicSeizuresPerHour} / Hour`}</strong></div>
        <div className="flex justify-between"><span>Target Burst Suppression (BSR):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${burstSuppressionRatioPercent}% (Goal 80-90%)`}</strong></div>
        <div className="flex justify-between"><span>Continuous Midazolam/Propofol:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{anestheticInfusionTitration}</strong></div>
        <div className="flex justify-between"><span>LPDs / GPDs Periodic Waveforms:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{rhythmicPeriodicDischarges}</strong></div>
      </div>
    </div>
  );
};
