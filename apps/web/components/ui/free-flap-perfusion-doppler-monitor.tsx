import React from "react";

export interface FreeFlapPerfusionDopplerMonitorProps {
  arterialDopplerSignalQuality: string;
  venousHumSignalAudible: string;
  capillaryRefillTimeSeconds: number;
  flapReexplorationTriggered: string;
  className?: string;
}

export const FreeFlapPerfusionDopplerMonitor: React.FC<FreeFlapPerfusionDopplerMonitorProps> = ({
  arterialDopplerSignalQuality,
  venousHumSignalAudible,
  capillaryRefillTimeSeconds,
  flapReexplorationTriggered,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Microvascular Free Flap Perfusion</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Reconstructive Microsurgery
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Arterial Doppler Waveform:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{arterialDopplerSignalQuality}</strong></div>
        <div className="flex justify-between"><span>Continuous Venous Hum:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{venousHumSignalAudible}</strong></div>
        <div className="flex justify-between"><span>Tissue Capillary Refill:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${capillaryRefillTimeSeconds} s (1-2s target)`}</strong></div>
        <div className="flex justify-between"><span>Immediate OR Take-Back:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{flapReexplorationTriggered}</strong></div>
      </div>
    </div>
  );
};
