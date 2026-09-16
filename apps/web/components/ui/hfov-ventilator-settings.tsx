import React from "react";

export interface HfovVentilatorSettingsProps {
  meanAirwayPressureCmH2O: number;
  frequencyHz: number;
  amplitudeDeltaPCmH2O: number;
  targetPaco2Range: string;
  className?: string;
}

export const HfovVentilatorSettings: React.FC<HfovVentilatorSettingsProps> = ({
  meanAirwayPressureCmH2O,
  frequencyHz,
  amplitudeDeltaPCmH2O,
  targetPaco2Range,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">High-Frequency Oscillation (HFOV)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Mechanical Ventilation
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Mean Airway Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${meanAirwayPressureCmH2O} cmH2O`}</strong></div>
        <div className="flex justify-between"><span>Frequency:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${frequencyHz} Hz (×60 bpm)`}</strong></div>
        <div className="flex justify-between"><span>Amplitude (ΔP):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${amplitudeDeltaPCmH2O} cmH2O`}</strong></div>
        <div className="flex justify-between"><span>Target PaCO2:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{targetPaco2Range}</strong></div>
      </div>
    </div>
  );
};
