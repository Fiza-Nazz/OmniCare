import React from "react";

export interface AnesthesiaEmergenceDeliriumProps {
  emergenceScaleScore: number;
  physicalThrashing: string;
  airwayProtectionIntact: string;
  deescalationMethod: string;
  className?: string;
}

export const AnesthesiaEmergenceDelirium: React.FC<AnesthesiaEmergenceDeliriumProps> = ({
  emergenceScaleScore,
  physicalThrashing,
  airwayProtectionIntact,
  deescalationMethod,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">PACU Emergence Delirium</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          PACU Agitation
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Delirium Scale Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${emergenceScaleScore} / 20`}</strong></div>
        <div className="flex justify-between"><span>Thrashing / Restlessness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{physicalThrashing}</strong></div>
        <div className="flex justify-between"><span>Airway Reflex Protection:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{airwayProtectionIntact}</strong></div>
        <div className="flex justify-between"><span>Calming Intervention:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{deescalationMethod}</strong></div>
      </div>
    </div>
  );
};
