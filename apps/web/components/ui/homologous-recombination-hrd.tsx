import React from "react";

export interface HomologousRecombinationHrdProps {
  genomicInstabilityScoreGis: number;
  lossOfHeterozygosityHigh: string;
  telomericAllelicImbalance: string;
  parpMaintenanceIndicated: string;
  className?: string;
}

export const HomologousRecombinationHrd: React.FC<HomologousRecombinationHrdProps> = ({
  genomicInstabilityScoreGis,
  lossOfHeterozygosityHigh,
  telomericAllelicImbalance,
  parpMaintenanceIndicated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Homologous Recombination Deficiency (HRD)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Genomic Instability
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Combined Genomic Scar Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${genomicInstabilityScoreGis} (&ge;42 HRD+)`}</strong></div>
        <div className="flex justify-between"><span>Loss of Heterozygosity (LOH):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{lossOfHeterozygosityHigh}</strong></div>
        <div className="flex justify-between"><span>Telomeric Imbalance (TAI):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{telomericAllelicImbalance}</strong></div>
        <div className="flex justify-between"><span>Maintenance PARP Inhibitor:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{parpMaintenanceIndicated}</strong></div>
      </div>
    </div>
  );
};
