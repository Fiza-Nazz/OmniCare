import React from "react";

export interface LungAllocationScoreCompositeProps {
  lungDiagnosticGroup: string;
  forcedVitalCapacityLiters: number;
  supplementalOxygenFlowLMin: number;
  compositeLasScore: number;
  className?: string;
}

export const LungAllocationScoreComposite: React.FC<LungAllocationScoreCompositeProps> = ({
  lungDiagnosticGroup,
  forcedVitalCapacityLiters,
  supplementalOxygenFlowLMin,
  compositeLasScore,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Lung Allocation Score (LAS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pulmonary Allocation
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Clinical Disease Group:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{lungDiagnosticGroup}</strong></div>
        <div className="flex justify-between"><span>Forced Vital Capacity (FVC):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${forcedVitalCapacityLiters} L`}</strong></div>
        <div className="flex justify-between"><span>Resting Oxygen Demand:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${supplementalOxygenFlowLMin} L/min`}</strong></div>
        <div className="flex justify-between"><span>Calculated LAS Index:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${compositeLasScore} / 100`}</strong></div>
      </div>
    </div>
  );
};
