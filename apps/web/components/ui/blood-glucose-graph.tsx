import React from "react";

export interface GlucosePoint {
  day: string;
  value: number;
}

export interface BloodGlucoseGraphProps {
  points: GlucosePoint[];
  targetMin?: number;
  targetMax?: number;
  className?: string;
}

export const BloodGlucoseGraph: React.FC<BloodGlucoseGraphProps> = ({
  points,
  targetMin = 70,
  targetMax = 140,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800 mb-3">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">7-Day Glycemic Profile</h4>
        <span className="text-xs text-slate-400">Target: {targetMin} - {targetMax} mg/dL</span>
      </div>
      <div className="flex items-end gap-3 h-28 pt-4">
        {points.map((p, idx) => {
          const heightPercent = Math.min(100, Math.max(10, (p.value / 250) * 100));
          const isOutOfRange = p.value < targetMin || p.value > targetMax;
          return (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1">
              <span className={`text-[10px] font-bold ${isOutOfRange ? "text-rose-600" : "text-slate-600 dark:text-slate-300"}`}>
                {p.value}
              </span>
              <div
                className={`w-full rounded-t transition-all ${isOutOfRange ? "bg-rose-500" : "bg-blue-500"}`}
                style={{ height: `${heightPercent}%` }}
              />
              <span className="text-[10px] text-slate-400 mt-1">{p.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
