import React from "react";

export interface EgpaChurgStraussScoreProps {
  absoluteEosinophilCountPerUl: number;
  fiveFactorScorePoints: number;
  cardiacInvolvementIdentified: string;
  mepolizumabAntiIl5Approved: string;
  className?: string;
}

export const EgpaChurgStraussScore: React.FC<EgpaChurgStraussScoreProps> = ({
  absoluteEosinophilCountPerUl,
  fiveFactorScorePoints,
  cardiacInvolvementIdentified,
  mepolizumabAntiIl5Approved,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">EGPA (Churg-Strauss / FFS-2009)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Vasculitis Subspecialty
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Absolute Eosinophils:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${absoluteEosinophilCountPerUl} /µL`}</strong></div>
        <div className="flex justify-between"><span>FFS-2009 Mortality Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fiveFactorScorePoints}</strong></div>
        <div className="flex justify-between"><span>Eosinophilic Myocarditis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cardiacInvolvementIdentified}</strong></div>
        <div className="flex justify-between"><span>Mepolizumab (Anti-IL-5):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{mepolizumabAntiIl5Approved}</strong></div>
      </div>
    </div>
  );
};
