import React from "react";

export interface AncaVasculitisBvasScoreProps {
  bvasNumericalScore: number;
  ancaTargetAntigen: string;
  rapidlyProgressiveGnPresent: string;
  rituximabCyclophosphamideProtocol: string;
  className?: string;
}

export const AncaVasculitisBvasScore: React.FC<AncaVasculitisBvasScoreProps> = ({
  bvasNumericalScore,
  ancaTargetAntigen,
  rapidlyProgressiveGnPresent,
  rituximabCyclophosphamideProtocol,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">ANCA-Associated Vasculitis (BVAS-v3)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Vasculitis Protocol
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>BVAS-v3 Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bvasNumericalScore}</strong></div>
        <div className="flex justify-between"><span>ANCA Specificity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ancaTargetAntigen}</strong></div>
        <div className="flex justify-between"><span>Crescentic Glomerulonephritis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{rapidlyProgressiveGnPresent}</strong></div>
        <div className="flex justify-between"><span>Induction Therapy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{rituximabCyclophosphamideProtocol}</strong></div>
      </div>
    </div>
  );
};
