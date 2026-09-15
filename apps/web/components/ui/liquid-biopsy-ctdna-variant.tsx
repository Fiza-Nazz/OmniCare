import React from "react";

export interface LiquidBiopsyCtdnaVariantProps {
  topSomaticMutation: string;
  variantAlleleFractionVaf: number;
  genomicCopiesPerMl: number;
  molecularMrbStatus: string;
  className?: string;
}

export const LiquidBiopsyCtdnaVariant: React.FC<LiquidBiopsyCtdnaVariantProps> = ({
  topSomaticMutation,
  variantAlleleFractionVaf,
  genomicCopiesPerMl,
  molecularMrbStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Circulating Tumor DNA (ctDNA)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Liquid Biopsy
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Dominant Somatic Mutation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{topSomaticMutation}</strong></div>
        <div className="flex justify-between"><span>Variant Allele Fraction (VAF):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${variantAlleleFractionVaf}%`}</strong></div>
        <div className="flex justify-between"><span>Plasma Mutant Copies:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${genomicCopiesPerMl} copies/mL`}</strong></div>
        <div className="flex justify-between"><span>Molecular Residual Disease (MRD):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{molecularMrbStatus}</strong></div>
      </div>
    </div>
  );
};
