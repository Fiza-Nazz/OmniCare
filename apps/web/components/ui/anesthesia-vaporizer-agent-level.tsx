import React from "react";

export interface AnesthesiaVaporizerAgentLevelProps {
  vaporizerAgent: string;
  fillPercentage: number;
  macFraction: number;
  interlockEngaged: string;
  className?: string;
}

export const AnesthesiaVaporizerAgentLevel: React.FC<AnesthesiaVaporizerAgentLevelProps> = ({
  vaporizerAgent,
  fillPercentage,
  macFraction,
  interlockEngaged,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Volatile Vaporizer Agent Level</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Anesthesia Vaporizer
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Volatile Liquid:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{vaporizerAgent}</strong></div>
        <div className="flex justify-between"><span>Sump Fill Level:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${fillPercentage}%`}</strong></div>
        <div className="flex justify-between"><span>Delivered MAC Depth:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${macFraction} MAC`}</strong></div>
        <div className="flex justify-between"><span>Mechanical Interlock:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{interlockEngaged}</strong></div>
      </div>
    </div>
  );
};
