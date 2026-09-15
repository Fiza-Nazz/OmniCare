import React from "react";

export interface SpinalCordCompressionOncoCardProps {
  neurologicalWeaknessLevel: string;
  sensoryLevelDermatome: string;
  dexamethasoneBolusGiven: string;
  emergentMriStatus: string;
  className?: string;
}

export const SpinalCordCompressionOncoCard: React.FC<SpinalCordCompressionOncoCardProps> = ({
  neurologicalWeaknessLevel,
  sensoryLevelDermatome,
  dexamethasoneBolusGiven,
  emergentMriStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Metastatic Cord Compression (MSCC)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Onco Emergency
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Motor Deficit Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{neurologicalWeaknessLevel}</strong></div>
        <div className="flex justify-between"><span>Sensory Loss Level:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sensoryLevelDermatome}</strong></div>
        <div className="flex justify-between"><span>IV Dexamethasone Bolus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dexamethasoneBolusGiven}</strong></div>
        <div className="flex justify-between"><span>Emergency Whole-Spine MRI:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{emergentMriStatus}</strong></div>
      </div>
    </div>
  );
};
