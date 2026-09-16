import React from "react";

export interface DisasterCrisisStandardsOfCareProps {
  stateCscDeclarationActive: string;
  triageTeamBlindReview: string;
  appealsOmbudsmanPresent: string;
  palliativeComfortCareTransition: string;
  className?: string;
}

export const DisasterCrisisStandardsOfCare: React.FC<DisasterCrisisStandardsOfCareProps> = ({
  stateCscDeclarationActive,
  triageTeamBlindReview,
  appealsOmbudsmanPresent,
  palliativeComfortCareTransition,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Crisis Standards of Care (CSC)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Bioethics CSC
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>State Emergency Declaration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{stateCscDeclarationActive}</strong></div>
        <div className="flex justify-between"><span>Triage Allocation Team (Blind):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{triageTeamBlindReview}</strong></div>
        <div className="flex justify-between"><span>Ethics / Equity Ombudsman:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{appealsOmbudsmanPresent}</strong></div>
        <div className="flex justify-between"><span>Universal Palliative Support:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{palliativeComfortCareTransition}</strong></div>
      </div>
    </div>
  );
};
