import React from "react";

export interface TunneledDialysisCatheterHeparinLockProps {
  arterialLumenVolumeMl: number;
  venousLumenVolumeMl: number;
  anticoagulantLockSolution: string;
  aspirationBeforeFlushing: string;
  className?: string;
}

export const TunneledDialysisCatheterHeparinLock: React.FC<TunneledDialysisCatheterHeparinLockProps> = ({
  arterialLumenVolumeMl,
  venousLumenVolumeMl,
  anticoagulantLockSolution,
  aspirationBeforeFlushing,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Tunneled Dialysis Catheter Locks</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Permcath Care
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Arterial Hub Printed Fill:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${arterialLumenVolumeMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Venous Hub Printed Fill:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${venousLumenVolumeMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Locking Solution Formulation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{anticoagulantLockSolution}</strong></div>
        <div className="flex justify-between"><span>Pre-Dialysis Lock Aspiration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{aspirationBeforeFlushing}</strong></div>
      </div>
    </div>
  );
};
