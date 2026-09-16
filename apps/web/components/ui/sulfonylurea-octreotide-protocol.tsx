import React from "react";

export interface SulfonylureaOctreotideProtocolProps {
  sulfonylureaAgentIngested: string;
  dextroseBolusRequirementCount: number;
  octreotideDoseMcg: number;
  hypoglycemiaResolved: string;
  className?: string;
}

export const SulfonylureaOctreotideProtocol: React.FC<SulfonylureaOctreotideProtocolProps> = ({
  sulfonylureaAgentIngested,
  dextroseBolusRequirementCount,
  octreotideDoseMcg,
  hypoglycemiaResolved,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Sulfonylurea Hypoglycemia (Octreotide)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Endocrine Toxicology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Ingested Sulfonylurea:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sulfonylureaAgentIngested}</strong></div>
        <div className="flex justify-between"><span>D50W Rescue Boluses Given:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dextroseBolusRequirementCount}</strong></div>
        <div className="flex justify-between"><span>SubQ Octreotide Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${octreotideDoseMcg} mcg Q6H`}</strong></div>
        <div className="flex justify-between"><span>Glucose Stabilization:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hypoglycemiaResolved}</strong></div>
      </div>
    </div>
  );
};
