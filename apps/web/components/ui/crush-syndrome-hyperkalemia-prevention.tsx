import React from "react";

export interface CrushSyndromeHyperkalemiaPreventionProps {
  entrapmentDurationHours: number;
  preReleaseSalineInfusedLiters: number;
  tourniquetPreExtricationRequired: string;
  statEcgHyperkalemiaWatch: string;
  className?: string;
}

export const CrushSyndromeHyperkalemiaPrevention: React.FC<CrushSyndromeHyperkalemiaPreventionProps> = ({
  entrapmentDurationHours,
  preReleaseSalineInfusedLiters,
  tourniquetPreExtricationRequired,
  statEcgHyperkalemiaWatch,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Crush Injury & Compartment Protection</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Crush Syndrome
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Structural Entrapment Time:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${entrapmentDurationHours} Hours`}</strong></div>
        <div className="flex justify-between"><span>Pre-Extrication Normal Saline:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${preReleaseSalineInfusedLiters} L IV Infused`}</strong></div>
        <div className="flex justify-between"><span>Emergency Tourniquet Before Release:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{tourniquetPreExtricationRequired}</strong></div>
        <div className="flex justify-between"><span>Field Release Hyperkalemic Arrest:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{statEcgHyperkalemiaWatch}</strong></div>
      </div>
    </div>
  );
};
