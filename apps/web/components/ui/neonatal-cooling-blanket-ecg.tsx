import React from "react";

export interface NeonatalCoolingBlanketEcgProps {
  rectalTempC: number;
  blanketTempWaterC: number;
  targetGoalC: number;
  aEcgPattern: string;
  className?: string;
}

export const NeonatalCoolingBlanketEcg: React.FC<NeonatalCoolingBlanketEcgProps> = ({
  rectalTempC,
  blanketTempWaterC,
  targetGoalC,
  aEcgPattern,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">NICU Servo-Controlled Cooling</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          HIE Hypothermia
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Continuous Rectal Probe:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${rectalTempC} °C`}</strong></div>
        <div className="flex justify-between"><span>Blanket Water Temp:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${blanketTempWaterC} °C`}</strong></div>
        <div className="flex justify-between"><span>Servo Setpoint:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${targetGoalC} °C`}</strong></div>
        <div className="flex justify-between"><span>Amplitude EEG (aEEG):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{aEcgPattern}</strong></div>
      </div>
    </div>
  );
};
