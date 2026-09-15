import React from "react";

export interface PostOpAldretePacuDischargeProps {
  activityScore: number;
  respirationScore: number;
  circulationScore: number;
  consciousnessScore: number;
  o2SatScore: number;
  totalAldrete: number;
  className?: string;
}

export const PostOpAldretePacuDischarge: React.FC<PostOpAldretePacuDischargeProps> = ({
  activityScore,
  respirationScore,
  circulationScore,
  consciousnessScore,
  o2SatScore,
  totalAldrete,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Modified Aldrete Score (PACU)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          PACU Discharge
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Activity (Voluntary):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${activityScore} / 2`}</strong></div>
        <div className="flex justify-between"><span>Respiration Pattern:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${respirationScore} / 2`}</strong></div>
        <div className="flex justify-between"><span>Hemodynamics (BP):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${circulationScore} / 2`}</strong></div>
        <div className="flex justify-between"><span>Composite Aldrete:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalAldrete} / 10`}</strong></div>
      </div>
    </div>
  );
};
