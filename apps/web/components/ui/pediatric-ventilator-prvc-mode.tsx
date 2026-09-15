import React from "react";

export interface PediatricVentilatorPrvcModeProps {
  targetVtMl: number;
  deliveredVtMl: number;
  peakPressureCmH2O: number;
  peepCmH2O: number;
  className?: string;
}

export const PediatricVentilatorPrvcMode: React.FC<PediatricVentilatorPrvcModeProps> = ({
  targetVtMl,
  deliveredVtMl,
  peakPressureCmH2O,
  peepCmH2O,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">PICU PRVC Ventilation</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Mechanical Vent
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Set Target Tidal Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${targetVtMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Delivered Vt:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${deliveredVtMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Peak Inspiratory Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${peakPressureCmH2O} cmH2O`}</strong></div>
        <div className="flex justify-between"><span>Applied PEEP:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${peepCmH2O} cmH2O`}</strong></div>
      </div>
    </div>
  );
};
