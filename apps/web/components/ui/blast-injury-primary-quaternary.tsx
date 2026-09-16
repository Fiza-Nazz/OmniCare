import React from "react";

export interface BlastInjuryPrimaryQuaternaryProps {
  blastProximityMeters: number;
  tympanicMembranePerforated: string;
  blastLungHemoptysisPresent: string;
  delayedBowelPerforationWatch: string;
  className?: string;
}

export const BlastInjuryPrimaryQuaternary: React.FC<BlastInjuryPrimaryQuaternaryProps> = ({
  blastProximityMeters,
  tympanicMembranePerforated,
  blastLungHemoptysisPresent,
  delayedBowelPerforationWatch,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Blast Injury Multimodal Assessment</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Blast Trauma
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Distance from Detonation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${blastProximityMeters} Meters`}</strong></div>
        <div className="flex justify-between"><span>Tympanic Rupture (Overpressure Marker):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{tympanicMembranePerforated}</strong></div>
        <div className="flex justify-between"><span>Blast Lung Contusion / Hemoptysis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{blastLungHemoptysisPresent}</strong></div>
        <div className="flex justify-between"><span>48-Hour Hollow Viscus Watch:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{delayedBowelPerforationWatch}</strong></div>
      </div>
    </div>
  );
};
