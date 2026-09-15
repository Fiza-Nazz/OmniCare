import React from "react";

export interface CandidaAurisMultidrugCardProps {
  yeastSpeciationConfirmed: string;
  echinocandinResistanceStatus: string;
  epaListPDisinfection: string;
  axillaGroinScreening: string;
  className?: string;
}

export const CandidaAurisMultidrugCard: React.FC<CandidaAurisMultidrugCardProps> = ({
  yeastSpeciationConfirmed,
  echinocandinResistanceStatus,
  epaListPDisinfection,
  axillaGroinScreening,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Candida auris Multidrug Alert</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Fungal Containment
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>MALDI-TOF C. auris Confirmed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{yeastSpeciationConfirmed}</strong></div>
        <div className="flex justify-between"><span>Echinocandin MIC Susceptibility:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{echinocandinResistanceStatus}</strong></div>
        <div className="flex justify-between"><span>EPA List P Cleaner Enforced:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{epaListPDisinfection}</strong></div>
        <div className="flex justify-between"><span>Admission Surveillance Swab:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{axillaGroinScreening}</strong></div>
      </div>
    </div>
  );
};
