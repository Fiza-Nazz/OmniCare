import React from "react";

export interface PediatricPainFlaccScaleProps {
  faceScore: number;
  legsScore: number;
  activityScore: number;
  cryScore: number;
  consolabilityScore: number;
  totalFlacc: number;
  className?: string;
}

export const PediatricPainFlaccScale: React.FC<PediatricPainFlaccScaleProps> = ({
  faceScore,
  legsScore,
  activityScore,
  cryScore,
  consolabilityScore,
  totalFlacc,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">FLACC Pediatric Pain Scale</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pain Scale
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Face / Grimace:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${faceScore} / 2`}</strong></div>
        <div className="flex justify-between"><span>Legs / Posture:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${legsScore} / 2`}</strong></div>
        <div className="flex justify-between"><span>Activity / Restlessness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${activityScore} / 2`}</strong></div>
        <div className="flex justify-between"><span>Total FLACC Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalFlacc} / 10`}</strong></div>
      </div>
    </div>
  );
};
