import React from "react";

export interface InfectiveEndocarditisDukeCriteriaProps {
  majorCriteriaMet: number;
  minorCriteriaMet: number;
  diagnosticClassification: string;
  causativeOrganism: string;
  className?: string;
}

export const InfectiveEndocarditisDukeCriteria: React.FC<InfectiveEndocarditisDukeCriteriaProps> = ({
  majorCriteriaMet,
  minorCriteriaMet,
  diagnosticClassification,
  causativeOrganism,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Modified Duke Criteria (Endocarditis)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Endocarditis
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Major Duke Criteria Met:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${majorCriteriaMet} / 2`}</strong></div>
        <div className="flex justify-between"><span>Minor Criteria Met:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${minorCriteriaMet} / 5`}</strong></div>
        <div className="flex justify-between"><span>Diagnostic Category:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{diagnosticClassification}</strong></div>
        <div className="flex justify-between"><span>Blood Culture Isolate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{causativeOrganism}</strong></div>
      </div>
    </div>
  );
};
