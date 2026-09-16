import React from "react";

export interface HydrofluoricAcidCalciumGluconateProps {
  affectedTbsaPercent: number;
  calciumGluconateTopicalGelApplied: string;
  intraArterialInfusionInitiated: string;
  ionizedHypocalcemiaCorrected: string;
  className?: string;
}

export const HydrofluoricAcidCalciumGluconate: React.FC<HydrofluoricAcidCalciumGluconateProps> = ({
  affectedTbsaPercent,
  calciumGluconateTopicalGelApplied,
  intraArterialInfusionInitiated,
  ionizedHypocalcemiaCorrected,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hydrofluoric Acid (Calcium Gluconate)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Chemical Hazard Protocol
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Body Surface Involved:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${affectedTbsaPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Topical Ca-Gluconate Gel:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{calciumGluconateTopicalGelApplied}</strong></div>
        <div className="flex justify-between"><span>Intra-Arterial Perfusion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{intraArterialInfusionInitiated}</strong></div>
        <div className="flex justify-between"><span>Systemic Hypocalcemia:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ionizedHypocalcemiaCorrected}</strong></div>
      </div>
    </div>
  );
};
