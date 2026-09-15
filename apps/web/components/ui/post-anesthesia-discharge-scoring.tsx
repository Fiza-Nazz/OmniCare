import React from "react";

export interface PostAnesthesiaDischargeScoringProps {
  vitalSignsScore: number;
  ambulationScore: number;
  nauseaScore: number;
  surgicalBleedingScore: number;
  totalPadss: number;
  className?: string;
}

export const PostAnesthesiaDischargeScoring: React.FC<PostAnesthesiaDischargeScoringProps> = ({
  vitalSignsScore,
  ambulationScore,
  nauseaScore,
  surgicalBleedingScore,
  totalPadss,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">PADSS Ambulatory Discharge Score</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Same-Day Discharge
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Vital Stability:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${vitalSignsScore} / 2`}</strong></div>
        <div className="flex justify-between"><span>Steady Ambulation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${ambulationScore} / 2`}</strong></div>
        <div className="flex justify-between"><span>Nausea / Emesis Control:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${nauseaScore} / 2`}</strong></div>
        <div className="flex justify-between"><span>Home Readiness PADSS:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalPadss} / 10`}</strong></div>
      </div>
    </div>
  );
};
