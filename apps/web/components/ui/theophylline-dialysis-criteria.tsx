import React from "react";

export interface TheophyllineDialysisCriteriaProps {
  serumTheophyllineMgL: number;
  ventricularArrhythmiaObserved: string;
  refractoryHypokalemiaPresent: string;
  hemodialysisInitiated: string;
  className?: string;
}

export const TheophyllineDialysisCriteria: React.FC<TheophyllineDialysisCriteriaProps> = ({
  serumTheophyllineMgL,
  ventricularArrhythmiaObserved,
  refractoryHypokalemiaPresent,
  hemodialysisInitiated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Theophylline Overdose (Extracorporeal)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Toxicology Clearance
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum Theophylline:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumTheophyllineMgL} mg/L`}</strong></div>
        <div className="flex justify-between"><span>Tachyarrhythmias:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ventricularArrhythmiaObserved}</strong></div>
        <div className="flex justify-between"><span>Hypokalemia / Acidosis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{refractoryHypokalemiaPresent}</strong></div>
        <div className="flex justify-between"><span>Hemodialysis / Hemoperfusion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hemodialysisInitiated}</strong></div>
      </div>
    </div>
  );
};
