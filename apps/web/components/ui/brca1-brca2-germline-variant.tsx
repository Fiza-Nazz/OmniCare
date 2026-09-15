import React from "react";

export interface Brca1Brca2GermlineVariantProps {
  geneMutated: string;
  dnaVariantCds: string;
  acmgClassification: string;
  parpInhibitorIndicated: string;
  className?: string;
}

export const Brca1Brca2GermlineVariant: React.FC<Brca1Brca2GermlineVariantProps> = ({
  geneMutated,
  dnaVariantCds,
  acmgClassification,
  parpInhibitorIndicated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Germline BRCA1/BRCA2 Variant</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Genomics Variant
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Disrupted DNA Repair Gene:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{geneMutated}</strong></div>
        <div className="flex justify-between"><span>cDNA Sequence Variant:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dnaVariantCds}</strong></div>
        <div className="flex justify-between"><span>ACMG / AMP Pathogenicity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{acmgClassification}</strong></div>
        <div className="flex justify-between"><span>PARP Inhibitor (Olaparib) Benefit:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{parpInhibitorIndicated}</strong></div>
      </div>
    </div>
  );
};
