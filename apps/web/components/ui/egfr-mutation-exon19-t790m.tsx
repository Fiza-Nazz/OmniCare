import React from "react";

export interface EgfrMutationExon19T790mProps {
  sensitizingMutation: string;
  t790mResistanceStatus: string;
  c797sTertiaryStatus: string;
  prescribedTkiLine: string;
  className?: string;
}

export const EgfrMutationExon19T790m: React.FC<EgfrMutationExon19T790mProps> = ({
  sensitizingMutation,
  t790mResistanceStatus,
  c797sTertiaryStatus,
  prescribedTkiLine,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">EGFR Sensitizing & Resistance Mutation</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Targeted Lung
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Primary Sensitizing Mutation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sensitizingMutation}</strong></div>
        <div className="flex justify-between"><span>Exon 20 T790M Gatekeeper:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{t790mResistanceStatus}</strong></div>
        <div className="flex justify-between"><span>C797S Resistance Subclone:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{c797sTertiaryStatus}</strong></div>
        <div className="flex justify-between"><span>First-Line Osimertinib Regimen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{prescribedTkiLine}</strong></div>
      </div>
    </div>
  );
};
