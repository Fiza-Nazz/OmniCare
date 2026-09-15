import React from "react";

export interface StemiDoorToBalloonTimerProps {
  edArrivalTime: string;
  cathLabActivationTime: string;
  balloonInflationTime: string;
  totalMinutes: number;
  className?: string;
}

export const StemiDoorToBalloonTimer: React.FC<StemiDoorToBalloonTimerProps> = ({
  edArrivalTime,
  cathLabActivationTime,
  balloonInflationTime,
  totalMinutes,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">STEMI Door-to-Balloon Timer</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          STEMI Performance
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Emergency Department Door:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{edArrivalTime}</strong></div>
        <div className="flex justify-between"><span>Code STEMI Activation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cathLabActivationTime}</strong></div>
        <div className="flex justify-between"><span>First Balloon / Wire Cross:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{balloonInflationTime}</strong></div>
        <div className="flex justify-between"><span>Door-to-Balloon Metric:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalMinutes} min (&lt;90m target)`}</strong></div>
      </div>
    </div>
  );
};
