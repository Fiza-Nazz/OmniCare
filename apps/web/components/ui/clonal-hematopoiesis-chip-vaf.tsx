import React from "react";

export interface ClonalHematopoiesisChipVafProps {
  recurrentChipGene: string;
  variantAlleleFrequencyPercent: number;
  cytopeniaPresent: string;
  cardiovascularRiskAlert: string;
  className?: string;
}

export const ClonalHematopoiesisChipVaf: React.FC<ClonalHematopoiesisChipVafProps> = ({
  recurrentChipGene,
  variantAlleleFrequencyPercent,
  cytopeniaPresent,
  cardiovascularRiskAlert,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Clonal Hematopoiesis (CHIP)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Hematology Genetics
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Driver Epigenetic Gene:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{recurrentChipGene}</strong></div>
        <div className="flex justify-between"><span>Clonal VAF Burden:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${variantAlleleFrequencyPercent}% (&ge;2% diagnostic)`}</strong></div>
        <div className="flex justify-between"><span>Concurrent Peripheral Cytopenia:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cytopeniaPresent}</strong></div>
        <div className="flex justify-between"><span>Accelerated Atherosclerosis Watch:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cardiovascularRiskAlert}</strong></div>
      </div>
    </div>
  );
};
