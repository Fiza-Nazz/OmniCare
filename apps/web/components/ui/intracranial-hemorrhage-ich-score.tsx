import React from "react";

export interface IntracranialHemorrhageIchScoreProps {
  totalIchScore: number; // 0 - 6
  ichVolumeCm3: number;
  intraventricularHemorrhagePresent: boolean;
  className?: string;
}

export const IntracranialHemorrhageIchScore: React.FC<IntracranialHemorrhageIchScoreProps> = ({
  totalIchScore,
  ichVolumeCm3,
  intraventricularHemorrhagePresent,
  className = "",
}) => {
  const mortalityRates = ["0%", "13%", "26%", "72%", "97%", "100%", "100%"];
  const estimatedMortality = mortalityRates[totalIchScore] || "High";

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">ICH Score (Intracerebral Hemorrhage)</h4>
        <span className="font-mono font-bold text-rose-600 text-base">{totalIchScore}/6</span>
      </div>
      <div className="mt-2 flex items-center justify-between text-slate-600 dark:text-slate-400">
        <span>Estimated 30-Day Mortality: <strong className="text-slate-900 dark:text-white">{estimatedMortality}</strong></span>
        <span>Volume: {ichVolumeCm3} cm³ {intraventricularHemorrhagePresent && "(+IVH)"}</span>
      </div>
    </div>
  );
};
