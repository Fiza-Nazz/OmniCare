import React from "react";

export interface SystemicSclerosisRodnanSkinScoreProps {
  modifiedRodnanSkinScore: number;
  scl70AntibodyStatus: string;
  forcedVitalCapacityPercent: number;
  nintedanibAntifibroticStatus: string;
  className?: string;
}

export const SystemicSclerosisRodnanSkinScore: React.FC<SystemicSclerosisRodnanSkinScoreProps> = ({
  modifiedRodnanSkinScore,
  scl70AntibodyStatus,
  forcedVitalCapacityPercent,
  nintedanibAntifibroticStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Systemic Sclerosis (mRSS Skin Score)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Connective Tissue Disease
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>mRSS Score (0-51):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{modifiedRodnanSkinScore}</strong></div>
        <div className="flex justify-between"><span>Anti-Scl-70 (Topoisomerase):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{scl70AntibodyStatus}</strong></div>
        <div className="flex justify-between"><span>Pulmonary FVC % Predicted:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${forcedVitalCapacityPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Antifibrotic Therapy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{nintedanibAntifibroticStatus}</strong></div>
      </div>
    </div>
  );
};
