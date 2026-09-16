import React from "react";

export interface CarotidEndarterectomyStumpPressureProps {
  clampedIcaStumpPressureMmHg: number;
  javidShuntRequired: string;
  eegWaveformSlowing: string;
  transientIschemicRecovery: string;
  className?: string;
}

export const CarotidEndarterectomyStumpPressure: React.FC<CarotidEndarterectomyStumpPressureProps> = ({
  clampedIcaStumpPressureMmHg,
  javidShuntRequired,
  eegWaveformSlowing,
  transientIschemicRecovery,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Carotid Stump Pressure & Shunting</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Vascular Surgery
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>ICA Back-Pressure (Stump):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${clampedIcaStumpPressureMmHg} mmHg (&lt;50 shunt)`}</strong></div>
        <div className="flex justify-between"><span>Intraluminal Javid Shunt:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{javidShuntRequired}</strong></div>
        <div className="flex justify-between"><span>Intraoperative EEG Symmetry:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{eegWaveformSlowing}</strong></div>
        <div className="flex justify-between"><span>Post-Reconstruction Flow:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{transientIschemicRecovery}</strong></div>
      </div>
    </div>
  );
};
