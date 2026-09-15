import React from "react";

export interface TroponinReading {
  hourLabel: string;
  valueNgL: number;
  isAbnormal: boolean;
}

export interface CardiacBiomarkerSeriesProps {
  readings: TroponinReading[];
  className?: string;
}

export const CardiacBiomarkerSeries: React.FC<CardiacBiomarkerSeriesProps> = ({ readings, className = "" }) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-3">Serial High-Sensitivity Troponin I</h4>
      <div className="grid grid-cols-3 gap-3 text-center">
        {readings.map((r, idx) => (
          <div key={idx} className="rounded-lg bg-slate-50 p-2 dark:bg-slate-800">
            <span className="text-slate-400">{r.hourLabel}</span>
            <p className={`text-base font-bold ${r.isAbnormal ? "text-rose-600" : "text-slate-800 dark:text-slate-200"}`}>
              {r.valueNgL} ng/L
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
