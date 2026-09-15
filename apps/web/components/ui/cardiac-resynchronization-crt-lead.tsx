import React from "react";

export interface CardiacResynchronizationCrtLeadProps {
  biventricularPacingPercent: number;
  lvPacingThresholdVolts: number;
  qrsDurationPostPaceMs: number;
  phrenicNerveStimulation: string;
  className?: string;
}

export const CardiacResynchronizationCrtLead: React.FC<CardiacResynchronizationCrtLeadProps> = ({
  biventricularPacingPercent,
  lvPacingThresholdVolts,
  qrsDurationPostPaceMs,
  phrenicNerveStimulation,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CRT Biventricular Pacing</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Electrophysiology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>BiV Pacing Percentage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${biventricularPacingPercent}% (&gt;98% goal)`}</strong></div>
        <div className="flex justify-between"><span>LV Capture Threshold:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lvPacingThresholdVolts} V @ 0.4ms`}</strong></div>
        <div className="flex justify-between"><span>Post-Pacing QRS Width:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${qrsDurationPostPaceMs} ms`}</strong></div>
        <div className="flex justify-between"><span>Diaphragmatic Twitching:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{phrenicNerveStimulation}</strong></div>
      </div>
    </div>
  );
};
