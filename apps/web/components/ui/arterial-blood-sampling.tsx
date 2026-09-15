import React from "react";

export interface ArterialBloodSamplingProps {
  lineSite: string;
  discardVolumeMl: number;
  closedSystemUsed: boolean;
  drawnBy: string;
  className?: string;
}

export const ArterialBloodSampling: React.FC<ArterialBloodSamplingProps> = ({
  lineSite,
  discardVolumeMl,
  closedSystemUsed,
  drawnBy,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Arterial Line Sampling: {lineSite}</h4>
        <span className="rounded bg-emerald-100 px-2 py-0.5 text-emerald-800 font-bold">
          {closedSystemUsed ? "VAMP Closed Loop ✓" : "Open Syringe"}
        </span>
      </div>
      <div className="mt-2 text-slate-600 dark:text-slate-400">
        <p>Blood Waste Returned: {discardVolumeMl} mL conserved</p>
        <p>Clinician: {drawnBy}</p>
      </div>
    </div>
  );
};
