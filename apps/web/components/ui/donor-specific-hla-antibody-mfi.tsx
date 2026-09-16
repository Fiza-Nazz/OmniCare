import React from "react";

export interface DonorSpecificHlaAntibodyMfiProps {
  targetedHlaLocus: string;
  highestMeanFluorescenceIntensity: number;
  deNovoDevelopment: string;
  plasmapheresisIvIgIndicated: string;
  className?: string;
}

export const DonorSpecificHlaAntibodyMfi: React.FC<DonorSpecificHlaAntibodyMfiProps> = ({
  targetedHlaLocus,
  highestMeanFluorescenceIntensity,
  deNovoDevelopment,
  plasmapheresisIvIgIndicated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Donor-Specific HLA Antibody (DSA)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          HLA Histocompatibility
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Specific Donor HLA Allele:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{targetedHlaLocus}</strong></div>
        <div className="flex justify-between"><span>Peak Luminex MFI Intensity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${highestMeanFluorescenceIntensity} MFI (&gt;1000 alert)`}</strong></div>
        <div className="flex justify-between"><span>De Novo DSA Emergence:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{deNovoDevelopment}</strong></div>
        <div className="flex justify-between"><span>Plasmapheresis + IVIG Rescue:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{plasmapheresisIvIgIndicated}</strong></div>
      </div>
    </div>
  );
};
