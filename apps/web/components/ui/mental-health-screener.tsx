import React from "react";

export interface MentalHealthScreenerProps {
  screenerType: "PHQ-9" | "GAD-7";
  totalScore: number;
  severityTier: string;
  screenedDate: string;
  className?: string;
}

export const MentalHealthScreener: React.FC<MentalHealthScreenerProps> = ({
  screenerType,
  totalScore,
  severityTier,
  screenedDate,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{screenerType} Screener</h4>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {severityTier}
        </span>
      </div>
      <div className="mt-2 flex items-baseline justify-between text-xs">
        <span className="text-lg font-black text-blue-600">{totalScore} Points</span>
        <time className="text-slate-400">{screenedDate}</time>
      </div>
    </div>
  );
};
