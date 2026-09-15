import React from "react";

export type InfiltrationGrade = 1 | 2 | 3 | 4;

export interface IvExtravasationCardProps {
  grade: InfiltrationGrade;
  vesicantDrugInvolved: boolean;
  antidoteGiven?: string;
  recommendedCare: string;
  className?: string;
}

export const IvExtravasationCard: React.FC<IvExtravasationCardProps> = ({
  grade,
  vesicantDrugInvolved,
  antidoteGiven,
  recommendedCare,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${vesicantDrugInvolved ? "border-rose-400 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/40" : "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/40"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">IV Infiltration Staging (Grade {grade}/4)</h4>
        {vesicantDrugInvolved && (
          <span className="rounded bg-rose-600 px-2 py-0.5 font-bold text-white uppercase text-[10px]">
            Vesicant Extravasation
          </span>
        )}
      </div>
      <p className="mt-2">{recommendedCare}</p>
      {antidoteGiven && <p className="mt-1 font-semibold">Antidote: {antidoteGiven}</p>}
    </div>
  );
};
