import React from "react";

export interface IntraoperativeNeuromonitoringCardProps {
  ssepAmplitudePercent: number;
  mepSignalStatus: string;
  baselineComparison: string;
  surgeonAlertTriggered: string;
  className?: string;
}

export const IntraoperativeNeuromonitoringCard: React.FC<IntraoperativeNeuromonitoringCardProps> = ({
  ssepAmplitudePercent,
  mepSignalStatus,
  baselineComparison,
  surgeonAlertTriggered,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Intraoperative Neuromonitoring</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          IONM Neuro
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>SSEP Amplitude Preservation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${ssepAmplitudePercent}% of Baseline`}</strong></div>
        <div className="flex justify-between"><span>Motor Evoked Potentials:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{mepSignalStatus}</strong></div>
        <div className="flex justify-between"><span>Signal Morphology:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{baselineComparison}</strong></div>
        <div className="flex justify-between"><span>Surgeon Pause Warning:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{surgeonAlertTriggered}</strong></div>
      </div>
    </div>
  );
};
