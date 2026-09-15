import React from "react";

export interface NeonatalBloodGasCapillaryProps {
  pH: number;
  pCO2: number;
  baseExcess: number;
  warmedHeelSite: string;
  className?: string;
}

export const NeonatalBloodGasCapillary: React.FC<NeonatalBloodGasCapillaryProps> = ({
  pH,
  pCO2,
  baseExcess,
  warmedHeelSite,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Capillary Blood Gas (CBG)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neonatal CBG
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Capillary pH:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pH}`}</strong></div>
        <div className="flex justify-between"><span>pCO2:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pCO2} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Base Excess:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${baseExcess} mEq/L`}</strong></div>
        <div className="flex justify-between"><span>Heel Warming Protocol:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{warmedHeelSite}</strong></div>
      </div>
    </div>
  );
};
