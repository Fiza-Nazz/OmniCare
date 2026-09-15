import React from "react";

export interface NeonatalApneaBradycardiaEventProps {
  apneaSeconds: number;
  lowestHeartRate: number;
  lowestSpo2: number;
  stimulationRequired: string;
  className?: string;
}

export const NeonatalApneaBradycardiaEvent: React.FC<NeonatalApneaBradycardiaEventProps> = ({
  apneaSeconds,
  lowestHeartRate,
  lowestSpo2,
  stimulationRequired,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Apnea & Bradycardia Event (A/B)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          NICU Event Log
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Apnea Duration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${apneaSeconds} Seconds`}</strong></div>
        <div className="flex justify-between"><span>Bradycardia Nadir:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lowestHeartRate} bpm`}</strong></div>
        <div className="flex justify-between"><span>SpO2 Desaturation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lowestSpo2}%`}</strong></div>
        <div className="flex justify-between"><span>Intervention / Stim:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{stimulationRequired}</strong></div>
      </div>
    </div>
  );
};
