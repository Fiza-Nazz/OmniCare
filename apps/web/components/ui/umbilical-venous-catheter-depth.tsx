import React from "react";

export interface UmbilicalVenousCatheterDepthProps {
  depthCm: number;
  tipTargetLevel: string;
  bloodReturnVerified: string;
  infusionReady: string;
  className?: string;
}

export const UmbilicalVenousCatheterDepth: React.FC<UmbilicalVenousCatheterDepthProps> = ({
  depthCm,
  tipTargetLevel,
  bloodReturnVerified,
  infusionReady,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Umbilical Venous Line (UVC)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          UVC Position
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Catheter Insertion Depth:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${depthCm} cm`}</strong></div>
        <div className="flex justify-between"><span>Target Anatomy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{tipTargetLevel}</strong></div>
        <div className="flex justify-between"><span>Free Blood Return:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bloodReturnVerified}</strong></div>
        <div className="flex justify-between"><span>Line Clearance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{infusionReady}</strong></div>
      </div>
    </div>
  );
};
