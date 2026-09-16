import React from "react";

export interface IvcCollapsibilityIndexFluidProps {
  maxIvcDiameterCm: number;
  minIvcDiameterCm: number;
  cavalCollapsibilityIndexPercent: number;
  predictedFluidResponsiveness: string;
  className?: string;
}

export const IvcCollapsibilityIndexFluid: React.FC<IvcCollapsibilityIndexFluidProps> = ({
  maxIvcDiameterCm,
  minIvcDiameterCm,
  cavalCollapsibilityIndexPercent,
  predictedFluidResponsiveness,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Inferior Vena Cava (IVC) POCUS</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Hemodynamic POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Maximal IVC Diameter (Expiratory):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${maxIvcDiameterCm} cm`}</strong></div>
        <div className="flex justify-between"><span>Inspiratory Collapsed Diameter:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${minIvcDiameterCm} cm`}</strong></div>
        <div className="flex justify-between"><span>Caval Index (dMax-dMin)/dMax:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cavalCollapsibilityIndexPercent}% (&gt;50% responsive)`}</strong></div>
        <div className="flex justify-between"><span>CVP Volume Status Prediction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{predictedFluidResponsiveness}</strong></div>
      </div>
    </div>
  );
};
