import React from "react";

export interface ContrastInducedNephropathyMehranProps {
  mehranRiskScore: number;
  cinRiskPercentage: number;
  isotonicSalineHydrationRate: string;
  contrastVolumeUsedMl: number;
  className?: string;
}

export const ContrastInducedNephropathyMehran: React.FC<ContrastInducedNephropathyMehranProps> = ({
  mehranRiskScore,
  cinRiskPercentage,
  isotonicSalineHydrationRate,
  contrastVolumeUsedMl,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Mehran Contrast Nephropathy Risk</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Contrast Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Composite Mehran Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${mehranRiskScore} Points`}</strong></div>
        <div className="flex justify-between"><span>Post-Contrast AKI Risk Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cinRiskPercentage}%`}</strong></div>
        <div className="flex justify-between"><span>Pre/Post Saline Hydration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{isotonicSalineHydrationRate}</strong></div>
        <div className="flex justify-between"><span>Iso-Osmolar Contrast Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${contrastVolumeUsedMl} mL`}</strong></div>
      </div>
    </div>
  );
};
