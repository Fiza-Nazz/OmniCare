import React from "react";

export interface NeonatalDischargeCarSeatTestProps {
  durationMinutes: number;
  lowestHeartRate: number;
  lowestSpo2: number;
  testResult: string;
  className?: string;
}

export const NeonatalDischargeCarSeatTest: React.FC<NeonatalDischargeCarSeatTestProps> = ({
  durationMinutes,
  lowestHeartRate,
  lowestSpo2,
  testResult,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Car Seat Tolerance Challenge</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Discharge Screening
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Challenge Duration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${durationMinutes} / 90 Minutes`}</strong></div>
        <div className="flex justify-between"><span>Heart Rate Nadir:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lowestHeartRate} bpm`}</strong></div>
        <div className="flex justify-between"><span>Oxygen Saturation Nadir:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lowestSpo2}%`}</strong></div>
        <div className="flex justify-between"><span>Discharge Eligibility:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{testResult}</strong></div>
      </div>
    </div>
  );
};
