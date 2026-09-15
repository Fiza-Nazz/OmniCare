import React from "react";

export interface GrowthChartSummaryProps {
  heightPercentile: number;
  weightPercentile: number;
  bmiPercentile: number;
  ageMonths: number;
  className?: string;
}

export const GrowthChartSummary: React.FC<GrowthChartSummaryProps> = ({
  heightPercentile,
  weightPercentile,
  bmiPercentile,
  ageMonths,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Growth Percentiles</h4>
        <span className="text-xs text-slate-400 font-medium">Age: {ageMonths} mos</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800">
          <span className="text-[11px] font-semibold text-slate-500">Height</span>
          <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{heightPercentile}%</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800">
          <span className="text-[11px] font-semibold text-slate-500">Weight</span>
          <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{weightPercentile}%</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800">
          <span className="text-[11px] font-semibold text-slate-500">BMI</span>
          <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{bmiPercentile}%</p>
        </div>
      </div>
    </div>
  );
};
