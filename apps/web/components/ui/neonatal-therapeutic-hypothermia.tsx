import React from "react";

export interface NeonatalTherapeuticHypothermiaProps {
  sarnatStage: string;
  coreTempCelsius: number;
  coolingDurationHours: number;
  targetRewarmingRatePerHour: string;
  className?: string;
}

export const NeonatalTherapeuticHypothermia: React.FC<NeonatalTherapeuticHypothermiaProps> = ({
  sarnatStage,
  coreTempCelsius,
  coolingDurationHours,
  targetRewarmingRatePerHour,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Therapeutic Hypothermia (HIE Sarnat)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neonatal Neuro
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>HIE Sarnat Stage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sarnatStage}</strong></div>
        <div className="flex justify-between"><span>Core Temperature:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${coreTempCelsius} °C`}</strong></div>
        <div className="flex justify-between"><span>Hypothermia Duration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${coolingDurationHours} / 72 hrs`}</strong></div>
        <div className="flex justify-between"><span>Rewarming Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{targetRewarmingRatePerHour}</strong></div>
      </div>
    </div>
  );
};
