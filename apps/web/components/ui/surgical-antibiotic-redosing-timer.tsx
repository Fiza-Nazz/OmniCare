import React from "react";

export interface SurgicalAntibioticRedosingTimerProps {
  primaryDoseTime: string;
  redoseDueTime: string;
  halfLifeIntervalHours: number;
  redoseAdministered: string;
  className?: string;
}

export const SurgicalAntibioticRedosingTimer: React.FC<SurgicalAntibioticRedosingTimerProps> = ({
  primaryDoseTime,
  redoseDueTime,
  halfLifeIntervalHours,
  redoseAdministered,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cefazolin Intraoperative Redosing</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Infection Control
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Initial Induction Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{primaryDoseTime}</strong></div>
        <div className="flex justify-between"><span>Target Redose Deadline:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{redoseDueTime}</strong></div>
        <div className="flex justify-between"><span>Antimicrobial Interval:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${halfLifeIntervalHours} Hours`}</strong></div>
        <div className="flex justify-between"><span>Redosing Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{redoseAdministered}</strong></div>
      </div>
    </div>
  );
};
