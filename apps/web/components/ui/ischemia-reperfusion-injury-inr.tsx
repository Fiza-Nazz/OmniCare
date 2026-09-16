import React from "react";

export interface IschemiaReperfusionInjuryInrProps {
  peakAstU_L: number;
  peakAltU_L: number;
  day7InrValue: number;
  olthoffEadCriteriaMet: string;
  className?: string;
}

export const IschemiaReperfusionInjuryInr: React.FC<IschemiaReperfusionInjuryInrProps> = ({
  peakAstU_L,
  peakAltU_L,
  day7InrValue,
  olthoffEadCriteriaMet,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Early Allograft Dysfunction (EAD)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Liver EAD
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Peak Serum AST (SGOT):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${peakAstU_L} U/L (&gt;2000 alert)`}</strong></div>
        <div className="flex justify-between"><span>Peak Serum ALT (SGPT):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${peakAltU_L} U/L`}</strong></div>
        <div className="flex justify-between"><span>Post-Op Day 7 Coagulation INR:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${day7InrValue} (&ge;1.6 EAD)`}</strong></div>
        <div className="flex justify-between"><span>Olthoff EAD Criteria Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{olthoffEadCriteriaMet}</strong></div>
      </div>
    </div>
  );
};
