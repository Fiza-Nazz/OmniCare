import React from "react";

export interface PsoriaticArthritisDapsaScoreProps {
  dapsaNumericalScore: number;
  dactylitisSausageDigitPresent: string;
  leedsEnthesitisIndexScore: number;
  interleukin23InhibitorActive: string;
  className?: string;
}

export const PsoriaticArthritisDapsaScore: React.FC<PsoriaticArthritisDapsaScoreProps> = ({
  dapsaNumericalScore,
  dactylitisSausageDigitPresent,
  leedsEnthesitisIndexScore,
  interleukin23InhibitorActive,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Psoriatic Arthritis (DAPSA Activity)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Psoriatic Disease
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>DAPSA Total Index:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dapsaNumericalScore}</strong></div>
        <div className="flex justify-between"><span>Active Dactylitis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dactylitisSausageDigitPresent}</strong></div>
        <div className="flex justify-between"><span>Leeds Enthesitis Index:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{leedsEnthesitisIndexScore}</strong></div>
        <div className="flex justify-between"><span>IL-23 / IL-17 Targeted Biologic:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{interleukin23InhibitorActive}</strong></div>
      </div>
    </div>
  );
};
