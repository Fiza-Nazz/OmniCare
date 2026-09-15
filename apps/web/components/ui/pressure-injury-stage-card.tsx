import React from "react";

export type PressureStage = "Stage 1" | "Stage 2" | "Stage 3" | "Stage 4" | "Unstageable" | "Deep Tissue Injury";

export interface PressureInjuryStageCardProps {
  stage: PressureStage;
  location: string;
  recommendedCare: string;
  className?: string;
}

export const PressureInjuryStageCard: React.FC<PressureInjuryStageCardProps> = ({
  stage,
  location,
  recommendedCare,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">{location}: {stage}</h4>
        <span className="rounded bg-rose-100 px-2 py-0.5 font-bold text-rose-800 dark:bg-rose-950 dark:text-rose-200">
          NPUAP {stage}
        </span>
      </div>
      <p className="mt-2 text-slate-600 dark:text-slate-400">Plan: <strong className="text-slate-800 dark:text-slate-200">{recommendedCare}</strong></p>
    </div>
  );
};
