import React from "react";

export interface PediatricEcmoCannulationCircuitProps {
  ecmoModality: string;
  cardiacIndexSupportMlKgMin: number;
  sweepGasFlowLMin: number;
  actSecondsTarget: number;
  className?: string;
}

export const PediatricEcmoCannulationCircuit: React.FC<PediatricEcmoCannulationCircuitProps> = ({
  ecmoModality,
  cardiacIndexSupportMlKgMin,
  sweepGasFlowLMin,
  actSecondsTarget,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Pediatric ECMO Cannulation Circuit</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pediatric ECMO
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Extracorporeal Circuit Modality:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ecmoModality}</strong></div>
        <div className="flex justify-between"><span>Delivered Cardiac Support Flow:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cardiacIndexSupportMlKgMin} mL/kg/min`}</strong></div>
        <div className="flex justify-between"><span>Oxygenator Sweep Gas Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${sweepGasFlowLMin} L/min`}</strong></div>
        <div className="flex justify-between"><span>Continuous Heparin ACT Goal:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${actSecondsTarget}s (180-200s)`}</strong></div>
      </div>
    </div>
  );
};
