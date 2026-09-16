import React from "react";

export interface ExtendedFastLungSlidingPleuralProps {
  pleuralSlidingPresent: string;
  mModePatternDescription: string;
  lungPointLocationIdentified: string;
  emergentTubeThoracostomy: string;
  className?: string;
}

export const ExtendedFastLungSlidingPleural: React.FC<ExtendedFastLungSlidingPleuralProps> = ({
  pleuralSlidingPresent,
  mModePatternDescription,
  lungPointLocationIdentified,
  emergentTubeThoracostomy,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">eFAST Lung Sliding & Pneumothorax</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          eFAST Thoracic
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Visceral Pleural Sliding:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pleuralSlidingPresent}</strong></div>
        <div className="flex justify-between"><span>M-Mode Diagnostic Sign:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{mModePatternDescription}</strong></div>
        <div className="flex justify-between"><span>Pathognomonic Lung Point:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{lungPointLocationIdentified}</strong></div>
        <div className="flex justify-between"><span>Chest Decompression Need:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{emergentTubeThoracostomy}</strong></div>
      </div>
    </div>
  );
};
