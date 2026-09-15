import React from "react";

export interface AnesthesiaMacSedationMonitorProps {
  sedativeDoseRate: string;
  bisIndexValue: number;
  spontaneousBreathing: string;
  etco2Value: number;
  className?: string;
}

export const AnesthesiaMacSedationMonitor: React.FC<AnesthesiaMacSedationMonitorProps> = ({
  sedativeDoseRate,
  bisIndexValue,
  spontaneousBreathing,
  etco2Value,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Monitored Anesthesia Care (MAC)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Anesthesia MAC
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Active MAC Agent:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sedativeDoseRate}</strong></div>
        <div className="flex justify-between"><span>BIS Depth Index:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bisIndexValue}`}</strong></div>
        <div className="flex justify-between"><span>Spontaneous Airway:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{spontaneousBreathing}</strong></div>
        <div className="flex justify-between"><span>End-Tidal CO2:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${etco2Value} mmHg`}</strong></div>
      </div>
    </div>
  );
};
