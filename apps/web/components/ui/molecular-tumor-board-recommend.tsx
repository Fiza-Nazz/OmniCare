import React from "react";

export interface MolecularTumorBoardRecommendProps {
  escatActionabilityTier: string;
  genomicAlteration: string;
  clinicalTrialBasketMatch: string;
  offLabelTargetedDrug: string;
  className?: string;
}

export const MolecularTumorBoardRecommend: React.FC<MolecularTumorBoardRecommendProps> = ({
  escatActionabilityTier,
  genomicAlteration,
  clinicalTrialBasketMatch,
  offLabelTargetedDrug,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Molecular Tumor Board (MTB) Summary</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Tumor Board
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>ESCAT Actionability Tier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{escatActionabilityTier}</strong></div>
        <div className="flex justify-between"><span>Key Driver Genomic Alteration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{genomicAlteration}</strong></div>
        <div className="flex justify-between"><span>Matching Precision Clinical Trial:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{clinicalTrialBasketMatch}</strong></div>
        <div className="flex justify-between"><span>Consensus MTB Recommendation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{offLabelTargetedDrug}</strong></div>
      </div>
    </div>
  );
};
