import React from "react";

export interface AnkylosingSpondylitisAsdasIndexProps {
  asdasCrpNumericalScore: number;
  hlaB27Genotype: string;
  sacroiliitisMriConfirmed: string;
  biologicResponseTargetMet: string;
  className?: string;
}

export const AnkylosingSpondylitisAsdasIndex: React.FC<AnkylosingSpondylitisAsdasIndexProps> = ({
  asdasCrpNumericalScore,
  hlaB27Genotype,
  sacroiliitisMriConfirmed,
  biologicResponseTargetMet,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Axial Spondyloarthritis (ASDAS-CRP)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Rheumatology Spondylo
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>ASDAS-CRP Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{asdasCrpNumericalScore}</strong></div>
        <div className="flex justify-between"><span>HLA-B27 Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hlaB27Genotype}</strong></div>
        <div className="flex justify-between"><span>Active MRI Sacroiliitis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sacroiliitisMriConfirmed}</strong></div>
        <div className="flex justify-between"><span>Treatment Target (<1.3 Inactive):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{biologicResponseTargetMet}</strong></div>
      </div>
    </div>
  );
};
