import React from "react";

export interface NeonatalSepsisRiskCalculatorProps {
  maternalGbsStatus: string;
  romDurationHours: number;
  maternalFeverCelsius: number;
  calculatedEosRiskPer1000: number;
  className?: string;
}

export const NeonatalSepsisRiskCalculator: React.FC<NeonatalSepsisRiskCalculatorProps> = ({
  maternalGbsStatus,
  romDurationHours,
  maternalFeverCelsius,
  calculatedEosRiskPer1000,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Early-Onset Sepsis Risk (Kaiser Nomogram)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Infection Control
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Maternal GBS:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{maternalGbsStatus}</strong></div>
        <div className="flex justify-between"><span>ROM Duration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${romDurationHours} hrs`}</strong></div>
        <div className="flex justify-between"><span>Highest Intrapartum Temp:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${maternalFeverCelsius} °C`}</strong></div>
        <div className="flex justify-between"><span>EOS Risk:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedEosRiskPer1000} / 1,000`}</strong></div>
      </div>
    </div>
  );
};
