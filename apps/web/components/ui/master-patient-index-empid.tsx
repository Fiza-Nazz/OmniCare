import React from "react";

export interface MasterPatientIndexEmpidProps {
  primaryEnterpriseMrn: string;
  candidateMatchScorePercent: number;
  demographicConflictDetected: string;
  resolutionAction: string;
  className?: string;
}

export const MasterPatientIndexEmpid: React.FC<MasterPatientIndexEmpidProps> = ({
  primaryEnterpriseMrn,
  candidateMatchScorePercent,
  demographicConflictDetected,
  resolutionAction,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Enterprise Master Patient Index (EMPI)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          EMPI Deduplication
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Enterprise Master ID (EMPI):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{primaryEnterpriseMrn}</strong></div>
        <div className="flex justify-between"><span>Probabilistic Match Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${candidateMatchScorePercent}%`}</strong></div>
        <div className="flex justify-between"><span>Conflict Field (DOB / Address):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{demographicConflictDetected}</strong></div>
        <div className="flex justify-between"><span>Identity Resolution Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{resolutionAction}</strong></div>
      </div>
    </div>
  );
};
