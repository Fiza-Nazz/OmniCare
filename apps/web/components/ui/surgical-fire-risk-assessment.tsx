import React from "react";

export interface SurgicalFireRiskAssessmentProps {
  heatIgnitionSource: string;
  oxygenConcentrationPercent: number;
  prepDryingTimeMin: number;
  fireRiskLevel: string;
  className?: string;
}

export const SurgicalFireRiskAssessment: React.FC<SurgicalFireRiskAssessmentProps> = ({
  heatIgnitionSource,
  oxygenConcentrationPercent,
  prepDryingTimeMin,
  fireRiskLevel,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">OR Surgical Fire Risk Assessment</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Fire Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Electrocautery / Laser:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{heatIgnitionSource}</strong></div>
        <div className="flex justify-between"><span>Open O2 Enrichment:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${oxygenConcentrationPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Prep Solvent Evaporated:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${prepDryingTimeMin} min`}</strong></div>
        <div className="flex justify-between"><span>Assessed Fire Risk:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fireRiskLevel}</strong></div>
      </div>
    </div>
  );
};
