import React from "react";

export interface NeonatalIncubatorControllerProps {
  airTempC: number;
  skinTempC: number;
  humidityPercent: number;
  servoControlActive: boolean;
  className?: string;
}

export const NeonatalIncubatorController: React.FC<NeonatalIncubatorControllerProps> = ({
  airTempC,
  skinTempC,
  humidityPercent,
  servoControlActive,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">NICU Isolette Environment</h4>
        <span className="rounded bg-emerald-100 px-2 py-0.5 text-emerald-800 font-bold">
          {servoControlActive ? "Servo Skin Mode Active ✓" : "Manual Mode"}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Skin Temp</span>
          <p className="font-bold text-base text-slate-800 dark:text-slate-200">{skinTempC}°C</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Air Temp</span>
          <p className="font-bold text-base text-slate-800 dark:text-slate-200">{airTempC}°C</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Humidity</span>
          <p className="font-bold text-base text-blue-600">{humidityPercent}%</p>
        </div>
      </div>
    </div>
  );
};
