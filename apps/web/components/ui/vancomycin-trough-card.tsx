import React from "react";

export interface VancomycinTroughCardProps {
  troughLevelMcgMl: number;
  drawTimestamp: string;
  targetRange?: string;
  serumCreatinineMgDl: number;
  className?: string;
}

export const VancomycinTroughCard: React.FC<VancomycinTroughCardProps> = ({
  troughLevelMcgMl,
  drawTimestamp,
  targetRange = "15 - 20 mcg/mL (Severe)",
  serumCreatinineMgDl,
  className = "",
}) => {
  const isToxic = troughLevelMcgMl > 20;

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${isToxic ? "border-rose-400 bg-rose-50 dark:border-rose-800" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">Vancomycin Therapeutic TDM</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isToxic ? "bg-rose-600 text-white" : "bg-blue-100 text-blue-800"}`}>
          Trough: {troughLevelMcgMl} mcg/mL
        </span>
      </div>
      <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
        <p>• Target Range: {targetRange}</p>
        <p>• Serum Creatinine: <strong className="text-slate-800 dark:text-slate-200">{serumCreatinineMgDl} mg/dL</strong> (Renal Function)</p>
        <time className="block text-[11px] text-slate-400">Drawn on: {drawTimestamp}</time>
      </div>
    </div>
  );
};
