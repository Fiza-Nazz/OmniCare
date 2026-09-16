import React from "react";

export interface NaloxoneInfusionTitrationProps {
  arousalBolusDoseMg: number;
  hourlyInfusionRateMgHr: number;
  respiratoryRateBreathsPerMin: number;
  withdrawalSignsReported: string;
  className?: string;
}

export const NaloxoneInfusionTitration: React.FC<NaloxoneInfusionTitrationProps> = ({
  arousalBolusDoseMg,
  hourlyInfusionRateMgHr,
  respiratoryRateBreathsPerMin,
  withdrawalSignsReported,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Naloxone Continuous Infusion Protocol</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Opioid Antagonist
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Initial Bolus Required:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${arousalBolusDoseMg} mg`}</strong></div>
        <div className="flex justify-between"><span>Continuous Infusion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hourlyInfusionRateMgHr} mg/hr`}</strong></div>
        <div className="flex justify-between"><span>Spontaneous Resp Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${respiratoryRateBreathsPerMin} bpm`}</strong></div>
        <div className="flex justify-between"><span>Precipitated Withdrawal:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{withdrawalSignsReported}</strong></div>
      </div>
    </div>
  );
};
