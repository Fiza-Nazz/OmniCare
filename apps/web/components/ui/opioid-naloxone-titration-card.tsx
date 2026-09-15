import React from "react";

export interface OpioidNaloxoneTitrationCardProps {
  respiratoryRateBpm: number;
  pinpointPupils: string;
  naloxoneDoseMg: number;
  repeatDoseIntervalMin: number;
  className?: string;
}

export const OpioidNaloxoneTitrationCard: React.FC<OpioidNaloxoneTitrationCardProps> = ({
  respiratoryRateBpm,
  pinpointPupils,
  naloxoneDoseMg,
  repeatDoseIntervalMin,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Opioid Overdose Naloxone Titration</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Opioid Rescue
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Pre-Rescue Resp Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${respiratoryRateBpm} bpm`}</strong></div>
        <div className="flex justify-between"><span>Miosis / Pinpoint Pupils:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pinpointPupils}</strong></div>
        <div className="flex justify-between"><span>Delivered Naloxone Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${naloxoneDoseMg} mg IV/IN`}</strong></div>
        <div className="flex justify-between"><span>Titration Re-evaluation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${repeatDoseIntervalMin} min`}</strong></div>
      </div>
    </div>
  );
};
