import React from "react";

export interface IntracranialPressureEvdDrainageProps {
  transducerReferenceAnatomy: string;
  buretteHeightCmH2O: number;
  hourlyCsfDrainageMl: number;
  evdWaveformCrisp: string;
  className?: string;
}

export const IntracranialPressureEvdDrainage: React.FC<IntracranialPressureEvdDrainageProps> = ({
  transducerReferenceAnatomy,
  buretteHeightCmH2O,
  hourlyCsfDrainageMl,
  evdWaveformCrisp,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">External Ventricular Drain (EVD)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neuro EVD
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Zero Reference Level:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{transducerReferenceAnatomy}</strong></div>
        <div className="flex justify-between"><span>Drainage Chamber Pop-Off:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${buretteHeightCmH2O} cmH2O`}</strong></div>
        <div className="flex justify-between"><span>Current Hour CSF Output:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hourlyCsfDrainageMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Pulsatile ICP Waveform:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{evdWaveformCrisp}</strong></div>
      </div>
    </div>
  );
};
