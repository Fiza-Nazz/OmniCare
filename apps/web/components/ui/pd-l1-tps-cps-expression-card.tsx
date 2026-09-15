import React from "react";

export interface PdL1TpsCpsExpressionCardProps {
  cloneAntibodyUsed: string;
  tumorProportionScorePercent: number;
  combinedPositiveScore: number;
  checkpointMonotherapyEligible: string;
  className?: string;
}

export const PdL1TpsCpsExpressionCard: React.FC<PdL1TpsCpsExpressionCardProps> = ({
  cloneAntibodyUsed,
  tumorProportionScorePercent,
  combinedPositiveScore,
  checkpointMonotherapyEligible,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">PD-L1 Expression (TPS & CPS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Immunotherapy IHC
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Diagnostic IHC Clone:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cloneAntibodyUsed}</strong></div>
        <div className="flex justify-between"><span>Tumor Proportion Score (TPS):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${tumorProportionScorePercent}% (&ge;50% high)`}</strong></div>
        <div className="flex justify-between"><span>Combined Positive Score (CPS):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${combinedPositiveScore}`}</strong></div>
        <div className="flex justify-between"><span>First-Line Anti-PD-1 Monotherapy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{checkpointMonotherapyEligible}</strong></div>
      </div>
    </div>
  );
};
