import React from "react";

export interface NeonatalBloodGasAnalyzerProps {
  bloodGasType: string;
  measuredPh: number;
  baseDeficitMeqPerL: number;
  lactateMmolPerL: number;
  className?: string;
}

export const NeonatalBloodGasAnalyzer: React.FC<NeonatalBloodGasAnalyzerProps> = ({
  bloodGasType,
  measuredPh,
  baseDeficitMeqPerL,
  lactateMmolPerL,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Neonatal Blood Gas & Base Deficit</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Point of Care Lab
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Sample Source:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bloodGasType}</strong></div>
        <div className="flex justify-between"><span>Blood pH:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{measuredPh}</strong></div>
        <div className="flex justify-between"><span>Base Excess / Deficit:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${baseDeficitMeqPerL} mEq/L`}</strong></div>
        <div className="flex justify-between"><span>Serum Lactate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lactateMmolPerL} mmol/L`}</strong></div>
      </div>
    </div>
  );
};
