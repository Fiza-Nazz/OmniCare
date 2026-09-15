import React from "react";

export interface IsolationWardMapProps {
  roomNumber: string;
  pressureDeltaPa: number;
  achRate: number;
  hepaStatus: "normal" | "replace_filter";
  className?: string;
}

export const IsolationWardMap: React.FC<IsolationWardMapProps> = ({
  roomNumber,
  pressureDeltaPa,
  achRate,
  hepaStatus,
  className = "",
}) => {
  const isNegative = pressureDeltaPa < -2.5;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold">Negative Pressure Room {roomNumber}</h4>
        <span className={`rounded px-2 py-0.5 text-xs font-bold ${isNegative ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
          {isNegative ? "Seal Intact" : "PRESSURE LOSS"}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs">
        <span>Differential: <strong className="font-mono">{pressureDeltaPa} Pa</strong></span>
        <span>Ventilation: <strong>{achRate} ACH</strong></span>
        <span>HEPA: <strong className="capitalize">{hepaStatus.replace("_", " ")}</strong></span>
      </div>
    </div>
  );
};
