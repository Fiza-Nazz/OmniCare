import React from "react";

export interface SeizureLogCardProps {
  onsetTime: string;
  durationSeconds: number;
  seizureType: "Generalized Tonic-Clonic" | "Focal Impaired Awareness" | "Absence" | "Atonic";
  rescueMedGiven?: string;
  postIctalState: string;
  className?: string;
}

export const SeizureLogCard: React.FC<SeizureLogCardProps> = ({
  onsetTime,
  durationSeconds,
  seizureType,
  rescueMedGiven,
  postIctalState,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Seizure Event: {seizureType}</h4>
        <span className="font-mono text-rose-600 font-bold">{durationSeconds} seconds</span>
      </div>
      <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
        <p>Onset: {onsetTime}</p>
        {rescueMedGiven && <p className="font-semibold text-rose-700">Rescue: {rescueMedGiven}</p>}
        <p>Post-Ictal: {postIctalState}</p>
      </div>
    </div>
  );
};
