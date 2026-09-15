import React from "react";

export interface Flt3ItdTkdMutationAmlProps {
  flt3ItdAllelicRatio: number;
  npm1CoMutationPresent: string;
  elnRiskCategory: string;
  flt3InhibitorApproved: string;
  className?: string;
}

export const Flt3ItdTkdMutationAml: React.FC<Flt3ItdTkdMutationAmlProps> = ({
  flt3ItdAllelicRatio,
  npm1CoMutationPresent,
  elnRiskCategory,
  flt3InhibitorApproved,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">FLT3-ITD / TKD Acute Myeloid Leukemia</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          AML Molecular
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>FLT3-ITD Signal Allelic Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${flt3ItdAllelicRatio} (&gt;0.5 high burden)`}</strong></div>
        <div className="flex justify-between"><span>NPM1 Concurrent Mutation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{npm1CoMutationPresent}</strong></div>
        <div className="flex justify-between"><span>ELN 2022 Risk Stratification:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{elnRiskCategory}</strong></div>
        <div className="flex justify-between"><span>Targeted FLT3 TKI Midostaurin:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{flt3InhibitorApproved}</strong></div>
      </div>
    </div>
  );
};
