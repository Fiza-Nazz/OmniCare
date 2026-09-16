import React from "react";

export interface VentilatorAllocationSofaTriageProps {
  sofaScoreAtTriage: number;
  allocationPriorityColor: string;
  fortyEightHourTrialPeriod: string;
  extubationWeaningStatus: string;
  className?: string;
}

export const VentilatorAllocationSofaTriage: React.FC<VentilatorAllocationSofaTriageProps> = ({
  sofaScoreAtTriage,
  allocationPriorityColor,
  fortyEightHourTrialPeriod,
  extubationWeaningStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Scarce Mechanical Ventilator Allocation</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Ventilator Allocation
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Composite SOFA Severity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${sofaScoreAtTriage} / 24`}</strong></div>
        <div className="flex justify-between"><span>Ventilator Priority Category:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{allocationPriorityColor}</strong></div>
        <div className="flex justify-between"><span>48-Hour Therapeutic Trial:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fortyEightHourTrialPeriod}</strong></div>
        <div className="flex justify-between"><span>Respiratory Weaning Trajectory:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{extubationWeaningStatus}</strong></div>
      </div>
    </div>
  );
};
