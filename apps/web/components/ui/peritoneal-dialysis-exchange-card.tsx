import React from "react";

export interface PeritonealDialysisExchangeCardProps {
  fillVolumeMl: number;
  drainVolumeMl: number;
  dextrosePercent: string;
  effluentClarity: string;
  className?: string;
}

export const PeritonealDialysisExchangeCard: React.FC<PeritonealDialysisExchangeCardProps> = ({
  fillVolumeMl,
  drainVolumeMl,
  dextrosePercent,
  effluentClarity,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Peritoneal Dialysis Exchange</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          PD Exchange
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Fill Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${fillVolumeMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Drain Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${drainVolumeMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Dextrose Concentration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dextrosePercent}</strong></div>
        <div className="flex justify-between"><span>Effluent Clarity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{effluentClarity}</strong></div>
      </div>
    </div>
  );
};
