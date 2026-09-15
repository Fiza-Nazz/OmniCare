import React from "react";

export interface SerotoninHunterCriteriaCardProps {
  spontaneousClonusPresent: string;
  ocularClonusAgitation: string;
  diaphoresisTremor: string;
  cyproheptadineDoseMg: number;
  className?: string;
}

export const SerotoninHunterCriteriaCard: React.FC<SerotoninHunterCriteriaCardProps> = ({
  spontaneousClonusPresent,
  ocularClonusAgitation,
  diaphoresisTremor,
  cyproheptadineDoseMg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hunter Serotonin Toxicity Criteria</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Serotonin Syndrome
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Spontaneous / Ocular Clonus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{spontaneousClonusPresent}</strong></div>
        <div className="flex justify-between"><span>Agitation & Diaphoresis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ocularClonusAgitation}</strong></div>
        <div className="flex justify-between"><span>Hyperreflexia & Tremor:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{diaphoresisTremor}</strong></div>
        <div className="flex justify-between"><span>Cyproheptadine Antagonist:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cyproheptadineDoseMg} mg oral`}</strong></div>
      </div>
    </div>
  );
};
