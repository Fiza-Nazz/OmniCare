import React from "react";

export interface NeonatalEnteralFeedingToleranceProps {
  feedVolumeMl: number;
  gastricResidualMl: number;
  abdominalGirthCm: number;
  emesisStatus: string;
  className?: string;
}

export const NeonatalEnteralFeedingTolerance: React.FC<NeonatalEnteralFeedingToleranceProps> = ({
  feedVolumeMl,
  gastricResidualMl,
  abdominalGirthCm,
  emesisStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Enteral Feeding Tolerance</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Feeding Protocol
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Administered Feed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${feedVolumeMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Gastric Residual:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${gastricResidualMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Abdominal Circumference:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${abdominalGirthCm} cm`}</strong></div>
        <div className="flex justify-between"><span>Bile / Emesis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{emesisStatus}</strong></div>
      </div>
    </div>
  );
};
