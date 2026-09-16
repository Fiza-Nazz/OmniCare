import React from "react";

export interface HospitalIncidentCommandHicsProps {
  hicsCommandLevel: string;
  incidentCommanderName: string;
  operationsSectionChief: string;
  incidentActionPlanActive: string;
  className?: string;
}

export const HospitalIncidentCommandHics: React.FC<HospitalIncidentCommandHicsProps> = ({
  hicsCommandLevel,
  incidentCommanderName,
  operationsSectionChief,
  incidentActionPlanActive,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hospital Incident Command (HICS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          HICS Command
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>HICS Activation Tier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hicsCommandLevel}</strong></div>
        <div className="flex justify-between"><span>Designated Incident Commander:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{incidentCommanderName}</strong></div>
        <div className="flex justify-between"><span>Operations Section Lead:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{operationsSectionChief}</strong></div>
        <div className="flex justify-between"><span>Operational Period IAP:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{incidentActionPlanActive}</strong></div>
      </div>
    </div>
  );
};
