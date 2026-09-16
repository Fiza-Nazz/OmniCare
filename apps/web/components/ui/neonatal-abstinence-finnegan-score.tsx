import React from "react";

export interface NeonatalAbstinenceFinneganScoreProps {
  finneganTotalScore: number;
  consecutiveScoresAboveThreshold: number;
  pharmacotherapyTriggered: string;
  quietSleepDurationHours: number;
  className?: string;
}

export const NeonatalAbstinenceFinneganScore: React.FC<NeonatalAbstinenceFinneganScoreProps> = ({
  finneganTotalScore,
  consecutiveScoresAboveThreshold,
  pharmacotherapyTriggered,
  quietSleepDurationHours,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Neonatal Abstinence Syndrome (Finnegan)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          NICU Withdrawal
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Finnegan Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{finneganTotalScore}</strong></div>
        <div className="flex justify-between"><span>Scores >= 8 in 24h:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{consecutiveScoresAboveThreshold}</strong></div>
        <div className="flex justify-between"><span>Oral Morphine Indicated:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pharmacotherapyTriggered}</strong></div>
        <div className="flex justify-between"><span>Sleep Duration Post-Feed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${quietSleepDurationHours} hrs`}</strong></div>
      </div>
    </div>
  );
};
