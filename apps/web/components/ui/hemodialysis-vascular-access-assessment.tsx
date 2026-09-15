import React from "react";

export interface HemodialysisVascularAccessAssessmentProps {
  accessType: string;
  anatomicalLocation: string;
  thrillStatus: string;
  bruitStatus: string;
  className?: string;
}

export const HemodialysisVascularAccessAssessment: React.FC<HemodialysisVascularAccessAssessmentProps> = ({
  accessType,
  anatomicalLocation,
  thrillStatus,
  bruitStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">AV Fistula / Graft Assessment</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Dialysis Access
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Access Type:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{accessType}</strong></div>
        <div className="flex justify-between"><span>Site Location:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{anatomicalLocation}</strong></div>
        <div className="flex justify-between"><span>Palpable Thrill:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{thrillStatus}</strong></div>
        <div className="flex justify-between"><span>Audible Bruit:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bruitStatus}</strong></div>
      </div>
    </div>
  );
};
