import React from "react";

export interface BehcetDiseaseIcbdCriteriaProps {
  icbdCalculatedScore: number;
  panuveitisRetinalVasculitis: string;
  pathergySkinReactionPositive: string;
  colchicineAntiTnfStatus: string;
  className?: string;
}

export const BehcetDiseaseIcbdCriteria: React.FC<BehcetDiseaseIcbdCriteriaProps> = ({
  icbdCalculatedScore,
  panuveitisRetinalVasculitis,
  pathergySkinReactionPositive,
  colchicineAntiTnfStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Behçet Disease (ICBD Score)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Systemic Vasculitis
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>ICBD Total Points:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{icbdCalculatedScore}</strong></div>
        <div className="flex justify-between"><span>Ocular Panuveitis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{panuveitisRetinalVasculitis}</strong></div>
        <div className="flex justify-between"><span>Skin Pathergy Test:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pathergySkinReactionPositive}</strong></div>
        <div className="flex justify-between"><span>Therapeutic Regimen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{colchicineAntiTnfStatus}</strong></div>
      </div>
    </div>
  );
};
