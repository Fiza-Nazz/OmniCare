import React from "react";

export interface NextGenerationSequencingPanelProps {
  meanSequencingDepthCoverage: number;
  tumorPurityPercent: number;
  actionableTier1VariantsCount: number;
  pathologySignoffComplete: string;
  className?: string;
}

export const NextGenerationSequencingPanel: React.FC<NextGenerationSequencingPanelProps> = ({
  meanSequencingDepthCoverage,
  tumorPurityPercent,
  actionableTier1VariantsCount,
  pathologySignoffComplete,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Comprehensive Solid Tumor NGS Panel</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Comprehensive NGS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Mean Target Read Depth:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${meanSequencingDepthCoverage}x Coverage`}</strong></div>
        <div className="flex justify-between"><span>Estimated Histologic Purity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${tumorPurityPercent}% Tumor`}</strong></div>
        <div className="flex justify-between"><span>Actionable Tier I/II Alterations:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${actionableTier1VariantsCount} Variants`}</strong></div>
        <div className="flex justify-between"><span>Molecular Pathologist Signoff:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pathologySignoffComplete}</strong></div>
      </div>
    </div>
  );
};
