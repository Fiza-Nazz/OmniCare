import React from "react";

export interface NursingShiftReportProps {
  patientName: string;
  roomBed: string;
  codeStatus: string;
  allergies: string[];
  ivAccess: string;
  telemetryRhythm: string;
  dietOrder: string;
  className?: string;
}

export const NursingShiftReport: React.FC<NursingShiftReportProps> = ({
  patientName,
  roomBed,
  codeStatus,
  allergies,
  ivAccess,
  telemetryRhythm,
  dietOrder,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <div>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">{patientName}</h4>
          <span className="text-slate-400">Bed: {roomBed}</span>
        </div>
        <span className="rounded bg-purple-100 px-2 py-0.5 font-bold text-purple-800 dark:bg-purple-950 dark:text-purple-300">
          {codeStatus}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <p><strong className="text-slate-500">IV Access:</strong> {ivAccess}</p>
        <p><strong className="text-slate-500">Telemetry:</strong> {telemetryRhythm}</p>
        <p><strong className="text-slate-500">Diet:</strong> {dietOrder}</p>
        <p><strong className="text-slate-500">Allergies:</strong> {allergies.join(", ") || "NKDA"}</p>
      </div>
    </div>
  );
};
