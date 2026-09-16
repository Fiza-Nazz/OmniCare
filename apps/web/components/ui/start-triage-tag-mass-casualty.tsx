import React from "react";

export interface StartTriageTagMassCasualtyProps {
  triageColorCategory: string;
  respiratoryRatePerMin: number;
  radialPulsePalpable: string;
  followsSimpleCommands: string;
  className?: string;
}

export const StartTriageTagMassCasualty: React.FC<StartTriageTagMassCasualtyProps> = ({
  triageColorCategory,
  respiratoryRatePerMin,
  radialPulsePalpable,
  followsSimpleCommands,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">START Adult Mass Casualty Triage</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          MCI Triage
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Disaster Triage Tag Tier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{triageColorCategory}</strong></div>
        <div className="flex justify-between"><span>Spontaneous Respiratory Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${respiratoryRatePerMin} /min (&gt;30 Red Immediate)`}</strong></div>
        <div className="flex justify-between"><span>Radial Pulse / Capillary Refill:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{radialPulsePalpable}</strong></div>
        <div className="flex justify-between"><span>Commands Compliance (Mental):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{followsSimpleCommands}</strong></div>
      </div>
    </div>
  );
};
