import React from "react";

export interface CentralLineBundleProps {
  lineType: string;
  insertedDate: string;
  daysInPlace: number;
  dailyNecessityConfirmed: boolean;
  dressingIntact: boolean;
  className?: string;
}

export const CentralLineBundle: React.FC<CentralLineBundleProps> = ({
  lineType,
  insertedDate,
  daysInPlace,
  dailyNecessityConfirmed,
  dressingIntact,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Central Line (CLABSI) Bundle</h4>
        <span className="text-xs font-mono text-slate-500">Day {daysInPlace} ({lineType})</span>
      </div>
      <div className="mt-3 space-y-1 text-xs">
        <p>Inserted on: {insertedDate}</p>
        <p>Daily Need Documented: {dailyNecessityConfirmed ? "Yes ✓" : "Pending MD Review ✗"}</p>
        <p>Biopatch & Dressing Intact: {dressingIntact ? "Clean & Dry ✓" : "Needs Dressing Change ✗"}</p>
      </div>
    </div>
  );
};
