import React from "react";

export interface BubbleCpapTitrationProps {
  peepCmH2O: number;
  oxygenBlenderFiO2: number;
  flowRateLpm: number;
  prongsPositionAudit: string;
  className?: string;
}

export const BubbleCpapTitration: React.FC<BubbleCpapTitrationProps> = ({
  peepCmH2O,
  oxygenBlenderFiO2,
  flowRateLpm,
  prongsPositionAudit,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Bubble CPAP Titration Protocol</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          NICU Non-Invasive
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Bubble PEEP:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${peepCmH2O} cmH2O`}</strong></div>
        <div className="flex justify-between"><span>Blender FiO2:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${oxygenBlenderFiO2}%`}</strong></div>
        <div className="flex justify-between"><span>Gas Flow:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${flowRateLpm} L/min`}</strong></div>
        <div className="flex justify-between"><span>Prong Seal & Integrity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{prongsPositionAudit}</strong></div>
      </div>
    </div>
  );
};
