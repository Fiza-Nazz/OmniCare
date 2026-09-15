import React from "react";

export interface DuctusArteriosusProstaglandinE1Props {
  alprostadilDoseMcgKgMin: number;
  prePostDuctalGradientMmHg: number;
  apneaIntubationReady: string;
  hyperthermiaFlushingAlert: string;
  className?: string;
}

export const DuctusArteriosusProstaglandinE1: React.FC<DuctusArteriosusProstaglandinE1Props> = ({
  alprostadilDoseMcgKgMin,
  prePostDuctalGradientMmHg,
  apneaIntubationReady,
  hyperthermiaFlushingAlert,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Prostaglandin E1 Ductal Patency</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Ductal Dependent
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Prostaglandin E1 Infusion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${alprostadilDoseMcgKgMin} µg/kg/min`}</strong></div>
        <div className="flex justify-between"><span>Pre/Post Ductal SpO2 Gradient:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${prePostDuctalGradientMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>PGE1 Apnea Intubation Readiness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{apneaIntubationReady}</strong></div>
        <div className="flex justify-between"><span>Cutaneous Vasodilation Flush:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hyperthermiaFlushingAlert}</strong></div>
      </div>
    </div>
  );
};
