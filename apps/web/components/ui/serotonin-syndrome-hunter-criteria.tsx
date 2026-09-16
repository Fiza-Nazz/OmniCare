import React from "react";

export interface SerotoninSyndromeHunterCriteriaProps {
  spontaneousClonusPresent: string;
  diaphoresisWithAgitation: string;
  hyperthermiaTempCelsius: number;
  cyproheptadineDoseMg: number;
  className?: string;
}

export const SerotoninSyndromeHunterCriteria: React.FC<SerotoninSyndromeHunterCriteriaProps> = ({
  spontaneousClonusPresent,
  diaphoresisWithAgitation,
  hyperthermiaTempCelsius,
  cyproheptadineDoseMg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Serotonin Toxicity (Hunter Criteria)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neuropsychiatric Toxicology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Spontaneous Clonus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{spontaneousClonusPresent}</strong></div>
        <div className="flex justify-between"><span>Agitation & Diaphoresis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{diaphoresisWithAgitation}</strong></div>
        <div className="flex justify-between"><span>Peak Temperature:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hyperthermiaTempCelsius} °C`}</strong></div>
        <div className="flex justify-between"><span>Cyproheptadine Antidote:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cyproheptadineDoseMg} mg oral`}</strong></div>
      </div>
    </div>
  );
};
