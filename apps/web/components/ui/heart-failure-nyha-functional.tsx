import React from "react";

export interface HeartFailureNyhaFunctionalProps {
  nyhaClass: string;
  accAhaStage: string;
  bnpLevelPgMl: number;
  functionalCapacityMet: number;
  className?: string;
}

export const HeartFailureNyhaFunctional: React.FC<HeartFailureNyhaFunctionalProps> = ({
  nyhaClass,
  accAhaStage,
  bnpLevelPgMl,
  functionalCapacityMet,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">NYHA Functional Classification</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Heart Failure
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>NYHA Class:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{nyhaClass}</strong></div>
        <div className="flex justify-between"><span>ACC/AHA Stage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{accAhaStage}</strong></div>
        <div className="flex justify-between"><span>NT-proBNP Biomarker:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bnpLevelPgMl} pg/mL`}</strong></div>
        <div className="flex justify-between"><span>Exercise Capacity (METs):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${functionalCapacityMet} METs`}</strong></div>
      </div>
    </div>
  );
};
