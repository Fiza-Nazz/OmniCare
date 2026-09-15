import React from "react";

export interface CarbapenemResistantCpeAlertProps {
  organismIdentified: string;
  carbapenemaseEnzyme: string;
  enhancedBarrierPrecautions: string;
  ceftazidimeAvibactamSusceptible: string;
  className?: string;
}

export const CarbapenemResistantCpeAlert: React.FC<CarbapenemResistantCpeAlertProps> = ({
  organismIdentified,
  carbapenemaseEnzyme,
  enhancedBarrierPrecautions,
  ceftazidimeAvibactamSusceptible,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Carbapenemase (CRE/CPE) Alert</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          CRE Alert
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Multidrug Resistant Pathogen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{organismIdentified}</strong></div>
        <div className="flex justify-between"><span>Carbapenemase Genotype:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{carbapenemaseEnzyme}</strong></div>
        <div className="flex justify-between"><span>Enhanced Barrier Precautions:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{enhancedBarrierPrecautions}</strong></div>
        <div className="flex justify-between"><span>Novel Inhibitor Susceptibility:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ceftazidimeAvibactamSusceptible}</strong></div>
      </div>
    </div>
  );
};
