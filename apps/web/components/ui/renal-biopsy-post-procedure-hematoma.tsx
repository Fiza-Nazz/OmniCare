import React from "react";

export interface RenalBiopsyPostProcedureHematomaProps {
  postBiopsyBedrestHours: number;
  serialHematocritDrop: number;
  grossHematuriaPresent: string;
  bedsideUltrasoundHematoma: string;
  className?: string;
}

export const RenalBiopsyPostProcedureHematoma: React.FC<RenalBiopsyPostProcedureHematomaProps> = ({
  postBiopsyBedrestHours,
  serialHematocritDrop,
  grossHematuriaPresent,
  bedsideUltrasoundHematoma,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Post-Renal Biopsy Surveillance</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Biopsy Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Strict Supine Bedrest:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${postBiopsyBedrestHours} / 6 Hours`}</strong></div>
        <div className="flex justify-between"><span>Serial Hematocrit Variation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serialHematocritDrop}% Shift`}</strong></div>
        <div className="flex justify-between"><span>Gross Macroscopic Hematuria:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{grossHematuriaPresent}</strong></div>
        <div className="flex justify-between"><span>Perinephric Hematoma Scan:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bedsideUltrasoundHematoma}</strong></div>
      </div>
    </div>
  );
};
