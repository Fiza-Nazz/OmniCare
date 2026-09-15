import React from "react";

export interface SulfonylureaOctreotideRescueProps {
  recurrentHypoglycemiaEpisodes: number;
  octreotideSubqDoseMcg: number;
  dextroseReboundAvoidance: string;
  monitoringDurationHours: number;
  className?: string;
}

export const SulfonylureaOctreotideRescue: React.FC<SulfonylureaOctreotideRescueProps> = ({
  recurrentHypoglycemiaEpisodes,
  octreotideSubqDoseMcg,
  dextroseReboundAvoidance,
  monitoringDurationHours,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Sulfonylurea Overdose (Octreotide)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Endocrine Rescue
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Recurrent Dextrose Crashes:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${recurrentHypoglycemiaEpisodes} Events`}</strong></div>
        <div className="flex justify-between"><span>Subcutaneous Octreotide:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${octreotideSubqDoseMcg} µg Q6H`}</strong></div>
        <div className="flex justify-between"><span>Rebound Insulin Suppression:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dextroseReboundAvoidance}</strong></div>
        <div className="flex justify-between"><span>Extended Observation Period:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${monitoringDurationHours} Hours`}</strong></div>
      </div>
    </div>
  );
};
