import React from "react";

export interface PostOpNauseaVomitingApfelProps {
  femaleGender: string;
  nonSmoker: string;
  historyPonvMotion: string;
  totalApfelPoints: number;
  className?: string;
}

export const PostOpNauseaVomitingApfel: React.FC<PostOpNauseaVomitingApfelProps> = ({
  femaleGender,
  nonSmoker,
  historyPonvMotion,
  totalApfelPoints,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Apfel Simplified PONV Risk</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          PONV Prevention
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Female Gender (+1):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{femaleGender}</strong></div>
        <div className="flex justify-between"><span>Non-Smoking (+1):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{nonSmoker}</strong></div>
        <div className="flex justify-between"><span>History of Motion/PONV:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{historyPonvMotion}</strong></div>
        <div className="flex justify-between"><span>Cumulative Apfel Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalApfelPoints} / 4`}</strong></div>
      </div>
    </div>
  );
};
