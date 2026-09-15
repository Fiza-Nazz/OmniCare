import React from "react";

export interface PediatricFluidHollidaySegarProps {
  weightKg: number;
  className?: string;
}

export const PediatricFluidHollidaySegar: React.FC<PediatricFluidHollidaySegarProps> = ({
  weightKg,
  className = "",
}) => {
  let hourlyRate = 0;
  if (weightKg <= 10) {
    hourlyRate = weightKg * 4;
  } else if (weightKg <= 20) {
    hourlyRate = 40 + (weightKg - 10) * 2;
  } else {
    hourlyRate = 60 + (weightKg - 20) * 1;
  }

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Holliday-Segar 4-2-1 Maintenance IV</h4>
        <span className="text-slate-400">Wt: {weightKg} kg</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="text-slate-400">Hourly Maintenance</span>
          <p className="text-xl font-black text-blue-600 dark:text-blue-400">{hourlyRate} mL/hr</p>
        </div>
        <div className="text-right">
          <span className="text-slate-400">24-Hour Total</span>
          <p className="text-xl font-black text-slate-800 dark:text-slate-200">{hourlyRate * 24} mL/day</p>
        </div>
      </div>
    </div>
  );
};
