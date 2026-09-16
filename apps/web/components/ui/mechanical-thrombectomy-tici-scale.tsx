import React from "react";

export interface MechanicalThrombectomyTiciScaleProps {
  mTiciReperfusionGrade: string;
  groinPunctureToRecanalizationMin: number;
  stentRetrieverPasses: number;
  distalEmbolizationObserved: string;
  className?: string;
}

export const MechanicalThrombectomyTiciScale: React.FC<MechanicalThrombectomyTiciScaleProps> = ({
  mTiciReperfusionGrade,
  groinPunctureToRecanalizationMin,
  stentRetrieverPasses,
  distalEmbolizationObserved,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Endovascular mTICI Reperfusion</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Thrombectomy
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Final Reperfusion Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{mTiciReperfusionGrade}</strong></div>
        <div className="flex justify-between"><span>Puncture-to-Revascularization:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${groinPunctureToRecanalizationMin} min`}</strong></div>
        <div className="flex justify-between"><span>Aspiration / Stent Passes:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${stentRetrieverPasses} Passes`}</strong></div>
        <div className="flex justify-between"><span>Distal Embolic Fragment:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{distalEmbolizationObserved}</strong></div>
      </div>
    </div>
  );
};
