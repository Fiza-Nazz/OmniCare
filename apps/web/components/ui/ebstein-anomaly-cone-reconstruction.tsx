import React from "react";

export interface EbsteinAnomalyConeReconstructionProps {
  delocalizationMm: number;
  atrializedRvFractionPercent: number;
  coneReconstructionFeasibility: string;
  preexcitationWpwSyndrome: string;
  className?: string;
}

export const EbsteinAnomalyConeReconstruction: React.FC<EbsteinAnomalyConeReconstructionProps> = ({
  delocalizationMm,
  atrializedRvFractionPercent,
  coneReconstructionFeasibility,
  preexcitationWpwSyndrome,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Ebstein Anomaly (Cone Procedure)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Ebstein Anomaly
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Tricuspid Displacement Depth:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${delocalizationMm} mm (&gt;8mm/m²)`}</strong></div>
        <div className="flex justify-between"><span>Atrialized Right Ventricle Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${atrializedRvFractionPercent}%`}</strong></div>
        <div className="flex justify-between"><span>da Silva 360° Cone Reconstruction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{coneReconstructionFeasibility}</strong></div>
        <div className="flex justify-between"><span>Accessory Pathway (WPW Delta Wave):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{preexcitationWpwSyndrome}</strong></div>
      </div>
    </div>
  );
};
