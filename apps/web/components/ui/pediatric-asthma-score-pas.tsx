import React from "react";

export interface PediatricAsthmaScorePasProps {
  pasScore: number;
  triageSeverity: string;
  albuterolInterval: string;
  steroidDoseGiven: string;
  className?: string;
}

export const PediatricAsthmaScorePas: React.FC<PediatricAsthmaScorePasProps> = ({
  pasScore,
  triageSeverity,
  albuterolInterval,
  steroidDoseGiven,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Pediatric Asthma Score (PAS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Asthma Exacerbation
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Total PAS Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pasScore} / 12`}</strong></div>
        <div className="flex justify-between"><span>Acuity Tier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{triageSeverity}</strong></div>
        <div className="flex justify-between"><span>Nebulizer Regimen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{albuterolInterval}</strong></div>
        <div className="flex justify-between"><span>Corticosteroid:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{steroidDoseGiven}</strong></div>
      </div>
    </div>
  );
};
