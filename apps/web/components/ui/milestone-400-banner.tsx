import React from "react";

export interface Milestone400BannerProps {
  totalPrsMerged: number;
  ciChecksPassingRate: string;
  architectReviewer: string;
  celebrationMessage: string;
  className?: string;
}

export const Milestone400Banner: React.FC<Milestone400BannerProps> = ({
  totalPrsMerged,
  ciChecksPassingRate,
  architectReviewer,
  celebrationMessage,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">OmniCare Milestone #400 Celebration</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Milestone #400
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Total Merged Pull Requests:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalPrsMerged} PRs`}</strong></div>
        <div className="flex justify-between"><span>CI Pipeline Pass Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ciChecksPassingRate}</strong></div>
        <div className="flex justify-between"><span>Lead Architect & Reviewer:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{architectReviewer}</strong></div>
        <div className="flex justify-between"><span>Achievement Milestone:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{celebrationMessage}</strong></div>
      </div>
    </div>
  );
};
