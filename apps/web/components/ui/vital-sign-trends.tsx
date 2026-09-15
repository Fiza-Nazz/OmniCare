import React from "react";

export interface VitalSignTrendsProps {
  heartRate: number;
  spo2: number;
  mapMmHg: number;
  temperatureF: number;
  className?: string;
}

export const VitalSignTrends: React.FC<VitalSignTrendsProps> = ({
  heartRate,
  spo2,
  mapMmHg,
  temperatureF,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Multi-Parameter Vitals Quick-View</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
        <div className="rounded-lg bg-rose-50 p-2 dark:bg-rose-950/30">
          <span className="text-rose-600 font-semibold">Heart Rate</span>
          <p className="text-lg font-black text-rose-800 dark:text-rose-200">{heartRate} bpm</p>
        </div>
        <div className="rounded-lg bg-blue-50 p-2 dark:bg-blue-950/30">
          <span className="text-blue-600 font-semibold">SpO2</span>
          <p className="text-lg font-black text-blue-800 dark:text-blue-200">{spo2}%</p>
        </div>
        <div className="rounded-lg bg-emerald-50 p-2 dark:bg-emerald-950/30">
          <span className="text-emerald-600 font-semibold">MAP</span>
          <p className="text-lg font-black text-emerald-800 dark:text-emerald-200">{mapMmHg} mmHg</p>
        </div>
        <div className="rounded-lg bg-amber-50 p-2 dark:bg-amber-950/30">
          <span className="text-amber-600 font-semibold">Temp</span>
          <p className="text-lg font-black text-amber-800 dark:text-amber-200">{temperatureF}°F</p>
        </div>
      </div>
    </div>
  );
};
