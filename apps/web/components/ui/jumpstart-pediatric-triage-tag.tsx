import React from "react";

export interface JumpstartPediatricTriageTagProps {
  jumpstartCategory: string;
  respiratoryRateChild: number;
  fiveRescueBreathsGiven: string;
  avpuResponsiveness: string;
  className?: string;
}

export const JumpstartPediatricTriageTag: React.FC<JumpstartPediatricTriageTagProps> = ({
  jumpstartCategory,
  respiratoryRateChild,
  fiveRescueBreathsGiven,
  avpuResponsiveness,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">JumpSTART Pediatric Disaster Triage</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pediatric MCI
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Pediatric Triage Classification:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{jumpstartCategory}</strong></div>
        <div className="flex justify-between"><span>Age-Adjusted Resp Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${respiratoryRateChild} /min (15-45 normal)`}</strong></div>
        <div className="flex justify-between"><span>5 Rescue Breaths Apnea Trial:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fiveRescueBreathsGiven}</strong></div>
        <div className="flex justify-between"><span>AVPU Neurologic Response:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{avpuResponsiveness}</strong></div>
      </div>
    </div>
  );
};
