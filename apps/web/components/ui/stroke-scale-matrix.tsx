import React from "react";

export interface StrokeScaleMatrixProps {
  nihssScore: number;
  lastKnownWell: string;
  thrombolyticEligible: boolean;
  className?: string;
}

export const StrokeScaleMatrix: React.FC<StrokeScaleMatrixProps> = ({
  nihssScore,
  lastKnownWell,
  thrombolyticEligible,
  className = "",
}) => {
  const severity =
    nihssScore === 0 ? "No Stroke" : nihssScore <= 4 ? "Minor Stroke" : nihssScore <= 15 ? "Moderate Stroke" : nihssScore <= 20 ? "Moderate to Severe" : "Severe Stroke";

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">NIH Stroke Scale (NIHSS)</h4>
        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-black text-blue-800 dark:bg-blue-950 dark:text-blue-200">
          Score: {nihssScore}/42
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs">
        <div>
          <p className="font-semibold text-slate-800 dark:text-slate-200">{severity}</p>
          <span className="text-slate-400">Last Known Well: {lastKnownWell}</span>
        </div>
        <span className={`rounded px-2 py-0.5 text-xs font-bold ${thrombolyticEligible ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-600"}`}>
          {thrombolyticEligible ? "tPA Candidate Window Open" : "Outside Window"}
        </span>
      </div>
    </div>
  );
};
