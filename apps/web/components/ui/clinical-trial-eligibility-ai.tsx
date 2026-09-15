import React from "react";

export interface ClinicalTrialEligibilityAiProps {
  clinicalTrialNctId: string;
  matchingCriteriaMetPercent: number;
  unmetExclusionReason: string;
  investigatorNotificationStatus: string;
  className?: string;
}

export const ClinicalTrialEligibilityAi: React.FC<ClinicalTrialEligibilityAiProps> = ({
  clinicalTrialNctId,
  matchingCriteriaMetPercent,
  unmetExclusionReason,
  investigatorNotificationStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">AI Clinical Trial Matching</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Trial Matching
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>ClinicalTrials.gov NCT ID:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{clinicalTrialNctId}</strong></div>
        <div className="flex justify-between"><span>Protocol Criteria Match:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${matchingCriteriaMetPercent}% Fit`}</strong></div>
        <div className="flex justify-between"><span>Disqualifying Exclusion Flag:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{unmetExclusionReason}</strong></div>
        <div className="flex justify-between"><span>Principal Investigator Alert:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{investigatorNotificationStatus}</strong></div>
      </div>
    </div>
  );
};
