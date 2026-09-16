import React from "react";

export interface CdhLungHeadRatioProps {
  observedToExpectedLhrPercent: number;
  liverHerniationPresent: string;
  cdhClassification: string;
  fetoProcedureCandidate: string;
  className?: string;
}

export const CdhLungHeadRatio: React.FC<CdhLungHeadRatioProps> = ({
  observedToExpectedLhrPercent,
  liverHerniationPresent,
  cdhClassification,
  fetoProcedureCandidate,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Congenital Diaphragmatic Hernia (LHR)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Fetal Medicine
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>O/E LHR Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${observedToExpectedLhrPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Intrathoracic Liver:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{liverHerniationPresent}</strong></div>
        <div className="flex justify-between"><span>Prognostic Group:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cdhClassification}</strong></div>
        <div className="flex justify-between"><span>FETO Candidate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fetoProcedureCandidate}</strong></div>
      </div>
    </div>
  );
};
