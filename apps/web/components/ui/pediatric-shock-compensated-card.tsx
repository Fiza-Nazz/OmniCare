import React from "react";

export interface PediatricShockCompensatedCardProps {
  systolicBpMmHg: number;
  heartRateBpm: number;
  capillaryRefillSec: number;
  mentalStatus: string;
  className?: string;
}

export const PediatricShockCompensatedCard: React.FC<PediatricShockCompensatedCardProps> = ({
  systolicBpMmHg,
  heartRateBpm,
  capillaryRefillSec,
  mentalStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Pediatric Shock Stratification</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Hemodynamic Shock
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Systolic BP:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${systolicBpMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Compensatory Heart Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${heartRateBpm} bpm`}</strong></div>
        <div className="flex justify-between"><span>Capillary Refill:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${capillaryRefillSec}s`}</strong></div>
        <div className="flex justify-between"><span>Neurologic Responsiveness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{mentalStatus}</strong></div>
      </div>
    </div>
  );
};
