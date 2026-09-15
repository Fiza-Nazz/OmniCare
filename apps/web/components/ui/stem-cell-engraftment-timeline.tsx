import React from "react";

export interface StemCellEngraftmentTimelineProps {
  daysPostTransplant: number;
  consecutiveAncOver500: number;
  plateletCountTransfusionFree: number;
  engraftmentStatus: string;
  className?: string;
}

export const StemCellEngraftmentTimeline: React.FC<StemCellEngraftmentTimelineProps> = ({
  daysPostTransplant,
  consecutiveAncOver500,
  plateletCountTransfusionFree,
  engraftmentStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">HSCT Engraftment Tracking</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          BMT Engraftment
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Transplant Day (Day +X):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`Day +${daysPostTransplant}`}</strong></div>
        <div className="flex justify-between"><span>ANC &gt; 500 Consecutive Days:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${consecutiveAncOver500} Days`}</strong></div>
        <div className="flex justify-between"><span>Transfusion-Independent Platelets:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${plateletCountTransfusionFree}k /µL`}</strong></div>
        <div className="flex justify-between"><span>Myeloid Engraftment:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{engraftmentStatus}</strong></div>
      </div>
    </div>
  );
};
