import React from "react";

export interface RabiesPostExposureProphylaxisProps {
  exposureCategory: string;
  hrigWoundInfiltrationDone: string;
  vaccineDoseSequence: string;
  animalQuarantineStatus: string;
  className?: string;
}

export const RabiesPostExposureProphylaxis: React.FC<RabiesPostExposureProphylaxisProps> = ({
  exposureCategory,
  hrigWoundInfiltrationDone,
  vaccineDoseSequence,
  animalQuarantineStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Rabies Post-Exposure Prophylaxis (PEP)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Rabies PEP
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>WHO Exposure Category:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{exposureCategory}</strong></div>
        <div className="flex justify-between"><span>HRIG 20 IU/kg Infiltration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hrigWoundInfiltrationDone}</strong></div>
        <div className="flex justify-between"><span>Vaccine Day Schedule:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{vaccineDoseSequence}</strong></div>
        <div className="flex justify-between"><span>10-Day Quarantine Animal:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{animalQuarantineStatus}</strong></div>
      </div>
    </div>
  );
};
