import React from "react";

export interface FluidBalanceCardProps {
  intakeOralMl: number;
  intakeIvMl: number;
  outputUrineMl: number;
  outputDrainsMl: number;
  periodHours?: number;
  className?: string;
}

export const FluidBalanceCard: React.FC<FluidBalanceCardProps> = ({
  intakeOralMl,
  intakeIvMl,
  outputUrineMl,
  outputDrainsMl,
  periodHours = 24,
  className = "",
}) => {
  const totalIntake = intakeOralMl + intakeIvMl;
  const totalOutput = outputUrineMl + outputDrainsMl;
  const netBalance = totalIntake - totalOutput;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Fluid Balance ({periodHours}h)</h4>
        <span className={`text-xs font-bold px-2 py-0.5 rounded ${netBalance >= 0 ? "bg-blue-100 text-blue-800" : "bg-amber-100 text-amber-800"}`}>
          Net: {netBalance > 0 ? "+" : ""}{netBalance} mL
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="rounded-lg bg-emerald-50 p-2.5 dark:bg-emerald-950/30">
          <span className="font-bold text-emerald-800 dark:text-emerald-300">Total Intake: {totalIntake} mL</span>
          <p className="text-[11px] text-emerald-600 mt-1">Oral: {intakeOralMl}mL • IV: {intakeIvMl}mL</p>
        </div>
        <div className="rounded-lg bg-rose-50 p-2.5 dark:bg-rose-950/30">
          <span className="font-bold text-rose-800 dark:text-rose-300">Total Output: {totalOutput} mL</span>
          <p className="text-[11px] text-rose-600 mt-1">Urine: {outputUrineMl}mL • Drains: {outputDrainsMl}mL</p>
        </div>
      </div>
    </div>
  );
};
