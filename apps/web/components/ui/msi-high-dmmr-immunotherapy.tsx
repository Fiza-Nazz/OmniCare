import React from "react";

export interface MsiHighDmmrImmunotherapyProps {
  mmrProteinLoss: string;
  msiStatusNgs: string;
  hypermutationLoadMutsMb: number;
  pembrolizumabEligible: string;
  className?: string;
}

export const MsiHighDmmrImmunotherapy: React.FC<MsiHighDmmrImmunotherapyProps> = ({
  mmrProteinLoss,
  msiStatusNgs,
  hypermutationLoadMutsMb,
  pembrolizumabEligible,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Microsatellite Instability (MSI-H)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Precision Immuno
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>IHC Mismatch Protein Deficit:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{mmrProteinLoss}</strong></div>
        <div className="flex justify-between"><span>Polymerase MSI Scoring:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{msiStatusNgs}</strong></div>
        <div className="flex justify-between"><span>Tumor Mutation Burden (TMB):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hypermutationLoadMutsMb} muts/Mb`}</strong></div>
        <div className="flex justify-between"><span>Tissue-Agnostic Anti-PD1 Plan:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pembrolizumabEligible}</strong></div>
      </div>
    </div>
  );
};
