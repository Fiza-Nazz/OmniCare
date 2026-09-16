import React from "react";

export interface ArthrocentesisJointEffusionPocusProps {
  suprapatellarFluidPocketMm: number;
  synovialProliferationPannus: string;
  realTimeAspirationCompleted: string;
  synovialCrystalAnalysisSent: string;
  className?: string;
}

export const ArthrocentesisJointEffusionPocus: React.FC<ArthrocentesisJointEffusionPocusProps> = ({
  suprapatellarFluidPocketMm,
  synovialProliferationPannus,
  realTimeAspirationCompleted,
  synovialCrystalAnalysisSent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">POCUS-Guided Arthrocentesis</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Joint POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Suprapatellar Recess Fluid Depth:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${suprapatellarFluidPocketMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Inflammatory Synovial Hypertrophy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{synovialProliferationPannus}</strong></div>
        <div className="flex justify-between"><span>Dynamic Fluid Aspiration Yield:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{realTimeAspirationCompleted}</strong></div>
        <div className="flex justify-between"><span>Gram Stain & Crystal Workup:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{synovialCrystalAnalysisSent}</strong></div>
      </div>
    </div>
  );
};
