import React from "react";

export interface InsulinPumpStatusProps {
  currentGlucoseMgDl: number;
  trendArrow: "↑↑" | "↑" | "↗" | "→" | "↘" | "↓" | "↓↓";
  activeIobUnits: number;
  basalRateUnitsPerHour: number;
  reservoirUnitsRemaining: number;
  batteryPercent: number;
  className?: string;
}

export const InsulinPumpStatus: React.FC<InsulinPumpStatusProps> = ({
  currentGlucoseMgDl,
  trendArrow,
  activeIobUnits,
  basalRateUnitsPerHour,
  reservoirUnitsRemaining,
  batteryPercent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Insulin Pump & CGM Telemetry</h4>
        <span className="text-xs font-mono text-slate-400">🔋 {batteryPercent}%</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="text-2xl font-black text-blue-600 dark:text-blue-400">{currentGlucoseMgDl}</span>
          <span className="ml-1 text-sm font-bold">{trendArrow}</span>
          <p className="text-[10px] text-slate-400 uppercase tracking-wider">CGM Glucose (mg/dL)</p>
        </div>
        <div className="text-right text-xs space-y-1">
          <p className="text-slate-600 dark:text-slate-300">IOB: <strong className="font-bold text-slate-900 dark:text-white">{activeIobUnits}u</strong></p>
          <p className="text-slate-600 dark:text-slate-300">Basal: <strong>{basalRateUnitsPerHour}u/hr</strong></p>
          <p className="text-slate-400">Reservoir: {reservoirUnitsRemaining}u left</p>
        </div>
      </div>
    </div>
  );
};
