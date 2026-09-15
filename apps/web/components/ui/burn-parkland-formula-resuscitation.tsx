import React from "react";

export interface BurnParklandFormulaResuscitationProps {
  weightKg: number;
  tbsaPercent: number;
  className?: string;
}

export const BurnParklandFormulaResuscitation: React.FC<BurnParklandFormulaResuscitationProps> = ({
  weightKg,
  tbsaPercent,
  className = "",
}) => {
  const total24HrVolumeMl = 4 * weightKg * tbsaPercent;
  const first8HrVolumeMl = total24HrVolumeMl / 2;
  const first8HrRateMlHr = first8HrVolumeMl / 8;
  const next16HrRateMlHr = first8HrVolumeMl / 16;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Parkland Burn Fluid Protocol</h4>
        <span className="font-mono font-bold text-blue-600">Total: {total24HrVolumeMl} mL LR</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-center">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">First 8 Hours</span>
          <p className="text-base font-bold text-blue-600">{first8HrRateMlHr.toFixed(0)} mL/hr</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Next 16 Hours</span>
          <p className="text-base font-bold text-slate-800 dark:text-slate-200">{next16HrRateMlHr.toFixed(0)} mL/hr</p>
        </div>
      </div>
    </div>
  );
};
