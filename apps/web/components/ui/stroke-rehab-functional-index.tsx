import React from "react";

export interface StrokeRehabFunctionalIndexProps {
  totalBarthelScore: number; // 0 - 100
  evaluatedByPtOt: string;
  evaluationDate: string;
  className?: string;
}

export const StrokeRehabFunctionalIndex: React.FC<StrokeRehabFunctionalIndexProps> = ({
  totalBarthelScore,
  evaluatedByPtOt,
  evaluationDate,
  className = "",
}) => {
  const dependency =
    totalBarthelScore < 20 ? "Total Dependency" : totalBarthelScore < 60 ? "Severe Dependency" : totalBarthelScore < 90 ? "Moderate Dependency" : "Slight / Independent";

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Barthel Index of ADLs (Rehab)</h4>
        <span className="font-mono font-bold text-blue-600 text-base">{totalBarthelScore}/100</span>
      </div>
      <div className="mt-2 flex items-center justify-between text-slate-600 dark:text-slate-400">
        <span>Status: <strong className="text-slate-800 dark:text-slate-200">{dependency}</strong></span>
        <span>Therapist: {evaluatedByPtOt} ({evaluationDate})</span>
      </div>
    </div>
  );
};
