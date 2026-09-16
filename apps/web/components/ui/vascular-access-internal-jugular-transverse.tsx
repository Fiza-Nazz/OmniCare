import React from "react";

export interface VascularAccessInternalJugularTransverseProps {
  carotidArteryPulsatileSeparate: string;
  ijVeinCompressionComplete: string;
  realTimeNeedleTipEntryFlash: string;
  postProcedurePneumothoraxExcluded: string;
  className?: string;
}

export const VascularAccessInternalJugularTransverse: React.FC<VascularAccessInternalJugularTransverseProps> = ({
  carotidArteryPulsatileSeparate,
  ijVeinCompressionComplete,
  realTimeNeedleTipEntryFlash,
  postProcedurePneumothoraxExcluded,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Ultrasound-Guided Internal Jugular Line</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Vascular Access
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Carotid Artery Distinguishability:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{carotidArteryPulsatileSeparate}</strong></div>
        <div className="flex justify-between"><span>Internal Jugular Coaptation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ijVeinCompressionComplete}</strong></div>
        <div className="flex justify-between"><span>Direct Needle Tip Anterior Venipuncture:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{realTimeNeedleTipEntryFlash}</strong></div>
        <div className="flex justify-between"><span>Post-Cannulation Lung Slide Verified:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{postProcedurePneumothoraxExcluded}</strong></div>
      </div>
    </div>
  );
};
