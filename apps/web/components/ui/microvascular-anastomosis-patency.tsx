import React from "react";

export interface MicrovascularAnastomosisPatencyProps {
  targetActSeconds: number;
  topicalPapaverineApplied: string;
  antiplateletAspirinInitiated: string;
  microvascularCouplerSizeMm: number;
  className?: string;
}

export const MicrovascularAnastomosisPatency: React.FC<MicrovascularAnastomosisPatencyProps> = ({
  targetActSeconds,
  topicalPapaverineApplied,
  antiplateletAspirinInitiated,
  microvascularCouplerSizeMm,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Microvascular Anastomosis Patency Protocol</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Microsurgical Nursing
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Target ACT / aPTT:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${targetActSeconds} s`}</strong></div>
        <div className="flex justify-between"><span>Topical Papaverine Spasmolysis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{topicalPapaverineApplied}</strong></div>
        <div className="flex justify-between"><span>Aspirin 81mg Daily:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{antiplateletAspirinInitiated}</strong></div>
        <div className="flex justify-between"><span>Venous Coupler Size:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${microvascularCouplerSizeMm} mm`}</strong></div>
      </div>
    </div>
  );
};
