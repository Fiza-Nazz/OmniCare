import React from "react";

export interface SurgicalTimeOutWhoChecklistProps {
  patientIdentityConfirmed: string;
  operativeSiteMarked: string;
  antibioticsGivenIn60Min: string;
  fireRiskDiscussed: string;
  className?: string;
}

export const SurgicalTimeOutWhoChecklist: React.FC<SurgicalTimeOutWhoChecklistProps> = ({
  patientIdentityConfirmed,
  operativeSiteMarked,
  antibioticsGivenIn60Min,
  fireRiskDiscussed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">WHO Surgical Safety Time-Out</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          OR Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Patient Identity & Consent:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{patientIdentityConfirmed}</strong></div>
        <div className="flex justify-between"><span>Surgical Site Mark:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{operativeSiteMarked}</strong></div>
        <div className="flex justify-between"><span>Prophylactic Antibiotics:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{antibioticsGivenIn60Min}</strong></div>
        <div className="flex justify-between"><span>Surgical Fire Risk Briefing:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fireRiskDiscussed}</strong></div>
      </div>
    </div>
  );
};
