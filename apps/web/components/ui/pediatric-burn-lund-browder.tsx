import React from "react";

export interface PediatricBurnLundBrowderProps {
  patientAgeYears: number;
  headTbsaPercent: number;
  totalTbsaPercent: number;
  parklandFluidRequirement: string;
  className?: string;
}

export const PediatricBurnLundBrowder: React.FC<PediatricBurnLundBrowderProps> = ({
  patientAgeYears,
  headTbsaPercent,
  totalTbsaPercent,
  parklandFluidRequirement,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Lund-Browder Pediatric TBSA</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Burn Resuscitation
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Age Tier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${patientAgeYears} Years`}</strong></div>
        <div className="flex justify-between"><span>Head TBSA Allocation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${headTbsaPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Cumulative TBSA Burn:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalTbsaPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Parkland Fluid 24h:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{parklandFluidRequirement}</strong></div>
      </div>
    </div>
  );
};
