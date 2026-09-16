import React from "react";

export interface AcuteIschemicStrokeTenecteplaseProps {
  symptomOnsetTime: string;
  tenecteplaseDoseMg: number;
  bloodPressureCeilingMet: string;
  angioedemaTongueCheck: string;
  className?: string;
}

export const AcuteIschemicStrokeTenecteplase: React.FC<AcuteIschemicStrokeTenecteplaseProps> = ({
  symptomOnsetTime,
  tenecteplaseDoseMg,
  bloodPressureCeilingMet,
  angioedemaTongueCheck,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Tenecteplase (TNK) Thrombolysis</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Acute Thrombolysis
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Last Known Well (LKW):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{symptomOnsetTime}</strong></div>
        <div className="flex justify-between"><span>Single Bolus TNK (0.25mg/kg):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${tenecteplaseDoseMg} mg IV`}</strong></div>
        <div className="flex justify-between"><span>BP &lt; 185/110 Threshold:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bloodPressureCeilingMet}</strong></div>
        <div className="flex justify-between"><span>Orolingual Angioedema Screen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{angioedemaTongueCheck}</strong></div>
      </div>
    </div>
  );
};
