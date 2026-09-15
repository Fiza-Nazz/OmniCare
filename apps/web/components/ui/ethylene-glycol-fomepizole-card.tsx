import React from "react";

export interface EthyleneGlycolFomepizoleCardProps {
  calciumOxalateCrystals: string;
  fomepizoleLoadingDoseMgKg: number;
  glycolicAcidMetabolite: string;
  dialysisReadiness: string;
  className?: string;
}

export const EthyleneGlycolFomepizoleCard: React.FC<EthyleneGlycolFomepizoleCardProps> = ({
  calciumOxalateCrystals,
  fomepizoleLoadingDoseMgKg,
  glycolicAcidMetabolite,
  dialysisReadiness,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Ethylene Glycol & Fomepizole</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Antifreeze Antidote
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Urinary Envelope Crystals:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{calciumOxalateCrystals}</strong></div>
        <div className="flex justify-between"><span>Fomepizole Loading Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${fomepizoleLoadingDoseMgKg} mg/kg IV`}</strong></div>
        <div className="flex justify-between"><span>Toxic Glycolic Acid:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{glycolicAcidMetabolite}</strong></div>
        <div className="flex justify-between"><span>Dialytic Toxic Clearance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dialysisReadiness}</strong></div>
      </div>
    </div>
  );
};
