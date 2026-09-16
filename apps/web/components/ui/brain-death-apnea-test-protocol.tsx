import React from "react";

export interface BrainDeathApneaTestProtocolProps {
  prerequisitesMetNormothermia: string;
  allBrainstemReflexesAbsent: string;
  postApneaPco2MmHg: number;
  noRespiratoryEffortConfirmed: string;
  className?: string;
}

export const BrainDeathApneaTestProtocol: React.FC<BrainDeathApneaTestProtocolProps> = ({
  prerequisitesMetNormothermia,
  allBrainstemReflexesAbsent,
  postApneaPco2MmHg,
  noRespiratoryEffortConfirmed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">AAN Brain Death Determination</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Brain Death
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Normothermia & No CNS Sedation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{prerequisitesMetNormothermia}</strong></div>
        <div className="flex justify-between"><span>Cranial Nerve Reflexes 0/8:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{allBrainstemReflexesAbsent}</strong></div>
        <div className="flex justify-between"><span>Final Apnea Challenge pCO2:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${postApneaPco2MmHg} mmHg (&ge;60)`}</strong></div>
        <div className="flex justify-between"><span>Absence of Spontaneous Breathing:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{noRespiratoryEffortConfirmed}</strong></div>
      </div>
    </div>
  );
};
