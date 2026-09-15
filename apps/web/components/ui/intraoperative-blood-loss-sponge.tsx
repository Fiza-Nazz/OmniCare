import React from "react";

export interface IntraoperativeBloodLossSpongeProps {
  wetSpongesWeightGrams: number;
  dryWeightGrams: number;
  suctionCanisterMl: number;
  totalEblMl: number;
  className?: string;
}

export const IntraoperativeBloodLossSponge: React.FC<IntraoperativeBloodLossSpongeProps> = ({
  wetSpongesWeightGrams,
  dryWeightGrams,
  suctionCanisterMl,
  totalEblMl,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Gravimetric Surgical Blood Loss</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          OR EBL
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Total Wet Sponge Mass:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${wetSpongesWeightGrams} g`}</strong></div>
        <div className="flex justify-between"><span>Dry Tare Baseline:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${dryWeightGrams} g`}</strong></div>
        <div className="flex justify-between"><span>Field Suction Cannister:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${suctionCanisterMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Composite Estimated Loss:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalEblMl} mL`}</strong></div>
      </div>
    </div>
  );
};
