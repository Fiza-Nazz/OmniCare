import React from "react";

export interface Milestone600BannerProps {
  totalPrsMerged: number;
  totalComponentsCreated: number;
  leadArchitect: string;
  milestoneStatus: string;
  className?: string;
}

export const Milestone600Banner: React.FC<Milestone600BannerProps> = ({
  totalPrsMerged,
  totalComponentsCreated,
  leadArchitect,
  milestoneStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">OmniCare Milestone #600 Celebration Banner</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Milestone #600
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Total Merged Pull Requests:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalPrsMerged} Merged PRs`}</strong></div>
        <div className="flex justify-between"><span>Clinical UI Components:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalComponentsCreated} Components`}</strong></div>
        <div className="flex justify-between"><span>Lead Architect & Reviewer:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{leadArchitect}</strong></div>
        <div className="flex justify-between"><span>Pipeline Milestone:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{milestoneStatus}</strong></div>
      </div>
    </div>
  );
};
