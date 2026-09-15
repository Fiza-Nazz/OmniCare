import React from "react";

export interface CoronaryArteryBypassGraftProps {
  conduitType: string;
  meanFlowMlMin: number;
  pulsatilityIndex: number;
  diastolicFillingPercent: number;
  className?: string;
}

export const CoronaryArteryBypassGraft: React.FC<CoronaryArteryBypassGraftProps> = ({
  conduitType,
  meanFlowMlMin,
  pulsatilityIndex,
  diastolicFillingPercent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CABG Conduit Flow & Patency</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cardiac Surgery
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Graft Conduit:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{conduitType}</strong></div>
        <div className="flex justify-between"><span>Transit-Time Flow (TTFM):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${meanFlowMlMin} mL/min`}</strong></div>
        <div className="flex justify-between"><span>Pulsatility Index (PI):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pulsatilityIndex}`}</strong></div>
        <div className="flex justify-between"><span>Diastolic Fraction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${diastolicFillingPercent}%`}</strong></div>
      </div>
    </div>
  );
};
