import React from "react";

export interface NerveAgentAtnaaAutoinjectorProps {
  atnaaKitsAdministered: number;
  copiousSalivationReduced: string;
  convulsionsSeizureControl: string;
  diazepamCANAAutoinjector: string;
  className?: string;
}

export const NerveAgentAtnaaAutoinjector: React.FC<NerveAgentAtnaaAutoinjectorProps> = ({
  atnaaKitsAdministered,
  copiousSalivationReduced,
  convulsionsSeizureControl,
  diazepamCANAAutoinjector,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">ATNAA Nerve Agent Autoinjector</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          CBRN Antidote
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Administered ATNAA Pens:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${atnaaKitsAdministered} Doses IM`}</strong></div>
        <div className="flex justify-between"><span>Bronchorrhea / Secretions:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{copiousSalivationReduced}</strong></div>
        <div className="flex justify-between"><span>Fasciculations / Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{convulsionsSeizureControl}</strong></div>
        <div className="flex justify-between"><span>CANA Diazepam Anticonvulsant:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{diazepamCANAAutoinjector}</strong></div>
      </div>
    </div>
  );
};
