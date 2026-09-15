import React from "react";

export interface VenousThromboembolismPaduaScoreProps {
  paduaScore: number;
  activeMalignancyPoints: number;
  reducedMobility: string;
  pharmacologicProphylaxis: string;
  className?: string;
}

export const VenousThromboembolismPaduaScore: React.FC<VenousThromboembolismPaduaScoreProps> = ({
  paduaScore,
  activeMalignancyPoints,
  reducedMobility,
  pharmacologicProphylaxis,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Padua VTE Prediction Score</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          VTE Prophylaxis
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Cumulative Padua Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${paduaScore} Points`}</strong></div>
        <div className="flex justify-between"><span>Active Malignancy Factor:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${activeMalignancyPoints} Points`}</strong></div>
        <div className="flex justify-between"><span>Impaired Bed Mobility:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{reducedMobility}</strong></div>
        <div className="flex justify-between"><span>LMWH Prophylaxis Indication:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pharmacologicProphylaxis}</strong></div>
      </div>
    </div>
  );
};
