import React from "react";

export interface HemodialysisKtVAdequacyCardProps {
  spKtVValue: number;
  ureaReductionRatioPercent: number;
  effectiveBloodFlowMlMin: number;
  dialysateFlowRateMlMin: number;
  className?: string;
}

export const HemodialysisKtVAdequacyCard: React.FC<HemodialysisKtVAdequacyCardProps> = ({
  spKtVValue,
  ureaReductionRatioPercent,
  effectiveBloodFlowMlMin,
  dialysateFlowRateMlMin,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hemodialysis Clearance Adequacy (Kt/V)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Dialysis Adequacy
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Single-Pool Kt/V Value:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${spKtVValue} (Target &ge;1.2)`}</strong></div>
        <div className="flex justify-between"><span>Urea Reduction Ratio (URR):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${ureaReductionRatioPercent}% (&ge;65%)`}</strong></div>
        <div className="flex justify-between"><span>Actual Blood Pump Flow (Qb):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${effectiveBloodFlowMlMin} mL/min`}</strong></div>
        <div className="flex justify-between"><span>Dialysate Flow (Qd):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${dialysateFlowRateMlMin} mL/min`}</strong></div>
      </div>
    </div>
  );
};
