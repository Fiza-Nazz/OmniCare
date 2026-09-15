import React from "react";

export interface SurgicalSiteInfectionCdcClassProps {
  cdcWoundClass: string;
  hollowViscusEntered: string;
  grossSpillagePurulence: string;
  extendedProphylaxisIndicated: string;
  className?: string;
}

export const SurgicalSiteInfectionCdcClass: React.FC<SurgicalSiteInfectionCdcClassProps> = ({
  cdcWoundClass,
  hollowViscusEntered,
  grossSpillagePurulence,
  extendedProphylaxisIndicated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CDC Surgical Wound Classification</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          SSI Prevention
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>CDC Wound Classification:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cdcWoundClass}</strong></div>
        <div className="flex justify-between"><span>Enteric Viscus Entry:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hollowViscusEntered}</strong></div>
        <div className="flex justify-between"><span>Gross Infection / Purulence:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{grossSpillagePurulence}</strong></div>
        <div className="flex justify-between"><span>Extended Antibiotic Coverage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{extendedProphylaxisIndicated}</strong></div>
      </div>
    </div>
  );
};
