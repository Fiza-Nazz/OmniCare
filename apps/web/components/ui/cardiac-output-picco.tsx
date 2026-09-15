import React from "react";

export interface CardiacOutputPiccoProps {
  cardiacOutputLpm: number;
  cardiacIndexLpmM2: number;
  svvPercent: number;
  evlwiMlKg: number;
  className?: string;
}

export const CardiacOutputPicco: React.FC<CardiacOutputPiccoProps> = ({
  cardiacOutputLpm,
  cardiacIndexLpmM2,
  svvPercent,
  evlwiMlKg,
  className = "",
}) => {
  const fluidResponsive = svvPercent > 13;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">PiCCO Advanced Hemodynamics</h4>
        <span className="rounded bg-blue-100 px-2 py-0.5 text-blue-800 font-bold">
          CI: {cardiacIndexLpmM2} L/min/m²
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Cardiac Output</span>
          <p className="font-bold text-base text-slate-800 dark:text-slate-200">{cardiacOutputLpm} L/min</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">SVV (%)</span>
          <p className={`font-bold text-base ${fluidResponsive ? "text-emerald-600" : "text-slate-800 dark:text-slate-200"}`}>{svvPercent}%</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">EVLWI</span>
          <p className="font-bold text-base text-slate-800 dark:text-slate-200">{evlwiMlKg} mL/kg</p>
        </div>
      </div>
    </div>
  );
};
