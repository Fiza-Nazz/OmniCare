import React from "react";

export interface BronchiolitisObliteransFev1DeclineProps {
  baselineBestFev1Liters: number;
  currentFev1Liters: number;
  percentDropFromBaseline: number;
  cladPhenotypeCategory: string;
  className?: string;
}

export const BronchiolitisObliteransFev1Decline: React.FC<BronchiolitisObliteransFev1DeclineProps> = ({
  baselineBestFev1Liters,
  currentFev1Liters,
  percentDropFromBaseline,
  cladPhenotypeCategory,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Chronic Lung Rejection (CLAD / BOS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          CLAD BOS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Post-Transplant Best FEV1:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${baselineBestFev1Liters} L`}</strong></div>
        <div className="flex justify-between"><span>Current Spirometry FEV1:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${currentFev1Liters} L`}</strong></div>
        <div className="flex justify-between"><span>Irreversible Decline Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${percentDropFromBaseline}% Drop (&gt;20% BOS)`}</strong></div>
        <div className="flex justify-between"><span>CLAD Phenotype Classification:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cladPhenotypeCategory}</strong></div>
      </div>
    </div>
  );
};
