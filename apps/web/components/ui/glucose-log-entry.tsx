import React from "react";

export interface GlucoseLogEntryProps {
  readingMgDl: number;
  context: "Fasting" | "Pre-Meal" | "Post-Meal" | "Bedtime";
  timestamp: string;
  insulinAdministeredUnits?: number;
  className?: string;
}

export const GlucoseLogEntry: React.FC<GlucoseLogEntryProps> = ({
  readingMgDl,
  context,
  timestamp,
  insulinAdministeredUnits,
  className = "",
}) => {
  const isHypo = readingMgDl < 70;
  const isHyper = readingMgDl > 180;

  return (
    <div className={`flex items-center justify-between py-2.5 px-4 border-b border-slate-100 dark:border-slate-800 text-xs ${className}`}>
      <div className="flex items-center gap-3">
        <span className={`text-base font-bold ${isHypo ? "text-rose-600" : isHyper ? "text-amber-600" : "text-emerald-600"}`}>
          {readingMgDl} <span className="text-[10px] text-slate-400">mg/dL</span>
        </span>
        <span className="rounded bg-slate-100 px-2 py-0.5 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {context}
        </span>
      </div>
      <div className="flex items-center gap-4">
        {insulinAdministeredUnits && (
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {insulinAdministeredUnits}u Regular Insulin
          </span>
        )}
        <time className="text-slate-400">{timestamp}</time>
      </div>
    </div>
  );
};
