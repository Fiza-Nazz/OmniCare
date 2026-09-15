import React from "react";

export interface CentralVenousPressureCardProps {
  cvpMmHg: number;
  measuredAtEndExpiration: boolean;
  className?: string;
}

export const CentralVenousPressureCard: React.FC<CentralVenousPressureCardProps> = ({
  cvpMmHg,
  measuredAtEndExpiration,
  className = "",
}) => {
  const isTarget = cvpMmHg >= 8 && cvpMmHg <= 12;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Central Venous Pressure (CVP)</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isTarget ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"}`}>
          {cvpMmHg} mmHg ({isTarget ? "Euvolemic Target" : cvpMmHg < 8 ? "Preload Dependent" : "Hypervolemic"})
        </span>
      </div>
      <p className="mt-2 text-slate-500">End-expiration Zeroed: {measuredAtEndExpiration ? "Confirmed ✓" : "Pending"}</p>
    </div>
  );
};
