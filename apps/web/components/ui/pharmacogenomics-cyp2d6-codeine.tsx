import React from "react";

export interface PharmacogenomicsCyp2d6CodeineProps {
  cyp2d6Diplotype: string;
  metabolizerPhenotype: string;
  codeineTramadolContraindicated: string;
  alternativeAnalgesicRecommended: string;
  className?: string;
}

export const PharmacogenomicsCyp2d6Codeine: React.FC<PharmacogenomicsCyp2d6CodeineProps> = ({
  cyp2d6Diplotype,
  metabolizerPhenotype,
  codeineTramadolContraindicated,
  alternativeAnalgesicRecommended,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CYP2D6 Opioid Pharmacogenomics</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          PGx Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>CYP2D6 Allelic Diplotype:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cyp2d6Diplotype}</strong></div>
        <div className="flex justify-between"><span>Functional Metabolizer Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{metabolizerPhenotype}</strong></div>
        <div className="flex justify-between"><span>Codeine/Tramadol Safety:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{codeineTramadolContraindicated}</strong></div>
        <div className="flex justify-between"><span>Genotype-Directed Alternative:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{alternativeAnalgesicRecommended}</strong></div>
      </div>
    </div>
  );
};
