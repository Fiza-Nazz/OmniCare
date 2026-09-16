import React from "react";

export interface NmsLevensonCriteriaProps {
  creatineKinaseIuPerL: number;
  leadPipeRigidityObserved: string;
  dantroleneInfusionInitiated: string;
  bromocriptineDoseMg: number;
  className?: string;
}

export const NmsLevensonCriteria: React.FC<NmsLevensonCriteriaProps> = ({
  creatineKinaseIuPerL,
  leadPipeRigidityObserved,
  dantroleneInfusionInitiated,
  bromocriptineDoseMg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Neuroleptic Malignant Syndrome (NMS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Critical Care Neurology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum CK Level:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${creatineKinaseIuPerL} IU/L`}</strong></div>
        <div className="flex justify-between"><span>Lead-Pipe Rigidity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{leadPipeRigidityObserved}</strong></div>
        <div className="flex justify-between"><span>IV Dantrolene Sodium:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dantroleneInfusionInitiated}</strong></div>
        <div className="flex justify-between"><span>Bromocriptine Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bromocriptineDoseMg} mg TID`}</strong></div>
      </div>
    </div>
  );
};
