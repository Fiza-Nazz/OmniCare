import React from "react";

export interface CentralVenousOxygenScvO2Props {
  scvO2Percent: number;
  serumLactate: number;
  hematocritPercent: number;
  targetMet: string;
  className?: string;
}

export const CentralVenousOxygenScvO2: React.FC<CentralVenousOxygenScvO2Props> = ({
  scvO2Percent,
  serumLactate,
  hematocritPercent,
  targetMet,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Central Venous Oximetry (ScvO2)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Perfusion Endpoint
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>ScvO2 Saturation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${scvO2Percent}%`}</strong></div>
        <div className="flex justify-between"><span>Serum Lactate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumLactate} mmol/L`}</strong></div>
        <div className="flex justify-between"><span>Hematocrit:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hematocritPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Endpoint Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{targetMet}</strong></div>
      </div>
    </div>
  );
};
