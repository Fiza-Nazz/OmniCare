import React from "react";

export interface VancomycinAucMicPharmacokineticsProps {
  calculatedAuc24: number;
  targetAucRange: string;
  serumCreatinineChange: string;
  recommendedDailyDoseMg: number;
  className?: string;
}

export const VancomycinAucMicPharmacokinetics: React.FC<VancomycinAucMicPharmacokineticsProps> = ({
  calculatedAuc24,
  targetAucRange,
  serumCreatinineChange,
  recommendedDailyDoseMg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Vancomycin Bayesian AUC/MIC</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          TDM Pharmacokinetics
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Bayesian 24-Hour AUC Estimate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedAuc24} mg·h/L`}</strong></div>
        <div className="flex justify-between"><span>Clinical Target Goal:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{targetAucRange}</strong></div>
        <div className="flex justify-between"><span>Renal Nephrotoxicity Safety:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{serumCreatinineChange}</strong></div>
        <div className="flex justify-between"><span>Adjusted 24h Regimen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${recommendedDailyDoseMg} mg / 24h`}</strong></div>
      </div>
    </div>
  );
};
