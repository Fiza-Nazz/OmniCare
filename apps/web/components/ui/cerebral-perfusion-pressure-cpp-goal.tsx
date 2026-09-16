import React from "react";

export interface CerebralPerfusionPressureCppGoalProps {
  meanArterialPressureMmHg: number;
  intracranialPressureMmHg: number;
  calculatedCppMmHg: number;
  cppTargetStatus: string;
  className?: string;
}

export const CerebralPerfusionPressureCppGoal: React.FC<CerebralPerfusionPressureCppGoalProps> = ({
  meanArterialPressureMmHg,
  intracranialPressureMmHg,
  calculatedCppMmHg,
  cppTargetStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cerebral Perfusion Pressure (CPP)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neurocritical Care
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Mean Arterial Pressure (MAP):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${meanArterialPressureMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Intracranial Pressure (ICP):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${intracranialPressureMmHg} mmHg (&lt;20 goal)`}</strong></div>
        <div className="flex justify-between"><span>Cerebral Perfusion (CPP):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedCppMmHg} mmHg (Goal 60-70)`}</strong></div>
        <div className="flex justify-between"><span>Perfusion Goal Adherence:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cppTargetStatus}</strong></div>
      </div>
    </div>
  );
};
