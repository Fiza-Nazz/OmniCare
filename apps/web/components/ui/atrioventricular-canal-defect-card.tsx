import React from "react";

export interface AtrioventricularCanalDefectCardProps {
  associatedDownSyndrome: string;
  commonAvValveRegurgitation: string;
  q2pQsShuntFraction: number;
  plannedTwoPatchRepairAgeMonths: number;
  className?: string;
}

export const AtrioventricularCanalDefectCard: React.FC<AtrioventricularCanalDefectCardProps> = ({
  associatedDownSyndrome,
  commonAvValveRegurgitation,
  q2pQsShuntFraction,
  plannedTwoPatchRepairAgeMonths,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Complete AV Canal (AVSD / Trisomy 21)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Congenital AVSD
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Trisomy 21 Association:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{associatedDownSyndrome}</strong></div>
        <div className="flex justify-between"><span>Common AV Valve Insufficiency:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{commonAvValveRegurgitation}</strong></div>
        <div className="flex justify-between"><span>High-Flow Shunt Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${q2pQsShuntFraction}:1`}</strong></div>
        <div className="flex justify-between"><span>Surgical Repair Schedule:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${plannedTwoPatchRepairAgeMonths} Months of Age`}</strong></div>
      </div>
    </div>
  );
};
