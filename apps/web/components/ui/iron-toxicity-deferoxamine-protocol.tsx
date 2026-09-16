import React from "react";

export interface IronToxicityDeferoxamineProtocolProps {
  serumIronUgDl: number;
  radiopaquePillsOnKUB: number;
  deferoxamineInfusionRateMgKgHr: number;
  vinRoseUrineColorObserved: string;
  className?: string;
}

export const IronToxicityDeferoxamineProtocol: React.FC<IronToxicityDeferoxamineProtocolProps> = ({
  serumIronUgDl,
  radiopaquePillsOnKUB,
  deferoxamineInfusionRateMgKgHr,
  vinRoseUrineColorObserved,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Acute Iron Toxicity (Deferoxamine)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pediatric Toxicology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Peak Serum Iron:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumIronUgDl} µg/dL`}</strong></div>
        <div className="flex justify-between"><span>Pills on KUB:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{radiopaquePillsOnKUB}</strong></div>
        <div className="flex justify-between"><span>Deferoxamine Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${deferoxamineInfusionRateMgKgHr} mg/kg/hr`}</strong></div>
        <div className="flex justify-between"><span>Vin Rosé Urine:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{vinRoseUrineColorObserved}</strong></div>
      </div>
    </div>
  );
};
