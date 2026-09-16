import React from "react";

export interface GalvestonPediatricBurnFormulaProps {
  totalBodySurfaceAreaM2: number;
  burnAreaM2: number;
  pediatricFluidRateMlHr: number;
  urineOutputGoalMlKgHr: string;
  className?: string;
}

export const GalvestonPediatricBurnFormula: React.FC<GalvestonPediatricBurnFormulaProps> = ({
  totalBodySurfaceAreaM2,
  burnAreaM2,
  pediatricFluidRateMlHr,
  urineOutputGoalMlKgHr,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Galveston Pediatric Burn Resuscitation</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pediatric Burn Care
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Total Body Surface Area:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalBodySurfaceAreaM2} m²`}</strong></div>
        <div className="flex justify-between"><span>Burned Surface Area:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${burnAreaM2} m²`}</strong></div>
        <div className="flex justify-between"><span>Initial Fluid Infusion Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pediatricFluidRateMlHr} mL/hr`}</strong></div>
        <div className="flex justify-between"><span>Pediatric Target Diuresis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{urineOutputGoalMlKgHr}</strong></div>
      </div>
    </div>
  );
};
