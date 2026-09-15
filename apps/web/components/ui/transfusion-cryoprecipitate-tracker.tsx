import React from "react";

export interface TransfusionCryoprecipitateTrackerProps {
  currentFibrinogenMgDl: number;
  targetGoalMgDl: number;
  unitsPooled: number;
  infusionState: string;
  className?: string;
}

export const TransfusionCryoprecipitateTracker: React.FC<TransfusionCryoprecipitateTrackerProps> = ({
  currentFibrinogenMgDl,
  targetGoalMgDl,
  unitsPooled,
  infusionState,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cryoprecipitate Fibrinogen Infusion</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Coagulation Support
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Current Fibrinogen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${currentFibrinogenMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Target Threshold:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${targetGoalMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Pooled Units Given:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${unitsPooled} Units`}</strong></div>
        <div className="flex justify-between"><span>Infusion Progress:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{infusionState}</strong></div>
      </div>
    </div>
  );
};
