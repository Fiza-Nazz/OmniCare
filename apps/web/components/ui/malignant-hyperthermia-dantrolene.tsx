import React from "react";

export interface MalignantHyperthermiaDantroleneProps {
  coreTempC: number;
  etco2MmHg: number;
  dantroleneDoseMg: number;
  coolingMeasures: string;
  className?: string;
}

export const MalignantHyperthermiaDantrolene: React.FC<MalignantHyperthermiaDantroleneProps> = ({
  coreTempC,
  etco2MmHg,
  dantroleneDoseMg,
  coolingMeasures,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Malignant Hyperthermia (MH) Rescue</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          MH Emergency
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Rapid Core Temperature:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${coreTempC} °C`}</strong></div>
        <div className="flex justify-between"><span>Hypercarbia EtCO2:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${etco2MmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Dantrolene IV Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${dantroleneDoseMg} mg`}</strong></div>
        <div className="flex justify-between"><span>Surface Active Cooling:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{coolingMeasures}</strong></div>
      </div>
    </div>
  );
};
