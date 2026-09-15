import React from "react";

export interface PeritonealDialysisPeritonitisCellProps {
  effluentWbcCount: number;
  polymorphonuclearPercent: number;
  gramStainResult: string;
  intraperitonealAntibioticsGiven: string;
  className?: string;
}

export const PeritonealDialysisPeritonitisCell: React.FC<PeritonealDialysisPeritonitisCellProps> = ({
  effluentWbcCount,
  polymorphonuclearPercent,
  gramStainResult,
  intraperitonealAntibioticsGiven,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Peritoneal Dialysis Peritonitis</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          PD Peritonitis
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Dialysate WBC Count:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${effluentWbcCount} /µL (&gt;100 diagnostic)`}</strong></div>
        <div className="flex justify-between"><span>Neutrophil PMN Fraction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${polymorphonuclearPercent}% (&gt;50%)`}</strong></div>
        <div className="flex justify-between"><span>Emergent Gram Stain:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{gramStainResult}</strong></div>
        <div className="flex justify-between"><span>Intraperitoneal (IP) Ceftazidime:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{intraperitonealAntibioticsGiven}</strong></div>
      </div>
    </div>
  );
};
