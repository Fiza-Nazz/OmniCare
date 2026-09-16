import React from "react";

export interface SalicylateDoneNomogramProps {
  serumSalicylateMgDl: number;
  hoursPostIngestion: number;
  urinePhTarget: string;
  hemodialysisIndicated: string;
  className?: string;
}

export const SalicylateDoneNomogram: React.FC<SalicylateDoneNomogramProps> = ({
  serumSalicylateMgDl,
  hoursPostIngestion,
  urinePhTarget,
  hemodialysisIndicated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Salicylate Toxicity (Done Nomogram)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Medical Toxicology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum Salicylate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumSalicylateMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Hours Post Ingestion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hoursPostIngestion} hrs`}</strong></div>
        <div className="flex justify-between"><span>Urine Alkalinization Target:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{urinePhTarget}</strong></div>
        <div className="flex justify-between"><span>Emergent Hemodialysis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hemodialysisIndicated}</strong></div>
      </div>
    </div>
  );
};
