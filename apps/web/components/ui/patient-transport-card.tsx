import React from "react";

export interface PatientTransportCardProps {
  patientName: string;
  fromLocation: string;
  toLocation: string;
  mode: "wheelchair" | "stretcher" | "bed";
  needsOxygen: boolean;
  needsTelemetry: boolean;
  priority: "routine" | "stat";
  className?: string;
}

export const PatientTransportCard: React.FC<PatientTransportCardProps> = ({
  patientName,
  fromLocation,
  toLocation,
  mode,
  needsOxygen,
  needsTelemetry,
  priority,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold">{patientName}</h4>
        <span className={`rounded px-2 py-0.5 text-xs font-bold uppercase ${priority === "stat" ? "bg-rose-100 text-rose-800" : "bg-slate-100 text-slate-700"}`}>
          {priority} Transport
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 font-semibold">{fromLocation} ➔ {toLocation}</p>
      <div className="mt-2 flex gap-2 text-[11px] text-slate-500">
        <span className="capitalize">Mode: {mode}</span>
        {needsOxygen && <span>• O2 Tank Required</span>}
        {needsTelemetry && <span>• Telemetry Monitor</span>}
      </div>
    </div>
  );
};
