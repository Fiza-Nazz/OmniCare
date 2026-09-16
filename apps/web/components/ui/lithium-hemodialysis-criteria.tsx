import React from "react";

export interface LithiumHemodialysisCriteriaProps {
  serumLithiumMeqPerL: number;
  acuteOrChronicToxicity: string;
  neurotoxicityTremorSeizures: string;
  hemodialysisRecommended: string;
  className?: string;
}

export const LithiumHemodialysisCriteria: React.FC<LithiumHemodialysisCriteriaProps> = ({
  serumLithiumMeqPerL,
  acuteOrChronicToxicity,
  neurotoxicityTremorSeizures,
  hemodialysisRecommended,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Lithium Toxicity (EXTRIP Dialysis)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Nephrology Toxicology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum Lithium:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumLithiumMeqPerL} mEq/L`}</strong></div>
        <div className="flex justify-between"><span>Exposure Category:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{acuteOrChronicToxicity}</strong></div>
        <div className="flex justify-between"><span>Neurologic Complications:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{neurotoxicityTremorSeizures}</strong></div>
        <div className="flex justify-between"><span>Intermittent Hemodialysis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hemodialysisRecommended}</strong></div>
      </div>
    </div>
  );
};
