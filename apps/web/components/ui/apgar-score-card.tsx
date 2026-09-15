import React from "react";

export interface ApgarScoreCardProps {
  oneMinuteScore: number;
  fiveMinuteScore: number;
  tenMinuteScore?: number;
  className?: string;
}

export const ApgarScoreCard: React.FC<ApgarScoreCardProps> = ({
  oneMinuteScore,
  fiveMinuteScore,
  tenMinuteScore,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Neonatal APGAR Assessment</h4>
      <div className="grid grid-cols-3 gap-3 text-center text-xs">
        <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800">
          <span className="text-slate-500 font-medium">1 Minute</span>
          <p className="text-lg font-black text-blue-600 dark:text-blue-400">{oneMinuteScore}/10</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800">
          <span className="text-slate-500 font-medium">5 Minute</span>
          <p className="text-lg font-black text-emerald-600 dark:text-emerald-400">{fiveMinuteScore}/10</p>
        </div>
        {tenMinuteScore !== undefined && (
          <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800">
            <span className="text-slate-500 font-medium">10 Minute</span>
            <p className="text-lg font-black text-slate-800 dark:text-slate-200">{tenMinuteScore}/10</p>
          </div>
        )}
      </div>
    </div>
  );
};
