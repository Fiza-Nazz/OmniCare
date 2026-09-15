import React from "react";

export interface SedationHolidayProtocolProps {
  patientAwake: boolean;
  followingCommands: boolean;
  satSafetyScreenPassed: boolean;
  trialDurationMinutes: number;
  className?: string;
}

export const SedationHolidayProtocol: React.FC<SedationHolidayProtocolProps> = ({
  patientAwake,
  followingCommands,
  satSafetyScreenPassed,
  trialDurationMinutes,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Daily SAT Sedation Holiday</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${satSafetyScreenPassed ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
          {satSafetyScreenPassed ? "Screen Passed" : "Safety Screen Failed"}
        </span>
      </div>
      <div className="mt-3 space-y-1 text-slate-600 dark:text-slate-400">
        <p>• Patient Arousal: {patientAwake ? "Awake & Interactive ✓" : "Somnolent"}</p>
        <p>• Commands Followed: {followingCommands ? "Yes (Simple Motor Commands) ✓" : "Unable to follow"}</p>
        <p>• Sedation Off Duration: <strong>{trialDurationMinutes} minutes</strong></p>
      </div>
    </div>
  );
};
