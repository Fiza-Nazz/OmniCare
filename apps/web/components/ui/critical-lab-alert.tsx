import React from "react";

export interface CriticalLabAlertProps {
  testName: string;
  panicValue: string;
  readBackCompletedBy: string;
  physicianNotified: string;
  notificationTime: string;
  className?: string;
}

export const CriticalLabAlert: React.FC<CriticalLabAlertProps> = ({
  testName,
  panicValue,
  readBackCompletedBy,
  physicianNotified,
  notificationTime,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-rose-300 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-950/40 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="rounded bg-rose-600 px-2 py-0.5 text-xs font-black uppercase text-white">
          PANIC LAB VALUE
        </span>
        <time className="text-xs font-mono text-rose-900 dark:text-rose-300">{notificationTime}</time>
      </div>
      <div className="mt-2">
        <h4 className="text-sm font-bold text-rose-900 dark:text-rose-100">{testName}: <span className="font-mono font-black">{panicValue}</span></h4>
        <p className="text-xs text-rose-700 dark:text-rose-300 mt-1">Read-back verified by: <strong>{readBackCompletedBy}</strong></p>
        <p className="text-xs text-rose-700 dark:text-rose-300">Physician Notified: <strong>{physicianNotified}</strong></p>
      </div>
    </div>
  );
};
