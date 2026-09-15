import React from "react";

export interface EndotrachealCuffPressureProps {
  cuffPressureCmH2O: number;
  measuredByRt: string;
  timestamp: string;
  className?: string;
}

export const EndotrachealCuffPressure: React.FC<EndotrachealCuffPressureProps> = ({
  cuffPressureCmH2O,
  measuredByRt,
  timestamp,
  className = "",
}) => {
  const isSafe = cuffPressureCmH2O >= 20 && cuffPressureCmH2O <= 30;

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${isSafe ? "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900" : "border-rose-400 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/40"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">ETT Cuff Manometer</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isSafe ? "bg-emerald-100 text-emerald-800" : "bg-rose-600 text-white"}`}>
          {cuffPressureCmH2O} cmH2O ({isSafe ? "Safe Range" : "OUT OF TARGET 20-30"})
        </span>
      </div>
      <div className="mt-2 flex justify-between text-slate-500">
        <span>Verified by: {measuredByRt}</span>
        <time>{timestamp}</time>
      </div>
    </div>
  );
};
