import React from "react";

export interface UvcInsertionDepthCalculatorProps {
  shoulderUmbilicusDistanceCm: number;
  calculatedInsertionDepthCm: number;
  xrayTipLocationConfirmed: string;
  parenteralNutritionApproved: string;
  className?: string;
}

export const UvcInsertionDepthCalculator: React.FC<UvcInsertionDepthCalculatorProps> = ({
  shoulderUmbilicusDistanceCm,
  calculatedInsertionDepthCm,
  xrayTipLocationConfirmed,
  parenteralNutritionApproved,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Umbilical Venous Catheter (UVC) Depth</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          NICU Vascular Access
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Shoulder-Umbilicus Span:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${shoulderUmbilicusDistanceCm} cm`}</strong></div>
        <div className="flex justify-between"><span>Target Depth:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedInsertionDepthCm} cm`}</strong></div>
        <div className="flex justify-between"><span>X-Ray Tip Location:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{xrayTipLocationConfirmed}</strong></div>
        <div className="flex justify-between"><span>TPN Infusion Clear:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{parenteralNutritionApproved}</strong></div>
      </div>
    </div>
  );
};
